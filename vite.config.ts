import { defineConfig, loadEnv, type Plugin } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite';

// Dev-only middleware: mirrors the /api/lead serverless function so that
// `npm run dev` can send quiz submissions to Telegram without exposing the
// bot token to the client bundle. In production the real serverless function
// (api/lead.ts) handles this and reads the token from server-side env vars.
function telegramDevProxy(env: Record<string, string>): Plugin {
  return {
    name: 'telegram-dev-proxy',
    apply: 'serve',
    configureServer(server) {
      server.middlewares.use('/api/lead', (req, res) => {
        if (req.method !== 'POST') {
          res.statusCode = 405;
          res.end(JSON.stringify({ error: 'Method not allowed' }));
          return;
        }

        const token = env.TELEGRAM_TOKEN || env.VITE_TELEGRAM_TOKEN;
        const chatId = env.TELEGRAM_CHAT_ID || env.VITE_TELEGRAM_CHAT_ID;

        if (!token || !chatId) {
          res.statusCode = 500;
          res.end(JSON.stringify({ error: 'Server is not configured' }));
          return;
        }

        const chunks: Uint8Array[] = [];
        req.on('data', (chunk: Uint8Array) => chunks.push(chunk));
        req.on('end', () => {
          void (async () => {
            try {
              const raw = Buffer.concat(chunks).toString() || '{}';
              const message = (JSON.parse(raw) as { message?: string }).message;

              if (!message || typeof message !== 'string') {
                res.statusCode = 400;
                res.end(JSON.stringify({ error: 'Missing message' }));
                return;
              }

              const tgResponse = await fetch(
                `https://api.telegram.org/bot${token}/sendMessage`,
                {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({
                    chat_id: chatId,
                    text: message,
                    parse_mode: 'Markdown',
                    disable_web_page_preview: true,
                  }),
                },
              );

              if (!tgResponse.ok) {
                const errorData = await tgResponse.json().catch(() => ({}));
                console.error('Telegram API error:', errorData);
                res.statusCode = 502;
                res.end(JSON.stringify({ error: 'Telegram send failed' }));
                return;
              }

              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ ok: true }));
            } catch (error) {
              console.error('Telegram request failed:', error);
              res.statusCode = 502;
              res.end(JSON.stringify({ error: 'Telegram request failed' }));
            }
          })();
        });
      });
    },
  };
}

// https://vite.dev
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [react(), tailwindcss(), telegramDevProxy(env)],
  };
});


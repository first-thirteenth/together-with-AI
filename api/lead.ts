interface LeadRequest {
  method?: string;
  body?: unknown;
}

interface LeadResponse {
  status: (code: number) => LeadResponse;
  json: (data: unknown) => void;
}

export default async function handler(
  req: LeadRequest,
  res: LeadResponse,
): Promise<void> {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const token = process.env.TELEGRAM_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    console.error("Telegram env vars are not configured on the server");
    res.status(500).json({ error: "Server is not configured" });
    return;
  }

  const rawBody = req.body;
  const parsed: unknown =
    typeof rawBody === "string" ? JSON.parse(rawBody || "{}") : rawBody;
  const message =
    parsed && typeof parsed === "object"
      ? (parsed as Record<string, unknown>).message
      : undefined;

  if (!message || typeof message !== "string") {
    res.status(400).json({ error: "Missing message" });
    return;
  }

  try {
    const tgResponse = await fetch(
      `https://api.telegram.org/bot${token}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
          parse_mode: "Markdown",
          disable_web_page_preview: true,
        }),
      },
    );

    if (!tgResponse.ok) {
      const errorData: unknown = await tgResponse.json().catch(() => ({}));
      console.error("Telegram API error:", errorData);
      res.status(502).json({ error: "Telegram send failed" });
      return;
    }

    res.status(200).json({ ok: true });
  } catch (error) {
    console.error("Telegram request failed:", error);
    res.status(502).json({ error: "Telegram request failed" });
  }
}

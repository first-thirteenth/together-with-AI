import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "../../context/useLang";
import { Cookie, X } from "lucide-react";

type ConsentStatus = "accepted" | "necessary" | null;
const STORAGE_KEY = "cookie-consent";

export function CookieBanner() {
  const { t } = useLang();
  const [status, setStatus] = useState<ConsentStatus | "pending">("pending");
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as ConsentStatus | null;
    setStatus(stored ?? null);
  }, []);

  function handleAccept() {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setStatus("accepted");
  }

  function handleNecessary() {
    localStorage.setItem(STORAGE_KEY, "necessary");
    setStatus("necessary");
  }

  const visible = status === null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 120, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 120, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 28 }}
          className="fixed bottom-4 left-1/2 z-[9999] w-[calc(100%-2rem)] max-w-2xl -translate-x-1/2
                     rounded-2xl border border-[#c5a880]/30 bg-[#1a1a2e]/95 backdrop-blur-md
                     shadow-[0_8px_40px_rgba(0,0,0,0.5)] dark:bg-[#1a1a2e]/95
                     light:bg-white/95 light:border-[#c5a880]/20"
          role="dialog"
          aria-label="Cookie consent"
        >
          <div className="p-5">
            {/* Header row */}
            <div className="mb-3 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <Cookie className="h-5 w-5 text-[#c5a880]" />
                <span className="font-semibold text-white dark:text-white text-[0.95rem]">
                  {t.cookie.title}
                </span>
              </div>
              <button
                onClick={handleNecessary}
                className="rounded-full p-1 text-white/40 transition-colors hover:text-white/80"
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Description */}
            <p className="mb-1 text-sm leading-relaxed text-white/70">
              {expanded ? t.cookie.text : `${t.cookie.text.slice(0, 100)}...`}
            </p>
            <button
              onClick={() => setExpanded((v) => !v)}
              className="mb-4 text-xs text-[#c5a880] underline-offset-2 hover:underline"
            >
              {expanded ? "↑" : t.cookie.learnMore}
            </button>

            {/* Buttons */}
            <div className="flex flex-col gap-2 sm:flex-row sm:justify-end">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={handleNecessary}
                className="rounded-xl border border-white/20 px-4 py-2 text-sm font-medium text-white/80
                           transition-colors hover:border-white/40 hover:text-white"
              >
                {t.cookie.acceptNecessary}
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={handleAccept}
                className="rounded-xl bg-[#c5a880] px-5 py-2 text-sm font-semibold text-[#0d0d1a]
                           transition-opacity hover:opacity-90 active:opacity-80"
              >
                {t.cookie.acceptAll}
              </motion.button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

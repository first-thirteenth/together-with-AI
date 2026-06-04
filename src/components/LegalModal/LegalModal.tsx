import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useLang } from "../../context/useLang";
import type { LegalDocSchema } from "../../context/translations";

interface Props {
  doc: "privacy" | "terms" | null;
  onClose: () => void;
}

export function LegalModal({ doc, onClose }: Props) {
  const { t } = useLang();

  const content: LegalDocSchema | null =
    doc === "privacy"
      ? t.legalModal.privacyPolicy
      : doc === "terms"
        ? t.legalModal.terms
        : null;

  useEffect(() => {
    if (!doc) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [doc]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <AnimatePresence>
      {doc && content && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[9998] bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.97 }}
            transition={{ type: "spring", stiffness: 280, damping: 28 }}
            className="fixed inset-x-4 bottom-0 top-[5vh] z-[9999] mx-auto flex max-w-2xl flex-col
                       overflow-hidden rounded-t-3xl
                       bg-cream-card dark:bg-emerald-medium
                       border border-gold-accent/20
                       shadow-[0_-8px_60px_rgba(0,0,0,0.3)]
                       sm:inset-x-auto sm:left-1/2 sm:-translate-x-1/2 sm:w-full sm:rounded-3xl sm:top-[5vh] sm:bottom-[5vh]"
            role="dialog"
            aria-modal="true"
          >
            {/* Gold accent line */}
            <div className="h-[2px] w-full shrink-0 bg-gradient-to-r from-transparent via-gold-accent to-transparent" />

            {/* Header */}
            <div className="flex shrink-0 items-center justify-between border-b border-gold-accent/15 px-6 py-4">
              <div>
                <h2 className="font-bold text-luxury-text dark:text-cream-bg text-base">
                  {content.title}
                </h2>
                <p className="mt-0.5 text-xs text-luxury-text/50 dark:text-cream-bg/50">
                  {content.lastUpdated}
                </p>
              </div>
              <button
                onClick={onClose}
                className="rounded-full p-2 text-luxury-text/40 dark:text-cream-bg/40
                           transition-colors hover:bg-gold-accent/10 hover:text-luxury-text dark:hover:text-cream-bg"
                aria-label={t.legalModal.close}
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Scrollable content */}
            <div className="flex-1 overflow-y-auto px-6 py-5 space-y-5">
              {content.sections.map((s) => (
                <div key={s.heading}>
                  <h3 className="mb-1.5 font-semibold text-sm text-luxury-text dark:text-cream-bg">
                    {s.heading}
                  </h3>
                  <p className="text-sm leading-relaxed text-luxury-text/70 dark:text-cream-bg/65">
                    {s.body}
                  </p>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="shrink-0 border-t border-gold-accent/15 px-6 py-4">
              <button
                onClick={onClose}
                className="w-full rounded-xl bg-gold-accent py-2.5 text-sm font-semibold
                           text-emerald-luxury transition-colors hover:bg-gold-hover"
              >
                {t.legalModal.close}
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

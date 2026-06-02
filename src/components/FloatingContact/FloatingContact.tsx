import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, X } from "lucide-react";
import { CONTACTS } from "../../config/contacts";
import { useLang } from "../../context/useLang";

export const FloatingContact = () => {
  const { t } = useLang();
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (isDismissed) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-2"
        >
          {/* Dismiss button */}
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            onClick={() => setIsDismissed(true)}
            className="w-6 h-6 rounded-full bg-luxury-text/10 dark:bg-cream-bg/10 hover:bg-luxury-text/20 dark:hover:bg-cream-bg/20 flex items-center justify-center text-luxury-text/40 dark:text-cream-bg/40 hover:text-luxury-text/80 dark:hover:text-cream-bg/80 transition-colors cursor-pointer self-start mt-1"
            aria-label="Close"
          >
            <X size={10} />
          </motion.button>

          {/* Main button */}
          <a
            href={CONTACTS.telegram}
            target="_blank"
            rel="noreferrer"
            className="group relative flex items-center gap-3 bg-emerald-luxury dark:bg-gold-accent text-cream-bg dark:text-emerald-luxury font-semibold pl-4 pr-5 py-3 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer overflow-hidden"
            aria-label={t.header.telegramTitle}
          >
            {/* Shine effect */}
            <span className="absolute top-0 -inset-full h-full w-1/2 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-[shine_0.8s_ease-in-out]" />

            <Send
              size={16}
              className="transform rotate-45 flex-shrink-0 relative z-10"
            />
            <span className="text-sm relative z-10">
              {t.floatingContact.label}
            </span>

            {/* Pulse ring */}
            <span className="absolute inset-0 rounded-2xl ring-2 ring-gold-accent/40 dark:ring-emerald-luxury/40 animate-ping opacity-30 pointer-events-none" />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

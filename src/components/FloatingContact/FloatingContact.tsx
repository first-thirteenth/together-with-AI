import { useState, useEffect } from "react";
import { motion, AnimatePresence, useAnimate } from "framer-motion";
import { Send, Coffee } from "lucide-react";
import { CONTACTS } from "../../config/contacts";
import { useLang } from "../../context/useLang";

export const FloatingContact = () => {
  const { t } = useLang();
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [showCoffeeTooltip, setShowCoffeeTooltip] = useState(false);
  const [coffeeScope, coffeeAnimate] = useAnimate();

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Wiggle loop: spin in on mount, then wiggle every 4s
  useEffect(() => {
    if (!isVisible || isDismissed) return;

    let cancelled = false;

    const runLoop = async () => {
      await new Promise((r) => setTimeout(r, 600));
      while (!cancelled) {
        await coffeeAnimate(
          coffeeScope.current,
          { rotate: [0, -18, 18, -12, 12, -6, 6, 0] },
          { duration: 0.7, ease: "easeInOut" },
        );
        await new Promise((r) => setTimeout(r, 4000));
      }
    };

    runLoop();
    return () => {
      cancelled = true;
    };
  }, [isVisible, isDismissed, coffeeAnimate, coffeeScope]);

  if (isDismissed) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3"
        >
          {/* Coffee button — round with tooltip and wiggle */}
          <motion.div
            initial={{ opacity: 0, scale: 0, rotate: -180 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 0.15, type: "spring", stiffness: 280, damping: 14 }}
            className="relative"
            onMouseEnter={() => setShowCoffeeTooltip(true)}
            onMouseLeave={() => setShowCoffeeTooltip(false)}
          >
            {/* Tooltip */}
            <AnimatePresence>
              {showCoffeeTooltip && (
                <motion.span
                  initial={{ opacity: 0, x: 8 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 8 }}
                  transition={{ duration: 0.18 }}
                  className="absolute right-14 top-1/2 -translate-y-1/2 whitespace-nowrap text-xs font-semibold px-3 py-1.5 rounded-xl shadow-md
                    bg-gold-accent text-emerald-luxury
                    dark:bg-emerald-medium dark:text-gold-accent
                    pointer-events-none"
                >
                  {t.floatingContact.coffeeLabel}
                  <span className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-0 h-0
                    border-t-[6px] border-t-transparent
                    border-b-[6px] border-b-transparent
                    border-l-[6px] border-l-gold-accent
                    dark:border-l-emerald-medium" />
                </motion.span>
              )}
            </AnimatePresence>

            <a
              ref={coffeeScope}
              href={CONTACTS.buycoffee}
              target="_blank"
              rel="noreferrer"
              aria-label={t.floatingContact.coffeeLabel}
              className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg
                bg-gold-accent text-emerald-luxury
                dark:bg-emerald-medium dark:text-gold-accent
                hover:scale-110 active:scale-95
                transition-[transform,box-shadow] duration-300 hover:shadow-xl
                will-change-[transform]"
            >
              <Coffee size={20} strokeWidth={2} />
            </a>
          </motion.div>

          {/* Telegram button row with dismiss */}
          <div className="flex items-center gap-2">
            <motion.button
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              onClick={() => setIsDismissed(true)}
              className="w-6 h-6 rounded-full bg-luxury-text/10 dark:bg-cream-bg/10 hover:bg-luxury-text/20 dark:hover:bg-cream-bg/20 flex items-center justify-center text-luxury-text/40 dark:text-cream-bg/40 hover:text-luxury-text/80 dark:hover:text-cream-bg/80 transition-colors cursor-pointer self-start mt-1"
              aria-label="Close"
            >
              <span className="text-[10px] leading-none">✕</span>
            </motion.button>

            <a
              href={CONTACTS.telegram}
              target="_blank"
              rel="noreferrer"
              className="group relative flex items-center gap-3 bg-emerald-luxury dark:bg-gold-accent text-cream-bg dark:text-emerald-luxury font-semibold pl-4 pr-5 py-3 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer overflow-hidden"
              aria-label={t.header.telegramTitle}
            >
              <span className="absolute top-0 -inset-full h-full w-1/2 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-[shine_0.8s_ease-in-out]" />
              <Send size={16} className="transform rotate-45 flex-shrink-0 relative z-10" />
              <span className="text-sm relative z-10">{t.floatingContact.label}</span>
              <span className="absolute inset-0 rounded-2xl ring-2 ring-gold-accent/40 dark:ring-emerald-luxury/40 animate-ping opacity-30 pointer-events-none" />
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

import { useState, useEffect } from "react";
import {
  Feather,
  Menu,
  X,
  Phone,
  Send,
  Moon,
  Sun,
  ChevronDown,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { useLang } from "../../context/useLang";
import type { LanguageCode } from "../../context/translations";
import { CONTACTS } from "../../config/contacts";

// Премиум-флаги в виде легких векторных SVG
const FlagIcon = ({ code }: { code: LanguageCode }) => {
  if (code === "RU") {
    return (
      <svg
        className="w-4 h-3 rounded-sm shadow-sm object-cover flex-shrink-0"
        viewBox="0 0 9 6"
      >
        <rect width="9" height="2" fill="#fff" />
        <rect y="2" width="9" height="2" fill="#0039a6" />
        <rect y="4" width="9" height="2" fill="#d52b1e" />
      </svg>
    );
  }
  if (code === "PL") {
    return (
      <svg
        className="w-4 h-3 rounded-sm shadow-sm object-cover flex-shrink-0 border border-black/5 dark:border-white/10"
        viewBox="0 0 16 10"
      >
        <rect width="16" height="5" fill="#fff" />
        <rect y="5" width="16" height="5" fill="#dc143c" />
      </svg>
    );
  }
  if (code === "EN") {
    return (
      <svg
        className="w-4 h-3 rounded-sm shadow-sm object-cover flex-shrink-0"
        viewBox="0 0 50 30"
      >
        <clipPath id="t">
          <path d="M0 0v30h50V0z" />
        </clipPath>
        <g clipPath="url(#t)">
          <path d="M0 0v30h50V0z" fill="#012169" />
          <path d="M0 0l50 30M50 0L0 30" stroke="#fff" strokeWidth="6" />
          <path d="M0 0l50 30M50 0L0 30" stroke="#C8102E" strokeWidth="4" />
          <path d="M25 0v30M0 15h50" stroke="#fff" strokeWidth="10" />
          <path d="M25 0v30M0 15h50" stroke="#C8102E" strokeWidth="6" />
        </g>
      </svg>
    );
  }
  if (code === "UA") {
    return (
      <svg
        className="w-4 h-3 rounded-sm shadow-sm object-cover flex-shrink-0"
        viewBox="0 0 3 2"
      >
        <rect width="3" height="1" fill="#0057b7" />
        <rect y="1" width="3" height="1" fill="#ffd700" />
      </svg>
    );
  }
  return null;
};

export const Header = () => {
  const { lang, setLang, t } = useLang();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isPhoneHighlighted, setIsPhoneHighlighted] = useState(false);

  // Инициализируем стейт сразу из localStorage, чтобы избежать мигания темы
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "dark";
  });
  // Следим за скроллом для эффекта "парения" шапки
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Синхронизируем состояние с тегом HTML
  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  // Интерактивный звонок с локализованным подтверждением
  const handleCallClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const confirmCall = window.confirm(t.header.callConfirm);
    if (confirmCall) {
      window.location.href = `tel:${CONTACTS.phoneRaw}`;
    }
  };

  // Кнопка "Консультация" — подсвечиваем телефон на 2.5s
  const handleConsultationClick = () => {
    setIsPhoneHighlighted(true);
    setTimeout(() => setIsPhoneHighlighted(false), 2500);
  };

  // Массив языков для селектора
  const languages: { code: LanguageCode; name: string }[] = [
    { code: "EN", name: "EN" },
    { code: "PL", name: "PL" },
    { code: "RU", name: "RU" },
    { code: "UA", name: "UA" },
  ];

  // Динамическая навигация, подключенная к i18n словарям
  const navigation = [
    { name: t.header.main, href: "#" },
    { name: t.header.about, href: "#about" },
    { name: t.header.services, href: "#services" },
    { name: t.header.reviews, href: "#reviews" },
  ];

  return (
    <div
      className={`fixed left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "top-3 px-4 sm:px-6 lg:px-8" : "top-0 px-0"}`}
    >
      <nav
        className={`max-w-7xl mx-auto transition-all duration-300 relative border ${
          isScrolled
            ? "bg-cream-bg/90 dark:bg-emerald-luxury/90 backdrop-blur-md border-gold-accent/20 h-16 rounded-2xl shadow-md"
            : "bg-cream-bg dark:bg-emerald-luxury h-24 border-transparent shadow-none"
        }`}
      >
        <div className="px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex items-center justify-between h-full">
            {/* Логотип */}
            <div
              className="flex items-center gap-2.5 cursor-pointer"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <div className="p-2 bg-gold-accent/10 rounded-lg text-gold-hover">
                <Feather size={20} />
              </div>
              <div>
                <span className="font-bold text-emerald-luxury dark:text-cream-bg tracking-tight block text-sm sm:text-base transition-colors duration-300">
                  {t.footer.headerBrand}
                </span>
                <span className="text-[10px] text-gold-hover block font-medium uppercase tracking-widest -mt-0.5">
                  {t.footer.brandSubtitle}
                </span>
              </div>
            </div>

            {/* Навигация (Десктоп) */}
            <div className="hidden xl:flex items-center gap-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-luxury-text/80 dark:text-cream-bg/80 hover:text-gold-hover dark:hover:text-gold-accent transition-colors duration-200 relative group py-2"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold-accent transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>

            {/* Контакты + Языки + Тема + Кнопка (Десктоп) */}
            <div className="hidden xl:flex items-center gap-6">
              {/* Переключатель языков (Десктоп) */}
              <div className="relative">
                <button
                  onClick={() => setIsLangOpen(!isLangOpen)}
                  className="text-xs font-medium text-luxury-text/70 dark:text-cream-bg/70 hover:text-gold-hover dark:hover:text-gold-accent flex items-center gap-2 transition-colors cursor-pointer select-none"
                >
                  <FlagIcon code={lang} />
                  <span className="tracking-wide">{lang}</span>
                  <ChevronDown
                    size={12}
                    className={`transition-transform duration-200 ${isLangOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {isLangOpen && (
                  <div className="absolute right-0 mt-2 w-32 bg-cream-bg dark:bg-emerald-luxury border border-gold-accent/20 rounded-xl shadow-lg py-1 z-50">
                    {languages.map((item) => (
                      <motion.button
                        key={item.code}
                        whileTap={{ scale: 0.93 }}
                        transition={{ duration: 0.1 }}
                        onClick={() => {
                          setLang(item.code);
                          setIsLangOpen(false);
                        }}
                        className={`w-full text-left px-3 py-2 text-xs transition-colors hover:bg-gold-accent/10 cursor-pointer flex items-center gap-2 ${lang === item.code ? "text-gold-hover font-bold bg-gold-accent/5" : "text-luxury-text/80 dark:text-cream-bg/80"}`}
                      >
                        <FlagIcon code={item.code} />
                        <span>{item.name}</span>
                      </motion.button>
                    ))}
                  </div>
                )}
              </div>

              {/* Кнопка темы */}
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="p-2 text-luxury-text/70 dark:text-cream-bg/70 hover:text-gold-hover dark:hover:text-gold-accent transition-colors cursor-pointer rounded-lg hover:bg-gold-accent/5 flex items-center justify-center"
                title={isDarkMode ? t.header.themeLight : t.header.themeDark}
              >
                {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button>

              {/* Реальный телефон Анастасии */}
              <motion.a
                href={`tel:${CONTACTS.phoneRaw}`}
                onClick={handleCallClick}
                animate={
                  isPhoneHighlighted
                    ? {
                        color: ["#b89a4e", "#d4af37", "#b89a4e"],
                        scale: [1, 1.08, 1.04, 1.08, 1],
                        textShadow: [
                          "0 0 0px #d4af3700",
                          "0 0 12px #d4af37aa",
                          "0 0 6px #d4af3766",
                          "0 0 14px #d4af37cc",
                          "0 0 0px #d4af3700",
                        ],
                      }
                    : { scale: 1, textShadow: "0 0 0px #d4af3700" }
                }
                transition={
                  isPhoneHighlighted
                    ? { duration: 2.2, ease: "easeInOut" }
                    : { duration: 0.4 }
                }
                className="text-xs font-semibold flex items-center gap-1.5 cursor-pointer text-luxury-text/60 dark:text-cream-bg/60 transition-colors duration-300"
              >
                <Phone size={12} />
                {CONTACTS.phoneDisplay}
              </motion.a>

              <a
                href={CONTACTS.telegram}
                target="_blank"
                rel="noreferrer"
                className="relative z-30 inline-flex items-center justify-center text-luxury-text/60 dark:text-cream-bg/60 hover:text-gold-hover dark:hover:text-gold-accent transition-colors p-2 cursor-pointer"
                title={t.header.telegramTitle}
              >
                <Send
                  size={16}
                  className="transform rotate-45 pointer-events-none"
                />
              </a>

              {/* Кнопка Консультация */}
              <button
                onClick={handleConsultationClick}
                className="relative overflow-hidden bg-emerald-luxury dark:bg-gold-accent text-cream-bg dark:text-emerald-luxury font-bold px-4 py-2 rounded-lg text-xs transition-all cursor-pointer shadow-sm group/btn"
              >
                <span className="absolute top-0 -inset-full h-full w-1/2 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover/btn:opacity-100 group-hover/btn:animate-[shine_0.8s_ease-in-out]" />
                <span className="relative z-10">{t.header.consultation}</span>
              </button>
            </div>
            {/* Правый блок мобилки */}
            <div className="flex items-center gap-2 xl:hidden">
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="p-2 text-luxury-text/80 dark:text-cream-bg/80 cursor-pointer"
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-luxury-text/80 dark:text-cream-bg/80 p-2 focus:outline-none cursor-pointer relative z-50"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.85,
                rotateX: -35,
                filter: "blur(20px)",
              }}
              animate={{
                opacity: 1,
                scale: 1,
                rotateX: 0,
                filter: "blur(0px)",
              }}
              exit={{
                opacity: 0,
                scale: 0.85,
                rotateX: -35,
                filter: "blur(20px)",
              }}
              transition={{ duration: 1.5, ease: [0.1, 1, 0.2, 1] }}
              style={{ transformOrigin: "top center", perspective: "1500px" }}
              className="absolute left-0 right-0 top-full mt-2 bg-cream-bg dark:bg-emerald-luxury/[0.98] backdrop-blur-sm border border-gold-accent/20 px-4 pt-4 pb-6 space-y-4 shadow-xl rounded-2xl xl:hidden z-50 will-change-[transform,opacity,filter]"
            >
              {/* Контейнер для ссылок навигации */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  visible: { transition: { staggerChildren: 0.04 } },
                }}
                className="flex flex-col gap-3"
              >
                {navigation.map((item) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    variants={{
                      hidden: { opacity: 0, x: -12 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="block text-base font-medium text-luxury-text/80 dark:text-cream-bg/80 hover:text-gold-hover py-1 transition-colors duration-200"
                  >
                    {item.name}
                  </motion.a>
                ))}
              </motion.div>

              {/* Блок контактов и языков, плавно поднимающийся снизу */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.12, duration: 0.45, ease: "easeOut" }}
                className="pt-4 border-t border-gold-accent/20 space-y-4"
              >
                {/* Телефон на мобилке */}
                <motion.a
                  href={`tel:${CONTACTS.phoneRaw}`}
                  onClick={handleCallClick}
                  animate={
                    isPhoneHighlighted
                      ? {
                          color: ["#b89a4e", "#d4af37", "#b89a4e", "#d4af37", "#b89a4e"],
                          backgroundColor: [
                            "rgba(212,175,55,0)",
                            "rgba(212,175,55,0.12)",
                            "rgba(212,175,55,0.06)",
                            "rgba(212,175,55,0.14)",
                            "rgba(212,175,55,0)",
                          ],
                          boxShadow: [
                            "0 0 0px rgba(212,175,55,0)",
                            "0 0 0 2px rgba(212,175,55,0.4)",
                            "0 0 0 1px rgba(212,175,55,0.2)",
                            "0 0 0 2px rgba(212,175,55,0.5)",
                            "0 0 0px rgba(212,175,55,0)",
                          ],
                        }
                      : {
                          color: "inherit",
                          backgroundColor: "rgba(212,175,55,0)",
                          boxShadow: "0 0 0px rgba(212,175,55,0)",
                        }
                  }
                  transition={
                    isPhoneHighlighted
                      ? { duration: 2.2, ease: "easeInOut" }
                      : { duration: 0.4 }
                  }
                  className="flex items-center gap-2 text-sm cursor-pointer text-luxury-text/60 dark:text-cream-bg/60 rounded-lg px-2 py-1 -mx-2 -my-1"
                >
                  <Phone size={14} />
                  {CONTACTS.phoneDisplay}
                </motion.a>

                {/* Мобильный селектор языков */}
                <div className="space-y-1.5">
                  <span className="text-xs text-luxury-text/40 dark:text-cream-bg/40 block">
                    {t.header.langSelect}:
                  </span>
                  <div className="grid grid-cols-2 gap-2">
                    {languages.map((item) => (
                      <motion.button
                        key={item.code}
                        whileTap={{ scale: 0.9, opacity: 0.8 }}
                        transition={{ duration: 0.12 }}
                        onClick={() => {
                          setLang(item.code);
                          setIsOpen(false);
                        }}
                        className={`text-xs py-2 rounded-xl border px-3 transition-colors cursor-pointer flex items-center justify-center gap-2 ${
                          lang === item.code
                            ? "border-gold-accent bg-gold-accent/10 text-gold-hover font-bold"
                            : "border-gold-accent/10 text-luxury-text/70 dark:text-cream-bg/70"
                        }`}
                      >
                        <FlagIcon code={item.code} />
                        <span className="tracking-wider">{item.name}</span>
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* Мессенджеры на мобилке */}
                <div className="grid grid-cols-2 gap-2 pt-1">
                  <a
                    href={CONTACTS.telegram}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => setIsOpen(false)}
                    className="bg-cream-card dark:bg-emerald-medium text-luxury-text/80 dark:text-cream-bg text-center py-2.5 rounded-lg text-xs font-medium border border-gold-accent/10 flex items-center justify-center cursor-pointer"
                  >
                    Telegram
                  </a>
                  <button
                    onClick={handleConsultationClick}
                    className="bg-gold-accent text-emerald-luxury text-center py-2.5 rounded-lg text-xs font-bold cursor-pointer active:scale-95 transition-transform"
                  >
                    {t.header.consultation}
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
};

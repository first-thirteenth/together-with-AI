import { useState, useEffect } from 'react';
import { Feather, Menu, X, Phone, Send, Moon, Sun, Globe, ChevronDown } from 'lucide-react';

// Сеньорские импорты, разделенные по файлам для поддержки Fast Refresh и verbatimModuleSyntax
import { useLang } from '../../context/useLang';
import type { LanguageCode } from '../../context/translations';

export const Header = () => {
  const { lang, setLang, t } = useLang();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isPhoneHighlighted, setIsPhoneHighlighted] = useState(false);
  
  // Инициализируем стейт сразу из localStorage, чтобы избежать мигания темы
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark';
  });

  // Следим за скроллом для эффекта "парения" шапки
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Синхронизируем состояние с тегом HTML
  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  // Интерактивный звонок с локализованным подтверждением
  const handleCallClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const confirmCall = window.confirm(t.header.callConfirm);
    if (confirmCall) {
      window.location.href = "tel:+48571053915";
    }
  };

  // Эффект подсветки номера телефона при клике на "Консультация"
  const handleConsultationClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsPhoneHighlighted(true);
    setTimeout(() => {
      setIsPhoneHighlighted(false);
    }, 2500);
  };

  // Массив языков для рендеринга в селекторах
  const languages: { code: LanguageCode; name: string }[] = [
    { code: 'EN', name: 'English' },
    { code: 'PL', name: 'Polski' },
    { code: 'RU', name: 'Русский' },
    { code: 'UA', name: 'Українська' }
  ];

  // Динамическая навигация, подключенная к i18n словарям
  const navigation = [
    { name: t.header.main, href: '#' },
    { name: t.header.about, href: '#about' },
    { name: t.header.services, href: '#services' },
    { name: t.header.reviews, href: '#reviews' },
  ];

  return (
    <div className={`fixed left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'top-3 px-4 sm:px-6 lg:px-8' : 'top-0 px-0'}`}>
      <nav 
        className={`max-w-7xl mx-auto transition-all duration-300 relative border ${
          isScrolled 
            ? 'bg-cream-bg/90 dark:bg-emerald-luxury/90 backdrop-blur-md border-gold-accent/20 h-16 rounded-2xl shadow-md' 
            : 'bg-cream-bg dark:bg-emerald-luxury h-24 border-transparent shadow-none'
        }`}
      >
        <div className="px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex items-center justify-between h-full">
            
            {/* Логотип */}
            <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <div className="p-2 bg-gold-accent/10 rounded-lg text-gold-hover">
                <Feather size={20} />
              </div>
              <div>
                <span className="font-bold text-emerald-luxury dark:text-cream-bg tracking-tight block text-sm sm:text-base transition-colors duration-300">
                  Лёгкая легализация
                </span>
                <span className="text-[10px] text-gold-hover block font-medium uppercase tracking-widest -mt-0.5">
                  с Anastazja Łapo
                </span>
              </div>
            </div>
            {/* Навигация (Десктоп) */}
            <div className="hidden md:flex items-center gap-8">
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
            <div className="hidden md:flex items-center gap-6">
              
              {/* Переключатель языков (Десктоп) */}
              <div className="relative">
                <button 
                  onClick={() => setIsLangOpen(!isLangOpen)}
                  className="text-xs font-medium text-luxury-text/70 dark:text-cream-bg/70 hover:text-gold-hover dark:hover:text-gold-accent flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <Globe size={14} />
                  <span>{lang}</span>
                  <ChevronDown size={12} className={`transition-transform duration-200 ${isLangOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isLangOpen && (
                  <div className="absolute right-0 mt-2 w-32 bg-cream-bg dark:bg-emerald-luxury border border-gold-accent/20 rounded-xl shadow-lg py-1 z-50">
                    {languages.map((item) => (
                      <button
                        key={item.code}
                        onClick={() => {
                          setLang(item.code);
                          setIsLangOpen(false);
                        }}
                        className={`w-full text-left px-3 py-1.5 text-xs transition-colors hover:bg-gold-accent/10 cursor-pointer ${lang === item.code ? 'text-gold-hover font-bold' : 'text-luxury-text/80 dark:text-cream-bg/80'}`}
                      >
                        {item.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Кнопка темы */}
              <button 
                onClick={() => setIsDarkMode(!isDarkMode)} 
                className="p-2 text-luxury-text/70 dark:text-cream-bg/70 hover:text-gold-hover dark:hover:text-gold-accent transition-colors cursor-pointer rounded-lg hover:bg-gold-accent/5 flex items-center justify-center"
                title={isDarkMode ? "Включить светлую тему" : "Включить тёмную тему"}
              >
                {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button>

              {/* Реальный телефон Анастасии */}
              <a 
                href="tel:+48571053915" 
                onClick={handleCallClick}
                className={`text-xs font-semibold transition-all duration-300 flex items-center gap-1.5 cursor-pointer ${
                  isPhoneHighlighted 
                    ? 'text-gold-hover dark:text-gold-accent scale-110 font-bold' 
                    : 'text-luxury-text/60 dark:text-cream-bg/60 hover:text-emerald-luxury dark:hover:text-cream-bg'
                }`}
              >
                <Phone size={12} className={isPhoneHighlighted ? 'animate-pulse' : ''} /> 
                +48 571 053 915
              </a>
              
              {/* Телеграм Анастасии */}
              <a 
                href="https://t.me/AnastaziALappo" 
                target="_blank" 
                rel="noreferrer"
                className="relative z-30 inline-flex items-center justify-center text-luxury-text/60 dark:text-cream-bg/60 hover:text-gold-hover dark:hover:text-gold-accent transition-colors p-2 cursor-pointer"
                title="Написать в Telegram Анастасии"
              >
                <Send size={16} className="transform rotate-45 pointer-events-none" />
              </a>
              
              {/* Кнопка Консультация */}
              <button 
                onClick={handleConsultationClick} 
                className="relative overflow-hidden bg-emerald-luxury dark:bg-gold-accent text-cream-bg dark:text-emerald-luxury font-bold px-4 py-2 rounded-lg text-xs transition-all cursor-pointer shadow-sm group/btn"
              >
                <span className="absolute top-0 -inset-full h-full w-1/2 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover/btn:opacity-100 group-hover/btn:animate-[shine_0.8s_ease-in-out]" />
                <span className="relative z-10">{t.header.consultation}</span>
              </button>
            </div>

            {/* Правый блок мобилки */}
            <div className="flex items-center gap-2 md:hidden">
              <button onClick={() => setIsDarkMode(!isDarkMode)} className="p-2 text-luxury-text/80 dark:text-cream-bg/80 cursor-pointer">
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button onClick={() => setIsOpen(!isOpen)} className="text-luxury-text/80 dark:text-cream-bg/80 p-2 focus:outline-none cursor-pointer relative z-50">
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

          </div>
        </div>

        {/* Мобильное меню */}
        <div 
          className="absolute left-0 right-0 top-full mt-2 bg-cream-bg/95 dark:bg-emerald-luxury/95 backdrop-blur-md border border-gold-accent/20 px-4 pt-4 pb-6 space-y-4 shadow-xl rounded-2xl md:hidden transition-all duration-300"
          style={{ display: isOpen ? 'block' : 'none' }}
        >
          {navigation.map((item) => (
            <a key={item.name} href={item.href} onClick={() => setIsOpen(false)} className="block text-base font-medium text-luxury-text/80 dark:text-cream-bg/80 hover:text-gold-hover py-1 transition-colors duration-200">
              {item.name}
            </a>
          ))}
          
          <div className="pt-4 border-t border-gold-accent/20 space-y-4">
            {/* Телефон на мобилке */}
            <a 
              href="tel:+48571053915" 
              onClick={handleCallClick}
              className={`flex items-center gap-2 text-sm transition-all duration-300 cursor-pointer ${
                isPhoneHighlighted ? 'text-gold-hover font-bold scale-105' : 'text-luxury-text/60 dark:text-cream-bg/60'
              }`}
            >
              <Phone size={14} className={isPhoneHighlighted ? 'animate-pulse' : ''} /> 
              +48 571 053 915
            </a>

            {/* Мобильный селектор языков */}
            <div className="space-y-1.5">
              <span className="text-xs text-luxury-text/40 dark:text-cream-bg/40 block">{t.header.langSelect}:</span>
              <div className="grid grid-cols-4 gap-1">
                {languages.map((item) => (
                  <button
                    key={item.code}
                    onClick={() => {
                      setLang(item.code);
                      setIsOpen(false);
                    }}
                    className={`text-xs py-1.5 rounded-md border text-center transition-colors cursor-pointer ${
                      lang === item.code 
                        ? 'border-gold-accent bg-gold-accent/10 text-gold-hover font-bold' 
                        : 'border-gold-accent/10 text-luxury-text/70 dark:text-cream-bg/70'
                    }`}
                  >
                    {item.code}
                  </button>
                ))}
              </div>
            </div>

            {/* Мессенджеры на мобилке */}
            <div className="grid grid-cols-2 gap-2 pt-1">
              {/* ИСПРАВЛЕНО: Ссылка-близнец из SocialLinks для мобильного меню */}
              <a 
                href="https://t.me" 
                target="_blank" 
                rel="noreferrer"
                onClick={() => setIsOpen(false)}
                className="bg-cream-card dark:bg-emerald-medium text-luxury-text/80 dark:text-cream-bg text-center py-2.5 rounded-lg text-xs font-medium border border-gold-accent/10 flex items-center justify-center cursor-pointer"
              >
                Telegram
              </a>
              <button 
                onClick={handleConsultationClick}
                className="bg-gold-accent text-emerald-luxury text-center py-2.5 rounded-lg text-xs font-bold cursor-pointer"
              >
                {t.header.consultation}
              </button>
            </div>
          </div>
        </div>

      </nav>
    </div>
  );
};













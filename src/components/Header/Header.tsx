import { useState, useEffect } from 'react';
import { Feather, Menu, X, Phone, Send, Moon, Sun } from 'lucide-react';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  // ИСПРАВЛЕНО: Инициализируем стейт сразу из localStorage, чтобы избежать мигания при перезагрузке
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark';
  });

  // Следим за скроллом для эффекта "парения" шапки
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ИСПРАВЛЕНО: Синхронизируем состояние с тегом HTML и сохраняем выбор в localStorage
  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark'); // Запоминаем тёмную тему
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light'); // Запоминаем светлую тему
    }
  }, [isDarkMode]);

  const navigation = [
    { name: 'Главная', href: '#' },
    { name: 'Обо мне', href: '#about' },
    { name: 'Услуги и цены', href: '#services' },
    { name: 'Отзывы', href: '#reviews' },
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
                  Лёгкая legalizacja
                </span>
                <span className="text-[10px] text-gold-hover block font-medium uppercase tracking-widest -mt-0.5">
                  с Анастасией Лапо
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

            {/* Контакты + Переключатель темы + Кнопка (Десктоп) */}
            <div className="hidden md:flex items-center gap-6">
              
              {/* КНОПКА ТЕМЫ (Луна / Солнце) */}
              <button 
                onClick={() => setIsDarkMode(!isDarkMode)} 
                className="p-2 text-luxury-text/70 dark:text-cream-bg/70 hover:text-gold-hover dark:hover:text-gold-accent transition-colors cursor-pointer rounded-lg hover:bg-gold-accent/5 flex items-center justify-center"
                title={isDarkMode ? "Включить светлую тему" : "Включить тёмную тему"}
              >
                {isDarkMode ? <Sun size={18} className="animate-spin-slow" /> : <Moon size={18} />}
              </button>

              <a href="tel:+79991234567" className="text-xs font-medium text-luxury-text/60 dark:text-cream-bg/60 hover:text-emerald-luxury dark:hover:text-cream-bg transition-colors flex items-center gap-1.5">
                <Phone size={12} /> +7 (999) 123-45-67
              </a>
              
              <a 
                href="https://t.me" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-luxury-text/60 dark:text-cream-bg/60 hover:text-gold-hover dark:hover:text-gold-accent transition-colors p-1"
                title="Написать в Telegram"
              >
                <Send size={16} className="transform rotate-45" />
              </a>
              
              <a href="#about" className="relative overflow-hidden bg-emerald-luxury dark:bg-gold-accent text-cream-bg dark:text-emerald-luxury font-bold px-4 py-2 rounded-lg text-xs transition-all cursor-pointer shadow-sm group/btn">
                <span className="absolute top-0 -inset-full h-full w-1/2 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover/btn:opacity-100 group-hover/btn:animate-[shine_0.8s_ease-in-out]" />
                <span className="relative z-10">Консультация</span>
              </a>
            </div>

            {/* Правый блок мобилки (Бургер + Кнопка темы рядом) */}
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
          className="absolute left-0 right-0 top-full mt-2 bg-cream-bg/95 dark:bg-emerald-luxury/95 backdrop-blur-md border border-gold-accent/20 px-4 pt-4 pb-6 space-y-4 shadow-xl rounded-2xl md:hidden transition-all duration-500 cubic-bezier(0.16, 1, 0.3, 1) origin-top overflow-hidden"
          style={{ display: isOpen ? 'block' : 'none' }}
        >
          {navigation.map((item) => (
            <a key={item.name} href={item.href} onClick={() => setIsOpen(false)} className="block text-base font-medium text-luxury-text/80 dark:text-cream-bg/80 hover:text-gold-hover py-1 transition-colors duration-200">
              {item.name}
            </a>
          ))}
          <div className="pt-4 border-t border-gold-accent/20 space-y-4">
            <a href="tel:+79991234567" className="flex items-center gap-2 text-sm text-luxury-text/60 dark:text-cream-bg/60">
              <Phone size={14} /> +7 (999) 123-45-67
            </a>
            <div className="grid grid-cols-3 gap-2 pt-1">
              <a href="https://t.me" target="_blank" rel="noopener noreferrer" className="bg-cream-card dark:bg-emerald-medium text-luxury-text/80 dark:text-cream-bg text-center py-2.5 rounded-lg text-xs font-medium">Telegram</a>
              <a href="https://wa.me" target="_blank" rel="noopener noreferrer" className="bg-cream-card dark:bg-emerald-medium text-luxury-text/80 dark:text-cream-bg text-center py-2.5 rounded-lg text-xs font-medium">WhatsApp</a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-cream-card dark:bg-emerald-medium text-luxury-text/80 dark:text-cream-bg text-center py-2.5 rounded-lg text-xs font-medium">Instagram</a>
            </div>
          </div>
        </div>

      </nav>
    </div>
  );
};






import { useState, useEffect } from 'react';
import { Feather, Menu, X, Phone, Send } from 'lucide-react';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Отслеживаем скролл для эффекта "отлипания"
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

  const navigation = [
    { name: 'Главная', href: '#' },
    { name: 'Обо мне', href: '#about' },
    { name: 'Услуги и цены', href: '#services' },
    { name: 'Отзывы', href: '#reviews' },
  ];

  return (
    // Внешний контейнер, который фиксирует шапку на экране
    <div 
      className={`fixed left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'top-3 px-4 sm:px-6 lg:px-8' : 'top-0 px-0'
      }`}
    >
      {/* Сама плашка навигации, которая сжимается и скругляется при скролле */}
      <nav 
        className={`max-w-7xl mx-auto transition-all duration-300 ${
          isScrolled 
            ? 'bg-cream-bg/85 backdrop-blur-md border border-gold-accent/20 h-16 rounded-2xl shadow-md' 
            : 'bg-transparent h-24 border-b border-gold-accent/0'
        }`}
      >
        <div className="px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex items-center justify-between h-full">
            
            {/* Логотип с Анастасией и Пёрышком */}
            <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <div className={`p-2 bg-gold-accent/10 rounded-lg text-gold-hover transition-transform duration-300 ${isScrolled ? 'scale-90' : 'scale-100'}`}>
                <Feather size={isScrolled ? 20 : 24} />
              </div>
              <div>
                <span className={`font-bold text-emerald-luxury tracking-tight block transition-all ${isScrolled ? 'text-sm' : 'text-base'}`}>
                  Лёгкая legalizacja
                </span>
                <span className="text-[10px] text-gold-hover block font-medium uppercase tracking-widest -mt-0.5">
                  с Анастасией Лапо
                </span>
              </div>
            </div>

            {/* Навигация */}
            <div className="hidden md:flex items-center gap-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-luxury-text/80 hover:text-gold-hover transition-colors duration-200 relative group py-2"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold-accent transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>

            {/* Контакты + Соцсети (Десктоп) */}
            <div className="hidden md:flex items-center gap-6">
              <a 
                href="tel:+79991234567" 
                className="text-xs font-medium text-luxury-text/60 hover:text-emerald-luxury transition-colors flex items-center gap-1.5"
              >
                <Phone size={12} />
                +7 (999) 123-45-67
              </a>
              
              <a 
                href="https://t.me" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-luxury-text/60 hover:text-gold-hover transition-colors p-1"
              >
                <Send size={16} className="transform rotate-45" />
              </a>

              <a 
                href="#about" 
                className="relative overflow-hidden bg-emerald-luxury hover:bg-emerald-medium text-cream-bg font-semibold px-4 py-2 rounded-lg text-xs transition-all cursor-pointer shadow-sm group/btn"
              >
                <span className="absolute top-0 -inset-full h-full w-1/2 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover/btn:opacity-100 group-hover/btn:animate-[shine_0.8s_ease-in-out]" />
                <span className="relative z-10">Консультация</span>
              </a>
            </div>

            {/* Бургер */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-luxury-text/80 hover:text-emerald-luxury p-2 focus:outline-none cursor-pointer"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Мобильное меню */}
        {isOpen && (
          <div className={`md:hidden bg-cream-bg border border-gold-accent/20 mt-2 px-4 pt-2 pb-6 space-y-3 shadow-lg rounded-xl transition-all`}>
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block text-base font-medium text-luxury-text/80 hover:text-gold-hover py-2 transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
            <div className="pt-4 border-t border-gold-accent/20 space-y-4">
              <a href="tel:+79991234567" className="flex items-center gap-2 text-sm text-luxury-text/60">
                <Phone size={14} /> +7 (999) 123-45-67
              </a>
              <div className="grid grid-cols-3 gap-2 pt-2">
                <a href="https://t.me" target="_blank" rel="noopener noreferrer" className="bg-cream-card border border-gold-accent/10 text-luxury-text/80 text-center py-2.5 rounded-lg text-xs font-medium hover:text-gold-hover">
                  Telegram
                </a>
                <a href="https://wa.me" target="_blank" rel="noopener noreferrer" className="bg-cream-card border border-gold-accent/10 text-luxury-text/80 text-center py-2.5 rounded-lg text-xs font-medium hover:text-gold-hover">
                  WhatsApp
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-cream-card border border-gold-accent/10 text-luxury-text/80 text-center py-2.5 rounded-lg text-xs font-medium hover:text-gold-hover">
                  Instagram
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};


import { useState } from 'react';
// Импортируем Feather (пёрышко) вместо Scale
import { Feather, Menu, X, Phone, Send } from 'lucide-react';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: 'Главная', href: '#' },
    { name: 'Обо мне', href: '#about' },
    { name: 'Услуги и цены', href: '#services' },
    { name: 'Отзывы', href: '#reviews' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-900/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Логотип с Анастасией и Пёрышком */}
          <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="p-2 bg-legal-gold/10 rounded-lg text-legal-gold">
              <Feather size={24} />
            </div>
            <div>
              <span className="text-base font-bold text-white tracking-tight block">Лёгкая легализация</span>
              <span className="text-[10px] text-legal-gold block font-medium uppercase tracking-widest -mt-0.5">с Анастасией Лапо</span>
            </div>
          </div>

          {/* Навигация */}
          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-slate-300 hover:text-legal-gold transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Контакты + Соцсети (Десктоп) */}
          <div className="hidden md:flex items-center gap-6">
            <a 
              href="tel:+79991234567" 
              className="text-xs font-medium text-slate-400 hover:text-white transition-colors flex items-center gap-1.5"
            >
              <Phone size={12} />
              +7 (999) 123-45-67
            </a>
            
            <a 
              href="https://t.me" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-legal-gold transition-colors p-1"
              title="Написать в Telegram"
            >
              <Send size={16} className="transform rotate-45" />
            </a>

            <a href="#about" className="bg-slate-900 hover:bg-slate-800 border border-slate-800 text-white font-semibold px-4 py-2 rounded-lg text-xs transition-all cursor-pointer">
              Консультация
            </a>
          </div>

          {/* Бургер */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-400 hover:text-white p-2 focus:outline-none cursor-pointer"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Мобильное меню */}
      {isOpen && (
        <div className="md:hidden bg-slate-950 border-b border-slate-900 px-4 pt-2 pb-6 space-y-3">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block text-base font-medium text-slate-300 hover:text-legal-gold py-2 transition-colors duration-200"
            >
              {item.name}
            </a>
          ))}
          <div className="pt-4 border-t border-slate-900 space-y-4">
            <a href="tel:+79991234567" className="flex items-center gap-2 text-sm text-slate-400">
              <Phone size={14} /> +7 (999) 123-45-67
            </a>
            
            <div className="grid grid-cols-3 gap-2 pt-2">
              <a href="https://t.me" target="_blank" rel="noopener noreferrer" className="bg-slate-900 border border-slate-800 text-slate-300 text-center py-2.5 rounded-lg text-xs font-medium hover:text-legal-gold">
                Telegram
              </a>
              <a href="https://wa.me" target="_blank" rel="noopener noreferrer" className="bg-slate-900 border border-slate-800 text-slate-300 text-center py-2.5 rounded-lg text-xs font-medium hover:text-legal-gold">
                WhatsApp
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-slate-900 border border-slate-800 text-slate-300 text-center py-2.5 rounded-lg text-xs font-medium hover:text-legal-gold">
                Instagram
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

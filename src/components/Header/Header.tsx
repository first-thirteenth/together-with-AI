import { useState } from 'react';
import { Scale, Menu, X, Phone } from 'lucide-react';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: 'Главная', href: '#' },
    { name: 'Обо мне', href: '#about' },
    { name: 'Услуги и цены', href: '#services' },
    { name: 'Отзывы', href: '#reviews' }, // Ссылка ведет на id="reviews"
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Логотип */}
          <div className="flex items-center gap-2.5 cursor-pointer">
            <div className="p-2 bg-legal-gold/10 rounded-lg text-legal-gold">
              <Scale size={24} />
            </div>
            <div>
              <span className="text-lg font-bold text-white tracking-tight block">LEX LAB</span>
              <span className="text-[10px] text-slate-400 block uppercase tracking-widest -mt-1">Легализация</span>
            </div>
          </div>

          {/* Десктопная навигация */}
          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-slate-300 hover:text-legal-gold transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Кнопка действия (Десктоп) */}
          <div className="hidden md:flex items-center gap-4">
            <a 
              href="tel:+123456789" 
              className="text-sm font-medium text-slate-400 hover:text-white transition-colors flex items-center gap-1.5"
            >
              <Phone size={14} />
              +7 (999) 123-45-67
            </a>
            <button className="bg-slate-900 hover:bg-slate-800 border border-slate-800 text-white font-semibold px-4 py-2 rounded-lg text-xs transition-all cursor-pointer">
              Консультация
            </button>
          </div>

          {/* Мобильная кнопка бургера */}
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
        <div className="md:hidden bg-slate-950 border-b border-slate-900 px-4 pt-2 pb-6 space-y-3 animate-in fade-in slide-in-from-top-5 duration-200">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block text-base font-medium text-slate-300 hover:text-legal-gold py-2 transition-colors"
            >
              {item.name}
            </a>
          ))}
          <div className="pt-4 border-t border-slate-900 space-y-4">
            <a href="tel:+123456789" className="flex items-center gap-2 text-sm text-slate-400">
              <Phone size={14} /> +7 (999) 123-45-67
            </a>
            <button className="w-full bg-legal-gold hover:bg-amber-700 text-white font-semibold py-3 rounded-lg text-sm transition-all">
              Связаться в Telegram
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

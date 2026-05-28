import { Feather, ShieldCheck, Send, MessageCircle } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 text-slate-500 text-xs py-12 relative z-20" id="contacts">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-b border-slate-900 pb-8">
          
          {/* Колонка 1: Описание личного бренда */}
          <div className="md:col-span-4 space-y-3">
            <div className="flex items-center gap-2 text-white">
              <Feather size={20} className="text-legal-gold" />
              <span className="font-bold text-sm tracking-tight">Легализация с Анастасией Лапо</span>
            </div>
            <p className="text-slate-400 max-w-sm leading-relaxed text-[11px]">
              Экспертное сопровождение миграционных процессов, оформление ВНЖ, релокация бизнеса и комплаенс. Лёгкий путь в любую точку мира.
            </p>
          </div>

          {/* Колонка 2: Официальные реквизиты */}
          <div className="md:col-span-3 space-y-2">
            <h4 className="text-slate-300 font-semibold text-xs uppercase tracking-wider mb-1">Реквизиты и адрес</h4>
            <p className="text-slate-400">Юрист Анастасия Лапо (Kancelaria Prawna)</p>
            <p>NIP: 5250000000 / KRS: 0000000000</p>
            <p className="text-slate-400">Адрес офиса: Al. Jerozolimskie 56, 00-803 Warszawa, Polska</p>
          </div>

          {/* КОЛОНКА 3: Мессенджеры и Нативный Instagram */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-slate-300 font-semibold text-xs uppercase tracking-wider mb-1">Быстрая связь</h4>
            <div className="flex flex-col gap-2">
              <a 
                href="https://t.me" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 text-slate-400 hover:text-legal-gold transition-colors duration-200"
              >
                <Send size={14} className="transform rotate-45 text-sky-400" /> Telegram
              </a>
              <a 
                href="https://wa.me" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 text-slate-400 hover:text-legal-gold transition-colors duration-200"
              >
                <MessageCircle size={14} className="text-emerald-400" /> WhatsApp
              </a>
              
              {/* Чистый SVG логотип Instagram — Безупречное кроссплатформенное решение */}
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 text-slate-400 hover:text-pink-400 transition-colors duration-200 group"
              >
                <svg 
                  className="w-3.5 h-3.5 text-pink-400/80 group-hover:text-pink-400 transition-colors" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
                Instagram
              </a>
            </div>
          </div>

          {/* Колонка 4: Юридические ссылки */}
          <div className="md:col-span-2 space-y-2">
            <h4 className="text-slate-300 font-semibold text-xs uppercase tracking-wider mb-1">Документы</h4>
            <a href="#" className="block hover:text-white transition-colors">Политика куки</a>
            <a href="#" className="block hover:text-white transition-colors">Соглашение</a>
          </div>
        </div>

        {/* Копирайт */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-slate-600 text-[11px]">
          <p>© {new Date().getFullYear()} Лёгкая легализация с Анастасией Лапо. Все права защищены.</p>
          <p className="flex items-center gap-1"><ShieldCheck size={12} /> Защищено SSL шифрованием</p>
        </div>
      </div>
    </footer>
  );
};

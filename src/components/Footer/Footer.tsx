import { Feather, ShieldCheck, Send, MessageCircle } from 'lucide-react';
// ИСПРАВЛЕНО: Импортируем хук локализации из папки context, которая находится на два уровня выше
import { useLang } from '../../context/useLang';

export const Footer = () => {
  // ИСПРАВЛЕНО: Извлекаем объект перевода t
  const { t } = useLang();

  return (
    <footer className="bg-emerald-luxury border-t border-gold-accent/20 text-cream-bg/60 text-xs py-12 relative z-20" id="contacts">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-b border-gold-accent/10 pb-8">
          
          {/* Колонка 1: Описание личного бренда */}
          <div className="md:col-span-4 space-y-3">
            <div className="flex items-center gap-2 text-cream-bg">
              <Feather size={20} className="text-gold-accent" />
              {/* ИСПРАВЛЕНО: Локализация названия бренда */}
              <span className="font-bold text-sm tracking-tight">{t.footer.brandTitle}</span>
            </div>
            {/* ИСПРАВЛЕНО: Локализация описания бренда */}
            <p className="text-cream-bg/80 max-w-sm leading-relaxed text-[11px]">
              {t.footer.brandDesc}
            </p>
          </div>

          {/* Колонка 2: Официальные реквизиты */}
          <div className="md:col-span-3 space-y-2">
            {/* ИСПРАВЛЕНО: Локализация заголовка реквизитов */}
            <h4 className="text-gold-accent font-semibold text-xs uppercase tracking-wider mb-1">{t.footer.requisitesTitle}</h4>
            {/* ИСПРАВЛЕНО: Локализация имени и формы канцелярии */}
            <p className="text-cream-bg/80">{t.footer.requisitesLawyer}</p>
            <p>NIP: 5250000000 / KRS: 0000000000</p>
            {/* ИСПРАВЛЕНО: Локализация адреса */}
            <p className="text-cream-bg/80">{t.footer.requisitesAddress}</p>
          </div>

          {/* КОЛОНКА 3: Мессенджеры и Нативный Instagram */}
          <div className="md:col-span-3 space-y-3">
            {/* ИСПРАВЛЕНО: Локализация заголовка контактов */}
            <h4 className="text-gold-accent font-semibold text-xs uppercase tracking-wider mb-1">{t.footer.contactsTitle}</h4>
            <div className="flex flex-col gap-2">
              <a 
                href="https://t.me" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 text-cream-bg/70 hover:text-gold-accent transition-colors duration-200"
              >
                <Send size={14} className="transform rotate-45 text-gold-accent" /> Telegram
              </a>
              <a 
                href="https://wa.me" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 text-cream-bg/70 hover:text-gold-accent transition-colors duration-200"
              >
                <MessageCircle size={14} className="text-gold-accent" /> WhatsApp
              </a>
              
              {/* Чистый SVG логотип Instagram */}
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 text-cream-bg/70 hover:text-gold-accent transition-colors duration-200 group"
              >
                <svg 
                  className="w-3.5 h-3.5 text-gold-accent/80 group-hover:text-gold-accent transition-colors" 
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
            {/* ИСПРАВЛЕНО: Локализация заголовка документов */}
            <h4 className="text-gold-accent font-semibold text-xs uppercase tracking-wider mb-1">{t.footer.docsTitle}</h4>
            {/* ИСПРАВЛЕНО: Локализация ссылок */}
            <a href="#" className="block hover:text-cream-bg transition-colors">{t.footer.docsCookies}</a>
            <a href="#" className="block hover:text-cream-bg transition-colors">{t.footer.docsAgreement}</a>
          </div>
        </div>

        {/* Копирайт */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-cream-bg/40 text-[11px]">
          {/* ИСПРАВЛЕНО: Локализованный копирайт с автоматическим годом */}
          <p>© {new Date().getFullYear()}{t.footer.copyrightPost}</p>
          {/* ИСПРАВЛЕНО: Локализация текста SSL */}
          <p className="flex items-center gap-1"><ShieldCheck size={12} className="text-gold-accent/60" /> {t.footer.sslText}</p>
        </div>
      </div>
    </footer>
  );
};



import { Scale, ShieldCheck } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 text-slate-500 text-xs py-12" id="contacts">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-b border-slate-900 pb-8">
          
          {/* Колонка 1: Бренд */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2 text-white">
              <Scale size={20} className="text-legal-gold" />
              <span className="font-bold text-sm tracking-tight">LEX LAB — Александр Вайс</span>
            </div>
            <p className="text-slate-400 max-w-sm leading-relaxed">
              Индивидуальное юридическое сопровождение международных миграционных процессов, релокации бизнеса и комплаенса.
            </p>
          </div>

          {/* Колонка 2: Юридическая информация (То, что вы спрашивали) */}
          <div className="md:col-span-4 space-y-2">
            <h4 className="text-slate-300 font-semibold text-xs uppercase tracking-wider mb-1">Реквизиты и адрес</h4>
            <p className="text-slate-400">Юрист Вайс А. В. (Юридическая лицензия №4812-A)</p>
            <p>ОГРНИП / ИНН: 321774600000000 / 772345678901</p>
            <p className="text-slate-400">Адрес офиса: г. Москва, Пресненская наб., 12, Башня Федерация</p>
          </div>

          {/* Колонка 3: Ссылки */}
          <div className="md:col-span-3 space-y-2">
            <h4 className="text-slate-300 font-semibold text-xs uppercase tracking-wider mb-1">Документы</h4>
            <a href="#" className="block hover:text-white transition-colors">Политика конфиденциальности</a>
            <a href="#" className="block hover:text-white transition-colors">Пользовательское соглашение</a>
            <p className="text-[10px] text-slate-600 pt-2">Информация на сайте не является публичной офертой.</p>
          </div>
        </div>

        {/* Копирайт */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-slate-600 text-[11px]">
          <p>© {new Date().getFullYear()} LEX LAB. Все права защищены.</p>
          <p className="flex items-center gap-1"><ShieldCheck size={12} /> Защищено сквозным шифрованием SSL</p>
        </div>
      </div>
    </footer>
  );
};

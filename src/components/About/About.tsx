import { Award, BookOpen, Scale, CheckCircle } from 'lucide-react';

export const About = () => {
  return (
    <section className="py-24 bg-slate-900 border-t border-slate-800 scroll-reveal relative z-20" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Левая колонка: Фото / Имиджевый блок */}
          <div className="lg:col-span-5 relative justify-self-center lg:justify-self-start w-full max-w-md">
            {/* Свечение за фотографией */}
            <div className="absolute -inset-2 bg-gradient-to-tr from-legal-gold/20 to-transparent rounded-2xl blur-lg"></div>
            
            {/* Рамка под фото (Senior-заглушка с градиентом) */}
            <div className="relative w-full aspect-[4/5] bg-gradient-to-b from-slate-800 to-slate-950 rounded-2xl border border-slate-700/40 flex items-center justify-center overflow-hidden shadow-2xl">
              <div className="text-center p-6 space-y-3">
                <Scale className="mx-auto text-legal-gold" size={44} />
                <p className="text-xs text-slate-400 max-w-[200px]">Место для вашего профессионального фото в деловом стиле</p>
              </div>
              
              {/* Плашка с именем поверх фото */}
              <div className="absolute bottom-4 left-4 right-4 bg-slate-950/80 backdrop-blur-md p-4 rounded-xl border border-slate-800 text-center">
                <p className="font-bold text-white text-base">Александр Вайс</p>
                <p className="text-[11px] text-legal-gold font-medium uppercase tracking-wider">Магистр международного права</p>
              </div>
            </div>
          </div>

          {/* Правая колонка: Текст и Факты */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 bg-slate-950 border border-slate-800 px-3 py-1 rounded-full text-xs text-legal-gold">
              <span>Личный бренд и стандарты</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
              Личный опыт и <span className="text-legal-gold">юридическая точность</span> на вашей стороне
            </h2>
            
            <p className="text-base text-slate-400 leading-relaxed">
              Я специализируюсь на международном миграционном праве более 8 лет. Моя работа заключается в том, чтобы убрать из процесса релокации всю бюрократическую неопределенность. Я не просто заполняю анкеты, а выстраиваю для вас легальный, безопасный и прогнозируемый трек получения статуса.
            </p>

            {/* Короткий список ценностей */}
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex items-center gap-2.5">
                <CheckCircle size={14} className="text-legal-gold flex-shrink-0" />
                <span>Глубокий пре-аудит документов до подписания договора</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle size={14} className="text-legal-gold flex-shrink-0" />
                <span>Прямая связь с адвокатом без менеджеров и посредников</span>
              </li>
            </ul>

            {/* Карточки с цифрами достижений */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex gap-3.5 bg-slate-950/40 p-4 rounded-xl border border-slate-800/80">
                <Award className="text-legal-gold flex-shrink-0" size={22} />
                <div>
                  <h4 className="font-bold text-white text-sm">350+ успешных кейсов</h4>
                  <p className="text-xs text-slate-500">Одобренных ВНЖ и ПМЖ в ЕС</p>
                </div>
              </div>
              <div className="flex gap-3.5 bg-slate-950/40 p-4 rounded-xl border border-slate-800/80">
                <BookOpen className="text-legal-gold flex-shrink-0" size={22} />
                <div>
                  <h4 className="font-bold text-white text-sm">98.6% одобрений</h4>
                  <p className="text-xs text-slate-500">За счет жесткого отбора профилей</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

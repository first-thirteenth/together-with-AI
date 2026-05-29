import { ArrowRight, Sparkles, Check } from 'lucide-react';
import { useEffect, useRef } from 'react';

export const Services = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const services = [
    { id: 'nomad', title: 'ВНЖ Цифрового Кочевника', desc: 'Для фрилансеров и удаленщиков с доходом от €2,500. Полный аудит контрактов, сбор документов и подача под ключ.', price: 'от €1,200', time: 'Срок: 3–6 недель', popular: true },
    { id: 'startup', title: 'Стартап-Виза и Бизнес ВНЖ', desc: 'Разработка инновационного бизнес-плана, одобрение в министерстве и защита вашего проекта перед комиссией.', price: 'от €2,500', time: 'Срок: 2–4 месяца', popular: false },
    { id: 'passive', title: 'ВНЖ без права на работу', desc: 'Для финансово независимых лиц со стабильным пассивным доходом вне страны (аренда, дивиденды, проценты).', price: 'от €1,500', time: 'Срок: 1–2 месяца', popular: false },
    { id: 'investor', title: 'Золотая виза / ВНЖ инвестора', desc: 'Сопровождение инвестиций в недвижимость, государственные облигации или фонды для получения постоянного статуса.', price: 'от €4,000', time: 'Срок: 1–3 месяца', popular: false },
    { id: 'origin', title: 'Гражданство по происхождению', desc: 'Архивный поиск, подтверждение корней, восстановление исторических прав и полное ведение дела вплоть до присяги.', price: 'от €3,000', time: 'Срок: от 6 месяцев', popular: false },
    { id: 'family', title: 'Воссоединение семьи', desc: 'Оформление документов для супругов, детей и зависимых родителей главного заявителя по любым типам виз.', price: 'от €700', time: 'Срок: 2–4 недели', popular: false },
    { id: 'compliance', title: 'Открытие счетов и комплаенс', desc: 'Подготовка справок о происхождении средств (Source of Funds), прохождение проверок KYC и открытие счетов в банках.', price: 'от €600', time: 'Срок: 5–10 дней', popular: false },
    { id: 'appeal', title: 'Апелляции и сложные кейсы', desc: 'Глубокий анализ причин отказа, составление юридически грамотной жалобы и повторное сопровождение дела.', price: 'от €800', time: 'Срок: individualno', popular: false },
  ];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const cards = container.querySelectorAll('.fly-card');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          } else {
            entry.target.classList.remove('is-visible');
          }
        });
      },
      { 
        threshold: 0.05,
        rootMargin: '0px 0px -20px 0px' 
      }
    );

    cards.forEach((card) => observer.observe(card));
    return () => cards.forEach((card) => observer.unobserve(card));
  }, []);

  return (
    // ИСПРАВЛЕНО: Добавлен dark:bg-emerald-luxury для всей секции услуг
    <section className="py-24 bg-cream-bg dark:bg-emerald-luxury transition-colors duration-500 relative z-20 overflow-hidden" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Заголовок секции */}
        <div className="text-center space-y-4 mb-16">
          {/* ИСПРАВЛЕНО: Добавлен dark:text-cream-bg */}
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-emerald-luxury dark:text-cream-bg transition-colors duration-500">
            Направления работы и <span className="text-gold-hover dark:text-gold-accent">стоимость</span>
          </h2>
          {/* ИСПРАВЛЕНО: Добавлен dark:text-cream-bg/70 */}
          <p className="text-sm text-luxury-text/70 dark:text-cream-bg/70 max-w-xl mx-auto leading-relaxed transition-colors duration-500">
            Прозрачные условия без скрытых комиссий. Фиксируем финальную стоимость в официальном договоре до начала процесса.
          </p>
        </div>

        {/* Сетка карточек услуг */}
        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => {
            const isLeft = index % 2 === 0;

            return (
              /* ИСПРАВЛЕНО: Чистое внедрение dark:bg-emerald-medium и dark:border-gold-accent/30 без синтаксических ошибок */
              <div 
                key={service.id}
                className={`bg-cream-card dark:bg-emerald-medium rounded-2xl p-6 sm:p-8 flex flex-col justify-between group transition-all duration-300 shadow-sm hover:shadow-md relative overflow-hidden fly-card ${
                  isLeft ? 'fly-from-left' : 'fly-from-right'
                } ${
                  service.popular 
                    ? 'border-2 border-gold-accent dark:border-gold-accent ring-1 ring-gold-accent/20' 
                    : 'border border-gold-accent/10 dark:border-gold-accent/20'
                }`}
              >
                {/* Бейдж для популярной услуги */}
                {service.popular && (
                  <div className="absolute top-0 right-0 bg-gold-accent text-emerald-luxury text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-bl-xl flex items-center gap-1">
                    <Sparkles size={10} /> Топ выбор
                  </div>
                )}

                <div className="space-y-4">
                  <div className="flex justify-between items-start gap-4">
                    {/* ИСПРАВЛЕНО: Добавлен dark:text-cream-bg */}
                    <h3 className="font-bold text-xl text-emerald-luxury dark:text-cream-bg group-hover:text-gold-hover transition-colors duration-200">
                      {service.title}
                    </h3>
                    <div className="text-right flex-shrink-0">
                      <span className="text-sm font-bold text-emerald-luxury dark:text-cream-bg bg-gold-accent/20 px-2.5 py-1 rounded-md transition-colors duration-500">
                        {service.price}
                      </span>
                    </div>
                  </div>
                  
                  {/* ИСПРАВЛЕНО: Добавлен dark:text-cream-bg/80 */}
                  <p className="text-xs text-luxury-text/80 dark:text-cream-bg/80 leading-relaxed transition-colors duration-500">
                    {service.desc}
                  </p>
                </div>

                {/* Нижняя плашка карточки */}
                <div className="flex items-center justify-between border-t border-gold-accent/20 pt-4 mt-6 text-xs text-luxury-text/60 dark:text-cream-bg/60 transition-colors duration-500">
                  {/* ИСПРАВЛЕНО: Добавлен dark:text-gold-accent */}
                  <span className="flex items-center gap-1.5 font-medium text-emerald-medium dark:text-gold-accent">
                    <Check size={12} className="text-gold-accent" />
                    {service.time}
                  </span>
                  {/* ИСПРАВЛЕНО: Добавлен dark:text-cream-bg/80 */}
                  <button className="text-emerald-medium dark:text-cream-bg/80 group-hover:text-gold-hover transition-colors duration-200 cursor-pointer text-xs">
                    Подробнее <ArrowRight size={12} className="transform group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};




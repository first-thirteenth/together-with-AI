import { ArrowRight, Sparkles, Check } from 'lucide-react';

export const Services = () => {
// На замену внутри src/components/Services/Services.tsx
const services = [
  {
    id: 'nomad',
    title: 'ВНЖ Цифрового Кочевника',
    desc: 'Для фрилансеров и удаленщиков с доходом от €2,500. Полный аудит контрактов, сбор документов и подача под ключ.',
    price: 'от €1,200',
    time: 'Срок: 3–6 недель',
    popular: true,
  },
  {
    id: 'startup',
    title: 'Стартап-Виза и Бизнес ВНЖ',
    desc: 'Разработка инновационного бизнес-плана, одобрение в министерстве и защита вашего проекта перед комиссией.',
    price: 'от €2,500',
    time: 'Срок: 2–4 месяца',
    popular: false,
  },
  {
    id: 'passive',
    title: 'ВНЖ без права на работу',
    desc: 'Для финансово независимых лиц со стабильным пассивным доходом вне страны (аренда, дивиденды, проценты).',
    price: 'от €1,500',
    time: 'Срок: 1–2 месяца',
    popular: false,
  },
  {
    id: 'investor',
    title: 'Золотая виза / ВНЖ инвестора',
    desc: 'Сопровождение инвестиций в недвижимость, государственные облигации или фонды для получения постоянного статуса.',
    price: 'от €4,000',
    time: 'Срок: 1–3 месяца',
    popular: false,
  },
  {
    id: 'origin',
    title: 'Гражданство по происхождению',
    desc: 'Архивный поиск, подтверждение корней, восстановление исторических прав и полное ведение дела вплоть до присяги.',
    price: 'от €3,000',
    time: 'Срок: от 6 месяцев',
    popular: false,
  },
  {
    id: 'family',
    title: 'Воссоединение семьи',
    desc: 'Оформление документов для супругов, детей и зависимых родителей главного заявителя по любым типам виз.',
    price: 'от €700',
    time: 'Срок: 2–4 недели',
    popular: false,
  },
  {
    id: 'compliance',
    title: 'Открытие счетов и комплаенс',
    desc: 'Подготовка справок о происхождении средств (Source of Funds), прохождение проверок KYC и открытие счетов в банках.',
    price: 'от €600',
    time: 'Срок: 5–10 дней',
    popular: false,
  },
  {
    id: 'appeal',
    title: 'Апелляции и сложные кейсы',
    desc: 'Глубокий анализ причин отказа, составление юридически грамотной жалобы и повторное сопровождение дела.',
    price: 'от €800',
    time: 'Срок: индивидуально',
    popular: false,
  },
];


  return (
    <section className="py-24 bg-slate-950 border-t border-slate-900 relative z-20" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Заголовок секции */}
        <div className="text-center space-y-4 mb-16 scroll-reveal">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Направления работы и <span className="text-legal-gold">стоимость</span>
          </h2>
          <p className="text-sm text-slate-400 max-w-xl mx-auto leading-relaxed">
            Прозрачные условия без скрытых комиссий. Фиксируем финальную стоимость в официальном договоре до начала процесса.
          </p>
        </div>

        {/* Сетка карточек услуг */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 scroll-reveal">
          {services.map((service) => (
            <div 
              key={service.id}
              className={`bg-slate-900/60 backdrop-blur-sm border rounded-2xl p-6 sm:p-8 flex flex-col justify-between group transition-all duration-300 hover:border-slate-700 hover:-translate-y-1 relative overflow-hidden ${
                service.popular ? 'border-legal-gold/60 ring-1 ring-legal-gold/20' : 'border-slate-800/80'
              }`}
            >
              {/* Бейдж для популярной услуги */}
              {service.popular && (
                <div className="absolute top-0 right-0 bg-legal-gold text-white text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-bl-xl flex items-center gap-1">
                  <Sparkles size={10} /> Топ выбор
                </div>
              )}

              <div className="space-y-4">
                <div className="flex justify-between items-start gap-4">
                  <h3 className="font-bold text-xl text-white group-hover:text-legal-gold transition-colors duration-200">
                    {service.title}
                  </h3>
                  <div className="text-right flex-shrink-0">
                    <span className="text-sm font-bold text-legal-gold bg-amber-500/10 px-2.5 py-1 rounded-md">
                      {service.price}
                    </span>
                  </div>
                </div>
                
                <p className="text-xs text-slate-400 leading-relaxed">
                  {service.desc}
                </p>
              </div>

              {/* Нижняя плашка карточки */}
              <div className="flex items-center justify-between border-t border-slate-800/60 pt-4 mt-6 text-xs text-slate-500">
                <span className="flex items-center gap-1.5">
                  <Check size={12} className="text-legal-gold" />
                  {service.time}
                </span>
                <button className="text-slate-300 group-hover:text-legal-gold flex items-center gap-1 font-semibold transition-colors duration-200 cursor-pointer text-xs">
                  Подробнее <ArrowRight size={12} className="transform group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

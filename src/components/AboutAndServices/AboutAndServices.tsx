import { Award, BookOpen, Briefcase, Check, ArrowRight } from 'lucide-react';
export const AboutAndServices = () => {
  // Список услуг юриста-легализатора
  const services = [
    {
      id: 'nomad',
      title: 'ВНЖ Цифрового Кочевника',
      desc: 'Для фрилансеров и удаленщиков с доходом от €2,500. Сбор документов, аудит контрактов, подача под ключ.',
      price: 'от €1,200',
      time: 'Срок: 3–6 недель',
    },
    {
      id: 'startup',
      title: 'Стартап-Виза и Бизнес ВНЖ',
      desc: 'Разработка инновационного бизнес-плана, одобрение в министерстве и защита проекта для фаундеров.',
      price: 'от €2,500',
      time: 'Срок: 2–4 месяца',
    },
    {
      id: 'passive',
      title: 'ВНЖ без права на работу',
      desc: 'Для лиц с пассивным доходом (аренда, дивиденды) или финансово независимых заявителей.',
      price: 'от €1,500',
      time: 'Срок: 1–2 месяца',
    },
    {
      id: 'appeal',
      title: 'Апелляции и сложные кейсы',
      desc: 'Разбор причин отказа, составление юридически грамотной жалобы и повторная подача документов.',
      price: 'от €800',
      time: 'Срок: индивидуально',
    },
  ];

  return (
    <section className="py-20 bg-slate-900 border-t border-slate-800" id="programs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* БЛОК: Обо мне */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <div className="lg:col-span-5 relative">
            {/* Заглушка под фото юриста (Senior-стиль с градиентом) */}
            <div className="w-full aspect-[4/5] bg-gradient-to-t from-slate-950 to-slate-800 rounded-2xl border border-slate-700/50 flex items-center justify-center overflow-hidden shadow-2xl relative">
              <div className="text-center p-6 space-y-2">
                <Briefcase className="mx-auto text-legal-gold" size={40} />
                <p className="text-sm font-medium text-slate-400">Место для вашего профессионального фото</p>
              </div>
              <div className="absolute bottom-4 left-4 right-4 bg-slate-950/80 backdrop-blur-sm p-4 rounded-xl border border-slate-800 text-center">
                <p className="font-bold text-white text-base">Александр Вайс</p>
                <p className="text-xs text-legal-gold">Магистр международного права</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Личный опыт и <span className="text-legal-gold">юридическая точность</span> на вашей стороне
              <p className="text-slate-400 leading-relaxed">
                 Я специализируюсь на международном праве...
              </p>
                {/* Встраиваем иконку Check в микро-список */}
                <ul className="space-y-2 pt-2 text-sm text-slate-300">
                    <li className="flex items-center gap-2">
                        <Check size={14} className="text-legal-gold" />
                        <span>Полная конфиденциальность ваших данных</span>
                    </li>
                    <li className="flex items-center gap-2">
                        <Check size={14} className="text-legal-gold" />
                        <span>Прямая связь с юристом без посредников</span>
                    </li>
                </ul>
            </h2>
            <p className="text-slate-400 leading-relaxed">
              Я специализируюсь на международном праве и миграционных программах более 8 лет. Моя цель — не просто собрать пачку документов, а выстроить для вас легальный, безопасный и прогнозируемый трек релокации. 
            </p>

            {/* Достижения */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex gap-3 bg-slate-955/50 p-4 rounded-xl border border-slate-800">
                <Award className="text-legal-gold flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-semibold text-white text-sm">350+ успешных кейсов</h4>
                  <p className="text-xs text-slate-500">Одобренных ВНЖ и паспортов</p>
                </div>
              </div>
              <div className="flex gap-3 bg-slate-955/50 p-4 rounded-xl border border-slate-800">
                <BookOpen className="text-legal-gold flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-semibold text-white text-sm">98.6% одобрений</h4>
                  <p className="text-xs text-slate-500">За счет жесткого пре-аудита</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* БЛОК: Мои услуги и стоимость */}
        <div className="space-y-4 mb-12">
          <h2 className="text-3xl font-bold text-white text-center" id="services">Основные направления и стоимость</h2>
          <p className="text-slate-400 text-center max-w-xl mx-auto text-sm">Фиксированная стоимость в договоре. Никаких скрытых платежей, доплат и комиссий в процессе работы.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="bg-slate-950 border border-slate-800/80 p-6 rounded-2xl hover:border-slate-700 transition-all flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="flex justify-between items-start gap-4">
                  <h3 className="font-bold text-lg text-white group-hover:text-legal-gold transition-colors">{service.title}</h3>
                  <span className="text-sm font-semibold text-legal-gold bg-amber-500/10 px-2.5 py-1 rounded-md flex-shrink-0">{service.price}</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">{service.desc}</p>
              </div>
              
              <div className="flex items-center justify-between border-t border-slate-900 pt-4 mt-6 text-xs text-slate-500">
                <span>{service.time}</span>
                <span className="text-slate-300 group-hover:text-legal-gold flex items-center gap-1 font-medium transition-colors cursor-pointer">
                  Подробнее <ArrowRight size={12} />
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

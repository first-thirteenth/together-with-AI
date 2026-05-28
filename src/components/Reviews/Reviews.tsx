import { MessageSquare, Star } from 'lucide-react';

export const Reviews = () => {
  const reviews = [
    {
      name: 'Марк и Анна',
      program: 'ВНЖ Digital Nomad, Испания',
      text: 'Обратились к Александру после самостоятельного отказа из-за неправильно оформленного контракта. Он полностью переформатировал наши документы с американским заказчиком и составил пояснительное письмо для UGE. Подали заново — одобрение пришло через 18 дней! Настоящий профессионал.',
    },
    {
      name: 'Дмитрий К.',
      program: 'Стартап-виза, Португалия',
      text: 'Александр помог докрутить нашу бизнес-модель под жесткие требования института IAPMEI. Сопровождал на каждом шагу: от сбора справок до открытия счета. Всегда на связи в Telegram, объясняет сложные законы простым языком. Рекомендую.',
    },
    {
      name: 'Елена Б.',
      program: 'ВНЖ без права на работу, Италия',
      text: 'Для меня было критично успеть подать документы до изменения правил по пассивному доходу. Александр подготовил кейс за 2 недели. Аудит доходов от аренды был сделан идеально — консульство в Москве выдало визу D без единого дополнительного вопроса.',
    },
  ];

  return (
    <section className="py-24 bg-slate-900 border-t border-slate-800 relative z-20" id="reviews">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Заголовок */}
        <div className="text-center space-y-4 max-w-xl mx-auto scroll-reveal">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Что говорят <span className="text-legal-gold">клиенты</span>
          </h2>
          <p className="text-sm text-slate-400 leading-relaxed">
            Реальные истории людей, которые успешно прошли процесс легализации и доверили свой переезд эксперту.
          </p>
        </div>

        {/* Сетка отзывов */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 scroll-reveal">
          {reviews.map((rev, index) => (
            <div 
              key={index} 
              className="bg-slate-950 border border-slate-800/60 p-6 sm:p-8 rounded-2xl space-y-5 relative flex flex-col justify-between hover:border-slate-700 transition-colors duration-300 group"
            >
              <div className="space-y-4">
                {/* Шапка карточки отзыва */}
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <h4 className="font-bold text-white text-sm group-hover:text-legal-gold transition-colors duration-200">
                      {rev.name}
                    </h4>
                    <p className="text-[11px] text-legal-gold font-medium mt-0.5">
                      {rev.program}
                    </p>
                  </div>
                  {/* 5 звезд */}
                  <div className="flex gap-0.5 text-amber-500 flex-shrink-0">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={12} fill="currentColor" />
                    ))}
                  </div>
                </div>
                
                {/* Текст */}
                <p className="text-xs text-slate-400 leading-relaxed italic relative z-10">
                  "{rev.text}"
                </p>
              </div>

              {/* Фоновая декоративная иконка */}
              <MessageSquare className="absolute bottom-6 right-6 text-slate-900/60 pointer-events-none group-hover:text-slate-900 transition-colors duration-300" size={32} />
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

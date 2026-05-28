import { MessageSquare, Star } from 'lucide-react';

export const Reviews = () => {
  const reviews = [
    {
      name: 'Марк & Анна',
      program: 'Digital Nomad, Испания',
      text: 'Обратились к Александру после самостоятельного отказа по доходу. Он полностью переформатировал наш контракт с американским заказчиком, объяснил как правильно платить налоги. Подали заново — одобрение пришло через 18 дней! Огромная благодарность.',
    },
    {
      name: 'Дмитрий К.',
      program: 'Стартап-виза, Португалия',
      text: 'Профессионал с большой буквы. Александр помог докрутить нашу бизнес-модель под требования IAPMEI. Сопровождал на каждом шагу, оперативно отвечал в Telegram даже в выходные. Рекомендую однозначно.',
    },
  ];

  return (
    <section className="py-20 bg-slate-950 border-t border-slate-800" id="cases">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold text-white">Что говорят клиенты</h2>
          <p className="text-slate-400 text-sm max-w-md mx-auto">Реальные истории людей, которые доверили свой переезд эксперту.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((rev, index) => (
            <div key={index} className="bg-slate-900 border border-slate-800/60 p-6 rounded-2xl space-y-4 relative">
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="font-bold text-white text-sm">{rev.name}</h4>
                  <p className="text-[11px] text-legal-gold font-medium">{rev.program}</p>
                </div>
                <div className="flex gap-0.5 text-amber-500">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed italic">"{rev.text}"</p>
              <MessageSquare className="absolute bottom-4 right-4 text-slate-800 pointer-events-none" size={24} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

import { Award, BookOpen, ArrowRight } from 'lucide-react';
// 1. ИМПОРТИРУЕМ ФОТОГРАФИЮ (Укажи здесь правильный путь к файлу!)
import anastasiaPhoto from '../assets/anastasia.jpg';

export const AboutAndServices = () => {
  const services = [
    { id: 'nomad', title: 'ВНЖ Цифрового Кочевника', desc: 'Для фрилансеров и удаленщиков с доходом от €2,500. Сбор документов, аудит контрактов, подача под ключ.', price: 'от €1,200', time: 'Срок: 3–6 недель' },
    { id: 'startup', title: 'Стартап-Виза и Бизнес ВНЖ', desc: 'Разработка инновационного бизнес-плана, одобрение в министерстве и защита проекта для фаундеров.', price: 'от €2,500', time: 'Срок: 2–4 месяца' },
    { id: 'passive', title: 'ВНЖ без права на работу', desc: 'Для лиц с пассивным доходом (аренда, дивиденды) или финансово независимых заявителей.', price: 'от €1,500', time: 'Срок: 1–2 месяца' },
    { id: 'appeal', title: 'Апелляции и сложные кейсы', desc: 'Разбор причин отказа, составление юридически грамотной жалобы и повторная подача документов.', price: 'от €800', time: 'Срок: индивидуально' }
  ];

  return (
    <section className="py-20 bg-cream-bg" id="programs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Блок 1: Обо мне */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24 scroll-reveal">
          <div className="lg:col-span-5 relative justify-self-center lg:justify-self-start w-full max-w-md">
            
            {/* Нежное золотое свечение за фотографией */}
            <div className="absolute -inset-2 bg-gradient-to-tr from-gold-accent/20 to-transparent rounded-2xl blur-lg"></div>
            
            {/* Рамка под фото в стиле Премиум */}
            <div className="relative w-full aspect-[4/5] bg-gradient-to-b from-cream-card to-white rounded-2xl border border-gold-accent/20 overflow-hidden shadow-xl group">
              
              {/* 2. ТЕГ ИМИДЖА: Отображаем реальную фотографию */}
              <img 
                src={anastasiaPhoto} 
                alt="Anastazja Łapo" 
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />

              {/* Мягкий градиентный фильтр поверх фото для лучшей читаемости белой плашки */}
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-luxury/40 via-transparent to-transparent pointer-events-none" />
              
              {/* Плашка с именем поверх фото */}
              <div className="absolute bottom-4 left-4 right-4 bg-emerald-luxury/95 backdrop-blur-md p-4 rounded-xl border border-gold-accent/10 text-center z-10 shadow-lg">
                <p className="font-bold text-cream-bg text-base tracking-wide">Anastazja Łapo</p>
                <p className="text-[11px] text-gold-accent font-medium uppercase tracking-wider mt-0.5">Основатель проекта</p>
              </div>
            </div>

          </div>

          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-emerald-luxury">
              Личный опыт и <span className="text-gold-hover">юридическая точность</span> на вашей стороне
            </h2>
            <p className="text-luxury-text/80 leading-relaxed">
              Я специализируюсь на международном праве и миграционных программах более 8 лет. Моя цель — не просто собрать пачку документов, а выстроить для вас легальный, безопасный и прогнозируемый трек релокации. 
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex gap-3 bg-cream-card p-4 rounded-xl border border-gold-accent/20 shadow-sm">
                <Award className="text-gold-hover flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-semibold text-emerald-luxury text-sm">350+ успешных кейсов</h4>
                  <p className="text-xs text-luxury-text/60">Одобренных ВНЖ и паспортов</p>
                </div>
              </div>
              <div className="flex gap-3 bg-cream-card p-4 rounded-xl border border-gold-accent/20 shadow-sm">
                <BookOpen className="text-gold-hover flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-semibold text-emerald-luxury text-sm">98.6% одобрений</h4>
                  <p className="text-xs text-luxury-text/60">За счет жесткого пре-аудита</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Блок 2: Стоимость и Услуги */}
        <div className="space-y-12 scroll-reveal">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-emerald-luxury text-center" id="services">Основные направления и стоимость</h2>
            <p className="text-luxury-text/70 text-center max-w-xl mx-auto text-sm">Фиксированная стоимость в договоре. Никаких скрытых платежей, доплат и комиссий в процессе работы.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service) => (
              <div 
                key={service.id} 
                className="bg-cream-card border border-gold-accent/10 p-6 rounded-2xl hover:border-gold-accent/40 hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="flex justify-between items-start gap-4">
                    <h3 className="font-bold text-lg text-emerald-luxury group-hover:text-gold-hover transition-colors">{service.title}</h3>
                    <span className="text-sm font-semibold text-emerald-luxury bg-gold-accent/20 px-2.5 py-1 rounded-md flex-shrink-0">{service.price}</span>
                  </div>
                  <p className="text-xs text-luxury-text/80 leading-relaxed">{service.desc}</p>
                </div>
                
                <div className="flex items-center justify-between border-t border-gold-accent/20 pt-4 mt-6 text-xs text-luxury-text/60">
                  <span className="font-medium text-emerald-medium">{service.time}</span>
                  <span className="text-emerald-medium group-hover:text-gold-hover flex items-center gap-1 font-medium transition-colors cursor-pointer">
                    Подробнее <ArrowRight size={12} />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};



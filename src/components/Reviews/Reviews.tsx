import { useEffect, useRef, useState } from 'react';

// Компонент для отдельной карточки отзыва с независимым Observer для затушёвывания
const ReviewItem = ({ rev }: { rev: { text: string; name: string; program: string } }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsActive(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: '0px -40% 0px -40%', // Окно фокуса строго по центру экрана
        threshold: 0.5,
      }
    );

    observer.observe(card);
    return () => observer.unobserve(card);
  }, []);

  return (
    <div 
      ref={cardRef}
      className={`w-[290px] sm:w-[500px] shrink-0 flex flex-col justify-center text-center snap-center transition-all duration-500 ease-out min-h-[220px] will-change-[opacity,transform,filter] ${
        isActive 
          ? 'opacity-100 scale-100 blur-0 z-30' 
          : 'opacity-35 scale-95 blur-[2px] z-10 select-none'
      }`}
    >
      <div className="space-y-6">
        <p className="text-sm sm:text-base text-luxury-text font-medium leading-relaxed italic">
          "{rev.text}"
        </p>
        <div>
          <h4 className="font-bold text-emerald-luxury text-sm tracking-wide">
            {rev.name}
          </h4>
          <p className="text-[11px] text-gold-hover font-semibold uppercase tracking-wider mt-1">
            {rev.program}
          </p>
        </div>
      </div>
    </div>
  );
};

export const Reviews = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  // Базовые сочные отзывы про Anastazja Łapo
  const baseReviews = [
    { name: 'Марк и Анна', program: 'ВНЖ Digital Nomad, Испания', text: 'Обратились к Анастасии после самостоятельного отказа из-за неправильно оформленного контракта. Она полностью переформатировала наши документы с американским заказчиком и составила пояснительное письмо для UGE. Подали заново — одобрение пришло через 18 дней! Настоящий профессионал.' },
    { name: 'Дмитрий К.', program: 'Стартап-виза, Португалия', text: 'Анастасия помогла докрутить нашу бизнес-модель под жесткие требования института IAPMEI. Сопровождала на каждом шагу: от сбора справок до открытия счета. Всегда на связи в Telegram, объясняет сложные законы простым языком. Рекомендую.' },
    { name: 'Елена Б.', program: 'ВНЖ без права на работу, Италия', text: 'Для меня было критично успеть подать документы до изменения правил по пассивному доходу. Анастасия подготовила кейс за 2 недели. Аудит доходов был сделан идеально — консульство в Москве выдало визу D без единого вопроса.' },
    { name: 'Игорь и Ольга', program: 'Бизнес-инкубатор, Польша', text: 'Релоцировали IT-стартап в Варшаву. Анастазья Лапо идеально провела нас через весь процесс: от регистрации компании (Sp. z o.o.) до получения пластика карты побыту на 3 года. Сберегли тонну нервов.' },
    { name: 'Татьяна Ш.', program: 'Гражданство по корням, Румыния', text: 'Процесс восстановления корней казался нереальным из-за утерянных архивов. Анастасия организовала профессиональный поиск, нашла свидетельства дедушки и полностью вела дело до присяги в Бухаресте. Паспорт в руках!' }
  ];

  // Генерируем 50 отзывов
  const totalReviewsCount = 50;
  const infiniteReviews = Array.from({ length: totalReviewsCount }, (_, index) => {
    const baseReview = baseReviews[index % baseReviews.length];
    return { ...baseReview, id: `${baseReview.name}-${index}` };
  });

  // Нативно паркуем скролл на 4-й отзыв при загрузке (индекс 3), чтобы по бокам ВСЕГДА были элементы
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const targetChild = container.children[0] as HTMLElement;
    if (targetChild) {
      // Вычисляем точный центр для 4-й карточки, чтобы сдвиг произошел мгновенно и без багов анимации
      container.scrollLeft = (targetChild.offsetWidth + 48) * 3; 
    }
  }, []);

  // Логика ручного перетаскивания мышкой (Drag-to-Scroll)
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;
    isDown.current = true;
    scrollContainerRef.current.classList.add('active');
    startX.current = e.pageX - scrollContainerRef.current.offsetLeft;
    scrollLeft.current = scrollContainerRef.current.scrollLeft;
  };

  const handleMouseLeaveOrUp = () => {
    isDown.current = false;
    if (scrollContainerRef.current) {
      scrollContainerRef.current.classList.remove('active');
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDown.current || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    scrollContainerRef.current.scrollLeft = scrollLeft.current - walk;
  };

  return (
    <section className="py-24 bg-cream-bg relative z-20 overflow-hidden" id="reviews">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* ЗАГОЛОВОК: Использует наш новый нативный класс спуска сверху */}
        <div className="text-center space-y-4 max-w-xl mx-auto scroll-reveal-down">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-emerald-luxury">
            Что говорят <span className="text-gold-hover">клиенты</span>
          </h2>
          <p className="text-sm text-luxury-text/70 leading-relaxed mt-4">
            Реальные истории людей, которые успешно прошли процесс легализации и доверили свой переезд эксперту.
          </p>
        </div>

        {/* СЛАЙДЕР: Использует наш нативный класс влёта снизу */}
        <div className="relative w-full overflow-visible scroll-reveal-up">
          
          <div className="w-full mask-gradient">
            <div 
              ref={scrollContainerRef}
              onMouseDown={handleMouseDown}
              onMouseLeave={handleMouseLeaveOrUp}
              onMouseUp={handleMouseLeaveOrUp}
              onMouseMove={handleMouseMove}
              className="flex gap-12 sm:gap-24 overflow-x-auto no-scrollbar py-8 px-[35vw] snap-x snap-mandatory scroll-smooth cursor-grab active:cursor-grabbing select-none"
              style={{ scrollbarWidth: 'none' }}
            >
              {infiniteReviews.map((rev) => (
                <ReviewItem key={rev.id} rev={rev} />
              ))}
            </div>
          </div>

          {/* Индикатор-подсказка */}
          <div className="flex justify-center items-center gap-1.5 pt-4 text-[10px] uppercase font-bold text-gold-hover tracking-widest opacity-60 animate-pulse select-none">
            <span>Зажмите и тяните вбок или листайте</span>
          </div>

        </div>
        
      </div>
    </section>
  );
};







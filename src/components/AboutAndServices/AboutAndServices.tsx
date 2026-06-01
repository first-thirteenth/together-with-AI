import { useRef } from "react";
import { Award, BookOpen, ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
// 1. ИМПОРТИРУЕМ ФОТОГРАФИЮ: Путь скорректирован относительно папки компонента
import anastasiaPhoto from "../../assets/anastasia.jpg";
// ИСПРАВЛЕНО: Подключаем строгую локализацию словаря
import { useLang } from "../../context/useLang";

export const AboutAndServices = () => {
  const { t } = useLang();

  // СЕНЬОРСКИЙ ПОДХОД: Создаем отдельный реф для отслеживания скролла зоны Услуг
  const servicesTrackRef = useRef<HTMLDivElement>(null);

  // Привязываем прогресс прокрутки именно к секции цен
  const { scrollYProgress } = useScroll({
    target: servicesTrackRef,
    offset: ["start end", "end start"], // Анимация начнется, когда верх блока покажется снизу экрана
  });

  /* 
    МАГИЯ АНИМАЦИИ КАРТОЧЕК С ЦЕНАМИ:
    Точно так же, как и в Квизе, мы плавно поднимаем карточки (y: 100 -> 0)
    и проявляем их из прозрачности (opacity: 0 -> 1) строго по ходу движения пальца.
  */
  const cardsY = useTransform(scrollYProgress, [0, 0.35], [100, 0]);
  const cardsOpacity = useTransform(scrollYProgress, [0, 0.25], [0, 1]);

  const services = [
    { id: "nomad", ...t.services.items.nomad },
    { id: "startup", ...t.services.items.startup },
    { id: "passive", ...t.services.items.passive },
    { id: "appeal", ...t.services.items.appeal },
  ];

  return (
    <section
      className="py-20 bg-cream-bg dark:bg-emerald-luxury shadow-[0_-25px_50px_rgba(0,0,0,0.04)] dark:shadow-[0_-25px_50px_rgba(0,0,0,0.4)] transition-colors duration-500 relative z-20"
      id="programs"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Блок 1: Обо мне */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <div className="lg:col-span-5 relative justify-self-center lg:justify-self-start w-full max-w-md">
            <div className="absolute -inset-2 bg-gradient-to-tr from-gold-accent/20 to-transparent rounded-2xl blur-lg"></div>

            <div className="relative w-full aspect-[4/5] bg-gradient-to-b from-cream-card to-white dark:from-emerald-medium dark:to-emerald-luxury rounded-2xl border border-gold-accent/20 dark:border-gold-accent/30 overflow-hidden shadow-xl group transition-colors duration-500">
              <img
                src={anastasiaPhoto}
                alt="Anastazja Łapo"
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-luxury/40 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-4 left-4 right-4 bg-emerald-luxury/95 backdrop-blur-md p-4 rounded-xl border border-gold-accent/10 text-center z-10 shadow-lg">
                <p className="font-bold text-cream-bg text-base tracking-wide">
                  Anastazja Łapo
                </p>
                <p className="text-[11px] text-gold-accent font-medium uppercase tracking-wider mt-0.5">
                  {t.about.role}
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-emerald-luxury dark:text-cream-bg leading-tight transition-colors duration-500">
              {t.about.titlePre}{" "}
              <span className="text-gold-hover dark:text-gold-accent">
                {t.about.titleAccent}
              </span>{" "}
              {t.about.titlePost}
            </h2>
            <p className="text-base text-luxury-text/80 dark:text-cream-bg/80 leading-relaxed transition-colors duration-500">
              {t.about.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex gap-3 bg-cream-card dark:bg-emerald-medium p-4 rounded-xl border border-gold-accent/20 dark:border-gold-accent/30 shadow-sm transition-colors duration-500">
                <Award className="text-gold-hover flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-bold text-emerald-luxury dark:text-cream-bg text-sm transition-colors duration-500">
                    {t.about.stats.casesTitle}
                  </h4>
                  <p className="text-xs text-luxury-text/60 dark:text-cream-bg/60 transition-colors duration-500">
                    {t.about.stats.casesDesc}
                  </p>
                </div>
              </div>

              <div className="flex gap-3 bg-cream-card dark:bg-emerald-medium p-4 rounded-xl border border-gold-accent/20 dark:border-gold-accent/30 shadow-sm transition-colors duration-500">
                <BookOpen className="text-gold-hover flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-bold text-emerald-luxury dark:text-cream-bg text-sm transition-colors duration-500">
                    {t.about.stats.rateTitle}
                  </h4>
                  <p className="text-xs text-luxury-text/60 dark:text-cream-bg/60 transition-colors duration-500">
                    {t.about.stats.rateDesc}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Блок 2: Стоимость и Услуги */}
        {/* 
          СЕНЬОРСКИЙ РЕФ-ТРЕК:
          Привязываем этот div к servicesTrackRef. Как только этот блок начнет 
          заходить в область видимости экрана смартфона, Framer Motion активирует интерполяцию.
        */}
        <div ref={servicesTrackRef} className="space-y-12">
          <div className="space-y-4">
            <h2
              className="text-3xl font-extrabold tracking-tight text-emerald-luxury dark:text-cream-bg text-center transition-colors duration-500"
              id="services"
            >
              {t.services.titlePre}<span className="text-gold-hover dark:text-gold-accent">{t.services.titleAccent}</span>
            </h2>
            <p className="text-luxury-text/70 dark:text-cream-bg/70 text-center max-w-xl mx-auto text-sm transition-colors duration-500">
              {t.services.description}
            </p>
          </div>

          {/* 
            АНИМИРОВАННАЯ СЕТКА КАРТОЧЕК:
            Вместо статичного div мы используем motion.div, передавая ему стили y и opacity.
            will-change-transform принудительно задействует GPU видеокарты, стирая любые задержки кадров.
          */}
          <motion.div
            style={{
              y: cardsY,
              opacity: cardsOpacity,
            }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 will-change-transform"
          >
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-cream-card dark:bg-emerald-medium/50 border border-gold-accent/10 dark:border-gold-accent/20 p-6 rounded-2xl hover:border-gold-accent/40 dark:hover:border-gold-accent/50 hover:shadow-md transition-all flex flex-col justify-between group duration-500"
              >
                <div className="space-y-3">
                  <div className="flex justify-between items-start gap-4">
                    <h3 className="font-bold text-lg text-emerald-luxury dark:text-cream-bg group-hover:text-gold-hover dark:group-hover:text-gold-accent transition-colors duration-300">
                      {service.title}
                    </h3>
                    <span className="text-sm font-bold text-emerald-luxury dark:text-gold-accent bg-gold-accent/20 dark:bg-gold-accent/10 px-2.5 py-1 rounded-md flex-shrink-0 transition-colors duration-500">
                      {service.price}
                    </span>
                  </div>
                  <p className="text-xs text-luxury-text/80 dark:text-cream-bg/80 leading-relaxed transition-colors duration-500">
                    {service.desc}
                  </p>
                </div>

                <div className="flex items-center justify-between border-t border-gold-accent/20 dark:border-zinc-800/60 pt-4 mt-6 text-xs text-luxury-text/60 dark:text-cream-bg/60 transition-colors duration-500">
                  <span className="font-semibold text-emerald-medium dark:text-gold-accent/80 transition-colors duration-500">
                    {service.time}
                  </span>
                  <span className="text-emerald-medium dark:text-cream-bg/80 group-hover:text-gold-hover dark:group-hover:text-gold-accent flex items-center gap-1 font-bold transition-colors cursor-pointer duration-300">
                    Подробнее <ArrowRight size={12} />
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

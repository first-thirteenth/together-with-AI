import { ArrowRight, Sparkles, Check } from "lucide-react";
import { useEffect, useRef } from "react";
import { useLang } from "../../context/useLang";

export const Services = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { t } = useLang();

  const services = [
    { id: "nomad", ...t.services.items.nomad, popular: true },
    { id: "startup", ...t.services.items.startup, popular: false },
    { id: "passive", ...t.services.items.passive, popular: false },
    { id: "investor", ...t.services.items.investor, popular: false },
    { id: "origin", ...t.services.items.origin, popular: false },
    { id: "family", ...t.services.items.family, popular: false },
    { id: "compliance", ...t.services.items.compliance, popular: false },
    { id: "appeal", ...t.services.items.appeal, popular: false },
  ];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const cards = container.querySelectorAll(".fly-card");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entriesItem) => {
          if (entriesItem.isIntersecting) {
            entriesItem.target.classList.add("is-visible");
          } else {
            entriesItem.target.classList.remove("is-visible");
          }
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px -20px 0px" },
    );

    cards.forEach((card) => observer.observe(card));
    return () => cards.forEach((card) => observer.unobserve(card));
  }, []);

  return (
    <section
      className="py-24 bg-cream-bg dark:bg-emerald-luxury transition-colors duration-500 relative z-20 overflow-hidden"
      id="services"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-emerald-luxury dark:text-cream-bg transition-colors duration-500">
            {t.services.titlePre}
            <span className="text-gold-hover dark:text-gold-accent">
              {t.services.titleAccent}
            </span>
          </h2>
          <p className="text-sm text-luxury-text/70 dark:text-cream-bg/70 max-w-xl mx-auto leading-relaxed transition-colors duration-500">
            {t.services.description}
          </p>
        </div>

        <div
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {services.map((service, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div
                key={service.id}
                className={`bg-cream-card dark:bg-emerald-medium rounded-2xl p-6 sm:p-8 flex flex-col justify-between group transition-all duration-300 shadow-sm hover:shadow-md relative overflow-hidden fly-card ${
                  isLeft ? "fly-from-left" : "fly-from-right"
                } ${
                  service.popular
                    ? "border-2 border-gold-accent dark:border-gold-accent ring-1 ring-gold-accent/20"
                    : "border border-gold-accent/10 dark:border-gold-accent/20"
                }`}
              >
                {service.popular && (
                  <div className="absolute top-0 right-0 bg-gold-accent text-emerald-luxury text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-bl-xl flex items-center gap-1">
                    <Sparkles size={10} /> {t.services.topChoice}
                  </div>
                )}

                <div className="space-y-4">
                  <div className="flex justify-between items-start gap-4">
                    <h3 className="font-bold text-xl text-emerald-luxury dark:text-cream-bg group-hover:text-gold-hover transition-colors duration-200">
                      {service.title}
                    </h3>
                    <div className="text-right flex-shrink-0">
                      <span className="text-sm font-bold text-emerald-luxury dark:text-cream-bg bg-gold-accent/20 px-2.5 py-1 rounded-md transition-colors duration-500">
                        {service.price}
                      </span>
                    </div>
                  </div>
                  <p className="text-xs text-luxury-text/80 dark:text-cream-bg/80 leading-relaxed transition-colors duration-500">
                    {service.desc}
                  </p>
                </div>

                <div className="flex items-center justify-between border-t border-gold-accent/20 pt-4 mt-6 text-xs text-luxury-text/60 dark:text-cream-bg/60 transition-colors duration-500">
                  <span className="flex items-center gap-1.5 font-medium text-emerald-medium dark:text-gold-accent">
                    <Check size={12} className="text-gold-accent" />
                    {service.time}
                  </span>
                  <button className="text-emerald-medium dark:text-cream-bg/80 group-hover:text-gold-hover transition-colors duration-200 cursor-pointer text-xs flex items-center gap-1">
                    {t.services.btnMore}{" "}
                    <ArrowRight
                      size={12}
                      className="transform group-hover:translate-x-0.5 transition-transform"
                    />
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

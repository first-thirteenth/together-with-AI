import { useLang } from "../../context/useLang";

const SEPARATOR = "✦";

export const TrustTicker = () => {
  const { t } = useLang();

  const items = [
    t.ticker.cases,
    t.ticker.rate,
    t.ticker.languages,
    t.ticker.city,
    t.ticker.vnj,
    t.ticker.online,
  ];

  return (
    <div className="bg-cream-card dark:bg-emerald-medium border-y border-gold-accent/15 overflow-hidden py-3 relative z-20 transition-colors duration-500">
      {/* Duplicate items so the -50% marquee loops seamlessly */}
      <div className="flex whitespace-nowrap animate-marquee">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-5 text-[11px] font-semibold tracking-wide text-luxury-text/60 dark:text-cream-bg/50 uppercase mx-5 transition-colors duration-500"
          >
            <span className="text-gold-accent/50 text-[9px]">{SEPARATOR}</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useLang } from "../../context/useLang";

const fadeInUp = {
  hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
} as const;

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.14 },
  },
} as const;

const ReviewItem = ({
  rev,
}: {
  rev: { text: string; name: string; program: string };
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const isMobile = window.innerWidth < 768;
    const margin = isMobile ? "0px -5% 0px -5%" : "0px -40% 0px -40%";

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsActive(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: margin,
        threshold: isMobile ? 0.2 : 0.5,
      },
    );

    observer.observe(card);
    return () => observer.unobserve(card);
  }, []);

  return (
    <div
      ref={cardRef}
      className={`w-[290px] sm:w-[500px] shrink-0 flex flex-col justify-center text-center snap-center transition-all duration-700 ease-out min-h-[220px] will-change-[opacity,transform,filter] md:blur-0 ${
        isActive
          ? "opacity-100 scale-100 md:blur-0 z-30"
          : "md:opacity-35 scale-95 md:blur-[2px] z-10 select-none max-md:opacity-100"
      }`}
    >
      <div className="space-y-6">
        <p className="text-sm sm:text-base text-luxury-text dark:text-cream-bg/90 font-medium leading-relaxed italic transition-colors duration-500">
          "{rev.text}"
        </p>
        <div>
          <h4 className="font-bold text-emerald-luxury dark:text-cream-bg text-sm tracking-wide transition-colors duration-500">
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
  const sectionRef = useRef<HTMLDivElement>(null);
  const { t } = useLang();
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const baseReviews = [
    t.reviews.items.markAnna,
    t.reviews.items.dmitry,
    t.reviews.items.elena,
    t.reviews.items.igorOlga,
    t.reviews.items.tatiana,
  ];

  const totalReviewsCount = 50;
  const infiniteReviews = Array.from(
    { length: totalReviewsCount },
    (_, index) => {
      const baseReview = baseReviews[index % baseReviews.length];
      return { ...baseReview, id: `${baseReview.name}-${index}` };
    },
  );

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const targetChild = container.children[3] as HTMLElement;
    if (targetChild) {
      container.scrollLeft =
        targetChild.offsetLeft -
        container.offsetWidth / 2 +
        targetChild.offsetWidth / 2;
    }
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;
    isDown.current = true;
    scrollContainerRef.current.classList.add("active");
    startX.current = e.pageX - scrollContainerRef.current.offsetLeft;
    scrollLeft.current = scrollContainerRef.current.scrollLeft;
  };

  const handleMouseLeaveOrUp = () => {
    isDown.current = false;
    if (scrollContainerRef.current) {
      scrollContainerRef.current.classList.remove("active");
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
    <section
      ref={sectionRef}
      className="py-24 bg-cream-bg dark:bg-emerald-luxury transition-colors duration-500 relative z-20 overflow-hidden"
      id="reviews"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="text-center space-y-4 max-w-xl mx-auto"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl font-extrabold tracking-tight text-emerald-luxury dark:text-cream-bg transition-colors duration-500"
          >
            {t.reviews.titlePre}
            <span className="text-gold-hover dark:text-gold-accent">
              {t.reviews.titleAccent}
            </span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-sm text-luxury-text/70 dark:text-cream-bg/70 leading-relaxed mt-4 transition-colors duration-500"
          >
            {t.reviews.description}
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full overflow-visible"
        >
          <div className="w-full md:mask-gradient">
            <div
              ref={scrollContainerRef}
              onMouseDown={handleMouseDown}
              onMouseLeave={handleMouseLeaveOrUp}
              onMouseUp={handleMouseLeaveOrUp}
              onMouseMove={handleMouseMove}
              className="flex gap-12 sm:gap-24 overflow-x-auto no-scrollbar py-8 px-4 md:px-[35vw] snap-x snap-mandatory scroll-smooth cursor-grab active:cursor-grabbing select-none"
              style={{ scrollbarWidth: "none" }}
            >
              {infiniteReviews.map((rev) => (
                <ReviewItem key={rev.id} rev={rev} />
              ))}
            </div>
          </div>

          <div className="flex justify-center items-center gap-1.5 pt-4 text-[10px] uppercase font-bold text-gold-hover tracking-widest opacity-60 animate-pulse select-none">
            <span>{t.reviews.dragHint}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

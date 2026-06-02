import { useRef, useState } from "react";
import { Shield, ArrowRight, CheckCircle2 } from "lucide-react";
import { motion, useScroll, useTransform, useAnimate } from "framer-motion";
import { Quiz } from "../components/Quiz/Quiz.tsx";
import { useLang } from "../context/useLang";

export const Home = () => {
  const { t } = useLang();
  const trackRef = useRef<HTMLDivElement>(null);
  const [quizRef, animateQuiz] = useAnimate();
  const [isHighlighted, setIsHighlighted] = useState(false);

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start start", "end end"],
  });

  const textY = useTransform(scrollYProgress, [0, 0.3], [0, -120]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  // Квиз удерживается на месте от 0.3 до 0.75 диапазона скролла.
  // В удерживаемой фазе поднимаем его вверх (-130), чтобы он встал
  // по центру экрана поверх уже скрытого текста.
  const quizY = useTransform(
    scrollYProgress,
    [0, 0.3, 0.75, 0.9],
    [150, -130, -130, -300],
  );
  const quizOpacity = useTransform(
    scrollYProgress,
    [0, 0.15, 0.75, 0.9],
    [0, 1, 1, 0],
  );

  const handleConsultation = async () => {
    const isMobile = window.innerWidth < 1024;

    if (isMobile && trackRef.current) {
      // scrollYProgress = (scrollTop - trackTop) / (trackHeight - viewportHeight)
      // Квиз виден при progress 0.3–0.75, целимся в 0.5 (середина)
      const scrollable = trackRef.current.offsetHeight - window.innerHeight;
      const top = trackRef.current.offsetTop + scrollable * 0.5;
      window.scrollTo({ top, behavior: "smooth" });
      await new Promise((r) => setTimeout(r, 700));
    }

    // Эффект привлечения внимания к квизу
    setIsHighlighted(true);
    await animateQuiz(
      quizRef.current,
      { scale: [1, 1.03, 1.01, 1], boxShadow: ["0 0 0px #c5a880", "0 0 40px #c5a88088", "0 0 20px #c5a88044", "0 0 0px #c5a880"] },
      { duration: 0.7, ease: "easeInOut" },
    );
    setTimeout(() => setIsHighlighted(false), 2000);
  };

  return (
    <div
      ref={trackRef}
      className="relative w-full h-[170vh] lg:h-screen bg-cream-bg dark:bg-emerald-luxury text-luxury-text dark:text-cream-bg font-sans lg:sticky lg:top-0 z-10 transition-colors duration-500"
    >
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold-accent/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="fixed top-0 left-0 w-full h-screen lg:absolute lg:h-full overflow-hidden flex items-start lg:items-center">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-28 pb-10 lg:pt-0 lg:pb-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center w-full relative">
            <motion.div
              style={{
                y:
                  typeof window !== "undefined" && window.innerWidth < 1024
                    ? textY
                    : 0,
                opacity:
                  typeof window !== "undefined" && window.innerWidth < 1024
                    ? textOpacity
                    : 1,
              }}
              className="space-y-4 lg:space-y-6 will-change-[transform,opacity] mt-6 lg:mt-0"
            >
              <div className="inline-flex items-center gap-2 bg-cream-card dark:bg-emerald-medium border border-gold-accent/20 dark:border-gold-accent/30 px-3 py-1 rounded-full text-xs text-gold-hover font-medium shadow-sm">
                <Shield size={14} className="text-gold-accent" />
                <span>{t.home.badge}</span>
              </div>

              <h1 className="text-2xl sm:text-4xl lg:text-6xl font-extrabold tracking-tight leading-tight text-emerald-luxury dark:text-cream-bg transition-colors duration-500">
                {t.home.titlePre}{" "}
                <span className="text-gold-hover dark:text-gold-accent">
                  {t.home.titleAccent}
                </span>
              </h1>

              <p className="text-sm sm:text-base text-luxury-text/80 dark:text-cream-bg/80 max-w-xl leading-relaxed transition-colors duration-500">
                {t.home.description}
              </p>

              <ul className="space-y-2 lg:space-y-3 text-xs sm:text-sm text-luxury-text/90 dark:text-cream-bg/90 pt-1 transition-colors duration-500">
                {t.home.features.map((feature: string, index: number) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle2
                      size={16}
                      className="text-gold-accent flex-shrink-0"
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  onClick={handleConsultation}
                  className="relative overflow-hidden inline-flex items-center justify-center gap-2 bg-gold-accent hover:bg-gold-hover text-emerald-luxury font-bold px-6 py-3 rounded-lg text-sm shadow-sm active:scale-98 cursor-pointer group w-full sm:w-auto"
                >
                  <span className="absolute top-0 -inset-full h-full w-1/2 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-[shine_0.8s_ease-in-out]" />
                  <span className="relative z-10 flex items-center gap-2">
                    {t.home.btnAudit}
                    <ArrowRight size={16} />
                  </span>
                </button>

                <button className="inline-flex items-center justify-center bg-cream-card dark:bg-emerald-medium hover:bg-white dark:hover:bg-emerald-medium/50 border border-gold-accent/20 dark:border-gold-accent/30 text-emerald-medium dark:text-cream-bg font-semibold px-6 py-3 rounded-lg text-sm transition-all cursor-pointer shadow-sm w-full sm:w-auto" onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}>
                  {t.home.btnPrograms}
                </button>
              </div>
            </motion.div>

            <motion.div
              style={{
                y:
                  typeof window !== "undefined" && window.innerWidth < 1024
                    ? quizY
                    : 0,
                opacity:
                  typeof window !== "undefined" && window.innerWidth < 1024
                    ? quizOpacity
                    : 1,
              }}
              className="relative justify-self-center lg:justify-self-end w-full max-w-md mt-2 lg:mt-0 z-10 will-change-[transform,opacity]"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-gold-accent/20 to-transparent rounded-2xl blur opacity-30"></div>

              <div
                ref={quizRef}
                id="quiz"
                className={`relative bg-emerald-luxury dark:bg-[#081b15] p-5 sm:p-8 rounded-2xl shadow-2xl border transition-colors duration-500 ${
                  isHighlighted
                    ? "border-gold-accent/60 dark:border-gold-accent/70"
                    : "border-gold-accent/15 dark:border-gold-accent/20"
                }`}
              >
                <h3 className="text-lg sm:text-xl font-bold mb-1 text-cream-bg">
                  {t.home.quizTitle}
                </h3>
                <p className="text-[11px] sm:text-xs text-cream-bg/60 mb-4 sm:mb-5">
                  {t.home.quizDesc}
                </p>
                <Quiz />
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

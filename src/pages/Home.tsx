import { useRef, useState } from "react";
import { Shield, ArrowRight, CheckCircle2 } from "lucide-react";
import { motion, useAnimate, useScroll, useTransform } from "framer-motion";
import { Quiz } from "../components/Quiz/Quiz.tsx";
import { useLang } from "../context/useLang";
import { AnimatedBackground } from "../components/AnimatedBackground/AnimatedBackground";

// Variants for page-load assembly animation
const fromLeft = {
  hidden: { opacity: 0, x: -32, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.25, 1, 0.5, 1] },
  },
} as const;

const fromBelow = {
  hidden: { opacity: 0, y: 28, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.75, ease: [0.25, 1, 0.5, 1] },
  },
} as const;

const fromRight = {
  hidden: { opacity: 0, x: 48, scale: 0.96, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: [0.25, 1, 0.5, 1] },
  },
} as const;

const staggerText = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
} as const;

const featureItem = {
  hidden: { opacity: 0, x: -16 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
} as const;

export const Home = () => {
  const { t } = useLang();
  const [quizRef, animateQuiz] = useAnimate();
  const [isHighlighted, setIsHighlighted] = useState(false);
  const mobileRef = useRef<HTMLDivElement>(null);

  // Scroll progress for mobile quiz slide-up animation
  const { scrollYProgress: mobileProg } = useScroll({
    target: mobileRef,
    offset: ["start start", "end end"],
  });
  // Quiz slides in from bottom as user scrolls through hero, fades out when leaving section
  const quizSlideY = useTransform(mobileProg, [0.2, 0.6], ["110%", "0%"]);
  const quizVisible = useTransform(mobileProg, [0.15, 0.28, 0.82, 0.97], [0, 1, 1, 0]);

  const handleConsultation = async () => {
    const quizEl = document.getElementById("quiz");
    if (quizEl) {
      quizEl.scrollIntoView({ behavior: "smooth", block: "center" });
      await new Promise((r) => setTimeout(r, 600));
    }

    setIsHighlighted(true);
    await animateQuiz(
      quizRef.current,
      {
        scale: [1, 1.03, 1.01, 1],
        boxShadow: [
          "0 0 0px #c5a880",
          "0 0 40px #c5a88088",
          "0 0 20px #c5a88044",
          "0 0 0px #c5a880",
        ],
      },
      { duration: 0.7, ease: "easeInOut" },
    );
    setTimeout(() => setIsHighlighted(false), 2000);
  };

  return (
    <>
      {/* ─── MOBILE layout: hero full screen, quiz slides up from bottom ─── */}
      <div
        ref={mobileRef}
        className="lg:hidden relative h-[210vh] bg-cream-bg dark:bg-emerald-luxury text-luxury-text dark:text-cream-bg transition-colors duration-500 z-10"
      >
        {/* Hero: sticky — stays on screen while user scrolls through the 210vh wrapper */}
        <div className="sticky top-0 h-screen overflow-hidden">
          <AnimatedBackground />
          <section className="h-full max-w-7xl mx-auto px-4 sm:px-6 w-full flex flex-col justify-center pt-24 pb-8">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerText}
              className="space-y-4"
            >
              <motion.div
                variants={fromLeft}
                className="inline-flex items-center gap-2 bg-cream-card dark:bg-emerald-medium border border-gold-accent/20 dark:border-gold-accent/30 px-3 py-1 rounded-full text-xs text-gold-hover font-medium shadow-sm"
              >
                <Shield size={14} className="text-gold-accent" />
                <span>{t.home.badge}</span>
              </motion.div>

              <motion.h1
                variants={fromBelow}
                className="text-2xl sm:text-4xl font-extrabold tracking-tight leading-tight text-emerald-luxury dark:text-cream-bg transition-colors duration-500"
              >
                {t.home.titlePre}{" "}
                <span className="text-gold-hover dark:text-gold-accent">
                  {t.home.titleAccent}
                </span>
              </motion.h1>

              <motion.p
                variants={fromBelow}
                className="text-sm sm:text-base text-luxury-text/80 dark:text-cream-bg/80 max-w-xl leading-relaxed transition-colors duration-500"
              >
                {t.home.description}
              </motion.p>

              <motion.ul
                variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
                className="space-y-2 text-xs sm:text-sm text-luxury-text/90 dark:text-cream-bg/90 pt-1 transition-colors duration-500"
              >
                {t.home.features.map((feature: string, index: number) => (
                  <motion.li key={index} variants={featureItem} className="flex items-center gap-3">
                    <CheckCircle2 size={16} className="text-gold-accent flex-shrink-0" />
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </motion.ul>

              <motion.div variants={fromBelow} className="flex flex-col sm:flex-row gap-3 pt-2">
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
                <button
                  className="inline-flex items-center justify-center bg-cream-card dark:bg-emerald-medium hover:bg-white dark:hover:bg-emerald-medium/50 border border-gold-accent/20 dark:border-gold-accent/30 text-emerald-medium dark:text-cream-bg font-semibold px-6 py-3 rounded-lg text-sm transition-all cursor-pointer shadow-sm w-full sm:w-auto"
                  onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
                >
                  {t.home.btnPrograms}
                </button>
              </motion.div>
            </motion.div>
          </section>

          {/* Quiz sheet: slides up from bottom driven by scroll */}
          <motion.div
            style={{ y: quizSlideY, opacity: quizVisible }}
            className="absolute bottom-0 left-0 right-0 px-4 pb-4 z-20 will-change-[transform,opacity]"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-gold-accent/20 to-transparent rounded-2xl blur opacity-30 pointer-events-none" />
            <div
              ref={quizRef}
              id="quiz"
              className={`relative bg-emerald-luxury dark:bg-[#081b15] p-5 rounded-2xl shadow-2xl border transition-colors duration-500 ${
                isHighlighted
                  ? "border-gold-accent/60 dark:border-gold-accent/70"
                  : "border-gold-accent/15 dark:border-gold-accent/20"
              }`}
            >
              <h3 className="text-base font-bold mb-1 text-cream-bg">{t.home.quizTitle}</h3>
              <p className="text-[10px] text-cream-bg/60 mb-3">{t.home.quizDesc}</p>
              <Quiz />
            </div>
          </motion.div>
        </div>
      </div>

      {/* ─── DESKTOP layout: sticky scroll-driven hero ─── */}
      <div className="hidden lg:block relative w-full h-screen bg-cream-bg dark:bg-emerald-luxury text-luxury-text dark:text-cream-bg font-sans lg:sticky lg:top-0 z-10 transition-colors duration-500">
        <AnimatedBackground />

        <div className="absolute h-full w-full overflow-hidden">
          <section className="h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center pt-24 pb-8">
            <div className="grid grid-cols-2 gap-12 items-center w-full relative">
              {/* Left: text, fully static on desktop */}
              <motion.div className="space-y-6">
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={staggerText}
                  className="space-y-6"
                >
                  <motion.div
                    variants={fromLeft}
                    className="inline-flex items-center gap-2 bg-cream-card dark:bg-emerald-medium border border-gold-accent/20 dark:border-gold-accent/30 px-3 py-1 rounded-full text-xs text-gold-hover font-medium shadow-sm"
                  >
                    <Shield size={14} className="text-gold-accent" />
                    <span>{t.home.badge}</span>
                  </motion.div>

                  <motion.h1
                    variants={fromBelow}
                    className="text-4xl lg:text-6xl font-extrabold tracking-tight leading-tight text-emerald-luxury dark:text-cream-bg transition-colors duration-500"
                  >
                    {t.home.titlePre}{" "}
                    <span className="text-gold-hover dark:text-gold-accent">
                      {t.home.titleAccent}
                    </span>
                  </motion.h1>

                  <motion.p
                    variants={fromBelow}
                    className="text-base text-luxury-text/80 dark:text-cream-bg/80 max-w-xl leading-relaxed transition-colors duration-500"
                  >
                    {t.home.description}
                  </motion.p>

                  <motion.ul
                    variants={{
                      hidden: {},
                      visible: { transition: { staggerChildren: 0.08 } },
                    }}
                    className="space-y-3 text-sm text-luxury-text/90 dark:text-cream-bg/90 pt-1 transition-colors duration-500"
                  >
                    {t.home.features.map((feature: string, index: number) => (
                      <motion.li
                        key={index}
                        variants={featureItem}
                        className="flex items-center gap-3"
                      >
                        <CheckCircle2
                          size={16}
                          className="text-gold-accent flex-shrink-0"
                        />
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </motion.ul>

                  <motion.div
                    variants={fromBelow}
                    className="flex flex-row gap-3 pt-2"
                  >
                    <button
                      onClick={handleConsultation}
                      className="relative overflow-hidden inline-flex items-center justify-center gap-2 bg-gold-accent hover:bg-gold-hover text-emerald-luxury font-bold px-6 py-3 rounded-lg text-sm shadow-sm active:scale-98 cursor-pointer group"
                    >
                      <span className="absolute top-0 -inset-full h-full w-1/2 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-[shine_0.8s_ease-in-out]" />
                      <span className="relative z-10 flex items-center gap-2">
                        {t.home.btnAudit}
                        <ArrowRight size={16} />
                      </span>
                    </button>
                    <button
                      className="inline-flex items-center justify-center bg-cream-card dark:bg-emerald-medium hover:bg-white dark:hover:bg-emerald-medium/50 border border-gold-accent/20 dark:border-gold-accent/30 text-emerald-medium dark:text-cream-bg font-semibold px-6 py-3 rounded-lg text-sm transition-all cursor-pointer shadow-sm"
                      onClick={() =>
                        document
                          .getElementById("services")
                          ?.scrollIntoView({ behavior: "smooth" })
                      }
                    >
                      {t.home.btnPrograms}
                    </button>
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Right: quiz, static on desktop (sticky section handles the effect) */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fromRight}
                className="relative justify-self-end w-full max-w-md z-10"
              >
                <motion.div
                  animate={{ scale: [1, 1.013, 1] }}
                  transition={{
                    repeat: Infinity,
                    duration: 4,
                    ease: "easeInOut",
                    repeatDelay: 2,
                  }}
                  className="will-change-[transform]"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-gold-accent/20 to-transparent rounded-2xl blur opacity-30" />
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
              </motion.div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

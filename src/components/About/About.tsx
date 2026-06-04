import { Award, BookOpen, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import anastasiaPhoto from "../../assets/anastasia.jpg";
import { useLang } from "../../context/useLang";
import { AnimatedCounter } from "../AnimatedCounter/AnimatedCounter";

const slideInLeft = {
  hidden: { opacity: 0, x: -24, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 1.1, ease: [0.25, 1, 0.5, 1] },
  },
} as const;

const fadeInUp = {
  hidden: { opacity: 0, y: 32, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
  },
} as const;

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.11, delayChildren: 0.05 },
  },
} as const;

export const About = () => {
  const { t } = useLang();

  return (
    <section
      className="py-24 bg-cream-bg dark:bg-emerald-luxury transition-colors duration-500 relative z-20"
      id="about"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Photo column — slides in from left */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={slideInLeft}
            className="lg:col-span-5 relative justify-self-center lg:justify-self-start w-full max-w-md will-change-[transform,opacity,filter]"
          >
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
          </motion.div>

          {/* Text column — stagger cascade for each child */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="lg:col-span-7 space-y-6 will-change-[transform,opacity]"
          >
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 bg-cream-card dark:bg-emerald-medium border border-gold-accent/20 dark:border-gold-accent/30 px-3 py-1 rounded-full text-xs text-gold-hover font-medium shadow-sm transition-colors duration-500"
            >
              <span>{t.about.badge}</span>
            </motion.div>

            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl font-extrabold tracking-tight text-emerald-luxury dark:text-cream-bg leading-tight transition-colors duration-500"
            >
              {t.about.titlePre}{" "}
              <span className="text-gold-hover dark:text-gold-accent">
                {t.about.titleAccent}
              </span>{" "}
              {t.about.titlePost}
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-base text-luxury-text/80 dark:text-cream-bg/80 leading-relaxed transition-colors duration-500"
            >
              {t.about.description}
            </motion.p>

            <motion.ul
              variants={fadeInUp}
              className="space-y-2 text-sm text-luxury-text/90 dark:text-cream-bg/90 transition-colors duration-500"
            >
              {t.about.features.map((feature: string, index: number) => (
                <li key={index} className="flex items-center gap-2.5">
                  <CheckCircle
                    size={14}
                    className="text-gold-accent flex-shrink-0"
                  />
                  <span>{feature}</span>
                </li>
              ))}
            </motion.ul>

            {/* Stats cards — nested stagger */}
            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4"
            >
              <motion.div
                variants={fadeInUp}
                className="flex gap-3.5 bg-cream-card dark:bg-emerald-medium p-4 rounded-xl border border-gold-accent/20 dark:border-gold-accent/30 shadow-sm transition-colors duration-500"
              >
                <Award className="text-gold-hover flex-shrink-0" size={22} />
                <div>
                  <h4 className="font-bold text-emerald-luxury dark:text-cream-bg text-sm transition-colors duration-500">
                    <AnimatedCounter target={350} suffix="+" />{" "}
                    {t.about.stats.casesTitle.replace(/^[\d+.]+\s*/, "")}
                  </h4>
                  <p className="text-xs text-luxury-text/60 dark:text-cream-bg/60 transition-colors duration-500">
                    {t.about.stats.casesDesc}
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="flex gap-3.5 bg-cream-card dark:bg-emerald-medium p-4 rounded-xl border border-gold-accent/20 dark:border-gold-accent/30 shadow-sm transition-colors duration-500"
              >
                <BookOpen className="text-gold-hover flex-shrink-0" size={22} />
                <div>
                  <h4 className="font-bold text-emerald-luxury dark:text-cream-bg text-sm transition-colors duration-500">
                    <AnimatedCounter target={98.6} suffix="%" decimals={1} />{" "}
                    {t.about.stats.rateTitle.replace(/^[\d.]+%\s*/, "")}
                  </h4>
                  <p className="text-xs text-luxury-text/60 dark:text-cream-bg/60 transition-colors duration-500">
                    {t.about.stats.rateDesc}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

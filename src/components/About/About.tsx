import { Award, BookOpen, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import anastasiaPhoto from "../../assets/anastasia.jpg";
import { useLang } from "../../context/useLang";

export const About = () => {
  const { t } = useLang();

  const fadeInUpVariants = {
    hidden: {
      opacity: 0,
      y: 40,
      filter: "blur(4px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  } as const;

  return (
    <section
      className="py-24 bg-cream-bg dark:bg-emerald-luxury transition-colors duration-500 relative z-20"
      id="about"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
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

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUpVariants}
            className="lg:col-span-7 space-y-6 will-change-[transform,opacity]"
          >
            <div className="inline-flex items-center gap-2 bg-cream-card dark:bg-emerald-medium border border-gold-accent/20 dark:border-gold-accent/30 px-3 py-1 rounded-full text-xs text-gold-hover font-medium shadow-sm transition-colors duration-500">
              <span>{t.about.badge}</span>
            </div>

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

            <ul className="space-y-2 text-sm text-luxury-text/90 dark:text-cream-bg/90 transition-colors duration-500">
              {t.about.features.map((feature: string, index: number) => (
                <li key={index} className="flex items-center gap-2.5">
                  <CheckCircle
                    size={14}
                    className="text-gold-accent flex-shrink-0"
                  />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <motion.div
                variants={fadeInUpVariants}
                className="flex gap-3.5 bg-cream-card dark:bg-emerald-medium p-4 rounded-xl border border-gold-accent/20 dark:border-gold-accent/30 shadow-sm transition-colors duration-500"
              >
                <Award className="text-gold-hover flex-shrink-0" size={22} />
                <div>
                  <h4 className="font-bold text-emerald-luxury dark:text-cream-bg text-sm transition-colors duration-500">
                    {t.about.stats.casesTitle}
                  </h4>
                  <p className="text-xs text-luxury-text/60 dark:text-cream-bg/60 transition-colors duration-500">
                    {t.about.stats.casesDesc}
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={fadeInUpVariants}
                className="flex gap-3.5 bg-cream-card dark:bg-emerald-medium p-4 rounded-xl border border-gold-accent/20 dark:border-gold-accent/30 shadow-sm transition-colors duration-500"
              >
                <BookOpen className="text-gold-hover flex-shrink-0" size={22} />
                <div>
                  <h4 className="font-bold text-emerald-luxury dark:text-cream-bg text-sm transition-colors duration-500">
                    {t.about.stats.rateTitle}
                  </h4>
                  <p className="text-xs text-luxury-text/60 dark:text-cream-bg/60 transition-colors duration-500">
                    {t.about.stats.rateDesc}
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

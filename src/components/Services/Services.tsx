import {
  ArrowRight,
  Sparkles,
  ChevronUp,
  MessageCircle,
  Check,
  Trophy,
  Gem,
  FileText,
  MessagesSquare,
  Flag,
  Globe,
  CreditCard,
  Car,
  Rocket,
  Building2,
  type LucideIcon,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useLang } from "../../context/useLang";
import { CONTACTS } from "../../config/contacts";

import type { Variants } from "framer-motion";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 22 },
  },
};

const cardPop: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
    filter: "blur(6px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: [0.25, 1, 0.5, 1],
    },
  },
};

const staggerGrid: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.13, delayChildren: 0.1 },
  },
};

export const Services = () => {
  const { t } = useLang();
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const serviceIcons: Record<string, LucideIcon> = {
    turnkey: Trophy,
    allInclusive: Gem,
    appPrep: FileText,
    consultation: MessagesSquare,
    citizenship: Flag,
    permanent: Globe,
    kartaPolaka: CreditCard,
    driversLicense: Car,
    openSP: Rocket,
    openLLC: Building2,
  };

  const services = [
    { id: "turnkey", ...t.services.items.turnkey, popular: true },
    { id: "allInclusive", ...t.services.items.allInclusive, popular: false },
    { id: "appPrep", ...t.services.items.appPrep, popular: false },
    { id: "consultation", ...t.services.items.consultation, popular: true },
    { id: "citizenship", ...t.services.items.citizenship, popular: false },
    { id: "permanent", ...t.services.items.permanent, popular: false },
    { id: "kartaPolaka", ...t.services.items.kartaPolaka, popular: false },
    {
      id: "driversLicense",
      ...t.services.items.driversLicense,
      popular: false,
    },
    { id: "openSP", ...t.services.items.openSP, popular: false },
    { id: "openLLC", ...t.services.items.openLLC, popular: false },
  ];

  return (
    <section
      className="py-24 bg-cream-bg dark:bg-emerald-luxury transition-colors duration-500 relative z-20 overflow-hidden"
      id="services"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.14 } },
          }}
          className="text-center space-y-4 mb-16"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl font-extrabold tracking-tight text-emerald-luxury dark:text-cream-bg transition-colors duration-500"
          >
            {t.services.titlePre}
            <span className="text-gold-hover dark:text-gold-accent">
              {t.services.titleAccent}
            </span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-sm text-luxury-text/70 dark:text-cream-bg/70 max-w-xl mx-auto leading-relaxed transition-colors duration-500"
          >
            {t.services.description}
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerGrid}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {services.map((service) => {
            const isExpanded = expandedId === service.id;

            return (
              <motion.div
                key={service.id}
                variants={cardPop}
                layout
                className={`bg-cream-card dark:bg-emerald-medium rounded-2xl p-6 sm:p-8 flex flex-col group transition-colors duration-300 shadow-sm hover:shadow-md relative overflow-hidden will-change-[transform,opacity] ${
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

                <div className="space-y-3">
                  <h3 className="font-bold text-xl text-emerald-luxury dark:text-cream-bg group-hover:text-gold-hover transition-colors duration-200 pr-20 flex items-center gap-2.5">
                    {(() => {
                      const Icon = serviceIcons[service.id];
                      return Icon ? (
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-gold-accent/15 dark:bg-gold-accent/20 text-gold-hover dark:text-gold-accent flex-shrink-0 transition-colors duration-300">
                          <Icon size={16} strokeWidth={1.75} />
                        </span>
                      ) : null;
                    })()}
                    {service.title}
                  </h3>
                  <p className="text-xs text-luxury-text/80 dark:text-cream-bg/80 leading-relaxed transition-colors duration-500">
                    {service.desc}
                  </p>
                </div>

                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      key="expanded"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 mt-4 border-t border-gold-accent/20 space-y-4">
                        <div>
                          <span className="text-sm font-bold text-emerald-luxury dark:text-cream-bg bg-gold-accent/20 px-3 py-1.5 rounded-md transition-colors duration-500">
                            {service.price}
                          </span>
                        </div>
                        <ul className="space-y-2">
                          {service.details.map((item, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2 text-xs text-luxury-text/80 dark:text-cream-bg/80"
                            >
                              <Check
                                size={12}
                                className="text-gold-accent mt-0.5 flex-shrink-0"
                              />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                        <button
                          onClick={() => {
                            const msg = encodeURIComponent(
                              `${t.quiz.inquiryMessage} "${service.title}".`,
                            );
                            window.open(
                              `${CONTACTS.telegram}?text=${msg}`,
                              "_blank",
                              "noreferrer",
                            );
                          }}
                          className="w-full flex items-center justify-center gap-2 bg-gold-accent hover:bg-gold-hover text-emerald-luxury font-semibold text-sm py-2.5 px-4 rounded-xl cursor-pointer transition-colors duration-200"
                        >
                          <MessageCircle size={15} />
                          {t.services.btnContact}
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="flex justify-end border-t border-gold-accent/20 pt-4 mt-5">
                  <button
                    onClick={() =>
                      setExpandedId(isExpanded ? null : service.id)
                    }
                    className="text-emerald-medium dark:text-cream-bg/80 hover:text-gold-hover transition-colors duration-200 cursor-pointer text-xs flex items-center gap-1"
                  >
                    {isExpanded ? t.services.btnLess : t.services.btnMore}
                    {isExpanded ? (
                      <ChevronUp size={12} />
                    ) : (
                      <ArrowRight
                        size={12}
                        className="transform group-hover:translate-x-0.5 transition-transform"
                      />
                    )}
                  </button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

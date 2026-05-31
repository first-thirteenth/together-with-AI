import { Shield, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Quiz } from '../components/Quiz/Quiz.tsx';
// ИСПРАВЛЕНО: Импортируем хук локализации из папки context, которая находится уровнем выше
import { useLang } from '../context/useLang';

export const Home = () => {
  // ИСПРАВЛЕНО: Извлекаем объект перевода t
  const { t } = useLang();

  const handleConsultation = () => {
    console.log('Open consultation');
  };

  return (
    <div className="min-h-screen bg-cream-bg dark:bg-emerald-luxury text-luxury-text dark:text-cream-bg font-sans sticky top-0 z-10 overflow-hidden transition-colors duration-500">
      {/* Мягкое золотистое свечение на фоне в стиле «Тихий люкс» */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold-accent/10 rounded-full blur-3xl pointer-events-none"></div>
      
      {/* Главная секция (Hero) */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 lg:pt-40 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Левая колонка: Оффер и Преимущества */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-cream-card dark:bg-emerald-medium border border-gold-accent/20 dark:border-gold-accent/30 px-3 py-1 rounded-full text-xs text-gold-hover font-medium shadow-sm animate-hero">
              <Shield size={14} className="text-gold-accent" />
              {/* ИСПРАВЛЕНО: Локализация бейджа */}
              <span>{t.home.badge}</span>
            </div>
            
            {/* ИСПРАВЛЕНО: Разделение заголовка для сохранения стилизации акцента */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-emerald-luxury dark:text-cream-bg animate-fade-left will-change-[transform,opacity] transition-colors duration-500">
              {t.home.titlePre}
              <span className="text-gold-hover dark:text-gold-accent">{t.home.titleAccent}</span>
            </h1>
            
            {/* ИСПРАВЛЕНО: Локализация описания */}
            <p className="text-base text-luxury-text/80 dark:text-cream-bg/80 max-w-xl leading-relaxed animate-hero animation-delay-200 transition-colors duration-500">
              {t.home.description}
            </p>

            {/* ИСПРАВЛЕНО: Вывод списка преимущества через map из массива переводов */}
            <ul className="space-y-3 text-sm text-luxury-text/90 dark:text-cream-bg/90 pt-2 animate-hero animation-delay-200 transition-colors duration-500">
              {t.home.features.map((feature: string, index: number) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle2 size={16} className="text-gold-accent flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-hero animation-delay-200">
              <button 
                onClick={handleConsultation}
                className="relative overflow-hidden inline-flex items-center justify-center gap-2 bg-gold-accent hover:bg-gold-hover text-emerald-luxury font-bold px-6 py-3 rounded-lg transition-all text-sm shadow-sm active:scale-98 cursor-pointer group"
              >
                <span className="absolute top-0 -inset-full h-full w-1/2 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-[shine_0.8s_ease-in-out]" />
                <span className="relative z-10 flex items-center gap-2">
                  {/* ИСПРАВЛЕНО: Локализация кнопки аудита */}
                  {t.home.btnAudit}
                  <ArrowRight size={16} />
                </span>
              </button>

              <button className="inline-flex items-center justify-center bg-cream-card dark:bg-emerald-medium hover:bg-white dark:hover:bg-emerald-medium/50 border border-gold-accent/20 dark:border-gold-accent/30 text-emerald-medium dark:text-cream-bg font-semibold px-6 py-3 rounded-lg text-sm transition-all cursor-pointer shadow-sm">
                {/* ИСПРАВЛЕНО: Локализация кнопки программ */}
                {t.home.btnPrograms}
              </button>
            </div>
          </div>

          {/* Правая колонка: Наш интерактивный Квиз */}
          <div className="relative justify-self-center lg:justify-self-end w-full max-w-md animate-hero animation-delay-200">
            <div className="absolute -inset-1 bg-gradient-to-r from-gold-accent/20 to-transparent rounded-2xl blur opacity-30"></div>
            
            <div className="relative bg-emerald-luxury dark:bg-[#081b15] p-6 sm:p-8 rounded-2xl shadow-2xl border border-gold-accent/15 dark:border-gold-accent/20 transition-colors duration-500">
              {/* ИСПРАВЛЕНО: Локализация заголовка квиза */}
              <h3 className="text-xl font-bold mb-1 text-cream-bg">{t.home.quizTitle}</h3>
              {/* ИСПРАВЛЕНО: Локализация описания квиза */}
              <p className="text-xs text-cream-bg/60 mb-5">{t.home.quizDesc}</p>
              
              <Quiz />
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};





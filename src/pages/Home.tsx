// src/pages/Home.tsx
import { Shield, ArrowRight, CheckCircle2 } from 'lucide-react';
// Импортируем наш квиз по правильному относительному пути
import { Quiz } from '../components/Quiz/Quiz.tsx';

export const Home = () => {
  const handleConsultation = () => {
    console.log('Open consultation');
  };

  return (
    <div className="min-h-screen bg-cream-bg text-luxury-text font-sans sticky top-0 z-10 overflow-hidden">
      {/* Мягкое золотистое свечение на фоне в стиле «Тихий люкс» */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold-accent/10 rounded-full blur-3xl pointer-events-none"></div>
      
      {/* Главная секция (Hero) */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 lg:pt-40 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Левая колонка: Оффер и Преимущества */}
          <div className="space-y-6 animate-hero">
            <div className="inline-flex items-center gap-2 bg-cream-card border border-gold-accent/20 px-3 py-1 rounded-full text-xs text-gold-hover font-medium shadow-sm">
              <Shield size={14} className="text-gold-accent" />
              <span>Официальная легализация и релокация под ключ</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-emerald-luxury">
              Ваш надежный путь к <span className="text-gold-hover">ВНЖ и гражданству</span>
            </h1>
            
            <p className="text-base text-luxury-text/80 max-w-xl leading-relaxed">
              Комплексное юридическое сопровождение: от анализа документов до гарантированного получения статуса. Минимизируем риски отказов на 99%.
            </p>

            {/* Списочные преимущества */}
            <ul className="space-y-3 text-sm text-luxury-text/90 pt-2">
              <li className="flex items-center gap-3">
                <CheckCircle2 size={16} className="text-gold-accent flex-shrink-0" />
                <span>Оценка шансов до заключения договора</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 size={16} className="text-gold-accent flex-shrink-0" />
                <span>Работаем со сложными кейсами после отказов</span>
              </li>
            </ul>

            {/* Кнопки действия */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button 
                onClick={handleConsultation}
                className="inline-flex items-center justify-center gap-2 bg-gold-accent hover:bg-gold-hover text-emerald-luxury font-bold px-6 py-3 rounded-lg transition-all text-sm shadow-sm active:scale-98 cursor-pointer"
              >
                Получить аудит кейса
                <ArrowRight size={16} />
              </button>
              <button className="inline-flex items-center justify-center bg-cream-card hover:bg-white border border-gold-accent/20 text-emerald-medium font-semibold px-6 py-3 rounded-lg text-sm transition-all cursor-pointer shadow-sm">
                Посмотреть программы
              </button>
            </div>
          </div>

          {/* Правая колонка: Наш интерактивный Квиз (Контрастный глубокий блок) */}
          <div className="relative justify-self-center lg:justify-self-end w-full max-w-md animate-hero animation-delay-200">
            {/* Свечение позади формы */}
            <div className="absolute -inset-1 bg-gradient-to-r from-gold-accent/20 to-transparent rounded-2xl blur opacity-30"></div>
            
            {/* Контейнер формы в глубоком изумрудном цвете для мощного фокуса */}
            <div className="relative bg-emerald-luxury p-6 sm:p-8 rounded-2xl shadow-2xl border border-gold-accent/10">
              <h3 className="text-xl font-bold mb-1 text-cream-bg">Проверить шансы на ВНЖ</h3>
              <p className="text-xs text-cream-bg/60 mb-5">Ответьте на 3 вопроса профиля для экспресс-оценки вашего кейса экспертом.</p>
              
              {/* Встраиваем компонент квиза */}
              <Quiz />
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};


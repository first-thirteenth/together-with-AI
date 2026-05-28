// src/pages/Home.tsx
import { Shield, ArrowRight, CheckCircle2 } from 'lucide-react';
// Импортируем наш квиз по правильному относительному пути
import { Quiz } from '../components/Quiz/Quiz.tsx';

export const Home = () => {
  const handleConsultation = () => {
    console.log('Open consultation');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans">
      {/* Декоративный размытый фон для Senior-эффекта */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none"></div>
      
      {/* Главная секция (Hero) */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-16 lg:pt-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Левая колонка: Оффер и Преимущества */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-slate-900 border border-slate-800 px-3 py-1 rounded-full text-xs text-legal-gold">
              <Shield size={14} />
              <span>Официальная легализация и релокация под ключ</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              Ваш надежный путь к <span className="text-legal-gold">ВНЖ и гражданству</span>
            </h1>
            
            <p className="text-base text-slate-400 max-w-xl leading-relaxed">
              Комплексное юридическое сопровождение: от анализа документов до гарантированного получения статуса. Минимизируем риски отказов на 99%.
            </p>

            {/* Списочные преимущества */}
            <ul className="space-y-3 text-sm text-slate-300 pt-2">
              <li className="flex items-center gap-3">
                <CheckCircle2 size={16} className="text-legal-gold flex-shrink-0" />
                <span>Оценка шансов до заключения договора</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 size={16} className="text-legal-gold flex-shrink-0" />
                <span>Работаем со сложными кейсами после отказов</span>
              </li>
            </ul>

            {/* Кнопки действия */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button 
                onClick={handleConsultation}
                className="inline-flex items-center justify-center gap-2 bg-legal-gold hover:bg-amber-800 text-white font-semibold px-6 py-3 rounded-lg transition-all text-sm shadow-lg shadow-amber-950/20 active:scale-98"
              >
                Получить аудит кейса
                <ArrowRight size={16} />
              </button>
              <button className="inline-flex items-center justify-center bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 font-semibold px-6 py-3 rounded-lg text-sm transition-all">
                Посмотреть программы
              </button>
            </div>
          </div>

          {/* Правая колонка: Наш интерактивный Квиз */}
          <div className="relative justify-self-center lg:justify-self-end w-full max-w-md">
            {/* Свечение позади формы */}
            <div className="absolute -inset-1 bg-gradient-to-r from-amber-600/20 to-yellow-500/10 rounded-2xl blur opacity-30"></div>
            
            {/* Контейнер формы */}
            <div className="relative bg-slate-900 border border-slate-800 p-6 sm:p-8 rounded-2xl shadow-2xl">
              <h3 className="text-xl font-bold mb-1 text-white">Проверить шансы на ВНЖ</h3>
              <p className="text-xs text-slate-400 mb-5">Ответьте на 3 вопроса профиля для экспресс-оценки вашего кейса юристом.</p>
              
              {/* Встраиваем компонент квиза */}
              <Quiz />
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

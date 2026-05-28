import { useState } from 'react';
import { quizQuestions } from './quizData';
import { ArrowRight, ArrowLeft, CheckCircle } from 'lucide-react';

export const Quiz = () => {
  // Состояния для шагов, ответов и формы контактов
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isFinished, setIsFinished] = useState(false);
  const [userData, setUserData] = useState({ name: '', phone: '' });

  const currentQuestion = quizQuestions[currentStep];
  
  // Расчет прогресса для полосы в процентах
  const progress = Math.round(((currentStep) / quizQuestions.length) * 100);

  const handleSelectOption = (value: string) => {
    setAnswers({ ...answers, [currentQuestion.id]: value });
  };

  const handleNext = () => {
    if (currentStep < quizQuestions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsFinished(true);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Senior-подход: здесь данные отправляются в CRM юриста или Telegram-бота
    console.log('Lead Data for CRM:', { answers, userData });
    alert('Стратегия успешно сформирована! Юрист свяжется с вами в течение 15 минут.');
  };

  // ЭКРАН 2: Финальная форма сбора контактов
  if (isFinished) {
    return (
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="text-center space-y-2 mb-4">
          <div className="inline-flex p-3 bg-amber-500/10 rounded-full text-legal-gold">
            <CheckCircle size={24} />
          </div>
          <h4 className="text-lg font-bold text-white">Анализ профиля завершен</h4>
          <p className="text-xs text-slate-400">Мы подобрали оптимальные программы легализации. Оставьте контакты для получения чеклиста документов.</p>
        </div>
        
        <input 
          type="text" required placeholder="Ваше имя"
          value={userData.name} onChange={e => setUserData({...userData, name: e.target.value})}
          className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-legal-gold transition-colors"
        />
        <input 
          type="tel" required placeholder="Телефон / Telegram"
          value={userData.phone} onChange={e => setUserData({...userData, phone: e.target.value})}
          className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-legal-gold transition-colors"
        />
        
        <button type="submit" className="w-full bg-legal-gold hover:bg-amber-700 text-white font-semibold py-3 rounded-lg text-sm transition-all cursor-pointer">
          Получить стратегию релокации
        </button>
      </form>
    );
  }

  // ЭКРАН 1: Интерактивные вопросы квиза
  return (
    <div className="space-y-4">
      {/* Прогресс-бар */}
      <div className="w-full bg-slate-950 h-1 rounded-full overflow-hidden">
        <div className="bg-legal-gold h-full transition-all duration-300" style={{ width: `${progress}%` }}></div>
      </div>

      {/* Контент вопроса */}
      <div className="min-h-[160px] space-y-3">
        <h4 className="text-base font-bold text-white leading-snug">{currentQuestion.title}</h4>
        {currentQuestion.subtitle && <p className="text-xs text-slate-400 -mt-2">{currentQuestion.subtitle}</p>}
        
        {/* Список вариантов ответа */}
        <div className="space-y-2 pt-1">
          {currentQuestion.options.map((option) => (
            <button
              key={option.value}
              onClick={() => handleSelectOption(option.value)}
              className={`w-full text-left px-4 py-2.5 rounded-lg border text-xs transition-all flex items-center justify-between cursor-pointer ${
                answers[currentQuestion.id] === option.value
                  ? 'border-legal-gold bg-amber-500/5 text-white font-medium'
                  : 'border-slate-800 bg-slate-950/40 text-slate-300 hover:border-slate-700'
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      {/* Кнопки Назад / Далее */}
      <div className="flex items-center justify-between border-t border-slate-800/60 pt-3">
        <button
          onClick={handleBack}
          disabled={currentStep === 0}
          className="inline-flex items-center gap-1 text-xs text-slate-400 hover:text-white disabled:opacity-0 transition-colors cursor-pointer"
        >
          <ArrowLeft size={12} /> Назад
        </button>
        
        <button
          onClick={handleNext}
          disabled={!answers[currentQuestion.id]}
          className="inline-flex items-center gap-1 bg-slate-800 hover:bg-slate-700 text-white disabled:bg-slate-900 disabled:text-slate-600 font-semibold px-4 py-2 rounded-lg text-xs transition-all cursor-pointer"
        >
          {currentStep === quizQuestions.length - 1 ? 'Результат' : 'Далее'}
          <ArrowRight size={12} />
        </button>
      </div>
    </div>
  );
};

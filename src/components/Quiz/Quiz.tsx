import { useState } from 'react';
import { quizQuestions } from './quizData';
import { ArrowRight, ArrowLeft, CheckCircle, Loader2 } from 'lucide-react';

export const Quiz = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isFinished, setIsFinished] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [userData, setUserData] = useState({ name: '', phone: '' });

  const currentQuestion = quizQuestions[currentStep];
  const progress = Math.round((currentStep / quizQuestions.length) * 100);

  const handleSelectOption = (value: string) => {
    if (currentQuestion) {
      setAnswers({ ...answers, [currentQuestion.id]: value });
    }
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    const TELEGRAM_TOKEN = import.meta.env['VITE_TELEGRAM_TOKEN'] as string;
    const TELEGRAM_CHAT_ID = import.meta.env['VITE_TELEGRAM_CHAT_ID'] as string;
    const cleanPhone = userData.phone.replace(/\D/g, '');

    if (!TELEGRAM_TOKEN || !cleanPhone || !TELEGRAM_CHAT_ID) {
      console.warn('Конфигурация Telegram API или номер телефона не инициализированы');
    }

    const message = `
🕊️ *ЛЁГКАЯ ЛЕГАЛИЗАЦИЯ*
📥 _Новая анкета с сайта_

👤 *Имя клиента:* ${userData.name}
📞 *Телефон:* ${userData.phone}

📊 *Профиль анкетирования:*
• *Источник дохода:* ${answers.source === 'remote' ? 'Удаленка / Фриланс' : answers.source === 'business' ? 'Бизнес / Дивиденды' : answers.source === 'passive' ? 'Пассивный доход' : 'Ищет работу на месте'}
• *Сумма дохода:* ${answers.income === 'high' ? 'Более €4 000' : answers.income === 'medium' ? '€2 000 — €4 000' : 'До €2 000'}
• *Образование:* ${answers.education === 'higher' ? 'Высшее (диплом)' : answers.education === 'secondary' ? 'Специальное / Опыт от 3 лет' : 'Нет диплома'}

⚡️ *Быстрая связь с клиентом:*
• [Написать в WhatsApp](https://wa.me{cleanPhone})
    `.trim();

    try {
      const response = await fetch(`https://telegram.org{TELEGRAM_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: message,
          parse_mode: 'Markdown',
          disable_web_page_preview: true,
        }),
      });

      if (response.ok) {
        alert('Данные успешно отправлены! Анастасия свяжется с вами в ближайшее время.');
        setAnswers({});
        setUserData({ name: '', phone: '' });
        setCurrentStep(0);
        setIsFinished(false);
      } else {
        throw new Error('Ошибка отправки через Telegram API');
      }
    } catch (error) {
      console.error(error);
      alert('Произошла ошибка при отправке данных. Пожалуйста, проверьте подключение к интернету.');
    } finally {
      setIsSending(false);
    }
  };

  if (isFinished) {
    return (
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="text-center space-y-2 mb-4">
          <div className="inline-flex p-3 bg-gold-accent/10 rounded-full text-gold-accent">
            <CheckCircle size={24} />
          </div>
          <h4 className="text-lg font-bold text-cream-bg">Анализ профиля завершен</h4>
          <p className="text-xs text-cream-bg/60">Мы подобрали оптимальные программы легализации. Оставьте контакты для получения чеклиста документов.</p>
        </div>
        
        <input 
          type="text" required placeholder="Ваше имя" disabled={isSending}
          value={userData.name} onChange={e => setUserData({...userData, name: e.target.value})}
          className="w-full bg-emerald-medium/40 dark:bg-zinc-950/40 border border-gold-accent/20 dark:border-zinc-800 rounded-lg px-4 py-2.5 text-sm text-cream-bg placeholder-cream-bg/40 focus:outline-none focus:border-gold-accent transition-all disabled:opacity-50"
        />
        <input 
          type="tel" required placeholder="Телефон / Telegram" disabled={isSending}
          value={userData.phone} onChange={e => setUserData({...userData, phone: e.target.value})}
          className="w-full bg-emerald-medium/40 dark:bg-zinc-950/40 border border-gold-accent/20 dark:border-zinc-800 rounded-lg px-4 py-2.5 text-sm text-cream-bg placeholder-cream-bg/40 focus:outline-none focus:border-gold-accent transition-all disabled:opacity-50"
        />
        
        <button 
          type="submit" 
          disabled={isSending}
          className="w-full relative overflow-hidden bg-gold-accent hover:bg-gold-hover text-emerald-luxury font-semibold py-3 rounded-lg text-sm transition-all cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed group/btn shadow-md"
        >
          <span className="absolute top-0 -inset-full h-full w-1/2 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover/btn:opacity-100 group-hover/btn:animate-[shine_0.8s_ease-in-out]" />
          {isSending ? (
            <>
              <Loader2 size={16} className="animate-spin" />
              <span>Отправка данных...</span>
            </>
          ) : (
            <span className="relative z-10">Получить стратегию релокации</span>
          )}
        </button>
      </form>
    );
  }

  return (
    <div className="space-y-4">
      {/* Прогресс-бар */}
      <div className="w-full bg-cream-bg/10 dark:bg-zinc-900 h-1 rounded-full overflow-hidden">
        <div className="bg-gold-accent h-full transition-all duration-300" style={{ width: `${progress}%` }}></div>
      </div>

      {/* Контент вопроса */}
      <div className="min-h-[160px] space-y-3">
        <h4 className="text-base font-bold text-cream-bg leading-snug">{currentQuestion?.title}</h4>
        {currentQuestion?.subtitle && <p className="text-xs text-cream-bg/60 -mt-2">{currentQuestion.subtitle}</p>}
        
        {/* Список вариантов ответа */}
        <div className="space-y-2 pt-1">
          {currentQuestion?.options.map((option) => {
            const isSelected = currentQuestion ? answers[currentQuestion.id] === option.value : false;
            return (
              <button
                key={option.value}
                type="button"
                onClick={() => handleSelectOption(option.value)}
                className={`w-full text-left px-4 py-2.5 rounded-lg border text-xs transition-all flex items-center justify-between cursor-pointer ${
                  isSelected
                    ? 'border-gold-accent bg-gold-accent/10 text-gold-accent font-semibold shadow-xs'
                    : 'border-gold-accent/20 bg-emerald-medium/20 dark:bg-zinc-950/20 text-cream-bg/80 hover:border-gold-accent/50 hover:bg-emerald-medium/40 dark:hover:bg-zinc-900/40'
                }`}
              >
                <span>{option.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Кнопки Назад / Далее */}
      <div className="flex items-center justify-between border-t border-gold-accent/10 dark:border-zinc-800/60 pt-3">
        <button
          type="button"
          onClick={handleBack}
          disabled={currentStep === 0}
          className="inline-flex items-center gap-1 text-xs text-cream-bg/40 hover:text-cream-bg disabled:opacity-0 transition-colors cursor-pointer font-medium"
        >
          <ArrowLeft size={12} /> Назад
        </button>
        
        <button
          type="button"
          onClick={handleNext}
          disabled={!currentQuestion || !answers[currentQuestion.id]}
          className="inline-flex items-center gap-1 bg-gold-accent hover:bg-gold-hover text-emerald-luxury disabled:bg-gold-accent/10 disabled:text-cream-bg/30 font-semibold px-5 py-2.5 rounded-lg text-xs transition-all cursor-pointer shadow-sm"
        >
          <span>{currentStep === quizQuestions.length - 1 ? 'Результат' : 'Далее'}</span>
          <ArrowRight size={12} />
        </button>
      </div>
    </div>
  );
};

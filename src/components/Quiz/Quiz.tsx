import { useState } from 'react';
import { quizQuestions } from './quizData';
// Добавили Loader2 для отображения индикатора отправки
import { ArrowRight, ArrowLeft, CheckCircle, Loader2 } from 'lucide-react';

export const Quiz = () => {
  // Состояния для шагов, ответов и формы контактов
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isFinished, setIsFinished] = useState(false);
  const [isSending, setIsSending] = useState(false); // Защита кнопки от повторных кликов
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

  // МОДЕРНИЗИРОВАННАЯ ФУНКЦИЯ ОТПРАВКИ ЗАЯВКИ В TELEGRAM
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    // ВСТАВЬТЕ СЮДА ВАШИ ТОЧНЫЕ ДАННЫЕ ИЗ ТЕЛЕГРАМА
    const TELEGRAM_TOKEN = import.meta.env.VITE_TELEGRAM_TOKEN;
    const TELEGRAM_CHAT_ID = import.meta.env.VITE_TELEGRAM_CHAT_ID;

    // Очищаем введенный номер от скобок и дефисов для генерации чистой ссылки в WhatsApp
    const cleanPhone = userData.phone.replace(/\D/g, '');

    // Форматируем красивый текст сообщения для Анастасии
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
• [Написать в WhatsApp](https://wa.me/${cleanPhone})
    `.trim();

    try {
      const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: message,
          parse_mode: 'Markdown',
          disable_web_page_preview: true, // Убирает громоздкие превью ссылок в чате бота
        }),
      });

      if (response.ok) {
        alert('Данные успешно отправлены! Анастасия свяжется с вами в ближайшее время.');
        // Очищаем форму и возвращаем квиз в исходное начало
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
          type="text" required placeholder="Ваше имя" disabled={isSending}
          value={userData.name} onChange={e => setUserData({...userData, name: e.target.value})}
          className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-legal-gold transition-colors disabled:opacity-50"
        />
        <input 
          type="tel" required placeholder="Телефон / Telegram" disabled={isSending}
          value={userData.phone} onChange={e => setUserData({...userData, phone: e.target.value})}
          className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-legal-gold transition-colors disabled:opacity-50"
        />
        
        {/* Кнопка с индикатором отправки (Senior UX) */}
        <button 
          type="submit" 
          disabled={isSending}
          className="w-full bg-legal-gold hover:bg-amber-700 text-white font-semibold py-3 rounded-lg text-sm transition-all cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSending ? (
            <>
              <Loader2 size={16} className="animate-spin" />
              Отправка данных...
            </>
          ) : (
            'Получить стратегию релокации'
          )}
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

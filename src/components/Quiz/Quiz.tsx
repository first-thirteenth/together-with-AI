import { useState } from 'react';
import { ArrowRight, ArrowLeft, CheckCircle, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLang } from '../../context/useLang';

export const Quiz = () => {
  const { lang, t } = useLang();
  
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, { stepId: string; value: string }>>({});
  const [isFinished, setIsFinished] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [userData, setUserData] = useState({ name: '', phone: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Берем шаги квиза динамически из текущего языкового словаря
  const quizSteps = t.quiz.steps || [];
  const totalSteps = quizSteps.length;
  
  // Последний шаг в массиве отведен под форму контактов
  const isLastQuestionStep = currentStep === totalSteps - 2;
  const currentQuestion = quizSteps[currentStep];

  // Расчет прогресса на основе заполненных шагов
  const progress = totalSteps > 1 ? Math.round((currentStep / (totalSteps - 1)) * 100) : 0;

  const handleSelectOption = (value: string) => {
    if (currentQuestion) {
      setAnswers({
        ...answers,
        [currentQuestion.id]: {
          stepId: currentQuestion.id,
          value: value
        }
      });
    }
  };

  const handleNext = () => {
    if (currentStep < totalSteps - 2) {
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

    const TELEGRAM_TOKEN = import.meta.env.VITE_TELEGRAM_TOKEN as string;
    const TELEGRAM_CHAT_ID = import.meta.env.VITE_TELEGRAM_CHAT_ID as string;

    if (!TELEGRAM_TOKEN || !TELEGRAM_CHAT_ID) {
      console.warn('Конфигурация Telegram API не инициализирована в .env');
      alert('Ошибка конфигурации формы. Пожалуйста, свяжитесь напрямую.');
      setIsSending(false);
      return;
    }

    // Сопоставляем сохраненные значения value с текстом вопросов и ответов для отправки в Telegram
    const formattedAnswers = Object.entries(answers)
      .map(([stepId, stored]) => {
        const originalStep = quizSteps.find(s => s.id === stepId);
        const originalOption = originalStep?.options?.find(o => o.value === stored.value);
        
        const questionText = originalStep?.question || stepId;
        const answerText = originalOption?.label || stored.value;
        
        return `• *${questionText}*\n  └ _${answerText}_`;
      })
      .join('\n\n');

    // СЕНЬОРСКАЯ ЛОГИКА: Иммутабельное определение типа связи без лишних переменных
    const isPhone = /^[+\d()-\s]+$/.test(userData.phone.trim());
    const cleanContact = userData.phone.trim();

    const contactLine = isPhone
      ? `📞 *Телефон:* ${cleanContact}`
      : `✈️ *Telegram:* @${cleanContact.replace('@', '')}`;

    const quickLinkLine = isPhone
      ? `• [Открыть чат в WhatsApp](https://wa.me/${cleanContact.replace(/\D/g, '')})`
      : `• [Открыть чат в Telegram](https://t.me/${cleanContact.replace('@', '')})`;

    const message = `
    🕊️ *ЛЁГКАЯ ЛЕГАЛИЗАЦИЯ*
    📥 _Новая анкета с сайта (Язык: ${lang})_

    👤 *Имя клиента:* ${userData.name}
    ${contactLine}

    📊 *Профиль анкетирования:*
    ${formattedAnswers}

    ⚡️ *Быстрая связь:*
    ${quickLinkLine}
    `.trim();

    try {
      // Отладочный лог: проверяем, что Vite видит переменные из .env
      console.log('Проверка ENV токенов:', { token: TELEGRAM_TOKEN, chat: TELEGRAM_CHAT_ID });

      // ИСПРАВЛЕНО: Бронебойная сборка URL строго на официальный эндпоинт api.telegram.org/bot...
      const url = 'https://api.telegram.org/bot' + TELEGRAM_TOKEN + '/sendMessage';
      console.log('Отправка запроса на URL:', url);

      const response = await fetch(url, {
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
        setAnswers({});
        setCurrentStep(0);
        setIsSubmitted(true);  // Переключаем на финальный экран успеха
      } else {
        const errorData = await response.json().catch(() => ({}));
        console.error('Telegram API Error Response:', errorData);
        throw new Error('Ошибка отправки через Telegram API');
      }
    } catch (error) {
      console.error('Критическая ошибка сети:', error);
      alert('Произошла ошибка при отправке данных. Проверьте сеть или включите VPN, если Telegram заблокирован вашим провайдером.');
    } finally {
      setIsSending(false);
    }
  };


  return (
    <div className="w-full max-w-md mx-auto bg-emerald-luxury/10 dark:bg-zinc-950/20 p-6 rounded-2xl border border-gold-accent/10 backdrop-blur-sm">
      {/* Прогресс-бар */}
      <div className="w-full bg-cream-bg/10 dark:bg-zinc-900 h-1 rounded-full overflow-hidden mb-6">
        <div 
          className="bg-gold-accent h-full transition-all duration-500 ease-out" 
          style={{ width: `${isFinished ? 100 : progress}%` }}
        />
      </div>
      <AnimatePresence mode="wait">
        {!isFinished ? (
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -15 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="space-y-4"
          >
            <div className="min-h-[160px] space-y-3">
              <h4 className="text-base font-bold text-cream-bg leading-snug">
                {currentQuestion?.question}
              </h4>
              {currentQuestion?.subtitle && (
                <p className="text-xs text-cream-bg/60 -mt-2">{currentQuestion.subtitle}</p>
              )}
              
              <div className="space-y-2 pt-1">
                {currentQuestion?.options?.map((option) => {
                  const isSelected = answers[currentQuestion.id]?.value === option.value;
                  return (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => handleSelectOption(option.value)}
                      className={`w-full text-left px-4 py-3 rounded-lg border text-xs transition-all flex items-center justify-between cursor-pointer ${
                        isSelected
                          ? 'border-gold-accent bg-gold-accent/10 text-gold-accent font-semibold shadow-xs'
                          : 'border-gold-accent/20 bg-emerald-medium/20 dark:bg-zinc-950/20 text-cream-bg/80 hover:border-gold-accent/50 hover:bg-emerald-medium/40 dark:hover:bg-zinc-900/40'
                      }`}
                    >
                      <span>{option.label}</span>
                      {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-gold-accent" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Кнопки управления */}
            <div className="flex items-center justify-between border-t border-gold-accent/10 dark:border-zinc-800/60 pt-4 mt-2">
              <button
                type="button"
                onClick={handleBack}
                disabled={currentStep === 0}
                className="inline-flex items-center gap-1 text-xs text-cream-bg/40 hover:text-cream-bg disabled:opacity-0 transition-all cursor-pointer font-medium"
              >
                <ArrowLeft size={12} /> {t.quiz.back}
              </button>
              
              <button
                type="button"
                onClick={handleNext}
                disabled={!currentQuestion || !answers[currentQuestion.id]}
                className="inline-flex items-center gap-1 bg-gold-accent hover:bg-gold-hover text-emerald-luxury disabled:bg-gold-accent/10 disabled:text-cream-bg/30 font-semibold px-5 py-2.5 rounded-lg text-xs transition-all cursor-pointer shadow-sm"
              >
                <span>{isLastQuestionStep ? t.quiz.submit : t.quiz.next}</span>
                <ArrowRight size={12} />
              </button>
            </div>
          </motion.div>
        ) : (
          <AnimatePresence mode="wait">
            {userData.name && isSubmitted && !isSending ? (
              /* Премиальный экран успеха */
              <motion.div
                key="success-screen"
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="text-center space-y-5 py-6"
              >
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1, rotate: 360 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.1 }}
                  className="inline-flex p-4 bg-gold-accent/10 rounded-full text-gold-accent shadow-[0_0_20px_rgba(197,168,128,0.15)]"
                >
                  <CheckCircle size={40} className="animate-pulse" />
                </motion.div>

                <div className="space-y-2">
                  <motion.h4 className="text-xl font-bold text-cream-bg tracking-tight">
                    {t.quiz.thanks}
                  </motion.h4>
                  <motion.p className="text-xs text-cream-bg/70 leading-relaxed max-w-xs mx-auto">
                    <span className="text-gold-accent font-semibold">{userData.name}</span>, {t.quiz.thanksSub}
                  </motion.p>
                </div>

                <motion.button
                  type="button"
                  onClick={() => {
                    setUserData({ name: '', phone: '' });
                    setIsSubmitted(false);
                  }}
                  className="inline-flex items-center text-[11px] uppercase tracking-widest text-gold-accent hover:text-gold-hover transition-colors font-bold cursor-pointer pt-2"
                >
                  {lang === 'RU' ? 'Пройти заново' : lang === 'PL' ? 'Rozpocznij ponownie' : lang === 'UA' ? 'Пройти знову' : 'Start over'}
                </motion.button>
              </motion.div>
            ) : (
              /* Форма ввода контактов перед отправкой */
              <motion.form
                key="final-form"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                <div className="text-center space-y-2 mb-4">
                  <div className="inline-flex p-3 bg-gold-accent/10 rounded-full text-gold-accent">
                    <CheckCircle size={24} />
                  </div>
                  <h4 className="text-lg font-bold text-cream-bg">
                    {lang === 'RU' ? 'Анализ профиля завершен' : lang === 'PL' ? 'Analiza profilu zakończona' : lang === 'UA' ? 'Аналіз профілю завершено' : 'Profile analysis completed'}
                  </h4>
                  <p className="text-xs text-cream-bg/60">
                    {lang === 'RU' ? 'Мы подобрали оптимальные программы. Оставьте контакты для связи.' : 
                     lang === 'PL' ? 'Dopasowaliśmy optymalne programy. Zostaw kontakt do siebie.' : 
                     lang === 'UA' ? 'Ми підібрали оптимальні програми. Залиште контакти для зв’язку.' : 
                     'We have selected the optimal programs. Leave your contacts to get in touch.'}
                  </p>
                </div>
                
                <input 
                  type="text" 
                  required 
                  placeholder={lang === 'RU' ? 'Ваше имя' : lang === 'PL' ? 'Twoje imię' : lang === 'UA' ? 'Ваше ім’я' : 'Your name'} 
                  disabled={isSending}
                  value={userData.name} 
                  onChange={e => {
                    const inputValue = e.target.value;
                    const onlyLetters = inputValue.replace(/[^a-zA-Zа-яА-ЯёЁąęćłńóśźżĄĘĆŁŃÓŚŹŻ\s-]/g, '');
                    setUserData({...userData, name: onlyLetters});
                  }}
                  className="w-full bg-emerald-medium/40 dark:bg-zinc-950/40 border border-gold-accent/20 dark:border-zinc-800 rounded-lg px-4 py-2.5 text-sm text-cream-bg placeholder-cream-bg/40 focus:outline-none focus:border-gold-accent transition-all disabled:opacity-50"
                />
                
                <input 
                  type="text" 
                  required 
                  placeholder={
                    lang === 'RU' ? 'Telegram (@username) или телефон' : 
                    lang === 'PL' ? 'Telegram (@username) lub numer telefonu' : 
                    lang === 'UA' ? 'Telegram (@username) або телефон' : 
                    'Telegram (@username) or phone number'
                  } 
                  disabled={isSending}
                  value={userData.phone} 
                  onChange={e => setUserData({...userData, phone: e.target.value})}
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
                      <span>{lang === 'RU' ? 'Отправка...' : lang === 'PL' ? 'Wysyłanie...' : lang === 'UA' ? 'Надсилання...' : 'Sending...'}</span>
                    </>
                  ) : (
                    <span className="relative z-10">{t.quiz.submit}</span>
                  )}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        )}
      </AnimatePresence>
    </div>
  );
};
       
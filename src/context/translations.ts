export type LanguageCode = 'EN' | 'PL' | 'RU' | 'UA';

export interface QuizOptionSchema {
  value: string;
  label: string;
}

export interface QuizStepSchema {
  id: string;
  question: string;
  subtitle?: string;
  placeholder?: string;
  options?: QuizOptionSchema[];
}

export interface TranslationSchema {
  header: {
    main: string;
    about: string;
    services: string;
    reviews: string;
    consultation: string;
    callConfirm: string;
    langSelect: string;
  };
  quiz: {
    next: string;
    back: string;
    submit: string;
    progress: string;
    thanks: string;
    thanksSub: string;
    steps: QuizStepSchema[];
  };
}

export const translations: Record<LanguageCode, TranslationSchema> = {
  RU: {
    header: {
      main: 'Главная',
      about: 'Обо мне',
      services: 'Услуги и цены',
      reviews: 'Отзывы',
      consultation: 'Консультация',
      callConfirm: 'Вы хотите позвонить Анастасии Лапо?',
      langSelect: 'Выберите язык',
    },
    quiz: {
      next: 'Далее',
      back: 'Назад',
      submit: 'Отправить ответы',
      progress: 'Шаг',
      thanks: 'Спасибо!',
      thanksSub: 'Анастасия уже изучает ваши ответы и скоро свяжется с вами.',
      steps: [
        {
          id: 'source',
          question: 'Какой у вас основной источник дохода?',
          options: [
            { value: 'remote', label: 'Удаленная работа / Фриланс (контракты вне страны)' },
            { value: 'business', label: 'Собственный бизнес / Дивиденды' },
            { value: 'local', label: 'Планирую искать работу на месте' },
            { value: 'passive', label: 'Пассивный доход (аренда, пенсия)' },
          ]
        },
        {
          id: 'income',
          question: 'Какой среднемесячный доход вы можете подтвердить официально?',
          subtitle: 'Показатель на главного заявителя',
          options: [
            { value: 'low', label: 'До €2 000' },
            { value: 'medium', label: '€2 000 — €4 000' },
            { value: 'high', label: 'Более €4 000' },
          ]
        },
        {
          id: 'education',
          question: 'Ваш уровень образования?',
          subtitle: 'Для ряда программ важен профильный диплом',
          options: [
            { value: 'higher', label: 'Высшее (бакалавр, магистр)' },
            { value: 'secondary', label: 'Среднее специальное / Опыт работы от 3 лет' },
            { value: 'none', label: 'Нет диплома и подтвержденного опыта' },
          ]
        },
        {
          id: 'contacts',
          question: 'Оставьте ваши контактные данные',
          subtitle: 'Анастасия свяжется с вами для разбора вашей ситуации',
          placeholder: 'Ваше имя и Telegram / WhatsApp'
        }
      ]
    }
  },
  PL: {
    header: {
      main: 'Główna',
      about: 'O mnie',
      services: 'Usługi i ceny',
      reviews: 'Opinie',
      consultation: 'Konsultacja',
      callConfirm: 'Czy chcesz zadzwonić do Anastazji Łapo?',
      langSelect: 'Wybierz język',
    },
    quiz: {
      next: 'Dalej',
      back: 'Wstecz',
      submit: 'Wyślij odpowiedzi',
      progress: 'Krok',
      thanks: 'Dziękujemy!',
      thanksSub: 'Anastazja już analizuje Twoje odpowiedzi i wkrótce się z Tobą skontaktuje.',
      steps: [
        {
          id: 'source',
          question: 'Jakie jest Twoje główne źródło dochodu?',
          options: [
            { value: 'remote', label: 'Praca zdalna / Freelance (kontrakty zagraniczne)' },
            { value: 'business', label: 'Własny biznes / Dywidendy' },
            { value: 'local', label: 'Planuję szukać pracy na miejscu' },
            { value: 'passive', label: 'Dochód pasywny (wynajem, emerytura)' },
          ]
        },
        {
          id: 'income',
          question: 'Jaki średniomiesięczny dochód możesz potwierdzić oficjalnie?',
          subtitle: 'Wskaźnik na głównego wnioskodawcę',
          options: [
            { value: 'low', label: 'Do 2 000 €' },
            { value: 'medium', label: '2 000 € — 4 000 €' },
            { value: 'high', label: 'Powyżej 4 000 €' },
          ]
        },
        {
          id: 'education',
          question: 'Twój poziom wykształcenia?',
          subtitle: 'W przypadku niektórych programów ważny jest dyplom kierunkowy',
          options: [
            { value: 'higher', label: 'Wyższe (licencjat, magister)' },
            { value: 'secondary', label: 'Średnie specjalistyczne / Doświadczenie od 3 lat' },
            { value: 'none', label: 'Brak dyplomu i potwierdzonego doświadczenia' },
          ]
        },
        {
          id: 'contacts',
          question: 'Zostaw swoje dane kontaktowe',
          subtitle: 'Anastazja skontaktuje się z Tobą w celu analizy Twojej sytuacji',
          placeholder: 'Twoje imię oraz Telegram / WhatsApp'
        }
      ]
    }
  },
  EN: {
    header: {
      main: 'Home',
      about: 'About Me',
      services: 'Services & Prices',
      reviews: 'Reviews',
      consultation: 'Consultation',
      callConfirm: 'Do you want to call Anastazja Łapo?',
      langSelect: 'Select language',
    },
    quiz: {
      next: 'Next',
      back: 'Back',
      submit: 'Submit answers',
      progress: 'Step',
      thanks: 'Thank you!',
      thanksSub: 'Anastazja is already reviewing your answers and will contact you shortly.',
      steps: [
        {
          id: 'source',
          question: 'What is your primary source of income?',
          options: [
            { value: 'remote', label: 'Remote work / Freelance (foreign contracts)' },
            { value: 'business', label: 'Own business / Dividends' },
            { value: 'local', label: 'I plan to look for a job locally' },
            { value: 'passive', label: 'Passive income (rent, pension)' },
          ]
        },
        {
          id: 'income',
          question: 'What average monthly income can you officially prove?',
          subtitle: 'Based on the primary applicant',
          options: [
            { value: 'low', label: 'Up to €2,000' },
            { value: 'medium', label: '€2,000 — €4,000' },
            { value: 'high', label: 'More than €4,000' },
          ]
        },
        {
          id: 'education',
          question: 'What is your level of education?',
          subtitle: 'A relevant diploma is important for a number of programs',
          options: [
            { value: 'higher', label: 'Higher education (Bachelor, Master)' },
            { value: 'secondary', label: 'Specialized secondary / 3+ years of experience' },
            { value: 'none', label: 'No diploma or confirmed experience' },
          ]
        },
        {
          id: 'contacts',
          question: 'Leave your contact details',
          subtitle: 'Anastazja will contact you to analyze your case',
          placeholder: 'Your name and Telegram / WhatsApp'
        }
      ]
    }
  },
  UA: {
    header: {
      main: 'Головна',
      about: 'Про мене',
      services: 'Послуги та ціни',
      reviews: 'Відгуки',
      consultation: 'Консультація',
      callConfirm: 'Ви хочете зателефонувати Анастасії Лапо?',
      langSelect: 'Оберіть мову',
    },
    quiz: {
      next: 'Далі',
      back: 'Назад',
      submit: 'Надіслати відповіді',
      progress: 'Крок',
      thanks: 'Дякуємо!',
      thanksSub: 'Анастасія вже вивчає ваші відповіді та скоро зв’яжеться з вами.',
      steps: [
        {
          id: 'source',
          question: 'Яке у вас основне джерело доходу?',
          options: [
            { value: 'remote', label: 'Віддалена робота / Фріланс (контракти поза країною)' },
            { value: 'business', label: 'Власний бізнес / Дивіденди' },
            { value: 'local', label: 'Планую шукати роботу на місці' },
            { value: 'passive', label: 'Пасивний дохід (оренда, пенсія)' },
          ]
        },
        {
          id: 'income',
          question: 'Який середньомісячний дохід ви можете підтвердити офіційно?',
          subtitle: 'Показник на головного заявника',
          options: [
            { value: 'low', label: 'До €2 000' },
            { value: 'medium', label: '€2 000 — €4 000' },
            { value: 'high', label: 'Понад €4 000' },
          ]
        },
        {
          id: 'education',
          question: 'Ваш рівень освіти?',
          subtitle: 'Для низки програм важливий профільний диплом',
          options: [
            { value: 'higher', label: 'Вища (бакалавр, магістр)' },
            { value: 'secondary', label: 'Середня спеціальна / Досвід роботи від 3 років' },
            { value: 'none', label: 'Немає диплома та підтвердженого досвіду' },
          ]
        },
        {
          id: 'contacts',
          question: 'Залиште ваші контактні дані',
          subtitle: 'Анастасія зв’яжеться з вами для розбору вашої ситуації',
          placeholder: 'Ваше ім’я та Telegram / WhatsApp'
        }
      ]
    }
  }
};




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

export interface AboutSectionSchema {
  badge: string;
  role: string;
  titlePre: string;
  titleAccent: string;
  titlePost: string;
  description: string;
  features: string[];
  stats: {
    casesTitle: string;
    casesDesc: string;
    rateTitle: string;
    rateDesc: string;
  };
}

// ИСПРАВЛЕНО: Дописали форму данных для главной страницы Hero
export interface HomeSectionSchema {
  badge: string;
  titlePre: string;
  titleAccent: string;
  description: string;
  features: string[];
  btnAudit: string;
  btnPrograms: string;
  quizTitle: string;
  quizDesc: string;
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
  about: AboutSectionSchema;
  // ИСПРАВЛЕНО: Связали главную страницу со схемой
  home: HomeSectionSchema;
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
    },
    about: {
      badge: "Личный бренд и стандарты",
      role: "Основатель проекта",
      titlePre: "Личный опыт и ",
      titleAccent: "юридическая точность",
      titlePost: " на вашей стороне",
      description: "Я специализируюсь на международном миграционном праве более 8 лет. Моя работа заключается в том, чтобы убрать из процесса релокации всю бюрократическую неопределенность. Я не просто заполняю анкеты, а выстраиваю для вас легальный, безопасный и прогнозируемый трек получения статуса.",
      features: [
        "Глубокий пре-аудит документов до подписания договора",
        "Прямая связь с экспертом без менеджеров и посредников"
      ],
      stats: {
        casesTitle: "350+ успешных кейсов",
        casesDesc: "Одобренных ВНЖ и ПМЖ в ЕС",
        rateTitle: "98.6% одобрений",
        rateDesc: "За счет жесткого отбора профилей"
      }
    },
    // ИСПРАВЛЕНО: Добавлен русский перевод главной страницы
    home: {
      badge: "Официальная легализация и релокация под ключ",
      titlePre: "Ваш надежный путь к ",
      titleAccent: "ВНЖ и гражданству",
      description: "Комплексное юридическое сопровождение: от анализа документов до гарантированного получения статуса. Минимизируем риски отказов на 99%.",
      features: [
        "Оценка шансов до заключения договора",
        "Работаем со сложными кейсами после отказов"
      ],
      btnAudit: "Получить аудит кейса",
      btnPrograms: "Посмотреть программы",
      quizTitle: "Проверить шансы на ВНЖ",
      quizDesc: "Ответьте на 3 вопроса профиля для экспресс-оценки вашего кейса экспертом."
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
    },
    about: {
      badge: "Marka osobista i standardy",
      role: "Założycielka projektu",
      titlePre: "Osobiste doświadczenie i ",
      titleAccent: "precyzja prawna",
      titlePost: " po Twojej stronie",
      description: "Specjalizuję się w międzynarodowym prawie migracyjnym od ponad 8 lat. Moim zadaniem jest wyeliminowanie wszelkiej niepewności biurokratycznej z procesu relokacji. Nie tylko wypełniam wnioski, ale buduję dla Ciebie legalną, bezpieczną i przewidywalną ścieżkę uzyskania statusu.",
      features: [
        "Głęboki audyt wstępny dokumentów przed podpisaniem umowy",
        "Bezpośredni kontakt z ekspertem, bez menedżerów i pośredników"
      ],
      stats: {
        casesTitle: "350+ sukcesów",
        casesDesc: "Zatwierdzonych kart pobytu i rezydentów w UE",
        rateTitle: "98.6% skuteczności",
        rateDesc: "Dzięki rygorystycznej weryfikacji profili"
      }
    },
    // ИСПРАВЛЕНО: Добавлен польский перевод главной страницы
    home: {
      badge: "Oficjalna legalizacja i relokacja kompleksowo",
      titlePre: "Twoja bezpieczna droga do ",
      titleAccent: "karty pobytu i obywatelstwa",
      description: "Kompleksowe wsparcie prawne: od analizy dokumentów do gwarantowanego uzyskania statusu. Minimalizujemy ryzyko odmowy o 99%.",
      features: [
        "Ocena szans przed podpisaniem umowy",
        "Pracujemy ze złożonymi przypadkami po odmowach"
      ],
      btnAudit: "Uzyskaj audyt sprawy",
      btnPrograms: "Zobacz programy",
      quizTitle: "Sprawdź szanse na pobyt",
      quizDesc: "Odpowiedz na 3 pytania profilowe w celu ekspresowej oceny Twojej sprawy przez eksperta."
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
    },
    about: {
      badge: "Personal brand and standards",
      role: "Project Founder",
      titlePre: "Personal experience and ",
      titleAccent: "legal precision",
      titlePost: " on your side",
      description: "I have been specializing in international migration law for over 8 years. My job is to eliminate all bureaucratic uncertainty from the relocation process. I do not just fill out forms, but build a legal, safe, and predictable track for you to obtain your status.",
      features: [
        "Deep pre-audit of documents before signing the contract",
        "Direct communication with the expert without managers or intermediaries"
      ],
      stats: {
        casesTitle: "350+ successful cases",
        casesDesc: "Approved residence permits and permanent residences in the EU",
        rateTitle: "98.6% approval rate",
        rateDesc: "Due to strict profile selection"
      }
    },
    // ИСПРАВЛЕНО: Добавлен английский перевод главной страницы
    home: {
      badge: "Official legalization and turnkey relocation",
      titlePre: "Your reliable path to ",
      titleAccent: "residence permit and citizenship",
      description: "Comprehensive legal support: from document analysis to guaranteed status acquisition. We minimize the risk of refusal by 99%.",
      features: [
        "Assessment of chances before signing the contract",
        "We handle complex cases after prior refusals"
      ],
      btnAudit: "Get a case audit",
      btnPrograms: "View programs",
      quizTitle: "Check eligibility for residency",
      quizDesc: "Answer 3 profile questions for an express assessment of your case by an expert."
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
            { value: 'local', label: 'Планирую шукати роботу на місці' },
            { value: 'passive', label: 'Пассивний дохід (оренда, пенсія)' },
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
          subtitle: 'Анастасія зв’яжеться з вами для розбору вашої ситуации',
          placeholder: 'Ваше ім’я та Telegram / WhatsApp'
        }
      ]
    },
    about: {
      badge: "Особистий бренд та стандарти",
      role: "Засновниця проєкту",
      titlePre: "Особистий досвід та ",
      titleAccent: "юридична точність",
      titlePost: " на вашому боці",
      description: "Я спеціалізуюся на міжнародному міграційному правві понад 8 років. Моя работа полягає в тому, щоб прибрати з процесу релокації всю бюрократичну невизначеність. Я не просто заповнює анкти, а вибудовую для вас легальний, безпечний та прогнозований трек отримання статусу.",
      features: [
        "Глубокий пре-аудит документів до підписання договору",
        "Прямий зв'язок з експертом без менеджерів та посередників"
      ],
      stats: {
        casesTitle: "350+ успішних кейсів",
        casesDesc: "Схвалених посвідок на проживання та ПМП в ЄС",
        rateTitle: "98.6% схвалень",
        rateDesc: "Завдяки жорсткому відбору профілів"
      }
    },
    // ІСПРАВЛЕНО: Добавлен украинский перевод главной страницы
    home: {
      badge: "Офіційна легалізація та релокація під ключ",
      titlePre: "Ваш надійний шлях до ",
      titleAccent: "посвідки та громадянства",
      description: "Комплексний юридичний супровід: від аналізу документів до гарантованого отримання статусу. Мінімізуємо ризики відмов на 99%.",
      features: [
        "Оцінка шансів до укладання договору",
        "Працюємо зі складними кейсами після відмов"
      ],
      btnAudit: "Отримати аудит кейсу",
      btnPrograms: "Переглянути програми",
      quizTitle: "Перевірити шанси на посвідку",
      quizDesc: "Дайте відповідь на 3 питання профілю для експрес-оценки вашого кейсу експертом."
    }
  }
};





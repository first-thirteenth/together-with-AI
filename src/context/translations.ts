export type LanguageCode = "EN" | "PL" | "RU" | "UA";

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

export interface ServiceItemSchema {
  title: string;
  desc: string;
  price: string;
  time: string;
}

export interface ServicesSectionSchema {
  titlePre: string;
  titleAccent: string;
  description: string;
  topChoice: string;
  btnMore: string;
  items: {
    nomad: ServiceItemSchema;
    startup: ServiceItemSchema;
    passive: ServiceItemSchema;
    investor: ServiceItemSchema;
    origin: ServiceItemSchema;
    family: ServiceItemSchema;
    compliance: ServiceItemSchema;
    appeal: ServiceItemSchema;
  };
}

export interface ReviewItemSchema {
  name: string;
  program: string;
  text: string;
}

export interface ReviewsSectionSchema {
  titlePre: string;
  titleAccent: string;
  description: string;
  dragHint: string;
  items: {
    markAnna: ReviewItemSchema;
    dmitry: ReviewItemSchema;
    elena: ReviewItemSchema;
    igorOlga: ReviewItemSchema;
    tatiana: ReviewItemSchema;
  };
}

export interface FooterSectionSchema {
  brandTitle: string;
  headerBrand: string;
  brandSubtitle: string;
  brandDesc: string;
  requisitesTitle: string;
  requisitesLawyer: string;
  requisitesAddress: string;
  contactsTitle: string;
  docsTitle: string;
  docsCookies: string;
  docsAgreement: string;
  copyrightPost: string;
  sslText: string;
}

export interface LegalDocSchema {
  title: string;
  lastUpdated: string;
  sections: { heading: string; body: string }[];
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
    themeLight: string;
    themeDark: string;
    telegramTitle: string;
  };
  quiz: {
    next: string;
    back: string;
    submit: string;
    progress: string;
    thanks: string;
    thanksSub: string;
    startOver: string;
    profileDone: string;
    profileSub: string;
    namePlaceholder: string;
    contactPlaceholder: string;
    sending: string;
    configError: string;
    networkError: string;
    inquiryMessage: string;
    steps: QuizStepSchema[];
  };
  about: AboutSectionSchema;
  home: HomeSectionSchema;
  services: ServicesSectionSchema;
  reviews: ReviewsSectionSchema;
  footer: FooterSectionSchema;
  floatingContact: {
    label: string;
    coffeeLabel: string;
  };
  legalModal: {
    close: string;
    privacyPolicy: LegalDocSchema;
    terms: LegalDocSchema;
  };
  cookie: {
    title: string;
    text: string;
    acceptAll: string;
    acceptNecessary: string;
    learnMore: string;
  };
  ticker: {
    cases: string;
    rate: string;
    languages: string;
    city: string;
    vnj: string;
    online: string;
  };
}
export const translations: Record<LanguageCode, TranslationSchema> = {
  RU: {
    header: {
      main: "Главная",
      about: "Обо мне",
      services: "Услуги и цены",
      reviews: "Отзывы",
      consultation: "Консультация",
      callConfirm: "Вы хотите позвонить Anastazja Łapo?",
      langSelect: "Выберите язык",
      themeLight: "Включить светлую тему",
      themeDark: "Включить тёмную тему",
      telegramTitle: "Написать в Telegram",
    },
    quiz: {
      next: "Далее",
      back: "Назад",
      submit: "Отправить ответы",
      progress: "Шаг",
      thanks: "Спасибо!",
      thanksSub: "Анастасия уже изучает ваши ответы и скоро свяжется с вами.",
      startOver: "Пройти заново",
      profileDone: "Анализ профиля завершен",
      profileSub:
        "Мы подобрали оптимальные программы. Оставьте контакты для связи.",
      namePlaceholder: "Ваше имя",
      contactPlaceholder: "Telegram (@username) или телефон",
      sending: "Отправка...",
      configError: "Ошибка конфигурации формы. Пожалуйста, свяжитесь напрямую.",
      networkError: "Произошла ошибка при отправке данных. Проверьте сеть или включите VPN, если Telegram заблокирован вашим провайдером.",
      inquiryMessage: "Здравствуйте! Меня интересует услуга",
      steps: [
        {
          id: "source",
          question: "Какой у вас основной источник дохода?",
          options: [
            {
              value: "remote",
              label: "Удаленная работа / Фриланс (контракты вне страны)",
            },
            { value: "business", label: "Собственный бизнес / Дивиденды" },
            { value: "local", label: "Планирую искать работу на месте" },
            { value: "passive", label: "Пассивный доход (аренда, пенсия)" },
          ],
        },
        {
          id: "income",
          question:
            "Какой среднемесячный доход вы можете подтвердить официально?",
          subtitle: "Показатель на главного заявителя",
          options: [
            { value: "low", label: "До €2 000" },
            { value: "medium", label: "€2 000 — €4 000" },
            { value: "high", label: "Более €4 000" },
          ],
        },
        {
          id: "education",
          question: "Ваш уровень образования?",
          subtitle: "Для ряда программ важен профильный диплом",
          options: [
            { value: "higher", label: "Высшее (бакалавр, магистр)" },
            {
              value: "secondary",
              label: "Среднее специальное / Опыт работы от 3 лет",
            },
            { value: "none", label: "Нет диплома и подтвержденного опыта" },
          ],
        },
        {
          id: "contacts",
          question: "Оставьте ваши контактные данные",
          subtitle: "Анастасия свяжется с вами для разбора вашей ситуации",
          placeholder: "Ваше имя и Telegram / WhatsApp",
        },
      ],
    },
    about: {
      badge: "Личный бренд и стандарты",
      role: "Основатель проекта",
      titlePre: "Личный опыт и ",
      titleAccent: "юридична точність",
      titlePost: " на вашей стороне",
      description:
        "Я специализируюсь на международном миграционном праве более 8 лет. Моя работа заключается в том, чтобы убрать из процесса релокации всю бюрократическую неопределенность. Я не просто заполняю анкеты, а выстраиваю для вас легальный, безопасный и прогнозируемый трек получения статуса.",
      features: [
        "Глибокий пре-аудит документов до подписания договора",
        "Прямая связь с экспертом без менеджеров и посредников",
      ],
      stats: {
        casesTitle: "350+ успешных кейсов",
        casesDesc: "Одобренных ВНЖ и ПМЖ в ЕС",
        rateTitle: "98.6% одобрений",
        rateDesc: "За счет жесткого отбора профилей",
      },
    },
    home: {
      badge: "Официальная легализация и релокация под ключ",
      titlePre: "Ваш надежный путь к ",
      titleAccent: "ВНЖ и гражданству",
      description:
        "Комплексное юридическое сопровождение: от анализа документов до гарантированного получения статуса. Минимизируем риски отказов на 99%.",
      features: [
        "Оценка шансов до заключения договора",
        "Работаем со сложными кейсами после отказов",
      ],
      btnAudit: "Получить аудит кейса",
      btnPrograms: "Посмотреть программы",
      quizTitle: "Проверить шансы на ВНЖ",
      quizDesc:
        "Ответьте на 3 вопроса профиля для экспресс-оценки вашего кейса экспертом.",
    },
    services: {
      titlePre: "Направления работы и ",
      titleAccent: "стоимость",
      description:
        "Прозрачные условия без скрытых комиссий. Фиксируем финальную стоимость в официальном договоре до начала процесса.",
      topChoice: "Топ выбор",
      btnMore: "Подробнее",
      items: {
        nomad: {
          title: "ВНЖ Цифрового Кочевника",
          desc: "Для фрилансеров и удаленщиков с доходом от €2,500. Полный аудит контрактов, сбор документов и подача под ключ.",
          price: "от €1,200",
          time: "Срок: 3–6 недель",
        },
        startup: {
          title: "Стартап-Виза и Бизнес ВНЖ",
          desc: "Разработка инновационного бизнес-плана, одобрение в министерстве и защита вашего проекта перед комиссией.",
          price: "от €2,500",
          time: "Срок: 2–4 месяца",
        },
        passive: {
          title: "ВНЖ без права на работу",
          desc: "Для финансово независимых лиц со стабильным пассивным доходом вне страны (аренда, дивиденды, проценты).",
          price: "от €1,500",
          time: "Срок: 1–2 месяца",
        },
        investor: {
          title: "Золотая виза / ВНЖ инвестора",
          desc: "Сопровождение инвестиций в недвижимость, государственные облигации или фонды для получения постоянного статуса.",
          price: "от €4,000",
          time: "Срок: 1–3 месяца",
        },
        origin: {
          title: "Гражданство по происхождению",
          desc: "Архивный поиск, подтверждение корней, восстановление исторических прав и полное ведение дела вплоть до присяги.",
          price: "от €3,000",
          time: "Срок: от 6 месяцев",
        },
        family: {
          title: "Воссоединение семьи",
          desc: "Оформление документов для супругов, детей и зависимых родителей главного заявителя по любым типам виз.",
          price: "от €700",
          time: "Срок: 2–4 недели",
        },
        compliance: {
          title: "Открытие счетов и комплаенс",
          desc: "Подготовка справок о происхождении средств (Source of Funds), прохождение проверок KYC и открытие счетов в банках.",
          price: "от €600",
          time: "Срок: 5–10 дней",
        },
        appeal: {
          title: "Апелляции и сложные кейсы",
          desc: "Глубокий анализ причин отказа, составление юридически грамотной жалобы и повторное сопровождение дела.",
          price: "от €800",
          time: "Срок: индивидуально",
        },
      },
    },
    reviews: {
      titlePre: "Что говорят ",
      titleAccent: "клиенты",
      description:
        "Реальные истории людей, которые успешно прошли процесс легализации и доверили свой переезд эксперту.",
      dragHint: "Зажмите и тяните вбок или листайте",
      items: {
        markAnna: {
          name: "Марк и Анна",
          program: "ВНЖ Digital Nomad, Испания",
          text: "Обратились к Анастасии после самостоятельного отказа из-за неправильно оформленного контракта. Она полностью переформатировала наши документы с американским заказчиком и составила пояснительное письмо для UGE. Подали заново — одобрение пришло через 18 дней! Настоящий профессионал.",
        },
        dmitry: {
          name: "Дмитрий К.",
          program: "Стартап-виза, Португалия",
          text: "Анастасия помогла докрутить нашу бизнес-модель под жесткие требования института IAPMEI. Сопровождала на каждом шагу: от сбора справок до открытия счета. Всегда на связи в Telegram, объясняет сложные законы простым языком. Рекомендую.",
        },
        elena: {
          name: "Елена Б.",
          program: "ВНЖ без права на работу, Италия",
          text: "Для меня было критично успеть подать документы до изменения правил по пассивному доходу. Анастасия подготовила кейс за 2 недели. Аудит доходов был сделан идеально — консульство в Москве выдало визу D без единого вопроса.",
        },
        igorOlga: {
          name: "Игорь и Ольга",
          program: "Бизнес-инкубатор, Польша",
          text: "Релоцировали IT-стартап в Варшаву. Анастазья Лапо идеально провела нас через весь процесс: от регистрации компании (Sp. z o.o.) до получения пластика карты побыту на 3 года. Сберегли тонну нервов.",
        },
        tatiana: {
          name: "Татьяна Ш.",
          program: "Гражданство по корням, Румыния",
          text: "Процесс восстановления корней казался нереальным из-за утерянных архивов. Анастасия организовала профессиональный поиск, нашла свидетельства дедушки и полностью вела дело до присяги в Бухаресте. Паспорт в руках!",
        },
      },
    },
    footer: {
      brandTitle: "Легализация с Anastazja Łapo",
      headerBrand: "Лёгкая легализация",
      brandSubtitle: "с Anastazja Łapo",
      brandDesc:
        "Экспертное сопровождение миграционных процессов, оформление ВНЖ, релокация бизнеса и комплаенс. Лёгкий путь в любую точку мира.",
      requisitesTitle: "Реквизиты и адрес",
      requisitesLawyer: "Anastazja Łapo (ИП, Wpis do CEIDG)",
      requisitesAddress:
        "Адрес офиса: ul. Lawendowe Wzgórze 33/8, 80-175 Gdańsk, Polska",
      contactsTitle: "Быстрая связь",
      docsTitle: "Документы",
      docsCookies: "Политика куки",
      docsAgreement: "Соглашение",
      copyrightPost:
        " Лёгкая легализация с Anastazja Łapo. Все права защищены.",
      sslText: "Защищено SSL шифрованием",
    },
    floatingContact: {
      label: "Написать в Telegram",
      coffeeLabel: "Угостить кофе ☕",
    },
    legalModal: {
      close: "Закрыть",
      privacyPolicy: {
        title: "Информация GDPR / Согласие на обработку персональных данных",
        lastUpdated: "В соответствии с Регламентом ЕС 2016/679 (GDPR)",
        sections: [
          {
            heading: "1. Администратор данных",
            body: "Администратором ваших персональных данных являюсь я — Anastazja Łapo, осуществляющая предпринимательскую деятельность в сфере услуг по легализации.",
          },
          {
            heading: "2. Цель обработки данных",
            body: "Ваши персональные данные (в частности: имя и фамилия, дата рождения, гражданство, номер паспорта, PESEL, адрес проживания, контактные данные и копии документов) будут обрабатываться исключительно в целях: подготовки и ведения дел, связанных с легализацией пребывания и/или работы в Польше; контакта с клиентом в рамках оказания услуги.",
          },
          {
            heading: "3. Добровольность предоставления данных",
            body: "Предоставление персональных данных является добровольным, однако необходимым для оказания услуги.",
          },
          {
            heading: "4. Передача данных третьим лицам",
            body: "Данные не будут передаваться третьим лицам, за исключением государственных органов, уполномоченных законодательством (например, воеводское управление).",
          },
          {
            heading: "5. Хранение данных",
            body: "Данные будут храниться исключительно в течение срока, необходимого для оказания услуги, а также установленного действующим законодательством.",
          },
          {
            heading: "6. Ваши права",
            body: "Вы имеете право на доступ к своим данным, их исправление, удаление, ограничение обработки, а также на возражение против обработки.",
          },
          {
            heading: "7. Согласие",
            body: "Отправка документов и персональных данных в электронном виде означает согласие на их обработку в соответствии с настоящей информацией.",
          },
        ],
      },
      terms: {
        title: "Пользовательское соглашение",
        lastUpdated: "Последнее обновление: 1 июня 2025 г.",
        sections: [
          {
            heading: "1. Предоставляемые услуги",
            body: "Anastazja Łapo оказывает юридические консультации по вопросам легализации пребывания в Польше: ВНЖ, карта побыту, рабочие разрешения, воссоединение семьи и иные миграционные вопросы.",
          },
          {
            heading: "2. Консультация через сайт",
            body: "Заполняя анкету на сайте, вы инициируете запрос на консультацию. Это не является заключением договора на оказание юридических услуг. Договор заключается отдельно после первичного контакта.",
          },
          {
            heading: "3. Ответственность",
            body: "Информация на сайте носит общий ознакомительный характер и не является юридической консультацией. Результат дела зависит от индивидуальных обстоятельств и не может быть гарантирован.",
          },
          {
            heading: "4. Оплата",
            body: "Стоимость услуг согласовывается индивидуально в ходе первичной консультации. Указанные на сайте цены являются ориентировочными и могут меняться в зависимости от сложности дела.",
          },
          {
            heading: "5. Контактные данные",
            body: "ANASTAZJA ŁAPO, Wpis do CEIDG, NIP: 5833480794, REGON: 525583417. Тел.: +48 571 086 455. Telegram: @AnastaziALappo.",
          },
        ],
      },
    },
    cookie: {
      title: "Мы используем файлы cookie",
      text: "Этот сайт использует только необходимые технические cookie для корректной работы. Нажмите «Принять», чтобы продолжить.",
      acceptAll: "Принять все",
      acceptNecessary: "Только необходимые",
      learnMore: "Подробнее",
    },
    ticker: {
      cases: "350+ кейсов",
      rate: "98.6% успех",
      languages: "4 языка",
      city: "Варшава · Польша",
      vnj: "ВНЖ от 30 дней",
      online: "Консультация онлайн",
    },
  },
  PL: {
    header: {
      main: "Główna",
      about: "O mnie",
      services: "Usługi i ceny",
      reviews: "Opinie",
      consultation: "Konsultacja",
      callConfirm: "Czy chcesz zadzwonić do Anastazji Łapo?",
      langSelect: "Wybierz język",
      themeLight: "Włącz jasny motyw",
      themeDark: "Włącz ciemny motyw",
      telegramTitle: "Napisz na Telegram",
    },
    quiz: {
      next: "Dalej",
      back: "Wstecz",
      submit: "Wyślij odpowiedzi",
      progress: "Krok",
      thanks: "Dziękujemy!",
      thanksSub:
        "Anastazja już analizuje Twoje odpowiedzi i wkrótce się z Tobą skontaktuje.",
      startOver: "Rozpocznij ponownie",
      profileDone: "Analiza profilu zakończona",
      profileSub: "Dopasowaliśmy optymalne programy. Zostaw kontakt do siebie.",
      namePlaceholder: "Twoje imię",
      contactPlaceholder: "Telegram (@username) lub numer telefonu",
      sending: "Wysyłanie...",
      configError: "Błąd konfiguracji formularza. Prosimy o bezpośredni kontakt.",
      networkError: "Wystąpił błąd podczas wysyłania danych. Sprawdź połączenie internetowe lub włącz VPN, jeśli Telegram jest zablokowany przez dostawcę.",
      inquiryMessage: "Dzień dobry! Interesuje mnie usługa",
      steps: [
        {
          id: "source",
          question: "Jakie jest Twoje główne źródło dochodu?",
          options: [
            {
              value: "remote",
              label: "Praca zdalna / Freelance (kontrakty zagraniczne)",
            },
            { value: "business", label: "Własny biznes / Dywidendy" },
            { value: "local", label: "Planuję szukać pracy na miejscu" },
            { value: "passive", label: "Dochód pasywny (wynajem, emerytura)" },
          ],
        },
        {
          id: "income",
          question:
            "Jaki średniomiesięczny dochód możesz potwierdzić oficjalnie?",
          subtitle: "Wskaźnik na głównego wnioskodawcę",
          options: [
            { value: "low", label: "Do 2 000 €" },
            { value: "medium", label: "2 000 € — 4 000 €" },
            { value: "high", label: "Powyżej 4 000 €" },
          ],
        },
        {
          id: "education",
          question: "Twój poziom wykształcenia?",
          subtitle:
            "W przypadku niektórych programów ważny jest dyplom kierunkowy",
          options: [
            { value: "higher", label: "Wyższe (licencjat, magister)" },
            {
              value: "secondary",
              label: "Średnie specjalistyczne / Doświadczenie od 3 lat",
            },
            {
              value: "none",
              label: "Brak dyplomu i potwierdzonego doświadczenia",
            },
          ],
        },
        {
          id: "contacts",
          question: "Zostaw swoje dane kontaktowe",
          subtitle:
            "Anastazja skontaktuje się z Tobą w celu analizy Twojej sytuacji",
          placeholder: "Twoje imię oraz Telegram / WhatsApp",
        },
      ],
    },
    about: {
      badge: "Marka osobista i standardy",
      role: "Założycielka projektu",
      titlePre: "Osobiste doświadczenie i ",
      titleAccent: "precyzja prawna",
      titlePost: " po Twojej stronie",
      description:
        "Specjalizuję się w międzynarodowym prawie migracyjnym od ponad 8 lat. Moim zadaniem jest wyeliminowanie wszelkiej niepewności biurokratycznej z procesu relokacji. Nie tylko wypełniam wnioski, ale buduję dla Ciebie legalną, bezpieczną i przewidywalną ścieżkę uzyskania statusu.",
      features: [
        "Głęboki audyt wstępny dokumentów przed podpisaniem umowy",
        "Bezpośredni kontakt z ekspertem, bez menedżerów i pośredników",
      ],
      stats: {
        casesTitle: "350+ sukcesów",
        casesDesc: "Zatwierdzonych kart pobytu i rezydentów w UE",
        rateTitle: "98.6% skuteczności",
        rateDesc: "Dzięki rygorystycznej weryfikacji profili",
      },
    },
    home: {
      badge: "Oficjalna legalizacja i relokacja kompleksowo",
      titlePre: "Twoja bezpieczna droga do ",
      titleAccent: "karty pobytu i obywatelstwa",
      description:
        "Kompleksowe wsparcie prawne: od analizy dokumentów do gwarantowanego uzyskania statusu. Minimalizujemy ryzyko odmowy o 99%.",
      features: [
        "Ocena szans przed podpisaniem umowy",
        "Pracujemy ze złożonymi przypadkami po odmowach",
      ],
      btnAudit: "Uzyskaj audyt sprawy",
      btnPrograms: "Zobacz programy",
      quizTitle: "Sprawdź szanse na pobyt",
      quizDesc:
        "Odpowiedz na 3 pytania profilowe w celu ekspresowej oceny Twojej sprawy przez eksperta.",
    },
    services: {
      titlePre: "Kierunki pracy i ",
      titleAccent: "koszt",
      description:
        "Przejrzyste warunki bez ukrytych opłat. Ostateczny koszt ustalamy w oficjalnej umowie przed rozpoczęciem procesu.",
      topChoice: "Top wybór",
      btnMore: "Więcej",
      items: {
        nomad: {
          title: "Karta Pobytu – Digital Nomad",
          desc: "Dla freelancerów i osób pracujących zdalnie z dochodem od 2500 €. Pełny audyt kontraktów, kompletowanie dokumentów i składanie wniosku.",
          price: "od €1,200",
          time: "Czas: 3–6 tygodni",
        },
        startup: {
          title: "Wiza Startupowa i Pobyt Biznesowy",
          desc: "Opracowanie innowacyjnego biznesplanu, uzyskanie akceptacji ministerstwa oraz obrona projektu przed komisją.",
          price: "od €2,500",
          time: "Czas: 2–4 miesiące",
        },
        passive: {
          title: "Rezydent bez prawa do pracy",
          desc: "Dla osób niezależnych finansowo ze stałym dochodem pasywnym poza krajem (wynajem, dywidendy, odsetki).",
          price: "od €1,500",
          time: "Czas: 1–2 miesiące",
        },
        investor: {
          title: "Złota Wiza / Pobyt dla Inwestora",
          desc: "Wsparcie przy inwestycjach w nieruchomości, obligacje państwowe lub fundusze w celu uzyskania stałego statusu.",
          price: "od €4,000",
          time: "Czas: 1–3 miesiące",
        },
        origin: {
          title: "Obywatelstwo po pochodzeniu",
          desc: "Poszukiwania archiwalne, potwierdzenie korzeni, przywrócenie praw historycznych i pełne prowadzenie sprawy aż do przysięgi.",
          price: "od €3,000",
          time: "Czas: od 6 miesięcy",
        },
        family: {
          title: "Łączenie rodzin",
          desc: "Formalności dokumentowe dla małżonków, dzieci i niesamodzielnych rodziców głównego wnioskodawcy dla każdego rodzaju wizy.",
          price: "od €700",
          time: "Czas: 2–4 tygodnie",
        },
        compliance: {
          title: "Otwieranie kont i compliance",
          desc: "Przygotowanie potwierdzeń źródła pochodzenia środków (Source of Funds), przejście procedur KYC i otwarcie kont bankowych.",
          price: "od €600",
          time: "Czas: 5–10 dni",
        },
        appeal: {
          title: "Odwołania i trudne przypadki",
          desc: "Głęboka analiza przyczyn odmowy, sporządzenie poprawnego prawnie odwołania oraz ponowne prowadzenie całej sprawy.",
          price: "od €800",
          time: "Czas: indywidualnie",
        },
      },
    },
    reviews: {
      titlePre: "Co mówią ",
      titleAccent: "klienci",
      description:
        "Prawdziwe historie osób, które z sukcesem przeszły proces legalizacji i powierzyły swoją przeprowadzkę ekspertowi.",
      dragHint: "Kliknij i przeciągnij w bok lub przewijaj",
      items: {
        markAnna: {
          name: "Mark i Anna",
          program: "Karta Pobytu Digital Nomad, Hiszpania",
          text: "Zwróciliśmy się do Anastazji po samodzielnej odmowie z powodu błędnie sformułowanego kontraktu. Całkowicie przeformatowała nasze dokumenty z amerykańskim zleceniodawcą i napisała list wyjaśniający do UGE. Złożyliśmy ponownie — zatwierdzenie przyszło po 18 dniach! Prawdziwy profesjonalista.",
        },
        dmitry: {
          name: "Dmitry K.",
          program: "Wiza Startupowa, Portugalia",
          text: "Anastazja pomogła nam dopracować nasz model biznesowy pod rygorystyczne wymagania instytutu IAPMEI. Towarzyszyła nam na każdym kroku: od zbierania zaświadczeń po otwarcie konta. Zawsze dostępna na Telegramie, tłumaczy skomplikowane prawo prostym językiem. Polecam.",
        },
        elena: {
          name: "Elena B.",
          program: "Rezydent bez prawa do pracy, Włochy",
          text: "Dla mnie kluczowe było zdążenie ze złożeniem dokumentów przed zmianą przepisów dotyczących dochodu pasywnego. Anastazja przygotowała sprawę w 2 tygodnie. Audyt dochodów został przeprowadzony idealnie — konsulat w Moskwie wydał wizę D bez żadnych pytań.",
        },
        igorOlga: {
          name: "Igor i Olga",
          program: "Inkubator Biznesowy, Polska",
          text: "Relokowaliśmy IT startup do Warszawy. Anastazja Łapo idealnie przeprowadziła nas przez cały proces: od rejestracji spółki (Sp. z o.o.) do odebrania plastikowej karty pobytu na 3 lata. Oszczędziło nam to mnóstwo nerwów.",
        },
        tatiana: {
          name: "Tatiana Sz.",
          program: "Obywatelstwo przez korzenie, Rumunia",
          text: "Proces przywracania korzeni wydawał się nierealny z powodu zagubionych archiwów. Anastazja zorganizowała profesjonalne poszukiwania, znalazła akty dziadka i w pełni prowadziła sprawę aż do przysięgi w Bukareszcie. Paszport w ręku!",
        },
      },
    },
    footer: {
      brandTitle: "Legalizacja z Anastazją Łapo",
      headerBrand: "Łatwa legalizacja",
      brandSubtitle: "z Anastazją Łapo",
      brandDesc:
        "Eksperckie wsparcie procesów migracyjnych, karty pobytu, relokacja biznesu i compliance. Łatwa droga w dowolne miejsce na świecie.",
      requisitesTitle: "Dane firmy i adres",
      requisitesLawyer: "Anastazja Łapo (działalność gosp., Wpis do CEIDG)",
      requisitesAddress:
        "Adres biura: ul. Lawendowe Wzgórze 33/8, 80-175 Gdańsk, Polska",
      contactsTitle: "Szybki kontakt",
      docsTitle: "Dokumenty",
      docsCookies: "Polityka cookies",
      docsAgreement: "Regulamin",
      copyrightPost:
        " Łatwa legalizacja z Anastazją Łapo. Wszelkie prawa zastrzeżone.",
      sslText: "Chronione szyfrowaniem SSL",
    },
    floatingContact: {
      label: "Napisz na Telegram",
      coffeeLabel: "Postaw kawę ☕",
    },
    legalModal: {
      close: "Zamknij",
      privacyPolicy: {
        title: "Informacja RODO / Zgoda na przetwarzanie danych osobowych",
        lastUpdated:
          "Zgodnie z Rozporządzeniem Parlamentu Europejskiego i Rady (UE) 2016/679 (RODO)",
        sections: [
          {
            heading: "1. Administrator danych osobowych",
            body: "Administratorem Państwa danych osobowych jestem ja – Anastazja Łapo, prowadząca działalność gospodarczą w zakresie usług legalizacyjnych.",
          },
          {
            heading: "2. Cel przetwarzania danych",
            body: "Państwa dane osobowe (w szczególności: imię i nazwisko, data urodzenia, obywatelstwo, numer paszportu, PESEL, adres zamieszkania, dane kontaktowe oraz kopie dokumentów) będą przetwarzane wyłącznie w celu: przygotowania i prowadzenia spraw związanych z legalizacją pobytu i/lub pracy w Polsce; kontaktu z klientem w ramach realizacji usługi.",
          },
          {
            heading: "3. Dobrowolność podania danych",
            body: "Podanie danych osobowych jest dobrowolne, ale niezbędne do realizacji usługi.",
          },
          {
            heading: "4. Przekazywanie danych osobom trzecim",
            body: "Dane nie będą przekazywane osobom trzecim, z wyjątkiem instytucji publicznych uprawnionych na podstawie przepisów prawa (np. urząd wojewódzki).",
          },
          {
            heading: "5. Okres przechowywania danych",
            body: "Dane będą przechowywane wyłącznie przez okres niezbędny do realizacji usługi oraz wynikający z obowiązujących przepisów prawa.",
          },
          {
            heading: "6. Prawa przysługujące osobie, której dane dotyczą",
            body: "Mają Państwo prawo dostępu do swoich danych, ich poprawiania, usunięcia, ograniczenia przetwarzania oraz wniesienia sprzeciwu.",
          },
          {
            heading: "7. Zgoda na przetwarzanie",
            body: "Przesłanie dokumentów i danych osobowych drogą elektroniczną oznacza wyrażenie zgody na ich przetwarzanie zgodnie z powyższą informacją.",
          },
        ],
      },
      terms: {
        title: "Regulamin",
        lastUpdated: "Ostatnia aktualizacja: 1 czerwca 2025 r.",
        sections: [
          {
            heading: "1. Świadczone usługi",
            body: "Anastazja Łapo świadczy porady prawne w zakresie legalizacji pobytu w Polsce: karta pobytu, zezwolenie na pracę, łączenie rodzin i inne kwestie migracyjne.",
          },
          {
            heading: "2. Konsultacja przez stronę",
            body: "Wypełniając formularz na stronie, inicjujesz zapytanie o konsultację. Nie stanowi to zawarcia umowy o świadczenie usług prawnych. Umowa jest zawierana oddzielnie po pierwszym kontakcie.",
          },
          {
            heading: "3. Odpowiedzialność",
            body: "Informacje na stronie mają charakter ogólnoinformacyjny i nie stanowią porady prawnej. Wynik sprawy zależy od indywidualnych okoliczności i nie może być gwarantowany.",
          },
          {
            heading: "4. Wynagrodzenie",
            body: "Ceny usług są ustalane indywidualnie podczas pierwszej konsultacji. Podane na stronie ceny są orientacyjne i mogą się różnić w zależności od złożoności sprawy.",
          },
          {
            heading: "5. Dane kontaktowe",
            body: "ANASTAZJA ŁAPO, Wpis do CEIDG, NIP: 5833480794, REGON: 525583417. Tel.: +48 571 086 455. Telegram: @AnastaziALappo.",
          },
        ],
      },
    },
    cookie: {
      title: "Używamy plików cookie",
      text: "Ta strona używa wyłącznie niezbędnych plików cookie do prawidłowego działania. Kliknij «Akceptuj», aby kontynuować.",
      acceptAll: "Akceptuj wszystkie",
      acceptNecessary: "Tylko niezbędne",
      learnMore: "Dowiedz się więcej",
    },
    ticker: {
      cases: "350+ sukcesów",
      rate: "98.6% skuteczności",
      languages: "4 języki",
      city: "Warszawa · Polska",
      vnj: "Karta pobytu od 30 dni",
      online: "Konsultacja online",
    },
  },
  EN: {
    header: {
      main: "Home",
      about: "About Me",
      services: "Services & Prices",
      reviews: "Reviews",
      consultation: "Consultation",
      callConfirm: "Do you want to call Anastazja Łapo?",
      langSelect: "Select language",
      themeLight: "Switch to light theme",
      themeDark: "Switch to dark theme",
      telegramTitle: "Message on Telegram",
    },
    quiz: {
      next: "Next",
      back: "Back",
      submit: "Submit answers",
      progress: "Step",
      thanks: "Thank you!",
      thanksSub:
        "Anastazja is already reviewing your answers and will contact you shortly.",
      startOver: "Start over",
      profileDone: "Profile analysis completed",
      profileSub:
        "We have selected the optimal programs. Leave your contacts to get in touch.",
      namePlaceholder: "Your name",
      contactPlaceholder: "Telegram (@username) or phone number",
      sending: "Sending...",
      configError: "Form configuration error. Please contact us directly.",
      networkError: "An error occurred while sending your data. Please check your connection or use a VPN if Telegram is blocked by your provider.",
      inquiryMessage: "Hello! I am interested in the service",
      steps: [
        {
          id: "source",
          question: "What is your primary source of income?",
          options: [
            {
              value: "remote",
              label: "Remote work / Freelance (foreign contracts)",
            },
            { value: "business", label: "Own business / Dividends" },
            { value: "local", label: "I plan to look for a job locally" },
            { value: "passive", label: "Passive income (rent, pension)" },
          ],
        },
        {
          id: "income",
          question: "What average monthly income can you officially prove?",
          subtitle: "Based on the primary applicant",
          options: [
            { value: "low", label: "Up to €2,000" },
            { value: "medium", label: "€2,000 — €4,000" },
            { value: "high", label: "More than €4,000" },
          ],
        },
        {
          id: "education",
          question: "What is your level of education?",
          subtitle: "A relevant diploma is important for a number of programs",
          options: [
            { value: "higher", label: "Higher education (Bachelor, Master)" },
            {
              value: "secondary",
              label: "Specialized secondary / 3+ years of experience",
            },
            { value: "none", label: "No diploma or confirmed experience" },
          ],
        },
        {
          id: "contacts",
          question: "Leave your contact details",
          subtitle: "Anastazja will contact you to analyze your case",
          placeholder: "Your name and Telegram / WhatsApp",
        },
      ],
    },
    about: {
      badge: "Personal brand and standards",
      role: "Project Founder",
      titlePre: "Personal experience and ",
      titleAccent: "legal precision",
      titlePost: " on your side",
      description:
        "I have been specializing in international migration law for over 8 years. My job is to eliminate all bureaucratic uncertainty from the relocation process. I do not just fill out forms, but build a legal, safe, and predictable track for you to obtain your status.",
      features: [
        "Deep pre-audit of documents before signing the contract",
        "Direct communication with the expert without managers or intermediaries",
      ],
      stats: {
        casesTitle: "350+ successful cases",
        casesDesc:
          "Approved residence permits and permanent residences in the EU",
        rateTitle: "98.6% approval rate",
        rateDesc: "Due to strict profile selection",
      },
    },
    home: {
      badge: "Official legalization and turnkey relocation",
      titlePre: "Your reliable path to ",
      titleAccent: "residence permit and citizenship",
      description:
        "Comprehensive legal support: from document analysis to guaranteed status acquisition. We minimize the risk of refusal by 99%.",
      features: [
        "Assessment of chances before signing the contract",
        "We handle complex cases after prior refusals",
      ],
      btnAudit: "Get a case audit",
      btnPrograms: "View programs",
      quizTitle: "Check eligibility for residency",
      quizDesc:
        "Answer 3 profile questions for an express assessment of your case by an expert.",
    },
    services: {
      titlePre: "Areas of Expertise & ",
      titleAccent: "Pricing",
      description:
        "Transparent conditions without hidden fees. We fix the final cost in an official contract before the process starts.",
      topChoice: "Top choice",
      btnMore: "Details",
      items: {
        nomad: {
          title: "Digital Nomad Residence Permit",
          desc: "For freelancers and remote workers with income from €2,500. Full contract audit, document collection, and turnkey submission.",
          price: "from €1,200",
          time: "Timeline: 3–6 weeks",
        },
        startup: {
          title: "Startup Visa & Business Residence",
          desc: "Development of an innovative business plan, ministerial approval, and project defense before the committee.",
          price: "from €2,500",
          time: "Timeline: 2–4 months",
        },
        passive: {
          title: "Residence Permit without Right to Work",
          desc: "For financially independent individuals with stable passive income outside the country (rent, dividends, interests).",
          price: "from €1,500",
          time: "Timeline: 1–2 months",
        },
        investor: {
          title: "Golden Visa / Investor Residence",
          desc: "Support for investments in real estate, government bonds, or funds to obtain a permanent status.",
          price: "from €4,000",
          time: "Timeline: 1–3 months",
        },
        origin: {
          title: "Citizenship by Descent",
          desc: "Archival search, confirmation of roots, restoration of historical rights, and full case management up to the oath.",
          price: "from €3,000",
          time: "Timeline: from 6 months",
        },
        family: {
          title: "Family Reunification",
          desc: "Document processing for spouses, children, and dependent parents of the main applicant for any visa types.",
          price: "from €700",
          time: "Timeline: 2–4 weeks",
        },
        compliance: {
          title: "Bank Account Opening & Compliance",
          desc: "Preparation of Source of Funds statements, passing KYC checks, and opening corporate/personal bank accounts.",
          price: "from €600",
          time: "Timeline: 5–10 days",
        },
        appeal: {
          title: "Appeals & Complex Cases",
          desc: "In-depth analysis of refusal reasons, drafting a legally sound complaint, and re-submitting the case.",
          price: "from €800",
          time: "Timeline: individual",
        },
      },
    },
    reviews: {
      titlePre: "What ",
      titleAccent: "clients say",
      description:
        "Real stories of people who have successfully gone through the legalization process and trusted their relocation to an expert.",
      dragHint: "Click and drag sideways or scroll",
      items: {
        markAnna: {
          name: "Mark & Anna",
          program: "Digital Nomad Residence Permit, Spain",
          text: "We turned to Anastazja after a self-application rejection caused by an incorrectly structured contract. She completely reformatted our documents with the US client and drafted an explanatory letter for UGE. Re-submitted — approved in 18 days! A true professional.",
        },
        dmitry: {
          name: "Dmitry K.",
          program: "Startup Visa, Portugal",
          text: "Anastazja helped us fine-tune our business model for the strict requirements of the IAPMEI institute. Supported us at every step: from collecting certificates to account opening. Always responsive on Telegram, explains complex laws in simple terms. Highly recommend.",
        },
        elena: {
          name: "Elena B.",
          program: "Residency without Right to Work, Italy",
          text: "It was critical for me to submit documents before the passive income rules changed. Anastazja prepared the case in 2 weeks. The income audit was flawlessly executed — the consulate in Moscow issued the D-visa without a single question.",
        },
        igorOlga: {
          name: "Igor & Olga",
          program: "Business Incubator, Poland",
          text: "Relocated our IT startup to Warsaw. Anastazja Łapo perfectly guided us through the entire process: from company registration (Sp. z o.o.) to getting our 3-year residence card plastics. Saved us a ton of nerves.",
        },
        tatiana: {
          name: "Tatiana S.",
          program: "Citizenship by Descent, Romania",
          text: "The root restoration process seemed impossible due to lost archives. Anastazja organized a professional search, found my grandfather's certificates, and fully managed the case until the oath in Bucharest. Passport in hand!",
        },
      },
    },
    // ИСПРАВЛЕНО: Добавлен перевод футера на английский язык
    footer: {
      brandTitle: "Legalization with Anastazja Łapo",
      headerBrand: "Easy Legalization",
      brandSubtitle: "with Anastazja Łapo",
      brandDesc:
        "Expert guidance on migration processes, residence permits, business relocation, and compliance. An easy path to anywhere in the world.",
      requisitesTitle: "Company Details & Address",
      requisitesLawyer: "Anastazja Łapo (sole trader, Wpis do CEIDG)",
      requisitesAddress:
        "Office address: ul. Lawendowe Wzgórze 33/8, 80-175 Gdańsk, Poland",
      contactsTitle: "Quick Contact",
      docsTitle: "Documents",
      docsCookies: "Cookies Policy",
      docsAgreement: "Terms of Service",
      copyrightPost:
        " Easy legalization with Anastazja Łapo. All rights reserved.",
      sslText: "Secured with SSL encryption",
    },
    floatingContact: {
      label: "Message on Telegram",
      coffeeLabel: "Buy a coffee ☕",
    },
    legalModal: {
      close: "Close",
      privacyPolicy: {
        title: "GDPR Information / Consent to Personal Data Processing",
        lastUpdated:
          "Pursuant to Regulation (EU) 2016/679 of the European Parliament and of the Council (GDPR)",
        sections: [
          {
            heading: "1. Data Controller",
            body: "The data controller is Anastazja Łapo, conducting business activity in the field of legalisation services.",
          },
          {
            heading: "2. Purpose of Processing",
            body: "Your personal data (in particular: name and surname, date of birth, citizenship, passport number, PESEL, residential address, contact details and copies of documents) will be processed solely for the purpose of: preparing and handling cases related to the legalisation of residence and/or work in Poland; contacting the client in the course of providing the service.",
          },
          {
            heading: "3. Voluntary Provision of Data",
            body: "Providing personal data is voluntary, but necessary for the provision of the service.",
          },
          {
            heading: "4. Sharing Data with Third Parties",
            body: "Data will not be transferred to third parties, except for public institutions authorised under applicable law (e.g. voivodeship office).",
          },
          {
            heading: "5. Data Retention",
            body: "Data will be stored only for the period necessary to perform the service and as required by applicable law.",
          },
          {
            heading: "6. Your Rights",
            body: "You have the right to access your data, rectify, delete, restrict processing, and object to processing.",
          },
          {
            heading: "7. Consent",
            body: "Sending documents and personal data electronically constitutes consent to their processing in accordance with the above information.",
          },
        ],
      },
      terms: {
        title: "Terms of Service",
        lastUpdated: "Last updated: 1 June 2025",
        sections: [
          {
            heading: "1. Services Provided",
            body: "Anastazja Łapo provides legal consultations on legalisation of stay in Poland: residence permits, work permits, family reunification, and other migration matters.",
          },
          {
            heading: "2. Consultation via Website",
            body: "By completing the form on this site, you initiate a consultation request. This does not constitute a legal services agreement. A contract is concluded separately after initial contact.",
          },
          {
            heading: "3. Liability",
            body: "Information on this site is for general informational purposes only and does not constitute legal advice. Outcomes depend on individual circumstances and cannot be guaranteed.",
          },
          {
            heading: "4. Fees",
            body: "Service fees are agreed individually during the initial consultation. Prices shown on the site are indicative and may vary depending on case complexity.",
          },
          {
            heading: "5. Contact Details",
            body: "ANASTAZJA ŁAPO, Wpis do CEIDG, NIP: 5833480794, REGON: 525583417. Tel.: +48 571 086 455. Telegram: @AnastaziALappo.",
          },
        ],
      },
    },
    cookie: {
      title: "We use cookies",
      text: "This site uses only essential technical cookies for proper functionality. Click «Accept» to continue.",
      acceptAll: "Accept all",
      acceptNecessary: "Necessary only",
      learnMore: "Learn more",
    },
    ticker: {
      cases: "350+ cases",
      rate: "98.6% success rate",
      languages: "4 languages",
      city: "Warsaw · Poland",
      vnj: "Residence permit from 30 days",
      online: "Online consultation",
    },
  },
  UA: {
    header: {
      main: "Головна",
      about: "Про мене",
      services: "Послуги та ціни",
      reviews: "Відгуки",
      consultation: "Консультація",
      callConfirm: "Ви хочете зателефонувати Anastazja Łapo?",
      langSelect: "Оберіть мову",
      themeLight: "Увімкнути світлу тему",
      themeDark: "Увімкнути темну тему",
      telegramTitle: "Написати в Telegram",
    },
    quiz: {
      next: "Далі",
      back: "Назад",
      submit: "Надіслати відповіді",
      progress: "Крок",
      thanks: "Дякуємо!",
      thanksSub:
        "Анастасія вже вивчає ваші відповіді та скоро зв’яжеться з вами.",
      startOver: "Пройти знову",
      profileDone: "Аналіз профілю завершено",
      profileSub:
        "Ми підібрали оптимальні програми. Залиште контакти для зв’язку.",
      namePlaceholder: "Ваше ім’я",
      contactPlaceholder: "Telegram (@username) або телефон",
      sending: "Надсилання...",
      configError: "Помилка конфігурації форми. Будь ласка, зв'яжіться напряму.",
      networkError: "Виникла помилка під час надсилання даних. Перевірте мережу або увімкніть VPN, якщо Telegram заблокований вашим провайдером.",
      inquiryMessage: "Доброго дня! Мене цікавить послуга",
      steps: [
        {
          id: "source",
          question: "Яке у вас основне джерело доходу?",
          options: [
            {
              value: "remote",
              label: "Віддалена робота / Фріланс (контракти поза країною)",
            },
            { value: "business", label: "Власний бізнес / Дивіденди" },
            { value: "local", label: "Планую шукати роботу на місці" },
            { value: "passive", label: "Пасивний дохід (оренда, пенсія)" },
          ],
        },
        {
          id: "income",
          question:
            "Який середньомісячний дохід ви можете підтвердити офіційно?",
          subtitle: "Показник для головного заявника",
          options: [
            { value: "low", label: "До €2 000" },
            { value: "medium", label: "€2 000 — €4 000" },
            { value: "high", label: "Понад €4 000" },
          ],
        },
        {
          id: "education",
          question: "Ваш рівень освіти?",
          subtitle: "Для низки програм важливий профільний диплом",
          options: [
            { value: "higher", label: "Вища (бакалавр, магістр)" },
            {
              value: "secondary",
              label: "Середня спеціальна / Досвід роботи від 3 років",
            },
            { value: "none", label: "Немає диплома та підтвердженого досвіду" },
          ],
        },
        {
          id: "contacts",
          question: "Залиште ваші контактні дані",
          subtitle: "Анастасія зв’яжеться з вами для розбору вашої ситуації",
          placeholder: "Ваше ім’я та Telegram / WhatsApp",
        },
      ],
    },
    about: {
      badge: "Особистий бренд та стандарти",
      role: "Засновниця проєкту",
      titlePre: "Особистий досвід та ",
      titleAccent: "юридична точність",
      titlePost: " на вашому боці",
      description:
        "Я спеціалізуюся на міжнародному міграційному праві понад 8 років. Моя робота полягає в тому, щоб прибрати з процесу релокації всю бюрократичну невизначеність. Я не просто заповнюю анкети, а вибудовую для вас легальний, безпечний та прогнозований трек отримання статусу.",
      features: [
        "Глибокий пре-аудит документів до підписання договору",
        "Прямий зв'язок з експертом без менеджерів та посередників",
      ],
      stats: {
        casesTitle: "350+ успішних кейсів",
        casesDesc: "Схвалених посвідок на проживання та ПМП в ЄС",
        rateTitle: "98.6% схвалень",
        rateDesc: "Завдяки жорсткому відбору профілів",
      },
    },
    home: {
      badge: "Офіційна легалізація та релокація під ключ",
      titlePre: "Ваш надійний шлях до ",
      titleAccent: "посвідки та громадянства",
      description:
        "Комплексний юридичний супровід: від аналізу документів до гарантованого отримання статусу. Мінімізуємо ризики відмов на 99%.",
      features: [
        "Оцінка шансів до укладання договору",
        "Працюємо зі складними кейсами після відмов",
      ],
      btnAudit: "Отримати аудит кейсу",
      btnPrograms: "Переглянути програми",
      quizTitle: "Перевірити шанси на посвідку",
      quizDesc:
        "Дайте відповідь на 3 питання профілю для експрес-оцінки вашого кейсу експертом.",
    },
    services: {
      titlePre: "Напрямки роботи та ",
      titleAccent: "вартість",
      description:
        "Прозорі умови без прихованих комісій. Фіксуємо фінальну вартість в офіційному договорі до початку процесу.",
      topChoice: "Топ вибір",
      btnMore: "Детальніше",
      items: {
        nomad: {
          title: "Посвідка Цифрового Кочівника",
          desc: "Для фрілансерів та віддалених працівників із доходом від €2,500. Повний аудит контрактів, збір документів та подача під ключ.",
          price: "від €1,200",
          time: "Термін: 3–6 тижнів",
        },
        startup: {
          title: "Стартап-Віза та Бізнес Посвідка",
          desc: "Розробка інноваційного бізнес-плану, схвалення в міністерстві та захист вашого проєкту перед комісією.",
          price: "від €2,500",
          time: "Термін: 2–4 місяці",
        },
        passive: {
          title: "Посвідка без права на роботу",
          desc: "Для фінансово незалежних осіб зі стабільним пассивним доходом поза межами країни (оренда, дивіденди, відсотки).",
          price: "від €1,500",
          time: "Термін: 1–2 місяці",
        },
        investor: {
          title: "Золотая віза / Посвідка інвестора",
          desc: "Супрівід інвестицій у нерухомість, державні облігації або фонди для отримання постійного статусу.",
          price: "від €4,000",
          time: "Термін: 1–3 місяці",
        },
        origin: {
          title: "Громадянство за походженням",
          desc: "Архівний пошук, підтвердження коріння, відновлення історичних прав та повне ведення справи аж до присяги.",
          price: "від €3,000",
          time: "Термін: від 6 місяців",
        },
        family: {
          title: "Возз’єднання сім’ї",
          desc: "Оформлення документів для подружжя, дітей та залежних батьків головного заявника за будь-якими типами віз.",
          price: "від €700",
          time: "Термін: 2–4 тижні",
        },
        compliance: {
          title: "Відкриття рахунків та комплаєнс",
          desc: "Підготовка довідок про походження коштів (Source of Funds), проходження перевірок KYC та відкриття рахунків у банках.",
          price: "від €600",
          time: "Термін: 5–10 днів",
        },
        appeal: {
          title: "Апелляции та складні кейси",
          desc: "Глибокий аналіз причин відмови, складання юридично грамотної скарги та повторний супровід справи.",
          price: "від €800",
          time: "Термін: індивідуально",
        },
      },
    },
    reviews: {
      titlePre: "Що говорять ",
      titleAccent: "клієнти",
      description:
        "Реальні історії людей, які успішно пройшли процес легалізації та довірили свій переїзд експерту.",
      dragHint: "Затисніть і тягніть убік або гортайте",
      items: {
        markAnna: {
          name: "Марк та Анна",
          program: "Посвідка Digital Nomad, Іспанія",
          text: "Звернулися до Анастасії після самостійної відмови через неправильно оформлений контракт. Вона повністю переформатувала наші документи з американським замовником та склала пояснювальний лист для UGE. Подали знову — схвалення прийшло за 18 днів! Справжній професіонал.",
        },
        dmitry: {
          name: "Дмитро К.",
          program: "Стартап-віза, Португалія",
          text: "Анастасія допомогла докрутити нашу бізнес-модель під жорсткі вимоги інституту IAPMEI. Супроводжувала на кожному кроці: від збору довідок до відкриття рахунку. Завжди на зв’язку в Telegram, пояснює складні закони простою мовою. Рекомендую.",
        },
        elena: {
          name: "Олена Б.",
          program: "Посвідка без права на роботу, Італія",
          text: "Для мене було критично встигнути подати документи до зміни правил щодо пасивного доходу. Анастасія підготувала кейс за 2 тижні. Аудит доходів був зроблений ідеально — консульство в Москві видало візу D без жодного запитання.",
        },
        igorOlga: {
          name: "Ігор та Ольга",
          program: "Бізнес-інкубатор, Польша",
          text: "Релокували IT-стартап у Варшаву. Анастазія Лапо ідеально провела нас через увесь процес: від реєстрації компанії (Sp. z o.o.) до отримання пластику посвідки на проживання на 3 роки. Зберегли тонну нервів.",
        },
        tatiana: {
          name: "Тетяна Ш.",
          program: "Громадянство за корінням, Румунія",
          text: "Процес відновлення коріння здавався нереальним через втрачені архіви. Анастасія організувала професійний пошук, знайшла свідоцтва дідуся та повністю вела справу до присяги в Бухаресте. Паспорт у руках!",
        },
      },
    },
    footer: {
      brandTitle: "Легалізація з Anastazja Łapo",
      headerBrand: "Легка легалізація",
      brandSubtitle: "з Anastazja Łapo",
      brandDesc:
        "Експертний супровід міграційних процесів, оформлення посвідок, релокація бізнесу та комплаєнс. Легкий шлях у будь-яку точку світу.",
      requisitesTitle: "Реквізити та адреса",
      requisitesLawyer: "Anastazja Łapo (ФОП, Wpis do CEIDG)",
      requisitesAddress:
        "Адреса офісу: ul. Lawendowe Wzgórze 33/8, 80-175 Gdańsk, Polska",
      contactsTitle: "Швидкий зв'язок",
      docsTitle: "Документи",
      docsCookies: "Політика кукі",
      docsAgreement: "Угода",
      copyrightPost:
        " Легка легалізація з Anastazja Łapo. Всі права захищені.",
      sslText: "Захищено SSL шифруванням",
    },
    floatingContact: {
      label: "Написати в Telegram",
      coffeeLabel: "Пригостити кавою ☕",
    },
    legalModal: {
      close: "Закрити",
      privacyPolicy: {
        title: "Інформація GDPR / Згода на обробку персональних даних",
        lastUpdated: "Відповідно до Регламенту ЄС 2016/679 (GDPR)",
        sections: [
          {
            heading: "1. Адміністратор даних",
            body: "Адміністратором ваших персональних даних є я — Anastazja Łapo, яка провадить підприємницьку діяльність у сфері послуг з легалізації.",
          },
          {
            heading: "2. Мета обробки даних",
            body: "Ваші персональні дані (зокрема: ім'я та прізвище, дата народження, громадянство, номер паспорта, PESEL, адреса проживання, контактні дані та копії документів) оброблятимуться виключно з метою: підготовки та ведення справ, пов'язаних із легалізацією перебування та/або роботи в Польщі; зв'язку з клієнтом у межах надання послуги.",
          },
          {
            heading: "3. Добровільність надання даних",
            body: "Надання персональних даних є добровільним, але необхідним для надання послуги.",
          },
          {
            heading: "4. Передача даних третім особам",
            body: "Дані не передаватимуться третім особам, за винятком державних органів, уповноважених законодавством (наприклад, воєводське управління).",
          },
          {
            heading: "5. Зберігання даних",
            body: "Дані зберігатимуться виключно протягом терміну, необхідного для надання послуги, а також передбаченого чинним законодавством.",
          },
          {
            heading: "6. Ваші права",
            body: "Ви маєте право на доступ до своїх даних, їх виправлення, видалення, обмеження обробки та заперечення проти обробки.",
          },
          {
            heading: "7. Згода",
            body: "Надсилання документів і персональних даних в електронному вигляді означає надання згоди на їх обробку відповідно до наведеної інформації.",
          },
        ],
      },
      terms: {
        title: "Угода про використання",
        lastUpdated: "Останнє оновлення: 1 червня 2025 р.",
        sections: [
          {
            heading: "1. Послуги, що надаються",
            body: "Anastazja Łapo надає юридичні консультації з питань легалізації перебування в Польщі: посвідка на проживання, дозвіл на роботу, возз'єднання сім'ї та інші міграційні питання.",
          },
          {
            heading: "2. Консультація через сайт",
            body: "Заповнюючи анкету на сайті, ви ініціюєте запит на консультацію. Це не є укладенням договору про надання юридичних послуг. Договір укладається окремо після першого контакту.",
          },
          {
            heading: "3. Відповідальність",
            body: "Інформація на сайті має загальний ознайомчий характер і не є юридичною консультацією. Результат справи залежить від індивідуальних обставин і не може бути гарантований.",
          },
          {
            heading: "4. Оплата",
            body: "Вартість послуг узгоджується індивідуально під час першої консультації. Зазначені на сайті ціни є орієнтовними і можуть змінюватися залежно від складності справи.",
          },
          {
            heading: "5. Контактні дані",
            body: "ANASTAZJA ŁAPO, Wpis do CEIDG, NIP: 5833480794, REGON: 525583417. Тел.: +48 571 086 455. Telegram: @AnastaziALappo.",
          },
        ],
      },
    },
    cookie: {
      title: "Ми використовуємо файли cookie",
      text: "Цей сайт використовує лише необхідні технічні файли cookie для коректної роботи. Натисніть «Прийняти», щоб продовжити.",
      acceptAll: "Прийняти всі",
      acceptNecessary: "Лише необхідні",
      learnMore: "Докладніше",
    },
    ticker: {
      cases: "350+ кейсів",
      rate: "98.6% успіх",
      languages: "4 мови",
      city: "Варшава · Польща",
      vnj: "ВНЖ від 30 днів",
      online: "Онлайн-консультація",
    },
  },
};

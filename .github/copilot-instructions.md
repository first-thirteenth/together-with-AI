# Copilot Instructions — Лёгкая легализация (Anastazja Łapo)

## О проекте

Лендинг для юриста по легализации Анастасии Лапо (Польша).
Одностраничный сайт с квизом-анкетой, отправляющим данные в Telegram-бота.

## Стек

- **React 19** + **TypeScript 6** (строгий режим)
- **Vite 8** (сборщик)
- **Tailwind CSS 4** (стили, без произвольных CSS-файлов)
- **Framer Motion 12** (все анимации — только через framer-motion)
- **Lucide React** (иконки — только отсюда, не добавляем другие библиотеки иконок)

## Цветовая палитра (Tailwind-токены)

| Токен            | Назначение                                        |
| ---------------- | ------------------------------------------------- |
| `emerald-luxury` | Основной тёмно-зелёный (фон тёмной темы, акценты) |
| `emerald-medium` | Средний зелёный                                   |
| `cream-bg`       | Фоновый кремовый (светлая тема)                   |
| `cream-card`     | Карточки в светлой теме                           |
| `gold-accent`    | Основной золотой                                  |
| `gold-hover`     | Золотой при hover                                 |
| `luxury-text`    | Основной цвет текста                              |

> Никогда не использовать голые hex-коды или произвольные Tailwind-цвета вместо токенов.

## Структура компонентов

```
src/
├── App.tsx                  # Корень: LangProvider + секции
├── pages/
│   └── Home.tsx             # Hero-секция + Quiz (sticky scroll на мобиле)
├── components/
│   ├── Header/              # Навигация, языки, тема, телефон
│   ├── About/               # О специалисте (фото + статистика)
│   ├── Services/            # 8 карточек услуг
│   ├── Reviews/             # Отзывы клиентов
│   ├── Footer/              # Подвал
│   └── Quiz/                # Многошаговая анкета → Telegram API
├── context/
│   ├── LangProvider.tsx     # Провайдер языка (EN/PL/RU/UA)
│   ├── LangContext.ts       # Контекст
│   ├── useLang.ts           # Хук: { lang, setLang, t }
│   └── translations.ts      # Все переводы + TypeScript-схемы
└── config/
    └── contacts.ts          # Контакты Анастасии (телефон, Telegram, WhatsApp, Instagram)
```

## Мультиязычность — обязательные правила

- **Весь текст** — только через `const { t } = useLang()`, никакого хардкода строк
- Добавляя новый текст → добавить во все 4 языка в `translations.ts` (EN, PL, RU, UA)
- Схемы типов — расширять интерфейсы в `translations.ts`, не создавать отдельные файлы типов
- Языки: `LanguageCode = "EN" | "PL" | "RU" | "UA"`

## Анимации — паттерны

- **Появление при скролле** → `whileInView` + `viewport={{ once: true }}`
- **Интерактивные эффекты** → `useAnimate` (не `animate` из JS)
- **Параллакс/sticky** → `useScroll` + `useTransform`
- **Переходы между шагами** → `AnimatePresence` + `mode="wait"`
- `will-change-[transform,opacity]` — добавлять только на анимируемые элементы

## Тёмная тема

- Переключение через `localStorage` (ключ `"theme"`)
- Классы: `dark:bg-...`, `dark:text-...` — всегда парные со светлыми
- Переход: `transition-colors duration-500` на всех затрагиваемых элементах

## Квиз → Telegram

- Токены в `.env`: `VITE_TELEGRAM_TOKEN`, `VITE_TELEGRAM_CHAT_ID`
- Формат сообщения: Markdown (parse_mode: "Markdown")
- Контакт пользователя: телефон или Telegram (@username) — определяется regex

## Контакты (из `config/contacts.ts`)

```ts
CONTACTS.phoneRaw; // "+48571053915"
CONTACTS.phoneDisplay; // "+48 571 053 915"
CONTACTS.telegram; // "https://t.me/AnastaziALappo"
CONTACTS.whatsapp; // "https://wa.me/48571053915"
CONTACTS.instagram; // "https://instagram.com/anastazja.lapo"
```

> Контакты — только из `CONTACTS`, никогда не хардкодить напрямую в JSX.

## Git-конвенции

- Каждая задача — **отдельная ветка** от `together-with-AI`
- Формат имён веток: `fix/...`, `feat/...`, `chore/...`
- Conventional Commits: `fix:`, `feat:`, `chore:`, `refactor:`, `style:`
- Pull Request делает разработчик вручную

## Запрещено

- Хардкодить строки на любом языке прямо в JSX
- Использовать `console.log` в продакшн-коде (только `console.error` для реальных ошибок)
- Добавлять новые npm-зависимости без обсуждения
- Создавать компоненты вне папки `src/components/` или `src/pages/`

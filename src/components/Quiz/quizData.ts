import type { QuizQuestion } from '../../types/quiz';
export const quizQuestions: QuizQuestion[] = [
  {
    id: 'source',
    title: 'Какой у вас основной источник дохода?',
    options: [
      { value: 'remote', label: 'Удаленная работа / Фриланс (контракты вне страны)' },
      { value: 'business', label: 'Собственный бизнес / Дивиденды' },
      { value: 'local', label: 'Планирую искать работу на месте' },
      { value: 'passive', label: 'Пассивный доход (аренда, пенсия)' },
    ]
  },
  {
    id: 'income',
    title: 'Какой среднемесячный доход вы можете подтвердить официально?',
    subtitle: 'Показатель на главного заявителя',
    options: [
      { value: 'low', label: 'До €2 000' },
      { value: 'medium', label: '€2 000 — €4 000' },
      { value: 'high', label: 'Более €4 000' },
    ]
  },
  {
    id: 'education',
    title: 'Ваш уровень образования?',
    subtitle: 'Для ряда программ (например, Digital Nomad) важен профильный диплом',
    options: [
      { value: 'higher', label: 'Высшее (бакалавр, магистр)' },
      { value: 'secondary', label: 'Среднее специальное / Опыт работы от 3 лет' },
      { value: 'none', label: 'Нет диплома и подтвержденного опыта' },
    ]
  }
];

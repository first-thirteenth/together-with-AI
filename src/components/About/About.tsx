import { Award, BookOpen, CheckCircle } from 'lucide-react';
// 1. ИМПОРТИРУЕМ ФОТОГРАФИЮ ИЗ ПАПКИ ASSETS
import anastasiaPhoto from '../../assets/anastasia.jpg';

export const About = () => {
  return (
    // ИСПРАВЛЕНО: Добавлен dark:bg-emerald-luxury и плавность смены темы transition-colors
    <section className="py-24 bg-cream-bg dark:bg-emerald-luxury transition-colors duration-500 relative z-20" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Левая колонка: Фото / Имиджевый блок */}
          <div className="lg:col-span-5 relative justify-self-center lg:justify-self-start w-full max-w-md">
            {/* Нежное золотое свечение за фотографией */}
            <div className="absolute -inset-2 bg-gradient-to-tr from-gold-accent/20 to-transparent rounded-2xl blur-lg"></div>
            
            {/* Рамка под фото в стиле Премиум */}
            {/* ИСПРАВЛЕНО: Подложка рамки адаптирована под темную тему через dark:from-emerald-medium dark:to-emerald-luxury */}
            <div className="relative w-full aspect-[4/5] bg-gradient-to-b from-cream-card to-white dark:from-emerald-medium dark:to-emerald-luxury rounded-2xl border border-gold-accent/20 dark:border-gold-accent/30 overflow-hidden shadow-xl group transition-colors duration-500">
              
              {/* 2. ОТОБРАЖАЕМ РЕАЛЬНУЮ ФОТОГРАФИЮ АНАСТАСИИ С ЭФФЕКТОМ ЗУМА */}
              <img 
                src={anastasiaPhoto} 
                alt="Anastazja Łapo" 
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />

              {/* Мягкий затемняющий градиент снизу для безупречной читаемости имени */}
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-luxury/40 via-transparent to-transparent pointer-events-none" />
              
              {/* Плашка с именем поверх фото */}
              <div className="absolute bottom-4 left-4 right-4 bg-emerald-luxury/95 backdrop-blur-md p-4 rounded-xl border border-gold-accent/10 text-center z-10 shadow-lg">
                <p className="font-bold text-cream-bg text-base tracking-wide">Anastazja Łapo</p>
                <p className="text-[11px] text-gold-accent font-medium uppercase tracking-wider mt-0.5">Основатель проекта</p>
              </div>
            </div>
          </div>

          {/* Правая колонка: Текст и Факты */}
          <div className="lg:col-span-7 space-y-6">
            {/* ИСПРАВЛЕНО: Бейдж адаптирован под темную тему */}
            <div className="inline-flex items-center gap-2 bg-cream-card dark:bg-emerald-medium border border-gold-accent/20 dark:border-gold-accent/30 px-3 py-1 rounded-full text-xs text-gold-hover font-medium shadow-sm transition-colors duration-500">
              <span>Личный бренд и стандарты</span>
            </div>
            
            {/* ИСПРАВЛЕНО: Главный заголовок секции h2 становится кремовым в темноте */}
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-emerald-luxury dark:text-cream-bg leading-tight transition-colors duration-500">
              Личный опыт и <span className="text-gold-hover dark:text-gold-accent">юридическая точность</span> на вашей стороне
            </h2>
            
            {/* ИСПРАВЛЕНО: Текст описания dark:text-cream-bg/80 */}
            <p className="text-base text-luxury-text/80 dark:text-cream-bg/80 leading-relaxed transition-colors duration-500">
              Я специализируюсь на международном миграционном праве более 8 лет. Моя работа заключается в том, чтобы убрать из процесса релокации всю бюрократическую неопределенность. Я не просто заполняю анкеты, а выстраиваю для вас легальный, безопасный и прогнозируемый трек получения статуса.
            </p>

            {/* Короткий список ценностей */}
            {/* ИСПРАВЛЕНО: Элементы списка dark:text-cream-bg/90 */}
            <ul className="space-y-2 text-sm text-luxury-text/90 dark:text-cream-bg/90 transition-colors duration-500">
              <li className="flex items-center gap-2.5">
                <CheckCircle size={14} className="text-gold-accent flex-shrink-0" />
                <span>Глубокий пре-аудит документов до подписания договора</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle size={14} className="text-gold-accent flex-shrink-0" />
                <span>Прямая связь с экспертом без менеджеров и посредников</span>
              </li>
            </ul>

            {/* Карточки с цифрами достижений */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {/* ИСПРАВЛЕНО: Первой карточке добавлены dark:bg-emerald-medium и dark:border-gold-accent/30 */}
              <div className="flex gap-3.5 bg-cream-card dark:bg-emerald-medium p-4 rounded-xl border border-gold-accent/20 dark:border-gold-accent/30 shadow-sm transition-colors duration-500">
                <Award className="text-gold-hover flex-shrink-0" size={22} />
                <div>
                  <h4 className="font-bold text-emerald-luxury dark:text-cream-bg text-sm transition-colors duration-500">350+ успешных кейсов</h4>
                  <p className="text-xs text-luxury-text/60 dark:text-cream-bg/60 transition-colors duration-500">Одобренных ВНЖ и ПМЖ в ЕС</p>
                </div>
              </div>
              
              {/* ИСПРАВЛЕНО: Второй карточке добавлены dark:bg-emerald-medium и dark:border-gold-accent/30 */}
              <div className="flex gap-3.5 bg-cream-card dark:bg-emerald-medium p-4 rounded-xl border border-gold-accent/20 dark:border-gold-accent/30 shadow-sm transition-colors duration-500">
                <BookOpen className="text-gold-hover flex-shrink-0" size={22} />
                <div>
                  <h4 className="font-bold text-emerald-luxury dark:text-cream-bg text-sm transition-colors duration-500">98.6% одобрений</h4>
                  <p className="text-xs text-luxury-text/60 dark:text-cream-bg/60 transition-colors duration-500">За счет жесткого отбора профилей</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};


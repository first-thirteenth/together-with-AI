import { motion, useScroll, useSpring } from 'framer-motion';
import { Header } from './components/Header/Header';
import { Home } from './pages/Home';
import { About } from './components/About/About';
import { Services } from './components/Services/Services';
import { Reviews } from './components/Reviews/Reviews';
import { Footer } from './components/Footer/Footer';

// ИСПРАВЛЕНО: Импортируем наш языковой провайдер
import { LangProvider } from './context/LangProvider'; 

function App() {
  // Отслеживаем глобальный скролл всей страницы
  const { scrollYProgress } = useScroll();
  
  // Делаем движение линии мягким, инерционным и плавным в стиле Люкс
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    // ИСПРАВЛЕНО: LangProvider стал главной корневой оберткой всего дерева компонентов
    <LangProvider>
      <div className="min-h-screen bg-cream-bg dark:bg-emerald-luxury text-luxury-text dark:text-cream-bg font-sans antialiased selection:bg-gold-accent/30 transition-colors duration-500">
        
        {/* ИНДИКАТОР ЧТЕНИЯ: Тончайшая золотая нить, которая красиво светится над парящим хедером */}
        <motion.div 
          style={{ scaleX }}
          className="fixed top-0 left-0 right-0 h-[2px] bg-gold-accent origin-left z-50 shadow-[0_0_8px_#c5a880]"
        />

        <Header />
        
        <div className="relative">
          <main>
            <Home />
            <About />
            <Services />
            <Reviews />
          </main>
          
          <Footer />
        </div>
      </div>
    </LangProvider>
  );
}

export default App;









// src/App.tsx
import { Header } from './components/Header/Header';
import { Home } from './pages/Home';
import { About } from './components/About/About';
import { Services } from './components/Services/Services';
import { Reviews } from './components/Reviews/Reviews'; // 1. Импортируем отзывы
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    // Оборачиваем всё приложение в премиальную гамму
    <div className="min-h-screen bg-cream-bg text-luxury-text font-sans antialiased selection:bg-gold-accent/30">
      <Header />
      
      <div className="relative">
        <main>
          <Home />
          <About />
          <Services />
          {/* 2. Вставляем секцию отзывов */}
          <Reviews />
        </main>
        
        <Footer />
      </div>
    </div>
  );
}

export default App;






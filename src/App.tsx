// src/App.tsx
import { Header } from './components/Header/Header';
import { Home } from './pages/Home';
import { About } from './components/About/About';
import { Services } from './components/Services/Services';
import { Reviews } from './components/Reviews/Reviews'; // 1. Импортируем отзывы
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <>
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
    </>
  );
}

export default App;





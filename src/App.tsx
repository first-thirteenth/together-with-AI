// src/App.tsx
import { Header } from './components/Header/Header';
import { Home } from './pages/Home';

function App() {
  return (
    <>
      {/* Шапка сайта закреплена сверху */}
      <Header />
      
      {/* Основной контент страницы */}
      <main>
        <Home />
      </main>
    </>
  );
}

export default App;


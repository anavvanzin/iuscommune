import { useState, useEffect, memo, useCallback } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import News from './components/News';
import Research from './components/Research';
import Publications from './components/Publications';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Memoização do componente App para evitar re-renderizações desnecessárias
const App = memo(() => {
  const [scrolled, setScrolled] = useState(false);

  // Callback memoizado para o handler de scroll
  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 50);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <div className="min-h-screen bg-white">
      <Header scrolled={scrolled} />
      <Hero />
      <About />
      <News />
      <Research />
      <Publications />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
});

App.displayName = 'App';

export default App;

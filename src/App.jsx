import { useEffect } from 'react';
import { About, Contact, Experience, Hero, Navbar, Tech, Works } from './components';
import { trackPageView } from './utils/analytics';

const App = () => {
  useEffect(() => {
    trackPageView('Aditya Raj Portfolio');
  }, []);

  return (
    <div className="relative z-0 bg-primary text-white">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </div>

      <main>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Contact />
      </main>
    </div>
  );
};

export default App;

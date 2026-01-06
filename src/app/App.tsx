import { useEffect, useState } from 'react';
import { Toaster } from './components/ui/sonner';
import Navigation from './components/portfolio/Navigation';
import Hero from './components/portfolio/Hero';
import About from './components/portfolio/About';
import Skills from './components/portfolio/Skills';
import Projects from './components/portfolio/Projects';
import Experience from './components/portfolio/Experience';
import Contact from './components/portfolio/Contact';
import Footer from './components/portfolio/Footer';

function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    // Initialize with dark theme
    document.documentElement.classList.add('dark');
  }, []);

  useEffect(() => {
    if (theme === 'light') {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
      <Navigation toggleTheme={toggleTheme} theme={theme} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
      <Toaster position="top-right" />
    </div>
  );
}

export default App;

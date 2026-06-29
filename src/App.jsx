import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Services from './components/Services/Services';
import Projects from './components/Projects/Projects';
import Education from './components/Education/Education';
import Certificates from './components/Certificates/Certificates';
import Experience from './components/Experience/Experience';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

function App() {
  const [loading, setLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Loading Screen Timer
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  // Scroll Progress Indicator
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Scroll Progress Indicator */}
      <div 
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-[#6BBAA7] to-[#6C648B] z-50 transition-all duration-100"
        style={{ width: `${scrollProgress}%` }}
      />

      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-950 text-slate-100"
          >
            {/* Glowing Logo / Full Name */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
              className="relative mb-8 text-center"
            >
              <div className="absolute inset-0 bg-accent/5 filter blur-xl animate-pulse-glow" />
              <h1 className="relative text-2xl md:text-3xl font-display font-extrabold tracking-widest bg-gradient-to-r from-[#6BBAA7] via-slate-100 to-[#6C648B] bg-clip-text text-transparent drop-shadow-sm">
                SHUBH GIRI GOSWAMI
              </h1>
            </motion.div>

            {/* Spinner */}
            <div className="w-16 h-1 bg-slate-800 rounded-full overflow-hidden relative">
              <motion.div
                initial={{ left: '-100%' }}
                animate={{ left: '100%' }}
                transition={{ repeat: Infinity, duration: 1.2, ease: 'easeInOut' }}
                className="absolute top-0 bottom-0 w-1/2 bg-gradient-to-r from-[#6BBAA7] to-[#6C648B] rounded-full"
              />
            </div>
            
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0.5, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="text-xs uppercase tracking-widest text-slate-500 mt-4 font-sans font-medium"
            >
              Initializing Portfolio...
            </motion.span>
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-slate-900 dark:bg-slate-950 light:bg-slate-50 min-h-screen text-slate-100 transition-colors duration-500"
          >
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Services />
            <Projects />
            <Education />
            <Certificates />
            <Experience />
            <Contact />
            <Footer />
            <ScrollToTop />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;

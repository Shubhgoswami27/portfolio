import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 50 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-lg cursor-pointer transition-all duration-300 focus:outline-none glass-panel-dark text-accent border border-accent/30 hover:border-accent hover:shadow-[0_0_15px_rgba(167,139,250,0.5)] dark:glass-panel-dark light:glass-panel-light light:text-accent light:border-accent/20"
          aria-label="Scroll to top"
        >
          <FaArrowUp className="w-5 h-5 animate-pulse-glow" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;

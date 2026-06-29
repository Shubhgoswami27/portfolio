import React, { useState, useEffect } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'services', label: 'Services' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'certificates', label: 'Certificates' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' }
];

const Navbar = () => {
  const { isDark, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px', // Trigger when section occupies center of viewport
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    navItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => {
      navItems.forEach((item) => {
        const element = document.getElementById(item.id);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of sticky navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
      scrolled 
        ? 'py-4 glass-panel-dark dark:bg-slate-950/80 light:glass-panel-light light:bg-white/80 shadow-lg' 
        : 'py-6 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a 
          href="#home" 
          onClick={(e) => handleNavClick(e, 'home')}
          className="text-base md:text-xl lg:text-2xl font-display font-extrabold tracking-wider bg-gradient-to-r from-[#6BBAA7] to-[#6C648B] bg-clip-text text-transparent cursor-pointer"
        >
          SHUBH GIRI GOSWAMI
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          <ul className="flex items-center space-x-6 font-sans">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={`text-sm font-medium tracking-wide transition-colors duration-300 hover:text-accent cursor-pointer ${
                    activeSection === item.id 
                      ? 'nav-link-active' 
                      : 'text-slate-300 dark:text-slate-300 light:text-slate-600'
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-full border border-slate-700/50 hover:border-accent cursor-pointer transition-colors duration-300 text-slate-300 dark:text-slate-300 light:text-slate-600 light:border-slate-300 light:hover:border-accent"
            aria-label="Toggle theme"
          >
            {isDark ? <FaSun className="w-4 h-4 text-amber-400" /> : <FaMoon className="w-4 h-4" />}
          </button>
        </div>

        {/* Mobile Controls */}
        <div className="lg:hidden flex items-center space-x-4">
          {/* Theme Toggle (Mobile) */}
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-full border border-slate-700/50 dark:border-slate-700/50 light:border-slate-300 cursor-pointer text-slate-300 dark:text-slate-300 light:text-slate-600"
            aria-label="Toggle theme"
          >
            {isDark ? <FaSun className="w-4 h-4 text-amber-400" /> : <FaMoon className="w-4 h-4" />}
          </button>

          {/* Hamburger Menu Icon */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2.5 rounded-full border border-slate-700/50 dark:border-slate-700/50 light:border-slate-300 cursor-pointer text-slate-300 dark:text-slate-300 light:text-slate-600 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes className="w-4 h-4" /> : <FaBars className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden absolute top-full left-0 w-full glass-panel-dark dark:bg-slate-950/95 light:glass-panel-light light:bg-white/95 border-b border-slate-800 dark:border-slate-800 light:border-slate-200 shadow-xl overflow-hidden"
          >
            <ul className="px-6 py-4 flex flex-col space-y-4">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => handleNavClick(e, item.id)}
                    className={`block py-2 text-base font-medium transition-colors duration-300 hover:text-accent cursor-pointer ${
                      activeSection === item.id
                        ? 'text-accent border-l-2 border-accent pl-2'
                        : 'text-slate-300 dark:text-slate-300 light:text-slate-600'
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

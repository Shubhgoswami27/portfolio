import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolioData';
import profileAvatar from '../../assets/profile_avatar.png';
import { FaDownload, FaArrowRight } from 'react-icons/fa';

const Hero = () => {
  const { name, titles, tagline, resumeUrl } = portfolioData.profile;
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect logic
  useEffect(() => {
    let timer;
    const currentFullText = titles[titleIndex];

    if (isDeleting) {
      // Deleting text
      timer = setTimeout(() => {
        setDisplayText(prev => prev.slice(0, -1));
      }, 50);
    } else {
      // Typing text
      timer = setTimeout(() => {
        setDisplayText(prev => currentFullText.slice(0, prev.length + 1));
      }, 100);
    }

    // Handle index rotation
    if (!isDeleting && displayText === currentFullText) {
      timer = setTimeout(() => setIsDeleting(true), 1500); // Wait before deleting
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, titleIndex, titles]);

  const handleContactClick = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadResume = (e) => {
    e.preventDefault();
    if (resumeUrl && resumeUrl !== '#' && resumeUrl !== '') {
      window.open(resumeUrl, '_blank');
    } else {
      window.print(); // Fallback print action
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-transparent text-slate-100 transition-colors duration-500"
    >
      {/* Background Animated Blobs - Aqua + Lavender */}
      <div className="absolute inset-0 z-0">
        <div className="blob bg-[#6BBAA7]/10 w-72 h-72 top-10 left-10 animate-float" />
        <div className="blob bg-[#6C648B]/12 w-96 h-96 bottom-10 right-10 animate-float-delayed" />
        <div className="blob bg-[#B6A19E]/8 w-80 h-80 top-1/2 left-2/3 animate-pulse-glow" />
      </div>

      {/* Floating 3D SVGs in background */}
      <div className="absolute inset-0 z-0 pointer-events-none hidden md:block">
        <motion.div 
          animate={{ y: [0, -20, 0], rotate: [0, 360] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/12 opacity-20 dark:opacity-30 light:opacity-10"
        >
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <rect x="5" y="5" width="30" height="30" rx="6" stroke="#6BBAA7" strokeWidth="1.5" />
          </svg>
        </motion.div>
        <motion.div 
          animate={{ y: [0, 20, 0], rotate: [360, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-1/12 opacity-20 dark:opacity-30 light:opacity-10"
        >
          <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
            <circle cx="25" cy="25" r="20" stroke="#6C648B" strokeWidth="1.5" strokeDasharray="4 4" />
          </svg>
        </motion.div>
        <motion.div 
          animate={{ scale: [1, 1.15, 1], rotate: [0, -180, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 right-1/4 opacity-25 dark:opacity-35 light:opacity-15"
        >
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
            <path d="M15 2L28 25H2L15 2Z" stroke="#3B82F6" strokeWidth="2" fill="none" />
          </svg>
        </motion.div>
      </div>

      {/* Hero Content */}
      <div className="max-w-7xl mx-auto px-6 py-12 z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left text column */}
        <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left space-y-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="px-4 py-2 rounded-full text-sm font-semibold tracking-wider uppercase border border-accent/20 bg-accent/5 text-accent dark:border-accent/30 dark:bg-accent/10 light:border-accent/15 light:bg-accent/5">
              Available for Opportunities
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold tracking-tight leading-none"
          >
            Hello, I'm <br />
            <span className="bg-gradient-to-r from-[#6BBAA7] via-slate-100 to-[#6C648B] bg-clip-text text-transparent drop-shadow-sm">
              {name}
            </span>
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl font-poppins font-medium min-h-[40px] flex items-center justify-center lg:justify-start"
          >
            <span className="text-slate-400 dark:text-slate-400 light:text-slate-600">I'm a&nbsp;</span>
            <span className="text-accent dark:text-accent font-semibold border-r-2 border-accent typing-cursor pr-1">
              {displayText}
            </span>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-xl mx-auto lg:mx-0 text-base md:text-lg text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed font-sans"
          >
            {tagline}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center lg:justify-start pt-4"
          >
            <a
              href="#contact"
              onClick={handleContactClick}
              className="px-8 py-3.5 rounded-xl font-bold tracking-wide flex items-center justify-center space-x-2 text-slate-950 bg-sunshine hover:bg-sunshine-hover transition-all duration-300 cursor-pointer shadow-[0_4px_15px_rgba(251,161,0,0.3)] hover:shadow-[0_4px_25px_rgba(251,161,0,0.45)] hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Get In Touch</span>
              <FaArrowRight className="w-4 h-4" />
            </a>
            
            <a
              href={resumeUrl}
              onClick={handleDownloadResume}
              className="px-8 py-3.5 rounded-xl font-medium tracking-wide flex items-center justify-center space-x-2 transition-all duration-300 cursor-pointer border border-slate-700 bg-slate-900/50 hover:bg-slate-800 text-slate-100 hover:border-sunshine hover:text-sunshine hover:-translate-y-0.5 active:translate-y-0 light:bg-white/80 light:border-slate-300 light:hover:bg-slate-100 light:text-slate-900"
            >
              <FaDownload className="w-4 h-4" />
              <span>Download Resume</span>
            </a>
          </motion.div>
        </div>

        {/* Right image column */}
        <div className="lg:col-span-5 flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            {/* Background glowing circle */}
            <div className="absolute inset-0 bg-[#6BBAA7]/10 dark:bg-[#6BBAA7]/15 light:bg-[#6BBAA7]/5 rounded-full filter blur-xl animate-pulse-glow" />

            {/* Profile Frame with glowing border */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full p-2 bg-gradient-to-tr from-[#6BBAA7] via-[#B6A19E] to-[#6C648B] shadow-[0_0_35px_rgba(107,186,167,0.25)] animate-float">
              <div className="w-full h-full rounded-full overflow-hidden border-2 border-slate-900 dark:border-slate-950 light:border-slate-50 bg-slate-800">
                <img 
                  src={profileAvatar} 
                  alt={name} 
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  style={{ objectPosition: 'center 15%' }}
                />
              </div>
            </div>

            {/* Micro Badge 1: AI/ML */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 px-4 py-2 rounded-xl text-xs font-semibold glass-panel-dark dark:border-[#6BBAA7]/40 light:glass-panel-light light:border-slate-300 border shadow-lg text-[#6BBAA7]"
            >
              🧠 AI & ML
            </motion.div>

            {/* Micro Badge 2: Java */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -bottom-2 -left-4 px-4 py-2 rounded-xl text-xs font-semibold glass-panel-dark dark:border-[#6BBAA7]/40 light:glass-panel-light light:border-slate-300 border shadow-lg text-[#6BBAA7]"
            >
              ☕ Java Developer
            </motion.div>
          </motion.div>
        </div>

      </div>

      {/* Scroll Down mouse icon */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block">
        <a 
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="flex flex-col items-center opacity-60 hover:opacity-100 transition-opacity duration-300"
        >
          <div className="w-6 h-10 border-2 border-slate-400 dark:border-slate-400 light:border-slate-500 rounded-full p-1 flex justify-center">
            <motion.div 
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-3 bg-accent rounded-full"
            />
          </div>
          <span className="text-xs tracking-widest uppercase mt-2 text-slate-400 dark:text-slate-400 light:text-slate-500 font-sans">Scroll Down</span>
        </a>
      </div>
    </section>
  );
};

export default Hero;

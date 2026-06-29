import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const quickLinks = [
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

const Footer = () => {
  const { name, linkedin, github, email } = portfolioData.profile;

  const handleLinkClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
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
    <footer className="py-12 border-t border-slate-900 dark:border-slate-900 light:border-slate-200 bg-slate-950 text-slate-400 dark:bg-slate-950 dark:text-slate-400 light:bg-slate-100 light:text-slate-500 transition-colors duration-500 font-sans">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center space-y-8">
        
        {/* Logo or Signature */}
        <a 
          href="#home" 
          onClick={(e) => handleLinkClick(e, 'home')}
          className="text-xl font-display font-extrabold tracking-wider bg-gradient-to-r from-accent to-purple-400 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300"
        >
          {name.toUpperCase()}
        </a>

        {/* Quick Links Grid */}
        <ul className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm font-medium">
          {quickLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={(e) => handleLinkClick(e, link.id)}
                className="hover:text-accent transition-colors duration-300 cursor-pointer text-slate-350 dark:text-slate-350 light:text-slate-600"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className="flex space-x-6">
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent hover:scale-115 hover:shadow-[0_0_10px_rgba(167,139,250,0.3)] p-2 rounded-full border border-slate-900 dark:border-slate-900 light:border-slate-250 transition-all duration-300 text-slate-300 light:text-slate-600"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="w-5 h-5" />
          </a>
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent hover:scale-115 hover:shadow-[0_0_10px_rgba(167,139,250,0.3)] p-2 rounded-full border border-slate-900 dark:border-slate-900 light:border-slate-250 transition-all duration-300 text-slate-300 light:text-slate-600"
            aria-label="GitHub"
          >
            <FaGithub className="w-5 h-5" />
          </a>
          <a
            href={`mailto:${email}`}
            className="hover:text-accent hover:scale-115 hover:shadow-[0_0_10px_rgba(167,139,250,0.3)] p-2 rounded-full border border-slate-900 dark:border-slate-900 light:border-slate-250 transition-all duration-300 text-slate-300 light:text-slate-600"
            aria-label="Email"
          >
            <FaEnvelope className="w-5 h-5" />
          </a>
        </div>

        {/* Copyright Signature */}
        <p className="text-xs text-slate-500 dark:text-slate-500 light:text-slate-400 text-center">
          Copyright &copy; 2026 {name}. All rights reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../../data/portfolioData';
import emailjs from '@emailjs/browser';
import confetti from 'canvas-confetti';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaPaperPlane, FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';

const Contact = () => {
  const { email, phone, location, github, linkedin } = portfolioData.profile;
  const formRef = useRef();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('loading');

    // EmailJS credentials (using placeholders if not set by user)
    const SERVICE_ID = 'service_v4nzn09'; // Replace with user's service ID
    const TEMPLATE_ID = 'template_7n544ml'; // Replace with user's template ID
    const PUBLIC_KEY = 'Y521taElUN-mOLR-H'; // Replace with user's public key

    // Check if user has updated placeholder credentials
    const isCredentialsPlaceholder = 
      SERVICE_ID.includes('portfolio') || 
      TEMPLATE_ID.includes('portfolio') || 
      PUBLIC_KEY.includes('portfolio');

    if (isCredentialsPlaceholder) {
      // Simulate form submission for demonstration with premium confetti!
      setTimeout(() => {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        
        // Pop confetti!
        confetti({
          particleCount: 150,
          spread: 80,
          origin: { y: 0.6 },
          colors: ['#6BBAA7', '#FBA100', '#6C648B', '#B6A19E']
        });
      }, 1500);
    } else {
      // Send real email using EmailJS
      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
        .then(() => {
          setStatus('success');
          setFormData({ name: '', email: '', subject: '', message: '' });
          
          confetti({
            particleCount: 150,
            spread: 80,
            origin: { y: 0.6 },
            colors: ['#6BBAA7', '#FBA100', '#6C648B', '#B6A19E']
          });
        })
        .catch((error) => {
          setStatus('error');
          setErrorMessage(error?.text || 'Something went wrong. Please try again later.');
        });
    }
  };

  return (
    <section 
      id="contact" 
      className="py-24 relative overflow-hidden bg-transparent text-slate-100 transition-colors duration-500"
    >
      {/* Background blobs - Aqua + Lavender */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="blob bg-[#6C648B]/5 dark:bg-[#6C648B]/8 light:bg-[#6C648B]/5 w-96 h-96 top-1/2 left-[-100px] blur-[120px]" />
        <div className="blob bg-[#6BBAA7]/5 dark:bg-[#6BBAA7]/8 light:bg-[#6BBAA7]/5 w-80 h-80 bottom-10 right-10 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="text-sm font-semibold tracking-wider uppercase text-accent"
          >
            Get In Touch
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-display font-extrabold mt-2 tracking-tight"
          >
            Contact Information
          </motion.h3>
          <div className="w-12 h-1 bg-accent mx-auto mt-4 rounded-full" />
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
          
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            
            {/* Email Card */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="glass-panel-dark dark:glass-panel-dark light:glass-panel-light p-6 rounded-2xl border border-slate-800 dark:border-slate-800 light:border-slate-200 flex items-center space-x-4 transition-all duration-300"
            >
              <div className="p-4 rounded-xl bg-accent/10 text-accent">
                <FaEnvelope className="w-6 h-6 animate-pulse-glow" />
              </div>
              <div>
                <h4 className="text-xs font-semibold text-slate-400 dark:text-slate-400 light:text-slate-500 uppercase tracking-wider">
                  Email Me
                </h4>
                <a href={`mailto:${email}`} className="text-base md:text-lg font-bold hover:text-accent transition-colors duration-300">
                  {email}
                </a>
              </div>
            </motion.div>

            {/* Phone Card */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-panel-dark dark:glass-panel-dark light:glass-panel-light p-6 rounded-2xl border border-slate-800 dark:border-slate-800 light:border-slate-200 flex items-center space-x-4 transition-all duration-300"
            >
              <div className="p-4 rounded-xl bg-accent/10 text-accent">
                <FaPhone className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xs font-semibold text-slate-400 dark:text-slate-400 light:text-slate-500 uppercase tracking-wider">
                  Call Me
                </h4>
                <a href={`tel:${phone}`} className="text-base md:text-lg font-bold hover:text-accent transition-colors duration-300">
                  {phone}
                </a>
              </div>
            </motion.div>

            {/* Location Card */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -5 }}
              className="glass-panel-dark dark:glass-panel-dark light:glass-panel-light p-6 rounded-2xl border border-slate-800 dark:border-slate-800 light:border-slate-200 flex items-center space-x-4 transition-all duration-300"
            >
              <div className="p-4 rounded-xl bg-accent/10 text-accent">
                <FaMapMarkerAlt className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xs font-semibold text-slate-400 dark:text-slate-400 light:text-slate-500 uppercase tracking-wider">
                  Location
                </h4>
                <p className="text-base md:text-lg font-bold text-slate-200 dark:text-slate-200 light:text-slate-800">
                  {location}
                </p>
              </div>
            </motion.div>

            {/* Social media connections */}
            <div className="flex space-x-4 pt-4 justify-center lg:justify-start">
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-slate-900 border border-slate-800 hover:border-accent hover:text-accent hover:shadow-[0_0_15px_rgba(107,186,167,0.25)] transition-all duration-300 text-slate-300 cursor-pointer dark:bg-slate-900 light:bg-white light:border-slate-200 light:text-slate-650"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-slate-900 border border-slate-800 hover:border-accent hover:text-accent hover:shadow-[0_0_15px_rgba(107,186,167,0.25)] transition-all duration-300 text-slate-300 cursor-pointer dark:bg-slate-900 light:bg-white light:border-slate-200 light:text-slate-650"
                aria-label="GitHub"
              >
                <FaGithub className="w-6 h-6" />
              </a>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className="glass-panel-dark dark:glass-panel-dark light:glass-panel-light p-8 rounded-2xl border border-slate-800 dark:border-slate-800 light:border-slate-200"
            >
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name field */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-semibold text-slate-300 dark:text-slate-300 light:text-slate-700">
                      Your Name
                    </label>
                    <input
                      required
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-800 dark:border-slate-850 dark:bg-slate-900/60 light:border-slate-250 light:bg-white text-slate-100 dark:text-slate-100 light:text-slate-900 focus:outline-none focus:border-accent transition-colors duration-300"
                      placeholder="John Doe"
                    />
                  </div>

                  {/* Email field */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-semibold text-slate-300 dark:text-slate-300 light:text-slate-700">
                      Your Email
                    </label>
                    <input
                      required
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-800 dark:border-slate-850 dark:bg-slate-900/60 light:border-slate-250 light:bg-white text-slate-100 dark:text-slate-100 light:text-slate-900 focus:outline-none focus:border-accent transition-colors duration-300"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                {/* Subject field */}
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-semibold text-slate-300 dark:text-slate-300 light:text-slate-700">
                    Subject
                  </label>
                  <input
                    required
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-800 dark:border-slate-850 dark:bg-slate-900/60 light:border-slate-250 light:bg-white text-slate-100 dark:text-slate-100 light:text-slate-900 focus:outline-none focus:border-accent transition-colors duration-300"
                    placeholder="Project Inquiry"
                  />
                </div>

                {/* Message field */}
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-semibold text-slate-300 dark:text-slate-300 light:text-slate-700">
                    Message
                  </label>
                  <textarea
                    required
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full px-4 py-3 rounded-xl border border-slate-800 dark:border-slate-850 dark:bg-slate-900/60 light:border-slate-250 light:bg-white text-slate-100 dark:text-slate-100 light:text-slate-900 focus:outline-none focus:border-accent transition-colors duration-300 resize-none"
                    placeholder="Write your message here..."
                  />
                </div>

                {/* Submit Button & Status States */}
                <div className="pt-2">
                  <button
                    disabled={status === 'loading' || status === 'success'}
                    type="submit"
                    className="w-full py-4 rounded-xl font-bold tracking-wide flex items-center justify-center space-x-2 bg-sunshine hover:bg-sunshine-hover text-slate-950 transition-all duration-300 shadow-[0_4px_15px_rgba(251,161,0,0.3)] hover:shadow-[0_4px_20px_rgba(251,161,0,0.45)] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                  >
                    {status === 'loading' ? (
                      <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : status === 'success' ? (
                      <div className="flex items-center space-x-2">
                        <FaCheckCircle className="w-5 h-5 text-emerald-400" />
                        <span>Message Sent!</span>
                      </div>
                    ) : (
                      <>
                        <FaPaperPlane className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Status Banners */}
                <AnimatePresence>
                  {status === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium flex items-center space-x-2"
                    >
                      <FaCheckCircle className="flex-shrink-0 w-4 h-4" />
                      <span>Thank you! Your message has been sent successfully. I will get back to you shortly.</span>
                    </motion.div>
                  )}

                  {status === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 text-sm font-medium flex items-center space-x-2"
                    >
                      <FaExclamationTriangle className="flex-shrink-0 w-4 h-4" />
                      <span>{errorMessage}</span>
                    </motion.div>
                  )}
                </AnimatePresence>

              </form>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;

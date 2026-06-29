import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolioData';

const Education = () => {
  const educationList = portfolioData.education;

  return (
    <section 
      id="education" 
      className="py-24 relative overflow-hidden bg-transparent text-slate-100 transition-colors duration-500"
    >
      {/* Background blobs */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="blob bg-[#6BBAA7]/5 dark:bg-[#6BBAA7]/8 light:bg-[#6BBAA7]/5 w-90 h-90 top-10 right-10 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="text-sm font-semibold tracking-wider uppercase text-accent"
          >
            Academic Path
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-display font-extrabold mt-2 tracking-tight"
          >
            Education Timeline
          </motion.h3>
          <div className="w-12 h-1 bg-accent mx-auto mt-4 rounded-full" />
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Center Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#6BBAA7]/60 via-[#6C648B]/40 to-[#B6A19E]/10 transform -translate-x-1/2" />

          {/* Timeline Items */}
          <div className="space-y-12">
            {educationList.map((edu, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div key={idx} className="relative flex flex-col md:flex-row items-stretch">
                  
                  {/* Left Side (for Desktop) */}
                  <div className={`w-full md:w-1/2 pr-0 md:pr-12 pl-12 md:pl-0 flex flex-col justify-center ${
                    isEven ? 'md:items-end md:text-right' : 'md:order-last md:items-start md:text-left'
                  }`}>
                    {/* Only render details on this side if desktop matches direction */}
                    {isEven && (
                      <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 0.6, type: 'spring' }}
                        className="glass-panel-dark dark:glass-panel-dark light:glass-panel-light p-6 rounded-2xl border border-slate-800 dark:border-slate-800 light:border-slate-200 shadow-md w-full"
                      >
                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-accent/15 text-accent border border-accent/20">
                          {edu.duration}
                        </span>
                        
                        <h4 className="text-xl font-display font-extrabold mt-4 mb-1 text-slate-100 dark:text-slate-100 light:text-slate-900 leading-tight">
                          {edu.grade}
                        </h4>
                        
                        <p className="text-sm font-semibold text-accent mb-2">
                          {edu.specialization}
                        </p>
                        
                        <p className="text-sm font-sans font-medium text-slate-400 dark:text-slate-400 light:text-slate-500 mb-4">
                          {edu.institution}
                        </p>
                        
                        <div className={`p-3 rounded-lg bg-slate-950/40 dark:bg-slate-950/40 light:bg-slate-100 border border-slate-850 dark:border-slate-850 light:border-slate-250 inline-flex items-center space-x-2 text-sm font-bold text-slate-200 dark:text-slate-200 light:text-slate-700`}>
                          <span>{edu.scoreType}:</span>
                          <span className="text-accent">{edu.score}</span>
                        </div>
                        
                        <p className="mt-4 text-xs md:text-sm text-slate-400 dark:text-slate-400 light:text-slate-500 leading-relaxed font-sans">
                          {edu.description}
                        </p>
                      </motion.div>
                    )}
                  </div>

                  {/* Timeline Node Point */}
                  <div className="absolute left-4 md:left-1/2 top-6 transform -translate-x-1/2 flex items-center justify-center z-10">
                    <motion.div
                      whileHover={{ scale: 1.3 }}
                      className="w-5 h-5 rounded-full border-4 border-slate-950 dark:border-slate-950 light:border-slate-50 bg-[#B6A19E] shadow-[0_0_10px_rgba(182,161,158,0.5)] cursor-pointer"
                    />
                  </div>

                  {/* Right Side / Mobile (fallback list) */}
                  <div className={`w-full md:w-1/2 pl-12 md:pl-12 flex flex-col justify-center ${
                    !isEven ? 'md:items-start md:text-left' : 'md:hidden'
                  }`}>
                    {/* Render on right side for desktop odd items, OR render all on mobile */}
                    <motion.div 
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: '-100px' }}
                      transition={{ duration: 0.6, type: 'spring' }}
                      className="glass-panel-dark dark:glass-panel-dark light:glass-panel-light p-6 rounded-2xl border border-slate-800 dark:border-slate-800 light:border-slate-200 shadow-md w-full"
                    >
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-accent/15 text-accent border border-accent/20">
                        {edu.duration}
                      </span>
                      
                      <h4 className="text-xl font-display font-extrabold mt-4 mb-1 text-slate-100 dark:text-slate-100 light:text-slate-900 leading-tight">
                        {edu.grade}
                      </h4>
                      
                      <p className="text-sm font-semibold text-accent mb-2">
                        {edu.specialization}
                      </p>
                      
                      <p className="text-sm font-sans font-medium text-slate-400 dark:text-slate-400 light:text-slate-500 mb-4">
                        {edu.institution}
                      </p>
                      
                      <div className="p-3 rounded-lg bg-slate-950/40 dark:bg-slate-950/40 light:bg-slate-100 border border-slate-850 dark:border-slate-850 light:border-slate-250 inline-flex items-center space-x-2 text-sm font-bold text-slate-200 dark:text-slate-200 light:text-slate-700">
                        <span>{edu.scoreType}:</span>
                        <span className="text-accent">{edu.score}</span>
                      </div>
                      
                      <p className="mt-4 text-xs md:text-sm text-slate-400 dark:text-slate-400 light:text-slate-500 leading-relaxed font-sans">
                        {edu.description}
                      </p>
                    </motion.div>
                  </div>

                  {/* Fallback item wrapper for mobile screens when idx is Even */}
                  {isEven && (
                    <div className="w-full md:hidden pl-12 flex flex-col justify-center">
                      <motion.div 
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 0.6, type: 'spring' }}
                        className="glass-panel-dark dark:glass-panel-dark light:glass-panel-light p-6 rounded-2xl border border-slate-800 dark:border-slate-800 light:border-slate-200 shadow-md w-full mt-4"
                      >
                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-accent/15 text-accent border border-accent/20">
                          {edu.duration}
                        </span>
                        
                        <h4 className="text-xl font-display font-extrabold mt-4 mb-1 text-slate-100 dark:text-slate-100 light:text-slate-900 leading-tight">
                          {edu.grade}
                        </h4>
                        
                        <p className="text-sm font-semibold text-accent mb-2">
                          {edu.specialization}
                        </p>
                        
                        <p className="text-sm font-sans font-medium text-slate-400 dark:text-slate-400 light:text-slate-500 mb-4">
                          {edu.institution}
                        </p>
                        
                        <div className="p-3 rounded-lg bg-slate-950/40 dark:bg-slate-950/40 light:bg-slate-100 border border-slate-850 dark:border-slate-850 light:border-slate-250 inline-flex items-center space-x-2 text-sm font-bold text-slate-200 dark:text-slate-200 light:text-slate-700">
                          <span>{edu.scoreType}:</span>
                          <span className="text-accent">{edu.score}</span>
                        </div>
                        
                        <p className="mt-4 text-xs md:text-sm text-slate-400 dark:text-slate-400 light:text-slate-500 leading-relaxed font-sans">
                          {edu.description}
                        </p>
                      </motion.div>
                    </div>
                  )}

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Education;

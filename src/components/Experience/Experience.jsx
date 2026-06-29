import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolioData';
import { FaLaptopCode, FaFlask, FaCheck } from 'react-icons/fa';

const Experience = () => {
  const experiences = portfolioData.experience;

  return (
    <section 
      id="experience" 
      className="py-24 relative overflow-hidden bg-slate-900 text-slate-100 dark:bg-slate-950 dark:text-slate-100 light:bg-slate-50 light:text-slate-900 transition-colors duration-500"
    >
      {/* Background blobs */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="blob bg-blue-600/5 dark:bg-blue-600/10 light:bg-blue-300/5 w-80 h-80 top-1/3 left-10 blur-[120px]" />
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
            My Journey
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-display font-extrabold mt-2 tracking-tight"
          >
            Practical Experience
          </motion.h3>
          <div className="w-12 h-1 bg-accent mx-auto mt-4 rounded-full" />
        </div>

        {/* Experience Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {experiences.map((exp, idx) => {
            const isResearch = exp.type === 'research';
            const Icon = isResearch ? FaFlask : FaLaptopCode;
            
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="glass-panel-dark dark:glass-panel-dark light:glass-panel-light p-8 rounded-2xl border border-slate-800 dark:border-slate-800 light:border-slate-200 flex flex-col justify-between hover:shadow-[0_0_25px_rgba(167,139,250,0.15)] hover:border-accent/40 transition-all duration-300 group"
              >
                <div>
                  {/* Title and Badge */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-3">
                      <div className="p-3 rounded-xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-slate-950 transition-colors duration-300">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-xl font-display font-bold leading-snug group-hover:text-accent transition-colors duration-300">
                          {exp.title}
                        </h4>
                        <p className="text-sm font-sans font-medium text-slate-400 dark:text-slate-400 light:text-slate-500">
                          {exp.organization}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6 flex justify-between items-center border-b border-slate-800 dark:border-slate-800 light:border-slate-200 pb-3">
                    <span className="text-xs font-semibold uppercase tracking-wider text-accent bg-accent/15 px-3 py-1 rounded-full border border-accent/20">
                      {exp.type}
                    </span>
                    <span className="text-sm font-medium text-slate-400 dark:text-slate-400 light:text-slate-500">
                      {exp.duration}
                    </span>
                  </div>

                  {/* Learnings list */}
                  <ul className="space-y-4">
                    {exp.learnings.map((learning, i) => (
                      <li key={i} className="flex items-start space-x-3">
                        <span className="mt-1 flex items-center justify-center w-4 h-4 rounded-full bg-accent/10 text-accent text-[9px] flex-shrink-0">
                          <FaCheck className="w-2.5 h-2.5" />
                        </span>
                        <span className="text-sm font-sans text-slate-300 dark:text-slate-300 light:text-slate-650 leading-relaxed">
                          {learning}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Experience;

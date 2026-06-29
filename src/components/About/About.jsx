import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolioData';
import { FaGraduationCap, FaCompass, FaCheckCircle, FaLaptopCode } from 'react-icons/fa';

const About = () => {
  const { introduction, careerObjective, interests, goals } = portfolioData.about;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } },
  };

  return (
    <section 
      id="about" 
      className="py-24 relative overflow-hidden bg-slate-900 text-slate-100 dark:bg-slate-950 dark:text-slate-100 light:bg-slate-50 light:text-slate-900 transition-colors duration-500"
    >
      {/* Background blobs */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="blob bg-purple-600/10 dark:bg-purple-600/15 light:bg-purple-300/10 w-96 h-96 top-1/3 left-[-100px] blur-[120px]" />
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
            About Me
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-display font-extrabold mt-2 tracking-tight"
          >
            Sowing the Seeds of AI & ML Innovation
          </motion.h3>
          <div className="w-12 h-1 bg-accent mx-auto mt-4 rounded-full" />
        </div>

        {/* Main Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12"
        >
          {/* Left Column: Intro & Objective */}
          <div className="lg:col-span-6 space-y-8">
            <motion.div 
              variants={itemVariants}
              className="glass-panel-dark dark:glass-panel-dark light:glass-panel-light p-8 rounded-2xl border border-slate-800 dark:border-slate-800 light:border-slate-200"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-3 rounded-lg bg-accent/15 text-accent">
                  <FaLaptopCode className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-display font-bold">Introduction</h4>
              </div>
              <p className="text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed font-sans text-base">
                {introduction}
              </p>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="glass-panel-dark dark:glass-panel-dark light:glass-panel-light p-8 rounded-2xl border border-slate-800 dark:border-slate-800 light:border-slate-200"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-3 rounded-lg bg-accent/15 text-accent">
                  <FaGraduationCap className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-display font-bold">Career Objective</h4>
              </div>
              <p className="text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed font-sans text-base">
                {careerObjective}
              </p>
            </motion.div>
          </div>

          {/* Right Column: Interests & Goals */}
          <div className="lg:col-span-6 space-y-8">
            {/* Interests Section */}
            <motion.div 
              variants={itemVariants}
              className="glass-panel-dark dark:glass-panel-dark light:glass-panel-light p-8 rounded-2xl border border-slate-800 dark:border-slate-800 light:border-slate-200"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 rounded-lg bg-accent/15 text-accent">
                  <FaCompass className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-display font-bold">Key Fields of Interest</h4>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                {interests.map((interest, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="p-3 text-center rounded-xl text-sm font-medium border border-slate-800 dark:border-slate-800 dark:bg-slate-900/30 hover:border-accent hover:text-accent dark:hover:border-accent transition-all duration-300 cursor-default bg-slate-900/40 light:bg-slate-200/50 light:border-slate-200 light:text-slate-700 light:hover:bg-accent/10 light:hover:text-accent"
                  >
                    {interest}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Goals Section */}
            <motion.div 
              variants={itemVariants}
              className="glass-panel-dark dark:glass-panel-dark light:glass-panel-light p-8 rounded-2xl border border-slate-800 dark:border-slate-800 light:border-slate-200"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 rounded-lg bg-accent/15 text-accent">
                  <FaCheckCircle className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-display font-bold">Professional Goals</h4>
              </div>

              <ul className="space-y-4">
                {goals.map((goal, index) => (
                  <li key={index} className="flex items-start space-x-3 text-slate-300 dark:text-slate-300 light:text-slate-600 font-sans text-base">
                    <span className="mt-1 text-accent flex-shrink-0">•</span>
                    <span>{goal}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default About;

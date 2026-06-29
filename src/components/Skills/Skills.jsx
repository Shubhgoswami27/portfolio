import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolioData';
import { 
  SiPython, SiCplusplus, 
  SiNumpy, SiPandas, SiScikitlearn, 
  SiGit, SiGithub 
} from 'react-icons/si';
import { FaJava, FaChartLine } from 'react-icons/fa';
import { GiBrain } from 'react-icons/gi';

// Map icon string names to actual React component icons
const iconMap = {
  SiJava: FaJava,
  SiPython: SiPython,
  SiCplusplus: SiCplusplus,
  GiBrain: GiBrain,
  SiNumpy: SiNumpy,
  SiPandas: SiPandas,
  SiMatplotlib: FaChartLine, // Matplotlib placeholder
  SiScikitlearn: SiScikitlearn,
  SiGit: SiGit,
  SiGithub: SiGithub
};

const Skills = () => {
  const skillCategories = portfolioData.skills;

  const barVariants = {
    hidden: { width: 0 },
    visible: (level) => ({
      width: `${level}%`,
      transition: { duration: 1.2, ease: 'easeOut', delay: 0.2 }
    })
  };

  return (
    <section 
      id="skills" 
      className="py-24 relative overflow-hidden bg-slate-950 text-slate-100 dark:bg-slate-950 dark:text-slate-100 light:bg-slate-100 light:text-slate-900 transition-colors duration-500"
    >
      {/* Background radial glow */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="blob bg-accent/5 dark:bg-accent/10 light:bg-accent/5 w-[500px] h-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-[100px]" />
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
            My Expertise
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-display font-extrabold mt-2 tracking-tight"
          >
            Skills & Technologies
          </motion.h3>
          <div className="w-12 h-1 bg-accent mx-auto mt-4 rounded-full" />
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={catIdx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: catIdx * 0.1 }}
              className="glass-panel-dark dark:glass-panel-dark light:glass-panel-light p-6 rounded-2xl border border-slate-800 dark:border-slate-850 light:border-slate-200 hover:shadow-[0_0_20px_rgba(167,139,250,0.15)] hover:border-accent/40 transition-all duration-300 group"
            >
              <h4 className="text-lg font-display font-bold mb-6 text-accent border-b border-slate-800 dark:border-slate-850 light:border-slate-200 pb-3 group-hover:text-accent-hover transition-colors duration-300">
                {category.category}
              </h4>

              <div className="space-y-6">
                {category.items.map((skill, itemIdx) => {
                  const Icon = iconMap[skill.icon] || GiBrain;
                  return (
                    <div key={itemIdx} className="space-y-2">
                      <div className="flex justify-between items-center text-sm font-sans">
                        <div className="flex items-center space-x-2.5">
                          <span className="text-accent group-hover:scale-110 transition-transform duration-300">
                            <Icon className="w-4 h-4" />
                          </span>
                          <span className="font-semibold text-slate-200 dark:text-slate-200 light:text-slate-700">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-slate-400 dark:text-slate-400 light:text-slate-500 font-medium">
                          {skill.level}%
                        </span>
                      </div>

                      {/* Progress Bar Container */}
                      <div className="h-2 w-full rounded-full bg-slate-800 dark:bg-slate-850 light:bg-slate-200 overflow-hidden">
                        <motion.div
                          custom={skill.level}
                          variants={barVariants}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                          className="h-full rounded-full bg-gradient-to-r from-accent to-purple-400"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;

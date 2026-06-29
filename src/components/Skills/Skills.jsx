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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100 }
    }
  };

  return (
    <section 
      id="skills" 
      className="py-24 relative overflow-hidden bg-transparent text-slate-100 transition-colors duration-500"
    >
      {/* Background radial glow */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="blob bg-[#6BBAA7]/5 dark:bg-[#6BBAA7]/8 light:bg-[#6BBAA7]/5 w-[500px] h-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-[100px]" />
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
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={catIdx}
              variants={cardVariants}
              whileHover={{ 
                y: -5,
                borderColor: "rgba(255, 255, 255, 0.15)",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)"
              }}
              className="glass-panel-dark dark:glass-panel-dark light:glass-panel-light p-6 rounded-2xl border border-slate-800 dark:border-slate-850 light:border-slate-200 transition-all duration-350 flex flex-col justify-between"
            >
              <div>
                <h4 className="text-lg font-display font-bold mb-6 text-accent border-b border-slate-850 dark:border-slate-850 light:border-slate-200 pb-3">
                  {category.category}
                </h4>

                <div className="flex flex-wrap gap-3">
                  {category.items.map((skill, itemIdx) => {
                    const Icon = iconMap[skill.icon] || GiBrain;
                    return (
                      <motion.div
                        key={itemIdx}
                        whileHover={{ y: -3, scale: 1.05 }}
                        className="flex items-center space-x-2.5 px-4 py-2.5 rounded-xl border border-slate-800 dark:border-slate-800/80 light:border-slate-200 bg-slate-900/40 light:bg-slate-200/30 text-sm font-sans font-medium text-slate-200 dark:text-slate-200 light:text-slate-700 hover:border-slate-400 hover:text-white dark:hover:text-white transition-all duration-300 cursor-default"
                      >
                        <span className="text-accent">
                          <Icon className="w-4 h-4" />
                        </span>
                        <span>{skill.name}</span>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;

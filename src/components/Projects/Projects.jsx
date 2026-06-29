import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../../data/portfolioData';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

import hospitalImg from '../../assets/hospital_management.png';
import diabetesImg from '../../assets/diabetes_prediction.png';
import codeImg from '../../assets/code_reviewer.png';
import janMitraImg from '../../assets/jan_mitra.png';

const imageMap = {
  "hospital_management.webp": hospitalImg,
  "diabetes_prediction.webp": diabetesImg,
  "code_reviewer.webp": codeImg,
  "jan_mitra.webp": janMitraImg
};

const Projects = () => {
  const projects = portfolioData.projects;
  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section 
      id="projects" 
      className="py-24 relative overflow-hidden bg-transparent text-slate-100 transition-colors duration-500"
    >
      {/* Background blobs */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="blob bg-[#6C648B]/5 dark:bg-[#6C648B]/8 light:bg-[#6C648B]/5 w-80 h-80 bottom-1/4 left-10 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="text-sm font-semibold tracking-wider uppercase text-accent"
          >
            My Work
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-display font-extrabold mt-2 tracking-tight"
          >
            Featured Projects
          </motion.h3>
          <div className="w-12 h-1 bg-accent mx-auto mt-4 rounded-full" />
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center space-x-4 mb-16">
          {['all', 'java', 'ml'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-xl text-sm font-medium tracking-wide uppercase transition-all duration-300 cursor-pointer ${
                filter === cat
                  ? 'bg-accent text-white shadow-[0_4px_15px_rgba(167,139,250,0.4)]'
                  : 'border border-slate-800 text-slate-400 hover:border-accent hover:text-accent dark:border-slate-850 light:border-slate-300 light:text-slate-600 light:hover:border-accent'
              }`}
            >
              {cat === 'all' ? 'All' : cat === 'java' ? 'Java' : 'Machine Learning'}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={project.id}
                className="glass-panel-dark dark:glass-panel-dark light:glass-panel-light rounded-2xl border border-slate-800 dark:border-slate-800 light:border-slate-200 overflow-hidden flex flex-col group hover:shadow-[0_0_30px_rgba(167,139,250,0.15)] hover:border-accent/40 transition-all duration-300"
              >
                
                {/* Project Image and Zoom Effect */}
                <div className="h-56 md:h-64 overflow-hidden relative border-b border-slate-800 dark:border-slate-800 light:border-slate-200">
                  <img 
                    src={imageMap[project.imageName]} 
                    alt={project.title} 
                    className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/20 transition-colors duration-300" />
                </div>

                {/* Card Content */}
                <div className="p-8 flex flex-col flex-grow">
                  <h4 className="text-2xl font-display font-bold mb-3 tracking-tight group-hover:text-accent transition-colors duration-300">
                    {project.title}
                  </h4>
                  
                  <p className="text-slate-300 dark:text-slate-300 light:text-slate-600 font-sans text-sm leading-relaxed mb-6 flex-grow">
                    {project.description}
                  </p>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, i) => (
                      <span 
                        key={i} 
                        className="px-3 py-1 rounded-md text-xs font-semibold bg-slate-900/60 dark:bg-slate-900/60 light:bg-slate-200 text-accent border border-slate-800 dark:border-slate-800 light:border-slate-300/40"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex space-x-4 pt-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2.5 rounded-xl text-sm font-medium tracking-wide flex items-center justify-center space-x-2 border border-slate-850 hover:border-accent transition-all duration-300 bg-slate-950/40 dark:bg-slate-950/40 light:bg-slate-100 hover:text-accent dark:hover:text-accent text-slate-300 dark:text-slate-300 light:text-slate-600 light:border-slate-300 light:hover:bg-slate-200"
                    >
                      <FaGithub className="w-4 h-4" />
                      <span>Code Repository</span>
                    </a>
                    
                    <a
                      href={project.demoUrl}
                      onClick={(e) => {
                        if (project.demoUrl === '#') e.preventDefault();
                      }}
                      className="px-5 py-2.5 rounded-xl text-sm font-medium tracking-wide flex items-center justify-center bg-accent hover:bg-accent-hover text-white transition-all duration-300 hover:shadow-[0_4px_15px_rgba(167,139,250,0.3)]"
                    >
                      <FaExternalLinkAlt className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;

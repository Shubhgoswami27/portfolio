import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolioData';
import { FaAward, FaExternalLinkAlt } from 'react-icons/fa';

const Certificates = () => {
  const certificates = portfolioData.certificates;

  return (
    <section 
      id="certificates" 
      className="py-24 relative overflow-hidden bg-transparent text-slate-100 transition-colors duration-500"
    >
      {/* Background blobs - Aqua + Lavender */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="blob bg-[#6C648B]/5 dark:bg-[#6C648B]/8 light:bg-[#6C648B]/5 w-80 h-80 top-1/2 left-2/3 blur-[100px]" />
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
            Credentials
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-display font-extrabold mt-2 tracking-tight"
          >
            Certificates & Badges
          </motion.h3>
          <div className="w-12 h-1 bg-accent mx-auto mt-4 rounded-full" />
        </div>

        {/* Certificates Grid */}
        <div className="flex flex-wrap justify-center gap-8">
          {certificates.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ 
                y: -8,
                boxShadow: "0 20px 40px rgba(107, 186, 167, 0.1)",
                borderColor: "rgba(107, 186, 167, 0.25)"
              }}
              className="glass-panel-dark dark:glass-panel-dark light:glass-panel-light p-8 rounded-2xl border border-slate-800 dark:border-slate-850 light:border-slate-200 w-full max-w-md flex flex-col group transition-all duration-300 relative overflow-hidden"
            >
              {/* Corner Badge */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-bl-full flex items-center justify-center text-accent/20 group-hover:bg-accent/10 group-hover:text-accent/30 transition-all duration-300">
                <FaAward className="w-8 h-8 rotate-12 group-hover:scale-110 transition-transform duration-300" />
              </div>

              {/* Card Body */}
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3.5 rounded-xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-slate-950 transition-colors duration-300">
                  <FaAward className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-accent tracking-wider uppercase">
                    {cert.date}
                  </span>
                  <h4 className="text-xl font-display font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 group-hover:text-accent transition-colors duration-300 leading-tight mt-1">
                    {cert.name}
                  </h4>
                </div>
              </div>

              <p className="text-sm font-semibold text-slate-400 dark:text-slate-400 light:text-slate-500 mb-3">
                Issued by: <span className="text-slate-200 dark:text-slate-200 light:text-slate-700">{cert.organization}</span>
              </p>

              <p className="text-slate-350 dark:text-slate-350 light:text-slate-600 font-sans text-sm leading-relaxed mb-4 flex-grow">
                {cert.description}
              </p>

              {/* Credential Code */}
              {cert.code && (
                <div className="mb-6 text-xs font-mono text-slate-400 dark:text-slate-450 light:text-slate-500 bg-slate-900/40 dark:bg-slate-900/60 light:bg-slate-200/50 p-2.5 rounded-xl border border-slate-800/60 dark:border-slate-800/80 light:border-slate-300/40">
                  <span className="text-accent font-semibold">Verification ID: </span>
                  {cert.code}
                </div>
              )}

              {/* View Button */}
              <a
                href={cert.credentialUrl}
                onClick={(e) => {
                  if (cert.credentialUrl === '#') e.preventDefault();
                }}
                className="py-3 rounded-xl text-sm font-medium tracking-wide flex items-center justify-center space-x-2 bg-slate-900/50 hover:bg-slate-800 text-slate-100 border border-slate-800 hover:border-accent transition-all duration-300 cursor-pointer dark:bg-slate-900/50 light:bg-slate-100 light:border-slate-300 light:text-slate-750 light:hover:bg-slate-200"
              >
                <span>View Certificate</span>
                <FaExternalLinkAlt className="w-3 h-3" />
              </a>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Certificates;

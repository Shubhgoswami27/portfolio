import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolioData';
import { FaJava, FaBrain, FaChartBar, FaMicrochip } from 'react-icons/fa';

// Map icon string names to actual React component icons
const iconMap = {
  FaJava: FaJava,
  FaBrain: FaBrain,
  FaChartBar: FaChartBar,
  FaCpu: FaMicrochip
};

const Services = () => {
  const services = portfolioData.services;

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100 }
    }
  };

  return (
    <section 
      id="services" 
      className="py-24 relative overflow-hidden bg-transparent text-slate-100 transition-colors duration-500"
    >
      {/* Background blobs */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="blob bg-[#6BBAA7]/5 dark:bg-[#6BBAA7]/8 light:bg-[#6BBAA7]/5 w-96 h-96 top-1/4 right-[-100px] blur-[120px]" />
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
            What I Offer
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-display font-extrabold mt-2 tracking-tight"
          >
            Professional Services
          </motion.h3>
          <div className="w-12 h-1 bg-accent mx-auto mt-4 rounded-full" />
        </div>

        {/* Services Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] || FaBrain;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ 
                  y: -10, 
                  boxShadow: "0 20px 40px rgba(167, 139, 250, 0.15)",
                  borderColor: "rgba(167, 139, 250, 0.4)"
                }}
                className="glass-panel-dark dark:glass-panel-dark light:glass-panel-light p-8 rounded-2xl border border-slate-800 dark:border-slate-800 light:border-slate-200 transition-all duration-300 flex flex-col items-center text-center cursor-default group"
              >
                {/* Icon Container with glowing effect */}
                <div className="p-4 rounded-2xl bg-accent/10 text-accent mb-6 group-hover:bg-accent group-hover:text-white dark:group-hover:text-slate-950 transition-all duration-300 shadow-[0_0_15px_rgba(167,139,250,0.1)] group-hover:shadow-[0_0_25px_rgba(167,139,250,0.5)]">
                  <Icon className="w-8 h-8" />
                </div>

                <h4 className="text-xl font-display font-bold mb-3 tracking-tight group-hover:text-accent transition-colors duration-300">
                  {service.title}
                </h4>
                
                <p className="text-slate-300 dark:text-slate-300 light:text-slate-600 font-sans text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};

export default Services;

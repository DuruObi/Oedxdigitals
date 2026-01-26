import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-slate-900 pt-16">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1713463374257-16790466d9af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwdGVjaG5vbG9neSUyMGFic3RyYWN0JTIwYmFja2dyb3VuZHxlbnwxfHx8fDE3Njk0MTk3NjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Digital Technology Background"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/60 to-slate-900"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block py-1.5 px-4 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs md:text-sm font-semibold tracking-wider mb-6">
            WELCOME TO OEDX DIGITALS
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white mb-6 leading-[1.15]">
            We Craft Digital <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 block md:inline mt-2 md:mt-0">
              Experiences That Matter
            </span>
          </h1>
          <p className="mt-4 text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 px-2 leading-relaxed">
            Elevating your business with cutting-edge web development, innovative design, and strategic digital solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto px-4 sm:px-0">
            <a
              href="#contact"
              className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all shadow-lg hover:shadow-blue-500/25 flex items-center justify-center gap-2 group"
            >
              Start Your Project
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#services"
              className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-lg font-semibold transition-all backdrop-blur-sm flex items-center justify-center"
            >
              Explore Services
            </a>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll Down Indicator - Hidden on very small screens to save space */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:block"
      >
        <div className="w-[30px] h-[50px] rounded-3xl border-2 border-white/20 flex justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1 h-2 bg-blue-500 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

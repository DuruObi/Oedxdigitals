import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-slate-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Image Section */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-800">
              <img
                src="https://images.unsplash.com/photo-1700561570982-5f845601c505?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHRlYW0lMjBtZWV0aW5nfGVufDF8fHx8MTc2OTM0MTU2Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="OEDX DIGITALS Team"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-blue-900/20 mix-blend-overlay"></div>
            </div>
            
            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-6 bg-blue-600 p-6 rounded-xl shadow-xl hidden md:block">
              <p className="text-4xl font-bold text-white">5+</p>
              <p className="text-blue-100 text-sm font-medium uppercase tracking-wider">Years of Excellence</p>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <h4 className="text-blue-500 font-bold uppercase tracking-widest text-sm mb-2">About OEDX DIGITALS</h4>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              We Partner With You to Build <br/>
              <span className="text-blue-400">Future-Ready Solutions</span>
            </h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              At OEDX DIGITALS, we believe that technology is more than just code—it's about creating connections. 
              We are a team of passionate developers, designers, and strategists dedicated to transforming your vision into a powerful digital reality.
            </p>

            <div className="space-y-4 mb-8">
              {[
                'Client-Centric Approach',
                'Agile Development Methodology',
                'Focus on Innovation & Quality',
                '24/7 Dedicated Support'
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                  <span className="text-slate-300 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-block px-8 py-3 rounded-lg border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white transition-all font-semibold"
            >
              Learn More About Us
            </a>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default About;

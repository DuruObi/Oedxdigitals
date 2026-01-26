import React from 'react';
import { motion } from 'motion/react';
import { Code, Layout, Smartphone, Globe, BarChart, Rocket } from 'lucide-react';

const services = [
  {
    icon: <Layout className="w-8 h-8 text-blue-400" />,
    title: 'Web Design',
    description: 'Stunning, user-centric designs that capture your brand essence and convert visitors into customers.',
  },
  {
    icon: <Code className="w-8 h-8 text-emerald-400" />,
    title: 'Web Development',
    description: 'Robust, scalable, and high-performance websites built with the latest technologies (React, Node.js, etc.).',
  },
  {
    icon: <Smartphone className="w-8 h-8 text-purple-400" />,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications providing seamless experiences on iOS and Android.',
  },
  {
    icon: <Globe className="w-8 h-8 text-cyan-400" />,
    title: 'E-commerce Solutions',
    description: 'Custom online stores that drive sales, featuring secure payment gateways and intuitive inventory management.',
  },
  {
    icon: <BarChart className="w-8 h-8 text-yellow-400" />,
    title: 'SEO & Marketing',
    description: 'Data-driven strategies to improve search rankings, increase traffic, and grow your digital presence.',
  },
  {
    icon: <Rocket className="w-8 h-8 text-red-400" />,
    title: 'Brand Strategy',
    description: 'Comprehensive branding services to define your voice, visual identity, and market positioning.',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Expertise</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            We provide a full range of digital services to help your business thrive in the modern world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700/50 hover:border-blue-500/30 hover:bg-slate-800 transition-all group"
            >
              <div className="bg-slate-900 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-black/20">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-400 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

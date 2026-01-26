import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'FolderFirewall',
    category: 'Security',
    image: 'https://images.unsplash.com/photo-1614064642261-3ccbfafa481b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlciUyMHNlY3VyaXR5JTIwZm9sZGVyJTIwbG9ja3xlbnwxfHx8fDE3Njk0MjI2NDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['Security', 'Encryption', 'System'],
    link: 'https://github.com/DuruObi/FolderFirewall.git',
    description: 'Secure your sensitive folders with robust firewall protection.',
  },
  {
    title: 'Trala',
    category: 'Social Media',
    image: 'https://images.unsplash.com/photo-1658953229625-aad99d7603b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMGFwcCUyMGludGVyZmFjZXxlbnwxfHx8fDE3Njk0MjI2NDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['Music', 'Social', 'Streaming'],
    link: 'https://github.com/DuruObi/Trala.git',
    description: 'Innovative platform for music sharing and social interaction.',
  },
  {
    title: 'Xent',
    category: 'Enterprise',
    image: 'https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGRhc2hib2FyZCUyMGFuYWx5dGljc3xlbnwxfHx8fDE3NjkzNTg5NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['Management', 'Finance', 'Dashboard'],
    link: 'https://github.com/DuruObi/Xent.git',
    description: 'Next-generation enterprise management system.',
  },
  {
    title: 'Ai-Mobile-On-Device-Assistant',
    category: 'AI / Mobile',
    image: 'https://images.unsplash.com/photo-1742767069929-0c663150b164?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwcm9ib3QlMjBwaG9uZXxlbnwxfHx8fDE3Njk0MjI2NDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['Machine Learning', 'Mobile', 'Automation'],
    link: 'https://github.com/DuruObi/Ai-Mobile-On-Device-Assistant.git',
    description: 'Powerful on-device AI assistant for enhanced mobile productivity.',
  },
  {
    title: 'Pyro-appointments',
    category: 'Productivity',
    image: 'https://images.unsplash.com/photo-1703300450387-047da16a89c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWxlbmRhciUyMHNjaGVkdWxlJTIwYXBwb2ludG1lbnR8ZW58MXx8fHwxNzY5NDIyNjQ4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['Scheduling', 'Web App', 'Business'],
    link: 'https://github.com/DuruObi/Pyro-appointments.git',
    description: 'Streamlined appointment scheduling system for modern businesses.',
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Explore our open source contributions and recent development work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              onClick={() => window.open(project.link, '_blank')}
              className="group relative overflow-hidden rounded-2xl bg-slate-800 border border-slate-700 shadow-xl cursor-pointer hover:border-blue-500/50 transition-all"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-slate-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                  <div className="p-4 bg-blue-600 rounded-full text-white hover:bg-blue-500 transition-colors transform group-hover:scale-110 duration-200">
                    <Github size={32} />
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">{project.title}</h3>
                  <span className="text-xs font-semibold px-2 py-1 bg-slate-700 text-slate-300 rounded uppercase tracking-wide">
                    {project.category}
                  </span>
                </div>
                <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                    {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs text-blue-300 bg-blue-500/10 px-2 py-1 rounded border border-blue-500/20">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="https://github.com/DuruObi?tab=repositories" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white border-b border-transparent hover:border-white transition-colors pb-1 inline-flex items-center gap-2">
            View All Repositories <ExternalLink size={16}/>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

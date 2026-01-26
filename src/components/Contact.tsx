import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    alert('Thank you for your message! We will get back to you soon.');
    setFormState({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 bg-slate-950 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Ready to start your next project? Contact us today for a free consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600/20 p-3 rounded-lg text-blue-500">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm font-medium uppercase tracking-wide">Phone</p>
                    <p className="text-white text-lg">+234 806 082 6603</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-emerald-600/20 p-3 rounded-lg text-emerald-500">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm font-medium uppercase tracking-wide">Email</p>
                    <p className="text-white text-lg">info@oedxdigitals.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-purple-600/20 p-3 rounded-lg text-purple-500">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm font-medium uppercase tracking-wide">Address</p>
                    <p className="text-white text-lg">45 Happy Home Industrial Estate, Kirikiri Town, Lagos</p>
                  </div>
                </div>
              </div>
            </div>

            {/* OpenStreetMap Integration */}
            <div className="h-64 bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden shadow-lg relative group">
               <iframe 
                 width="100%" 
                 height="100%" 
                 frameBorder="0" 
                 scrolling="no" 
                 marginHeight={0} 
                 marginWidth={0} 
                 src="https://www.openstreetmap.org/export/embed.html?bbox=3.3038%2C6.4323%2C3.3438%2C6.4583&amp;layer=mapnik&amp;marker=6.4453%2C3.3238" 
                 title="OEDX Office Location"
                 className="filter grayscale-[50%] hover:grayscale-0 transition-all duration-500"
               ></iframe>
               <div className="absolute top-2 right-2 bg-slate-900/80 backdrop-blur text-xs px-2 py-1 rounded text-white border border-slate-700">
                 <a href="https://www.openstreetmap.org/?mlat=6.4453&amp;mlon=3.3238#map=15/6.4453/3.3238" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                   View Larger Map
                 </a>
               </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-900 p-8 rounded-2xl border border-slate-800 shadow-xl"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  value={formState.name}
                  onChange={(e) => setFormState({...formState, name: e.target.value})}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  value={formState.email}
                  onChange={(e) => setFormState({...formState, email: e.target.value})}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">Message</label>
                <textarea
                  id="message"
                  value={formState.message}
                  onChange={(e) => setFormState({...formState, message: e.target.value})}
                  rows={5}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  placeholder="Tell us about your project..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-bold py-4 rounded-lg shadow-lg hover:shadow-blue-500/30 transition-all flex items-center justify-center gap-2"
              >
                Send Message
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

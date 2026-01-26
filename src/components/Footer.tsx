import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <a href="#" className="text-2xl font-bold tracking-tighter text-white">
              OEDX<span className="text-blue-500">DIGITALS</span>
            </a>
            <p className="text-slate-400 text-sm leading-relaxed">
              Empowering businesses with innovative digital solutions. We build the future of the web.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/obinna.emmanuel.duru" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-500 transition-colors"><Facebook size={20} /></a>
              <a href="https://twitter.com/imma_duru" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors"><Twitter size={20} /></a>
              <a href="https://www.instagram.com/imma_duru" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-pink-500 transition-colors"><Instagram size={20} /></a>
              <a href="https://www.linkedin.com/in/oedxdigital" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-600 transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">Home</a></li>
              <li><a href="#about" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">About Us</a></li>
              <li><a href="#services" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">Services</a></li>
              <li><a href="#portfolio" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">Portfolio</a></li>
              <li><a href="#contact" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-6">Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">Web Development</a></li>
              <li><a href="#" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">UI/UX Design</a></li>
              <li><a href="#" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">Mobile Apps</a></li>
              <li><a href="#" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">Digital Marketing</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-bold mb-6">Newsletter</h4>
            <p className="text-slate-400 text-sm mb-4">Subscribe to our newsletter for the latest updates.</p>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Your email address"
                className="bg-slate-900 border border-slate-800 text-white px-4 py-2 rounded focus:outline-none focus:border-blue-500 text-sm"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm font-semibold transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} OEDX DIGITALS. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-slate-500 text-sm">
            <span>Made with</span>
            <Heart size={14} className="text-red-500 fill-red-500" />
            <span>by OEDX Team</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

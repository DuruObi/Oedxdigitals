import React, { useState, useEffect } from 'react';
import { Menu, X, Download, Home, Info, Briefcase, FileText, Mail, Monitor } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);

    // PWA Install Prompt Listener
    const handleBeforeInstallPrompt = (e: any) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };
    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult: any) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the install prompt');
        } else {
          console.log('User dismissed the install prompt');
        }
        setDeferredPrompt(null);
      });
    } else {
      alert("To install, tap 'Share' then 'Add to Home Screen' in your browser options.");
    }
  };

  const navLinks = [
    { name: 'Home', href: '#home', icon: <Home size={20} /> },
    { name: 'About', href: '#about', icon: <Info size={20} /> },
    { name: 'Services', href: '#services', icon: <Monitor size={20} /> },
    { name: 'Portfolio', href: '#portfolio', icon: <Briefcase size={20} /> },
    { name: 'Blog', href: '#blog', icon: <FileText size={20} /> },
    { name: 'Contact', href: '#contact', icon: <Mail size={20} /> },
  ];

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold tracking-tighter text-white z-50 relative">
            OEDX<span className="text-blue-500">DIGITALS</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-300 hover:text-white hover:text-blue-400 transition-colors font-medium text-sm uppercase tracking-wide"
              >
                {link.name}
              </a>
            ))}
            {/* Install Button (Desktop) */}
            <button
              onClick={handleInstallClick}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-semibold transition-all flex items-center gap-2"
            >
              <Download size={16} />
              <span className="hidden lg:inline">Get App</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4 z-50">
             {/* Install Icon for Mobile if prompt available */}
            {deferredPrompt && (
                <button onClick={handleInstallClick} className="text-blue-500 animate-pulse">
                    <Download size={24} />
                </button>
            )}
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none p-2"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Full Screen Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-0 bg-slate-950 z-40 flex flex-col pt-24 px-6 md:hidden"
            >
              <div className="flex flex-col space-y-6">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center space-x-4 text-2xl font-bold text-slate-300 hover:text-blue-500 border-b border-slate-800 pb-4"
                  >
                    <span className="text-blue-500/50">{link.icon}</span>
                    <span>{link.name}</span>
                  </motion.a>
                ))}
                
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  onClick={() => {
                    handleInstallClick();
                    setIsOpen(false);
                  }}
                  className="mt-8 w-full py-4 bg-gradient-to-r from-blue-600 to-blue-500 rounded-xl text-white font-bold text-lg flex items-center justify-center gap-3 shadow-lg shadow-blue-500/20"
                >
                  <Download size={24} />
                  Install App
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;

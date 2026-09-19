import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  Home,
  User,
  Briefcase,
  FolderOpen,
  Award,
  Mail,
  Rocket,
  BookOpen,
} from 'lucide-react';
import { LiaToolsSolid } from "react-icons/lia";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home', icon: Home },

    { name: 'Experience', href: '#experience', icon: Briefcase },
    { name: 'Projects', href: '#projects', icon: FolderOpen },
    { name: 'Skills', href: '#tech-stack', icon: LiaToolsSolid },
    { name: 'Achievements', href: '#achievements', icon: Award },
    { name: 'Dev ', href: '#devpost', icon: Rocket },
    { name: 'Blog', href: '#blog', icon: BookOpen },
    { name: 'About', href: '#about', icon: User },
    { name: 'Contact', href: '#contact', icon: Mail },
  ];

  const handleNavigation = (href: string) => {
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 lg:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Navigation Bar */}
      <motion.nav
        initial={{
          opacity: 0,
          y: -40
        }}
        animate={{
          opacity: 1,
          y: 0
        }}
        transition={{
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1]
        }}
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${scrolled
          ? 'bg-white/10 dark:bg-gray-900/10 backdrop-blur-xl border-b border-white/20 dark:border-gray-700/30'
          : 'bg-white/5 dark:bg-gray-900/5 backdrop-blur-md'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 cursor-pointer"
              onClick={() => handleNavigation('#home')}
            >
              <div className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center bg-white/10 dark:bg-gray-800/20">
                <img
                  src="/logo.webp"
                  alt="Logo"
                  className="w-10 h-10 object-cover rounded-full"
                  style={{ imageRendering: 'auto' }}
                />
              </div>
              <span className="text-gray-900 dark:text-slate-100 font-semibold text-lg">
                Moinaktar Shaikh
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <motion.button
                  key={item.name}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleNavigation(item.href)}
                  className="px-4 py-2 rounded-lg text-gray-800 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-white/10 dark:hover:bg-gray-800/10 transition-all duration-200 flex items-center space-x-2 group"
                >
                  <item.icon className="w-4 h-4 group-hover:rotate-12 transition-transform duration-200" />
                  <span>{item.name}</span>
                </motion.button>
              ))}
            </div>

            {/* Right Side Controls */}
            <div className="flex items-center space-x-2">
              {/* Mobile Hamburger Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden w-10 h-10 rounded-full bg-white/10 dark:bg-gray-800/20 backdrop-blur-sm border border-white/20 dark:border-gray-700/30 flex items-center justify-center text-gray-800 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200"
              >
                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </motion.div>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl border-t border-white/20 dark:border-gray-700/30"
            >
              <div className="px-4 py-6 space-y-2">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => handleNavigation(item.href)}
                    className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-gray-800 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-white/10 dark:hover:bg-gray-800/10 transition-all duration-200 group"
                  >
                    <item.icon className="w-5 h-5 group-hover:rotate-12 transition-transform duration-200" />
                    <span className="font-medium">{item.name}</span>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navigation;
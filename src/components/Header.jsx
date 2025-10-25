import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { smoothScrollTo } from '../utils/helpers';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          {/* Logo */}
          <motion.button
            onClick={() => smoothScrollTo('home')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative font-bold text-lg sm:text-xl text-gray-900 touch-manipulation"
          >
            <span className="inline-flex items-center">
              {/* L - stays fixed */}
              <span className="inline-block">L</span>
              
              {/* ogeshwaran - expands from 0 width (hidden on mobile, expands on desktop hover) */}
              <span className="hidden md:inline-block max-w-0 opacity-0 overflow-hidden group-hover:max-w-[7.5rem] group-hover:opacity-100 transition-all duration-500 ease-out whitespace-nowrap">
                ogeshwaran
              </span>
              
              {/* Space between first and last name */}
              <span className="inline-block">&nbsp;</span>
              
              {/* V - stays fixed */}
              <span className="inline-block">V</span>
            </span>
          </motion.button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.label}
                onClick={() => smoothScrollTo(item.href.substring(1))}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="text-sm lg:text-base text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium"
              >
                {item.label}
              </motion.button>
            ))}
          </nav>

          {/* Mobile menu button */}
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.9 }}
            className="md:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors duration-200 touch-manipulation"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Navigation - Full overlay */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-gray-200 bg-white"
          >
            <nav className="flex flex-col py-4">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => {
                    smoothScrollTo(item.href.substring(1));
                    setIsMenuOpen(false);
                  }}
                  className="text-gray-700 hover:text-gray-900 hover:bg-gray-50 active:bg-gray-100 transition-all duration-200 font-medium py-3 px-4 text-left text-base touch-manipulation"
                >
                  {item.label}
                </motion.button>
              ))}
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;
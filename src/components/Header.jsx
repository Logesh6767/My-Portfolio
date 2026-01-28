import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { smoothScrollTo } from '../utils/helpers';
import { createPortal } from 'react-dom';
import clsx from 'clsx';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [portalRoot, setPortalRoot] = useState(null);

  useEffect(() => {
    // Create a dedicated portal container outside the transformed body
    const portalContainer = document.createElement('div');
    portalContainer.id = 'header-portal';
    portalContainer.style.position = 'fixed';
    portalContainer.style.top = '0';
    portalContainer.style.left = '0';
    portalContainer.style.right = '0';
    portalContainer.style.zIndex = '40';
    document.documentElement.appendChild(portalContainer);
    setPortalRoot(portalContainer);

    return () => {
      if (portalContainer && portalContainer.parentNode) {
        portalContainer.parentNode.removeChild(portalContainer);
      }
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' }
  ];

  if (!portalRoot) return null;

  return createPortal(
    <>
      <header 
        className={clsx(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
          isScrolled && !isMenuOpen
            ? "bg-white/30 backdrop-blur-xl border-b border-white/20 py-4 shadow-sm supports-[backdrop-filter]:bg-white/20" 
            : "bg-transparent py-6"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <a href="#home" className="text-2xl font-bold tracking-tight text-foreground z-50">
            <span className="text-gradient">LV</span>.
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => smoothScrollTo(e, item.href.substring(1))}
                className="text-sm font-medium text-foreground-secondary hover:text-foreground transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a 
              href="#contact"
              onClick={(e) => smoothScrollTo(e, 'contact')}
              className="btn-primary text-sm py-2.5 px-5"
            >
              Contact Me
            </a>
          </div>

          {/* Mobile Menu Button - Only visible when menu is closed */}
          {!isMenuOpen && (
            <button 
              className="md:hidden z-50 text-foreground p-1"
              onClick={() => setIsMenuOpen(true)}
            >
              <Menu size={24} />
            </button>
          )}
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 md:hidden"
            />

            {/* Menu Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="fixed top-4 left-4 right-4 z-50 bg-white rounded-3xl overflow-hidden shadow-2xl md:hidden block"
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-8">
                  {/* Logo inside menu */}
                  <span className="text-2xl font-bold tracking-tight text-foreground">
                    <span className="text-gradient">LV</span>.
                  </span>
                  {/* Close Button */}
                  <button 
                    onClick={() => setIsMenuOpen(false)} 
                    className="p-2 -mr-2 text-foreground-secondary hover:text-foreground transition-colors bg-gray-50 rounded-full"
                  >
                    <X size={20} />
                  </button>
                </div>

                <nav className="flex flex-col space-y-2">
                  {navItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={(e) => {
                        smoothScrollTo(e, item.href.substring(1));
                        setIsMenuOpen(false);
                      }}
                      className="text-lg font-medium text-foreground-secondary hover:text-foreground hover:bg-gray-50 px-4 py-3 rounded-xl transition-all"
                    >
                      {item.label}
                    </a>
                  ))}
                  
                  <div className="h-px bg-gray-100 my-4 mx-2" />
                  
                  <a 
                    href="#contact"
                    onClick={(e) => {
                      smoothScrollTo(e, 'contact');
                      setIsMenuOpen(false);
                    }}
                    className="btn-primary w-full text-center justify-center py-3.5 text-base shadow-lg shadow-blue-200/50"
                  >
                    Contact Me
                  </a>
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>,
    portalRoot
  );
};

export default Header;
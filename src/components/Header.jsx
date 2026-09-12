import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { smoothScrollTo } from '../utils/helpers';
import { createPortal } from 'react-dom';
import clsx from 'clsx';

const NAV_ITEMS = [
  { label: 'Home',       href: '#home'       },
  { label: 'About',      href: '#about'      },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects',   href: '#projects'   },
  { label: 'Skills',     href: '#skills'     },
];

// Simple slide-down, opacity only — NO scale (scale repaints entire card every frame)
const menuVariants = {
  hidden: { opacity: 0, y: -12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.18, ease: 'easeOut' } },
  exit:    { opacity: 0, y: -8,  transition: { duration: 0.12, ease: 'easeIn'  } },
};

const backdropVariants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.15 } },
  exit:    { opacity: 0, transition: { duration: 0.1  } },
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [portalRoot, setPortalRoot] = useState(null);

  useEffect(() => {
    const portalContainer = document.createElement('div');
    portalContainer.id = 'header-portal';
    portalContainer.style.cssText = 'position:fixed;top:0;left:0;right:0;z-index:40;';
    document.documentElement.appendChild(portalContainer);
    setPortalRoot(portalContainer);
    return () => portalContainer.parentNode?.removeChild(portalContainer);
  }, []);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  const close = () => setIsMenuOpen(false);

  if (!portalRoot) return null;

  return createPortal(
    <>
      {/* ── Header bar ── */}
      <header
        className={clsx(
          'fixed top-0 left-0 right-0 z-40 transition-all duration-200',
          isScrolled && !isMenuOpen
            // Solid white instead of backdrop-blur — blur is software-rendered without GPU
            ? 'bg-white/95 border-b border-gray-100 py-4 shadow-sm'
            : 'bg-transparent py-6',
        )}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <a href="#home" className="text-2xl font-bold tracking-tight text-foreground z-50">
            <span className="text-gradient">LV</span>.
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => smoothScrollTo(e, item.href.slice(1))}
                className="text-sm font-medium text-foreground-secondary hover:text-foreground transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <a
              href="#contact"
              onClick={(e) => smoothScrollTo(e, 'contact')}
              className="btn-primary text-sm py-2.5 px-5"
            >
              Contact Me
            </a>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden z-50 text-foreground p-1"
            onClick={() => setIsMenuOpen((o) => !o)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* ── Mobile menu ── */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop — NO backdrop-blur, just semi-transparent black */}
            <motion.div
              key="backdrop"
              variants={backdropVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={close}
              className="fixed inset-0 bg-black/50 z-50 md:hidden"
            />

            {/* Menu card — opacity + translateY only, NO scale */}
            <motion.div
              key="menu"
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed top-4 left-4 right-4 z-50 bg-white rounded-3xl overflow-hidden shadow-2xl md:hidden"
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-8">
                  <span className="text-2xl font-bold tracking-tight text-foreground">
                    <span className="text-gradient">LV</span>.
                  </span>
                  <button
                    onClick={close}
                    className="p-2 -mr-2 text-foreground-secondary hover:text-foreground bg-gray-50 rounded-full"
                  >
                    <X size={20} />
                  </button>
                </div>

                <nav className="flex flex-col space-y-1">
                  {NAV_ITEMS.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={(e) => { smoothScrollTo(e, item.href.slice(1)); close(); }}
                      className="text-lg font-medium text-foreground-secondary hover:text-foreground hover:bg-gray-50 px-4 py-3 rounded-xl transition-colors"
                    >
                      {item.label}
                    </a>
                  ))}

                  <div className="h-px bg-gray-100 my-3 mx-2" />

                  <a
                    href="#contact"
                    onClick={(e) => { smoothScrollTo(e, 'contact'); close(); }}
                    className="btn-primary w-full text-center justify-center py-3.5 text-base"
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
    portalRoot,
  );
};

export default Header;
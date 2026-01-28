import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp } from 'lucide-react';
import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [portalRoot, setPortalRoot] = useState(null);

  useEffect(() => {
    // Create a dedicated portal container outside the transformed body
    const portalContainer = document.createElement('div');
    portalContainer.id = 'scroll-to-top-portal';
    portalContainer.style.position = 'fixed';
    portalContainer.style.zIndex = '9999';
    portalContainer.style.pointerEvents = 'none';
    document.documentElement.appendChild(portalContainer);
    setPortalRoot(portalContainer);

    return () => {
      if (portalContainer && portalContainer.parentNode) {
        portalContainer.parentNode.removeChild(portalContainer);
      }
    };
  }, []);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!portalRoot) return null;

  return createPortal(
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleScrollToTop}
          style={{ pointerEvents: 'auto' }}
          className="fixed bottom-8 right-8 bg-white/10 backdrop-blur-md border border-white/20 text-primary p-3 rounded-full shadow-lg hover:bg-white/20 hover:shadow-[0_0_20px_rgba(112,0,255,0.4)] transition-all duration-300 group"
        >
          <ChevronUp size={24} className="group-hover:-translate-y-1 transition-transform duration-300" />
        </motion.button>
      )}
    </AnimatePresence>,
    portalRoot
  );
};

export default ScrollToTop;

import Header from './Header';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import { useEffect, useRef } from 'react';

const Layout = ({ children }) => {
  const ease = 0.05;
  const scrollRef = useRef({ current: 0, target: 0, raf: null });

  useEffect(() => {
    const scroll = scrollRef.current;
    scroll.target = window.scrollY;
    scroll.current = window.scrollY;

    const handleScroll = () => {
      scroll.target = window.scrollY;
    };

    const smoothScroll = () => {
      scroll.current += (scroll.target - scroll.current) * ease;
      
      if (Math.abs(scroll.target - scroll.current) < 0.1) {
        scroll.current = scroll.target;
      }

      document.body.style.transform = `translateY(-${scroll.current}px)`;

      scroll.raf = requestAnimationFrame(smoothScroll);
    };

    // Enable smooth scrolling
    document.body.style.position = 'fixed';
    document.body.style.top = '0';
    document.body.style.left = '0';
    document.body.style.right = '0';
    document.body.style.willChange = 'transform';
    document.documentElement.style.height = `${document.body.scrollHeight}px`;

    window.addEventListener('scroll', handleScroll, { passive: true });
    smoothScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scroll.raf) cancelAnimationFrame(scroll.raf);
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.transform = '';
      document.body.style.willChange = '';
      document.documentElement.style.height = '';
    };
  }, []);

  return (
    <div className="min-h-screen text-foreground bg-background overflow-x-hidden selection:bg-accent-purple/20 selection:text-foreground">
      <Header />
      <main className="overflow-x-hidden">
        {children}
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Layout;
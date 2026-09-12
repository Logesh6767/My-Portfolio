import Header from './Header';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

// No JS smooth-scroll loop here anymore.
// CSS `scroll-behavior: smooth` (set in index.css) runs on the browser's
// scroll compositor thread — it works correctly even without HW acceleration
// and never blocks JS interactions.
const Layout = ({ children }) => {
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
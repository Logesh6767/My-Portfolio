import Header from './Header';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />
      <main className="pt-16 overflow-x-hidden">
        {children}
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Layout;
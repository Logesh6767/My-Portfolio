import Layout from './components/Layout';
import Hero from './sections/Hero';
import About from './sections/About';
import Experience from './sections/Experience';
import Skills from './sections/Skills';
import Contact from './sections/Contact';

function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Contact />
    </Layout>
  );
}

export default App

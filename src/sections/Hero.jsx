import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail, Download } from 'lucide-react';
import { smoothScrollTo } from '../utils/helpers';
import { useRef, useState, useEffect } from 'react';

const Hero = () => {
  const ref = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };

  // Parallax effects
  const y1 = useSpring(useTransform(scrollYProgress, [0, 1], [0, -150]), springConfig); // Main card
  const y2 = useSpring(useTransform(scrollYProgress, [0, 1], [0, -300]), springConfig); // Top right
  const y3 = useSpring(useTransform(scrollYProgress, [0, 1], [0, -200]), springConfig); // Bottom left

  return (
    <section ref={ref} id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      
      {/* Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-300/30 rounded-full blur-[100px] mix-blend-multiply opacity-70 animate-float" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-300/30 rounded-full blur-[100px] mix-blend-multiply opacity-70 animate-float-delayed" />
        <div className="absolute top-[40%] right-[30%] w-[300px] h-[300px] bg-pink-300/30 rounded-full blur-[100px] mix-blend-multiply opacity-70 animate-pulse-slow" />
      </div>

      <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Column: Text */}
        <div className="text-left flex flex-col items-start">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <span className="pill-badge">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
              Available for Projects
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-6 leading-tight"
          >
            <span className="text-gradient">Full Stack Developer</span> <b className="block"></b>
            Specializing in React & Next.js
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-foreground-secondary max-w-lg mb-10 leading-relaxed"
          >
            2+ years building production-ready applications. Specialized in React, Next.js, and enterprise CRM systems.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <a href="#projects" onClick={(e) => smoothScrollTo(e, 'projects')} className="btn-primary flex items-center gap-2 group">
              View Projects
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="/Logeshwaran_V_Resume.pdf" download className="btn-ghost flex items-center gap-2">
              <Download size={18} />
              Download CV
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 flex items-center gap-6"
          >
            <a href="https://github.com/Logesh6767" target="_blank" rel="noopener noreferrer" className="text-foreground-secondary hover:text-foreground transition-colors transform hover:scale-110">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/logeshwaran-v-607806230/" target="_blank" rel="noopener noreferrer" className="text-foreground-secondary hover:text-foreground transition-colors transform hover:scale-110">
              <Linkedin size={24} />
            </a>
            <a 
              href={isMobile 
                ? "mailto:logeshwaranvelmurugan@gmail.com"
                : "https://mail.google.com/mail/?view=cm&fs=1&to=logeshwaranvelmurugan@gmail.com"
              } 
              className="text-foreground-secondary hover:text-foreground transition-colors transform hover:scale-110"
            >
              <Mail size={24} />
            </a>
          </motion.div>
        </div>

        {/* Right Column: Visuals (Abstract Composition) */}
        <div className="relative h-[400px] lg:h-[600px] w-full perspective-1000 mt-12 lg:mt-0">
          {/* Main Floating Card - Visible on Mobile too but scaled */}
          <motion.div 
            style={{ y: isMobile ? 0 : y1 }}
            className={`absolute top-[10%] left-[5%] lg:left-[10%] w-[90%] lg:w-[80%] h-[70%] z-20 ${isMobile ? 'animate-none' : ''}`}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
              className="w-full h-full bg-white/40 backdrop-blur-xl border border-white/60 rounded-3xl shadow-2xl animate-float flex items-center justify-center overflow-hidden"
            >
               <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-white/40"></div>
               {/* Inner decorative elements mimicking an interface */}
               <div className="w-[90%] h-[90%] bg-white/50 rounded-2xl border border-white/50 p-6 flex flex-col gap-4">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="flex gap-4">
                     <div className="w-1/3 h-24 lg:h-32 bg-blue-100/50 rounded-xl animate-pulse"></div>
                     <div className="w-2/3 h-24 lg:h-32 bg-purple-100/50 rounded-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                  </div>
                  <div className="w-full h-20 lg:h-24 bg-pink-100/50 rounded-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
                  <div className="flex-1 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl"></div>
               </div>
            </motion.div>
          </motion.div>

          {/* Floating Elements around */}
          <motion.div 
            style={{ y: isMobile ? 0 : y2 }}
            className="absolute top-[-5%] lg:top-[5%] right-[0%] lg:right-[5%] z-30 scale-90 lg:scale-100"
          >
             <motion.div 
                initial={{ opacity: 0, scale: 0, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 1.2, delay: 0.6, type: "spring", bounce: 0.4 }}
                className="p-4 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl animate-float-delayed ring-1 ring-gray-100"
             >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 shadow-inner">
                    <span className="font-bold">✓</span>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-800">Project Completed</div>
                    <div className="text-xs text-gray-500">Just now</div>
                  </div>
                </div>
             </motion.div>
          </motion.div>

          <motion.div 
             style={{ y: isMobile ? 0 : y3 }}
             className="absolute bottom-[20%] lg:bottom-[25%] left-[-2%] lg:left-[-5%] z-30 scale-90 lg:scale-100"
          >
             <motion.div 
                initial={{ opacity: 0, scale: 0, x: -20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 1.2, delay: 0.8, type: "spring", bounce: 0.4 }}
                className="p-4 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl animate-float ring-1 ring-gray-100" 
                style={{ animationDelay: '1.5s' }}
             >
                <div className="flex items-center gap-3">
                    <div className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded shadow-sm">React</div>
                    <div className="bg-cyan-500 text-white text-xs font-bold px-2 py-1 rounded shadow-sm">Tailwind</div>
                    <div className="bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded shadow-sm">Vite</div>
                </div>
             </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
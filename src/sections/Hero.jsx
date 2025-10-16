import { motion } from 'framer-motion';
import { ChevronDown, Download, Mail, Phone } from 'lucide-react';
import AnimatedWaves from '../components/AnimatedWaves';

const Hero = () => {
  const scrollToNext = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      {/* Animated Waves Background */}
      <AnimatedWaves />
      
      {/* Subtle overlay for text readability */}
      <div className="absolute inset-0 bg-white/60 backdrop-blur-[1px]"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="text-center">
          {/* Animated greeting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 sm:mb-6"
          >
            <span className="text-gray-600 text-base sm:text-lg font-medium">Hello, I'm</span>
          </motion.div>

          {/* Name with staggered animation */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4 sm:mb-6 px-4"
          >
            Logeshwaran V
          </motion.h1>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-600 mb-6 sm:mb-8 font-light px-4"
          >
            Full Stack Developer
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-sm sm:text-base lg:text-lg text-gray-500 mb-8 sm:mb-12 max-w-2xl mx-auto px-4 leading-relaxed"
          >
            1.5+ Years Experience | JavaScript | Next.js | Scalable Systems | API Design
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mb-12 sm:mb-16 px-4"
          >
            <motion.a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=logeshwaranvelmurugan@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto bg-gray-900 text-white px-6 sm:px-8 py-3 rounded-lg font-medium flex items-center justify-center space-x-2 hover:bg-gray-800 transition-colors duration-200 touch-manipulation"
            >
              <Mail size={20} />
              <span>Hire Me</span>
            </motion.a>
            
            <motion.a
              href="/assets/Logeshwaran V Full Stack Developer.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto border-2 border-gray-300 text-gray-700 px-6 sm:px-8 py-3 rounded-lg font-medium flex items-center justify-center space-x-2 hover:border-gray-900 hover:text-gray-900 transition-colors duration-200 touch-manipulation"
            >
              <Download size={20} />
              <span>Download Resume</span>
            </motion.a>
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 text-gray-600 px-4"
          >
            <motion.a
              href="tel:7010198963"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 hover:text-gray-900 transition-colors duration-200 touch-manipulation text-sm sm:text-base"
            >
              <Phone size={18} />
              <span>+91 7010198963</span>
            </motion.a>
            
            <motion.a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=logeshwaranvelmurugan@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 hover:text-gray-900 transition-colors duration-200 touch-manipulation text-sm sm:text-base break-all sm:break-normal"
            >
              <Mail size={18} />
              <span className="hidden sm:inline">logeshwaranvelmurugan@gmail.com</span>
              <span className="sm:hidden">Email Me</span>
            </motion.a>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.button
              onClick={scrollToNext}
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-gray-400 hover:text-gray-600 transition-colors duration-200 touch-manipulation"
              aria-label="Scroll to next section"
            >
              <ChevronDown size={28} className="sm:w-6 sm:h-6" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
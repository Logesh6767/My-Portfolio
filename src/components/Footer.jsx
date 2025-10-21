import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
            <div className="space-y-2">
              <motion.a
                href="tel:7010198963"
                whileHover={{ x: 5 }}
                className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200"
              >
                <Phone size={16} />
                <span>+91 7010198963</span>
              </motion.a>
              {/* Mobile: mailto link */}
              <motion.a
                href="mailto:logeshwaranvelmurugan@gmail.com"
                whileHover={{ x: 5 }}
                className="flex sm:hidden items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200"
              >
                <Mail size={16} />
                <span>logeshwaranvelmurugan@gmail.com</span>
              </motion.a>
              {/* Desktop: Gmail web link */}
              <motion.a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=logeshwaranvelmurugan@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 5 }}
                className="hidden sm:flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200"
              >
                <Mail size={16} />
                <span>logeshwaranvelmurugan@gmail.com</span>
              </motion.a>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <motion.a
                href="https://www.linkedin.com/in/logeshwaran-v-607806230"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                <Linkedin size={24} />
              </motion.a>
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                <Github size={24} />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <motion.a
                href="#about"
                whileHover={{ x: 5 }}
                className="block text-gray-300 hover:text-white transition-colors duration-200"
              >
                About
              </motion.a>
              <motion.a
                href="#experience"
                whileHover={{ x: 5 }}
                className="block text-gray-300 hover:text-white transition-colors duration-200"
              >
                Experience
              </motion.a>
              <motion.a
                href="#projects"
                whileHover={{ x: 5 }}
                className="block text-gray-300 hover:text-white transition-colors duration-200"
              >
                Projects
              </motion.a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          {/* Mobile Layout - Stacked */}
          <div className="flex flex-col items-center gap-3 lg:hidden">
            <p className="text-gray-300 text-sm italic">
              Cooking ideas into seamless digital experiences.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-2 text-xs text-gray-400">
              <span>Built with</span>
              <span className="text-gray-300 font-semibold">React.js</span>
              <span>•</span>
              <span className="text-gray-300 font-semibold">Vite</span>
              <span>•</span>
              <span className="text-gray-300 font-semibold">Tailwind CSS</span>
              <span>•</span>
              <span className="text-gray-300 font-semibold">Framer Motion</span>
            </div>
            <p className="text-gray-400 text-xs">
              © {currentYear} Logeshwaran V. All rights reserved.
            </p>
          </div>

          {/* Desktop Layout - Single Row */}
          <div className="hidden lg:flex lg:justify-between lg:items-center lg:gap-8 text-sm">
            <p className="text-gray-400 whitespace-nowrap">
              © {currentYear} Logeshwaran V. All rights reserved.
            </p>
            <p className="text-gray-300 italic flex-shrink-0">
              Cooking ideas into seamless digital experiences.
            </p>
            <div className="flex items-center gap-2 text-gray-400 whitespace-nowrap">
              <span>Built with</span>
              <span className="text-gray-300 font-semibold">React.js</span>
              <span>•</span>
              <span className="text-gray-300 font-semibold">Vite</span>
              <span>•</span>
              <span className="text-gray-300 font-semibold">Tailwind CSS</span>
              <span>•</span>
              <span className="text-gray-300 font-semibold">Framer Motion</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
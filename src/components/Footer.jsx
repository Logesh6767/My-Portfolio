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
              <motion.a
                href="mailto:logeshwaranvelmurugan@gmail.com"
                whileHover={{ x: 5 }}
                className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200"
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

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} Logeshwaran V. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
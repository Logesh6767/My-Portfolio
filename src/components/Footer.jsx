import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, ExternalLink } from 'lucide-react';
import { smoothScrollTo } from '../utils/helpers';
import { useState, useEffect } from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const links = [
      { name: "Home", href: "home" },
      { name: "About", href: "about" },
      { name: "Experience", href: "experience" },
      { name: "Projects", href: "projects" },
      { name: "Skills", href: "skills" },
      { name: "Contact", href: "contact" }
  ];

  return (
    <footer className="bg-background border-t border-gray-200 py-16 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-2">
            <a href="#home" className="text-2xl font-bold tracking-tight text-foreground mb-4 inline-block">
              <span className="text-gradient">LV</span>.
            </a>
            <p className="text-foreground-secondary max-w-sm mb-6">
              Building digital experiences that matter. Focused on performance, scalability, and user-centric design.
            </p>
            <div className="flex gap-4">
               <a href="https://github.com/Logesh6767" target="_blank" rel="noopener noreferrer" className="p-2 bg-white rounded-full text-foreground-secondary hover:text-foreground hover:shadow-md transition-all border border-gray-100">
                  <Github size={20} />
               </a>
               <a href="https://www.linkedin.com/in/logeshwaran-v-607806230/" target="_blank" rel="noopener noreferrer" className="p-2 bg-white rounded-full text-foreground-secondary hover:text-foreground hover:shadow-md transition-all border border-gray-100">
                  <Linkedin size={20} />
               </a>
               <a 
                 href={isMobile 
                   ? "mailto:logeshwaranvelmurugan@gmail.com"
                   : "https://mail.google.com/mail/?view=cm&fs=1&to=logeshwaranvelmurugan@gmail.com"
                 } 
                 className="p-2 bg-white rounded-full text-foreground-secondary hover:text-foreground hover:shadow-md transition-all border border-gray-100"
               >
                  <Mail size={20} />
               </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Navigation</h3>
            <ul className="space-y-3">
               {links.map((link) => (
                  <li key={link.name}>
                     <a 
                        href={`#${link.href}`}
                        onClick={(e) => smoothScrollTo(e, link.href)}
                        className="text-foreground-secondary hover:text-blue-600 transition-colors flex items-center gap-2"
                     >
                       {link.name}
                     </a>
                  </li>
               ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Contact</h3>
            <ul className="space-y-3">
               <li>
                  <a 
                    href={isMobile 
                      ? "mailto:logeshwaranvelmurugan@gmail.com"
                      : "https://mail.google.com/mail/?view=cm&fs=1&to=logeshwaranvelmurugan@gmail.com"
                    } 
                    className="text-foreground-secondary hover:text-blue-600 transition-colors flex items-center gap-2"
                  >
                     <Mail size={16} /> Email Me
                  </a>
               </li>
               <li>
                  <a href="tel:+917010198963" className="text-foreground-secondary hover:text-blue-600 transition-colors flex items-center gap-2">
                     <Phone size={16} /> Call Me
                  </a>
               </li>
               <li>
                   <span className="text-foreground-secondary flex items-center gap-2">
                     <ExternalLink size={16} /> Chennai, India
                   </span>
               </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-6">
             {/* Copyright - Bottom on mobile, Left on desktop */}
             <p className="text-sm text-foreground-secondary order-3 md:order-1 text-center md:text-left">
               &copy; {currentYear} Logeshwaran Velmurugan. All rights reserved.
             </p>
             
             {/* Quote - Top on mobile, Center on desktop */}
             <p className="text-sm text-foreground-secondary italic order-1 md:order-2 text-center">
               Cooking ideas into seamless digital experiences.
             </p>

             {/* Tech Stack - Middle on mobile, Right on desktop */}
             <p className="text-sm text-foreground-secondary order-2 md:order-3 text-center md:text-right">
               Designed & Built with ❤️
             </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

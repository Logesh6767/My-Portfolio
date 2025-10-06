import { motion } from 'framer-motion';
import { ExternalLink, Github, Smartphone, Globe, Database, Bot } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Enterprise CRM Platform",
      description: "Full-stack client management system with real-time data processing and workflow optimization. Built with modern technologies for scalability and performance.",
      technologies: ["Next.js", "PHP", "MySQL", "Tailwind CSS", "Vercel"],
      features: [
        "Real-time data synchronization",
        "Advanced workflow automation",
        "Custom reporting dashboard",
        "Multi-user role management"
      ],
      icon: <Database size={24} />,
      category: "Web Application"
    },
    {
      title: "AI-Integrated Nutrition App",
      description: "Intelligent dietary analysis platform with Gemini AI integration providing personalized recommendations and nutritional insights.",
      technologies: ["React.js", "Next.js", "Gemini AI API", "Node.js", "MongoDB"],
      features: [
        "AI-powered meal analysis",
        "Personalized nutrition recommendations",
        "Progress tracking dashboard",
        "Meal planning system"
      ],
      icon: <Bot size={24} />,
      category: "AI Application"
    },
    {
      title: "Cross-Platform Mobile Apps",
      description: "Native mobile applications developed using React.js and Capacitor with serverless backend architecture for optimal performance.",
      technologies: ["React.js", "Capacitor", "Next.js", "PHP", "Firebase"],
      features: [
        "Cross-platform compatibility",
        "Offline functionality",
        "Push notifications",
        "Native device integration"
      ],
      icon: <Smartphone size={24} />,
      category: "Mobile Application"
    },
    {
      title: "Testing Framework Implementation",
      description: "Comprehensive automated testing suite using Cypress that reduced deployment risks and improved development confidence.",
      technologies: ["Cypress", "JavaScript", "CI/CD", "GitHub Actions"],
      features: [
        "End-to-end testing coverage",
        "Automated test reporting",
        "Integration with CI/CD pipeline",
        "Custom testing utilities"
      ],
      icon: <Globe size={24} />,
      category: "DevOps Tool"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Key Projects & Achievements
          </h2>
          <div className="w-20 h-1 bg-gray-900 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Innovative solutions that deliver real business value and exceptional user experiences
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              className="bg-gray-50 rounded-xl p-8 border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-gray-900 text-white rounded-lg">
                    {project.icon}
                  </div>
                  <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                    {project.category}
                  </span>
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {project.title}
              </h3>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">
                  Key Features
                </h4>
                <ul className="space-y-2">
                  {project.features.map((feature, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-center space-x-2 text-gray-600"
                    >
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                      <span className="text-sm">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">
                  Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <motion.span
                      key={idx}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.05 }}
                      className="px-3 py-1 bg-white text-gray-700 rounded-full text-xs font-medium border border-gray-200"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>

              <div className="flex space-x-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors duration-200"
                >
                  <Github size={16} />
                  <span className="text-sm font-medium">View Code</span>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors duration-200"
                >
                  <ExternalLink size={16} />
                  <span className="text-sm font-medium">Live Demo</span>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gray-900 text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200"
          >
            View All Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
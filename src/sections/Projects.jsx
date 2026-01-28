import { motion } from 'framer-motion';
import { ExternalLink, Github, Smartphone, Globe, Database, Bot, FolderOpen } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Enterprise CRM Platform",
      description: "Client relationship management platform with real-time data processing, automated workflows, and analytics. Built with Next.js and PHP for performance and scalability.",
      technologies: ["Next.js", "PHP", "MySQL", "Tailwind CSS", "Vercel"],
      features: [
        "Real-time data synchronization",
        "Advanced workflow automation",
        "Custom reporting dashboard",
        "Multi-user role management"
      ],
      icon: <Database size={24} />,
      category: "Web Application",
      color: "bg-blue-500"
    },
    {
      title: "AI-Integrated Nutrition App",
      description: "Dietary analysis platform using Google Gemini API for intelligent meal recommendations and nutritional insights. Full-stack React/Next.js with PostgreSQL.",
      technologies: ["React.js", "Next.js", "Gemini AI API", "Node.js", "PostgreSQL"],
      features: [
        "AI-powered meal analysis",
        "Personalized nutrition recommendations",
        "Progress tracking dashboard",
        "Meal planning system"
      ],
      icon: <Bot size={24} />,
      category: "AI Application",
      color: "bg-purple-500"
    },
    {
      title: "Cross-Platform Mobile Apps",
      description: "Cross-platform mobile apps built with React.js and Capacitor. Includes native device integration, offline-first architecture, and Firebase backend.",
      technologies: ["React.js", "Capacitor", "Next.js", "PHP", "Firebase"],
      features: [
        "Cross-platform compatibility",
        "Offline functionality",
        "Push notifications",
        "Native device integration"
      ],
      icon: <Smartphone size={24} />,
      category: "Mobile Application",
      color: "bg-green-500"
    },
    {
      title: "Testing Framework Implementation",
      description: "End-to-end testing framework using Cypress integrated with CI/CD pipelines. Reduced deployment risks by 50% and improved code quality.",
      technologies: ["Cypress", "JavaScript", "CI/CD", "GitHub Actions"],
      features: [
        "End-to-end testing coverage",
        "Automated test reporting",
        "Integration with CI/CD pipeline",
        "Custom testing utilities"
      ],
      icon: <Globe size={24} />,
      category: "DevOps Tool",
      color: "bg-orange-500"
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
    <section id="projects" className="py-24 section-gradient relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="pill-badge mb-4">
            <FolderOpen size={14} className="mr-2" />
            Portfolio
          </span>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Featured Development Projects
          </h2>
          <p className="text-lg text-foreground-secondary max-w-2xl mx-auto">
            Web applications, CRM systems, and AI-powered solutions built with modern JavaScript frameworks.
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
              whileHover={{ y: -5, transition: { type: "spring", stiffness: 300, damping: 20 } }}
              className="group relative bg-white rounded-3xl p-8 border border-gray-100 shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:shadow-gray-200/80 transition-shadow duration-300 overflow-hidden"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 rounded-2xl text-white shadow-lg ${project.color}`}>
                  {project.icon}
                </div>
                <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-foreground-secondary mb-1">{project.category}</div>
                    <h3 className="text-2xl font-bold text-foreground">{project.title}</h3>
                </div>
              </div>

              <p className="text-foreground-secondary mb-8 leading-relaxed">
                {project.description}
              </p>

              <div className="mb-8">
                <h4 className="text-sm font-bold text-foreground mb-3 flex items-center gap-2">
                    <FolderOpen size={16} className="text-blue-500" /> Key Features
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {project.features.map((feature, i) => (
                        <div key={i} className="flex items-center text-sm text-foreground-secondary">
                            <span className="w-1.5 h-1.5 rounded-full bg-gray-300 mr-2" />
                            {feature}
                        </div>
                    ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-gray-100">
                {project.technologies.map((tech, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1 bg-gray-50 text-foreground-secondary text-xs font-medium rounded-full border border-gray-100"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

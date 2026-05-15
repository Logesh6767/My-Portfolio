import { motion } from 'framer-motion';
import { ExternalLink, Github, Smartphone, Globe, Database, Bot, FolderOpen } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "HealthIn — Fitness & Nutrition Tracker",
      description: "Cross-platform mobile app for workout logging, weight tracking, macro nutrition analysis, and AI-assisted meal image capture. Architecting cloud migration from SQLite to Supabase for real-time sync and multi-device support.",
      technologies: ["React Native", "Expo", "TypeScript", "Zustand", "Supabase", "PostgreSQL", "SQLite"],
      features: [
        "Workout logging & weight tracking",
        "Macro nutrition analysis",
        "AI meal image capture",
        "Offline-first architecture",
        "Cloud migration to Supabase"
      ],
      icon: <Smartphone size={24} />,
      category: "Mobile Application",
      color: "bg-green-500",
      status: "In Progress"
    },
    {
      title: "JucyGo — E-Commerce Platform",
      description: "Production e-commerce platform with end-to-end features including user authentication, Razorpay-powered checkout, admin panel, and full order history. Built with Next.js, TypeScript, and MySQL. Also includes a mobile-responsive design with PWA capabilities.",
      technologies: ["Next.js 16", "TypeScript", "Tailwind CSS", "Redux Toolkit", "PHP", "MySQL", "Razorpay", "PWA"],
      features: [
        "User authentication & session management",
        "Shopping cart & Razorpay checkout",
        "Admin panel for management",
        "Full order history tracking",
        "Product data migration",
        "Mobile-responsive design"
      ],
      icon: <Globe size={24} />,
      category: "E-Commerce",
      color: "bg-blue-500",
      link: "Website",
      url: "https://www.jucygo.in/"
    },
    {
      title: "AI-Powered Nutrition Analysis App",
      description: "Full-stack PWA with Gemini AI for image-based food recognition and macro extraction. Features dual authentication (Google OAuth + OTP) and packaged as Android APK via Capacitor with push notifications.",
      technologies: ["React 18", "Next.js 15", "Gemini AI", "Ionic", "Capacitor", "Supabase", "Firebase", "PWA"],
      features: [
        "Gemini AI for food recognition",
        "Macro extraction & analysis",
        "Google OAuth + OTP authentication",
        "Android APK packaging",
        "Firebase push notifications",
        "Recursive CTE team-coach hierarchy"
      ],
      icon: <Bot size={24} />,
      category: "AI Application",
      color: "bg-purple-500"
    },
    {
      title: "Customer-Facing CRM Platform",
      description: "Multi-tenant CRM PWA with subdomain-based company isolation, Redux Toolkit state management (10+ slices), and role-based access control. Full-stack delivery with PDF/Excel exports.",
      technologies: ["Next.js 14", "React 18", "Redux Toolkit", "PHP", "MySQL", "PWA", "Firebase FCM"],
      features: [
        "Multi-tenant architecture",
        "Subdomain-based isolation",
        "Role-based access control",
        "PDF/Excel export",
        "Firebase push notifications",
        "Redux Persist state management"
      ],
      icon: <Database size={24} />,
      category: "Web Application",
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
          {projects.map((project, index) => {
            const cardContent = (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -5, transition: { type: "spring", stiffness: 300, damping: 20 } }}
                className={`group relative bg-white rounded-3xl p-8 border border-gray-100 shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:shadow-gray-200/80 transition-shadow duration-300 overflow-hidden ${
                  project.url ? 'cursor-pointer' : ''
                }`}
              >
                {/* External Link Icon - Top Right */}
                {project.url && (
                  <div className="absolute top-6 right-6 p-2 rounded-lg bg-gray-50 text-foreground-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                    <ExternalLink size={20} className="text-blue-600" />
                  </div>
                )}

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
            );

            // Wrap with link if URL exists, otherwise just render the card
            if (project.url) {
              return (
                <a
                  key={index}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="no-underline"
                >
                  {cardContent}
                </a>
              );
            }

            return cardContent;
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

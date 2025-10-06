import { motion } from 'framer-motion';
import { Code, Database, Globe, Smartphone } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code size={24} />,
      title: "Full Stack Development",
      description: "Building scalable web applications with modern technologies"
    },
    {
      icon: <Database size={24} />,
      title: "API Design",
      description: "Creating robust RESTful APIs and backend systems"
    },
    {
      icon: <Globe size={24} />,
      title: "Modern Frameworks",
      description: "Expertise in React.js, Next.js, and PHP development"
    },
    {
      icon: <Smartphone size={24} />,
      title: "Cross-Platform",
      description: "Developing mobile apps with React Native and Capacitor"
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-extrabold text-gray-900 mb-3 tracking-tight">
            About
          </h2>
          <div className="w-12 h-1 bg-gray-900 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 max-w-xl mx-auto leading-relaxed mt-4 mb-2">
            Full stack developer passionate about crafting clean, scalable digital solutions. I focus on impactful experiences and minimal, purposeful design.
          </p>
        </motion.div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {highlights.map((item, idx) => (
            <motion.div
              key={item.title}
              variants={itemVariants}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm p-7 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-200"
            >
              <div className="mb-2 text-gray-800">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold mb-1 text-gray-900 tracking-tight">
                {item.title}
              </h3>
              <p className="text-sm text-gray-500">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
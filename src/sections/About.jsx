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
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gray-900 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Passionate Full Stack Developer
            </h3>
            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
              <p>
                With <strong>1.5+ years of professional experience</strong> (2+ years including part-time), 
                I specialize in building scalable, secure, and high-performance web and mobile applications.
              </p>
              <p>
                My expertise spans across <strong>JavaScript, React.js, Next.js, PHP, and API design</strong>, 
                with a strong foundation in data structures, algorithms, and distributed systems.
              </p>
              <p>
                I'm experienced in automated testing, CI/CD pipelines, and Agile development methodologies. 
                I have a proven track record of delivering customer-focused features, improving system 
                performance, and taking ownership of components end-to-end.
              </p>
              <p>
                I'm passionate about creating intuitive user experiences and writing clean, maintainable code 
                that makes a difference in people's lives.
              </p>
            </div>
          </motion.div>

          {/* Highlights Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:border-gray-200 transition-all duration-300"
              >
                <div className="text-gray-900 mb-3">
                  {highlight.icon}
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  {highlight.title}
                </h4>
                <p className="text-gray-600 text-sm">
                  {highlight.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900 mb-2">1.5+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900 mb-2">50+</div>
            <div className="text-gray-600">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900 mb-2">99%</div>
            <div className="text-gray-600">Client Satisfaction</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
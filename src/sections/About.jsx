import { motion } from 'framer-motion';
import { Code, Database, Globe, Smartphone, User } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code size={24} />,
      title: "Full Stack Engineering",
      description: "Building scalable, production-grade applications with clean architecture.",
      color: "bg-blue-50 text-blue-600",
      points: ["Scalable Architecture", "Clean Code Practices"]
    },
    {
      icon: <Database size={24} />,
      title: "Backend & API Design",
      description: "Architecting secure, high-performance APIs and database schemas.",
      color: "bg-purple-50 text-purple-600",
      points: ["Secure Endpoints", "Performance Optimization"]
    },
    {
      icon: <Globe size={24} />,
      title: "Modern Frontend",
      description: "Creating responsive, SEO-optimized interfaces with React & Next.js.",
      color: "bg-pink-50 text-pink-600",
      points: ["SSR & Static Generation", "Component Reusability"]
    },
    {
      icon: <Smartphone size={24} />,
      title: "Cross-Platform Mobile",
      description: "Delivering native-quality mobile apps for iOS and Android.",
      color: "bg-orange-50 text-orange-600",
      points: ["Cross-Platform Reach", "Native Functionality"]
    }
  ];

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
    <section id="about" className="py-24 section-gradient relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-24"
        >
          <div className="flex justify-center mb-6">
            <span className="pill-badge">
              <User size={14} className="mr-2" />
              About Me
            </span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 tracking-tight">
            Expertise in Modern <br className="hidden sm:block" />
            <span className="text-gradient">Web Development</span>
          </h2>
          
          <p className="text-lg sm:text-xl text-foreground-secondary max-w-2xl mx-auto leading-relaxed">
            Full Stack Developer with expertise in React.js, Next.js, and Node.js. Building production-grade applications with clean architecture and scalable infrastructure.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { type: "spring", stiffness: 300, damping: 20 } }}
              className="group p-8 rounded-3xl border transition-shadow duration-300 relative flex flex-col items-start bg-white text-foreground border-gray-100 shadow-lg shadow-gray-100 hover:shadow-xl"
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 ${item.color}`}>
                {item.icon}
              </div>

              <h3 className="text-xl font-bold mb-3 text-foreground">
                {item.title}
              </h3>
              
              <p className="text-base leading-relaxed mb-6 flex-grow text-foreground-secondary">
                {item.description}
              </p>

              <div className="w-full pt-6 border-t mt-auto border-gray-100">
                 <ul className="space-y-3">
                    {item.points.map((point, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm">
                         <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                         <span className="text-foreground-secondary">{point}</span>
                      </li>
                    ))}
                 </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

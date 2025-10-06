import { motion } from 'framer-motion';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Easy2Work",
      location: "Chennai",
      period: "May 2024 - Current",
      type: "Full-time",
      achievements: [
        "Led development of a client-facing CRM system using Next.js and PHP, leading to 30% reduction in feedback loops",
        "Designed and deployed RESTful APIs hosted on Vercel, improving backend response times by 40%",
        "Built robust Cypress test automation suite, reducing regression bugs by 50%",
        "Developed AI-integrated nutrition analysis app using React.js and Gemini AI API",
        "Created Android-native applications using React.js + Capacitor with serverless backend",
        "Enhanced UI/UX with Figma + Tailwind CSS, increasing user satisfaction scores by 35%"
      ],
      technologies: ["Next.js", "React.js", "PHP", "Cypress", "Tailwind CSS", "Vercel", "Gemini AI"]
    },
    {
      title: "Full Stack Developer (Part-Time)",
      company: "Baleen Media",
      location: "Chennai",
      period: "October 2023 - April 2024",
      type: "Part-time",
      achievements: [
        "Contributed to client-facing CRM app development using Next.js + PHP",
        "Debugged and stabilized legacy VB.NET CRM system, resolving 20+ production bugs",
        "Designed mobile-first UI prototypes in Figma, resulting in 40% boost in user engagement",
        "Implemented key features and optimized workflows for better performance"
      ],
      technologies: ["Next.js", "PHP", "VB.NET", "Figma", "CRM Systems"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
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
    <section id="experience" className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-extrabold text-gray-900 mb-3 tracking-tight">
            Experience
          </h2>
          <div className="w-12 h-1 bg-gray-900 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 max-w-xl mx-auto leading-relaxed mt-4 mb-2">
            Delivering impactful results and scalable solutions across diverse projects.
          </p>
        </motion.div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative">
            {/* Center vertical timeline line */}
            <div className="absolute left-1/2 top-0 -translate-x-1/2 w-1 h-full bg-gray-200"></div>
            <div className="flex flex-col gap-20">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  className="relative flex flex-col md:flex-row items-stretch min-h-[180px]"
                >
                  {/* Timeline dot centered */}
                  <div className="absolute left-1/2 top-10 -translate-x-1/2 w-7 h-7 bg-gray-900 rounded-full flex items-center justify-center z-10 shadow-lg">
                    <ExternalLink size={16} className="text-white" />
                  </div>
                  {/* Left side: role, company, location, etc */}
                  <div className="md:w-1/2 pr-0 md:pr-12 flex flex-col justify-center md:items-end text-right md:text-right mb-10 md:mb-0">
                    <h4 className="text-xl font-semibold text-gray-900 mb-2 tracking-wide">
                      {exp.title}
                    </h4>
                    <span className={`text-xs font-medium px-3 py-1 rounded-full mb-3 inline-block tracking-wide ${exp.type === 'Full-time' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}`}>{exp.type}</span>
                    <div className="flex flex-col gap-2 text-gray-600 text-base tracking-wide">
                      <span className="flex items-center gap-2 justify-end"><ExternalLink size={16} />{exp.company}</span>
                      <span className="flex items-center gap-2 justify-end"><MapPin size={16} />{exp.location}</span>
                      <span className="flex items-center gap-2 justify-end text-gray-500"><Calendar size={16} />{exp.period}</span>
                    </div>
                  </div>
                  {/* Right side: achievements and technologies in a card */}
                  <div className="md:w-3/5 w-full pl-0 md:pl-12 flex flex-col justify-center">
                    <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-md w-full max-w-xl md:max-w-full mx-auto">
                      <div className="mb-4">
                        <h5 className="text-lg font-semibold text-gray-900 mb-3 tracking-wide">Achievements</h5>
                        <ul className="space-y-3">
                          {exp.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <span className="mt-2 text-gray-900 text-lg">&bull;</span>
                              <span className="text-gray-700 text-base leading-relaxed tracking-wide">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h5 className="text-lg font-semibold text-gray-900 mb-2 tracking-wide">Technologies</h5>
                        <div className="flex flex-wrap gap-3">
                          {exp.technologies.map((tech, idx) => (
                            <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors duration-200 tracking-wide">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
import { motion } from 'framer-motion';
import { Calendar, MapPin, ExternalLink, Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Easy2Work",
      location: "Chennai",
      period: "May 2024 - Current",
      type: "Full-time",
      achievements: [
        "Led development of a client-facing CRM system using Next.js and PHP, leading to 30% reduction in feedback loops.",
        "Designed and deployed RESTful APIs hosted on Vercel, improving backend response times by 40%.",
        "Built a robust Cypress test automation suite, reducing regression bugs by 50%.",
      ],
      technologies: ["Next.js", "React.js", "PHP", "Cypress", "Tailwind CSS", "Vercel", "Gemini AI"]
    },
    {
      title: "Full Stack Developer",
      company: "Baleen Media",
      location: "Chennai",
      period: "October 2023 - April 2024",
      type: "Part-time",
      achievements: [
        "Contributed to client-facing CRM app development using Next.js + PHP.",
        "Debugged and stabilized a legacy VB.NET CRM system, resolving 20+ production bugs.",
        "Designed mobile-first UI prototypes in Figma, resulting in a 40% boost in user engagement.",
      ],
      technologies: ["Next.js", "PHP", "VB.NET", "Figma", "CRM Systems"]
    }
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }
    }
  };

  const metaVariants = {
    hidden: { opacity: 0, x: -30, filter: "blur(4px)" },
    visible: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, x: 30, filter: "blur(4px)" },
    visible: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }
    }
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: { duration: 0.5, ease: [0.34, 1.56, 0.64, 1], delay: 0.3 }
    }
  };

  return (
    <section id="experience" className="py-12 sm:py-16 lg:py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-3 tracking-tight px-4">
            Work Experience
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-gray-800 mx-auto rounded-full"></div>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed mt-4 sm:mt-5 px-4">
            A timeline of my professional journey and key contributions.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical timeline line */}
          <div
            className="absolute left-3 sm:left-4 md:left-1/2 top-0 h-full w-0.5 bg-gray-200 -translate-x-1/2"
            aria-hidden="true"
          ></div>

          <div className="space-y-8 sm:space-y-10 lg:space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="relative flex items-start group"
              >
                {/* Briefcase icon at top of each segment */}
                <motion.div
                  variants={iconVariants}
                  className="absolute left-3 sm:left-4 md:left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-1 rounded-full z-10"
                  style={{ top: '1.25rem' }}
                >
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gray-800 rounded-full flex items-center justify-center text-white shadow-md">
                    <Briefcase size={12} className="sm:w-3.5 sm:h-3.5" />
                  </div>
                </motion.div>

                <div className="w-full flex flex-col md:flex-row items-start gap-x-8">
                  {/* Meta Info */}
                  <motion.div
                    variants={metaVariants}
                    className="w-full md:w-1/2 flex md:justify-end"
                  >
                    <div className="md:max-w-sm w-full pl-10 sm:pl-12 md:pr-8 md:pl-0 md:text-right">
                      <motion.span 
                        className="text-xs sm:text-sm font-bold px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg mb-2 sm:mb-3 inline-block tracking-wider bg-gradient-to-r from-gray-100 to-gray-50 text-gray-700 border border-gray-200 shadow-sm"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {exp.type}
                      </motion.span>
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 group-hover:text-gray-800 transition-colors duration-300">{exp.title}</h3>
                      <div className="flex items-center gap-1.5 sm:gap-2 mt-2 text-sm sm:text-base text-gray-700 md:justify-end font-semibold">
                        <ExternalLink size={14} className="sm:w-4 sm:h-4 text-gray-900 flex-shrink-0" /> 
                        <span className="truncate">{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-600 mt-2 md:justify-end">
                        <MapPin size={12} className="sm:w-3.5 sm:h-3.5 text-gray-700 flex-shrink-0" /> {exp.location}
                      </div>
                      <p className="text-xs sm:text-sm font-semibold text-gray-500 mt-2 sm:mt-3 px-2.5 sm:px-3 py-1 bg-gray-100 rounded-lg inline-block">{exp.period}</p>
                    </div>
                  </motion.div>

                  {/* Card */}
                  <motion.div
                    variants={cardVariants}
                    className="w-full md:w-1/2 flex md:justify-start mt-4 md:mt-0"
                  >
                    <div className="group relative bg-gradient-to-br from-white via-gray-50 to-white rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6 border border-gray-200 shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 w-full ml-10 sm:ml-12 md:ml-8 overflow-hidden">
                      {/* Decorative gradient overlay - bottom right */}
                      <div className="absolute bottom-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-tl from-gray-900/5 to-transparent rounded-tl-full scale-0 opacity-0 translate-x-12 translate-y-12 group-hover:scale-100 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500 ease-out"></div>
                      
                      <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-3 sm:mb-4 flex items-center relative z-10 group-hover:text-gray-800 transition-colors duration-300">
                        <div className="w-1 h-4 sm:h-5 bg-gray-900 rounded-full mr-2 sm:mr-3"></div>
                        Key Achievements
                      </h4>
                      <ul className="space-y-2 sm:space-y-3 text-gray-600 text-xs sm:text-sm leading-relaxed relative z-10">
                        {exp.achievements.map((achievement, idx) => (
                          <motion.li 
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="flex items-start space-x-2 sm:space-x-3 group/item"
                          >
                            <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 bg-gray-800 rounded-full mt-1.5 sm:mt-2 group-hover/item:scale-150 transition-transform duration-200 flex-shrink-0"></div>
                            <span>{achievement}</span>
                          </motion.li>
                        ))}
                      </ul>
                      <div className="mt-4 sm:mt-5 lg:mt-6 pt-4 sm:pt-5 border-t border-gray-200 relative z-10">
                        <h5 className="text-xs sm:text-sm font-bold text-gray-900 mb-2 sm:mb-3 flex items-center uppercase tracking-wider">
                          <div className="w-1 h-3 sm:h-4 bg-gray-900 rounded-full mr-1.5 sm:mr-2"></div>
                          Technologies
                        </h5>
                        <div className="flex flex-wrap gap-1.5 sm:gap-2">
                          {exp.technologies.map((tech, idx) => (
                            <motion.span
                              key={idx}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: idx * 0.05 }}
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.95 }}
                              className="px-2.5 sm:px-3 py-1 sm:py-1.5 bg-white text-gray-700 border border-gray-300 rounded-lg text-xs font-semibold hover:bg-gray-50 hover:text-gray-900 transition-all duration-200 shadow-sm cursor-default"
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

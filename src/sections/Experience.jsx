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
      title: "Full Stack Developer (Part-Time)",
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

  const timelineVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="experience" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-8 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold text-gray-900 mb-3 tracking-tight">
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-gray-800 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed mt-5">
            A timeline of my professional journey and key contributions.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-2 h-full w-0.5 bg-gray-200" aria-hidden="true"></div>

          <motion.div
            variants={timelineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-12"
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative flex items-start group"
              >
                <div className="absolute left-4 md:left-1/2 top-2 -translate-x-1/2 bg-white p-1 rounded-full">
                  <div className="w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center text-white">
                    <Briefcase size={14} />
                  </div>
                </div>

                <div className="w-full flex flex-col md:flex-row items-start gap-x-8">
                  {/* Meta Info Block (always left) */}
                  <div className="w-full md:w-1/2 flex md:justify-end">
                    <div className="md:max-w-sm w-full pl-12 md:pr-8 md:pl-0 md:text-right">
                      <span className="text-xs font-medium px-3 py-1 rounded-full mb-2 inline-block tracking-wide bg-gray-100 text-gray-700">
                        {exp.type}
                      </span>
                      <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
                      <div className="flex items-center gap-2 mt-1 text-gray-600 md:justify-end">
                        <ExternalLink size={14} /> {exp.company}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500 mt-1 md:justify-end">
                        <MapPin size={14} /> {exp.location}
                      </div>
                      <p className="text-sm font-medium text-gray-500 mt-2">
                        {exp.period}
                      </p>
                    </div>
                  </div>
                  {/* Card Block (always right) */}
                  <div className="w-full md:w-1/2 flex md:justify-start">
                    <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm hover:shadow-lg hover:scale-[1.01] transition-all duration-300 w-full ml-12 md:ml-8">
                      <h4 className="text-md font-semibold text-gray-800 mb-3">Key Achievements</h4>
                      <ul className="space-y-2 list-disc list-inside text-gray-600 text-sm leading-relaxed">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx}>{achievement}</li>
                        ))}
                      </ul>
                      <div className="mt-5 pt-4 border-t border-gray-100">
                        <h5 className="text-md font-semibold text-gray-800 mb-3">Technologies</h5>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, idx) => (
                            <span 
                              key={idx} 
                              className="px-3 py-1 bg-white text-gray-700 border border-gray-300 rounded-full text-xs font-semibold hover:bg-gray-100 transition-colors duration-200 cursor-default"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
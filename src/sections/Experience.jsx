import { motion } from 'framer-motion';
import { Calendar, MapPin, Briefcase, CheckCircle2 } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Easy2Work",
      location: "Chennai",
      period: "May 2024 - Jan 2026",
      type: "Full-time",
      achievements: [
        "Architected and deployed a client-facing CRM system using Next.js and PHP, reducing client feedback cycles by 30% through real-time data synchronization.",
        "Engineered RESTful APIs with Next.js and deployed on Vercel serverless infrastructure, achieving 40% improvement in backend response times.",
        "Implemented comprehensive Cypress end-to-end testing suite, reducing regression bugs by 50% and accelerating deployment confidence.",
      ],
      technologies: ["Next.js", "React.js", "PHP", "MySQL", "PostgreSQL", "Cypress", "Tailwind CSS", "Vercel", "Gemini AI", "CRM Systems"]
    },
    {
      title: "Full Stack Developer",
      company: "Baleen Media",
      location: "Chennai",
      period: "October 2023 - April 2024",
      type: "Part-time",
      achievements: [
        "Developed full-stack features for client-facing CRM application using Next.js, Node.js, and PHP with modern API architecture.",
        "Resolved 20+ critical production bugs in legacy VB.NET CRM system, improving system stability and user satisfaction.",
        "Created mobile-first UI prototypes in Figma based on user research, achieving 40% increase in user engagement metrics.",
      ],
      technologies: ["Next.js", "React.js", "PHP", "MySQL", "Tailwind CSS", "VB.NET", "Figma", "CRM Systems"]
    }
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="experience" className="py-24 bg-background-secondary relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
           <span className="pill-badge mb-4">
             <Briefcase size={14} className="mr-2" />
             Career Path
           </span>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Professional Experience
          </h2>
          <p className="text-lg text-foreground-secondary max-w-2xl mx-auto">
             A timeline of my professional journey and key technical milestones.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical timeline line with gradient fade */}
          <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-blue-200 via-purple-200 to-pink-200 -translate-x-1/2 rounded-full" />

          <div className="space-y-12 md:space-y-16">
            {experiences.map((exp, index) => {
              const isCurrent = exp.period.includes('Present') || exp.period.includes('Current');
              const theme = index === 0 ? "blue" : "purple";
              
              const colors = {
                blue: {
                   dot: "bg-blue-600 border-blue-100 shadow-[0_0_0_4px_rgba(59,130,246,0.1)]",
                   card: "bg-white border-blue-100/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(59,130,246,0.1)]",
                   title: "text-foreground",
                   icon: "text-blue-600",
                   badge: "bg-blue-50 text-blue-700 border-blue-100",
                   bullet: "text-blue-500",
                   hoverText: "hover:text-blue-600"
                },
                purple: {
                   dot: "bg-gradient-to-tr from-purple-500 to-pink-500 border-purple-100 shadow-[0_0_0_4px_rgba(168,85,247,0.1)]",
                   card: "bg-white border-purple-100/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(168,85,247,0.1)]",
                   title: "text-foreground",
                   icon: "text-purple-500",
                   badge: "bg-fuchsia-50 text-fuchsia-700 border-fuchsia-100",
                   bullet: "text-fuchsia-500",
                   hoverText: "hover:text-fuchsia-600"
                }
              };

              const currentTheme = colors[theme];
              
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  className={`relative flex flex-col md:flex-row gap-6 md:gap-10 items-center ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-6 md:top-1/2 md:-translate-y-1/2 flex items-center justify-center z-10 scale-110">
                    <div className={`w-4 h-4 rounded-full box-content border-4 transition-colors duration-500 ${currentTheme.dot}`} />
                  </div>

                  {/* Content Card */}
                  <div className="flex-1 w-full pl-12 md:pl-0">
                    <div className={`relative p-6 md:p-8 rounded-3xl border transition-all duration-300 group ${currentTheme.card}`}>
                      {/* Current/Latest Role Indicator */}
                      {(isCurrent || index === 0) && (
                        <div className="absolute -top-3 left-6 md:left-8 px-3 py-1 bg-blue-600 text-white text-[10px] font-bold uppercase tracking-widest rounded-full shadow-lg shadow-blue-200">
                          {isCurrent ? "Current Role" : "Latest Role"}
                        </div>
                      )}

                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                        <div className="space-y-1.5">
                          <h3 className={`text-xl font-bold ${currentTheme.title}`}>
                            {exp.title}
                          </h3>
                          <div className="flex flex-wrap items-center gap-2 text-sm text-foreground-secondary font-medium">
                            <span className="flex items-center gap-1.5">
                              <Briefcase size={15} className={currentTheme.icon} />
                              {exp.company}
                            </span>
                            <span className="w-1 h-1 rounded-full bg-gray-300" />
                            <span className="flex items-center gap-1">
                              <MapPin size={14} className="text-gray-400" />
                              {exp.location}
                            </span>
                            <span className="w-1 h-1 rounded-full bg-white" />
                            <span className={`px-2 py-0.5 rounded-md text-[11px] font-semibold border ${currentTheme.badge}`}>
                              {exp.type}
                            </span>
                          </div>
                        </div>
                        
                        <div className={`flex items-center gap-1.5 text-sm font-medium px-3 py-1.5 rounded-full border shrink-0 w-fit mt-1 md:mt-0 ${currentTheme.badge}`}>
                          <Calendar size={14} className={currentTheme.bullet} />
                          {exp.period}
                        </div>
                      </div>

                      <ul className="space-y-3 mb-8">
                          {exp.achievements.map((item, i) => (
                              <li key={i} className="flex items-start gap-3 text-foreground-secondary text-sm leading-relaxed group-hover:text-foreground transition-colors">
                                  <CheckCircle2 size={16} className={`mt-0.5 flex-shrink-0 ${currentTheme.bullet}`} />
                                  <span>{item}</span>
                              </li>
                          ))}
                      </ul>

                      <div className="pt-6 border-t border-gray-100/50">
                          <div className="flex flex-wrap gap-2">
                              {exp.technologies.map((tech, i) => (
                                  <span key={i} className={`px-3 py-1 bg-white hover:bg-gray-50 text-foreground-secondary ${currentTheme.hoverText} text-xs font-medium rounded-full border border-gray-100 transition-colors shadow-sm`}>
                                      {tech}
                                  </span>
                              ))}
                          </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Spacer for alignment */}
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

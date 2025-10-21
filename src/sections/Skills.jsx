import { motion } from 'framer-motion';
import { Code, Database, Wrench, Users, GraduationCap, Calendar, Clock, Lightbulb, MessageSquare, UserCheck, Eye, Zap, Target } from 'lucide-react';

// Custom SVG Icons for technologies
const JavaScriptIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
    <rect width="24" height="24" rx="4" fill="currentColor"/>
    <path d="M13.5 16.5c0 1.5.9 2.25 2.25 2.25 1.2 0 1.95-.6 1.95-1.8 0-1.35-.75-1.8-2.1-2.55l-.45-.195c-1.65-.705-2.745-1.59-2.745-3.45 0-1.725 1.305-3.03 3.345-3.03 1.455 0 2.505.51 3.255 1.83l-1.785 1.14c-.39-.705-.81-1.005-1.47-1.005-.66 0-1.08.42-1.08.99 0 .69.42 1.005 1.395 1.455l.45.195c1.95.84 3.045 1.695 3.045 3.615 0 2.07-1.62 3.195-3.795 3.195-2.13 0-3.51-1.02-4.185-2.355L13.5 16.5zM7.5 16.35c.36.63.69.99 1.5.99.75 0 1.23-.3 1.23-1.47V7.5h2.25v8.4c0 2.43-1.425 3.54-3.51 3.54-1.875 0-2.97-.975-3.525-2.145L7.5 16.35z" fill="white"/>
  </svg>
);

const ReactIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
    <circle cx="12" cy="12" r="2" fill="currentColor"/>
    <ellipse cx="12" cy="12" rx="10" ry="4" stroke="currentColor" strokeWidth="1" fill="none"/>
    <ellipse cx="12" cy="12" rx="10" ry="4" stroke="currentColor" strokeWidth="1" fill="none" transform="rotate(60 12 12)"/>
    <ellipse cx="12" cy="12" rx="10" ry="4" stroke="currentColor" strokeWidth="1" fill="none" transform="rotate(120 12 12)"/>
  </svg>
);

const NextJsIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M11.5725 0c-.1763 0-.3098.0013-.3584.0067-.0516.0053-.2159.021-.3636.0328-3.4088.3073-6.6017 2.1463-8.624 4.9728C1.1004 6.584.3802 8.3666.1082 10.255c-.0962.659-.108.8537-.108 1.7474s.012 1.0884.108 1.7476c.652 4.506 3.8591 8.2919 8.2087 9.6945.7789.2511 1.6.4223 2.5337.5255.3636.04 1.9354.04 2.299 0 1.6117-.1783 2.9772-.577 4.3237-1.2643.2065-.1056.2464-.1337.2183-.1573-.0188-.0139-.8987-1.1938-1.9543-2.62l-1.919-2.592-2.4047-3.5583c-1.3231-1.9564-2.4117-3.556-2.4211-3.556-.0094-.0026-.0187 1.5787-.0235 3.509-.0067 3.3802-.0093 3.5162-.0516 3.596-.061.115-.108.1618-.2064.2134-.075.0374-.1408.0445-.495.0445h-.406l-.1078-.068a.4383.4383 0 01-.1572-.1712l-.0493-.1056.0053-4.703.0067-4.7054.0726-.0915c.0376-.0493.1174-.1125.1736-.143.0962-.047.1338-.0517.5396-.0517.4787 0 .5584.0187.6827.1547.0353.0377 1.3373 1.9987 2.895 4.3608a10760.433 10760.433 0 004.7344 7.1706l1.9002 2.8782.0971-.0633c.6824-.4477 1.4025-1.0735 1.9587-1.704 1.0647-1.2083 1.7951-2.5904 2.1537-4.0764.2561-.9999.3273-1.3598.3273-1.6547 0-.1712-.0067-.3182-.0147-.3273-.0094-.0094-.0377.0053-.0633.0333-.5997.6482-1.3066 1.1503-2.0833 1.4792-.8987.3801-1.9355.5609-2.9772.5187-1.5584-.063-3.0117-.6257-4.1729-1.6147-1.8413-1.568-2.8229-3.8738-2.5876-6.0725.2134-1.9964 1.3066-3.8413 2.9019-4.8976C9.2924.3281 10.9768 0 12.7171 0c.8178 0 1.5767.1056 2.29.3281 1.6414.5187 3.0117 1.5257 3.9854 2.9272.9772 1.4063 1.5117 3.0766 1.5463 4.8408.0173.8647-.0147 1.3831-.1174 1.8832-.3509 1.7474-1.2616 3.3802-2.5876 4.6294-.3509.331-.6257.5821-.6257.5716 0-.0107 1.9002-2.849 4.2247-6.3078l4.2247-6.2882.0053-2.5343.0067-2.5344h-1.7567l-.0107 3.3802-.0053 3.3802-1.3066-1.9675c-.7166-1.083-1.3332-1.9923-1.3705-2.0203-.0562-.042-.1408-.0634-.3742-.0634h-.298l-.0094.0067-.0094.0067v7.2076c0 3.9628-.0053 7.2303-.0133 7.2622-.011.0444-.055.0866-.0999.0999-.0445.0133-1.4025.0215-3.027.0187l-2.9486-.0187-.0067-.0067z"/>
  </svg>
);

const TailwindIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
    <path d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.09 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C15.61 7.15 14.5 6 12 6zM7 12c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.91 1.35C8.39 16.85 9.5 18 12 18c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C10.61 13.15 9.5 12 7 12z" fill="currentColor"/>
  </svg>
);

const FigmaIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
    <path d="M8 2a3 3 0 0 0 0 6v3a3 3 0 1 0 3 3V8h3a3 3 0 1 0 0-6H8z" fill="currentColor"/>
    <circle cx="14" cy="11" r="3" fill="currentColor" opacity="0.6"/>
    <path d="M8 11a3 3 0 0 0 0 6v3a3 3 0 0 0 3-3v-3H8z" fill="currentColor" opacity="0.8"/>
  </svg>
);

const NodeJsIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
    <path d="M12 2L3 7v10l9 5 9-5V7l-9-5z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    <path d="M12 22v-10M12 12L3 7M12 12l9-5" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
);

const PHPIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
    <ellipse cx="12" cy="12" rx="11" ry="6" fill="currentColor"/>
    <path d="M6.5 10h1.5c.8 0 1.5.5 1.5 1.5S8.8 13 8 13H7v1.5H6V10h.5zm1.2 2c.4 0 .7-.3.7-.7s-.3-.7-.7-.7H7v1.4h.7zm3.8-2h1.5c.8 0 1.5.5 1.5 1.5v3H14v-1h-1.5v1H11v-4.5h.5zm1.2 2c.4 0 .7-.3.7-.7s-.3-.7-.7-.7h-.7v1.4h.7zm3.8-2h1.5c.8 0 1.5.5 1.5 1.5v3H19v-1h-1.5v1h-1.5v-4.5h.5zm1.2 2c.4 0 .7-.3.7-.7s-.3-.7-.7-.7h-.7v1.4h.7z" fill="white"/>
  </svg>
);

const MySQLIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
    <ellipse cx="12" cy="6" rx="8" ry="3" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    <path d="M4 6v6c0 1.657 3.582 3 8 3s8-1.343 8-3V6" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    <path d="M4 12v6c0 1.657 3.582 3 8 3s8-1.343 8-3v-6" stroke="currentColor" strokeWidth="1.5" fill="none"/>
  </svg>
);

const GitIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
    <path d="M21.62 11.11l-9.73-9.73a1.34 1.34 0 00-1.9 0L8.11 3.26l2.42 2.42a1.59 1.59 0 012.01 2.03l2.33 2.33a1.59 1.59 0 011.68 2.61 1.59 1.59 0 01-2.61-1.68l-2.17-2.17v5.72a1.59 1.59 0 11-1.27-.63V8.58a1.59 1.59 0 01-.86-2.08L6.95 4.08 2.38 8.65a1.34 1.34 0 000 1.9l9.73 9.73a1.34 1.34 0 001.9 0l9.61-9.61a1.34 1.34 0 000-1.9z" fill="currentColor"/>
  </svg>
);

const CypressIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
    <circle cx="12" cy="12" r="10" fill="currentColor"/>
    <path d="M12 6.5c1.93 0 3.5.86 4.5 2.14l-1.71 1.29C14.29 9.29 13.21 8.5 12 8.5c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5c1.21 0 2.29-.79 2.79-1.43l1.71 1.29c-1 1.28-2.57 2.14-4.5 2.14-3.04 0-5.5-2.46-5.5-5.5S8.96 6.5 12 6.5z" fill="white"/>
  </svg>
);

const VercelIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M12 2L2 20h20L12 2z"/>
  </svg>
);

const PostmanIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
    <circle cx="12" cy="12" r="10" fill="currentColor"/>
    <path d="M12 7l-5 5 5 5 5-5-5-5z" fill="white"/>
  </svg>
);

const VBNetIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
    <rect x="3" y="3" width="18" height="18" rx="2" fill="currentColor"/>
    <path d="M8 7l2 5-2 5H6l-2-5 2-5h2zm4 0h2l2 5-2 5h-2l-2-5 2-5zm6 0v10h2V7h-2z" fill="white"/>
  </svg>
);

const SQLIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
    <rect x="3" y="3" width="18" height="18" rx="2" fill="currentColor"/>
    <path d="M7 8h10M7 12h10M7 16h6" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code size={24} />,
      skills: [
        { name: "JavaScript", level: 95, icon: <JavaScriptIcon /> },
        { name: "PHP", level: 88, icon: <PHPIcon /> },
        { name: "SQL", level: 85, icon: <SQLIcon /> },
        { name: "VB.NET", level: 75, icon: <VBNetIcon /> }
      ]
    },
    {
      title: "Frontend Technologies",
      icon: <Code size={24} />,
      skills: [
        { name: "React.js", level: 95, icon: <ReactIcon /> },
        { name: "Next.js", level: 92, icon: <NextJsIcon /> },
        { name: "Tailwind CSS", level: 90, icon: <TailwindIcon /> },
        { name: "Figma", level: 85, icon: <FigmaIcon /> }
      ]
    },
    {
      title: "Backend & Database",
      icon: <Database size={24} />,
      skills: [
        { name: "Next.js API", level: 90, icon: <NextJsIcon /> },
        { name: "Node.js", level: 88, icon: <NodeJsIcon /> },
        { name: "PHP", level: 88, icon: <PHPIcon /> },
        { name: "MySQL", level: 85, icon: <MySQLIcon /> },
        { name: "VB.NET", level: 75, icon: <VBNetIcon /> }
      ]
    },
    {
      title: "Tools & Practices",
      icon: <Wrench size={24} />,
      skills: [
        { name: "Git/GitHub", level: 92, icon: <GitIcon /> },
        { name: "Cypress Testing", level: 88, icon: <CypressIcon /> },
        { name: "Vercel", level: 90, icon: <VercelIcon /> },
        { name: "Postman", level: 85, icon: <PostmanIcon /> }
      ]
    }
  ];

  const softSkills = [
    { name: "Time Management", icon: <Clock size={16} /> },
    { name: "Problem Solving", icon: <Lightbulb size={16} /> },
    { name: "Effective Communication", icon: <MessageSquare size={16} /> },
    { name: "Team Collaboration", icon: <UserCheck size={16} /> },
    { name: "Attention to Detail", icon: <Eye size={16} /> },
    { name: "Adaptability", icon: <Zap size={16} /> },
    { name: "Ownership & Initiative", icon: <Target size={16} /> }
  ];

  const education = [
    {
      degree: "B.Sc Computer Science",
      institution: "Agurchand Manmull Jain College, Chennai",
      period: "April 2021 - May 2024",
      status: "Completed"
    },
    {
      degree: "Class XII (Higher Secondary)",
      institution: "Kendriya Vidyalaya Island Grounds, Chennai",
      period: "April 2020 - March 2021",
      status: "Completed"
    },
    {
      degree: "Class X (Secondary)",
      institution: "Kendriya Vidyalaya Island Grounds, Chennai", 
      period: "April 2018 - March 2019",
      status: "Completed"
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
    <section id="skills" className="py-12 sm:py-16 lg:py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 px-4">
            Skills & Education
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-gray-900 mx-auto mb-4 sm:mb-6"></div>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Technical expertise and educational background that drives innovation
          </p>
        </motion.div>

        {/* Technical Skills */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xl sm:text-2xl font-bold text-gray-900 mb-8 sm:mb-12 text-center px-4"
          >
            Technical Skills
          </motion.h3>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6"
          >
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="group relative bg-gradient-to-br from-white via-gray-50 to-white rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                {/* Decorative gradient overlay */}
                <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-br from-gray-900/5 to-transparent rounded-bl-full scale-0 opacity-0 translate-x-12 -translate-y-12 group-hover:scale-100 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500 ease-out"></div>
                
                {/* Icon and Title */}
                <div className="flex items-center space-x-3 sm:space-x-4 mb-6 sm:mb-8 relative z-10">
                  <motion.div 
                    className="p-2 sm:p-3 bg-gradient-to-br from-gray-900 to-gray-700 text-white rounded-lg sm:rounded-xl shadow-md group-hover:shadow-xl transition-all duration-300 flex-shrink-0"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center">
                      {category.icon}
                    </div>
                  </motion.div>
                  <h4 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors">
                    {category.title}
                  </h4>
                </div>
                
                {/* Skills List */}
                <div className="space-y-4 sm:space-y-5 relative z-10">
                  {category.skills.map((skill, idx) => (
                    <div key={idx} className="group/skill">
                      <div className="flex justify-between items-center mb-2 sm:mb-2.5 gap-2">
                        <div className="flex items-center space-x-2 sm:space-x-2.5 min-w-0 flex-1">
                          <div className="text-gray-700 group-hover/skill:text-gray-900 transition-all duration-300 group-hover/skill:scale-110 group-hover/skill:rotate-12 flex-shrink-0">
                            {skill.icon}
                          </div>
                          <span className="text-gray-800 font-semibold text-xs sm:text-sm tracking-wide truncate">{skill.name}</span>
                        </div>
                        <motion.span 
                          className="text-gray-600 text-xs sm:text-sm font-bold px-2 sm:px-2.5 py-0.5 bg-gray-100 rounded-full group-hover/skill:bg-gray-900 group-hover/skill:text-white transition-colors duration-300 flex-shrink-0"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.1 }}
                        >
                          {skill.level}%
                        </motion.span>
                      </div>
                      <div className="relative w-full bg-gray-200 rounded-full h-2 sm:h-2.5 overflow-hidden">
                        {/* Background shimmer effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover/skill:translate-x-[100%] transition-transform duration-1000"></div>
                        
                        {/* Progress bar */}
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ 
                            duration: 1.2, 
                            delay: idx * 0.15,
                            ease: "easeOut"
                          }}
                          className="relative h-2 sm:h-2.5 bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 rounded-full shadow-sm"
                        >
                          {/* Glossy effect on progress bar */}
                          <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent rounded-full"></div>
                        </motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Soft Skills */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xl sm:text-2xl font-bold text-gray-900 mb-8 sm:mb-12 text-center px-4"
          >
            Soft Skills
          </motion.h3>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-2 sm:gap-3 lg:gap-4 px-2"
          >
            {softSkills.map((skill, index) => (
              <motion.span
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400 }}
                className="group relative bg-gradient-to-br from-white to-gray-50 px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 lg:py-3 rounded-lg sm:rounded-xl border-2 border-gray-200 text-gray-800 font-semibold hover:text-gray-900 hover:border-gray-400 hover:shadow-lg transition-all duration-300 cursor-default touch-manipulation"
              >
                {/* Small decorative element */}
                <div className="absolute top-0 right-0 w-6 sm:w-8 h-6 sm:h-8 bg-gradient-to-bl from-gray-900/10 to-transparent rounded-bl-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                
                <span className="relative z-10 flex items-center justify-center gap-1.5 sm:gap-2 text-xs sm:text-sm lg:text-base whitespace-nowrap">
                  {/* Icon - hidden on mobile, always visible on desktop */}
                  <span className="hidden lg:inline-flex w-4 h-4">
                    {skill.icon}
                  </span>
                  <span>{skill.name}</span>
                </span>
              </motion.span>
            ))}
          </motion.div>
        </div>

        {/* Education */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8 text-center px-4"
          >
            Education
          </motion.h3>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            {education.map((edu, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative pl-6 sm:pl-8 pb-6 sm:pb-8 last:pb-0 group"
              >
                {/* Timeline line */}
                {index !== education.length - 1 && (
                  <div className="absolute left-2.5 sm:left-3 top-8 bottom-0 w-0.5 bg-gray-200 group-hover:bg-gray-400 transition-colors duration-300"></div>
                )}
                
                {/* Timeline dot */}
                <motion.div 
                  className="absolute left-0 top-2 w-5 sm:w-6 h-5 sm:h-6 bg-gradient-to-br from-gray-900 to-gray-700 rounded-full flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <GraduationCap size={10} className="sm:w-3 sm:h-3 text-white" />
                </motion.div>
                
                <div className="relative bg-gradient-to-br from-white via-gray-50 to-white rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6 border border-gray-200 shadow-lg hover:shadow-2xl ml-3 sm:ml-4 transition-all duration-300 overflow-hidden group-hover:scale-[1.02]">
                  {/* Decorative gradient overlay - top left */}
                  <div className="absolute top-0 left-0 w-20 sm:w-28 h-20 sm:h-28 bg-gradient-to-br from-gray-900/5 to-transparent rounded-br-full scale-0 opacity-0 -translate-x-12 -translate-y-12 group-hover:scale-100 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500 ease-out"></div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 sm:mb-3 gap-2 relative z-10">
                    <h4 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors duration-300 pr-2">
                      {edu.degree}
                    </h4>
                    <motion.span 
                      className="text-xs sm:text-sm font-bold text-gray-700 px-2.5 sm:px-3 py-1 bg-gray-100 border border-gray-200 rounded-lg shadow-sm self-start sm:self-auto whitespace-nowrap"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {edu.status}
                    </motion.span>
                  </div>
                  
                  <p className="text-sm sm:text-base text-gray-700 mb-2 sm:mb-3 font-medium relative z-10">{edu.institution}</p>
                  
                  <div className="flex items-center space-x-2 text-gray-600 relative z-10">
                    <Calendar size={14} className="sm:w-4 sm:h-4 text-gray-900 flex-shrink-0" />
                    <span className="text-xs sm:text-sm font-semibold">{edu.period}</span>
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

export default Skills;
import { motion } from 'framer-motion';
import { Code, Database, Wrench, Users, GraduationCap, Calendar } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code size={24} />,
      skills: [
        { name: "JavaScript", level: 95 },
        { name: "PHP", level: 88 },
        { name: "SQL", level: 85 },
        { name: "VB.NET", level: 75 }
      ]
    },
    {
      title: "Frontend Technologies",
      icon: <Code size={24} />,
      skills: [
        { name: "React.js", level: 95 },
        { name: "Next.js", level: 92 },
        { name: "Tailwind CSS", level: 90 },
        { name: "Figma", level: 85 }
      ]
    },
    {
      title: "Backend & Database",
      icon: <Database size={24} />,
      skills: [
        { name: "Next.js API", level: 90 },
        { name: "PHP", level: 88 },
        { name: "MySQL", level: 85 },
        { name: "VB.NET", level: 75 }
      ]
    },
    {
      title: "Tools & Practices",
      icon: <Wrench size={24} />,
      skills: [
        { name: "Git/GitHub", level: 92 },
        { name: "Cypress Testing", level: 88 },
        { name: "Vercel", level: 90 },
        { name: "Postman", level: 85 }
      ]
    }
  ];

  const softSkills = [
    "Time Management",
    "Problem Solving",
    "Effective Communication", 
    "Team Collaboration",
    "Attention to Detail",
    "Adaptability",
    "Ownership & Initiative"
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
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Skills & Education
          </h2>
          <div className="w-20 h-1 bg-gray-900 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Technical expertise and educational background that drives innovation
          </p>
        </motion.div>

        {/* Technical Skills */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold text-gray-900 mb-8 text-center"
          >
            Technical Skills
          </motion.h3>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-2 bg-gray-900 text-white rounded-lg">
                    {category.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900">
                    {category.title}
                  </h4>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-700 font-medium">{skill.name}</span>
                        <span className="text-gray-500 text-sm">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: idx * 0.1 }}
                          className="bg-gray-900 h-2 rounded-full"
                        ></motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Soft Skills */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold text-gray-900 mb-8 text-center"
          >
            Soft Skills
          </motion.h3>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4"
          >
            {softSkills.map((skill, index) => (
              <motion.span
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="bg-white px-6 py-3 rounded-full border border-gray-200 text-gray-700 font-medium hover:border-gray-300 hover:shadow-md transition-all duration-200"
              >
                {skill}
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
            className="text-2xl font-bold text-gray-900 mb-8 text-center"
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
                className="relative pl-8 pb-8 last:pb-0"
              >
                {/* Timeline line */}
                {index !== education.length - 1 && (
                  <div className="absolute left-3 top-8 bottom-0 w-0.5 bg-gray-200"></div>
                )}
                
                {/* Timeline dot */}
                <div className="absolute left-0 top-2 w-6 h-6 bg-gray-900 rounded-full flex items-center justify-center">
                  <GraduationCap size={12} className="text-white" />
                </div>
                
                <div className="bg-white rounded-lg p-6 border border-gray-100 shadow-sm ml-4">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h4 className="text-lg font-semibold text-gray-900">
                      {edu.degree}
                    </h4>
                    <span className="text-sm font-medium text-green-600 mt-1 sm:mt-0">
                      {edu.status}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 mb-2">{edu.institution}</p>
                  
                  <div className="flex items-center space-x-2 text-gray-500">
                    <Calendar size={14} />
                    <span className="text-sm">{edu.period}</span>
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
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Layout, 
  Database, 
  Cloud, 
  GitBranch, 
  PenTool, 
  Workflow, 
  GraduationCap, 
  Sparkles 
} from 'lucide-react';

const Skills = () => {
    
  const skillCategories = [
    {
      id: "frontend",
      title: "Frontend",
      icon: <Layout className="w-5 h-5 text-blue-600" />,
      description: "Building responsive, interactive UIs",
      skills: [
        { name: "JavaScript (ES6+)", type: "core" },
        { name: "React.js", type: "core" },
        { name: "Next.js", type: "core" },
        { name: "HTML5 / CSS3", type: "core" },
        { name: "Tailwind CSS", type: "core" },
      ]
    },
    {
      id: "backend",
      title: "Backend",
      icon: <Code2 className="w-5 h-5 text-indigo-600" />,
      description: "Server-side logic & APIs",
      skills: [
        { name: "Next.js API Routes", type: "core" },
        { name: "PHP", type: "core" },
        { name: "REST APIs", type: "core" },
        { name: "Node.js", type: "learning" },
        { name: "Express.js", type: "learning" },
      ]
    },
    {
      id: "database",
      title: "Database",
      icon: <Database className="w-5 h-5 text-emerald-600" />,
      description: "Data storage & management",
      skills: [
        { name: "MySQL", type: "core" },
        { name: "PostgreSQL", type: "core" },
        { name: "MongoDB", type: "learning" },
      ]
    },
    {
      id: "baas",
      title: "Backend Services (BaaS)",
      icon: <Cloud className="w-5 h-5 text-sky-500" />,
      description: "Cloud infrastructure",
      skills: [
        { name: "Firebase (Auth, FCM)", type: "core" },
        { name: "Supabase", type: "core" },
      ]
    },
    {
      id: "devops",
      title: "Testing & DevOps",
      icon: <GitBranch className="w-5 h-5 text-orange-600" />,
      description: "Quality assurance & deployment",
      skills: [
        { name: "Cypress", type: "core" },
        { name: "CI/CD", type: "core" },
        { name: "GitHub Actions", type: "core" },
        { name: "Vercel", type: "core" },
      ]
    },
    {
      id: "tools",
      title: "Tools & Design",
      icon: <PenTool className="w-5 h-5 text-purple-600" />,
      description: "Design & development workflow",
      skills: [
        { name: "Figma", type: "core" },
        { name: "UI/UX Design", type: "core" },
      ]
    },
    {
      id: "practices",
      title: "Practices",
      icon: <Workflow className="w-5 h-5 text-rose-600" />,
      description: "Methodologies & integrations",
      skills: [
        { name: "Agile", type: "core" },
        { name: "Startup Product Dev", type: "core" },
        { name: "AI API Integrations", type: "core" },
      ]
    }
  ];

  const education = [
    {
        degree: "B.Sc Computer Science",
        institution: "Agurchand Manmull Jain College",
        year: "2021 - 2024",
        status: "Graduated"
    },
    {
        degree: "Class XII (Higher Secondary)",
        institution: "Kendriya Vidyalaya Island Grounds",
        year: "2020 - 2021",
        status: "Completed"
    }
  ];

  const softSkills = [
    "Problem Solving",
    "Continuous Learning",
    "Effective Communication",
    "Team Collaboration",
    "Time Management",
    "Analytical Thinking"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section id="skills" className="py-24 bg-background relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-50/50 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
        >
          <span className="pill-badge mb-4">
            <Sparkles size={14} className="mr-2" />
            Technical Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
            Full Stack Development Skills
          </h2>
          <p className="text-lg text-foreground-secondary max-w-2xl mx-auto leading-relaxed">
            Technical expertise across frontend, backend, and databases. Proficient in React.js, Next.js, Node.js, and modern development practices.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Left Column: Technical Skills (8 cols) */}
            <div className="lg:col-span-8">
                <h3 className="text-xl font-bold text-foreground mb-8 flex items-center gap-2">
                    <Code2 className="text-blue-600" size={20} />
                    Technical Proficiency
                </h3>
                
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-5"
                >
                    {skillCategories.map((category) => (
                        <motion.div 
                            key={category.id}
                            variants={itemVariants}
                            className="bg-white/60 backdrop-blur-md p-6 rounded-2xl border border-white/40 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.08)] hover:bg-white/80 transition-all duration-300 group"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2.5 bg-white rounded-xl shadow-sm border border-gray-100 group-hover:scale-105 transition-transform duration-300">
                                    {category.icon}
                                </div>
                                <div>
                                    <h4 className="font-bold text-foreground text-sm">{category.title}</h4>
                                </div>
                            </div>
                            
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, idx) => (
                                    <span 
                                        key={idx} 
                                        className={`
                                            px-2.5 py-1 rounded-md text-xs font-medium border transition-colors cursor-default
                                            ${skill.type === 'learning' 
                                                ? 'bg-gray-50 text-gray-500 border-gray-100 italic' 
                                                : 'bg-white text-foreground-secondary border-gray-200/60 shadow-sm hover:border-blue-200 hover:text-blue-700'
                                            }
                                        `}
                                        title={skill.type === 'learning' ? 'Currently Learning' : ''}
                                    >
                                        {skill.name}
                                        {skill.type === 'learning' && <span className="ml-1 opacity-60 text-[10px] not-italic">• Learning</span>}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Right Column: Education & Soft Skills (4 cols) */}
            <div className="lg:col-span-4 space-y-12">
                
                {/* Education Section */}
                <div>
                    <h3 className="text-xl font-bold text-foreground mb-8 flex items-center gap-2">
                        <GraduationCap className="text-pink-600" size={20} />
                        Education
                    </h3>
                    
                    <div className="space-y-8 relative">
                         {/* Timeline Line */}
                        <div className="absolute left-[11px] top-3 bottom-3 w-0.5 bg-gradient-to-b from-gray-200 via-gray-100 to-transparent" />

                        {education.map((edu, idx) => (
                            <motion.div 
                                key={idx}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.2 }}
                                className="relative pl-8"
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-0 top-1.5 w-6 h-6 bg-white rounded-full border-2 border-pink-100 flex items-center justify-center z-10">
                                     <div className="w-2 h-2 bg-pink-500 rounded-full" />
                                </div>

                                <div className="bg-white/60 backdrop-blur-sm p-5 rounded-2xl border border-white/50 shadow-sm hover:shadow-md transition-all duration-300">
                                    <div className="flex flex-col">
                                        <span className="text-xs font-bold text-pink-600 uppercase tracking-wider mb-1">
                                            {edu.status}
                                        </span>
                                        <h4 className="font-bold text-foreground leading-tight mb-1">
                                            {edu.degree}
                                        </h4>
                                        <p className="text-sm text-foreground-secondary mb-2">
                                            {edu.institution}
                                        </p>
                                        <p className="text-xs text-gray-400 font-medium font-mono">
                                            {edu.year}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Soft Skills Section */}
                <div>
                    <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                        <Sparkles className="text-yellow-500" size={18} />
                        Core Attributes
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {softSkills.map((skill, idx) => (
                            <motion.span 
                                key={idx}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.05 }}
                                className="px-3 py-1.5 bg-white/50 border border-gray-100 rounded-lg text-sm text-foreground-secondary font-medium hover:bg-white hover:shadow-sm hover:text-foreground transition-all duration-200 cursor-default"
                            >
                                {skill}
                            </motion.span>
                        ))}
                    </div>
                </div>

            </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;

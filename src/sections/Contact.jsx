import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Linkedin, Github } from 'lucide-react';
import { useState, useEffect } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        if (response.status === 404) {
          setSubmitStatus({ 
            type: 'error', 
            message: 'Email API is only available in production (Vercel deployment).' 
          });
          return;
        }
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({ type: 'success', message: 'Thank you! Your message has been sent successfully.' });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus({ type: 'error', message: data.error || 'Failed to send message.' });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({ 
        type: 'error', 
        message: 'Something went wrong. Please try again later.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Phone size={20} />,
      title: "Phone",
      value: "+91 7010198963",
      link: "tel:+917010198963"
    },
    {
      icon: <Mail size={20} />,
      title: "Email",
      value: "logeshwaranvelmurugan@gmail.com",
      getLink: () => isMobile 
        ? "mailto:logeshwaranvelmurugan@gmail.com"
        : "https://mail.google.com/mail/?view=cm&fs=1&to=logeshwaranvelmurugan@gmail.com"
    },
    {
      icon: <MapPin size={20} />,
      title: "Location",
      value: "Chennai, Tamil Nadu",
      link: "#"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-background-secondary relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
            
            {/* Left Column: Info */}
            <div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="pill-badge mb-4">
                        <Mail size={14} className="mr-2" />
                        Get In Touch
                    </span>
                    <h2 className="text-4xl font-bold text-foreground mb-6">
                        Let's work together
                    </h2>
                    <p className="text-lg text-foreground-secondary mb-12 max-w-lg">
                        Have a project in mind or want to discuss new opportunities? 
                        I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                    </p>

                    <div className="space-y-8 mb-12">
                        {contactInfo.map((item, index) => (
                            <div key={index} className="flex items-start gap-4">
                                <div className="p-3 bg-white rounded-full text-foreground border border-gray-100 shadow-sm">
                                    {item.icon}
                                </div>
                                <div>
                                    <h3 className="font-bold text-foreground">{item.title}</h3>
                                    {item.getLink ? (
                                        <a href={item.getLink()} className="text-foreground-secondary hover:text-blue-600 transition-colors">
                                            {item.value}
                                        </a>
                                    ) : (
                                        <a href={item.link} className="text-foreground-secondary hover:text-blue-600 transition-colors">
                                            {item.value}
                                        </a>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex gap-4">
                        <a href="https://www.linkedin.com/in/logeshwaran-v-607806230/" target="_blank" rel="noopener noreferrer" className="p-3 bg-white rounded-full text-foreground hover:bg-blue-600 hover:text-white transition-all border border-gray-100 shadow-sm">
                            <Linkedin size={20} />
                        </a>
                        <a href="https://github.com/Logesh6767" target="_blank" rel="noopener noreferrer" className="p-3 bg-white rounded-full text-foreground hover:bg-gray-800 hover:text-white transition-all border border-gray-100 shadow-sm">
                            <Github size={20} />
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Right Column: Form */}
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl"
            >
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-foreground">Name</label>
                            <input 
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                                className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-foreground focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                                placeholder="John Doe"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-foreground">Email</label>
                            <input 
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                                className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-foreground focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                                placeholder="john@example.com"
                            />
                        </div>
                    </div>
                    
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-foreground">Subject</label>
                        <input 
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-foreground focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                            placeholder="Project Discussion"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-foreground">Message</label>
                        <textarea 
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            required
                            rows={4}
                            className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-foreground focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none resize-none"
                            placeholder="Tell me about your project..."
                        />
                    </div>

                    {submitStatus && (
                        <div className={`p-4 rounded-xl text-sm ${
                            submitStatus.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
                        }`}>
                            {submitStatus.message}
                        </div>
                    )}

                    <button 
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full btn-primary flex items-center justify-center gap-2 py-4 text-base"
                    >
                        {isSubmitting ? (
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        ) : (
                            <>Send Message <Send size={18} /></>
                        )}
                    </button>
                </form>
            </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

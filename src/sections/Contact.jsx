import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Linkedin, Github } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

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
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({ type: 'success', message: 'Thank you! Your message has been sent successfully. I\'ll get back to you soon!' });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus({ type: 'error', message: data.error || 'Failed to send message. Please try again.' });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({ type: 'error', message: 'Something went wrong. Please try again later or email me directly.' });
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
      link: "https://mail.google.com/mail/?view=cm&fs=1&to=logeshwaranvelmurugan@gmail.com"
    },
    {
      icon: <MapPin size={20} />,
      title: "Location",
      value: "Chennai, Tamil Nadu",
      link: "#"
    }
  ];

  const socialLinks = [
    {
      icon: <Linkedin size={24} />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/logeshwaran-v-607806230"
    },
    {
      icon: <Github size={24} />,
      name: "GitHub", 
      url: "https://github.com/Logesh6767"
    }
  ];

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 px-4">
            Get In Touch
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-gray-900 mx-auto mb-4 sm:mb-6"></div>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Have a project in mind or want to discuss opportunities? I'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
              Let's Connect
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 leading-relaxed">
              I'm always open to discussing new opportunities, interesting projects, 
              or just having a conversation about technology and development. 
              Feel free to reach out through any of the channels below.
            </p>

            <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-4"
                >
                  <div className="flex items-center space-x-4">
                    {info.link !== '#' ? (
                      <motion.a
                        href={info.link}
                        target={info.title === "Email" ? "_blank" : "_self"}
                        rel={info.title === "Email" ? "noopener noreferrer" : ""}
                        className="block"
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <div className="p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors duration-200">
                          {info.icon}
                        </div>
                      </motion.a>
                    ) : (
                      <div className="p-3 bg-gray-100 rounded-lg">
                        {info.icon}
                      </div>
                    )}
                    <div>
                      <h4 className="font-semibold text-gray-900">{info.title}</h4>
                      <span className="text-gray-600">
                        {info.value}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 bg-gray-100 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-200 transition-all duration-200"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-200"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-200"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-200"
                  placeholder="Project discussion, Job opportunity, etc."
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-200"
                  placeholder="Tell me about your project or what you'd like to discuss..."
                />
              </div>

              {/* Status Message */}
              {submitStatus && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-lg ${
                    submitStatus.type === 'success' 
                      ? 'bg-green-50 text-green-800 border border-green-200' 
                      : 'bg-red-50 text-red-800 border border-red-200'
                  }`}
                >
                  {submitStatus.message}
                </motion.div>
              )}

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                className={`w-full px-8 py-3 rounded-lg font-medium flex items-center justify-center space-x-2 transition-colors duration-200 ${
                  isSubmitting 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-gray-900 text-white hover:bg-gray-800'
                }`}
              >
                <Send size={20} className={isSubmitting ? 'animate-pulse' : ''} />
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16 p-8 bg-gray-900 text-white rounded-xl"
        >
          <h3 className="text-2xl font-bold mb-4">
            Ready to Start Your Next Project?
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Let's work together to bring your ideas to life with modern, scalable, and user-friendly solutions.
          </p>
          <motion.a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=logeshwaranvelmurugan@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-2 bg-white text-gray-900 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200"
          >
            <Mail size={20} />
            <span>Start a Conversation</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
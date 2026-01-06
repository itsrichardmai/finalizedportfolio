import { useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';
import { Mail, Github, Linkedin, Send, MapPin, Phone } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast.success('Message sent successfully!', {
        description: 'Thank you for reaching out. I\'ll get back to you soon.',
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'richardmaichs276@gmail.com',
      href: 'mailto:richardmaichs276@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (415)-316-6679',
      href: 'tel:+4153166679'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'San Francisco, CA',
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/itsrichardmai',
      color: 'hover:text-gray-700 dark:hover:text-gray-300'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: '#',
      color: 'hover:text-blue-600'
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:richardmaichs276@gmail.com',
      color: 'hover:text-red-600'
    }
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="min-h-screen flex items-center justify-center px-6 py-24 bg-gray-50 dark:bg-gray-900"
    >
      <div className="max-w-7xl w-full mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-black dark:text-white">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-black dark:bg-white mx-auto mb-6" />
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white dark:bg-black border-2 border-gray-200 dark:border-gray-800 rounded-lg focus:border-black dark:focus:border-white outline-none transition-colors duration-300 text-black dark:text-white"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white dark:bg-black border-2 border-gray-200 dark:border-gray-800 rounded-lg focus:border-black dark:focus:border-white outline-none transition-colors duration-300 text-black dark:text-white"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-white dark:bg-black border-2 border-gray-200 dark:border-gray-800 rounded-lg focus:border-black dark:focus:border-white outline-none transition-colors duration-300 text-black dark:text-white resize-none"
                  placeholder="Your message..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-8 py-4 bg-black dark:bg-white text-white dark:text-black font-medium rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white dark:border-black border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Contact Details */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-black dark:text-white mb-6">
                Contact Information
              </h3>
              
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                const content = (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    whileHover={{ x: 8 }}
                    className="flex items-start gap-4 p-4 bg-white dark:bg-black border-2 border-gray-200 dark:border-gray-800 rounded-lg hover:border-black dark:hover:border-white transition-all duration-300"
                  >
                    <div className="p-3 bg-gray-100 dark:bg-gray-900 rounded-lg">
                      <Icon className="w-6 h-6 text-black dark:text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                        {info.label}
                      </p>
                      <p className="text-black dark:text-white font-medium">
                        {info.value}
                      </p>
                    </div>
                  </motion.div>
                );

                return info.href ? (
                  <a key={info.label} href={info.href}>
                    {content}
                  </a>
                ) : (
                  <div key={info.label}>{content}</div>
                );
              })}
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-2xl font-bold text-black dark:text-white mb-6">
                Connect With Me
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                      whileHover={{ scale: 1.1, y: -4 }}
                      whileTap={{ scale: 0.9 }}
                      className={`p-4 bg-white dark:bg-black border-2 border-gray-200 dark:border-gray-800 rounded-lg hover:border-black dark:hover:border-white transition-all duration-300 ${social.color}`}
                    >
                      <Icon className="w-6 h-6" />
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Availability Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="p-6 bg-black dark:bg-white text-white dark:text-black rounded-lg"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <p className="font-bold text-lg">Available for Opportunities</p>
              </div>
              <p className="text-sm opacity-80">
                Currently open to freelance projects and full-time positions.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

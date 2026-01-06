import { motion } from 'motion/react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden px-6 pt-20">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-black dark:to-gray-900" />
      
      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <span className="inline-block px-4 py-2 bg-gray-200 dark:bg-gray-800 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 mb-6">
            Software Developer
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 text-black dark:text-white"
        >
          Richard Mai
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          Building elegant solutions with clean code. Specializing in automation, bot development,
          and full-stack web applications. Lifelong learner exploring emerging technologies.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <motion.a
            href="/resume.pdf"
            download="Richard_Mai_Resume.pdf"
            className="px-8 py-4 bg-black dark:bg-white text-white dark:text-black font-medium rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download Resume
          </motion.a>
          
          <motion.a
            href="#contact"
            onClick={(e) => handleScroll(e, '#contact')}
            className="px-8 py-4 border-2 border-black dark:border-white text-black dark:text-white font-medium rounded-lg hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex gap-6 justify-center mb-16"
        >
          <motion.a
            href="https://github.com/itsrichardmai"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-200 dark:bg-gray-800 rounded-full hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors duration-300"
            whileHover={{ scale: 1.1, y: -4 }}
            whileTap={{ scale: 0.9 }}
          >
            <Github className="w-6 h-6 text-black dark:text-white" />
          </motion.a>
          
          <motion.a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-200 dark:bg-gray-800 rounded-full hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors duration-300"
            whileHover={{ scale: 1.1, y: -4 }}
            whileTap={{ scale: 0.9 }}
          >
            <Linkedin className="w-6 h-6 text-black dark:text-white" />
          </motion.a>
          
          <motion.a
            href="#contact"
            onClick={(e) => handleScroll(e, '#contact')}
            className="p-3 bg-gray-200 dark:bg-gray-800 rounded-full hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors duration-300"
            whileHover={{ scale: 1.1, y: -4 }}
            whileTap={{ scale: 0.9 }}
          >
            <Mail className="w-6 h-6 text-black dark:text-white" />
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{
            opacity: { duration: 0.8, delay: 1 },
            y: { duration: 2, repeat: Infinity, ease: 'easeInOut' }
          }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <ArrowDown className="w-6 h-6 text-gray-400 dark:text-gray-600" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

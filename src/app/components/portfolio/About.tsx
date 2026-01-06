import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Code, Rocket, Users } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const stats = [
    { icon: Code, value: '15+', label: 'Projects Completed' },
    { icon: Rocket, value: '14', label: 'Technologies' },
    { icon: Users, value: '5+', label: 'Years Experience' },
  ];

  return (
    <section
      id="about"
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
            About Me
          </h2>
          <div className="w-24 h-1 bg-black dark:bg-white mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I am a software engineer specializing in automation tasks, bot development,
              website development and mobile development (iOS & Android). My workflows combine
              technical expertise with practical solutions tailored for client/business needs first.
              My approach streamlines workflows and enhances user experiences.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I studied MIT at Temple University and Web Development at University of Pennsylvannia. believe in writing clean, maintainable code and staying current with emerging
              technologies. From building custom bots to crafting responsive web applications,
              I deliver solutions tailored to your specific needs.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-6"
            >
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-black dark:bg-white text-white dark:text-black font-medium rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors duration-300"
              >
                View My Work
              </a>
            </motion.div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-6"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="relative group"
                >
                  <div className="p-8 bg-white dark:bg-black border-2 border-gray-200 dark:border-gray-800 rounded-lg hover:border-black dark:hover:border-white transition-all duration-300">
                    <div className="flex items-center gap-6">
                      <div className="p-4 bg-gray-100 dark:bg-gray-900 rounded-lg group-hover:bg-black dark:group-hover:bg-white transition-colors duration-300">
                        <Icon className="w-8 h-8 text-black dark:text-white group-hover:text-white dark:group-hover:text-black transition-colors duration-300" />
                      </div>
                      <div>
                        <div className="text-4xl font-bold text-black dark:text-white mb-1">
                          {stat.value}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                          {stat.label}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
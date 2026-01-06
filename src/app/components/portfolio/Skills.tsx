import { useRef } from 'react';
import { motion, useInView } from 'motion/react';

const skillsData = [
  { name: 'Python', category: 'Language'},
  { name: 'JavaScript', category: 'Language'},
  { name: 'TypeScript', category: 'Language'},
  { name: 'Java', category: 'Language'},
  { name: 'React', category: 'Framework'},
  { name: 'Node.js', category: 'Runtime'},
  { name: 'Next.js', category: 'Framework'},
  { name: 'Git', category: 'Tool'},
  { name: 'MongoDB', category: 'Database'},
  { name: 'PostgreSQL', category: 'Database'},
  { name: 'Supabase', category: 'Backend'},
  { name: 'Tailwind CSS', category: 'Styling'},
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="skills"
      ref={ref}
      className="min-h-screen flex items-center justify-center px-6 py-24 bg-white dark:bg-black"
    >
      <div className="max-w-7xl w-full mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-black dark:text-white">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-black dark:bg-white mx-auto mb-6" />
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              <div className="p-6 bg-gray-50 dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800 rounded-lg hover:border-black dark:hover:border-white transition-all duration-300">
                {/* Skill Header */}
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-black dark:text-white mb-1">
                      {skill.name}
                    </h3>
                    <span className="text-sm text-gray-500 dark:text-gray-500">
                      {skill.category}
                    </span>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="relative h-2 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1, delay: index * 0.05 + 0.3, ease: 'easeOut' }}
                    className="absolute h-full bg-black dark:bg-white rounded-full"
                  />
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent dark:from-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 dark:text-gray-400 mb-4">Also experienced with:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Docker', 'AWS', 'Firebase', 'GraphQL', 'REST APIs', 'CI/CD', 'Selenium', 'TensorFlow'].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-full text-sm text-gray-700 dark:text-gray-300 hover:border-black dark:hover:border-white transition-colors duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

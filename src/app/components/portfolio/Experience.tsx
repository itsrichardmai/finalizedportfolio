import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Briefcase, Calendar } from 'lucide-react';

const experienceData = [
  {
    date: '2021 - Present',
    title: 'Software Developer',
    company: 'Freelancer | Self-Employed',
    description: 'Developed and maintained full-stack applications using modern frameworks. Collaborated with cross-functional teams to deliver high-quality software solutions.',
    achievements: [
      'Built 15+ production applications',
      'Implemented automation solutions saving 95% processing time',
      'Maintained 99.9% uptime for client applications'
    ]
  },
  {
    date: '2022 - 2025',
    title: 'Software Engineer (Entry → Junior → Mid-Level)',
    company: 'Duba Company LLC',
    description: 'Architected and implemented full-stack web applications and scalable hosting for 25+ restaurant locations.',
    achievements: [
      'Improved system availability to 99.9%',
      'Reduced deployment time by 70% through automation',
      'Centralized data management across all locations'
    ]
  },
  {
    date: '2020 - 2021',
    title: 'Software Development Intern',
    company: 'Pennsylvania National Scholars Program',
    description: 'Assisted in developing web applications, learned industry best practices, and gained hands-on experience with modern development tools.',
    achievements: [
      'Contributed to team projects using Agile methodology',
      'Enhanced coding skills through mentorship',
      'Developed foundational understanding of software architecture'
    ]
  }
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="experience"
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
            Experience
          </h2>
          <div className="w-24 h-1 bg-black dark:bg-white mx-auto mb-6" />
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My professional journey in software development
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-800 transform md:-translate-x-1/2" />

          {experienceData.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative mb-12 md:mb-16 ${
                index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto'
              }`}
            >
              {/* Timeline Dot */}
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
                className="absolute left-0 md:left-1/2 top-0 transform md:-translate-x-1/2 w-4 h-4 bg-black dark:bg-white rounded-full border-4 border-white dark:border-black z-10"
              />

              {/* Content Card */}
              <motion.div
                whileHover={{ scale: 1.02, y: -4 }}
                className={`ml-8 md:ml-0 p-6 bg-gray-50 dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800 rounded-lg hover:border-black dark:hover:border-white transition-all duration-300 ${
                  index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'
                }`}
              >
                {/* Date Badge */}
                <div className={`inline-flex items-center gap-2 px-3 py-1 bg-black dark:bg-white text-white dark:text-black rounded-full text-sm font-medium mb-4 ${
                  index % 2 === 0 ? 'md:float-right md:ml-4' : 'md:float-left md:mr-4'
                }`}>
                  <Calendar className="w-4 h-4" />
                  {exp.date}
                </div>

                {/* Company & Title */}
                <div className={`${index % 2 === 0 ? 'md:clear-right' : 'md:clear-left'}`}>
                  <div className="flex items-start gap-2 mb-2">
                    <Briefcase className="w-5 h-5 text-black dark:text-white mt-1 flex-shrink-0" />
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-black dark:text-white mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 font-medium mb-3">
                        {exp.company}
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <ul className={`space-y-2 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                    {exp.achievements.map((achievement, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400"
                      >
                        <span className={`inline-block w-1.5 h-1.5 bg-black dark:bg-white rounded-full mt-2 flex-shrink-0 ${
                          index % 2 === 0 ? 'md:order-2' : ''
                        }`} />
                        <span className="flex-1">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

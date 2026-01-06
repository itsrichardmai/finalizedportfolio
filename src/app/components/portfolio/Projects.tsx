import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';

const projectsData = [
  {
    id: 1,
    title: 'Duba Karaoke SPA',
    description: 'A full-stack professional React website created for Duba Karaoke Pub. Features modern black and gold theme, comprehensive menu system, karaoke room bookings, photo gallery, and email-based reservation system.',
    image: '/projects/project1.jpg',
    tech: ['React', 'Node.js', 'Vite', 'Tailwind CSS', 'EmailJS', 'Figma'],
    liveLink: 'https://dubakaraokepubfinal.vercel.app/',
    githubLink: 'https://github.com/itsrichardmai/DubaKaraokePub2'
  },
  {
    id: 2,
    title: 'DSA Visualizer | AI Leetcode Tutor',
    description: 'An interactive web application that visualizes data structures and algorithms through animations and step-by-step execution with playback controls. Integrating AI Agent for enhanced learning.',
    image: '/projects/project2.jpg',
    tech: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind v4', 'Framer Motion', 'Zustand'],
    liveLink: 'https://dsa-visualiser-three.vercel.app/',
    githubLink: 'https://github.com/itsrichardmai/DSA-Visualizer'
  },
  {
    id: 3,
    title: 'Cryptocurrency AI Analysis/Forecast',
    description: 'Full-stack cryptocurrency forecasting platform with real-time prices, paper trading, news integration, and interactive charts. Under development: AI agent for trend forecasting with TensorFlow.js.',
    image: 'https://images.unsplash.com/photo-1639825752750-5061ded5503b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcnlwdG9jdXJyZW5jeSUyMHRyYWRpbmclMjBjaGFydHN8ZW58MXx8fHwxNzY3Njc5OTU1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    tech: ['Next.js', 'TypeScript', 'Firebase', 'CoinGecko API', 'Recharts', 'Vercel'],
    liveLink: 'https://crypto-dashboard-plum-six.vercel.app/dashboard',
    githubLink: 'https://github.com/itsrichardmai/crypto-dashboard'
  },
  {
    id: 4,
    title: 'Legal Case Management Automation',
    description: 'Achieved 95% time reduction for California law firms with OCR-powered case management. Automated document processing and data extraction from legal documents using Tesseract.js and Supabase.',
    image: 'https://images.unsplash.com/photo-1619771766980-368d32e44b82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWdhbCUyMGRvY3VtZW50cyUyMGF1dG9tYXRpb258ZW58MXx8fHwxNzY3Njc5OTU1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    tech: ['Python', 'OCR', 'Tesseract', 'Supabase', 'Selenium', 'PostgreSQL'],
    liveLink: null,
    githubLink: null
  },
  {
    id: 5,
    title: 'Stardew Valley SMAPI Mod',
    description: 'A SMAPI mod for Stardew Valley that automates the repetitive process of breaking geodes, enhancing gameplay by reducing repetitive tasks. Integrates seamlessly with game mechanics.',
    image: 'https://images.unsplash.com/photo-1566915896913-549d796d2166?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXZlbG9wZXIlMjBjb2RpbmclMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzY3NjU2Mjg3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    tech: ['C#', 'Visual Studio', 'SMAPI', 'Game Modding'],
    liveLink: null,
    githubLink: 'https://github.com/itsrichardmai/SMAPI-StardewValley-GeodeAutomater'
  },
    {
    id: 6,
    title: 'Previous Portfolio Website',
    description: 'This portfolio website rebuilt with sticky nav, smooth fade-in animations, unsplash images, zoom effects, glassmorphism, dark mode, and responsive design using React and Tailwind CSS.',
    image: '/projects/project6.jpg',
    tech: ['React', 'Tailwind CSS', 'Vercel', 'Figma', 'Framer Motion', 'TypeScript' ],
    liveLink: 'https://portfolio-react-nine-topaz.vercel.app/',
    githubLink: 'https://github.com/itsrichardmai/portfolio-react'
  }
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="projects"
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
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-black dark:bg-white mx-auto mb-6" />
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A selection of projects showcasing my expertise in full-stack development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -12 }}
              className="group relative bg-white dark:bg-black border-2 border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden hover:border-black dark:hover:border-white transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative h-56 overflow-hidden bg-gray-100 dark:bg-gray-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white dark:bg-black rounded-full hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors duration-300"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github className="w-5 h-5 text-black dark:text-white" />
                    </a>
                  )}
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white dark:bg-black rounded-full hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors duration-300"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink className="w-5 h-5 text-black dark:text-white" />
                    </a>
                  )}
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-black dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-full text-gray-700 dark:text-gray-300 group-hover:border-black dark:group-hover:border-white transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

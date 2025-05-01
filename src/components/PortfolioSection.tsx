import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  technologies: string[];
  url: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Dawson Home Daycare",
    category: "Website",
    image: "https://images.pexels.com/photos/296301/pexels-photo-296301.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "A professional website for a home daycare service showcasing services, programs, and enrollment information.",
    technologies: ["React", "Next.js", "Tailwind CSS", "Vercel"],
    url: "https://dawson-home-daycare.vercel.app/"
  },
  {
    id: 2,
    title: "ChillGuard",
    category: "Web App",
    image: "https://images.pexels.com/photos/3913025/pexels-photo-3913025.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Smart temperature monitoring and control system with real-time notifications and analytics dashboard.",
    technologies: ["React", "Node.js", "WebSockets", "Chart.js"],
    url: "https://chillguard.vercel.app/"
  },
  {
    id: 3,
    title: "RideSync",
    category: "Web App",
    image: "https://images.pexels.com/photos/385998/pexels-photo-385998.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Ride-sharing platform connecting drivers and passengers with real-time tracking and secure payment system.",
    technologies: ["React", "Firebase", "Google Maps API", "Stripe"],
    url: "https://ridesync.vercel.app/"
  },
  {
    id: 4,
    title: "SmartLink Converter",
    category: "Utility",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "URL shortening and management tool with analytics, QR code generation, and custom branding options.",
    technologies: ["Vue.js", "Express", "MongoDB", "Analytics API"],
    url: "https://smartlink-converter.vercel.app/"
  },
  {
    id: 5,
    title: "DevCoach.me",
    category: "Educational Platform",
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Platform connecting aspiring developers with experienced mentors for personalized coaching and code reviews.",
    technologies: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
    url: "https://dev-coach-me.vercel.app/"
  },
  {
    id: 6,
    title: "BabyDiary",
    category: "Mobile App",
    image: "https://images.pexels.com/photos/235127/pexels-photo-235127.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Comprehensive baby tracking app for parents to monitor feeding, sleep, growth, and developmental milestones.",
    technologies: ["React Native", "Redux", "Node.js", "MongoDB"],
    url: "https://babydiary.vercel.app/"
  }
];

const categories = ["All", ...new Set(projects.map(project => project.category))];

const PortfolioSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 bg-slate-900 relative">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-slate-950 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-slate-950 to-transparent"></div>
        <div className="absolute -top-[30%] right-[20%] w-[40%] h-[40%] rounded-full bg-blue-600/5 blur-3xl"></div>
        <div className="absolute -bottom-[10%] left-[10%] w-[30%] h-[30%] rounded-full bg-teal-600/5 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Recent <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Explore my latest work across different industries and technologies.
            Each project is crafted with attention to detail and focus on user experience.
          </p>
        </div>
        
        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-teal-500 to-blue-500 text-white shadow-lg'
                  : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="group relative overflow-hidden rounded-xl bg-slate-800 hover:shadow-xl transition-all duration-500"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
                <span className="inline-block px-3 py-1 bg-teal-500/20 text-teal-400 text-xs font-medium rounded-full mb-2">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="text-xs bg-slate-700/80 text-gray-300 px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-2">
                  <button
                    onClick={() => setActiveProject(project)}
                    className="inline-flex items-center justify-center gap-2 text-sm font-medium text-white bg-teal-500 hover:bg-teal-600 py-2 px-4 rounded-md transition-colors duration-300"
                  >
                    View Details
                    <ExternalLink className="h-4 w-4" />
                  </button>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 text-sm font-medium text-white bg-slate-700 hover:bg-slate-600 py-2 px-4 rounded-md transition-colors duration-300"
                  >
                    Visit Site
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Project modal */}
        {activeProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setActiveProject(null)}></div>
            <div className="relative bg-slate-900 rounded-xl overflow-hidden max-w-4xl w-full max-h-[90vh] flex flex-col">
              <div className="aspect-video w-full">
                <img 
                  src={activeProject.image} 
                  alt={activeProject.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 overflow-y-auto">
                <h3 className="text-2xl font-bold text-white mb-2">{activeProject.title}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {activeProject.technologies.map((tech, index) => (
                    <span key={index} className="text-xs bg-slate-700 text-gray-300 px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="text-gray-300 mb-6">{activeProject.description}</p>
                <div className="flex gap-3">
                  <button
                    onClick={() => setActiveProject(null)}
                    className="text-sm font-medium text-white bg-slate-700 hover:bg-slate-600 py-2 px-4 rounded-md transition-colors duration-300"
                  >
                    Close
                  </button>
                  <a
                    href={activeProject.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-white bg-teal-500 hover:bg-teal-600 py-2 px-4 rounded-md transition-colors duration-300"
                  >
                    Visit Website
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PortfolioSection;
import React from 'react';
import { 
  Laptop, Smartphone, Palette, LineChart, 
  ShoppingCart, Search, Database, Target 
} from 'lucide-react';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: <Laptop className="h-8 w-8 text-teal-400" />,
    title: 'Website Development',
    description: 'Custom, responsive websites built with modern technologies for optimal performance and user experience.'
  },
  {
    icon: <Smartphone className="h-8 w-8 text-blue-400" />,
    title: 'Mobile-First Design',
    description: 'Designs that look great on all devices, with special focus on mobile performance and usability.'
  },
  {
    icon: <Palette className="h-8 w-8 text-purple-400" />,
    title: 'UI/UX Design',
    description: 'Intuitive user interfaces and seamless user experiences that delight visitors and convert them to customers.'
  },
  {
    icon: <ShoppingCart className="h-8 w-8 text-pink-400" />,
    title: 'E-Commerce Solutions',
    description: 'Powerful online stores with secure payment gateways, inventory management, and customer accounts.'
  },
  {
    icon: <Search className="h-8 w-8 text-yellow-400" />,
    title: 'SEO Optimization',
    description: 'On-page SEO implementation to help your website rank higher in search engine results.'
  },
  {
    icon: <LineChart className="h-8 w-8 text-green-400" />,
    title: 'Performance Optimization',
    description: 'Speed optimizations that improve loading times, user experience, and search engine rankings.'
  },
  {
    icon: <Database className="h-8 w-8 text-red-400" />,
    title: 'CMS Integration',
    description: 'Implementation of content management systems that make it easy to update your website.'
  },
  {
    icon: <Target className="h-8 w-8 text-orange-400" />,
    title: 'Web App Development',
    description: 'Interactive web applications with advanced functionality tailored to your business needs.'
  }
];

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-slate-950 relative">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-[20%] -right-[10%] w-[40%] h-[40%] rounded-full bg-teal-600/5 blur-3xl"></div>
        <div className="absolute -bottom-[10%] -left-[10%] w-[30%] h-[30%] rounded-full bg-blue-600/5 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Complete Web Development <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">Services</span>
          </h2>
          <p className="text-gray-400 text-lg">
            End-to-end solutions for businesses looking to establish a strong online presence.
            From design to deployment, I've got you covered.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-slate-900/80 backdrop-blur-sm p-6 rounded-xl border border-slate-800 hover:border-teal-500/30 transition-all duration-300 group hover:shadow-lg hover:shadow-teal-500/5"
            >
              <div className="mb-4 p-3 bg-slate-800/50 inline-block rounded-lg group-hover:bg-gradient-to-r group-hover:from-teal-500/20 group-hover:to-blue-500/20 transition-all duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-teal-400 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-400">
                {service.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-medium py-3 px-6 rounded-md transition-all duration-300"
          >
            Discuss Your Project
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
import React from 'react';
import { Code, Github, Twitter, Linkedin, Instagram, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-slate-950 relative">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-slate-900 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-16">
          {/* Logo & About */}
          <div className="col-span-1 md:col-span-1">
            <a href="#home" className="flex items-center gap-2 text-white mb-4">
              <Code className="h-8 w-8 text-teal-400" />
              <span className="font-bold text-xl tracking-tight">DevStudio</span>
            </a>
            <p className="text-gray-400 mb-6">
              Crafting beautiful, functional websites that help businesses grow and succeed in the digital world.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors duration-300">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors duration-300">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors duration-300">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors duration-300">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-teal-400 transition-colors duration-300">Home</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-teal-400 transition-colors duration-300">Services</a>
              </li>
              <li>
                <a href="#portfolio" className="text-gray-400 hover:text-teal-400 transition-colors duration-300">Portfolio</a>
              </li>
              <li>
                <a href="#process" className="text-gray-400 hover:text-teal-400 transition-colors duration-300">Process</a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-400 hover:text-teal-400 transition-colors duration-300">Testimonials</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-teal-400 transition-colors duration-300">Contact</a>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div className="col-span-1">
            <h3 className="font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-gray-400 hover:text-teal-400 transition-colors duration-300">Website Development</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-teal-400 transition-colors duration-300">UI/UX Design</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-teal-400 transition-colors duration-300">E-Commerce Solutions</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-teal-400 transition-colors duration-300">Web App Development</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-teal-400 transition-colors duration-300">SEO Optimization</a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div className="col-span-1">
            <h3 className="font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-2">
                <div className="text-teal-400 mt-1">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </div>
                <span className="text-gray-400">(702) 800-0933</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="text-teal-400 mt-1">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <span className="text-gray-400">thekomastore@gmail.com</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="text-teal-400 mt-1">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <span className="text-gray-400">San Francisco, CA</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} DevStudio. All rights reserved.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-gray-300 hover:text-white px-4 py-2 rounded-md transition-all duration-300"
          >
            Back to Top
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
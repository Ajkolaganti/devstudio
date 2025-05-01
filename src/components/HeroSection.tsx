import React from 'react';
import { ArrowRight, Code, PenTool, Globe } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Animated background */}
      <div className="absolute inset-0 bg-slate-900 overflow-hidden">
        <div className="absolute -top-[40%] -left-[40%] w-[80%] h-[80%] rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-3xl"></div>
        <div className="absolute -bottom-[30%] -right-[30%] w-[70%] h-[70%] rounded-full bg-gradient-to-r from-teal-600/20 to-blue-600/20 blur-3xl"></div>
        <div className="absolute top-[20%] left-[60%] w-[40%] h-[40%] rounded-full bg-gradient-to-r from-purple-600/20 to-pink-600/20 blur-3xl"></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('https://cdn.pixabay.com/photo/2017/02/01/16/14/pattern-2030289_1280.png')] bg-repeat opacity-[0.03]"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-6 max-w-xl">
            <div className="inline-flex items-center gap-2 bg-slate-800/70 px-4 py-2 rounded-full backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-teal-400"></span>
              <span className="text-sm text-teal-400 font-medium">Now taking new clients</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">Future-proof</span> web solutions for your business
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300">
              I design and develop modern, responsive websites tailored to your unique business needs. Clean code, mobile optimization, and user-friendly design guaranteed.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-2">
              <a href="#contact" className="flex items-center gap-2 bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white font-medium py-3 px-6 rounded-md shadow-lg hover:shadow-xl transition-all duration-300">
                Get Started
                <ArrowRight className="h-5 w-5" />
              </a>
              <a href="#portfolio" className="flex items-center gap-2 bg-slate-800/80 text-white font-medium py-3 px-6 rounded-md hover:bg-slate-700/80 transition-all duration-300 backdrop-blur-sm">
                View My Work
              </a>
            </div>

            <div className="flex items-center gap-6 pt-4">
              <div className="flex -space-x-2">
                <img className="w-10 h-10 rounded-full border-2 border-slate-900" src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Marcus Johnson, HealthTrack Systems" title="Marcus Johnson" />
                <img className="w-10 h-10 rounded-full border-2 border-slate-900" src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Sophia Thompson, Urban Bloom Boutique" title="Sophia Thompson" />
                <img className="w-10 h-10 rounded-full border-2 border-slate-900" src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Jennifer Martinez, Coastal Eats Café" title="Jennifer Martinez" />
              </div>
              <div className="text-sm text-gray-300">
                <p>Trusted by <span className="text-teal-400 font-medium">50+</span> happy clients</p>
              </div>
            </div>
          </div>
          
          <div className="relative hidden md:block">
            <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-blue-500/10 backdrop-blur-sm rounded-xl transform rotate-6 scale-95"></div>
            <div className="relative bg-slate-800/60 backdrop-blur-md p-6 rounded-xl shadow-2xl border border-slate-700/50">
              <div className="flex items-center gap-1 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-slate-700/50 rounded-lg">
                  <div className="p-2 bg-teal-500/20 rounded-md">
                    <Code className="h-6 w-6 text-teal-400" />
                  </div>
                  <div>
                    <h3 className="text-white text-sm font-medium">Clean Code</h3>
                    <p className="text-gray-400 text-xs">Best practices & performance</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-slate-700/50 rounded-lg">
                  <div className="p-2 bg-blue-500/20 rounded-md">
                    <PenTool className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-white text-sm font-medium">Modern Design</h3>
                    <p className="text-gray-400 text-xs">Beautiful user interfaces</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-slate-700/50 rounded-lg">
                  <div className="p-2 bg-purple-500/20 rounded-md">
                    <Globe className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-white text-sm font-medium">Full Responsive</h3>
                    <p className="text-gray-400 text-xs">Works on all devices</p>
                  </div>
                </div>
                
                <div className="mt-6 bg-gradient-to-r from-slate-900/60 to-slate-800/60 p-4 rounded-md">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-400 text-xs">Project completion</span>
                    <span className="text-teal-400 text-xs font-medium">85%</span>
                  </div>
                  <div className="w-full bg-slate-700/50 rounded-full h-2">
                    <div className="bg-gradient-to-r from-teal-500 to-blue-500 h-2 rounded-full" style={{ width: "85%" }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <div className="text-gray-400 text-sm mb-2">Scroll to explore</div>
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-teal-400 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
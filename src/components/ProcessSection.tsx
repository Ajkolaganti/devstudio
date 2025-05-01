import React, { useState, useEffect, useRef } from 'react';
import { Check, Coffee, Code, Layout, Rocket, MessageSquare } from 'lucide-react';

interface Step {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    id: 1,
    icon: <MessageSquare className="h-6 w-6" />,
    title: "Consultation",
    description: "We start with a detailed discussion to understand your business, goals, target audience, and project requirements."
  },
  {
    id: 2,
    icon: <Layout className="h-6 w-6" />,
    title: "Design",
    description: "I create wireframes and visual designs based on our discussions, refining them with your feedback until they're perfect."
  },
  {
    id: 3,
    icon: <Code className="h-6 w-6" />,
    title: "Development",
    description: "The approved designs come to life with clean, efficient code, responsive layouts, and interactive elements."
  },
  {
    id: 4,
    icon: <Coffee className="h-6 w-6" />,
    title: "Testing",
    description: "Rigorous testing ensures your website works flawlessly across all devices, browsers, and user scenarios."
  },
  {
    id: 5,
    icon: <Rocket className="h-6 w-6" />,
    title: "Launch",
    description: "Your website goes live with careful deployment, ensuring smooth transition and immediate availability to your users."
  },
  {
    id: 6,
    icon: <Check className="h-6 w-6" />,
    title: "Support",
    description: "Ongoing maintenance and support keep your website running optimally, with updates and improvements as needed."
  },
];

const ProcessSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(1);
  const timelineRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (timelineRef.current) {
      observer.observe(timelineRef.current);
    }

    return () => {
      if (timelineRef.current) {
        observer.unobserve(timelineRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setActiveStep((prev) => (prev < steps.length ? prev + 1 : 1));
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [isVisible]);

  return (
    <section id="process" className="py-20 bg-slate-950 relative">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-[10%] left-[30%] w-[40%] h-[40%] rounded-full bg-purple-600/5 blur-3xl"></div>
        <div className="absolute -bottom-[20%] right-[20%] w-[30%] h-[30%] rounded-full bg-teal-600/5 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            My Development <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">Process</span>
          </h2>
          <p className="text-gray-400 text-lg">
            A systematic approach to building your digital presence from initial consultation to launch and beyond.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto" ref={timelineRef}>
          {/* Desktop timeline */}
          <div className="hidden md:block relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-slate-800"></div>
            
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              const isActive = step.id <= activeStep;
              const delay = (step.id - 1) * 0.2;
              
              return (
                <div 
                  key={step.id}
                  className={`flex items-center mb-12 ${
                    isVisible ? 'opacity-100' : 'opacity-0'
                  } transition-all duration-700`}
                  style={{ 
                    transitionDelay: `${delay}s`,
                    transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
                  }}
                >
                  <div className={`w-1/2 ${isEven ? 'pr-12 text-right' : 'pl-12 order-last'}`}>
                    <h3 className="text-xl font-bold mb-2 text-white group-hover:text-teal-400 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-gray-400">{step.description}</p>
                  </div>
                  
                  <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                    <div 
                      className={`w-12 h-12 rounded-full flex items-center justify-center z-10 transition-all duration-500 ${
                        isActive 
                          ? 'bg-gradient-to-r from-teal-500 to-blue-500 text-white shadow-lg shadow-teal-500/20' 
                          : 'bg-slate-800 text-gray-400'
                      }`}
                    >
                      {step.icon}
                    </div>
                  </div>
                  
                  <div className={`w-1/2 ${isEven ? 'pl-12 order-last' : 'pr-12 text-right'}`}></div>
                </div>
              );
            })}
          </div>
          
          {/* Mobile timeline */}
          <div className="md:hidden">
            <div className="relative border-l-2 border-slate-800 ml-6 pl-8 space-y-10">
              {steps.map((step) => {
                const isActive = step.id <= activeStep;
                const delay = (step.id - 1) * 0.2;
                
                return (
                  <div 
                    key={step.id}
                    className={`relative ${
                      isVisible ? 'opacity-100' : 'opacity-0'
                    } transition-all duration-700`}
                    style={{ 
                      transitionDelay: `${delay}s`,
                      transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
                    }}
                  >
                    <div 
                      className={`absolute -left-10 w-8 h-8 rounded-full flex items-center justify-center z-10 transition-all duration-500 ${
                        isActive 
                          ? 'bg-gradient-to-r from-teal-500 to-blue-500 text-white shadow-md shadow-teal-500/20' 
                          : 'bg-slate-800 text-gray-400'
                      }`}
                    >
                      {step.icon}
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-white group-hover:text-teal-400 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-gray-400 text-sm">{step.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
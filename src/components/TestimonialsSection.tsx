import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "CEO",
    company: "FreshBite Restaurant",
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    content: "Working with this developer was an absolute pleasure. They brought our vision to life with a beautiful, functional website that's easy to manage. Our online orders have increased by 40% since launch!",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "Marketing Director",
    company: "TechGrowth Solutions",
    avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    content: "The website redesign exceeded our expectations. Clean code, stunning design, and excellent communication throughout the project. Our conversion rate has improved significantly thanks to the new UX improvements.",
    rating: 5
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    position: "Owner",
    company: "Bloom Boutique",
    avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    content: "As a small business owner, I needed a website that would help me compete with larger companies. The responsive design and e-commerce features have transformed my business, allowing me to reach customers worldwide.",
    rating: 5
  },
  {
    id: 4,
    name: "David Wilson",
    position: "Product Manager",
    company: "FitTrack App",
    avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    content: "The web application developed for our fitness tracking service is robust, user-friendly, and scales beautifully. The attention to detail and technical expertise made all the difference in our product launch.",
    rating: 4
  }
];

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - a : prevIndex - 1
    );
  };

  return (
    <section id="testimonials" className="py-20 bg-slate-900 relative">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-slate-950 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-slate-950 to-transparent"></div>
        <div className="absolute top-[20%] left-[10%] w-[30%] h-[30%] rounded-full bg-teal-600/5 blur-3xl"></div>
        <div className="absolute bottom-[10%] right-[10%] w-[40%] h-[40%] rounded-full bg-blue-600/5 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Client <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">Testimonials</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Don't just take my word for it. Here's what clients have to say about working with me.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* Desktop view */}
          <div className="hidden md:block relative">
            <div className="grid grid-cols-1 gap-6">
              <div className="bg-slate-800/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl">
                <div className="p-8 relative">
                  {/* Quote mark */}
                  <div className="absolute top-6 left-6 text-6xl font-serif text-teal-500/20">❝</div>
                  
                  {/* Rating */}
                  <div className="flex mb-6 justify-end">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-5 w-5 ${
                          i < testimonials[currentIndex].rating 
                            ? 'text-yellow-400 fill-yellow-400' 
                            : 'text-gray-500'
                        }`} 
                      />
                    ))}
                  </div>
                  
                  {/* Content */}
                  <p className="text-gray-300 text-lg italic mb-8 relative z-10">
                    {testimonials[currentIndex].content}
                  </p>
                  
                  {/* Author */}
                  <div className="flex items-center">
                    <img 
                      src={testimonials[currentIndex].avatar} 
                      alt={testimonials[currentIndex].name} 
                      className="w-14 h-14 rounded-full object-cover mr-4 border-2 border-teal-500"
                    />
                    <div>
                      <h4 className="text-white font-medium">{testimonials[currentIndex].name}</h4>
                      <p className="text-gray-400 text-sm">
                        {testimonials[currentIndex].position}, {testimonials[currentIndex].company}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Navigation */}
            <div className="flex justify-center mt-8 space-x-4">
              <button 
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-slate-800 text-gray-300 hover:bg-teal-500 hover:text-white transition-all duration-300"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>
              
              <div className="flex items-center space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      currentIndex === index 
                        ? 'bg-teal-500 w-6' 
                        : 'bg-gray-600 hover:bg-gray-500'
                    }`}
                  ></button>
                ))}
              </div>
              
              <button 
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-slate-800 text-gray-300 hover:bg-teal-500 hover:text-white transition-all duration-300"
              >
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
          
          {/* Mobile view */}
          <div className="md:hidden">
            <div className="bg-slate-800/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl p-6">
              {/* Rating */}
              <div className="flex mb-4 justify-end">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-4 w-4 ${
                      i < testimonials[currentIndex].rating 
                        ? 'text-yellow-400 fill-yellow-400' 
                        : 'text-gray-500'
                    }`} 
                  />
                ))}
              </div>
              
              {/* Content */}
              <p className="text-gray-300 text-base italic mb-6">
                {testimonials[currentIndex].content}
              </p>
              
              {/* Author */}
              <div className="flex items-center">
                <img 
                  src={testimonials[currentIndex].avatar} 
                  alt={testimonials[currentIndex].name} 
                  className="w-10 h-10 rounded-full object-cover mr-3 border-2 border-teal-500"
                />
                <div>
                  <h4 className="text-white font-medium text-sm">{testimonials[currentIndex].name}</h4>
                  <p className="text-gray-400 text-xs">
                    {testimonials[currentIndex].position}, {testimonials[currentIndex].company}
                  </p>
                </div>
              </div>
              
              {/* Navigation */}
              <div className="flex justify-between mt-6">
                <button 
                  onClick={prevTestimonial}
                  className="p-2 rounded-full bg-slate-700 text-gray-300"
                >
                  <ArrowLeft className="h-4 w-4" />
                </button>
                
                <div className="flex items-center space-x-1">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                        currentIndex === index 
                          ? 'bg-teal-500 w-4' 
                          : 'bg-gray-600'
                      }`}
                    ></button>
                  ))}
                </div>
                
                <button 
                  onClick={nextTestimonial}
                  className="p-2 rounded-full bg-slate-700 text-gray-300"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
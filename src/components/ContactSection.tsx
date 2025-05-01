import React, { useState, useRef } from 'react';
import { Phone, Mail, MapPin, Send, Loader } from 'lucide-react';
import emailjs from '@emailjs/browser';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const initialFormState: FormState = {
  name: '',
  email: '',
  subject: '',
  message: ''
};

const ContactSection: React.FC = () => {
  const [formState, setFormState] = useState<FormState>(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);
  const [formError, setFormError] = useState('');
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormError('');
    
    // EmailJS credentials
    const serviceId = 'devStudio';
    const templateId = 'template_b6iwbjh';
    const publicKey = 'idSR3AmpH6LKicBbS';
    
    // Prepare template parameters
    const templateParams = {
      from_name: formState.name,
      from_email: formState.email,
      subject: formState.subject,
      message: formState.message,
      to_email: 'thekomastore@gmail.com'
    };
    
    // Send email using EmailJS
    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('Email sent successfully!', response);
        setIsSubmitting(false);
        setFormSuccess(true);
        setFormState(initialFormState);
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setFormSuccess(false);
        }, 5000);
      })
      .catch((error) => {
        console.error('Email sending failed:', error);
        setIsSubmitting(false);
        setFormError('Failed to send message. Please try again or contact directly via email.');
      });
  };

  return (
    <section id="contact" className="py-20 bg-slate-950 relative">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -bottom-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-teal-600/5 blur-3xl"></div>
        <div className="absolute top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-blue-600/5 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">Connect</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Have a project in mind? Get in touch and let's bring your vision to life.
            I'm ready to help you create a website that exceeds your expectations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-5xl mx-auto">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-slate-900/80 backdrop-blur-sm rounded-xl p-6 hover:shadow-lg hover:shadow-teal-500/5 transition-all duration-300 hover:border-teal-500/20 border border-slate-800">
              <h3 className="text-xl font-bold mb-4 text-white">Contact Information</h3>
              <p className="text-gray-400 mb-6">
                Feel free to reach out using any of these methods. I'm always available to discuss new projects.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-slate-800 rounded-md text-teal-400">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-300">Phone</h4>
                    <p className="text-white">(702) 800-0933</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-slate-800 rounded-md text-teal-400">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-300">Email</h4>
                    <p className="text-white">thekomastore@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-slate-800 rounded-md text-teal-400">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-300">Location</h4>
                    <p className="text-white">San Francisco, CA</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-slate-800/50 rounded-lg">
                <h4 className="text-lg font-medium mb-3 text-white">Availability</h4>
                <p className="text-gray-300 mb-3">Currently accepting new projects</p>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-green-400">Available for work</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact form */}
          <div className="lg:col-span-3 bg-slate-900/80 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-slate-800 hover:shadow-lg hover:shadow-teal-500/5 transition-all duration-300">
            <h3 className="text-xl font-bold mb-4 text-white">Send Me a Message</h3>
            
            {formSuccess && (
              <div className="mb-6 bg-green-500/20 text-green-400 px-4 py-3 rounded-md">
                Thank you for your message! I'll get back to you as soon as possible.
              </div>
            )}
            
            {formError && (
              <div className="mb-6 bg-red-500/20 text-red-400 px-4 py-3 rounded-md">
                {formError}
              </div>
            )}
            
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-slate-800 border border-slate-700 rounded-md py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-slate-800 border border-slate-700 rounded-md py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                    placeholder="johndoe@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-800 border border-slate-700 rounded-md py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                  placeholder="Website Development Project"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  rows={5}
                  required
                  className="w-full bg-slate-800 border border-slate-700 rounded-md py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white font-medium py-3 px-6 rounded-md transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-70"
              >
                {isSubmitting ? (
                  <>
                    <Loader className="h-5 w-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
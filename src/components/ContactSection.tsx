
import { useState } from 'react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

export const ContactSection = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage('Thank you for your message! I\'ll get back to you soon.');
      setFormState({ name: '', email: '', message: '' });
      
      // Clear success message after 5 seconds
      setTimeout(() => setSubmitMessage(''), 5000);
    }, 1500);
  };
  
  return (
    <section 
      id="contact" 
      className="py-20 px-6 lg:px-12 bg-gradient-to-br from-secondary/40 via-white to-secondary/30 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-blue-500/5 to-transparent rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-center mb-12">
          <span className="px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Let's Connect
          </span>
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-center mb-3">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary/40 to-primary rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="animate-slide-in opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            <div className="bg-white/80 backdrop-blur-sm border border-primary/10 rounded-lg p-6 shadow-lg">
              <p className="text-lg mb-8 text-foreground/90">
                Feel free to reach out to me for collaboration, job opportunities, or just to say hello. I'm always open to discussing new projects and ideas.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center group transition-all hover:transform hover:translate-x-2">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/10 to-primary/30 flex items-center justify-center mr-4 group-hover:shadow-md group-hover:from-primary/20 group-hover:to-primary/40 transition-all">
                    <Mail size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <a href="mailto:daksh.java.util@gmail.com" className="hover:text-primary transition-colors gradient-text font-medium">
                      daksh.java.util@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center group transition-all hover:transform hover:translate-x-2">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/10 to-primary/30 flex items-center justify-center mr-4 group-hover:shadow-md group-hover:from-primary/20 group-hover:to-primary/40 transition-all">
                    <Phone size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <a href="tel:+917024892425" className="hover:text-primary transition-colors gradient-text font-medium">
                      +91 7024892425
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center group transition-all hover:transform hover:translate-x-2">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/10 to-primary/30 flex items-center justify-center mr-4 group-hover:shadow-md group-hover:from-primary/20 group-hover:to-primary/40 transition-all">
                    <Github size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">GitHub</p>
                    <a href="https://github.com/gitDaksh" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors gradient-text font-medium">
                      github.com/gitDaksh
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center group transition-all hover:transform hover:translate-x-2">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/10 to-primary/30 flex items-center justify-center mr-4 group-hover:shadow-md group-hover:from-primary/20 group-hover:to-primary/40 transition-all">
                    <Linkedin size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">LinkedIn</p>
                    <a href="https://linkedin.com/in/gitDaksh" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors gradient-text font-medium">
                      linkedin.com/in/gitDaksh
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="animate-slide-in-right opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            <form onSubmit={handleSubmit} className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg border border-primary/10 p-6 hover:shadow-xl transition-all">
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-md border border-input focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 bg-white/80"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-md border border-input focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 bg-white/80"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formState.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-md border border-input focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 bg-white/80"
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 rounded-md bg-gradient-to-r from-primary to-primary/80 text-primary-foreground hover:shadow-lg transition-all disabled:opacity-70 transform hover:translate-y-[-2px]"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              
              {submitMessage && (
                <div className="mt-4 p-3 bg-green-50 text-green-700 rounded-md text-center border border-green-200 shadow-sm">
                  {submitMessage}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};


import { Github, Linkedin, Mail } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 px-6 lg:px-12 bg-gradient-to-t from-secondary/50 to-white border-t border-border dark:bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-xl font-playfair font-semibold group">
              Daksh<span className="text-primary group-hover:text-foreground transition-colors">.</span>
            </h2>
            <p className="text-sm text-muted-foreground mt-1">
              Full-stack Developer
            </p>
          </div>
          
          <div className="flex space-x-4 mb-6 md:mb-0">
            <a 
              href="mailto:daksh.java.util@gmail.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-md bg-white flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all shadow-sm"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
            <a 
              href="https://github.com/gitDaksh" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-md bg-white flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all shadow-sm"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a 
              href="https://linkedin.com/in/gitDaksh" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-md bg-white flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all shadow-sm"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
          </div>
          
          <div className="text-sm text-muted-foreground">
            © {currentYear} Daksh Pushpad. All rights reserved.
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            Designed and built with precision and care, <a href="#hero" className="text-primary hover:text-primary/80 hover:underline">back to top</a>
          </p>
        </div>
      </div>
    </footer>
  );
};


import { Github, Linkedin, Mail } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 px-6 lg:px-12 bg-white border-t border-border dark:bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-xl font-playfair font-semibold">
              Daksh<span className="text-primary">.</span>
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
              className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary/10 transition-colors"
              aria-label="Email"
            >
              <Mail size={18} className="text-foreground" />
            </a>
            <a 
              href="https://github.com/gitDaksh" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary/10 transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} className="text-foreground" />
            </a>
            <a 
              href="https://linkedin.com/in/gitDaksh" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary/10 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} className="text-foreground" />
            </a>
          </div>
          
          <div className="text-sm text-muted-foreground">
            © {currentYear} Daksh Pushpad. All rights reserved.
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>Designed and built with precision and care</p>
        </div>
      </div>
    </footer>
  );
};

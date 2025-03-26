
import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const handleNavLinkClick = () => {
    if (isMenuOpen) setIsMenuOpen(false);
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 lg:px-12",
        isScrolled ? "py-3 bg-background/90 backdrop-blur-md shadow-sm" : "py-5"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#hero" className="text-xl font-playfair font-semibold">
          Daksh<span className="text-primary">.</span>
        </a>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-foreground focus:outline-none" 
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#about" className="link-underline">About</a>
          <a href="#experience" className="link-underline">Experience</a>
          <a href="#projects" className="link-underline">Projects</a>
          <a href="#achievements" className="link-underline">Achievements</a>
          <a href="#contact" className="link-underline">Contact</a>
          <div className="flex items-center space-x-4 ml-4">
            <a 
              href="mailto:daksh.java.util@gmail.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a 
              href="https://github.com/gitDaksh" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://linkedin.com/in/gitDaksh" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </nav>
      </div>
      
      {/* Mobile menu */}
      <div 
        className={cn(
          "fixed inset-0 bg-background/95 backdrop-blur-sm z-40 md:hidden transition-all duration-300 flex flex-col pt-20",
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <nav className="flex flex-col items-center space-y-8 p-8">
          <a href="#about" className="text-xl" onClick={handleNavLinkClick}>About</a>
          <a href="#experience" className="text-xl" onClick={handleNavLinkClick}>Experience</a>
          <a href="#projects" className="text-xl" onClick={handleNavLinkClick}>Projects</a>
          <a href="#achievements" className="text-xl" onClick={handleNavLinkClick}>Achievements</a>
          <a href="#contact" className="text-xl" onClick={handleNavLinkClick}>Contact</a>
          <div className="flex items-center space-x-8 mt-8">
            <a 
              href="mailto:daksh.java.util@gmail.com" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
            <a 
              href="https://github.com/gitDaksh" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://linkedin.com/in/gitDaksh" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

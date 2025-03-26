
import { ChevronDown } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center pt-24 pb-16 px-6 lg:px-12"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 animate-fade-in opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            <div className="mb-4">
              <span className="inline-block py-1 px-3 text-sm rounded-full bg-primary/10 text-primary mb-4">
                Software Developer
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-playfair font-bold text-balance leading-tight">
              Daksh Pushpad
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground mt-6 max-w-2xl">
              Full-stack developer specializing in building exceptional digital experiences with React.js, Next.js, TypeScript and MongoDB.
            </p>
            
            <div className="mt-8 flex flex-wrap gap-4">
              <a 
                href="#experience" 
                className="px-6 py-3 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                View Experience
              </a>
              <a 
                href="#projects"
                className="px-6 py-3 rounded-md bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors"
              >
                See Projects
              </a>
            </div>
          </div>

          <div className="lg:col-span-4 flex justify-center lg:justify-end animate-fade-in opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            <div className="relative">
              <div className="w-60 h-60 sm:w-72 sm:h-72 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center animate-float">
                <div className="text-center p-6">
                  <div className="font-playfair text-xl font-medium">Connect with me</div>
                  <div className="mt-4 text-sm text-center flex flex-col gap-2">
                    <a href="mailto:daksh.java.util@gmail.com" className="hover:text-primary transition-colors">daksh.java.util@gmail.com</a>
                    <a href="tel:+917024892425" className="hover:text-primary transition-colors">+91 7024892425</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block">
          <a href="#about" aria-label="Scroll down">
            <ChevronDown size={32} className="text-foreground/50" />
          </a>
        </div>
      </div>
    </section>
  );
};


import { ChevronDown } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center pt-24 pb-16 px-6 lg:px-12 relative"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 animate-fade-in opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
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

          <div className="lg:col-span-5 animate-fade-in opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            <div className="bg-white shadow-lg rounded-lg border border-border p-5 transform hover:translate-y-[-5px] transition-all duration-300">
              <h3 className="font-playfair text-xl font-medium mb-4 text-foreground border-b pb-2 border-border">Let's Connect</h3>
              <div className="space-y-3">
                <a href="mailto:daksh.java.util@gmail.com" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group">
                  <span className="w-10 h-10 rounded bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                  </span>
                  <span>daksh.java.util@gmail.com</span>
                </a>
                <a href="tel:+917024892425" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group">
                  <span className="w-10 h-10 rounded bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  </span>
                  <span>+91 7024892425</span>
                </a>
                <div className="flex items-center gap-3 mt-4 pt-3 border-t border-border">
                  <a 
                    href="https://github.com/gitDaksh" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded bg-secondary flex items-center justify-center hover:bg-primary/10 transition-colors"
                    aria-label="GitHub"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                  </a>
                  <a 
                    href="https://linkedin.com/in/gitDaksh" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded bg-secondary flex items-center justify-center hover:bg-primary/10 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block">
          <a href="#about" aria-label="Scroll down">
            <ChevronDown size={32} className="text-foreground/50 hover:text-primary transition-colors" />
          </a>
        </div>
      </div>
    </section>
  );
};


import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { ExperienceSection } from '@/components/ExperienceSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { AchievementsSection } from '@/components/AchievementsSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { useEffect } from 'react';

const Index = () => {
  useEffect(() => {
    // Improved smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href')?.substring(1);
        if (!targetId) return;
        
        const targetElement = document.getElementById(targetId);
        if (!targetElement) return;
        
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Offset for header
          behavior: 'smooth'
        });
      });
    });
    
    // Enhanced reveal animations on scroll with better performance
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Check if target is HTMLElement before accessing style
            if (entry.target instanceof HTMLElement) {
              // Apply different animation classes based on data attribute
              const animationType = entry.target.dataset.animation || 'fade-up';
              entry.target.classList.add(`animate-${animationType}`);
              entry.target.style.opacity = '1';
              observer.unobserve(entry.target);
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );
    
    // Apply animations to sections and elements with animation classes
    document.querySelectorAll('.section-heading, .animate-on-scroll').forEach((el, index) => {
      if (el instanceof HTMLElement) {
        // Set initial styles
        el.style.opacity = '0';
        
        // Set animation type as data attribute (could be customized per element)
        el.dataset.animation = 'fade-up';
        
        // Add staggered delay based on index
        el.style.animationDelay = `${0.1 + (index * 0.1)}s`;
        
        // Observe element
        observer.observe(el);
      }
    });
    
    return () => {
      observer.disconnect();
    };
  }, []);
  
  return (
    <div className="min-h-screen w-full bg-background text-foreground">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <AchievementsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

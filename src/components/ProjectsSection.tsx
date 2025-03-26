
import { useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

type Project = {
  title: string;
  year: string;
  description: string;
  technologies: string[];
  links?: {
    github?: string;
    live?: string;
  };
};

export const ProjectsSection = () => {
  const [activeProject, setActiveProject] = useState(0);
  
  const projects: Project[] = [
    {
      title: "GitNova",
      year: "2024",
      description: "An AI-powered GitHub SaaS application built with Next.js, Tailwind CSS, and integrated with Gemini AI, Prisma for database management, for machine learning and Assembly AI for speech-to-text. It leverages Clerk for user authentication, Stripe for payments, and real-time features to enhance code management, collaboration, and developer productivity.",
      technologies: ["Next.js", "Tailwind CSS", "Gemini AI", "Prisma", "Assembly AI", "Clerk", "Stripe"],
      links: {
        github: "https://github.com/gitDaksh"
      }
    },
    {
      title: "VisualVibe",
      year: "2023",
      description: "A full-stack video conferencing web app built with Next.js, Tailwind CSS, and Material-UI, utilizing Stream API for real-time communication and Clerk for secure user authentication, providing a seamless and scalable solution for virtual meetings and collaboration.",
      technologies: ["Next.js", "Tailwind CSS", "Material UI", "Stream API", "Clerk"],
      links: {
        github: "https://github.com/gitDaksh"
      }
    },
    {
      title: "VividlyAI",
      year: "2025",
      description: "An AI SaaS application for image generation and enhancement, built with Next.js, Tailwind CSS, and integrated and OpenAI models for real-time upscaling, style transfer, and AI-driven image manipulation.",
      technologies: ["Next.js", "Tailwind CSS", "OpenAI"],
      links: {
        github: "https://github.com/gitDaksh"
      }
    },
    {
      title: "Portfolio",
      year: "2024",
      description: "A modern, dynamic portfolio built with Next.js, Tailwind CSS, and TypeScript, showcasing a sleek, responsive design with interactive elements powered by Three.js for 3D visuals. The site also integrates technologies like Vercel for deployment, and emailJS for seamless form handling, offering a user-friendly and performance-optimized experience.",
      technologies: ["Next.js", "Tailwind CSS", "TypeScript", "Three.js", "Vercel", "EmailJS"],
      links: {
        github: "https://github.com/gitDaksh"
      }
    }
  ];

  return (
    <section 
      id="projects" 
      className="py-20 px-6 lg:px-12 bg-secondary/30"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="section-heading animate-slide-in opacity-0" style={{ animationFillMode: 'forwards' }}>
          Projects
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4 animate-slide-in opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            <div className="bg-white rounded-lg shadow-sm border border-border overflow-hidden">
              {projects.map((project, index) => (
                <button
                  key={index}
                  className={cn(
                    "w-full text-left p-4 border-l-2 transition-all",
                    activeProject === index 
                      ? "bg-primary/5 border-l-primary" 
                      : "border-l-transparent hover:bg-secondary"
                  )}
                  onClick={() => setActiveProject(index)}
                >
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{project.title}</span>
                    <span className="text-sm text-muted-foreground">{project.year}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-8 animate-slide-in-right opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            {projects.map((project, idx) => (
              <div
                key={idx}
                className={cn(
                  "bg-white rounded-lg shadow-sm border border-border p-6 transition-all duration-300",
                  activeProject === idx 
                    ? "opacity-100 transform translate-y-0" 
                    : "absolute opacity-0 transform translate-y-8 pointer-events-none"
                )}
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-semibold">{project.title}</h3>
                  <div className="flex space-x-3">
                    {project.links?.github && (
                      <a 
                        href={project.links.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-foreground/70 hover:text-primary transition-colors"
                        aria-label="GitHub repository"
                      >
                        <Github size={20} />
                      </a>
                    )}
                    {project.links?.live && (
                      <a 
                        href={project.links.live} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-foreground/70 hover:text-primary transition-colors"
                        aria-label="Live preview"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>
                
                <p className="text-foreground/80 mb-6">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="skills-chip">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

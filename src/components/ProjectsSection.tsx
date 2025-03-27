
import { useState } from 'react';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';

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
        github: "https://github.com/GitDaksh/GitFlow"
      }
    },
    {
      title: "VisualVibe",
      year: "2023",
      description: "A full-stack video conferencing web app built with Next.js, Tailwind CSS, and Material-UI, utilizing Stream API for real-time communication and Clerk for secure user authentication, providing a seamless and scalable solution for virtual meetings and collaboration.",
      technologies: ["Next.js", "Tailwind CSS", "Material UI", "Stream API", "Clerk"],
      links: {
        github: "https://github.com/gitDaksh/visualvibe"
      }
    },
    {
      title: "Fixster",
      year: "2025",
      description: "An AI-powered code debugging and development assistant built with Next.js and TypeScript. It features Web-based AI debugging, a Monaco code editor, multi-language support, and real-time AI assistance using Google Gemini.",
      technologies: ["Next.js", "Tailwind CSS", "Gemini API", "monaco-editor"],
      links: {
        github: "https://github.com/gitDaksh/fixster"
      }
    },
    {
      title: "InterviewX",
      year: "2025",
      description: "An AI-powered interview web app built with Next.js, Tailwind CSS, and ShadCN, featuring real-time voice interactions via Vapi.ai.",
      technologies: ["Next.js", "Tailwind CSS", "TypeScript", "Vapi.ai"],
      links: {
        github: "https://github.com/gitDaksh/interviewx"
      }
    }
  ];

  return (
    <section 
      id="projects" 
      className="py-20 px-6 lg:px-12 bg-gradient-to-b from-secondary/20 to-secondary/40"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="section-heading animate-slide-in opacity-0" style={{ animationFillMode: 'forwards' }}>
          Projects
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4 animate-slide-in opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            <Card className="overflow-hidden bg-white/80 backdrop-blur-sm shadow-md border border-primary/10 rounded-xl">
              {projects.map((project, index) => (
                <button
                  key={index}
                  className={cn(
                    "w-full text-left p-4 border-l-3 transition-all relative",
                    activeProject === index 
                      ? "bg-primary/10 border-l-primary after:absolute after:left-0 after:top-0 after:h-full after:w-[3px] after:bg-primary" 
                      : "border-l-transparent hover:bg-secondary/70"
                  )}
                  onClick={() => setActiveProject(index)}
                >
                  <div className="flex justify-between items-center">
                    <span className={cn(
                      "font-medium transition-colors", 
                      activeProject === index ? "text-primary" : "text-foreground"
                    )}>
                      {project.title}
                    </span>
                    <span className={cn(
                      "text-sm px-2 py-0.5 rounded-full transition-colors", 
                      activeProject === index ? "bg-primary/20 text-primary" : "bg-secondary/70 text-muted-foreground"
                    )}>
                      {project.year}
                    </span>
                  </div>
                </button>
              ))}
            </Card>
          </div>
          
          <div className="lg:col-span-8 animate-slide-in-right opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            {projects.map((project, idx) => (
              <div
                key={idx}
                className={cn(
                  "relative bg-white/80 backdrop-blur-sm rounded-xl shadow-md border border-primary/10 p-6 transition-all duration-300",
                  activeProject === idx 
                    ? "opacity-100 transform translate-y-0" 
                    : "absolute opacity-0 transform translate-y-8 pointer-events-none"
                )}
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/40 via-primary to-primary/40 rounded-t-xl"></div>
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-semibold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                    {project.title}
                  </h3>
                  <div className="flex space-x-3">
                    {project.links?.github && (
                      <a 
                        href={project.links.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-secondary/70 text-foreground/70 hover:bg-primary/20 hover:text-primary transition-colors hover:scale-110 transform duration-200"
                        aria-label="GitHub repository"
                      >
                        <Github size={18} />
                      </a>
                    )}
                    {project.links?.live && (
                      <a 
                        href={project.links.live} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-secondary/70 text-foreground/70 hover:bg-primary/20 hover:text-primary transition-colors hover:scale-110 transform duration-200"
                        aria-label="Live preview"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>
                
                <p className="text-foreground/80 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 rounded-full text-sm bg-gradient-to-r from-secondary/80 to-secondary text-secondary-foreground transition-all hover:from-primary/10 hover:to-primary/20 hover:text-primary cursor-default border border-transparent hover:border-primary/20 shadow-sm"
                      style={{ animationDelay: `${i * 0.05}s` }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="mt-4 flex justify-end">
                  <a 
                    href={project.links?.github || "#"} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm inline-flex items-center group text-primary/80 hover:text-primary"
                  >
                    View project details
                    <ArrowRight size={14} className="ml-1 transform group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

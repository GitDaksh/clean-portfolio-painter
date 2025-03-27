
import { useState } from 'react';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

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

  const getProjectGradient = (index: number) => {
    const gradients = [
      "from-blue-500/20 via-purple-500/20 to-pink-500/20",
      "from-green-500/20 via-teal-500/20 to-cyan-500/20",
      "from-orange-500/20 via-amber-500/20 to-yellow-500/20",
      "from-rose-500/20 via-pink-500/20 to-fuchsia-500/20"
    ];
    return gradients[index % gradients.length];
  };

  return (
    <section 
      id="projects" 
      className="py-20 px-6 lg:px-12 bg-gradient-to-b from-secondary/30 to-white relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-blue-500/5 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-center mb-12">
          <span className="px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            My Work
          </span>
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-center mb-3">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary/40 to-primary rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4 animate-slide-in opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            <Card className="overflow-hidden bg-white/90 backdrop-blur-md shadow-lg border border-primary/10 rounded-xl hover:shadow-xl transition-all">
              {projects.map((project, index) => (
                <button
                  key={index}
                  className={cn(
                    "w-full text-left p-4 border-l-4 transition-all relative",
                    activeProject === index 
                      ? "bg-primary/10 border-l-primary" 
                      : "border-l-transparent hover:bg-gradient-to-r hover:from-secondary/60 hover:to-secondary/20"
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
                      "text-sm px-3 py-1 rounded-full transition-colors", 
                      activeProject === index ? "bg-primary/20 text-primary" : "bg-secondary/80 text-muted-foreground"
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
                  "relative rounded-xl shadow-lg border border-primary/10 p-6 transition-all duration-500",
                  `bg-gradient-to-br ${getProjectGradient(idx)} backdrop-blur-lg`,
                  activeProject === idx 
                    ? "opacity-100 transform translate-y-0 scale-100" 
                    : "absolute opacity-0 transform translate-y-8 scale-95 pointer-events-none"
                )}
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/40 via-primary to-primary/40 rounded-t-xl"></div>
                
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-playfair font-semibold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                    {project.title}
                  </h3>
                  <div className="flex space-x-3">
                    {project.links?.github && (
                      <a 
                        href={project.links.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-white/80 text-foreground hover:bg-primary/20 hover:text-primary transition-all hover:scale-110 transform duration-200 shadow-sm"
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
                        className="p-2 rounded-full bg-white/80 text-foreground hover:bg-primary/20 hover:text-primary transition-all hover:scale-110 transform duration-200 shadow-sm"
                        aria-label="Live preview"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>
                
                <div className="bg-white/70 backdrop-blur-sm p-4 rounded-lg mb-6 shadow-sm">
                  <p className="text-foreground/90 leading-relaxed">
                    {project.description}
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 rounded-full text-sm bg-white/70 text-primary/90 shadow-sm border border-primary/10 transition-all hover:bg-primary/10 hover:border-primary/30 cursor-default"
                      style={{ 
                        animationDelay: `${i * 0.05}s`,
                        transform: `translateY(${(i % 3) * 2}px)` 
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="mt-4 flex justify-end">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    asChild
                    className="text-sm text-primary/90 hover:text-primary hover:bg-primary/10 group"
                  >
                    <a 
                      href={project.links?.github || "#"} 
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View project details
                      <ArrowRight size={14} className="ml-1 transform group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

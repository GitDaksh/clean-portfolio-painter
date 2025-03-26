
import { BriefcaseIcon, Calendar } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

type Experience = {
  company: string;
  position: string;
  period: string;
  description: string[];
  technologies: string[];
};

export const ExperienceSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const experienceRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  const experiences: Experience[] = [
    {
      company: "Zidio Development",
      position: "SDE (Full Stack) Intern",
      period: "Jan 2025 - Present",
      description: [
        "Developing a Task Management application for task organization, progress tracking, and team collaboration.",
      ],
      technologies: ["React.js", "MongoDB", "TailwindCSS", "Typescript"]
    },
    {
      company: "Cloud Counselage Pvt. Ltd.",
      position: "SDE Intern",
      period: "July 2024 - October 2024",
      description: [
        "Successfully developed and deployed a social networking site application similar to LinkedIn.",
        "Gained comprehensive experience in various fields of software development, including frontend technologies (React, Bootstrap), backend technologies (Node.js, Express), database management (MongoDB, SQL), and user experience design.",
        "Engineered advanced features for enhanced user engagement and interaction, utilizing RESTful APIs, and optimized algorithms, resulting in a significant increase in user retention."
      ],
      technologies: ["Next.js", "React.js", "TailwindCSS", "MongoDB", "RestAPIs", "MaterialUI"]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = experienceRefs.current.findIndex(ref => ref === entry.target);
            if (index !== -1) {
              setActiveIndex(index);
            }
          }
        });
      },
      { threshold: 0.6 }
    );

    experienceRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      experienceRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section 
      id="experience" 
      className="py-20 px-6 lg:px-12"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="section-heading animate-slide-in opacity-0" style={{ animationFillMode: 'forwards' }}>
          Work Experience
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Mobile experience selector */}
          <div className="lg:hidden col-span-1 mb-8">
            <div className="bg-white rounded-lg shadow-sm border border-border overflow-hidden">
              {experiences.map((exp, index) => (
                <button
                  key={index}
                  className={cn(
                    "w-full text-left px-4 py-3 transition-colors border-l-2",
                    activeIndex === index 
                      ? "bg-primary/5 border-l-primary" 
                      : "border-l-transparent hover:bg-secondary"
                  )}
                  onClick={() => setActiveIndex(index)}
                >
                  {exp.company}
                </button>
              ))}
            </div>
          </div>
          
          {/* Desktop experience selector */}
          <div className="hidden lg:block lg:col-span-3">
            <div className="sticky top-24 bg-white rounded-lg shadow-sm border border-border overflow-hidden">
              {experiences.map((exp, index) => (
                <button
                  key={index}
                  className={cn(
                    "w-full text-left px-4 py-3 transition-colors border-l-2",
                    activeIndex === index 
                      ? "bg-primary/5 border-l-primary" 
                      : "border-l-transparent hover:bg-secondary"
                  )}
                  onClick={() => setActiveIndex(index)}
                >
                  {exp.company}
                </button>
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-9">
            {experiences.map((experience, idx) => (
              <div
                key={idx}
                ref={(el) => (experienceRefs.current[idx] = el)}
                className={cn(
                  "bg-white rounded-lg shadow-sm border border-border p-6 mb-6 transition-all",
                  activeIndex === idx ? "opacity-100 transform translate-x-0" : "lg:opacity-50"
                )}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">{experience.position}</h3>
                    <div className="flex items-center mt-1">
                      <BriefcaseIcon size={16} className="text-primary mr-2" />
                      <span className="text-muted-foreground">{experience.company}</span>
                    </div>
                  </div>
                  <div className="flex items-center mt-2 sm:mt-0">
                    <Calendar size={16} className="text-primary mr-2" />
                    <span className="text-muted-foreground">{experience.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-2 list-disc pl-5 text-foreground/80">
                  {experience.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
                
                <div className="mt-6 flex flex-wrap gap-2">
                  {experience.technologies.map((tech, i) => (
                    <span key={i} className="skills-chip">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <div className="inline-block py-1 px-3 text-sm rounded-full bg-primary/10 text-primary">
            Education
          </div>
          
          <div className="mt-8 bg-white rounded-lg shadow-sm border border-border p-6 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold">B.E. in Computer Science and Engineering</h3>
            <p className="text-muted-foreground">(Specialization in AI and ML)</p>
            <div className="flex items-center justify-center mt-3">
              <span className="font-medium">Chandigarh University</span>
              <span className="mx-2">•</span>
              <span className="text-muted-foreground">Aug 2023 - Jun 2027</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


import { useState } from 'react';
import { Code, Database, Layout } from 'lucide-react';

export const AboutSection = () => {
  const [activeTab, setActiveTab] = useState<'languages' | 'technologies'>('languages');

  const languages = [
    "TypeScript", "Java", "JavaScript", "C++", "Python", "SQL"
  ];

  const technologies = [
    "Next.js", "React.js", "TailwindCSS", "Express.js", "Three.js", "MySQL", 
    "PostgreSQL", "MongoDB", "Docker", "AWS", "Git", "RestAPIs", 
    "WebSockets", "Stripe", "Hoppscotch"
  ];

  return (
    <section 
      id="about" 
      className="py-20 px-6 lg:px-12 bg-secondary/30"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="section-heading animate-on-scroll">
          About Me
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 animate-on-scroll">
            <p className="text-lg leading-relaxed mb-6">
              I'm a passionate full-stack developer with expertise in building modern web applications. 
              Currently pursuing my B.E. in Computer Science and Engineering with a specialization in AI and ML at 
              Chandigarh University, I bring a strong foundation in software development complemented by practical 
              experience through internships at Cloud Counselage Pvt. Ltd. and Zidio Development.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-lg bg-white shadow-sm border border-border flex flex-col items-center text-center hover:shadow-md hover:border-primary/30 transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                  <Layout size={24} className="text-primary" />
                </div>
                <h3 className="font-medium mb-2">Frontend Development</h3>
                <p className="text-sm text-muted-foreground">Creating beautiful, responsive interfaces with React and Next.js</p>
              </div>
              
              <div className="p-4 rounded-lg bg-white shadow-sm border border-border flex flex-col items-center text-center hover:shadow-md hover:border-primary/30 transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                  <Code size={24} className="text-primary" />
                </div>
                <h3 className="font-medium mb-2">Backend Development</h3>
                <p className="text-sm text-muted-foreground">Building robust APIs and services with Express.js and Node.js</p>
              </div>
              
              <div className="p-4 rounded-lg bg-white shadow-sm border border-border flex flex-col items-center text-center hover:shadow-md hover:border-primary/30 transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                  <Database size={24} className="text-primary" />
                </div>
                <h3 className="font-medium mb-2">Database Management</h3>
                <p className="text-sm text-muted-foreground">Designing and optimizing database systems with MongoDB and SQL</p>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-5 animate-on-scroll">
            <div className="bg-white rounded-lg shadow-sm border border-border p-5 hover:shadow-md transition-all duration-300">
              <div className="flex space-x-2 mb-4">
                <button 
                  className={`px-4 py-2 rounded-md transition-colors ${activeTab === 'languages' ? 'bg-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground hover:bg-secondary/70'}`}
                  onClick={() => setActiveTab('languages')}
                >
                  Languages
                </button>
                <button 
                  className={`px-4 py-2 rounded-md transition-colors ${activeTab === 'technologies' ? 'bg-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground hover:bg-secondary/70'}`}
                  onClick={() => setActiveTab('technologies')}
                >
                  Technologies & Tools
                </button>
              </div>
              
              <div className="min-h-[180px]">
                {activeTab === 'languages' ? (
                  <div className="flex flex-wrap gap-2">
                    {languages.map((language, index) => (
                      <span 
                        key={language} 
                        className="skills-chip" 
                        style={{ animationDelay: `${0.1 * index}s` }}
                      >
                        {language}
                      </span>
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-wrap gap-2">
                    {technologies.map((tech, index) => (
                      <span 
                        key={tech} 
                        className="skills-chip" 
                        style={{ animationDelay: `${0.05 * index}s` }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

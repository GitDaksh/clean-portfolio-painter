
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
      className="py-20 px-6 lg:px-12 bg-gradient-to-b from-secondary/50 via-white to-secondary/30 relative"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-[10%] w-72 h-72 rounded-full bg-blue-500/5 blur-3xl"></div>
        <div className="absolute bottom-20 left-[5%] w-80 h-80 rounded-full bg-purple-500/5 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-32 bg-gradient-to-r from-transparent via-primary/5 to-transparent"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-center mb-10">
          <span className="px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            About Me
          </span>
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-center mb-3">
            Who I Am
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary/40 to-primary rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 animate-on-scroll">
            <p className="text-lg leading-relaxed mb-6 bg-white/60 backdrop-blur-sm p-6 rounded-lg shadow-sm border border-primary/10">
              I'm a passionate full-stack developer with expertise in building modern web applications. 
              Currently pursuing my B.E. in Computer Science and Engineering with a specialization in AI and ML at 
              Chandigarh University, I bring a strong foundation in software development complemented by practical 
              experience through internships at Cloud Counselage Pvt. Ltd. and Zidio Development.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-5 rounded-lg bg-gradient-to-br from-white to-secondary/20 shadow-lg border border-primary/10 flex flex-col items-center text-center hover:shadow-xl hover:border-primary/30 transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/20 to-blue-500/20 flex items-center justify-center mb-3">
                  <Layout size={24} className="text-primary" />
                </div>
                <h3 className="font-medium mb-2 text-gradient-primary">Frontend Development</h3>
                <p className="text-sm text-foreground/80">Creating beautiful, responsive interfaces with React and Next.js</p>
              </div>
              
              <div className="p-5 rounded-lg bg-gradient-to-br from-white to-secondary/20 shadow-lg border border-primary/10 flex flex-col items-center text-center hover:shadow-xl hover:border-primary/30 transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center mb-3">
                  <Code size={24} className="text-primary" />
                </div>
                <h3 className="font-medium mb-2 text-gradient-primary">Backend Development</h3>
                <p className="text-sm text-foreground/80">Building robust APIs and services with Express.js and Node.js</p>
              </div>
              
              <div className="p-5 rounded-lg bg-gradient-to-br from-white to-secondary/20 shadow-lg border border-primary/10 flex flex-col items-center text-center hover:shadow-xl hover:border-primary/30 transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/20 to-indigo-500/20 flex items-center justify-center mb-3">
                  <Database size={24} className="text-primary" />
                </div>
                <h3 className="font-medium mb-2 text-gradient-primary">Database Management</h3>
                <p className="text-sm text-foreground/80">Designing and optimizing database systems with MongoDB and SQL</p>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-5 animate-on-scroll">
            <div className="bg-gradient-to-br from-white via-white to-secondary/30 rounded-lg shadow-lg border border-primary/10 p-5 hover:shadow-xl transition-all duration-300 backdrop-blur-sm">
              <div className="flex space-x-2 mb-4">
                <button 
                  className={`px-4 py-2 rounded-md transition-colors ${activeTab === 'languages' ? 'bg-gradient-to-r from-primary to-primary/80 text-primary-foreground' : 'bg-secondary/80 text-secondary-foreground hover:bg-secondary/60'}`}
                  onClick={() => setActiveTab('languages')}
                >
                  Languages
                </button>
                <button 
                  className={`px-4 py-2 rounded-md transition-colors ${activeTab === 'technologies' ? 'bg-gradient-to-r from-primary to-primary/80 text-primary-foreground' : 'bg-secondary/80 text-secondary-foreground hover:bg-secondary/60'}`}
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
                        className="px-3 py-1 rounded-full text-sm bg-gradient-to-r from-secondary to-secondary/50 text-secondary-foreground transition-all hover:shadow-md hover:from-primary/10 hover:to-secondary/40 hover:text-primary cursor-default border border-transparent hover:border-primary/20 transform hover:scale-105" 
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
                        className="px-3 py-1 rounded-full text-sm bg-gradient-to-r from-secondary to-secondary/50 text-secondary-foreground transition-all hover:shadow-md hover:from-primary/10 hover:to-secondary/40 hover:text-primary cursor-default border border-transparent hover:border-primary/20 transform hover:scale-105" 
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

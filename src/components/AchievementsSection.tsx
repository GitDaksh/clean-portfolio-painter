
import { Award, BookOpen, Code, Github } from 'lucide-react';

export const AchievementsSection = () => {
  const achievements = [
    "Ranked in the top 1% globally on LeetCode, with a contest rating of 1800, Expert on Codeforces and a 6-star rating in Algorithms on HackerRank.",
    "Multiple certifications, including Google Data Analytics, IBM, Meta, Oracle, and Harvard's CS50.",
    "Machine Learning and Deep Learning Specialization on Coursera.",
    "Earned numerous badges across platforms such as LeetCode, with achievements in algorithms, databases, and problem-solving, as well as 6 stars in Algorithms on HackerRank, 4 stars on CodeChef, over 300 problems solved on GeeksforGeeks, and recognition for excellence on TopCoder and Codeforces.",
    "Active contributor on GitHub, with multiple repositories featuring cutting-edge web applications, AI models, and full-stack solutions. Notable contributions include optimizing algorithms, implementing advanced features, and maintaining high-quality, scalable code in high-impact open-source projects, driving innovation and collaboration in the developer community."
  ];

  return (
    <section 
      id="achievements" 
      className="py-20 px-6 lg:px-12 bg-gradient-to-b from-white via-secondary/20 to-white relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-blue-500/5 blur-3xl"></div>
        <div className="decorative-dots absolute inset-0 opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-center mb-12">
          <span className="px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Professional Growth
          </span>
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-center mb-3">
            Achievements & Certifications
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary/40 to-primary rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-6 animate-slide-in opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            <ul className="space-y-6">
              {achievements.slice(0, 3).map((achievement, idx) => (
                <li 
                  key={idx}
                  className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg border border-primary/10 p-5 flex hover:shadow-xl transition-all duration-300 hover:border-primary/30 transform hover:-translate-y-1"
                >
                  <div className="mr-4 mt-1">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/10 to-primary/30 flex items-center justify-center">
                      {idx === 0 ? (
                        <Award size={24} className="text-primary" />
                      ) : idx === 1 ? (
                        <BookOpen size={24} className="text-primary" />
                      ) : (
                        <Code size={24} className="text-primary" />
                      )}
                    </div>
                  </div>
                  <div className="text-foreground/90">
                    {achievement}
                  </div>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="lg:col-span-6 animate-slide-in-right opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            <ul className="space-y-6">
              {achievements.slice(3).map((achievement, idx) => (
                <li 
                  key={idx + 3}
                  className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg border border-primary/10 p-5 flex hover:shadow-xl transition-all duration-300 hover:border-primary/30 transform hover:-translate-y-1"
                >
                  <div className="mr-4 mt-1">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/10 to-primary/30 flex items-center justify-center">
                      {idx === 0 ? (
                        <Code size={24} className="text-primary" />
                      ) : (
                        <Github size={24} className="text-primary" />
                      )}
                    </div>
                  </div>
                  <div className="text-foreground/90">
                    {achievement}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

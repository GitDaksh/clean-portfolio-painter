
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
      className="py-20 px-6 lg:px-12"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="section-heading animate-slide-in opacity-0" style={{ animationFillMode: 'forwards' }}>
          Achievements & Certifications
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-6 animate-slide-in opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            <ul className="space-y-6">
              {achievements.slice(0, 3).map((achievement, idx) => (
                <li 
                  key={idx}
                  className="bg-white rounded-lg shadow-sm border border-border p-5 flex"
                >
                  <div className="mr-4 mt-1">
                    {idx === 0 ? (
                      <Award size={24} className="text-primary" />
                    ) : idx === 1 ? (
                      <BookOpen size={24} className="text-primary" />
                    ) : (
                      <Code size={24} className="text-primary" />
                    )}
                  </div>
                  <div>
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
                  className="bg-white rounded-lg shadow-sm border border-border p-5 flex"
                >
                  <div className="mr-4 mt-1">
                    {idx === 0 ? (
                      <Code size={24} className="text-primary" />
                    ) : (
                      <Github size={24} className="text-primary" />
                    )}
                  </div>
                  <div>
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

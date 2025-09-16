import React from 'react';
import { portfolioData } from '@/data/portfolio';
import { Code, Database, Cloud, Palette } from 'lucide-react';

const SkillsSection: React.FC = () => {
  const getIconForCategory = (category: string) => {
    switch (category.toLowerCase()) {
      case 'frontend':
        return <Code className="h-6 w-6" />;
      case 'backend':
        return <Database className="h-6 w-6" />;
      case 'devops & tools':
        return <Cloud className="h-6 w-6" />;
      case 'design':
        return <Palette className="h-6 w-6" />;
      default:
        return <Code className="h-6 w-6" />;
    }
  };

  const getGradientForCategory = (index: number) => {
    const gradients = [
      'from-primary to-primary-glow',
      'from-accent to-accent-glow',
      'from-purple-500 to-pink-500',
      'from-orange-500 to-red-500'
    ];
    return gradients[index % gradients.length];
  };

  return (
    <section className="modern-section">
      <div className="modern-container">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {portfolioData.skills.map((skillGroup, index) => (
              <div key={skillGroup.category} className="modern-card p-8 group">
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${getGradientForCategory(index)} text-white mr-4 group-hover:scale-110 transition-transform`}>
                    {getIconForCategory(skillGroup.category)}
                  </div>
                  <h3 className="text-2xl font-semibold text-primary group-hover:text-accent transition-colors">
                    {skillGroup.category}
                  </h3>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  {skillGroup.items.map((skill) => (
                    <div
                      key={skill}
                      className="bg-secondary/30 hover:bg-secondary/60 text-secondary-foreground px-4 py-3 rounded-lg text-center font-medium transition-all duration-300 hover:scale-105 hover:shadow-md cursor-default"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <div className="modern-card p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-semibold mb-4 text-primary">
                Always Learning
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Technology evolves rapidly, and I'm passionate about staying current with the latest trends and best practices. 
                Currently exploring WebAssembly, GraphQL, and serverless architectures to expand my skill set.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
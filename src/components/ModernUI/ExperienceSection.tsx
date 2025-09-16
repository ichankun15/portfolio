import React from 'react';
import { portfolioData } from '@/data/portfolio';
import { Building, Calendar } from 'lucide-react';

const ExperienceSection: React.FC = () => {
  return (
    <section className="modern-section">
      <div className="modern-container">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Experience
          </h2>
          
          <div className="space-y-8">
            {portfolioData.experience.map((exp, index) => (
              <div key={exp.id} className="modern-card p-8 group hover:scale-[1.02] transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-primary mb-2 group-hover:text-accent transition-colors">
                      {exp.title}
                    </h3>
                    <div className="flex items-center text-muted-foreground mb-2">
                      <Building className="h-4 w-4 mr-2" />
                      <span className="font-medium">{exp.company}</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <span className="bg-gradient-to-r from-primary/10 to-accent/10 text-primary border border-primary/20 px-3 py-1 rounded-full text-sm font-medium">
                      Position {index + 1}
                    </span>
                  </div>
                </div>
                
                <div className="mb-6">
                  <ul className="space-y-2">
                    {exp.description.map((desc, descIndex) => (
                      <li key={descIndex} className="text-muted-foreground leading-relaxed flex items-start">
                        <span className="text-accent mr-3 mt-2">•</span>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-secondary/50 text-secondary-foreground px-3 py-1 rounded-full text-sm font-medium hover:bg-primary/10 hover:text-primary transition-colors"
                    >
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

export default ExperienceSection;
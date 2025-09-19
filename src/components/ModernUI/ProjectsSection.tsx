import React from 'react';
import { useNavigate } from 'react-router-dom';
import { portfolioData } from '@/data/portfolio';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Sparkles, Eye } from 'lucide-react';

const ProjectsSection: React.FC = () => {
  const navigate = useNavigate();

  const handleViewProject = (projectId: string) => {
    navigate(`/portfolio/projects/${projectId}`);
  };

  return (
    <section className="modern-section bg-background/50">
      <div className="modern-container">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Featured Projects
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioData.projects.map((project) => (
              <div key={project.id} className="modern-card p-6 group hover:scale-105 transition-all duration-500">
                {/* Project Image Placeholder */}
                <div className="w-full h-48 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg mb-6 flex items-center justify-center relative overflow-hidden">
                  <Sparkles className="h-12 w-12 text-primary/40" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                
                <h3 className="text-xl font-semibold mb-3 text-primary group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="bg-secondary/50 text-secondary-foreground px-2 py-1 rounded-md text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="bg-accent/10 text-accent px-2 py-1 rounded-md text-xs font-medium">
                      +{project.tech.length - 4} more
                    </span>
                  )}
                </div>
                
                {/* Project Actions */}
                <div className="space-y-3">
                  {/* View Details Button */}
                  <Button
                    onClick={() => handleViewProject(project.id)}
                    variant="default"
                    size="sm"
                    className="w-full bg-primary hover:bg-primary/90"
                  >
                    <Eye className="h-4 w-4 mr-2" />
                    View Details
                  </Button>
                  
                  {/* External Links */}
                  <div className="flex space-x-3">
                    {project.github && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 hover:bg-primary/10 hover:border-primary"
                        asChild
                      >
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    )}
                    
                    {project.demo && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 hover:bg-accent/10 hover:border-accent"
                        asChild
                      >
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" className="modern-btn-primary">
              <Github className="mr-2 h-5 w-5" />
              <a href="https://github.com/ichankun15" target="_blank">View More on GitHub</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
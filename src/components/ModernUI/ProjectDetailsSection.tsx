import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ExternalLink, Github, Code, Zap } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';

interface ProjectDetailsSectionProps {
  project: {
    id: string;
    title: string;
    description: string;
    tech: string[];
    github?: string;
    demo?: string;
  };
}

const ProjectDetailsSection: React.FC<ProjectDetailsSectionProps> = ({ project }) => {
  const navigate = useNavigate();

  // Create enhanced project data for display
  const enhancedProject = {
    ...project,
    // Add some default values for missing fields
    image: "/api/placeholder/800/400",
    longDescription: project.description + " This project showcases modern development practices, clean code architecture, and user-centered design principles. It demonstrates proficiency in full-stack development and attention to detail in both functionality and user experience.",
    features: [
      "Modern, responsive user interface",
      "Clean and maintainable code structure",
      "Performance optimized implementation",
      "Cross-platform compatibility",
      "Scalable architecture design"
    ],
  };

  return (
    <div className="container mx-auto px-6">
      {/* Project Header */}
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          {enhancedProject.title}
        </h1>
        <p className="text-xl text-muted-foreground mb-6">
          {enhancedProject.description}
        </p>
        
        <div className="flex flex-wrap gap-4 mb-8">
          {enhancedProject.demo && (
            <a
              href={enhancedProject.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              <ExternalLink size={20} />
              View Live Demo
            </a>
          )}
          {enhancedProject.github && (
            <a
              href={enhancedProject.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 border border-border rounded-lg hover:bg-accent transition-colors"
            >
              <Github size={20} />
              View Source Code
            </a>
          )}
        </div>
        
        {/* Technology Stack */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
            <Code size={20} className="text-primary" />
            Technology Stack
          </h3>
          <div className="flex flex-wrap gap-2">
            {enhancedProject.tech.map((tech) => (
              <span
                key={tech}
                // fix the ui color for this tech stack list
                className="px-3 py-1 bg-accent/20 text-accent-foreground rounded-full text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Project Image */}
      <div className="mb-12">
        <div className="w-full h-96 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl border border-border flex items-center justify-center relative overflow-hidden">
          <div className="text-center">
            <Zap className="h-16 w-16 text-primary/40 mx-auto mb-4" />
            <p className="text-muted-foreground">Project Screenshot</p>
            <p className="text-sm text-muted-foreground/60">Coming Soon</p>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
        </div>
      </div>

      {/* Project Content */}
      <div className="grid md:grid-cols-3 gap-12">
        <div className="md:col-span-2">
          <h2 className="text-2xl font-semibold mb-4">About This Project</h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            {enhancedProject.longDescription}
          </p>
          
          {/* Technical Highlights */}
          <div className="bg-muted/30 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-semibold mb-3">Technical Highlights</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {enhancedProject.tech.slice(0, 6).map((tech) => (
                <div key={tech} className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-sm text-muted-foreground">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Zap size={20} className="text-accent" />
            Key Features
          </h3>
          <ul className="space-y-3">
            {enhancedProject.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span className="text-muted-foreground text-sm leading-relaxed">{feature}</span>
              </li>
            ))}
          </ul>
          
          {/* Project Info */}
          <div className="mt-8 p-4 bg-accent/5 rounded-lg border border-accent/20">
            <h4 className="font-semibold mb-3 text-accent">Project Info</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Code size={14} />
                <span>{enhancedProject.tech.length} Technologies Used</span>
              </div>
              {enhancedProject.github && (
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Github size={14} />
                  <span>Open Source Available</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Related Projects Section */}
      <div className="mt-16 pt-12 border-t border-border">
        <h3 className="text-2xl font-semibold mb-8 text-center">More Projects</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.projects
            .filter(p => p.id !== project.id)
            .slice(0, 3)
            .map((relatedProject) => (
              <div
                key={relatedProject.id}
                onClick={() => navigate(`/portfolio/projects/${relatedProject.id}`)}
                className="p-4 border border-border rounded-lg hover:bg-accent/5 transition-colors cursor-pointer"
              >
                <h4 className="font-semibold mb-2 text-primary">{relatedProject.title}</h4>
                <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                  {relatedProject.description}
                </p>
                <div className="flex flex-wrap gap-1">
                  {relatedProject.tech.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-secondary/30 text-secondary-foreground rounded text-xs"
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
  );
};

export default ProjectDetailsSection;
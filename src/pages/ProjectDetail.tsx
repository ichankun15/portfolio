import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';
import ProjectDetailsSection from '@/components/ModernUI/ProjectDetailsSection';

const ProjectDetail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Find the project from portfolio data
  const project = portfolioData.projects.find(p => p.id === id);

  // If project not found, show error message
  if (!project) {
    return (
      <div className="min-h-screen py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <p className="text-muted-foreground mb-8">The project you're looking for doesn't exist.</p>
          <button
            onClick={() => navigate('/projects')}
            className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mx-auto"
          >
            <ArrowLeft size={20} />
            Back to Projects
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20">
      {/* Back Button */}
      <div className="container mx-auto px-6">
        <button
          onClick={() => navigate('/projects')}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft size={20} />
          Back to Projects
        </button>
      </div>

      {/* Project Details Section */}
      <ProjectDetailsSection project={project} />
    </div>
  );
};

export default ProjectDetail;
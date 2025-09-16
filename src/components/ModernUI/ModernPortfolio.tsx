import React from 'react';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import ExperienceSection from './ExperienceSection';
import ProjectsSection from './ProjectsSection';
import SkillsSection from './SkillsSection';
import EducationSection from './EducationSection';
import ContactSection from './ContactSection';

interface ModernPortfolioProps {
  onModeSwitch: () => void;
}

const ModernPortfolio: React.FC<ModernPortfolioProps> = ({ onModeSwitch }) => {
  return (
    <div className="min-h-screen bg-gradient-modern">
      <HeroSection onModeSwitch={onModeSwitch} />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <EducationSection />
      <ContactSection />
    </div>
  );
};

export default ModernPortfolio;
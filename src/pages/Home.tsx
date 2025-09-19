import React from 'react';
import HeroSection from '@/components/ModernUI/HeroSection';
import ProjectsSection from '@/components/ModernUI/ProjectsSection';

const Home: React.FC = () => {
  return (
    <>
     <div className="min-h-screen">
      <HeroSection onModeSwitch={() => {}} />
      
    </div>
    <div className='m-10'>
      <ProjectsSection />
    </div>
    </>
   

  );
};

export default Home;
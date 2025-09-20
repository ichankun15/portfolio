import React, { useState } from 'react';
import HeroSection from '@/components/ModernUI/HeroSection';
import ProjectsSection from '@/components/ModernUI/ProjectsSection';
import { useNavigate } from 'react-router';

const Home: React.FC = () => {
    const [isTransitioning, setIsTransitioning] = useState(false);
    const navigate = useNavigate();
  
    const handleModeSwitch = () => {
      setIsTransitioning(true);
      
      setTimeout(() => {
        navigate('/terminal');
        setIsTransitioning(false);
      }, 300);
    };
  return (
    <>
     <div className="min-h-screen">
      <HeroSection onModeSwitch={handleModeSwitch} />
      
    </div>
    <div className='m-10'>
      <ProjectsSection />
    </div>
    </>
   

  );
};

export default Home;
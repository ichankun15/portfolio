import React, { useState } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import Navigation from '../components/Navigation';
import PageTransition from '../components/PageTransition';

const Layout: React.FC = () => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleModeSwitch = () => {
    setIsTransitioning(true);
    
    setTimeout(() => {
      navigate('/portfolio/terminal');
      setIsTransitioning(false);
    }, 300);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/5 text-foreground transition-colors duration-300">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-background/90 backdrop-blur-md border-b border-border/20">
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <Navigation onModeSwitch={handleModeSwitch} />
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-20">
        <PageTransition 
          isTransitioning={isTransitioning}
          location={location}
        >
          <Outlet />
        </PageTransition>
      </main>
    </div>
  );
};

export default Layout;
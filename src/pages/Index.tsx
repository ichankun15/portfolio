import React, { useState, useEffect } from 'react';
import TerminalEmulator from '@/components/Terminal/TerminalEmulator';
import ModernPortfolio from '@/components/ModernUI/ModernPortfolio';
import ModeToggle from '@/components/ToggleUI/ModeToggle';
import DarkMode from '@/components/ui/darkmode';

const Index = () => {
  const [isTerminalMode, setIsTerminalMode] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleModeSwitch = () => {
    setIsTransitioning(true);
    
    setTimeout(() => {
      setIsTerminalMode(!isTerminalMode);
      setIsTransitioning(false);
    }, 300);
  };

  // Add smooth transition effects
  useEffect(() => {
    document.body.style.overflow = isTransitioning ? 'hidden' : 'auto';
  }, [isTransitioning]);

  return (
    <div className="min-h-screen relative overflow-hidden transition-colors duration-300 bg-background">
      {/* Dark Mode Toggle - Always visible in top-left */}
      {!isTransitioning && <DarkMode />}
      
      {/* Mode Toggle Button - Positioned in top-right */}
      {!isTransitioning && (
        <div className="fixed top-6 right-6 z-50">
          <ModeToggle 
            isTerminalMode={isTerminalMode} 
            onToggle={handleModeSwitch} 
          />
        </div>
      )}
      
      {/* Transition Overlay */}
      {isTransitioning && (
        <div className="fixed inset-0 z-50 bg-background flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-xl font-medium bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Switching modes...
            </p>
          </div>
        </div>
      )}
      
      {/* Main Content */}
      <div className={`transition-all duration-300 ${isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
        {isTerminalMode ? (
<div className="min-h-screen bg-gradient-terminal flex items-center justify-center p-4">
          <TerminalEmulator onModeSwitch={handleModeSwitch} />
          </div>
        ) : (
            <ModernPortfolio onModeSwitch={handleModeSwitch} />
        )}
      </div>
    </div>
  );
};

export default Index;
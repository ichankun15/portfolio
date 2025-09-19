import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TerminalEmulator from '@/components/TerminalUI/TerminalEmulator';
import ModeToggle from '@/components/ToggleUI/ModeToggle';
import DarkMode from '@/components/ui/darkmode';

const Terminal: React.FC = () => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const navigate = useNavigate();

  const handleModeSwitch = () => {
    setIsTransitioning(true);
    
    setTimeout(() => {
      navigate('/');
      setIsTransitioning(false);
    }, 300);
  };

  return (
    <div className="min-h-screen relative overflow-hidden transition-colors duration-300 bg-background">
      {/* Controls - Only show when not transitioning */}
      {!isTransitioning && (
        <>
          {/* Dark Mode Toggle - Top Left */}
          <div className="fixed top-6 left-6 z-50">
            <DarkMode />
          </div>
          
          {/* Mode Toggle - Top Right */}
          <div className="fixed top-6 right-6 z-50">
            <ModeToggle 
              isTerminalMode={true} 
              onToggle={handleModeSwitch} 
            />
          </div>
        </>
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
      
      {/* Terminal Content */}
      <div className={`transition-all duration-300 ${isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
        <div className="min-h-screen bg-gradient-terminal flex items-center justify-center p-4">
          <TerminalEmulator onModeSwitch={handleModeSwitch} />
        </div>
      </div>
    </div>
  );
};

export default Terminal;
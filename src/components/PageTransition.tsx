import React from 'react';
import { Location } from 'react-router-dom';

interface PageTransitionProps {
  children: React.ReactNode;
  isTransitioning: boolean;
  location: Location;
}

const PageTransition: React.FC<PageTransitionProps> = ({ 
  children, 
  isTransitioning, 
  location 
}) => {
  return (
    <>
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
      
      {/* Page Content */}
      <div 
        key={location.pathname}
        className={`transition-all duration-300 ${
          isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
        }`}
      >
        {children}
      </div>
    </>
  );
};

export default PageTransition;
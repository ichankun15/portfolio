import React from 'react';
import { Button } from '@/components/ui/button';
import { Terminal, Monitor } from 'lucide-react';

interface ModeToggleProps {
  isTerminalMode: boolean;
  onToggle: () => void;
}

const ModeToggle: React.FC<ModeToggleProps> = ({ isTerminalMode, onToggle }) => {
  return (
    <Button
      onClick={onToggle}
      variant="outline"
      size="lg"
      className="group shadow-lg"
      title={isTerminalMode ? 'Switch to Modern UI' : 'Switch to Terminal Mode'}
    >
      {isTerminalMode ? (
        <>
          <Monitor className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
          <span className="hidden sm:inline">Interactive UI</span>
          <span className="sm:hidden">UI Mode</span>
        </>
      ) : (
        <>
          <Terminal className="h-5 w-5 mr-2 group-hover:rotate-12 transition-transform" />
          <span className="hidden sm:inline">CLI Mode</span>
          <span className="sm:hidden">CLI</span>
        </>
      )}
    </Button>
  );
};

export default ModeToggle;
import React from 'react';

interface TerminalHeaderProps {
  username: string;
}

export const TerminalHeader: React.FC<TerminalHeaderProps> = ({ username }) => (
  <div className="terminal-header">
    <div className="terminal-controls">
      <div className="terminal-control-btn terminal-close"></div>
      <div className="terminal-control-btn terminal-minimize"></div>
      <div className="terminal-control-btn terminal-maximize"></div>
    </div>
    <div className="terminal-title">
      <span className="hidden sm:inline">{username.toLowerCase().replace(" ", "")}@portfolio: ~</span>
      <span className="sm:hidden">terminal</span>
    </div>
    <div className="w-8 sm:w-16"></div>
  </div>
);
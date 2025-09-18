import React from 'react';

export const LoadingIndicator: React.FC = () => (
  <div className="terminal-line">
    <div className="terminal-output flex items-center">
      <span className="mr-2">Loading</span>
      <div className="flex space-x-1">
        <div className="w-1 h-1 bg-terminal-fg rounded-full animate-pulse"></div>
        <div className="w-1 h-1 bg-terminal-fg rounded-full animate-pulse delay-75"></div>
        <div className="w-1 h-1 bg-terminal-fg rounded-full animate-pulse delay-150"></div>
      </div>
    </div>
  </div>
);
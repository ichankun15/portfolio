import React from 'react';
import { TerminalLine as ITerminalLine } from '../../types/terminal';

interface TerminalLineProps {
  line: ITerminalLine;
}

export const TerminalLine: React.FC<TerminalLineProps> = ({ line }) => (
  <div className="terminal-line">
    <div
      className={`terminal-output ${
        line.type === "command"
          ? "text-terminal-command"
          : line.type === "error"
          ? "terminal-error"
          : "terminal-output"
      }`}
    >
      {line.content}
    </div>
  </div>
);
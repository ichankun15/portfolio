import React from "react";

interface TerminalInputProps {
  currentInput: string;
  username: string;
  inputRef: React.RefObject<HTMLInputElement>;
  onSubmit: (e: React.FormEvent) => void;
  onChange: (value: string) => void;
  onKeyDown: (e: React.KeyboardEvent) => void;
}

export const TerminalInput: React.FC<TerminalInputProps> = ({
  currentInput,
  username,
  inputRef,
  onSubmit,
  onChange,
  onKeyDown,
}) => (
  <form onSubmit={onSubmit} className="terminal-line">
    <span className="terminal-prompt">
      <span className="hidden sm:inline">
        {username.toLowerCase().replace(" ", "")}@portfolio:~$
      </span>
      <span className="sm:hidden">$</span>
    </span>
    <input
      ref={inputRef}
      type="text"
      value={currentInput}
      onChange={(e) => onChange(e.target.value)}
      onKeyDown={onKeyDown}
      className="terminal-input border-0 focus:outline-none bg-transparent text-current w-full"
      autoComplete="off"
      spellCheck="false"
    />
    {/* <span className="terminal-cursor">█</span> */}
  </form>
);

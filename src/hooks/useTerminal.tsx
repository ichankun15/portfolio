// hooks/useTerminal.ts
import { useState, useEffect, useRef } from 'react';
import { TerminalLine, PortfolioData } from '../types/terminal';
import { TerminalCommandHandler } from '../utils/terminalCommands';
import resumeFile from "@/assets/resume.pdf";


interface useTerminalProps {
  portfolioData: PortfolioData;
  onModeSwitch: () => void;
}

export const useTerminal = ({ portfolioData, onModeSwitch }: useTerminalProps) => {
  const [lines, setLines] = useState<TerminalLine[]>([]);
  const [currentInput, setCurrentInput] = useState("");
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [isLoading, setIsLoading] = useState(false);
  
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);
  const commandHandler = useRef(new TerminalCommandHandler(portfolioData));

  // Initialize terminal with welcome message
  useEffect(() => {
    setLines([
      {
        type: "output",
        content: `Welcome to ${portfolioData.name}'s Portfolio Terminal v2.1.0`,
        timestamp: new Date(),
      },
      {
        type: "output",
        content: 'Type "help" to see available commands.',
        timestamp: new Date(),
      },
      {
        type: "output",
        content: "═".repeat(60),
        timestamp: new Date(),
      },
    ]);
  }, [portfolioData.name]);

  // Auto-scroll to bottom
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [lines]);

  // Focus input when component mounts
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const addLine = (type: "command" | "output" | "error", content: string) => {
    setLines((prev) => [...prev, { type, content, timestamp: new Date() }]);
  };

  const simulateLoading = (callback: () => void, delay = 1000) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      callback();
    }, delay);
  };

  const executeCommand = (command: string) => {
    const trimmedCommand = command.trim().toLowerCase();

    // Add command to history
    if (trimmedCommand && !commandHistory.includes(trimmedCommand)) {
      setCommandHistory((prev) => [...prev, trimmedCommand]);
    }
    setHistoryIndex(-1);

    // Add command line
    addLine(
      "command",
      `${portfolioData.name.toLowerCase().replace(" ", "")}@portfolio:~$ ${command}`
    );

    // Execute command
    const results = commandHandler.current.executeCommand(command);
    
    if (results.length === 0) return;

    // Check for special commands
    const hasDelay = results.some(result => result.delay);
    const shouldClear = results.some(result => result.content === "__CLEAR__");
    const shouldSwitch = results.some(result => result.content === "__SWITCH__");

    if (shouldClear) {
      setLines([]);
      return;
    }

    if (hasDelay) {
      const delay = results.find(result => result.delay)?.delay || 1000;
      simulateLoading(() => {
        results.forEach(result => {
          if (result.content !== "__SWITCH__" && result.content !== "__CLEAR__") {
            addLine(result.type, result.content);
          }
        });

        // Handle special actions after output
        if (trimmedCommand === "resume") {
          window.open(resumeFile, "_blank", "noopener,noreferrer");
        }
        
        if (shouldSwitch) {
          onModeSwitch();
        }
      }, delay);
    } else {
      results.forEach(result => {
        if (result.content !== "__SWITCH__" && result.content !== "__CLEAR__") {
          addLine(result.type, result.content);
        }
      });

      // Handle immediate special actions
      if (trimmedCommand === "resume") {
        window.open("/resume.pdf", "_blank", "noopener,noreferrer");
      }
      
      if (shouldSwitch) {
        setTimeout(() => onModeSwitch(), 100);
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentInput.trim() && !isLoading) {
      executeCommand(currentInput);
      setCurrentInput("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex =
          historyIndex === -1
            ? commandHistory.length - 1
            : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setCurrentInput(commandHistory[newIndex]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex !== -1) {
        const newIndex = historyIndex + 1;
        if (newIndex >= commandHistory.length) {
          setHistoryIndex(-1);
          setCurrentInput("");
        } else {
          setHistoryIndex(newIndex);
          setCurrentInput(commandHistory[newIndex]);
        }
      }
    }
  };

  return {
    // State
    lines,
    currentInput,
    isLoading,
    
    // Refs
    inputRef,
    terminalRef,
    
    // Handlers
    handleSubmit,
    handleKeyDown,
    setCurrentInput,
    
    // Data
    portfolioData,
  };
};
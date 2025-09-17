import React, { useState, useEffect, useRef } from 'react';
import { portfolioData } from '@/data/portfolio';

interface TerminalLine {
  type: 'command' | 'output' | 'error';
  content: string;
  timestamp: Date;
}

interface TerminalEmulatorProps {
  onModeSwitch: () => void;
}

const TerminalEmulator: React.FC<TerminalEmulatorProps> = ({ onModeSwitch }) => {
  const [lines, setLines] = useState<TerminalLine[]>([]);
  const [currentInput, setCurrentInput] = useState('');
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  const commands = {
    help: 'Available commands: about, projects, skills, experience, education, contact, resume, clear, sudo, whoami, ls, pwd, date, switch',
    about: portfolioData.bio,
    whoami: portfolioData.name,
    pwd: '/home/portfolio',
    date: () => new Date().toString(),
    ls: 'about.txt  projects/  skills.json  experience.log  contact.info  resume.pdf',
  };

  useEffect(() => {
    // Welcome message
    setLines([
      {
        type: 'output',
        content: `Welcome to ${portfolioData.name}'s Portfolio Terminal v2.1.0`,
        timestamp: new Date()
      },
      {
        type: 'output',
        content: 'Type "help" to see available commands.',
        timestamp: new Date()
      },
      {
        type: 'output',
        content: '═'.repeat(60),
        timestamp: new Date()
      }
    ]);
  }, []);

  useEffect(() => {
    // Auto-scroll to bottom
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [lines]);

  useEffect(() => {
    // Focus input when component mounts
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const simulateLoading = (callback: () => void, delay = 1000) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      callback();
    }, delay);
  };

  const addLine = (type: 'command' | 'output' | 'error', content: string) => {
    setLines(prev => [...prev, { type, content, timestamp: new Date() }]);
  };

  const executeCommand = (command: string) => {
    const trimmedCommand = command.trim().toLowerCase();
    
    // Add command to history
    if (trimmedCommand && !commandHistory.includes(trimmedCommand)) {
      setCommandHistory(prev => [...prev, trimmedCommand]);
    }
    setHistoryIndex(-1);

    // Add command line
    addLine('command', `${portfolioData.name.toLowerCase().replace(' ', '')}@portfolio:~$ ${command}`);

    // Execute command
    switch (trimmedCommand) {
      case 'help':
        addLine('output', commands.help);
        break;

      case 'about':
        simulateLoading(() => {
          addLine('output', `Name: ${portfolioData.name}`);
          addLine('output', `Title: ${portfolioData.title}`);
          addLine('output', `Location: ${portfolioData.location}`);
          addLine('output', '');
          addLine('output', portfolioData.bio);
        });
        break;

      case 'projects':
        simulateLoading(() => {
          addLine('output', 'Recent Projects:');
          addLine('output', '─'.repeat(40));
          portfolioData.projects.forEach((project, index) => {
            addLine('output', `${index + 1}. ${project.title}`);
            addLine('output', `   ${project.description}`);
            addLine('output', `   Tech: ${project.tech.join(', ')}`);
            if (project.github) addLine('output', `   GitHub: ${project.github}`);
            if (project.demo) addLine('output', `   Demo: ${project.demo}`);
            addLine('output', '');
          });
        }, 1500);
        break;

      case 'skills':
        simulateLoading(() => {
          addLine('output', 'Technical Skills:');
          addLine('output', '─'.repeat(40));
          portfolioData.skills.forEach(skillGroup => {
            addLine('output', `${skillGroup.category}:`);
            // Map each item to its name before joining
            const skillNames = skillGroup.items.map(item => item.name);
            addLine('output', `  ${skillNames.join(' • ')}`);
            addLine('output', '');
          });
        });

        break;

      case 'experience':
        simulateLoading(() => {
          addLine('output', 'Work Experience:');
          addLine('output', '─'.repeat(40));
          portfolioData.experience.forEach(exp => {
            addLine('output', `${exp.title} at ${exp.company}`);
            addLine('output', `Period: ${exp.period}`);
            exp.description.forEach(desc => {
              addLine('output', `• ${desc}`);
            });
            addLine('output', `Technologies: ${exp.tech.join(', ')}`);
            addLine('output', '');
          });
        }, 1500);
        break;

      case 'education':
        simulateLoading(() => {
          addLine('output', 'Education:');
          addLine('output', '─'.repeat(40));
          portfolioData.education.forEach(edu => {
            addLine('output', edu.degree);
            addLine('output', `${edu.school} (${edu.period})`);
            if (edu.gpa) addLine('output', `GPA: ${edu.gpa}`);
            addLine('output', '');
          });
        });
        break;

      case 'contact':
        addLine('output', 'Contact Information:');
        addLine('output', '─'.repeat(40));
        addLine('output', `Email: ${portfolioData.email}`);
        addLine('output', `Phone: ${portfolioData.phone}`);
        addLine('output', `Website: ${portfolioData.website}`);
        addLine('output', `GitHub: ${portfolioData.github}`);
        addLine('output', `LinkedIn: ${portfolioData.linkedin}`);
        break;

      case 'resume':
        addLine('output', 'Downloading resume...');
        simulateLoading(() => {
          addLine('output', '📄 resume.pdf downloaded successfully!');
          addLine('output', 'File saved to ~/Downloads/ichan_villafuerte_resume.pdf');
        }, 800);
        break;

      case 'clear':
        setLines([]);
        break;

      case 'whoami':
        addLine('output', commands.whoami);
        break;

      case 'pwd':
        addLine('output', commands.pwd);
        break;

      case 'ls':
        addLine('output', commands.ls);
        break;

      case 'date':
        addLine('output', commands.date());
        break;

      case 'sudo':
        addLine('error', 'sudo: permission denied. Nice try! 😄');
        break;

      case 'exit':
        addLine('output', 'Thanks for visiting! Come back soon! 👋');
        break;

      case 'switch':
      case 'modern':
        addLine('output', 'Switching to modern UI mode...');
        simulateLoading(() => {
          onModeSwitch();
        }, 800);
        break;

      case 'matrix':
        addLine('output', 'Wake up, Neo... 💊');
        break;

      case 'coffee':
        addLine('output', '☕ Brewing fresh coffee... Perfect for coding!');
        break;

      default:
        if (trimmedCommand) {
          addLine('error', `bash: ${trimmedCommand}: command not found`);
          addLine('output', 'Type "help" to see available commands.');
        }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentInput.trim() && !isLoading) {
      executeCommand(currentInput);
      setCurrentInput('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setCurrentInput(commandHistory[newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex !== -1) {
        const newIndex = historyIndex + 1;
        if (newIndex >= commandHistory.length) {
          setHistoryIndex(-1);
          setCurrentInput('');
        } else {
          setHistoryIndex(newIndex);
          setCurrentInput(commandHistory[newIndex]);
        }
      }
    }
  };

  return (
    <div className="terminal-container max-w-4xl mx-auto my-8">
      <div className="terminal-header">
        <div className="terminal-controls">
          <div className="terminal-control-btn terminal-close"></div>
          <div className="terminal-control-btn terminal-minimize"></div>
          <div className="terminal-control-btn terminal-maximize"></div>
        </div>
        <div className="terminal-title">
          {portfolioData.name.toLowerCase().replace(' ', '')}@portfolio: ~
        </div>
        <div className="w-16"></div>
      </div>
      
      <div ref={terminalRef} className="terminal-body">
        {lines.map((line, index) => (
          <div key={index} className="terminal-line">
            <div className={`terminal-output ${
              line.type === 'command' ? 'text-terminal-command' :
              line.type === 'error' ? 'terminal-error' : 'terminal-output'
            }`}>
              {line.content}
            </div>
          </div>
        ))}
        
        {isLoading && (
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
        )}
        
        {!isLoading && (
          <form onSubmit={handleSubmit} className="terminal-line">
            <span className="terminal-prompt">
              {portfolioData.name.toLowerCase().replace(' ', '')}@portfolio:~$
            </span>
            <input
              ref={inputRef}
              type="text"
              value={currentInput}
              onChange={(e) => setCurrentInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="terminal-input"
              autoComplete="off"
              spellCheck="false"
            />
            <span className="terminal-cursor">█</span>
          </form>
        )}
      </div>
    </div>
  );
};

export default TerminalEmulator;
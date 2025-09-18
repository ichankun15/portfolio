// types/terminal.ts
export interface TerminalLine {
  type: "command" | "output" | "error";
  content: string;
  timestamp: Date;
}

export interface TerminalEmulatorProps {
  onModeSwitch: () => void;
}

export interface CommandResult {
  type: "output" | "error";
  content: string;
  delay?: number;
}

export interface PortfolioData {
  name: string;
  title: string;
  location: string;
  bio: string;
  email: string;
  phone: string;
  website: string;
  github: string;
  linkedin: string;
  projects: Array<{
    title: string;
    description: string;
    tech: string[];
    github?: string;
    demo?: string;
  }>;
  skills: Array<{
    category: string;
    items: Array<{ name: string }>;
  }>;
  experience: Array<{
    title: string;
    company: string;
    period: string;
    description: string[];
    tech: string[];
  }>;
  education: Array<{
    degree: string;
    school: string;
    period: string;
    gpa?: string;
  }>;
}
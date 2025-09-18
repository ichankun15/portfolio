// utils/terminalCommands.ts
import { CommandResult, PortfolioData } from '../types/terminal';

export class TerminalCommandHandler {
  private portfolioData: PortfolioData;

  constructor(portfolioData: PortfolioData) {
    this.portfolioData = portfolioData;
  }

  private getBasicCommands() {
    return {
      help: "Available commands: about, projects, skills, experience, education, contact, resume, clear, sudo, whoami, ls, pwd, date, switch",
      whoami: `${this.portfolioData.name}.....`,
      pwd: '/home/portfolio/iChanHub',
      date: () => new Date().toString(),
      ls: "about.txt  projects/  skills.json  experience.log  contact.info  resume.pdf",
    };
  }

  executeCommand(command: string): CommandResult[] {
    const trimmedCommand = command.trim().toLowerCase();
    const commands = this.getBasicCommands();

    switch (trimmedCommand) {
      case "help":
        return [{ type: "output", content: commands.help }];

      case "about":
        return [
          { type: "output", content: `Name: ${this.portfolioData.name}`, delay: 1000 },
          { type: "output", content: `Title: ${this.portfolioData.title}` },
          { type: "output", content: `Location: ${this.portfolioData.location}` },
          { type: "output", content: "" },
          { type: "output", content: this.portfolioData.bio },
        ];

      case "projects":
        return this.getProjectsOutput();

      case "skills":
        return this.getSkillsOutput();

      case "experience":
        return this.getExperienceOutput();

      case "education":
        return this.getEducationOutput();

      case "contact":
        return this.getContactOutput();

      case "resume":
        return [
          { type: "output", content: "Opening resume...", delay: 800 },
          { type: "output", content: "📄 Christian_Villafuerte_CV opened in a new tab!" },
        ];

      case "clear":
        return [{ type: "output", content: "__CLEAR__" }]; // Special flag for clearing

      case "whoami":
        return [{ type: "output", content: commands.whoami }];

      case "pwd":
        return [{ type: "output", content: commands.pwd }];

      case "ls":
        return [{ type: "output", content: commands.ls }];

      case "date":
        return [{ type: "output", content: commands.date() }];

      case "sudo":
        return [{ type: "error", content: "sudo: permission denied. Nice try! 😄" }];

      case "exit":
        return [{ type: "output", content: "Thanks for visiting! Come back soon! 👋" }];

      case "switch":
      case "modern":
        return [
          { type: "output", content: "Switching to modern UI mode...", delay: 800 },
          { type: "output", content: "__SWITCH__" }, // Special flag for mode switch
        ];

      case "matrix":
        return [{ type: "output", content: "Wake up, Neo... 💊" }];

      case "coffee":
        return [{ type: "output", content: "☕ Brewing fresh coffee... Perfect for coding!" }];

      default:
        if (trimmedCommand) {
          return [
            { type: "error", content: `bash: ${trimmedCommand}: command not found` },
            { type: "output", content: 'Type "help" to see available commands.' },
          ];
        }
        return [];
    }
  }

  private getProjectsOutput(): CommandResult[] {
    const results: CommandResult[] = [
      { type: "output", content: "Recent Projects:", delay: 1500 },
      { type: "output", content: "─".repeat(40) },
    ];

    this.portfolioData.projects.forEach((project, index) => {
      results.push(
        { type: "output", content: `${index + 1}. ${project.title}` },
        { type: "output", content: `   ${project.description}` },
        { type: "output", content: `   Tech: ${project.tech.join(", ")}` }
      );

      if (project.github) {
        results.push({ type: "output", content: `   GitHub: ${project.github}` });
      }
      if (project.demo) {
        results.push({ type: "output", content: `   Demo: ${project.demo}` });
      }

      results.push({ type: "output", content: "" });
    });

    return results;
  }

  private getSkillsOutput(): CommandResult[] {
    const results: CommandResult[] = [
      { type: "output", content: "Technical Skills:" },
      { type: "output", content: "─".repeat(40) },
    ];

    this.portfolioData.skills.forEach((skillGroup) => {
      const skillNames = skillGroup.items.map((item) => item.name);
      results.push(
        { type: "output", content: `${skillGroup.category}:` },
        { type: "output", content: `  ${skillNames.join(" • ")}` },
        { type: "output", content: "" }
      );
    });

    return results;
  }

  private getExperienceOutput(): CommandResult[] {
    const results: CommandResult[] = [
      { type: "output", content: "Work Experience:", delay: 1500 },
      { type: "output", content: "─".repeat(40) },
    ];

    this.portfolioData.experience.forEach((exp) => {
      results.push(
        { type: "output", content: `${exp.title} at ${exp.company}` },
        { type: "output", content: `Period: ${exp.period}` }
      );

      exp.description.forEach((desc) => {
        results.push({ type: "output", content: `• ${desc}` });
      });

      results.push(
        { type: "output", content: `Technologies: ${exp.tech.join(", ")}` },
        { type: "output", content: "" }
      );
    });

    return results;
  }

  private getEducationOutput(): CommandResult[] {
    const results: CommandResult[] = [
      { type: "output", content: "Education:" },
      { type: "output", content: "─".repeat(40) },
    ];

    this.portfolioData.education.forEach((edu) => {
      results.push(
        { type: "output", content: edu.degree },
        { type: "output", content: `${edu.school} (${edu.period})` }
      );

      if (edu.gpa) {
        results.push({ type: "output", content: `GPA: ${edu.gpa}` });
      }

      results.push({ type: "output", content: "" });
    });

    return results;
  }

  private getContactOutput(): CommandResult[] {
    return [
      { type: "output", content: "Contact Information:" },
      { type: "output", content: "─".repeat(40) },
      { type: "output", content: `Email: ${this.portfolioData.email}` },
      { type: "output", content: `Phone: ${this.portfolioData.phone}` },
      { type: "output", content: `Website: ${this.portfolioData.website}` },
      { type: "output", content: `GitHub: ${this.portfolioData.github}` },
      { type: "output", content: `LinkedIn: ${this.portfolioData.linkedin}` },
    ];
  }
}
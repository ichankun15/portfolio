import React from "react";
import { Button } from "@/components/ui/button";
import { Terminal, Download, Github, Linkedin, Mail } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

interface HeroSectionProps {
  onModeSwitch: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onModeSwitch }) => {
  return (
    <section className="modern-hero relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="modern-container relative z-10">
        <div className="text-center">
          {/* Avatar placeholder */}
          {/* <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-glow"> */}
          {/* <span className="text-4xl font-bold text-white"> */}
          {/* {portfolioData.name.split(' ').map(n => n[0]).join('')} */}
          {/* </span> */}
          {/* </div> */}

          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent leading-tight">
            {portfolioData.name}
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-medium px-4 md:px-0">
            {portfolioData.title}
          </p>

          <p className="text-sm md:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed px-4 md:px-0">
            {portfolioData.location} • Building exceptional digital experiences
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 mb-12 px-4 sm:px-0">
            <Button
              onClick={onModeSwitch}
              variant="outline"
              size="lg"
              className="modern-btn-primary group w-full sm:w-auto"
            >
              <Terminal className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
              Terminal Mode
            </Button>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button
                variant="outline"
                size="lg"
                className="modern-btn-accent w-full sm:w-auto"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
            </a>
          </div>

          <div className="flex justify-center space-x-6">
            <a
              href={portfolioData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card/50 backdrop-blur-sm border border-border/50 hover:bg-card hover:border-primary/50 transition-all duration-300 hover:scale-110 hover:shadow-glow"
            >
              <Github className="h-6 w-6" />
            </a>

            <a
              href={portfolioData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card/50 backdrop-blur-sm border border-border/50 hover:bg-card hover:border-primary/50 transition-all duration-300 hover:scale-110 hover:shadow-glow"
            >
              <Linkedin className="h-6 w-6" />
            </a>

            <a
              href={`mailto:${portfolioData.email}`}
              className="p-3 rounded-full bg-card/50 backdrop-blur-sm border border-border/50 hover:bg-card hover:border-primary/50 transition-all duration-300 hover:scale-110 hover:shadow-glow"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

import React from "react";
import { portfolioData } from "@/data/portfolio";

const AboutSection: React.FC = () => {
  return (
    <section className="modern-section bg-background/50">
      <div className="modern-container">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="modern-card p-8">
              <h3 className="text-2xl font-semibold mb-6 text-primary">
                My Story
              </h3>
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                {portfolioData.bio}
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                {portfolioData.tagline}
              </p>
            </div>

            <div className="modern-card p-8">
              <h3 className="text-2xl font-semibold mb-6 text-accent">
                Quick Facts
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-border/30">
                  <span className="font-medium">Location</span>
                  <span className="text-muted-foreground text-right break-words max-w-[60%] sm:max-w-[70%]">
                    {portfolioData.location}
                  </span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border/30">
                  <span className="font-medium">Experience</span>
                  <span className="text-muted-foreground">
                    {portfolioData.years_exp}
                  </span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border/30">
                  <span className="font-medium">Projects Completed</span>
                  <span className="text-muted-foreground">10+</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border/30">
                  <span className="font-medium">Coffee Consumed</span>
                  <span className="text-muted-foreground">None</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="font-medium">Favorite Tech</span>
                  <span className="text-muted-foreground">Python & React</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

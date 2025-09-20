import React, { useState } from 'react';
import { portfolioData } from '@/data/portfolio';
import { Building, Calendar, MapPin, TrendingUp, ChevronDown, ChevronUp } from 'lucide-react';

const ExperienceSection: React.FC = () => {
  const [expandedDescriptions, setExpandedDescriptions] = useState<Set<string>>(new Set());
  const [expandedSkills, setExpandedSkills] = useState<Set<string>>(new Set());

  // Group experiences by company to show promotions
  const groupedExperiences = portfolioData.experience.reduce((acc, exp) => {
    if (!acc[exp.company]) {
      acc[exp.company] = [];
    }
    acc[exp.company].push(exp);
    return acc;
  }, {} as Record<string, typeof portfolioData.experience>);

  const toggleDescription = (expId: string) => {
    const newExpanded = new Set(expandedDescriptions);
    if (newExpanded.has(expId)) {
      newExpanded.delete(expId);
    } else {
      newExpanded.add(expId);
    }
    setExpandedDescriptions(newExpanded);
  };

  const toggleSkills = (expId: string) => {
    const newExpanded = new Set(expandedSkills);
    if (newExpanded.has(expId)) {
      newExpanded.delete(expId);
    } else {
      newExpanded.add(expId);
    }
    setExpandedSkills(newExpanded);
  };

  const truncateDescription = (description: string[], expId: string, maxItems = 3) => {
    const isExpanded = expandedDescriptions.has(expId);
    if (description.length <= maxItems) return description;
    return isExpanded ? description : description.slice(0, maxItems);
  };

  const truncateSkills = (skills: string[], expId: string, maxItems = 8) => {
    const isExpanded = expandedSkills.has(expId);
    if (skills.length <= maxItems) return skills;
    return isExpanded ? skills : skills.slice(0, maxItems);
  };

  return (
    <section className="modern-section">
      <div className="modern-container">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Experience
          </h2>
          
          <div className="relative">
            {/* Timeline line - visible on all devices */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/30"></div>
            
            <div className="space-y-8">
              {Object.entries(groupedExperiences).map(([company, experiences], companyIndex) => (
                <div key={company} className="relative pl-16">
                  {/* Company timeline dot - visible on all devices */}
                  <div className="absolute left-3 top-6 w-6 h-6 bg-white border-4 border-primary rounded-full shadow-lg z-10">
                    <div className="absolute inset-1 bg-gradient-to-br from-primary to-accent rounded-full opacity-80"></div>
                  </div>
                  
                  {/* Company card */}
                  <div className="modern-card p-4 md:p-6 group hover:shadow-xl transition-all duration-300">
                    {/* Company header */}
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                      <div className="flex items-center">
                        {/* Company logo - hidden on mobile */}
                        <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg items-center justify-center mr-4 hidden md:flex">
                          <Building className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg md:text-xl font-semibold text-foreground">{company}</h3>
                          {/* Number of positions - hidden on mobile */}
                          <p className="text-sm text-muted-foreground hidden md:block">
                            {experiences.length > 1 ? `${experiences.length} positions` : '1 position'}
                          </p>
                        </div>
                      </div>
                      {/* Company duration - hidden on mobile */}
                      <div className="text-right hidden md:block">
                        <p className="text-sm font-medium text-foreground">
                          {experiences[experiences.length - 1].period.split(' – ')[0]} – {experiences[0].period.split(' – ')[1]}
                        </p>
                      </div>
                    </div>

                    {/* Positions within company */}
                    <div className="space-y-6">
                      {experiences.map((exp, expIndex) => (
                        <div key={exp.id} className="relative">
                          {/* Show promotion indicator for multiple positions */}
                          {experiences.length > 1 && expIndex > 0 && (
                            <div className="flex items-center mb-3 text-green-600">
                              <TrendingUp className="h-4 w-4 mr-2" />
                              <span className="text-sm font-medium">Promoted</span>
                            </div>
                          )}
                          
                          {/* Position details */}
                          <div className={`${expIndex > 0 ? 'border-l-2 border-green-200 pl-4 ml-2' : ''}`}>
                            <div className="flex flex-col mb-4">
                              <div className="flex-1">
                                <h4 className="text-base md:text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                                  {exp.title}
                                </h4>
                                {/* Work details - shown on all devices */}
                                <div className="flex flex-col space-y-1 text-muted-foreground mb-2 text-sm">
                                  <div className="flex items-center">
                                    <Calendar className="h-3 w-3 mr-1" />
                                    <span>{exp.period}</span>
                                  </div>
                                  <div className="flex items-center">
                                    <span className="font-medium">{exp.workType}</span>
                                    <span className="mx-2">•</span>
                                    <MapPin className="h-3 w-3 mr-1" />
                                    <span>{exp.workSetup}</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            
                            {/* Description */}
                            <div className="mb-6 space-y-2">
                              {truncateDescription(exp.description, exp.id).map((desc, descIndex) => {
                                // Check if this is a PROJECT item
                                if (desc.startsWith('PROJECT:')) {
                                  const [projectTitle, ...projectDetails] = desc.split(' - ');
                                  const details = projectDetails.join(' - ');
                                  
                                  return (
                                    <div key={descIndex} className="space-y-2">
                                      {/* Main PROJECT bullet */}
                                      <div className="flex items-start">
                                        <span className="text-accent mr-3 mt-2 flex-shrink-0 w-1 h-1 rounded-full bg-accent"></span>
                                        <p className="text-muted-foreground leading-relaxed text-sm font-medium">
                                          {projectTitle}
                                        </p>
                                      </div>
                                      
                                      {/* Sub-bullets for project details */}
                                      {details && details.split('. ').filter(detail => detail.trim()).map((detail, subIndex) => (
                                        <div key={subIndex} className="flex items-start ml-6">
                                          <span className="text-accent/60 mr-3 mt-2 flex-shrink-0 w-0.5 h-0.5 rounded-full bg-accent/60"></span>
                                          <p className="text-muted-foreground leading-relaxed text-sm">
                                            {detail.trim()}{detail.trim() && !detail.trim().endsWith('.') ? '.' : ''}
                                          </p>
                                        </div>
                                      ))}
                                    </div>
                                  );
                                } else {
                                  // Regular bullet point
                                  return (
                                    <div key={descIndex} className="flex items-start">
                                      <span className="text-accent mr-3 mt-2 flex-shrink-0 w-1 h-1 rounded-full bg-accent"></span>
                                      <p className="text-muted-foreground leading-relaxed text-sm">
                                        {desc}
                                      </p>
                                    </div>
                                  );
                                }
                              })}
                              
                              {/* See more/less button for descriptions */}
                              {exp.description.length > 3 && (
                                <button
                                  onClick={() => toggleDescription(exp.id)}
                                  className="flex items-center text-primary hover:text-accent text-sm font-medium ml-6 mt-2 transition-colors"
                                >
                                  {expandedDescriptions.has(exp.id) ? (
                                    <>
                                      <span>See less</span>
                                      <ChevronUp className="h-4 w-4 ml-1" />
                                    </>
                                  ) : (
                                    <>
                                      <span>See more</span>
                                      <ChevronDown className="h-4 w-4 ml-1" />
                                    </>
                                  )}
                                </button>
                              )}
                            </div>
                            
                            {/* Skills/Technologies */}
                            <div className="border-t border-border/50 pt-4">
                              <p className="text-sm font-medium text-foreground mb-3">Skills:</p>
                              <div className="flex flex-wrap gap-2">
                                {truncateSkills(exp.tech, exp.id).map((tech) => (
                                  <span
                                    key={tech}
                                    className="bg-secondary/50 hover:bg-primary/10 text-secondary-foreground hover:text-primary px-3 py-1 rounded-full text-xs font-medium transition-all duration-200 border border-transparent hover:border-primary/20"
                                  >
                                    {tech}
                                  </span>
                                ))}
                                
                                {/* Show more skills button */}
                                {exp.tech.length > 8 && !expandedSkills.has(exp.id) && (
                                  <button
                                    onClick={() => toggleSkills(exp.id)}
                                    className="bg-primary/10 hover:bg-primary/20 text-primary px-3 py-1 rounded-full text-xs font-medium transition-all duration-200 border border-primary/20 hover:border-primary/40"
                                  >
                                    +{exp.tech.length - 8} more
                                  </button>
                                )}
                                
                                {/* Show less skills button */}
                                {exp.tech.length > 8 && expandedSkills.has(exp.id) && (
                                  <button
                                    onClick={() => toggleSkills(exp.id)}
                                    className="bg-primary/10 hover:bg-primary/20 text-primary px-3 py-1 rounded-full text-xs font-medium transition-all duration-200 border border-primary/20 hover:border-primary/40"
                                  >
                                    Show less
                                  </button>
                                )}
                              </div>
                            </div>
                          </div>
                          
                          {/* Separator between positions in same company */}
                          {expIndex < experiences.length - 1 && (
                            <div className="mt-6 border-b border-border/30"></div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Bottom timeline cap - visible on all devices */}
            <div className="absolute left-3 -bottom-2 w-6 h-6 bg-gradient-to-br from-primary/30 to-accent/30 rounded-full border-2 border-background shadow-sm"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
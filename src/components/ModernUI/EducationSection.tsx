import React, { useState } from "react";
import { portfolioData } from "@/data/portfolio";
import { GraduationCap, Award, Calendar, MapPin, ChevronDown, ChevronUp } from "lucide-react";

const EducationSection: React.FC = () => {
  const [expandedCoursework, setExpandedCoursework] = useState<Set<string>>(new Set());

  // Group education by school to show progression (like promotions in experience)
  const groupedEducation = portfolioData.education.reduce((acc, edu) => {
    if (!acc[edu.school]) {
      acc[edu.school] = [];
    }
    acc[edu.school].push(edu);
    return acc;
  }, {} as Record<string, typeof portfolioData.education>);

  const toggleCoursework = (eduId: string) => {
    const newExpanded = new Set(expandedCoursework);
    if (newExpanded.has(eduId)) {
      newExpanded.delete(eduId);
    } else {
      newExpanded.add(eduId);
    }
    setExpandedCoursework(newExpanded);
  };

  // Sample relevant coursework for each degree (you can customize this based on your data)
  const getRelevantCoursework = (degree: string) => {
    if (degree.toLowerCase().includes('computer science') || degree.toLowerCase().includes('software')) {
      return [
        "Data Structures & Algorithms",
        "Software Engineering",
        "Database Systems",
        "Computer Networks",
        "Web Development",
        "Machine Learning",
        "Operating Systems",
        "Computer Graphics",
        "Artificial Intelligence",
        "Software Testing",
        "Human-Computer Interaction",
        "Mobile App Development"
      ];
    }
    return [];
  };

  const truncateCoursework = (coursework: string[], eduId: string, maxItems = 6) => {
    const isExpanded = expandedCoursework.has(eduId);
    if (coursework.length <= maxItems) return coursework;
    return isExpanded ? coursework : coursework.slice(0, maxItems);
  };

  return (
    <section className="modern-section bg-background/50">
      <div className="modern-container">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Education
          </h2>

          <div className="relative">
            {/* Timeline line - visible on all devices */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/30"></div>
            
            <div className="space-y-8">
              {Object.entries(groupedEducation).map(([school, educations], schoolIndex) => (
                <div key={school} className="relative pl-16">
                  {/* School timeline dot - visible on all devices */}
                  <div className="absolute left-3 top-6 w-6 h-6 bg-white border-4 border-primary rounded-full shadow-lg z-10">
                    <div className="absolute inset-1 bg-gradient-to-br from-primary to-accent rounded-full opacity-80"></div>
                  </div>
                  
                  {/* School card */}
                  <div className="modern-card p-4 md:p-6 group hover:shadow-xl transition-all duration-300">
                    {/* School header */}
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                      <div className="flex items-center">
                        {/* School icon - hidden on mobile */}
                        <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg items-center justify-center mr-4 hidden md:flex">
                          <GraduationCap className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg md:text-xl font-semibold text-foreground">{school}</h3>
                          {/* Number of degrees - hidden on mobile */}
                          <p className="text-sm text-muted-foreground hidden md:block">
                            {educations.length > 1 ? `${educations.length} degrees` : '1 degree'}
                          </p>
                        </div>
                      </div>
                      {/* School duration - hidden on mobile */}
                      <div className="text-right hidden md:block">
                        <p className="text-sm font-medium text-foreground">
                          {(() => {
                            // Get start and end periods, handling different date formats
                            const startPeriod = educations[educations.length - 1].period;
                            const endPeriod = educations[0].period;
                            
                            // Extract start year (handle formats like "2017 - 2019", "2017-2019", "2017 – 2019")
                            const startYear = startPeriod.split(/[-–]/)[0].trim();
                            
                            // Extract end year (handle formats like "2017 - 2019", "2017-2019", "2017 – 2019")  
                            const endYear = endPeriod.split(/[-–]/).pop()?.trim();
                            
                            return `${startYear} - ${endYear}`;
                          })()}
                        </p>
                      </div>
                    </div>

                    {/* Degrees within school */}
                    <div className="space-y-6">
                      {educations.map((edu, eduIndex) => {
                        const eduId = `${school}-${eduIndex}`;
                        return (
                          <div key={eduId} className="relative">
                            {/* Show progression indicator for multiple degrees */}
                            {educations.length > 1 && eduIndex > 0 && (
                              <div className="flex items-center mb-3 text-green-600">
                                <GraduationCap className="h-4 w-4 mr-2" />
                                <span className="text-sm font-medium">Advanced to</span>
                              </div>
                            )}
                            
                            {/* Degree details */}
                            <div className={`${eduIndex > 0 ? 'border-l-2 border-green-200 pl-4 ml-2' : ''}`}>
                              <div className="flex flex-col mb-4">
                                <div className="flex-1">
                                  <h4 className="text-base md:text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                                    {edu.degree}
                                  </h4>
                                  {/* Education details - shown on all devices */}
                                  <div className="flex flex-col space-y-1 text-muted-foreground mb-2 text-sm">
                                    <div className="flex items-center">
                                      <Calendar className="h-3 w-3 mr-1" />
                                      <span>{edu.period}</span>
                                    </div>
                                    {edu.gpa && (
                                      <div className="flex items-center">
                                        <Award className="h-3 w-3 mr-1 text-accent" />
                                        <span className="text-accent font-semibold">GPA: {edu.gpa}</span>
                                      </div>
                                    )}
                                  </div>
                                </div>
                              </div>
                              
                              {/* Relevant Coursework Section */}
                              {getRelevantCoursework(edu.degree).length > 0 && (
                                <div className="mb-6">
                                  <div className="mb-4">
                                    <h4 className="text-sm font-medium text-foreground mb-3">
                                      Relevant Coursework:
                                    </h4>
                                    <div className="space-y-2">
                                      {truncateCoursework(getRelevantCoursework(edu.degree), eduId).map((course, courseIndex) => (
                                        <div key={courseIndex} className="flex items-start">
                                          <span className="text-accent mr-3 mt-2 flex-shrink-0 w-1 h-1 rounded-full bg-accent"></span>
                                          <p className="text-muted-foreground leading-relaxed text-sm">
                                            {course}
                                          </p>
                                        </div>
                                      ))}
                                    </div>
                                    
                                    {/* See more/less button for coursework */}
                                    {getRelevantCoursework(edu.degree).length > 6 && (
                                      <button
                                        onClick={() => toggleCoursework(eduId)}
                                        className="flex items-center text-primary hover:text-accent text-sm font-medium ml-6 mt-2 transition-colors"
                                      >
                                        {expandedCoursework.has(eduId) ? (
                                          <>
                                            <span>See less</span>
                                            <ChevronUp className="h-4 w-4 ml-1" />
                                          </>
                                        ) : (
                                          <>
                                            <span>See more courses</span>
                                            <ChevronDown className="h-4 w-4 ml-1" />
                                          </>
                                        )}
                                      </button>
                                    )}
                                  </div>
                                </div>
                              )}

                              {/* Academic Highlights - only show for first degree */}
                              {schoolIndex === 0 && eduIndex === 0 && (
                                <div className="border-t border-border/50 pt-4">
                                  <p className="text-sm font-medium text-foreground mb-3">Academic Highlights:</p>
                                  <div className="flex flex-wrap gap-2">
                                    {[
                                      "Dean's List",
                                      "Academic Excellence",
                                      "Computer Science Society",
                                      "Programming Competitions"
                                    ].map((highlight) => (
                                      <span
                                        key={highlight}
                                        className="bg-secondary/50 hover:bg-primary/10 text-secondary-foreground hover:text-primary px-3 py-1 rounded-full text-xs font-medium transition-all duration-200 border border-transparent hover:border-primary/20"
                                      >
                                        {highlight}
                                      </span>
                                    ))}
                                  </div>
                                </div>
                              )}
                            </div>
                            
                            {/* Separator between degrees in same school */}
                            {eduIndex < educations.length - 1 && (
                              <div className="mt-6 border-b border-border/30"></div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Bottom timeline cap - visible on all devices */}
            <div className="absolute left-3 -bottom-2 w-6 h-6 bg-gradient-to-br from-primary/30 to-accent/30 rounded-full border-2 border-background shadow-sm"></div>
          </div>

          {/* Continuous Learning Section */}
          <div className="mt-12 relative pl-16">
            <div className="absolute left-3 top-6 w-6 h-6 bg-white border-4 border-accent/60 rounded-full shadow-lg z-10">
              <div className="absolute inset-1 bg-gradient-to-br from-accent/60 to-primary/60 rounded-full opacity-80"></div>
            </div>
            
            <div className="modern-card p-4 md:p-6">
              <h3 className="text-lg font-semibold mb-2 text-primary">
                Continuous Learning
              </h3>
              <div className="flex items-start mb-4">
                <span className="text-accent mr-3 mt-2 flex-shrink-0 w-1 h-1 rounded-full bg-accent"></span>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Completed 25+ online courses and certifications in modern web technologies, staying current with industry trends and best practices
                </p>
              </div>
              
              <div className="border-t border-border/50 pt-4">
                <p className="text-sm font-medium text-foreground mb-3">Learning Platforms:</p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Coursera",
                    "Udemy", 
                    "Pluralsight",
                    "FreeCodeCamp",
                    "LinkedIn Learning"
                  ].map((platform) => (
                    <span
                      key={platform}
                      className="bg-secondary/50 hover:bg-accent/10 text-secondary-foreground hover:text-accent px-3 py-1 rounded-full text-xs font-medium transition-all duration-200 border border-transparent hover:border-accent/20"
                    >
                      {platform}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
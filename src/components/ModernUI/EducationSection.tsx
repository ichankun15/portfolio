import React from "react";
import { portfolioData } from "@/data/portfolio";
import { GraduationCap, Award, Calendar } from "lucide-react";

const EducationSection: React.FC = () => {
  return (
    <section className="modern-section bg-background/50">
      <div className="modern-container px-4 sm:px-0">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Education
          </h2>

          <div className="space-y-6 sm:space-y-8">
            {portfolioData.education.map((edu, index) => (
              <div
                key={index}
                className="modern-card p-6 sm:p-8 group hover:scale-[1.02] transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:space-x-6">
                  {/* Graduation Cap Icon - hidden on mobile */}
                  <div className="flex-shrink-0 mb-4 sm:mb-0 hidden sm:flex items-center justify-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <GraduationCap className="h-8 w-8 text-white" />
                    </div>
                  </div>

                  {/* Degree, School, Period, GPA */}
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                      <div>
                        <h3 className="text-lg sm:text-xl font-semibold text-primary mb-1 sm:mb-2 group-hover:text-accent transition-colors">
                          {edu.degree}
                        </h3>
                        <p className="text-sm sm:text-lg text-muted-foreground font-medium">
                          {edu.school}
                        </p>
                      </div>

                      <div className="flex flex-col sm:items-end mt-2 sm:mt-0 text-sm sm:text-base text-muted-foreground">
                        <div className="flex items-center mb-1 sm:mb-2">
                          <Calendar className="h-4 w-4 mr-2" />
                          <span>{edu.period}</span>
                        </div>
                        {edu.gpa && (
                          <div className="flex items-center">
                            <Award className="h-4 w-4 mr-2 text-accent" />
                            <span className="text-accent font-semibold text-sm sm:text-base">
                              GPA: {edu.gpa}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>

                    {index === 0 && (
                      <div className="mt-4 p-3 sm:p-4 bg-secondary/20 rounded-lg">
                        <h4 className="font-semibold text-primary mb-2 text-sm sm:text-base">
                          Relevant Coursework:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {[
                            "Data Structures & Algorithms",
                            "Software Engineering",
                            "Database Systems",
                            "Computer Networks",
                            "Web Development",
                            "Machine Learning",
                          ].map((course) => (
                            <span
                              key={course}
                              className="bg-primary/10 text-primary px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-medium"
                            >
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 sm:mt-12 text-center px-4 sm:px-0">
            <div className="modern-card p-4 sm:p-6 max-w-md mx-auto">
              <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2 text-primary">
                Continuous Learning
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Completed 25+ online courses and certifications in modern web
                technologies
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;

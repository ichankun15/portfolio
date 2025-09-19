import React from "react";
import { portfolioData } from "@/data/portfolio";
import { GraduationCap, Award, Calendar } from "lucide-react";

const EducationSection: React.FC = () => {
  return (
    <section className="modern-section bg-background/50">
      <div className="modern-container">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Education
          </h2>

          <div className="grid gap-8">
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
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-6">
                      <div>
                        <h3 className="text-xl font-semibold text-primary mb-2 group-hover:text-accent transition-colors">
                          {edu.degree}
                        </h3>
                        <p className="text-base text-muted-foreground font-medium">
                          {edu.school}
                        </p>
                      </div>

                      <div className="flex flex-col sm:items-end mt-3 sm:mt-0 text-sm sm:text-base text-muted-foreground">
                        <div className="flex items-center mb-2">
                          <Calendar className="h-4 w-4 mr-2" />
                          <span>{edu.period}</span>
                        </div>
                        {edu.gpa && (
                          <div className="flex items-center">
                            <Award className="h-4 w-4 mr-2 text-accent" />
                            <span className="text-accent font-semibold">
                              GPA: {edu.gpa}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>

                    {index === 0 && (
                      <div className="mt-6 p-4 bg-secondary/20 rounded-lg">
                        <h4 className="font-semibold text-primary mb-3 text-base">
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
                              className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium"
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

          <div className="text-center mt-12">
            <div className="modern-card p-6 max-w-md mx-auto">
              <h3 className="text-lg font-semibold mb-2 text-primary">
                Continuous Learning
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
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

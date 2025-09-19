import { portfolioData } from '@/data/portfolio';
import { Code, Database, Cloud, TestTube, GitBranch, Wrench, Brain } from 'lucide-react';

const SkillsSection = () => {
  const getIconComponent = (iconName: string) => {
    const iconMap = {
      'Code': Code,
      'Database': Database,
      'Cloud': Cloud,
      'TestTube': TestTube,
      'GitBranch': GitBranch,
      'Wrench': Wrench,
      'Brain': Brain,
    };
    
    const IconComponent = iconMap[iconName as keyof typeof iconMap] || Code;
    return <IconComponent className="h-6 w-6 sm:h-7 sm:w-7" />;
  };

  return (
    <section className="modern-section bg-background/50">
      <div className="modern-container">
        <div className="max-w-7xl mx-auto">
          {/* Title */}
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          
          {/* Skills Grid */}
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
            {portfolioData.skills.map((skillGroup) => (
              <div
                key={skillGroup.category}
                className="modern-card p-6 sm:p-8 group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                {/* Category Header */}
                <div className="flex items-center mb-6 sm:mb-8">
                  <div
                    className={`p-3 sm:p-4 rounded-xl bg-gradient-to-r ${skillGroup.gradient} text-white mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    {getIconComponent(skillGroup.categoryIcon)}
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-slate-800 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                    {skillGroup.category}
                  </h3>
                </div>
                
                {/* Skills Items */}
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 sm:gap-6">
                  {skillGroup.items.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex flex-col items-center p-4 sm:p-6 bg-slate-50/80 dark:bg-slate-700/50 hover:bg-white dark:hover:bg-slate-600 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer group/item border border-slate-200/50 dark:border-slate-600/50"
                      title={skill.name}
                    >
                      {/* Skill Icon */}
                      <div className="w-16 h-16 sm:w-20 sm:h-20 mb-2 flex items-center justify-center">
                        <img
                          src={skill.icon}
                          alt={skill.name}
                          className="w-12 h-12 sm:w-16 sm:h-16 object-contain group-hover/item:scale-110 transition-transform duration-300 filter group-hover/item:drop-shadow-lg"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            const fallback = e.currentTarget.nextSibling as HTMLElement;
                            if (fallback) fallback.style.display = 'flex';
                          }}
                        />
                        <div 
                          className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg items-center justify-center text-white font-bold text-sm sm:text-base hidden"
                        >
                          {skill.name.charAt(0)}
                        </div>
                      </div>
                      {/* Skill Label */}
                      <span className="text-xs sm:text-sm font-normal text-slate-600 dark:text-slate-400 text-center leading-tight group-hover/item:text-slate-800 dark:group-hover/item:text-slate-200 transition-colors opacity-75">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          {/* Always Learning Section */}
          <div className="mt-12 sm:mt-16 text-center">
            <div className="modern-card p-6 sm:p-8 max-w-3xl mx-auto">
              <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <Brain className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-slate-800 dark:text-white">
                Always Learning
              </h3>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                Technology evolves rapidly, and I'm passionate about staying current with the latest trends and best practices. 
                Currently exploring <span className="font-semibold text-blue-600 dark:text-blue-400">Express - TS</span>, <span className="font-semibold text-purple-600 dark:text-purple-400">GraphQL</span>, and <span className="font-semibold text-teal-600 dark:text-teal-400">serverless architectures</span> to expand my skill set.
              </p>
              
              {/* Progress indicator */}
              <div className="flex justify-center items-center mt-6 sm:mt-8 space-x-2 sm:space-x-4">
                <div className="flex -space-x-2">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-full border-2 border-white"></div>
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full border-2 border-white"></div>
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full border-2 border-white"></div>
                </div>
                <span className="text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400">
                  Learning in progress...
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

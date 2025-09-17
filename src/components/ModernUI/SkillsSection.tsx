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
    return <IconComponent className="h-6 w-6" />;
  };

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {portfolioData.skills.map((skillGroup) => (
              <div key={skillGroup.category} className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl shadow-xl border border-slate-200/50 dark:border-slate-700/50 p-8 group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="flex items-center mb-8">
                  <div className={`p-4 rounded-xl bg-gradient-to-r ${skillGroup.gradient} text-white mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    {getIconComponent(skillGroup.categoryIcon)}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                    {skillGroup.category}
                  </h3>
                </div>
                
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-6">
                  {skillGroup.items.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex flex-col items-center p-6 bg-slate-50/80 dark:bg-slate-700/50 hover:bg-white dark:hover:bg-slate-600 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer group/item border border-slate-200/50 dark:border-slate-600/50"
                      title={skill.name}
                    >
                      <div className="w-20 h-20 mb-2 flex items-center justify-center">
                        <img
                          src={skill.icon}
                          alt={skill.name}
                          className="w-16 h-16 object-contain group-hover/item:scale-110 transition-transform duration-300 filter group-hover/item:drop-shadow-lg"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            const fallback = e.currentTarget.nextSibling as HTMLElement;
                            if (fallback) fallback.style.display = 'flex';
                          }}
                        />
                        <div 
                          className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg items-center justify-center text-white font-bold text-lg hidden"
                        >
                          {skill.name.charAt(0)}
                        </div>
                      </div>
                      <span className="text-xs font-normal text-slate-600 dark:text-slate-400 text-center leading-tight group-hover/item:text-slate-800 dark:group-hover/item:text-slate-200 transition-colors opacity-75">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-20 text-center">
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl shadow-xl border border-slate-200/50 dark:border-slate-700/50 p-10 max-w-3xl mx-auto">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-6 text-slate-800 dark:text-white">
                Always Learning
              </h3>
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                Technology evolves rapidly, and I'm passionate about staying current with the latest trends and best practices. 
                Currently exploring <span className="font-semibold text-blue-600 dark:text-blue-400">WebAssembly</span>, <span className="font-semibold text-purple-600 dark:text-purple-400">GraphQL</span>, and <span className="font-semibold text-teal-600 dark:text-teal-400">serverless architectures</span> to expand my skill set.
              </p>
              
              <div className="flex justify-center items-center mt-8 space-x-4">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full border-2 border-white"></div>
                </div>
                <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
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

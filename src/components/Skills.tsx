import React from 'react';
import { Code, Brain, FileSpreadsheet, Network, Smartphone } from 'lucide-react';

export function Skills() {
  const skills = [
    {
      name: "Python",
      level: "Basic",
      icon: <Code className="text-blue-500" size={24} />,
      description: "Fundamental programming concepts and syntax"
    },
    {
      name: "AI and ML",
      level: "",
      icon: <Brain className="text-purple-500" size={24} />,
      description: "Machine learning algorithms and artificial intelligence concepts"
    },
    {
      name: "Microsoft Office",
      level: "Basic",
      icon: <FileSpreadsheet className="text-green-500" size={24} />,
      description: "Word, Excel, PowerPoint fundamentals"
    },
    {
      name: "Cisco Packet Tracer",
      level: "Basic",
      icon: <Network className="text-orange-500" size={24} />,
      description: "Network simulation and basic networking concepts"
    },
    {
      name: "Custom ROM Testing & Recovery",
      level: "Basic",
      icon: <Smartphone className="text-red-500" size={24} />,
      description: "Android ROM testing and recovery procedures"
    }
  ];

  return (
    <section id="skills" className="py-20" style={{ backgroundColor: '#1f2833' }}>
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-200">Skills</h2>
        <div className="space-y-6">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-gray-700 flex items-center gap-4 transform hover:scale-102 transition-transform duration-300"
            >
              <div className="p-3 bg-white/5 rounded-full">
                {skill.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-200">
                  {skill.name}
                  {skill.level && <span className="text-sm text-gray-400 ml-2">({skill.level})</span>}
                </h3>
                <p className="text-gray-400 text-sm">{skill.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
import { useState } from 'react';
import { Code, Database, Globe, Server } from 'lucide-react';
import clsx from 'clsx';

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const skillCategories = {
    frontend: {
      title: "Frontend",
      icon: <Globe className="h-6 w-6" />,
      skills: [
        { name: "React.js", level: 95, color: "from-blue-400 to-cyan-500" },
        { name: "JavaScript (ES6+)", level: 90, color: "from-yellow-400 to-orange-500" },
        { name: "Three.js", level: 85, color: "from-purple-400 to-pink-500" },
        { name: "Tailwind CSS", level: 92, color: "from-cyan-400 to-blue-500" },
        { name: "GSAP", level: 80, color: "from-green-400 to-teal-500" },
        { name: "HTML5/CSS3", level: 95, color: "from-red-400 to-pink-500" },
      ],
    },
    backend: {
      title: "Backend",
      icon: <Server className="h-6 w-6" />,
      skills: [
        { name: "Node.js", level: 88, color: "from-green-400 to-emerald-500" },
        { name: "Express.js", level: 85, color: "from-gray-400 to-slate-500" },
        { name: "MongoDB", level: 82, color: "from-green-500 to-teal-600" },
        { name: "Socket.io", level: 80, color: "from-purple-400 to-indigo-500" },
        { name: "RESTful APIs", level: 90, color: "from-blue-400 to-cyan-500" },
        { name: "JWT Auth", level: 85, color: "from-orange-400 to-red-500" },
      ],
    },
    programming: {
      title: "Programming",
      icon: <Code className="h-6 w-6" />,
      skills: [
        { name: "Java", level: 85, color: "from-orange-400 to-red-500" },
        { name: "Python", level: 80, color: "from-blue-400 to-indigo-500" },
        { name: "SQL", level: 90, color: "from-cyan-400 to-blue-500" },
        { name: "Data Structures", level: 88, color: "from-purple-400 to-pink-500" },
        { name: "Algorithms", level: 85, color: "from-green-400 to-teal-500" },
        { name: "Git/GitHub", level: 92, color: "from-gray-400 to-slate-500" },
      ],
    },
    tools: {
      title: "Tools & Cloud",
      icon: <Database className="h-6 w-6" />,
      skills: [
        { name: "Google Cloud Platform", level: 88, color: "from-blue-400 to-cyan-500" },
        { name: "VS Code", level: 95, color: "from-blue-400 to-indigo-500" },
        { name: "Postman", level: 85, color: "from-orange-400 to-red-500" },
        { name: "Chrome DevTools", level: 90, color: "from-green-400 to-teal-500" },
        { name: "IntelliJ IDEA", level: 82, color: "from-purple-400 to-pink-500" },
        { name: "Figma", level: 75, color: "from-pink-400 to-purple-500" },
      ],
    },
  };

  const currentSkills = skillCategories[activeCategory];

  return (
    <section id="skills" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">Skills</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            A comprehensive view of the technologies and tools I've mastered.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(skillCategories).map(([key, cat]) => (
            <button
              key={key}
              className={clsx(
                "px-4 py-2 rounded-full font-medium border-2 transition-all duration-300",
                activeCategory === key
                  ? "bg-gradient-to-r from-cyan-400 to-purple-600 text-white border-transparent"
                  : "border-gray-600 text-gray-300 hover:border-cyan-400"
              )}
              onClick={() => setActiveCategory(key)}
            >
              {cat.icon}
              <span className="ml-2">{cat.title}</span>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentSkills.skills.map((skill, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-white/5 backdrop-blur border border-white/10 hover:border-cyan-400 transition-all"
            >
              <div className="flex justify-between mb-2">
                <span className="text-white font-semibold">{skill.name}</span>
                <span className="text-sm text-gray-400">{skill.level}%</span>
              </div>
              <div className="w-full h-3 bg-gray-700 rounded-full">
                <div
                  className={clsx("h-3 rounded-full bg-gradient-to-r", skill.color)}
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


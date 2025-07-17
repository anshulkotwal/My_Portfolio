import { useState, useEffect, useRef } from 'react';
import { Code, Database, Globe, Server, Sparkles, Zap, Star } from 'lucide-react';

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);

  const skillCategories = {
    frontend: {
      title: "Frontend",
      icon: <Globe className="h-6 w-6" />,
      gradient: "from-blue-400 via-purple-500 to-pink-500",
      skills: [
        { name: "React.js", level: 95, color: "from-blue-400 to-cyan-500", particles: "🚀" },
        { name: "JavaScript (ES6+)", level: 90, color: "from-yellow-400 to-orange-500", particles: "⚡" },
        { name: "Three.js", level: 85, color: "from-purple-400 to-pink-500", particles: "🌟" },
        { name: "Tailwind CSS", level: 92, color: "from-cyan-400 to-blue-500", particles: "🎨" },
        { name: "GSAP", level: 80, color: "from-green-400 to-teal-500", particles: "✨" },
        { name: "HTML5/CSS3", level: 95, color: "from-red-400 to-pink-500", particles: "🔥" },
      ],
    },
    backend: {
      title: "Backend",
      icon: <Server className="h-6 w-6" />,
      gradient: "from-green-400 via-emerald-500 to-teal-600",
      skills: [
        { name: "Node.js", level: 88, color: "from-green-400 to-emerald-500", particles: "⚙️" },
        { name: "Express.js", level: 85, color: "from-gray-400 to-slate-500", particles: "🛠️" },
        { name: "MongoDB", level: 82, color: "from-green-500 to-teal-600", particles: "🍃" },
        { name: "Socket.io", level: 80, color: "from-purple-400 to-indigo-500", particles: "🔌" },
        { name: "RESTful APIs", level: 90, color: "from-blue-400 to-cyan-500", particles: "🔗" },
        { name: "JWT Auth", level: 85, color: "from-orange-400 to-red-500", particles: "🔐" },
      ],
    },
    programming: {
      title: "Programming",
      icon: <Code className="h-6 w-6" />,
      gradient: "from-purple-400 via-pink-500 to-red-500",
      skills: [
        { name: "Java", level: 85, color: "from-orange-400 to-red-500", particles: "☕" },
        { name: "Python", level: 80, color: "from-blue-400 to-indigo-500", particles: "🐍" },
        { name: "SQL", level: 90, color: "from-cyan-400 to-blue-500", particles: "💾" },
        { name: "Data Structures", level: 88, color: "from-purple-400 to-pink-500", particles: "🏗️" },
        { name: "Algorithms", level: 85, color: "from-green-400 to-teal-500", particles: "🧮" },
        { name: "Git/GitHub", level: 92, color: "from-gray-400 to-slate-500", particles: "🌿" },
      ],
    },
    tools: {
      title: "Tools & Cloud",
      icon: <Database className="h-6 w-6" />,
      gradient: "from-cyan-400 via-blue-500 to-indigo-600",
      skills: [
        { name: "Google Cloud Platform", level: 88, color: "from-blue-400 to-cyan-500", particles: "☁️" },
        { name: "VS Code", level: 95, color: "from-blue-400 to-indigo-500", particles: "💻" },
        { name: "Postman", level: 85, color: "from-orange-400 to-red-500", particles: "📮" },
        { name: "Chrome DevTools", level: 90, color: "from-green-400 to-teal-500", particles: "🔍" },
        { name: "IntelliJ IDEA", level: 82, color: "from-purple-400 to-pink-500", particles: "🧠" },
        { name: "Figma", level: 75, color: "from-pink-400 to-purple-500", particles: "🎨" },
      ],
    },
  };

  const currentSkills = skillCategories[activeCategory];

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    const section = sectionRef.current;
    if (section) {
      section.addEventListener('mousemove', handleMouseMove);
      return () => section.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  const FloatingParticles = () => (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${2 + Math.random() * 2}s`,
          }}
        />
      ))}
    </div>
  );

  const GlowCursor = () => (
    <div
      className="fixed pointer-events-none z-50 mix-blend-difference"
      style={{
        left: mousePosition.x - 10,
        top: mousePosition.y - 10,
        transform: 'translate(-50%, -50%)',
      }}
    >
      <div className="w-20 h-20 bg-gradient-to-r from-cyan-400/20 to-purple-600/20 rounded-full blur-xl animate-pulse" />
    </div>
  );

  return (
    <section ref={sectionRef} id="skills" className="py-24 px-4 relative overflow-hidden">
      <FloatingParticles />
      <GlowCursor />
      
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 to-purple-600/5" />
        <div 
          className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_70%)]"
          style={{
            backgroundSize: '60px 60px',
            backgroundImage: `
              linear-gradient(rgba(120,119,198,0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(120,119,198,0.05) 1px, transparent 1px)
            `,
          }}
        />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header with enhanced animations */}
        <div className="text-center mb-16">
          <div className="relative inline-block">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 relative">
              My{' '}
              <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 animate-pulse">
                Skills
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400/20 to-purple-600/20 rounded-lg blur-xl animate-pulse" />
              </span>
            </h2>
            <Sparkles className="absolute -top-4 -right-4 h-8 w-8 text-cyan-400 animate-spin" />
            <Zap className="absolute -bottom-2 -left-6 h-6 w-6 text-purple-500 animate-bounce" />
          </div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto animate-fade-in">
            A comprehensive view of the technologies and tools I've mastered.
          </p>
        </div>

        {/* Category buttons with enhanced design */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(skillCategories).map(([key, cat]) => (
            <button
              key={key}
              className={`group relative px-6 py-3 rounded-2xl font-medium transition-all duration-500 transform hover:scale-105 ${
                activeCategory === key
                  ? 'text-white shadow-2xl'
                  : 'text-gray-300 hover:text-white'
              }`}
              onClick={() => setActiveCategory(key)}
            >
              {/* Animated background */}
              <div className={`absolute inset-0 rounded-2xl transition-all duration-500 ${
                activeCategory === key
                  ? `bg-gradient-to-r ${cat.gradient} opacity-100`
                  : 'bg-white/5 opacity-0 group-hover:opacity-100'
              }`} />
              
              {/* Glowing border */}
              <div className={`absolute inset-0 rounded-2xl border-2 transition-all duration-500 ${
                activeCategory === key
                  ? 'border-transparent'
                  : 'border-white/10 group-hover:border-cyan-400/50'
              }`} />
              
              {/* Content */}
              <div className="relative flex items-center gap-2">
                <div className="transform transition-transform duration-300 group-hover:rotate-12">
                  {cat.icon}
                </div>
                <span>{cat.title}</span>
              </div>
              
              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
            </button>
          ))}
        </div>

        {/* Skills grid with extraordinary animations */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentSkills.skills.map((skill, idx) => (
            <div
              key={idx}
              className="group relative transform transition-all duration-700 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${idx * 0.1}s` }}
              onMouseEnter={() => setHoveredSkill(idx)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              {/* Card background with glassmorphism */}
              <div className="relative p-6 rounded-2xl backdrop-blur-lg border border-white/10 group-hover:border-cyan-400/50 transition-all duration-500 overflow-hidden">
                {/* Animated background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                {/* Floating particles effect */}
                <div className="absolute top-2 right-2 text-2xl animate-bounce group-hover:animate-spin transition-all duration-300">
                  {skill.particles}
                </div>
                
                {/* Skill info */}
                <div className="relative z-10">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-white font-bold text-lg group-hover:text-cyan-400 transition-colors duration-300">
                      {skill.name}
                    </h3>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-400 animate-pulse" />
                      <span className="text-sm text-gray-300 font-mono">{skill.level}%</span>
                    </div>
                  </div>
                  
                  {/* Animated progress bar */}
                  <div className="relative">
                    <div className="w-full h-2 bg-gray-700/50 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out transform origin-left`}
                        style={{
                          width: hoveredSkill === idx ? `${skill.level}%` : '0%',
                          animation: hoveredSkill === idx ? 'pulse 2s infinite' : 'none',
                        }}
                      />
                    </div>
                    
                    {/* Glowing progress indicator */}
                    <div
                      className={`absolute top-0 h-2 bg-gradient-to-r ${skill.color} rounded-full blur-sm opacity-50 transition-all duration-1000`}
                      style={{ width: hoveredSkill === idx ? `${skill.level}%` : '0%' }}
                    />
                  </div>
                </div>
                
                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              
              {/* External glow on hover */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl transform scale-110`} />
            </div>
          ))}
        </div>

        {/* Floating skill indicators */}
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 opacity-20">
          <div className="flex flex-col gap-4">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full animate-pulse"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
        
        @keyframes pulse {
          0%, 100% {
            transform: scaleX(1);
          }
          50% {
            transform: scaleX(1.05);
          }
        }
      `}</style>
    </section>
  );
};
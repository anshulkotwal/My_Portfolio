
import { useState, useEffect, useRef } from 'react';
import { Code, Database, Globe, Server, Sparkles, Zap, Star, Moon, Sun } from 'lucide-react';

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState('frontend');
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isDarkMode, setIsDarkMode] = useState(true);
  const sectionRef = useRef(null);

  // Enhanced skill logos as SVG components
  const SkillLogos = {
    'React.js': () => (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#61DAFB">
        <path d="M12 10.11c1.03 0 1.87.84 1.87 1.89s-.84 1.89-1.87 1.89c-1.03 0-1.87-.84-1.87-1.89s.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7-.52-.59-1.03-1.23-1.51-1.9a22.7 22.7 0 0 1-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86.27.06.57.11.88.16l-.3-.51m6.54-.76l.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9c-.6 0-1.17 0-1.71.03-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47.54.03 1.11.03 1.71.03.6 0 1.17 0 1.71-.03.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7.52.59 1.03 1.23 1.51 1.9.82.08 1.63.2 2.4.36.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86-.27-.06-.57-.11-.88-.16l.3.51m1.45-7.05c1.47.84 1.63 3.05 1.01 5.63 2.54.75 4.37 1.99 4.37 3.68s-1.83 2.93-4.37 3.68c.62 2.58.46 4.79-1.01 5.63-1.46.84-3.45-.12-5.37-1.95-1.92 1.83-3.91 2.79-5.37 1.95-1.47-.84-1.63-3.05-1.01-5.63-2.54-.75-4.37-1.99-4.37-3.68s1.83-2.93 4.37-3.68c-.62-2.58-.46-4.79 1.01-5.63 1.46-.84 3.45.12 5.37 1.95 1.92-1.83 3.91-2.79 5.37-1.95z" />
      </svg>
    ),
    'JavaScript (ES6+)': () => (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#F7DF1E">
        <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" />
      </svg>
    ),
    'Node.js': () => (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#339933">
        <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.250,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.990,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.890V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.570,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.275-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z" />
      </svg>
    ),
    'Python': () => (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#3776AB">
        <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09z" />
      </svg>
    ),
    'Java': () => (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#ED8B00">
        <path d="M8.851 18.56s-.917.534.653.714c1.902.218 2.874.187 4.969-.211 0 0 .552.346 1.321.646-4.699 2.013-10.633-.118-6.943-1.149M8.276 15.933s-1.028.761.542.924c2.032.209 3.636.227 6.413-.308 0 0 .384.389.987.602-5.679 1.661-12.007.13-7.942-1.218M13.116 11.475c1.158 1.333-.304 2.533-.304 2.533s2.939-1.518 1.589-3.418c-1.261-1.772-2.228-2.652 3.007-5.688 0-.001-8.216 2.051-4.292 6.573M19.33 20.504s.679.559-.747.991c-2.712.822-11.288 1.069-13.669.033-.856-.373.75-.89 1.254-.998.527-.114.828-.093.828-.093-.953-.671-6.156 1.317-2.643 1.887 9.58 1.553 17.462-.7 14.977-1.82M9.292 13.21s-4.362 1.036-1.544 1.412c1.189.159 3.561.123 5.77-.062 1.806-.152 3.618-.477 3.618-.477s-.637.272-1.098.587c-4.429 1.165-12.986.623-10.522-.568 2.082-1.006 3.776-.892 3.776-.892" />
      </svg>
    ),
    'MongoDB': () => (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#47A248">
        <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z" />
      </svg>
    ),
    'HTML5/CSS3': () => (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#E34F26">
        <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z" />
      </svg>
    ),
    'Tailwind CSS': () => (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#38B2AC">
        <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C7.666,17.818,9.027,19.2,12.001,19.2c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
      </svg>
    ),
    'Three.js': () => (
      <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center text-white font-bold text-sm shadow-lg">
        3D
      </div>
    ),
    'GSAP': () => (
      <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center text-white font-bold text-sm shadow-lg">
        GS
      </div>
    ),
    'Express.js': () => (
      <div className="w-8 h-8 bg-gradient-to-br from-gray-600 to-gray-800 rounded-lg flex items-center justify-center text-white font-bold text-sm shadow-lg">
        EX
      </div>
    ),
    'Socket.io': () => (
      <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-sm shadow-lg">
        IO
      </div>
    ),
    'RESTful APIs': () => (
      <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-sm shadow-lg">
        API
      </div>
    ),
    'JWT Auth': () => (
      <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center text-white font-bold text-sm shadow-lg">
        JWT
      </div>
    ),
    'SQL': () => (
      <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-sm shadow-lg">
        SQL
      </div>
    ),
    'Data Structures': () => (
      <div className="w-8 h-8 bg-gradient-to-br from-teal-500 to-green-600 rounded-lg flex items-center justify-center text-white font-bold text-sm shadow-lg">
        DS
      </div>
    ),
    'Algorithms': () => (
      <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-sm shadow-lg">
        ALG
      </div>
    ),
    'Git/GitHub': () => (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
    'Google Cloud Platform': () => (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#4285F4">
        <path d="M12.19 2.14a9.42 9.42 0 0 0-8.4 5.24L7.36 9a5.45 5.45 0 0 1 9.18-.54l.91-.91a7.31 7.31 0 0 0-5.26-5.41z" />
        <path d="M20.21 16.76A9.42 9.42 0 0 0 12.19 2.14v4.72a5.45 5.45 0 0 1 4.45 4.45z" />
        <path d="M3.79 16.76A9.42 9.42 0 0 0 12.19 21.86v-4.72a5.45 5.45 0 0 1-4.45-4.45z" />
      </svg>
    ),
    'VS Code': () => (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#007ACC">
        <path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z" />
      </svg>
    ),
    'Postman': () => (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#FF6C37">
        <path d="M13.527.099C6.955-.744.942 3.9.099 10.473c-.843 6.572 3.8 12.584 10.373 13.428 6.573.843 12.587-3.801 13.428-10.374C24.744 6.955 20.101.943 13.527.099zm2.471 7.485a.855.855 0 0 0-.593.25l-4.453 4.453-.307-.307-.643-.643c4.389-4.376 5.18-4.418 5.996-3.753z" />
      </svg>
    ),
    'Chrome DevTools': () => (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#4285F4">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2.4c5.302 0 9.6 4.298 9.6 9.6s-4.298 9.6-9.6 9.6S2.4 17.302 2.4 12 6.698 2.4 12 2.4zm0 1.2c-4.636 0-8.4 3.764-8.4 8.4s3.764 8.4 8.4 8.4 8.4-3.764 8.4-8.4-3.764-8.4-8.4-8.4z" />
      </svg>
    ),
    'IntelliJ IDEA': () => (
      <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center text-white font-bold text-sm shadow-lg">
        IJ
      </div>
    ),
    'Figma': () => (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#F24E1E">
        <path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51z" />
        <path d="M8.736 0v8.981h4.588V0H8.736zM7.265 1.471h4.588v6.04H7.265V1.471z" />
        <path d="M8.736 8.981H4.148C1.672 8.981-.343 6.967-.343 4.49S1.672 0 4.148 0h4.588v8.981z" />
      </svg>
    ),
  };

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
              className={`group relative px-6 py-3 rounded-2xl font-medium transition-all duration-500 transform hover:scale-105 ${activeCategory === key
                ? 'text-white shadow-2xl'
                : 'text-gray-300 hover:text-white'
                }`}
              onClick={() => setActiveCategory(key)}
            >
              {/* Animated background */}
              <div className={`absolute inset-0 rounded-2xl transition-all duration-500 ${activeCategory === key
                ? `bg-gradient-to-r ${cat.gradient} opacity-100`
                : 'bg-white/5 opacity-0 group-hover:opacity-100'
                }`} />

              {/* Glowing border */}
              <div className={`absolute inset-0 rounded-2xl border-2 transition-all duration-500 ${activeCategory === key
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
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex-shrink-0">
                      {SkillLogos[skill.name] ? (
                        (() => {
                          const LogoComponent = SkillLogos[skill.name];
                          return <LogoComponent />;
                        })()
                      ) : (
                        <div className="w-8 h-8 bg-gradient-to-r from-gray-400 to-gray-600 rounded-lg flex items-center justify-center text-white font-bold text-sm shadow-lg">
                          {skill.name.split(' ').map(word => word[0]).join('')}
                        </div>
                      )}
                    </div>
                    <h3 className="text-white font-bold text-lg group-hover:text-cyan-400 transition-colors duration-300">
                      {skill.name}
                    </h3>
                  </div>

                  <div className="flex justify-between items-center mb-4">
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
}
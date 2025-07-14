import { ArrowRight, ExternalLink, Github, Zap, Globe, Gamepad2, Sparkles, Brain, Palette } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

const projects = [
  {
    id: 1,
    title: "AI Agent with Gemini API + MCP",
    description: "Intelligent chatbot using Google Gemini API and Model Context Protocol for memory-aware interactions with real-time SSE messaging.",
    image: "/api/placeholder/400/300",
    tags: ["Node.js", "Gemini API", "MCP", "SSE", "Zod"],
    demoUrl: "#",
    githubUrl: "https://github.com/anshulkotwal/gemini-mcp-chatbot",
    icon: Brain,
    gradient: "from-purple-500 to-pink-500",
    color: "purple"
  },
  {
    id: 2,
    title: "3D Portfolio - Zajno Inspired",
    description: "Real-time 3D transitions and shaders built with Three.js and GLSL for an interactive portfolio site.",
    image: "/api/placeholder/400/300",
    tags: ["Three.js", "GSAP", "GLSL", "Shaders", "WebGL"],
    demoUrl: "#",
    githubUrl: "https://github.com/anshulkotwal/zajno-inspired-portfolio",
    icon: Palette,
    gradient: "from-cyan-500 to-blue-500",
    color: "cyan"
  },
  {
    id: 3,
    title: "Real-Time Chess Game",
    description: "Multiplayer chess built with WebSocket sync, drag-drop UI, audio feedback, and 99.9% uptime.",
    image: "/api/placeholder/400/300",
    tags: ["Node.js", "Socket.io", "Chess.js", "WebSockets", "Tailwind"],
    demoUrl: "#",
    githubUrl: "https://github.com/anshulkotwal/chess-game-realtime",
    icon: Gamepad2,
    gradient: "from-green-500 to-teal-500",
    color: "green"
  },
  {
    id: 4,
    title: "Cocktail - GSAP Animation Website",
    description: "Scroll-triggered animation portfolio with layered parallax and smooth UX. Built with Vite and React.",
    image: "/api/placeholder/400/300",
    tags: ["React.js", "GSAP", "Vite", "Tailwind", "ScrollTrigger"],
    demoUrl: "#",
    githubUrl: "https://github.com/anshulkotwal/gsap-cocktail-site",
    icon: Sparkles,
    gradient: "from-orange-500 to-red-500",
    color: "orange"
  },
  {
    id: 5,
    title: "WanderNest - Travel Planner",
    description: "Travel platform for exploring, planning, and booking trips. Responsive UI with clean UX and JavaScript logic.",
    image: "/api/placeholder/400/300",
    tags: ["HTML", "CSS", "JavaScript", "Responsive", "DOM"],
    demoUrl: "#",
    githubUrl: "https://github.com/anshulkotwal/WanderNest",
    icon: Globe,
    gradient: "from-blue-500 to-purple-500",
    color: "blue"
  },
  {
    id: 6,
    title: "Real-Time Geolocation Tracker",
    description: "Track users on the map in real-time using WebSockets and Leaflet.js. Optimized with Express and Socket.io.",
    image: "/api/placeholder/400/300",
    tags: ["Node.js", "Socket.io", "Leaflet.js", "Express", "WebSockets"],
    demoUrl: "#",
    githubUrl: "https://github.com/anshulkotwal/Real-time-Geolocation-Tracker",
    icon: Zap,
    gradient: "from-lime-500 to-emerald-500",
    color: "lime"
  }
];

const ProjectCard = ({ project, index }) => {
  const cardRef = useRef();
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -15;
      const rotateY = ((x - centerX) / centerX) * 15;

      setMousePosition({ x, y });

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
    };

    const handleMouseLeave = () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
      setIsHovered(false);
    };

    const handleMouseEnter = () => {
      setIsHovered(true);
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);
    card.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
      card.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0) scale(1)';
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const Icon = project.icon;

  return (
    <div
      ref={cardRef}
      className="project-card group relative bg-gray-900/50 backdrop-blur-xl rounded-3xl overflow-hidden border border-gray-700/50 transition-all duration-500 hover:border-gray-500/50 opacity-0 translate-y-10 scale-95"
      style={{
        transformOrigin: 'center',
        transitionDelay: `${index * 0.08}s`,
        boxShadow: isHovered
          ? `0 25px 50px -12px rgba(0,0,0,0.8), 0 0 30px rgba(255,255,255,0.2)`
          : '0 10px 25px -5px rgba(0,0,0,0.5)'
      }}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
      <div className="absolute top-4 right-4 z-10">
        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.gradient} p-2.5 transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12`}>
          <Icon size={24} className="text-white" />
        </div>
      </div>
      {isHovered && (
        <div
          className="absolute pointer-events-none transition-opacity duration-300"
          style={{
            left: mousePosition.x - 50,
            top: mousePosition.y - 50,
            width: 100,
            height: 100,
            background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(10px)'
          }}
        />
      )}
      <div className="relative h-56 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent z-10" />
        <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
      </div>
      <div className="p-6 relative z-10">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className={`px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${project.gradient} bg-opacity-20 text-white border border-white/10 transform transition-all duration-300 hover:scale-105`}
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className={`text-xl font-bold mb-3 bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300`}>
          {project.title}
        </h3>
        <p className="text-gray-300 text-sm mb-6 leading-relaxed group-hover:text-white transition-colors duration-300">
          {project.description}
        </p>
        <div className="flex justify-between items-center">
          <div className="flex space-x-4">
            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className={`flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r ${project.gradient} text-white text-sm font-medium transform transition-all duration-300 hover:scale-105 hover:shadow-lg`}>
              <Globe size={16} /> Live Demo
            </a>
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 text-white text-sm font-medium border border-white/10 transform transition-all duration-300 hover:scale-105 hover:bg-white/10">
              <Github size={16} /> Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ProjectsSection = () => {
  const containerRef = useRef();
  const titleRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0) scale(1)';
          }
        });
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="relative py-32 px-4 min-h-screen bg-transparent overflow-hidden">
      <div ref={containerRef} className="container mx-auto max-w-7xl relative z-10">
        <div
          ref={titleRef}
          className="text-center mb-20 opacity-0 translate-y-10 transition-all duration-1000"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            A collection of my most impactful work — showcasing expertise in full-stack development,
            3D graphics, AI integration, and modern web technologies.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
        <div className="text-center">
          <a
            href="https://github.com/anshulkotwal"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
          >
            <Github size={20} />
            Explore More on GitHub
            <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

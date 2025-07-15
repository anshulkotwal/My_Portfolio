import { ArrowRight, ExternalLink, Github, Zap, Globe, Gamepad2, Sparkles, Brain, Palette, GraduationCap, Star, Code, Layers, Rocket } from "lucide-react";
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
    color: "purple",
    difficulty: "Advanced",
    category: "AI/ML"
  },
  {
    id: 2,
    title: "3D Portfolio - Zajno Inspired",
    description: "Real-time 3D transitions and shaders built with Three.js and GLSL for an interactive portfolio site.",
    image: "/projects/project2.png",
    tags: ["Three.js", "GSAP", "GLSL", "Shaders", "WebGL"],
    demoUrl: "https://zajno-awwwards.netlify.app/",
    githubUrl: "https://github.com/anshulkotwal/zajno-inspired-portfolio",
    icon: Palette,
    gradient: "from-cyan-500 to-blue-500",
    color: "cyan",
    difficulty: "Expert",
    category: "3D/Graphics"
  },
  {
    id: 3,
    title: "Real-Time Chess Game",
    description: "Multiplayer chess built with WebSocket sync, drag-drop UI, audio feedback, and 99.9% uptime.",
    image: "/projects/project3.png",
    tags: ["Node.js", "Socket.io", "Chess.js", "WebSockets", "Tailwind"],
    demoUrl: "#",
    githubUrl: "https://github.com/anshulkotwal/chess-game-realtime",
    icon: Gamepad2,
    gradient: "from-green-500 to-teal-500",
    color: "green",
    difficulty: "Advanced",
    category: "Game Dev"
  },
  {
    id: 4,
    title: "Cocktail - GSAP Animation Website",
    description: "Scroll-triggered animation portfolio with layered parallax and smooth UX. Built with Vite and React.",
    image: "/projects/project4.png",
    tags: ["React.js", "GSAP", "Vite", "Tailwind", "ScrollTrigger"],
    demoUrl: "https://cocktailsanshul.netlify.app/",
    githubUrl: "https://github.com/anshulkotwal/gsap-cocktail-site",
    icon: Sparkles,
    gradient: "from-orange-500 to-red-500",
    color: "orange",
    difficulty: "Intermediate",
    category: "Animation"
  },
  {
    id: 5,
    title: "🎬 Movie Explorer",
    description: "A sleek, modern, and responsive movie discovery app built with React, Vite, and Tailwind CSS, powered by the TMDB API.",
    image: "/projects/project5.png", 
    tags: ["React", "Vite", "Tailwind CSS", "TMDB API", "Responsive"],
    demoUrl: "https://moviedekhloo.netlify.app/", 
    githubUrl: "https://github.com/anshulkotwal/movie-explorer",
    icon: Globe, 
    gradient: "from-red-500 to-yellow-500",
    color: "red",
    difficulty: "Intermediate",
    category: "Web App"
  },
  {
    id: 6,
    title: "Real-Time Geolocation Tracker",
    description: "Track users on the map in real-time using WebSockets and Leaflet.js. Optimized with Express and Socket.io.",
    image: "/projects/project6.jpeg",
    tags: ["Node.js", "Socket.io", "Leaflet.js", "Express", "WebSockets"],
    demoUrl: "#",
    githubUrl: "https://github.com/anshulkotwal/Real-time-Geolocation-Tracker",
    icon: Zap,
    gradient: "from-lime-500 to-emerald-500",
    color: "lime",
    difficulty: "Advanced",
    category: "Real-time"
  },
  {
    id: 7,
    title: "Ajay Kumar Garg Engineering College Website",
    description: "Responsive and modern college website showcasing departments, placements, events, and achievements using HTML, CSS, and JavaScript.",
    image: "/projects/project7.png", 
    tags: ["HTML", "CSS", "JavaScript", "Responsive", "Education"],
    demoUrl: "https://anshulakgec.netlify.app/", 
    githubUrl: "https://github.com/anshulkotwal/AKGEC-Website",
    icon: GraduationCap,
    gradient: "from-indigo-500 to-pink-500",
    color: "indigo",
    difficulty: "Beginner",
    category: "Website"
  }
];

const FloatingParticles = () => {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    sceneRef.current = scene;
    rendererRef.current = renderer;

    // Create floating particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 100;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 10;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.005,
      color: 0x00ffff,
      transparent: true,
      opacity: 0.8
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    camera.position.z = 3;

    const animate = () => {
      requestAnimationFrame(animate);
      
      particlesMesh.rotation.x += 0.0005;
      particlesMesh.rotation.y += 0.001;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 pointer-events-none" />;
};

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

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Beginner': return 'text-green-400 bg-green-500/20';
      case 'Intermediate': return 'text-yellow-400 bg-yellow-500/20';
      case 'Advanced': return 'text-orange-400 bg-orange-500/20';
      case 'Expert': return 'text-red-400 bg-red-500/20';
      default: return 'text-gray-400 bg-gray-500/20';
    }
  };

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
      {/* Animated gradient overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
      
      {/* Floating orb effect */}
      <div className="absolute -inset-4 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${project.gradient} blur-xl opacity-20 animate-pulse`} />
      </div>

      {/* Top badges */}
      <div className="absolute top-4 left-4 right-4 z-20 flex justify-between items-start">
        <div className="flex flex-col gap-2">
          <span className={`px-2 py-1 text-xs font-medium rounded-lg ${getDifficultyColor(project.difficulty)} border border-current/30`}>
            {project.difficulty}
          </span>
          <span className="px-2 py-1 text-xs font-medium rounded-lg text-gray-300 bg-gray-800/80 border border-gray-600/50">
            {project.category}
          </span>
        </div>
        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.gradient} p-2.5 transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12`}>
          <Icon size={24} className="text-white" />
        </div>
      </div>

      {/* Mouse follower effect */}
      {isHovered && (
        <div
          className="absolute pointer-events-none transition-opacity duration-300 z-10"
          style={{
            left: mousePosition.x - 50,
            top: mousePosition.y - 50,
            width: 100,
            height: 100,
            background: `radial-gradient(circle, ${project.gradient.includes('purple') ? 'rgba(168,85,247,0.3)' : 'rgba(6,182,212,0.3)'} 0%, transparent 70%)`,
            borderRadius: '50%',
            filter: 'blur(20px)'
          }}
        />
      )}

      {/* Image section */}
      <div className="relative h-56 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent z-10" />
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:brightness-110" 
        />
        
        {/* Overlay pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/40 z-10" />
      </div>

      {/* Content */}
      <div className="p-6 relative z-10">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, tagIndex) => (
            <span
              key={tag}
              className={`px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${project.gradient} bg-opacity-20 text-white border border-white/10 transform transition-all duration-300 hover:scale-105`}
              style={{ animationDelay: `${tagIndex * 0.1}s` }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className={`text-xl font-bold mb-3 bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300`}>
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-gray-300 text-sm mb-6 leading-relaxed group-hover:text-white transition-colors duration-300">
          {project.description}
        </p>

        {/* Action buttons */}
        <div className="flex justify-between items-center">
          <div className="flex space-x-3">
            <a 
              href={project.demoUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r ${project.gradient} text-white text-sm font-medium transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-current/25`}
            >
              <ExternalLink size={14} /> 
              Live Demo
            </a>
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 text-white text-sm font-medium border border-white/10 transform transition-all duration-300 hover:scale-105 hover:bg-white/10 hover:border-white/20"
            >
              <Github size={14} /> 
              Code
            </a>
          </div>
          
          {/* Star rating */}
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                size={12} 
                className={`${i < 4 ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'} transition-all duration-300`} 
              />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${project.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />
    </div>
  );
};

const ProjectFilter = ({ activeFilter, setActiveFilter }) => {
  const filters = [
    { id: 'all', label: 'All Projects', icon: Layers },
    { id: 'AI/ML', label: 'AI & ML', icon: Brain },
    { id: '3D/Graphics', label: '3D Graphics', icon: Palette },
    { id: 'Game Dev', label: 'Games', icon: Gamepad2 },
    { id: 'Real-time', label: 'Real-time', icon: Zap },
    { id: 'Web App', label: 'Web Apps', icon: Globe },
    { id: 'Animation', label: 'Animation', icon: Sparkles },
    { id: 'Website', label: 'Websites', icon: Code }
  ];

  return (
    <div className="flex flex-wrap justify-center gap-3 mb-16">
      {filters.map((filter) => {
        const Icon = filter.icon;
        return (
          <button
            key={filter.id}
            onClick={() => setActiveFilter(filter.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
              activeFilter === filter.id
                ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg shadow-cyan-500/25'
                : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white'
            }`}
          >
            <Icon size={16} />
            {filter.label}
          </button>
        );
      })}
    </div>
  );
};

export const ProjectsSection = () => {
  const containerRef = useRef();
  const titleRef = useRef();
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

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
      {/* Background effects */}
      <FloatingParticles />
      
      {/* Grid background */}
      <div 
        className="absolute inset-0 opacity-5" 
        style={{
          backgroundImage: 
            'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}
      />
      
      {/* Radial gradient overlay */}
      <div 
        className="absolute inset-0" 
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(6,182,212,0.1) 0%, transparent 50%)'
        }}
      />

      <div ref={containerRef} className="container mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <div
          ref={titleRef}
          className="text-center mb-16 opacity-0 translate-y-10 transition-all duration-1000"
        >
          <div className="flex justify-center items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-purple-600 p-3 animate-pulse">
              <Rocket size={24} className="text-white" />
            </div>
            <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-orange-500 p-3 animate-pulse">
              <Star size={24} className="text-white" />
            </div>
          </div>
          <p className="text-gray-400 text-lg max-w-4xl mx-auto leading-relaxed">
            A curated collection of my most impactful work — showcasing expertise in full-stack development,
            3D graphics, AI integration, and cutting-edge web technologies. Each project represents a unique
            challenge solved with innovative solutions.
          </p>
        </div>

        {/* Filter buttons */}
        <ProjectFilter activeFilter={activeFilter} setActiveFilter={setActiveFilter} />

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center space-y-8">
          <div className="flex justify-center items-center gap-8 text-gray-400">
            <div className="flex items-center gap-2">
              <Code size={20} />
              <span>{projects.length}+ Projects</span>
            </div>
            <div className="flex items-center gap-2">
              <Github size={20} />
              <span>Open Source</span>
            </div>
            <div className="flex items-center gap-2">
              <Star size={20} />
              <span>Production Ready</span>
            </div>
          </div>
          
          <a
            href="https://github.com/anshulkotwal"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 group"
          >
            <Github size={20} className="group-hover:rotate-12 transition-transform duration-300" />
            Explore More on GitHub
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
      </div>


    </section>
  );
};
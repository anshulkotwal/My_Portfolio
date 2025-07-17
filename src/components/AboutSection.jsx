import { Code, Star, Zap, Globe, ChevronRight, Sparkles } from "lucide-react";
import { useState, useEffect, useRef } from 'react';

const cn = (...args) => args.filter(Boolean).join(' ');

export const AboutSection = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [activeParticle, setActiveParticle] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveParticle(prev => (prev + 1) % 8);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100
    });
  };

  const achievements = [
    {
      icon: <Code className="h-6 w-6 sm:h-8 sm:w-8" />,
      title: "Full-Stack Mastery",
      description: "Architected scalable web applications with React.js ecosystem, Node.js microservices, and MongoDB clusters. Optimized performance to handle 5000+ concurrent users.",
      color: "from-cyan-500 via-blue-600 to-indigo-700",
      stats: "25% Performance Boost",
      metric: "5000+ Users",
      gradient: "bg-gradient-to-r from-cyan-400/20 to-blue-600/20"
    },
    {
      icon: <Star className="h-6 w-6 sm:h-8 sm:w-8" />,
      title: "Cloud Leadership",
      description: "Google Cloud Facilitator mentoring 600+ developers across global cohorts. Earned 5200+ skill badges and achieved milestone certifications in cloud architecture.",
      color: "from-purple-500 via-pink-600 to-rose-700",
      stats: "600+ Mentees",
      metric: "5200+ Badges",
      gradient: "bg-gradient-to-r from-purple-400/20 to-pink-600/20"
    },
    {
      icon: <Zap className="h-6 w-6 sm:h-8 sm:w-8" />,
      title: "Algorithm Expert",
      description: "Conquered 550+ DSA challenges on LeetCode with 1700+ contest rating. Achieved 5-star SQL mastery and 4-star Python expertise on HackerRank.",
      color: "from-green-500 via-teal-600 to-emerald-700",
      stats: "550+ Problems",
      metric: "1700+ Rating",
      gradient: "bg-gradient-to-r from-green-400/20 to-teal-600/20"
    },
    {
      icon: <Globe className="h-6 w-6 sm:h-8 sm:w-8" />,
      title: "3D Innovator",
      description: "Crafted immersive 3D web experiences using Three.js, WebGL shaders, and GSAP animations. Maintained buttery-smooth 60fps performance across devices.",
      color: "from-orange-500 via-red-600 to-pink-700",
      stats: "60fps Performance",
      metric: "WebGL Expert",
      gradient: "bg-gradient-to-r from-orange-400/20 to-red-600/20"
    }
  ];

  return (
    <section ref={sectionRef} id="about" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-transparent">

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Enhanced section header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-block relative">
            <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-4 sm:mb-6 lg:mb-8 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}>
              <span className="relative">
                About{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-600 animate-pulse">
                  Me
                </span>
                <Sparkles className="absolute -top-1 -right-4 sm:-top-2 sm:-right-6 lg:-top-2 lg:-right-8 h-4 w-4 sm:h-6 sm:w-6 lg:h-8 lg:w-8 text-yellow-400 animate-spin" />
              </span>
            </h2>
          </div>
          <p className={`text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed transition-all duration-1000 delay-200 px-4 sm:px-0 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
            Passionate about creating <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">extraordinary digital experiences</span> and solving complex problems through innovative code architecture.
          </p>
        </div>

        {/* Enhanced main content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 items-center mb-16 sm:mb-20 lg:mb-24">
          {/* Enhanced bio section */}
          <div className={`space-y-6 sm:space-y-8 order-2 lg:order-1 transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
            }`}>
            <div className="relative">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6 lg:mb-8 leading-tight">
                Computer Science Virtuoso &
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">
                  Web Development Architect
                </span>
              </h3>
              <div className="absolute -left-3 sm:-left-4 lg:-left-6 top-0 w-1 sm:w-1.5 lg:w-2 h-full bg-gradient-to-b from-cyan-400 via-purple-500 to-pink-600 rounded-full">
                <div className="absolute top-0 left-0 w-full h-4 sm:h-6 lg:h-8 bg-white/20 rounded-full animate-pulse"></div>
              </div>
            </div>

            <div className="space-y-4 sm:space-y-6 text-gray-300 leading-relaxed text-sm sm:text-base lg:text-lg">
              <div className="relative p-4 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-r from-cyan-500/10 to-purple-600/10 border border-cyan-400/20">
                <p>
                  Currently pursuing B.Tech (Hons.) in CSIT with Cyber Security specialization at
                  <span className="text-cyan-400 font-bold"> Ajay Kumar Garg Engineering College</span>
                  <span className="block mt-2 text-xs sm:text-sm text-purple-400">🎯 CGPA: 8.23/10 - Academic Excellence</span>
                </p>
              </div>

              <div className="relative p-4 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-r from-purple-500/10 to-pink-600/10 border border-purple-400/20">
                <p>
                  As a <span className="text-purple-400 font-bold">Google Cloud Facilitator</span>,
                  I've mentored 600+ learners and earned 5200+ skill badges. My passion for
                  problem-solving shines through <span className="text-cyan-400 font-bold">550+ DSA solutions</span>
                  and consistent competitive programming achievements.
                </p>
              </div>

              <div className="relative p-4 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-r from-green-500/10 to-teal-600/10 border border-green-400/20">
                <p>
                  I specialize in creating immersive web experiences using cutting-edge technologies
                  like Three.js, GSAP, and modern frameworks. My projects span from
                  <span className="text-purple-400 font-bold"> real-time multiplayer games</span> to
                  <span className="text-cyan-400 font-bold"> AI-powered chatbots</span>.
                </p>
              </div>
            </div>

            {/* Enhanced action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-6 sm:pt-8">
              <a
                href="#contact"
                className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl sm:rounded-2xl text-white font-bold hover:from-cyan-400 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 overflow-hidden text-center"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Get In Touch
                  <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                <div className="absolute inset-0 bg-white/20 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              <a
                href="/projects/Anshul_Kotwal_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-6 sm:px-8 py-3 sm:py-4 border-2 border-cyan-400 rounded-xl sm:rounded-2xl text-cyan-400 font-bold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 transform hover:scale-105 relative overflow-hidden text-center"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Download Resume
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                </span>
                <div className="absolute inset-0 bg-cyan-400/10 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            </div>
          </div>

          {/* Enhanced profile image with 3D effects */}
          <div className={`relative order-1 lg:order-2 transition-all duration-1000 delay-500 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`}>
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 mx-auto" onMouseMove={handleMouseMove}>
              {/* Animated rings */}
              <div className="absolute inset-0 rounded-full border-2 border-cyan-400/30 animate-spin-slow"></div>
              <div className="absolute inset-2 sm:inset-4 rounded-full border-2 border-purple-400/30 animate-spin-reverse"></div>
              <div className="absolute inset-4 sm:inset-8 rounded-full border-2 border-pink-400/30 animate-spin-slow"></div>

              {/* Main image container */}
              <div className="absolute inset-6 sm:inset-8 lg:inset-12 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full p-1">
                <div className="w-full h-full bg-gray-900 rounded-full flex items-center justify-center overflow-hidden">
                  <img
                    src="/projects/photo.jpg"
                    alt="Anshul Kotwal"
                    className="w-full h-full object-cover rounded-full transform hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Interactive floating elements - adjusted for mobile */}
              <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 lg:-top-6 lg:-right-6 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center animate-float shadow-xl">
                <Code className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-white" />
              </div>
              <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 lg:-bottom-6 lg:-left-6 w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center animate-float-delayed shadow-xl">
                <Star className="h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5 text-white" />
              </div>
              <div className="absolute top-1/2 -left-6 sm:-left-8 lg:-left-12 w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center animate-float shadow-xl">
                <Zap className="h-3 w-3 sm:h-3.5 sm:w-3.5 lg:h-4 lg:w-4 text-white" />
              </div>
              <div className="absolute top-1/4 -right-6 sm:-right-8 lg:-right-10 w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 bg-gradient-to-r from-green-400 to-teal-500 rounded-full animate-float-delayed shadow-xl"></div>

              {/* Mouse follow effect - hidden on mobile */}
              <div
                className="absolute w-2 h-2 sm:w-3 sm:h-3 lg:w-4 lg:h-4 bg-white/50 rounded-full pointer-events-none transition-all duration-300 ease-out hidden sm:block"
                style={{
                  left: `${mousePosition.x}%`,
                  top: `${mousePosition.y}%`,
                  transform: 'translate(-50%, -50%)'
                }}
              />
            </div>
          </div>
        </div>

        {/* Enhanced achievement cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {achievements.map((item, index) => (
            <div
              key={index}
              className={`group relative p-4 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl bg-white/5 backdrop-blur-lg border border-white/10 hover:border-cyan-400/50 transition-all duration-700 transform hover:scale-105 hover:-translate-y-2 sm:hover:-translate-y-4 cursor-pointer ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
              style={{ transitionDelay: `${600 + index * 100}ms` }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Dynamic gradient background */}
              <div className={cn(
                "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-20 transition-all duration-700 rounded-2xl sm:rounded-3xl",
                item.color
              )}></div>

              {/* Enhanced icon */}
              <div className={cn(
                "relative mb-4 sm:mb-6 p-2 sm:p-3 lg:p-4 rounded-xl sm:rounded-2xl bg-gradient-to-r text-white w-fit transform group-hover:scale-110 transition-transform duration-500",
                item.color
              )}>
                {item.icon}
                <div className="absolute inset-0 bg-white/20 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Enhanced content */}
              <div className="relative z-10 space-y-3 sm:space-y-4">
                <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 sm:mb-3 group-hover:text-cyan-400 transition-colors">
                  {item.title}
                </h4>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 group-hover:text-gray-300 transition-colors">
                  {item.description}
                </p>

                <div className="flex flex-col gap-2">
                  <div className={cn(
                    "inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold bg-gradient-to-r text-white transform group-hover:scale-105 transition-transform",
                    item.color
                  )}>
                    {item.stats}
                  </div>
                  <div className="text-xs text-gray-500 font-medium">
                    {item.metric}
                  </div>
                </div>
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-all duration-700 from-cyan-400 via-purple-500 to-pink-600"></div>

              {/* Corner accents */}
              <div className="absolute top-2 sm:top-4 right-2 sm:right-4 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100"></div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(180deg); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(-180deg); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .animate-spin-reverse {
          animation: spin-reverse 15s linear infinite;
        }
        
        @media (max-width: 640px) {
          .animate-float {
            animation: float 8s ease-in-out infinite;
          }
          .animate-float-delayed {
            animation: float-delayed 10s ease-in-out infinite;
          }
        }
      `}</style>
    </section>
  );
};
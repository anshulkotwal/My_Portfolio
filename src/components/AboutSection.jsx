import { Code, Star, Zap, Globe, ChevronRight, Sparkles, Heart, Coffee, BookOpen, Rocket, Target, Brain, GraduationCap, Award, Users } from "lucide-react";
import { useState, useEffect, useRef } from 'react';

const cn = (...args) => args.filter(Boolean).join(' ');

export const AboutSection = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [activeParticle, setActiveParticle] = useState(0);
  const [currentStory, setCurrentStory] = useState(0);
  const [typewriterText, setTypewriterText] = useState('');
  const sectionRef = useRef(null);

  const storySnippets = [
    "Turning coffee into code since 2021 ☕",
    "Debug by day, dream in algorithms by night 🌙", 
    "Building immersive web experiences ✨",
    "Where creativity meets computation 🚀"
  ];

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

  // Typewriter effect
  useEffect(() => {
    let currentChar = 0;
    const currentSnippet = storySnippets[currentStory];
    
    const typeInterval = setInterval(() => {
      if (currentChar <= currentSnippet.length) {
        setTypewriterText(currentSnippet.slice(0, currentChar));
        currentChar++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          setCurrentStory(prev => (prev + 1) % storySnippets.length);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, [currentStory]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100
    });
  };

  // Consolidated key highlights from resume
  const achievements = [
    {
      icon: <Code className="h-6 w-6 sm:h-8 sm:w-8" />,
      title: "Full-Stack Developer",
      description: "Currently interning at Global Next Consulting, building scalable web applications with 25% performance improvement and 30% faster load times.",
      color: "from-cyan-500 via-blue-600 to-indigo-700",
      stats: "5000+ Users Supported",
      metric: "25% Performance Boost"
    },
    {
      icon: <Star className="h-6 w-6 sm:h-8 sm:w-8" />,
      title: "Google Cloud Facilitator", 
      description: "Mentored 600+ developers across 2024-2025 cohorts, earned 5200+ skill badges, and received milestone certifications for community contributions.",
      color: "from-purple-500 via-pink-600 to-rose-700",
      stats: "600+ Mentees",
      metric: "5200+ Badges"
    },
    {
      icon: <Zap className="h-6 w-6 sm:h-8 sm:w-8" />,
      title: "Algorithm Expert",
      description: "550+ LeetCode problems solved with 1700+ contest rating. 5-star SQL and 4-star Python on HackerRank with multiple certifications.",
      color: "from-green-500 via-teal-600 to-emerald-700", 
      stats: "550+ Problems",
      metric: "1700+ Contest Rating"
    },
    {
      icon: <Globe className="h-6 w-6 sm:h-8 sm:w-8" />,
      title: "3D Web Innovator",
      description: "Created immersive portfolio with Three.js, achieving 98%+ Lighthouse score, <1.5s FCP, and 2K+ monthly visitors with WebGL expertise.",
      color: "from-orange-500 via-red-600 to-pink-700",
      stats: "98%+ Lighthouse Score", 
      metric: "2K+ Monthly Visitors"
    }
  ];

  const personalTouches = [
    { icon: <Coffee className="h-4 w-4" />, text: "Fueled by coffee and curiosity", color: "text-amber-400" },
    { icon: <BookOpen className="h-4 w-4" />, text: "Always learning something new", color: "text-green-400" },
    { icon: <Heart className="h-4 w-4" />, text: "Passionate about mentoring", color: "text-pink-400" }
  ];

  return (
    <section ref={sectionRef} id="about" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-transparent">
      {/* Floating particles background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 sm:w-2 sm:h-2 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full opacity-30 ${activeParticle === i % 8 ? 'animate-pulse' : ''}`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 200}ms`,
              transform: `translateY(${Math.sin(i) * 20}px) translateX(${Math.cos(i) * 20}px)`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-block relative">
            <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-4 sm:mb-6 lg:mb-8 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <span className="relative">
                About{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-600 animate-pulse">
                  Me
                </span>
                <Sparkles className="absolute -top-1 -right-4 sm:-top-2 sm:-right-6 lg:-top-2 lg:-right-8 h-4 w-4 sm:h-6 sm:w-6 lg:h-8 lg:w-8 text-yellow-400 animate-spin" />
              </span>
            </h2>
          </div>
          
          {/* Typewriter effect */}
          <div className={`text-lg sm:text-xl lg:text-2xl text-cyan-400 font-mono mb-6 h-8 sm:h-10 transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            {typewriterText}
            <span className="animate-pulse">|</span>
          </div>

          <p className={`text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed transition-all duration-1000 delay-400 px-4 sm:px-0 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Full-Stack Developer & Google Cloud Facilitator passionate about creating 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600"> immersive digital experiences</span> that push the boundaries of what's possible on the web.
          </p>

          {/* Personal touches */}
          <div className={`flex flex-wrap justify-center gap-4 sm:gap-6 mt-6 sm:mt-8 transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            {personalTouches.map((touch, index) => (
              <div key={index} className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-white/5 border border-white/10 ${touch.color}`}>
                {touch.icon}
                <span className="text-xs sm:text-sm font-medium">{touch.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Main content - simplified */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 items-center mb-16 sm:mb-20 lg:mb-24">
          {/* Bio section - streamlined */}
          <div className={`space-y-6 sm:space-y-8 order-2 lg:order-1 transition-all duration-1000 delay-700 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <div className="relative">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6 sm:mb-8 leading-tight">
                Full-Stack Developer &
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">
                  Creative Problem Solver
                </span>
              </h3>
              <div className="absolute -left-3 sm:-left-4 lg:-left-6 top-0 w-1 sm:w-1.5 lg:w-2 h-full bg-gradient-to-b from-cyan-400 via-purple-500 to-pink-600 rounded-full">
                <div className="absolute top-0 left-0 w-full h-4 sm:h-6 lg:h-8 bg-white/20 rounded-full animate-pulse"></div>
              </div>
            </div>

            <div className="space-y-4 sm:space-y-6 text-gray-300 leading-relaxed text-sm sm:text-base lg:text-lg">
              <div className="relative p-4 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-r from-cyan-500/10 to-purple-600/10 border border-cyan-400/20">
                <div className="flex items-start gap-3 mb-3">
                  <GraduationCap className="h-5 w-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-cyan-400 font-bold mb-1">Academic Excellence</h4>
                    <p>B.Tech (Hons.) CSIT with Cyber Security at Ajay Kumar Garg Engineering College</p>
                    <span className="text-xs text-purple-400">CGPA: 8.23/10 • Expected Graduation: May 2026</span>
                  </div>
                </div>
              </div>

              <div className="relative p-4 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-r from-purple-500/10 to-pink-600/10 border border-purple-400/20">
                <div className="flex items-start gap-3 mb-3">
                  <Users className="h-5 w-5 text-purple-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-purple-400 font-bold mb-1">Community Impact</h4>
                    <p>Google Cloud Facilitator (2024-2025) mentoring 600+ developers globally. Led workshops for 200+ students as OSS Coordinator and Technical Workshop Leader.</p>
                  </div>
                </div>
              </div>

              <div className="relative p-4 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-r from-green-500/10 to-teal-600/10 border border-green-400/20">
                <div className="flex items-start gap-3 mb-3">
                  <Award className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-green-400 font-bold mb-1">Technical Expertise</h4>
                    <p>Specializing in React.js, Node.js, Three.js for immersive web experiences. Currently interning at Global Next Consulting, building scalable applications for 5000+ users.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-6 sm:pt-8">
              <a
                href="#contact"
                className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl sm:rounded-2xl text-white font-bold hover:from-cyan-400 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 overflow-hidden text-center"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Let's Connect
                  <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
              <a
                href="/projects/Anshul_Kotwal_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-6 sm:px-8 py-3 sm:py-4 border-2 border-cyan-400 rounded-xl sm:rounded-2xl text-cyan-400 font-bold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 transform hover:scale-105 text-center"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Download Resume
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                </span>
              </a>
            </div>
          </div>

          {/* Profile image with 3D effects */}
          <div className={`relative order-1 lg:order-2 transition-all duration-1000 delay-800 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 mx-auto" onMouseMove={handleMouseMove}>
              {/* Animated rings */}
              <div className="absolute inset-0 rounded-full border-2 border-cyan-400/30 animate-spin-slow"></div>
              <div className="absolute inset-2 sm:inset-4 rounded-full border-2 border-purple-400/30 animate-spin-reverse"></div>
              <div className="absolute inset-4 sm:inset-8 rounded-full border-2 border-pink-400/30 animate-spin-slow"></div>

              {/* Pulsating background glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-600/20 rounded-full animate-pulse blur-xl"></div>

              {/* Main image container */}
              <div className="absolute inset-6 sm:inset-8 lg:inset-12 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full p-1">
                <div className="w-full h-full bg-gray-900 rounded-full flex items-center justify-center overflow-hidden">
                  <img
                    src="/projects/photo.jpg"
                    alt="Anshul Kotwal - Full Stack Developer"
                    className="w-full h-full object-cover rounded-full transform hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Interactive floating elements */}
              <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 lg:-top-6 lg:-right-6 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center animate-float shadow-xl hover:scale-125 transition-transform cursor-pointer">
                <Code className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-white" />
              </div>
              <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 lg:-bottom-6 lg:-left-6 w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center animate-float-delayed shadow-xl hover:scale-125 transition-transform cursor-pointer">
                <Star className="h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5 text-white" />
              </div>
              <div className="absolute top-1/2 -left-6 sm:-left-8 lg:-left-12 w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center animate-float shadow-xl hover:scale-125 transition-transform cursor-pointer">
                <Zap className="h-3 w-3 sm:h-3.5 sm:w-3.5 lg:h-4 lg:w-4 text-white" />
              </div>
              <div className="absolute top-1/4 -right-6 sm:-right-8 lg:-right-10 w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 bg-gradient-to-r from-green-400 to-teal-500 rounded-full animate-float-delayed shadow-xl hover:scale-125 transition-transform cursor-pointer"></div>

              {/* Mouse follow effect */}
              <div
                className="absolute w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full pointer-events-none transition-all duration-300 ease-out hidden sm:block opacity-70"
                style={{
                  left: `${mousePosition.x}%`,
                  top: `${mousePosition.y}%`,
                  transform: 'translate(-50%, -50%)',
                  boxShadow: '0 0 20px rgba(99, 102, 241, 0.5)'
                }}
              />
            </div>
          </div>
        </div>

        {/* Achievement cards - consolidated and updated */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-16 sm:mb-20">
          {achievements.map((item, index) => (
            <div
              key={index}
              className={`group relative p-4 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl bg-white/5 backdrop-blur-lg border border-white/10 hover:border-cyan-400/50 transition-all duration-700 transform hover:scale-105 hover:-translate-y-2 sm:hover:-translate-y-4 cursor-pointer ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: `${900 + index * 100}ms` }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Icon with pulse effect */}
              <div className={cn(
                "relative mb-4 sm:mb-6 p-2 sm:p-3 lg:p-4 rounded-xl sm:rounded-2xl bg-gradient-to-r text-white w-fit transform group-hover:scale-110 transition-transform duration-500",
                item.color
              )}>
                {item.icon}
                {hoveredCard === index && (
                  <div className="absolute inset-0 bg-white/10 rounded-xl sm:rounded-2xl animate-ping"></div>
                )}
              </div>

              {/* Content */}
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

              {/* Progress indicator */}
              {hoveredCard === index && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
              )}
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className={`text-center transition-all duration-1000 delay-1200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="relative p-6 sm:p-8 lg:p-12 rounded-3xl bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 border border-cyan-400/20 backdrop-blur-lg max-w-4xl mx-auto">
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Ready to Build Something 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">
                  {' '}Extraordinary?
                </span>
              </h3>
              <p className="text-gray-300 text-base sm:text-lg mb-6 max-w-2xl mx-auto">
                Let's collaborate on your next project or discuss opportunities in web development and cloud technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#contact"
                  className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl text-white font-bold hover:from-cyan-400 hover:to-purple-500 transition-all duration-300 transform hover:scale-105"
                >
                  <span className="flex items-center justify-center gap-2">
                    Start a Conversation
                    <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </a>
                <a
                  href="#projects"
                  className="group px-8 py-4 border-2 border-cyan-400 rounded-xl text-cyan-400 font-bold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 transform hover:scale-105"
                >
                  <span className="flex items-center justify-center gap-2">
                    View My Work
                    <Sparkles className="h-5 w-5 group-hover:rotate-12 transition-transform" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }

        @keyframes float-delayed {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(-180deg);
          }
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
      `}</style>
    </section>
  );
};
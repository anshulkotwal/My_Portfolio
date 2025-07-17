import { useState, useEffect, useRef } from 'react';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  Users, 
  Code2, 
  Award, 
  TrendingUp, 
  Zap,
  Star,
  ChevronRight,
  Building,
  GraduationCap,
  Presentation,
  GitBranch
} from 'lucide-react';

export const ExperienceSection = () => {
  const [activeExperience, setActiveExperience] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredAchievement, setHoveredAchievement] = useState(null);
  const sectionRef = useRef(null);

  const experiences = [
    {
      id: 1,
      company: "Global Next Consulting India Private Limited",
      role: "Full Stack Web Development Intern",
      type: "Internship",
      period: "June 2025 – Present",
      location: "Remote",
      status: "Current",
      gradient: "from-blue-500 via-purple-500 to-cyan-500",
      icon: <Briefcase className="h-5 w-5 sm:h-6 sm:w-6" />,
      achievements: [
        {
          text: "Developed scalable web applications using modern full-stack technologies",
          metric: "25% performance improvement",
          icon: <Code2 className="h-4 w-4 sm:h-5 sm:w-5" />,
          color: "from-blue-400 to-cyan-500"
        },
        {
          text: "Implemented responsive user interfaces with React.js and Node.js",
          metric: "30% faster load times",
          icon: <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5" />,
          color: "from-green-400 to-emerald-500"
        },
        {
          text: "Built RESTful APIs and integrated third-party services",
          metric: "5000+ concurrent users",
          icon: <Users className="h-4 w-4 sm:h-5 sm:w-5" />,
          color: "from-purple-400 to-pink-500"
        }
      ],
      tags: ["React.js", "Node.js", "RESTful APIs", "Full Stack", "Performance Optimization"]
    },
    {
      id: 2,
      company: "Google Cloud",
      role: "Cloud Facilitator",
      type: "Mentorship",
      period: "2024 – 2025",
      location: "Global",
      status: "Active",
      gradient: "from-orange-500 via-red-500 to-pink-500",
      icon: <Award className="h-5 w-5 sm:h-6 sm:w-6" />,
      achievements: [
        {
          text: "Mentored learners across multiple cohorts in cloud technologies",
          metric: "600+ learners guided",
          icon: <GraduationCap className="h-4 w-4 sm:h-5 sm:w-5" />,
          color: "from-orange-400 to-red-500"
        },
        {
          text: "Earned skill badges and certifications for consistent contribution",
          metric: "5200+ skill badges",
          icon: <Star className="h-4 w-4 sm:h-5 sm:w-5" />,
          color: "from-yellow-400 to-orange-500"
        },
        {
          text: "Received swags and milestone certifications for community impact",
          metric: "Multiple awards",
          icon: <Award className="h-4 w-4 sm:h-5 sm:w-5" />,
          color: "from-purple-400 to-pink-500"
        }
      ],
      tags: ["Google Cloud", "Mentorship", "Community Building", "Cloud Computing", "Leadership"]
    },
    {
      id: 3,
      company: "Open Source Society",
      role: "OSS Coordinator & Technical Workshop Leader",
      type: "Leadership",
      period: "2024 – Present",
      location: "College",
      status: "Active",
      gradient: "from-green-500 via-teal-500 to-cyan-500",
      icon: <GitBranch className="h-5 w-5 sm:h-6 sm:w-6" />,
      achievements: [
        {
          text: "Led Web Development and Git workshops for student community",
          metric: "Multiple workshops",
          icon: <Presentation className="h-4 w-4 sm:h-5 sm:w-5" />,
          color: "from-green-400 to-teal-500"
        },
        {
          text: "Conducted training sessions on modern web development frameworks",
          metric: "200+ students trained",
          icon: <Users className="h-4 w-4 sm:h-5 sm:w-5" />,
          color: "from-cyan-400 to-blue-500"
        },
        {
          text: "Coordinate open source initiatives and community engagement",
          metric: "Active since 2024",
          icon: <Building className="h-4 w-4 sm:h-5 sm:w-5" />,
          color: "from-purple-400 to-indigo-500"
        }
      ],
      tags: ["Open Source", "Git", "Web Development", "Teaching", "Community Leadership"]
    }
  ];

  const currentExperience = experiences[activeExperience];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const FloatingElements = () => (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="absolute animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${3 + Math.random() * 2}s`,
          }}
        >
          <div className="w-2 h-2 bg-gradient-to-r from-cyan-400/30 to-purple-600/30 rounded-full blur-sm" />
        </div>
      ))}
    </div>
  );

  return (
    <section ref={sectionRef} id="experience" className="py-16 sm:py-20 lg:py-24 px-4 relative overflow-hidden">
      <FloatingElements />
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(120,119,198,0.1),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,107,107,0.1),transparent_70%)]" />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="relative inline-block">
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6">
              My{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">
                Experience
              </span>
            </h2>
            <Zap className="absolute -top-1 -right-6 sm:-top-2 sm:-right-8 h-6 w-6 sm:h-8 sm:w-8 text-yellow-400 animate-pulse" />
          </div>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto px-4">
            Journey through my professional growth and impactful contributions.
          </p>
        </div>

        {/* Mobile Timeline (visible on small screens) */}
        <div className="lg:hidden mb-8">
          <div className="flex overflow-x-auto space-x-4 pb-4 scrollbar-hide">
            {experiences.map((exp, index) => (
              <button
                key={exp.id}
                onClick={() => setActiveExperience(index)}
                className={`flex-shrink-0 p-3 rounded-xl transition-all duration-300 min-w-[200px] ${
                  activeExperience === index
                    ? 'bg-white/15 border-2 border-cyan-400/50'
                    : 'bg-white/5 border-2 border-white/10'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${exp.gradient} ${
                    activeExperience === index ? 'animate-pulse' : ''
                  }`}>
                    {exp.icon}
                  </div>
                  
                  <div className="flex-1 min-w-0 text-left">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-semibold text-white text-sm truncate">
                        {exp.company}
                      </h4>
                      {exp.status === 'Current' && (
                        <span className="px-2 py-1 text-xs bg-green-500/20 text-green-400 rounded-full">
                          Current
                        </span>
                      )}
                    </div>
                    <p className="text-gray-400 text-xs mb-1 truncate">{exp.role}</p>
                    <p className="text-gray-500 text-xs">{exp.period}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Desktop Timeline (hidden on mobile) */}
          <div className="hidden lg:block lg:col-span-4">
            <div className="sticky top-8">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Calendar className="h-5 w-5 text-cyan-400" />
                Timeline
              </h3>
              
              <div className="space-y-4">
                {experiences.map((exp, index) => (
                  <button
                    key={exp.id}
                    onClick={() => setActiveExperience(index)}
                    className={`w-full text-left p-4 rounded-xl transition-all duration-300 group ${
                      activeExperience === index
                        ? 'bg-white/10 border-2 border-cyan-400/50'
                        : 'bg-white/5 border-2 border-white/10 hover:border-cyan-400/30'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`p-2 rounded-lg bg-gradient-to-r ${exp.gradient} ${
                        activeExperience === index ? 'animate-pulse' : ''
                      }`}>
                        {exp.icon}
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-semibold text-white text-sm truncate">
                            {exp.company}
                          </h4>
                          {exp.status === 'Current' && (
                            <span className="px-2 py-1 text-xs bg-green-500/20 text-green-400 rounded-full">
                              Current
                            </span>
                          )}
                        </div>
                        <p className="text-gray-400 text-sm mb-1">{exp.role}</p>
                        <p className="text-gray-500 text-xs">{exp.period}</p>
                      </div>
                      
                      <ChevronRight className={`h-4 w-4 text-gray-400 transition-transform ${
                        activeExperience === index ? 'rotate-90' : ''
                      }`} />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Experience Details */}
          <div className="lg:col-span-8">
            <div className="relative">
              {/* Main Experience Card */}
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 p-4 sm:p-6 lg:p-8 mb-6 lg:mb-8">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-6 gap-4">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className={`p-2 sm:p-3 rounded-xl bg-gradient-to-r ${currentExperience.gradient} animate-pulse flex-shrink-0`}>
                      {currentExperience.icon}
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 break-words">
                        {currentExperience.company}
                      </h3>
                      <p className="text-base sm:text-lg text-cyan-400 font-semibold mb-2 break-words">
                        {currentExperience.role}
                      </p>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-gray-400">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4 flex-shrink-0" />
                          <span className="text-sm">{currentExperience.period}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4 flex-shrink-0" />
                          <span className="text-sm">{currentExperience.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-start sm:justify-end">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      currentExperience.type === 'Internship' 
                        ? 'bg-blue-500/20 text-blue-400'
                        : currentExperience.type === 'Mentorship'
                        ? 'bg-orange-500/20 text-orange-400'
                        : 'bg-green-500/20 text-green-400'
                    }`}>
                      {currentExperience.type}
                    </span>
                  </div>
                </div>

                {/* Achievements */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-white flex items-center gap-2">
                    <Star className="h-5 w-5 text-yellow-400" />
                    Key Achievements
                  </h4>
                  
                  {currentExperience.achievements.map((achievement, index) => (
                    <div
                      key={index}
                      className="group relative p-3 sm:p-4 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 cursor-pointer"
                      onMouseEnter={() => setHoveredAchievement(index)}
                      onMouseLeave={() => setHoveredAchievement(null)}
                    >
                      <div className="flex items-start gap-3">
                        <div className={`p-2 rounded-lg bg-gradient-to-r ${achievement.color} group-hover:animate-pulse flex-shrink-0`}>
                          {achievement.icon}
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <p className="text-gray-300 mb-2 group-hover:text-white transition-colors text-sm sm:text-base">
                            {achievement.text}
                          </p>
                          
                          <div className="flex items-center gap-2 flex-wrap">
                            <div className={`px-2 sm:px-3 py-1 rounded-full bg-gradient-to-r ${achievement.color} text-white text-xs sm:text-sm font-bold`}>
                              {achievement.metric}
                            </div>
                            <TrendingUp className="h-4 w-4 text-green-400 animate-bounce" />
                          </div>
                        </div>
                      </div>
                      
                      {/* Hover glow effect */}
                      <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${achievement.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="mt-6 pt-6 border-t border-white/10">
                  <h5 className="text-sm font-semibold text-gray-400 mb-3">Technologies & Skills</h5>
                  <div className="flex flex-wrap gap-2">
                    {currentExperience.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 sm:px-3 py-1 bg-white/10 text-gray-300 rounded-full text-xs sm:text-sm hover:bg-cyan-400/20 hover:text-cyan-400 transition-all duration-300 cursor-pointer"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Stats Summary */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                <div className="bg-white/5 backdrop-blur-lg rounded-xl p-3 sm:p-4 text-center border border-white/10">
                  <div className="text-lg sm:text-2xl font-bold text-cyan-400">600+</div>
                  <div className="text-xs sm:text-sm text-gray-400">Learners Mentored</div>
                </div>
                <div className="bg-white/5 backdrop-blur-lg rounded-xl p-3 sm:p-4 text-center border border-white/10">
                  <div className="text-lg sm:text-2xl font-bold text-purple-400">5200+</div>
                  <div className="text-xs sm:text-sm text-gray-400">Skill Badges</div>
                </div>
                <div className="bg-white/5 backdrop-blur-lg rounded-xl p-3 sm:p-4 text-center border border-white/10">
                  <div className="text-lg sm:text-2xl font-bold text-green-400">200+</div>
                  <div className="text-xs sm:text-sm text-gray-400">Students Trained</div>
                </div>
                <div className="bg-white/5 backdrop-blur-lg rounded-xl p-3 sm:p-4 text-center border border-white/10">
                  <div className="text-lg sm:text-2xl font-bold text-orange-400">3+</div>
                  <div className="text-xs sm:text-sm text-gray-400">Active Roles</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(180deg);
          }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};
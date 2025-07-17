import { useState, useEffect, useRef } from 'react';
import {
  GraduationCap, BookOpen, Award, Calendar, MapPin, Star, TrendingUp, 
  School, Brain, Target, Sparkles, ChevronDown, ChevronUp, Clock,
  Trophy, Medal, Users, Globe, Code, Shield, Zap, Layers, Hexagon
} from 'lucide-react';

export const EducationSection = () => {
  const [expandedCard, setExpandedCard] = useState(null);
  const [animationTrigger, setAnimationTrigger] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [floatingElements, setFloatingElements] = useState([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setAnimationTrigger(true);
    }, { threshold: 0.1 });

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // Generate floating academic elements
    const elements = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 6 + 3,
      duration: Math.random() * 15 + 10,
      delay: Math.random() * 3,
      type: i % 4 // Different shapes
    }));
    setFloatingElements(elements);
  }, []);

  const toggleCard = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  const educationData = [
    {
      id: 1,
      level: 'undergraduate',
      institution: 'Ajay Kumar Garg Engineering College',
      location: 'Ghaziabad',
      degree: 'B.Tech (Hons.) in CSIT',
      specialization: 'Cyber Security (Honors)',
      period: 'Oct 2022 – May 2026',
      status: 'Expected',
      cgpa: '8.23/10',
      semester: 'Till 5th Sem',
      icon: <GraduationCap className="h-10 w-10" />,
      gradient: 'from-blue-600 via-purple-600 to-indigo-700',
      glowColor: 'shadow-blue-500/30',
      accentColor: 'text-blue-400',
      bgPattern: 'radial-gradient(circle at 30% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)',
      highlights: [
        'Specialized in Cyber Security for honors degree',
        'Consistent academic performance across semesters',
        'Active participation in technical events',
        'Focus on practical cybersecurity implementations'
      ],
      subjects: [
        { name: 'Data Structures & Algorithms', icon: <Code className="h-4 w-4" /> },
        { name: 'Cybersecurity Fundamentals', icon: <Shield className="h-4 w-4" /> },
        { name: 'Computer Networks', icon: <Globe className="h-4 w-4" /> },
        { name: 'Database Management', icon: <Layers className="h-4 w-4" /> }
      ],
      achievements: [
        'Maintained 8+ CGPA consistently',
        'Cyber Security honors specialization',
        'Active in coding competitions'
      ]
    },
    {
      id: 2,
      level: 'senior-secondary',
      institution: 'Modern Public School',
      location: 'Jhansi',
      degree: 'Class XII',
      specialization: 'CBSE Board',
      period: '2021 – 2022',
      status: 'Completed',
      cgpa: '90%',
      semester: '',
      icon: <School className="h-10 w-10" />,
      gradient: 'from-green-600 via-emerald-600 to-teal-700',
      glowColor: 'shadow-green-500/30',
      accentColor: 'text-green-400',
      bgPattern: 'radial-gradient(circle at 20% 30%, rgba(34, 197, 94, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(20, 184, 166, 0.1) 0%, transparent 50%)',
      highlights: [
        'Achieved 90% in CBSE Class XII',
        'Strong foundation in Mathematics and Science',
        'Consistent academic excellence',
        'Active participation in school activities'
      ],
      subjects: [
        { name: 'Mathematics', icon: <Target className="h-4 w-4" /> },
        { name: 'Physics', icon: <Zap className="h-4 w-4" /> },
        { name: 'Chemistry', icon: <Hexagon className="h-4 w-4" /> },
        { name: 'Computer Science', icon: <Code className="h-4 w-4" /> }
      ],
      achievements: [
        'Scored 90% in CBSE Board',
        'Mathematics and Science excellence',
        'School academic awards'
      ]
    },
    {
      id: 3,
      level: 'secondary',
      institution: 'Sacred Heart Convent School',
      location: 'Parichha',
      degree: 'Class X',
      specialization: 'ICSE Board',
      period: '2019 – 2020',
      status: 'Completed',
      cgpa: '94%',
      semester: '',
      icon: <BookOpen className="h-10 w-10" />,
      gradient: 'from-orange-600 via-red-600 to-pink-700',
      glowColor: 'shadow-orange-500/30',
      accentColor: 'text-orange-400',
      bgPattern: 'radial-gradient(circle at 40% 40%, rgba(249, 115, 22, 0.1) 0%, transparent 50%), radial-gradient(circle at 60% 60%, rgba(236, 72, 153, 0.1) 0%, transparent 50%)',
      highlights: [
        'Outstanding 94% in ICSE Board',
        'Top performer in the class',
        'Strong foundation across all subjects',
        'Excellence in both academics and extracurriculars'
      ],
      subjects: [
        { name: 'English Literature', icon: <BookOpen className="h-4 w-4" /> },
        { name: 'Mathematics', icon: <Target className="h-4 w-4" /> },
        { name: 'Science', icon: <Brain className="h-4 w-4" /> },
        { name: 'Social Studies', icon: <Users className="h-4 w-4" /> }
      ],
      achievements: [
        'Exceptional 94% in ICSE Board',
        'Class topper recognition',
        'All-round academic excellence'
      ]
    }
  ];

 const getFloatingShape = (type) => {
  switch(type) {
    case 0: return <GraduationCap className="h-full w-full" />;
    case 1: return <BookOpen className="h-full w-full" />;
    case 2: return <Award className="h-full w-full" />;
    case 3: return <Star className="h-full w-full" />;
    default: return <Sparkles className="h-full w-full" />;
  }
};

return (
  <section ref={sectionRef} id="education" className="relative py-12 md:py-24 px-4 min-h-screen overflow-hidden">
    {/* Floating Academic Elements - Reduced density on mobile */}
    <div className="absolute inset-0 pointer-events-none">
      {floatingElements.map((element) => (
        <div
          key={element.id}
          className="absolute text-white/10 animate-academic-float hidden md:block"
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
            width: `${element.size}px`,
            height: `${element.size}px`,
            animationDuration: `${element.duration}s`,
            animationDelay: `${element.delay}s`,
          }}
        >
          {getFloatingShape(element.type)}
        </div>
      ))}
    </div>

    {/* Neural Network Background - Simplified on mobile */}
    <div className="absolute inset-0 opacity-10">
      <svg className="w-full h-full" viewBox="0 0 1000 1000">
        {/* Animated connection lines */}
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.3" />
          </linearGradient>
        </defs>
        
        {/* Network connections - Fewer on mobile */}
        {[...Array(window.innerWidth < 768 ? 8 : 15)].map((_, i) => (
          <line
            key={i}
            x1={Math.random() * 1000}
            y1={Math.random() * 1000}
            x2={Math.random() * 1000}
            y2={Math.random() * 1000}
            stroke="url(#lineGradient)"
            strokeWidth="1"
            className="animate-pulse"
            style={{ animationDelay: `${i * 0.3}s` }}
          />
        ))}
        
        {/* Network nodes - Fewer on mobile */}
        {[...Array(window.innerWidth < 768 ? 6 : 10)].map((_, i) => (
          <circle
            key={i}
            cx={Math.random() * 1000}
            cy={Math.random() * 1000}
            r="3"
            fill="#3b82f6"
            className="animate-pulse"
            style={{ animationDelay: `${i * 0.5}s` }}
          />
        ))}
      </svg>
    </div>

    {/* Section Header */}
    <div className="text-center mb-12 md:mb-20 relative z-10">
      {/* Creative Header Layout - Responsive */}
      <div className="relative flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
        {/* Left Side Graduation Cap with Extra Effects */}
        <div className="relative group order-2 md:order-1">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full blur-xl opacity-40 animate-pulse"></div>
          <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 p-2 md:p-3 rounded-full animate-spin-slow shadow-2xl">
            <GraduationCap className="h-8 w-8 md:h-12 md:w-12 text-white" />
          </div>
          {/* Orbiting Elements - Hidden on mobile */}
          <div className="absolute inset-0 animate-orbit hidden md:block">
            <BookOpen className="absolute -top-2 -right-2 h-6 w-6 text-blue-400 animate-pulse" />
          </div>
          <div className="absolute inset-0 animate-orbit-reverse hidden md:block">
            <Award className="absolute -bottom-2 -left-2 h-6 w-6 text-purple-400 animate-pulse" />
          </div>
        </div>
        
        {/* Title with Enhanced Effects */}
        <div className="relative order-1 md:order-2">
          <h2 className="text-4xl md:text-6xl font-bold mb-2 animate-title-wave text-center">
            Educational{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-gradient-shift">
              Journey
            </span>
          </h2>
          {/* Floating Sparkles - Adjusted for mobile */}
          <div className="absolute -top-2 md:-top-4 -right-2 md:-right-4">
            <Sparkles className="h-6 w-6 md:h-8 md:w-8 text-yellow-400 animate-twinkle" />
          </div>
          <div className="absolute -bottom-1 md:-bottom-2 -left-2 md:-left-4">
            <Star className="h-4 w-4 md:h-6 md:w-6 text-pink-400 animate-twinkle" style={{ animationDelay: '0.5s' }} />
          </div>
        </div>
        
        {/* Right Side Academic Elements - Hidden on mobile */}
        <div className="relative order-3 hidden md:block">
          <div className="flex flex-col gap-3">
            <div className="relative">
              <Brain className="h-8 w-8 text-indigo-400 animate-pulse" />
              <div className="absolute inset-0 bg-indigo-400/20 rounded-full animate-ping"></div>
            </div>
            <div className="relative">
              <Target className="h-8 w-8 text-cyan-400 animate-pulse" style={{ animationDelay: '0.3s' }} />
              <div className="absolute inset-0 bg-cyan-400/20 rounded-full animate-ping" style={{ animationDelay: '0.3s' }}></div>
            </div>
          </div>
        </div>
      </div>
      
      <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in-delayed mt-6 px-4">
        A progressive path of academic excellence and continuous learning
      </p>
      
      {/* Enhanced Progress Line - Responsive */}
      <div className="flex justify-center mt-8">
        <div className="relative w-64 md:w-96 h-2 md:h-3 bg-white/10 rounded-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-progress-fill"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent animate-shimmer-wave"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer-wave-2"></div>
        </div>
      </div>
      
      {/* Floating Achievement Badges - Responsive */}
      <div className="flex flex-wrap justify-center gap-2 md:gap-4 mt-6 px-4">
        {[
          { icon: <Trophy className="h-3 w-3 md:h-4 md:w-4" />, label: 'Excellence' },
          { icon: <Medal className="h-3 w-3 md:h-4 md:w-4" />, label: 'Dedication' },
          { icon: <Star className="h-3 w-3 md:h-4 md:w-4" />, label: 'Innovation' }
        ].map((badge, idx) => (
          <div
            key={idx}
            className="flex items-center gap-2 px-3 md:px-4 py-1 md:py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 hover:bg-white/10 transition-all duration-300 animate-badge-float"
            style={{ animationDelay: `${idx * 0.2}s` }}
          >
            <div className="text-yellow-400">
              {badge.icon}
            </div>
            <span className="text-xs md:text-sm text-gray-300 font-medium">{badge.label}</span>
          </div>
        ))}
      </div>
    </div>

    {/* Education Timeline - Mobile Responsive */}
    <div className="max-w-6xl mx-auto relative z-10">
      {/* Timeline Line - Responsive positioning */}
      <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-0.5 md:w-1 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 opacity-30 animate-pulse"></div>
      
      {educationData.map((edu, index) => (
        <div
          key={edu.id}
          className={`relative flex items-start md:items-center mb-8 md:mb-16 ${
            index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
          } ${
            animationTrigger 
              ? 'animate-slide-in-timeline opacity-100' 
              : 'opacity-0'
          }`}
          style={{ animationDelay: `${index * 0.4}s` }}
        >
          {/* Timeline Node - Responsive positioning */}
          <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 z-20 -translate-x-1/2 md:translate-x-0">
            <div className="relative">
              <div className={`w-8 h-8 md:w-16 md:h-16 rounded-full bg-gradient-to-r ${edu.gradient} p-0.5 md:p-1 animate-spin-slow`}>
                <div className="w-full h-full bg-gray-900 rounded-full flex items-center justify-center">
                  <div className={`text-white ${edu.accentColor}`}>
                    <div className="text-sm md:text-base">
                      {edu.icon}
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-md md:blur-lg opacity-40 animate-pulse"></div>
            </div>
          </div>

          {/* Education Card - Mobile Layout */}
          <div 
            className={`w-full md:w-5/12 pl-12 md:pl-0 ${
              index % 2 === 0 
                ? 'md:mr-auto md:pr-16' 
                : 'md:ml-auto md:pl-16'
            }`}
            onMouseEnter={() => setHoveredCard(edu.id)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div 
              className="group relative transition-all duration-700 hover:scale-105"
              style={{ 
                background: edu.bgPattern,
                backdropFilter: 'blur(20px)'
              }}
            >
              {/* Card Glow Effect */}
              <div className={`absolute inset-0 rounded-xl md:rounded-2xl bg-gradient-to-r ${edu.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-lg md:blur-xl`}></div>
              
              {/* Main Card */}
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl md:rounded-2xl p-4 md:p-8 shadow-xl md:shadow-2xl group-hover:shadow-3xl transition-all duration-500">
                {/* Animated Corner Accents - Hidden on mobile */}
                <div className="absolute top-0 left-0 w-12 h-12 md:w-20 md:h-20 bg-gradient-to-br from-white/20 to-transparent rounded-tl-xl md:rounded-tl-2xl hidden md:block"></div>
                <div className="absolute bottom-0 right-0 w-12 h-12 md:w-20 md:h-20 bg-gradient-to-tl from-white/20 to-transparent rounded-br-xl md:rounded-br-2xl hidden md:block"></div>
                
                {/* Institution Header - Mobile Layout */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 md:mb-6">
                  <div className="mb-4 md:mb-0">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                      {edu.institution}
                    </h3>
                    <div className="flex items-center gap-2 text-sm md:text-base text-gray-300 mb-2">
                      <MapPin className="h-3 w-3 md:h-4 md:w-4" />
                      <span>{edu.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm md:text-base text-gray-400">
                      <Calendar className="h-3 w-3 md:h-4 md:w-4" />
                      <span>{edu.period}</span>
                      {edu.status === 'Expected' && (
                        <span className="ml-2 px-2 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs">
                          {edu.status}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className={`text-left md:text-right ${edu.accentColor}`}>
                    <div className="text-2xl md:text-3xl font-bold">{edu.cgpa}</div>
                    {edu.semester && (
                      <div className="text-xs md:text-sm text-gray-400">{edu.semester}</div>
                    )}
                  </div>
                </div>

                {/* Degree Information */}
                <div className="mb-4 md:mb-6">
                  <div className="text-lg md:text-xl font-semibold text-white mb-2">{edu.degree}</div>
                  <div className={`text-base md:text-lg ${edu.accentColor} font-medium`}>{edu.specialization}</div>
                </div>

                {/* Key Subjects - Mobile Responsive */}
                <div className="mb-4 md:mb-6">
                  <h4 className="text-base md:text-lg font-semibold text-white mb-3 flex items-center gap-2">
                    <Brain className="h-4 w-4 md:h-5 md:w-5" />
                    Key Subjects
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {edu.subjects.map((subject, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 p-2 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300"
                      >
                        <div className={`${edu.accentColor} text-sm`}>
                          {subject.icon}
                        </div>
                        <span className="text-xs md:text-sm text-gray-300">{subject.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Expandable Details */}
                <div>
                  <button
                    onClick={() => toggleCard(edu.id)}
                    className={`flex items-center gap-2 ${edu.accentColor} hover:text-white transition-colors duration-300 mb-4 text-sm md:text-base`}
                  >
                    <Trophy className="h-4 w-4 md:h-5 md:w-5" />
                    <span className="font-semibold">Achievements & Highlights</span>
                    {expandedCard === edu.id ? 
                      <ChevronUp className="h-3 w-3 md:h-4 md:w-4" /> : 
                      <ChevronDown className="h-3 w-3 md:h-4 md:w-4" />
                    }
                  </button>

                  {expandedCard === edu.id && (
                    <div className="space-y-4 animate-expand-content">
                      {/* Highlights */}
                      <div>
                        <h5 className="text-sm font-semibold text-white mb-2">Academic Highlights</h5>
                        <ul className="space-y-1">
                          {edu.highlights.map((highlight, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-2 text-xs md:text-sm text-gray-300 animate-fade-in-stagger"
                              style={{ animationDelay: `${idx * 0.1}s` }}
                            >
                              <Star className="h-2 w-2 md:h-3 md:w-3 text-yellow-400 mt-1 md:mt-0.5 flex-shrink-0" />
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Achievements */}
                      <div>
                        <h5 className="text-sm font-semibold text-white mb-2">Key Achievements</h5>
                        <div className="flex flex-wrap gap-1 md:gap-2">
                          {edu.achievements.map((achievement, idx) => (
                            <span
                              key={idx}
                              className={`px-2 md:px-3 py-1 bg-gradient-to-r ${edu.gradient} text-white text-xs rounded-full font-medium animate-badge-appear`}
                              style={{ animationDelay: `${idx * 0.2}s` }}
                            >
                              {achievement}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* Animated Academic Stats - Mobile Responsive */}
    <div className="mt-12 md:mt-20 text-center relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 max-w-4xl mx-auto">
        {[
          { label: 'Years of Education', value: '16+', icon: <Clock className="h-5 w-5 md:h-6 md:w-6" /> },
          { label: 'Academic Excellence', value: '90%+', icon: <TrendingUp className="h-5 w-5 md:h-6 md:w-6" /> },
          { label: 'Specializations', value: '3', icon: <Target className="h-5 w-5 md:h-6 md:w-6" /> }
        ].map((stat, index) => (
          <div
            key={index}
            className="group relative p-4 md:p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl md:rounded-2xl hover:bg-white/10 transition-all duration-500 animate-stat-appear"
            style={{ animationDelay: `${index * 0.3}s` }}
          >
            <div className="text-blue-400 mb-3 flex justify-center group-hover:scale-110 transition-transform duration-300">
              {stat.icon}
            </div>
            <div className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
              {stat.value}
            </div>
            <div className="text-xs md:text-sm text-gray-400">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>

    <style jsx>{`
      @keyframes academic-float {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        50% { transform: translateY(-30px) rotate(180deg); }
      }
      
      @keyframes spin-slow {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
      
      @keyframes title-wave {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-5px); }
      }
      
      @keyframes gradient-shift {
        0%, 100% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
      }
      
      @keyframes fade-in-delayed {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }
      
      @keyframes progress-fill {
        from { transform: translateX(-100%); }
        to { transform: translateX(100%); }
      }
      
      @keyframes shimmer-wave {
        0% { transform: translateX(-100%); }
        100% { transform: translateX(200%); }
      }
      
      @keyframes slide-in-timeline {
        from {
          opacity: 0;
          transform: translateX(-50px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }
      
      @keyframes expand-content {
        from {
          opacity: 0;
          transform: scaleY(0);
        }
        to {
          opacity: 1;
          transform: scaleY(1);
        }
      }
      
      @keyframes fade-in-stagger {
        from {
          opacity: 0;
          transform: translateX(-10px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }
      
      @keyframes badge-appear {
        from {
          opacity: 0;
          transform: scale(0.8);
        }
        to {
          opacity: 1;
          transform: scale(1);
        }
      }
      
      @keyframes stat-appear {
        from {
          opacity: 0;
          transform: translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      
      @keyframes orbit {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
      
      @keyframes orbit-reverse {
        from { transform: rotate(360deg); }
        to { transform: rotate(0deg); }
      }
      
      @keyframes badge-float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-8px); }
      }
      
      @keyframes shimmer-wave-2 {
        0% { transform: translateX(-100%); }
        100% { transform: translateX(200%); }
      }
      
      @keyframes twinkle {
        0%, 100% { opacity: 0.3; transform: scale(0.8); }
        50% { opacity: 1; transform: scale(1.2); }
      }

      .animate-academic-float { animation: academic-float 12s ease-in-out infinite; }
      .animate-spin-slow { animation: spin-slow 20s linear infinite; }
      .animate-title-wave { animation: title-wave 3s ease-in-out infinite; }
      .animate-gradient-shift { 
        animation: gradient-shift 3s ease infinite; 
        background-size: 200% 200%; 
      }
      .animate-fade-in-delayed { animation: fade-in-delayed 0.8s ease-out forwards; }
      .animate-progress-fill { animation: progress-fill 2s ease-in-out infinite; }
      .animate-shimmer-wave { animation: shimmer-wave 2s ease-in-out infinite; }
      .animate-slide-in-timeline { animation: slide-in-timeline 0.8s ease-out forwards; }
      .animate-expand-content { animation: expand-content 0.5s ease-out forwards; }
      .animate-fade-in-stagger { animation: fade-in-stagger 0.4s ease-out forwards; }
      .animate-badge-appear { animation: badge-appear 0.6s ease-out forwards; }
      .animate-stat-appear { animation: stat-appear 0.8s ease-out forwards; }
      .animate-orbit { animation: orbit 8s linear infinite; }
      .animate-orbit-reverse { animation: orbit-reverse 10s linear infinite; }
      .animate-badge-float { animation: badge-float 3s ease-in-out infinite; }
      .animate-shimmer-wave-2 { animation: shimmer-wave-2 3s ease-in-out infinite 1s; }
      .animate-twinkle { animation: twinkle 2s ease-in-out infinite; }

      /* Mobile specific optimizations */
      @media (max-width: 768px) {
        @keyframes slide-in-timeline {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      }
    `}</style>
  </section>
);
}
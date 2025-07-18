
/* eslint-disable react/no-unknown-property */
import { useState, useEffect, useRef } from 'react';
import {
  Trophy, Globe, Code, Database, Star, Sparkles, Eye, EyeOff,
  ChevronRight, Image, ZoomIn, X, Award, Target, Calendar,
  Users, Crown, 
  TrendingUp, Flame, GitBranch, Sun, Moon
} from 'lucide-react';

export function AchievementsSection() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [animationTrigger, setAnimationTrigger] = useState(false);
  const [hoveredAchievement, setHoveredAchievement] = useState(null);
  const [showDetails, setShowDetails] = useState({});
  const [showImageModal, setShowImageModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [particlePositions, setParticlePositions] = useState([]);
  const [isMobile, setIsMobile] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState({});
  const [isDarkMode, setIsDarkMode] = useState(true);
  const sectionRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Check system theme preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => {
      setIsDarkMode(e.matches);
    };
    
    setIsDarkMode(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleChange);
    
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Generate particles
  useEffect(() => {
    const particles = Array.from({ length: isMobile ? 10 : 25 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * (isMobile ? 6 : 10) + 3,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 5,
    }));
    setParticlePositions(particles);
  }, [isMobile]);

  // Animation trigger
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimationTrigger(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Auto-rotate images for mobile
  useEffect(() => {
    if (isMobile) {
      const interval = setInterval(() => {
        setCurrentImageIndex(prev => {
          const newIndex = { ...prev };
          achievements.forEach(achievement => {
            if (achievement.images.length > 1) {
              newIndex[achievement.id] = ((newIndex[achievement.id] || 0) + 1) % achievement.images.length;
            }
          });
          return newIndex;
        });
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isMobile]);

  const toggleDetail = (id) => {
    setShowDetails(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const openImageModal = (image) => {
    setSelectedImage(image);
    setShowImageModal(true);
  };

  const closeImageModal = () => {
    setShowImageModal(false);
    setSelectedImage(null);
  };

  const achievements = [
    {
      id: 1,
      category: 'google-cloud',
      title: 'Google Cloud Facilitator',
      subtitle: 'Multi-Cohort Excellence',
      period: '2024 - Present',
      status: 'Active',
      level: 'Elite',
      icon: <Globe className="h-6 w-6 md:h-8 md:w-8" />,
      gradient: 'from-blue-500 via-indigo-500 to-purple-600',
      lightGradient: 'from-blue-400 via-indigo-400 to-purple-500',
      glowColor: 'shadow-blue-500/50',
      bgPattern: 'radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(147, 51, 234, 0.15) 0%, transparent 50%)',
      lightBgPattern: 'radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.08) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(147, 51, 234, 0.08) 0%, transparent 50%)',
      images: [
        {
          url: '/projects/cloud.jpg',
          alt: 'Google Cloud Swag Package 1',
          caption: 'Cohort 1 Swag Package'
        },
        {
          url: '/projects/arcade_legend_swags_package.webp',
          alt: 'Google Cloud Swag Package 2',
          caption: 'Cohort 2 Swag Package'
        },
        {
          url: '/projects/swags.jpg',
          alt: 'Google Cloud Swag Package 2',
          caption: 'Cohort 3 Swag Package'
        },
        {
          url: '/projects/certificategcp.png',
          alt: 'Google Cloud Certificate',
          caption: 'Official Certificate'
        }
      ],
      imageType: 'Swag Photos',
      stats: [
        { label: 'Learners Mentored', value: '600+', icon: <Users className="h-3 w-3 md:h-4 md:w-4" /> },
        { label: 'Skill Badges', value: '5200+', icon: <Award className="h-3 w-3 md:h-4 md:w-4" /> },
        { label: 'Cohorts', value: '3', icon: <Calendar className="h-3 w-3 md:h-4 md:w-4" /> },
        { label: 'Certifications', value: 'Multiple', icon: <Award className="h-3 w-3 md:h-4 md:w-4" /> }
      ],
      details: [
        'Cohort 1 (2024) - Foundation mentorship',
        'Cohort 1 (2025) - Advanced guidance',
        'Cohort 2 (2025) - Currently active',
        'Consistent community contribution',
        'Milestone certifications earned',
        'Official swags and recognition'
      ],
      badges: ['Mentor', 'Community Leader', 'Cloud Expert']
    },
    {
      id: 2,
      category: 'leetcode',
      title: 'LeetCode Programming',
      subtitle: 'Consistent Problem Solver',
      period: '2024 - Present',
      status: 'Active',
      level: 'Expert',
      icon: <Code className="h-6 w-6 md:h-8 md:w-8" />,
      gradient: 'from-orange-500 via-red-500 to-pink-600',
      lightGradient: 'from-orange-400 via-red-400 to-pink-500',
      glowColor: 'shadow-orange-500/50',
      bgPattern: 'radial-gradient(circle at 30% 40%, rgba(249, 115, 22, 0.15) 0%, transparent 50%), radial-gradient(circle at 70% 60%, rgba(236, 72, 153, 0.15) 0%, transparent 50%)',
      lightBgPattern: 'radial-gradient(circle at 30% 40%, rgba(249, 115, 22, 0.08) 0%, transparent 50%), radial-gradient(circle at 70% 60%, rgba(236, 72, 153, 0.08) 0%, transparent 50%)',
      images: [
        {
          url: '/projects/Allbadges.png',
          alt: 'LeetCode All badges',
          caption: 'All My Badges'
        },
        {
          url: '/projects/consistency.png',
          alt: 'Consistency',
          caption: 'Leetcode Consistency'
        },
        {
          url: '/projects/200daysbadge.png',
          alt: '200 Days Coding Badge',
          caption: '200 Days Coding 2024'
        },
      ],
      imageType: 'Achievement Badges',
      stats: [
        { label: 'Problems Solved', value: '550+', icon: <Target className="h-3 w-3 md:h-4 md:w-4" /> },
        { label: 'Contest Rating', value: '1700+', icon: <TrendingUp className="h-3 w-3 md:h-4 md:w-4" /> },
        { label: 'Global Rank', value: '<1.19L', icon: <Crown className="h-3 w-3 md:h-4 md:w-4" /> },
        { label: 'Coding Streak', value: '200 Days', icon: <Flame className="h-3 w-3 md:h-4 md:w-4" /> }
      ],
      details: [
        'June 2024 - Monthly badge earned',
        'July 2024 - Monthly badge earned',
        'August 2024 - Monthly badge earned',
        'September 2024 - Monthly badge earned',
        'October 2024 - Monthly badge earned',
        'November 2024 - Monthly badge earned',
        'December 2024 - Monthly badge earned',
        '200 Days Coding 2024 badge',
        'SQL 50 problems badge'
      ],
      badges: ['Problem Solver', 'Consistent Coder', 'Contest Participant']
    },
    {
      id: 3,
      category: 'hackerrank',
      title: 'HackerRank Certifications',
      subtitle: 'Multi-Language Mastery',
      period: '2024',
      status: 'Certified',
      level: 'Professional',
      icon: <Database className="h-6 w-6 md:h-8 md:w-8" />,
      gradient: 'from-green-500 via-teal-500 to-cyan-600',
      lightGradient: 'from-green-400 via-teal-400 to-cyan-500',
      glowColor: 'shadow-green-500/50',
      bgPattern: 'radial-gradient(circle at 25% 30%, rgba(34, 197, 94, 0.15) 0%, transparent 50%), radial-gradient(circle at 75% 70%, rgba(6, 182, 212, 0.15) 0%, transparent 50%)',
      lightBgPattern: 'radial-gradient(circle at 25% 30%, rgba(34, 197, 94, 0.08) 0%, transparent 50%), radial-gradient(circle at 75% 70%, rgba(6, 182, 212, 0.08) 0%, transparent 50%)',
      images: [
        {
          url: '/projects/hackerrankprofile.png',
          alt: 'HackerRank Profile Screenshot',
          caption: 'Complete Profile Overview'
        },
        {
          url: '/projects/SQLhackerrank.png',
          alt: 'SQL Certificate',
          caption: 'SQL Certification'
        }
      ],
      imageType: 'Profile Screenshots',
      stats: [
        { label: 'SQL Rating', value: '5⭐', icon: <Database className="h-3 w-3 md:h-4 md:w-4" /> },
        { label: 'Python Rating', value: '4⭐', icon: <Code className="h-3 w-3 md:h-4 md:w-4" /> },
        { label: 'C Rating', value: '4⭐', icon: <GitBranch className="h-3 w-3 md:h-4 md:w-4" /> },
        { label: 'Certifications', value: '2', icon: <Award className="h-3 w-3 md:h-4 md:w-4" /> }
      ],
      details: [
        'SQL - 5-star rating achieved',
        'Python - 4-star rating achieved',
        'C Programming - 4-star rating achieved',
        'SQL Certification earned',
        'Python Certification earned',
        'Consistent problem-solving performance'
      ],
      badges: ['SQL Expert', 'Python Developer', 'C Programmer']
    }
  ];

  const categories = [
    { key: 'all', label: 'All Achievements', icon: <Trophy className="h-4 w-4 md:h-5 md:w-5" /> },
    { key: 'google-cloud', label: 'Google Cloud', icon: <Globe className="h-4 w-4 md:h-5 md:w-5" /> },
    { key: 'leetcode', label: 'LeetCode', icon: <Code className="h-4 w-4 md:h-5 md:w-5" /> },
    { key: 'hackerrank', label: 'HackerRank', icon: <Database className="h-4 w-4 md:h-5 md:w-5" /> }
  ];

  const filteredAchievements = activeCategory === 'all'
    ? achievements
    : achievements.filter(a => a.category === activeCategory);

  const themeClasses = {
    background: isDarkMode ? 'bg-gray-900' : 'bg-gray-50',
    cardBg: isDarkMode ? 'bg-gray-800/80' : 'bg-white/90',
    cardBorder: isDarkMode ? 'border-white/10' : 'border-gray-200/50',
    primaryText: isDarkMode ? 'text-white' : 'text-gray-900',
    secondaryText: isDarkMode ? 'text-gray-300' : 'text-gray-600',
    tertiaryText: isDarkMode ? 'text-gray-400' : 'text-gray-500',
    statsBg: isDarkMode ? 'bg-white/5' : 'bg-gray-100/80',
    statsHover: isDarkMode ? 'hover:bg-white/10' : 'hover:bg-gray-200/80',
    tabsBg: isDarkMode ? 'bg-white/5' : 'bg-gray-100/80',
    tabsHover: isDarkMode ? 'hover:bg-white/10' : 'hover:bg-gray-200/80',
    modalBg: isDarkMode ? 'bg-black/90' : 'bg-white/95',
    modalCard: isDarkMode ? 'bg-white/10' : 'bg-gray-900/90',
    modalBorder: isDarkMode ? 'border-white/20' : 'border-gray-200/50',
    buttonBg: isDarkMode ? 'bg-black/70' : 'bg-white/70',
    buttonHover: isDarkMode ? 'hover:bg-black/90' : 'hover:bg-white/90',
    buttonText: isDarkMode ? 'text-white' : 'text-gray-900',
    imageBorder: isDarkMode ? 'border-white/20' : 'border-gray-300/50',
    imageHover: isDarkMode ? 'hover:border-white/40' : 'hover:border-gray-400/70'
  };

  return (
    <section 
      ref={sectionRef} 
      id="achievements" 
      className={`relative py-8 md:py-24 px-3 md:px-4 min-h-screen overflow-hidden transition-colors duration-500 `}
    >
      

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {particlePositions.map((particle) => (
          <div
            key={particle.id}
            className="absolute rounded-full animate-float"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              background: isDarkMode 
                ? `conic-gradient(from 0deg, #3b82f6, #8b5cf6, #f59e0b, #ef4444, #3b82f6)`
                : `conic-gradient(from 0deg, #60a5fa, #a78bfa, #fbbf24, #f87171, #60a5fa)`,
              opacity: isDarkMode ? 0.1 : 0.05,
              animationDuration: `${particle.duration}s`,
              animationDelay: `${particle.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Header */}
      <div className="text-center mb-6 md:mb-16 relative z-10">
        <div className="flex flex-col items-center gap-2 md:gap-4 mb-3 md:mb-4">
          <div className="animate-bounce-slow">
            <Trophy className="h-8 w-8 md:h-16 md:w-16 text-yellow-400 animate-pulse" />
          </div>
          <h2 className={`text-2xl md:text-6xl font-bold animate-text-glow ${themeClasses.primaryText}`}>
            My{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 animate-gradient-x">
              Achievements
            </span>
          </h2>
        </div>

        <p className={`text-xs md:text-xl animate-fade-in-up mb-3 md:mb-4 px-4 ${themeClasses.secondaryText}`}>
          Milestones in my extraordinary learning journey
        </p>
        
        {/* Interactive Star Rating */}
        <div className="flex justify-center">
          <div className="flex space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className="h-3 w-3 md:h-6 md:w-6 text-yellow-400 animate-twinkle cursor-pointer hover:scale-125 transition-transform" 
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex justify-center mb-6 md:mb-12 relative z-10 px-2">
        <div className={`flex flex-wrap justify-center gap-1 md:gap-4 p-1 backdrop-blur-xl rounded-xl md:rounded-2xl border transition-all duration-300 ${themeClasses.tabsBg} ${themeClasses.cardBorder}`}>
          {categories.map((cat, index) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`group relative flex items-center gap-1 md:gap-2 px-2 py-1.5 md:px-6 md:py-3 rounded-lg md:rounded-xl transition-all duration-500 transform hover:scale-105 ${
                activeCategory === cat.key
                  ? `bg-gradient-to-r ${isDarkMode ? 'from-orange-500 to-red-500' : 'from-orange-400 to-red-400'} text-white shadow-lg shadow-orange-500/50`
                  : `${themeClasses.secondaryText} ${themeClasses.tabsHover}`
              } animate-slide-in-stagger`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative">
                {cat.icon}
                {activeCategory === cat.key && (
                  <div className="absolute inset-0 animate-ping opacity-75">
                    {cat.icon}
                  </div>
                )}
              </div>
              <span className="text-xs md:text-sm font-semibold whitespace-nowrap">
                {isMobile ? cat.label.split(' ')[0] : cat.label}
              </span>
              {activeCategory === cat.key && (
                <Sparkles className="h-3 w-3 md:h-4 md:w-4 animate-spin" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Achievement Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-8 max-w-7xl mx-auto relative z-10 px-2">
        {filteredAchievements.map((achieve, i) => (
          <div
            key={achieve.id}
            className={`group relative transition-all duration-700 transform ${
              animationTrigger 
                ? 'animate-achievement-enter opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-20'
            }`}
            style={{ animationDelay: `${i * 0.3}s` }}
            onMouseEnter={() => setHoveredAchievement(achieve.id)}
            onMouseLeave={() => setHoveredAchievement(null)}
          >
            {/* Glowing Border Effect */}
            <div className={`absolute inset-0 rounded-xl md:rounded-3xl bg-gradient-to-r from-transparent via-${isDarkMode ? 'white' : 'gray-900'}/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-border-glow`}></div>
            
            {/* Main Achievement Card */}
            <div 
              className={`relative p-3 md:p-8 rounded-xl md:rounded-3xl backdrop-blur-xl border shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:scale-[1.02] overflow-hidden ${themeClasses.cardBg} ${themeClasses.cardBorder}`}
              style={{ background: isDarkMode ? achieve.bgPattern : achieve.lightBgPattern }}
            >
              {/* Animated Background Overlay */}
              <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                <div className={`absolute inset-0 bg-gradient-to-br from-${isDarkMode ? 'white' : 'gray-900'}/20 via-transparent to-${isDarkMode ? 'white' : 'gray-900'}/20 animate-shimmer`}></div>
              </div>

              {/* Achievement Header */}
              <div className="relative flex flex-col md:flex-row items-center md:items-start gap-3 md:gap-6 mb-3 md:mb-6">
                <div className={`relative p-2 md:p-4 rounded-lg md:rounded-2xl bg-gradient-to-r ${isDarkMode ? achieve.gradient : achieve.lightGradient} shadow-lg group-hover:shadow-xl transition-all duration-500`}>
                  <div className="relative z-10">
                    {achieve.icon}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-lg md:rounded-2xl"></div>
                  {hoveredAchievement === achieve.id && (
                    <div className="absolute inset-0 animate-pulse bg-white/20 rounded-lg md:rounded-2xl"></div>
                  )}
                </div>
                <div className="text-center md:text-left flex-1">
                  <h3 className={`text-lg md:text-2xl font-bold mb-1 md:mb-2 group-hover:text-yellow-400 transition-colors duration-300 ${themeClasses.primaryText}`}>
                    {achieve.title}
                  </h3>
                  <p className={`text-xs md:text-lg mb-2 md:mb-3 ${themeClasses.secondaryText}`}>{achieve.subtitle}</p>
                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
                    <span className={`px-2 py-1 md:px-3 md:py-1 rounded-full text-xs md:text-sm font-semibold bg-gradient-to-r ${isDarkMode ? achieve.gradient : achieve.lightGradient} text-white`}>
                      {achieve.level}
                    </span>
                    <span className="text-green-400 text-xs md:text-sm font-semibold animate-pulse">
                      {achieve.status}
                    </span>
                  </div>
                </div>
              </div>

              {/* Images */}
              <div className="mb-3 md:mb-6">
                <div className="flex items-center gap-2 mb-2 md:mb-3">
                  <Image className="h-3 w-3 md:h-5 md:w-5 text-cyan-400" />
                  <h4 className={`text-xs md:text-lg font-semibold ${themeClasses.primaryText}`}>{achieve.imageType}</h4>
                </div>
                
                {isMobile ? (
                  // Mobile: Single rotating image
                  <div className="relative">
                    <div className={`relative overflow-hidden rounded-lg border-2 transition-all duration-300 ${themeClasses.imageBorder} ${themeClasses.imageHover}`}>
                      <img
                        src={achieve.images[currentImageIndex[achieve.id] || 0]?.url}
                        alt={achieve.images[currentImageIndex[achieve.id] || 0]?.alt}
                        className="w-full h-32 md:h-40 object-cover transition-transform duration-500"
                        onClick={() => openImageModal(achieve.images[currentImageIndex[achieve.id] || 0])}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-2 md:p-3">
                        <p className="text-white text-xs md:text-sm font-medium">
                          {achieve.images[currentImageIndex[achieve.id] || 0]?.caption}
                        </p>
                      </div>
                      <div className="absolute top-2 right-2 bg-black/50 rounded-full p-1">
                        <ZoomIn className="h-3 w-3 md:h-4 md:w-4 text-white" />
                      </div>
                    </div>
                    {/* Image indicators */}
                    <div className="flex justify-center mt-2 space-x-1">
                      {achieve.images.map((_, idx) => (
                        <div
                          key={idx}
                          className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full transition-all duration-300 ${
                            idx === (currentImageIndex[achieve.id] || 0) ? 'bg-white' : 'bg-white/30'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                ) : (
                  // Desktop: Grid layout
                  <div className="grid grid-cols-2 gap-2 md:gap-3">
                    {achieve.images.map((img, imgIdx) => (
                      <div
                        key={imgIdx}
                        className="relative group/img cursor-pointer transition-all duration-300 hover:scale-105"
                        onClick={() => openImageModal(img)}
                      >
                        <div className={`relative overflow-hidden rounded-lg border-2 transition-all duration-300 ${themeClasses.imageBorder} ${themeClasses.imageHover}`}>
                          <img
                            src={img.url}
                            alt={img.alt}
                            className="w-full h-20 md:h-24 object-cover transition-transform duration-300 group-hover/img:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300"></div>
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity duration-300">
                            <ZoomIn className="h-4 w-4 md:h-6 md:w-6 text-white" />
                          </div>
                        </div>
                        <p className={`text-xs mt-1 text-center ${themeClasses.tertiaryText}`}>{img.caption}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Responsive Stats Grid */}
              <div className="grid grid-cols-2 gap-2 md:gap-4 mb-4 md:mb-6">
                {achieve.stats.map((stat, idx) => (
                  <div
                    key={idx}
                    className="relative p-3 md:p-4 rounded-xl md:rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 group-hover:scale-105"
                    style={{ animationDelay: `${idx * 0.1}s` }}
                  >
                    <div className="flex items-center gap-2 text-gray-300 mb-1 md:mb-2">
                      <div className="p-1 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500">
                        {stat.icon}
                      </div>
                      <span className="text-xs md:text-sm font-medium">{stat.label}</span>
                    </div>
                    <div className="text-lg md:text-2xl font-bold text-white group-hover:text-yellow-300 transition-colors duration-300">
                      {stat.value}
                    </div>
                  </div>
                ))}
              </div>

              {/* Mobile-Friendly Expandable Details */}
              <div className="mb-4 md:mb-6">
                <button
                  onClick={() => toggleDetail(achieve.id)}
                  className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 group-hover:scale-105 w-full md:w-auto"
                >
                  {showDetails[achieve.id] ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  <span className="text-sm md:text-base font-semibold">
                    {showDetails[achieve.id] ? 'Hide' : 'Show'} Details
                  </span>
                  <ChevronRight className={`w-4 h-4 transition-transform duration-300 ${showDetails[achieve.id] ? 'rotate-90' : ''}`} />
                </button>
                
                {showDetails[achieve.id] && (
                  <div className="mt-4 animate-fade-in-up">
                    <ul className="space-y-2">
                      {achieve.details.map((detail, detailIdx) => (
                        <li
                          key={detailIdx}
                          className="flex items-start gap-3 text-gray-300 animate-slide-in-left text-sm md:text-base"
                          style={{ animationDelay: `${detailIdx * 0.1}s` }}
                        >
                          <Star className="h-3 w-3 md:h-4 md:w-4 text-yellow-400 mt-0.5 flex-shrink-0 animate-twinkle" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Responsive Badges */}
              <div className="flex flex-wrap gap-2 md:gap-3">
                {achieve.badges.map((badge, badgeIdx) => (
                  <span
                    key={badgeIdx}
                    className={`px-2 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-bold text-white bg-gradient-to-r ${achieve.gradient} shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-badge-glow`}
                    style={{ animationDelay: `${badgeIdx * 0.2}s` }}
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Enhanced Mobile-Friendly Modal */}
      {showImageModal && selectedImage && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="relative max-w-4xl max-h-[95vh] w-full bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 overflow-hidden animate-scale-in">
            <div className="absolute top-2 right-2 z-10">
              <button
                onClick={closeImageModal}
                className="p-2 rounded-full bg-black/70 hover:bg-black/90 text-white transition-colors duration-300"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <img
              src={selectedImage.url}
              alt={selectedImage.alt}
              className="w-full h-auto max-h-[70vh] object-contain"
            />
            <div className="p-4 md:p-6 bg-gradient-to-t from-black/80 to-transparent">
              <h3 className="text-lg md:text-xl font-bold text-white mb-2">{selectedImage.caption}</h3>
              <p className="text-gray-300 text-sm md:text-base">{selectedImage.alt}</p>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes text-glow {
          0%, 100% { text-shadow: 0 0 20px rgba(255, 255, 255, 0.5); }
          50% { text-shadow: 0 0 30px rgba(255, 255, 255, 0.8), 0 0 40px rgba(255, 255, 255, 0.6); }
        }
        
        @keyframes twinkle {
          0%, 100% { opacity: 0.5; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        @keyframes border-glow {
          0%, 100% { opacity: 0; transform: scale(0.95); }
          50% { opacity: 1; transform: scale(1.05); }
        }
        
        @keyframes achievement-enter {
          from {
            opacity: 0;
            transform: translateY(60px) rotateX(15deg);
          }
          to {
            opacity: 1;
            transform: translateY(0) rotateX(0deg);
          }
        }
        
        @keyframes slide-in-stagger {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes badge-glow {
          0%, 100% { box-shadow: 0 0 10px rgba(255, 255, 255, 0.3); }
          50% { box-shadow: 0 0 20px rgba(255, 255, 255, 0.6); }
        }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        .animate-float { animation: float 15s ease-in-out infinite; }
        .animate-gradient-x { animation: gradient-x 3s ease infinite; background-size: 400% 400%; }
        .animate-text-glow { animation: text-glow 2s ease-in-out infinite; }
        .animate-twinkle { animation: twinkle 1.5s ease-in-out infinite; }
        .animate-shimmer { animation: shimmer 2s infinite; }
        .animate-border-glow { animation: border-glow 2s ease-in-out infinite; }
        .animate-achievement-enter { animation: achievement-enter 0.8s ease-out forwards; }
        .animate-slide-in-stagger { animation: slide-in-stagger 0.6s ease-out forwards; }
        .animate-slide-in-left { animation: slide-in-left 0.4s ease-out forwards; }
        .animate-fade-in-up { animation: fade-in-up 0.5s ease-out forwards; }
        .animate-fade-in { animation: fade-in 0.3s ease-out forwards; }
        .animate-scale-in { animation: scale-in 0.3s ease-out forwards; }
        .animate-badge-glow { animation: badge-glow 2s ease-in-out infinite; }
        .animate-bounce-slow { animation: bounce-slow 2s ease-in-out infinite; }
      `}</style>
    </section>
  );
}
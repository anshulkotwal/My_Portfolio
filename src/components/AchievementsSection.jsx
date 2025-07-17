import { useState, useEffect, useRef } from 'react';
import {
  Trophy, Star, Award, Target, Code, Database, Calendar, TrendingUp, Zap, Crown, Medal, Flame, Activity, GitBranch, Brain, Users, Globe, ChevronRight, Sparkles, Eye, EyeOff, Image, X, ZoomIn
} from 'lucide-react';

export const AchievementsSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredAchievement, setHoveredAchievement] = useState(null);
  const [animationTrigger, setAnimationTrigger] = useState(false);
  const [showDetails, setShowDetails] = useState({});
  const [showImageModal, setShowImageModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [particlePositions, setParticlePositions] = useState([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setAnimationTrigger(true);
    }, { threshold: 0.1 });

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // Generate floating particles
    const particles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 5
    }));
    setParticlePositions(particles);
  }, []);

  const toggleDetail = (id) => {
    setShowDetails(prev => ({ ...prev, [id]: !prev[id] }));
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
      icon: <Globe className="h-8 w-8" />,
      gradient: 'from-blue-500 via-indigo-500 to-purple-600',
      glowColor: 'shadow-blue-500/50',
      bgPattern: 'radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(147, 51, 234, 0.15) 0%, transparent 50%)',
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
        { label: 'Learners Mentored', value: '600+', icon: <Users className="h-4 w-4" /> },
        { label: 'Skill Badges', value: '5200+', icon: <Award className="h-4 w-4" /> },
        { label: 'Cohorts', value: '3', icon: <Calendar className="h-4 w-4" /> },
        { label: 'Certifications', value: 'Multiple', icon: <Medal className="h-4 w-4" /> }
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
      icon: <Code className="h-8 w-8" />,
      gradient: 'from-orange-500 via-red-500 to-pink-600',
      glowColor: 'shadow-orange-500/50',
      bgPattern: 'radial-gradient(circle at 30% 40%, rgba(249, 115, 22, 0.15) 0%, transparent 50%), radial-gradient(circle at 70% 60%, rgba(236, 72, 153, 0.15) 0%, transparent 50%)',
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
        { label: 'Problems Solved', value: '550+', icon: <Target className="h-4 w-4" /> },
        { label: 'Contest Rating', value: '1700+', icon: <TrendingUp className="h-4 w-4" /> },
        { label: 'Global Rank', value: '<1.19L', icon: <Crown className="h-4 w-4" /> },
        { label: 'Coding Streak', value: '200 Days', icon: <Flame className="h-4 w-4" /> }
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
      icon: <Database className="h-8 w-8" />,
      gradient: 'from-green-500 via-teal-500 to-cyan-600',
      glowColor: 'shadow-green-500/50',
      bgPattern: 'radial-gradient(circle at 25% 30%, rgba(34, 197, 94, 0.15) 0%, transparent 50%), radial-gradient(circle at 75% 70%, rgba(6, 182, 212, 0.15) 0%, transparent 50%)',
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
        { label: 'SQL Rating', value: '5⭐', icon: <Database className="h-4 w-4" /> },
        { label: 'Python Rating', value: '4⭐', icon: <Code className="h-4 w-4" /> },
        { label: 'C Rating', value: '4⭐', icon: <GitBranch className="h-4 w-4" /> },
        { label: 'Certifications', value: '2', icon: <Award className="h-4 w-4" /> }
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
    { key: 'all', label: 'All Achievements', icon: <Trophy className="h-5 w-5" /> },
    { key: 'google-cloud', label: 'Google Cloud', icon: <Globe className="h-5 w-5" /> },
    { key: 'leetcode', label: 'LeetCode', icon: <Code className="h-5 w-5" /> },
    { key: 'hackerrank', label: 'HackerRank', icon: <Database className="h-5 w-5" /> }
  ];

  const filteredAchievements = activeCategory === 'all'
    ? achievements
    : achievements.filter(a => a.category === activeCategory);

  return (
    <section ref={sectionRef} id="achievements" className="relative py-24 px-4 min-h-screen overflow-hidden">
      {/* Animated Background Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {particlePositions.map((particle) => (
          <div
            key={particle.id}
            className="absolute rounded-full opacity-20 animate-float"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              background: `linear-gradient(45deg, #3b82f6, #8b5cf6, #f59e0b, #ef4444)`,
              animationDuration: `${particle.duration}s`,
              animationDelay: `${particle.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Mesh Gradient Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-6000"></div>
      </div>

      {/* Header with Floating Animation */}
     <div className="text-center mb-16 relative z-10">
  <div className="flex items-center justify-center gap-4 mb-4">
    {/* Trophy on the left */}
    <div className="animate-bounce-slow">
      <Trophy className="h-16 w-16 text-yellow-400 animate-pulse" />
    </div>
    
    {/* Heading in the center */}
    <div>
      <h2 className="text-6xl font-bold animate-text-glow">
        My{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 animate-gradient-x">
          Achievements
        </span>
      </h2>
    </div>
  </div>

  {/* Subtitle and stars below */}
  <p className="text-xl text-gray-400 animate-fade-in-up">
    Milestones in my extraordinary learning journey
  </p>
  <div className="flex justify-center mt-4">
    <div className="flex space-x-1">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="h-6 w-6 text-yellow-400 animate-twinkle" style={{ animationDelay: `${i * 0.2}s` }} />
      ))}
    </div>
  </div>
</div>
      {/* Animated Categories */}
      <div className="flex justify-center flex-wrap gap-6 mb-12 relative z-10">
        {categories.map((cat, index) => (
          <button
            key={cat.key}
            onClick={() => setActiveCategory(cat.key)}
            className={`group relative flex items-center gap-3 px-8 py-4 rounded-2xl border-2 transition-all duration-500 transform hover:scale-110 ${
              activeCategory === cat.key
                ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white border-orange-500 shadow-lg shadow-orange-500/50'
                : 'border-white/20 text-gray-300 hover:border-white/40 backdrop-blur-sm bg-white/5'
            } animate-slide-in-stagger`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="relative">
              {cat.icon}
              {activeCategory === cat.key && (
                <div className="absolute inset-0 animate-ping">
                  {cat.icon}
                </div>
              )}
            </div>
            <span className="font-semibold">{cat.label}</span>
            {activeCategory === cat.key && (
              <Sparkles className="h-4 w-4 animate-spin" />
            )}
          </button>
        ))}
      </div>

      {/* Extraordinary Achievements Grid */}
      <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto relative z-10">
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
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-border-glow"></div>
            
            {/* Main Achievement Card */}
            <div 
              className="relative p-8 rounded-3xl backdrop-blur-xl border border-white/10 shadow-2xl hover:shadow-3xl transition-all duration-500 group-hover:scale-105 overflow-hidden"
              style={{ background: achieve.bgPattern }}
            >
              {/* Animated Background Overlay */}
              <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-white/20 animate-shimmer"></div>
              </div>

              {/* Achievement Header */}
              <div className="relative flex items-center gap-6 mb-6">
                <div className={`relative p-4 rounded-2xl bg-gradient-to-r ${achieve.gradient} shadow-xl group-hover:shadow-2xl transition-all duration-500`}>
                  <div className="relative z-10">
                    {achieve.icon}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-2xl"></div>
                  {hoveredAchievement === achieve.id && (
                    <div className="absolute inset-0 animate-pulse bg-white/20 rounded-2xl"></div>
                  )}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-yellow-300 transition-colors duration-300">
                    {achieve.title}
                  </h3>
                  <p className="text-gray-300 text-lg">{achieve.subtitle}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold bg-gradient-to-r ${achieve.gradient} text-white`}>
                      {achieve.level}
                    </span>
                    <span className="text-green-400 font-semibold animate-pulse">
                      {achieve.status}
                    </span>
                  </div>
                </div>
              </div>

              {/* Achievement Images Gallery */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-4">
                  <Image className="h-5 w-5 text-cyan-400" />
                  <h4 className="text-lg font-semibold text-white">{achieve.imageType}</h4>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {achieve.images.map((img, imgIdx) => (
                    <div
                      key={imgIdx}
                      className="relative group/img cursor-pointer transition-all duration-300 hover:scale-105"
                      onClick={() => openImageModal(img)}
                    >
                      <div className="relative overflow-hidden rounded-lg border-2 border-white/20 hover:border-white/40 transition-all duration-300">
                        <img
                          src={img.url}
                          alt={img.alt}
                          className="w-full h-24 object-cover transition-transform duration-300 group-hover/img:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300"></div>
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity duration-300">
                          <ZoomIn className="h-6 w-6 text-white" />
                        </div>
                      </div>
                      <p className="text-xs text-gray-400 mt-1 text-center">{img.caption}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Animated Stats Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {achieve.stats.map((stat, idx) => (
                  <div
                    key={idx}
                    className="relative p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 group-hover:scale-105"
                    style={{ animationDelay: `${idx * 0.1}s` }}
                  >
                    <div className="flex items-center gap-3 text-gray-300 mb-2">
                      <div className="p-1 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500">
                        {stat.icon}
                      </div>
                      <span className="text-sm font-medium">{stat.label}</span>
                    </div>
                    <div className="text-2xl font-bold text-white group-hover:text-yellow-300 transition-colors duration-300">
                      {stat.value}
                    </div>
                  </div>
                ))}
              </div>

              {/* Expandable Details */}
              <div className="mb-6">
                <button
                  onClick={() => toggleDetail(achieve.id)}
                  className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 group-hover:scale-105"
                >
                  {showDetails[achieve.id] ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  <span className="font-semibold">
                    {showDetails[achieve.id] ? 'Hide' : 'Show'} Detailed Milestones
                  </span>
                  <ChevronRight className={`w-4 h-4 transition-transform duration-300 ${showDetails[achieve.id] ? 'rotate-90' : ''}`} />
                </button>
                
                {showDetails[achieve.id] && (
                  <div className="mt-4 animate-fade-in-up">
                    <ul className="space-y-2">
                      {achieve.details.map((detail, detailIdx) => (
                        <li
                          key={detailIdx}
                          className="flex items-start gap-3 text-gray-300 animate-slide-in-left"
                          style={{ animationDelay: `${detailIdx * 0.1}s` }}
                        >
                          <Star className="h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0 animate-twinkle" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Animated Badges */}
              <div className="flex flex-wrap gap-3">
                {achieve.badges.map((badge, badgeIdx) => (
                  <span
                    key={badgeIdx}
                    className={`px-4 py-2 rounded-full text-sm font-bold text-white bg-gradient-to-r ${achieve.gradient} shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-badge-glow`}
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

      {/* Image Modal */}
      {showImageModal && selectedImage && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="relative max-w-4xl max-h-[90vh] bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 overflow-hidden animate-scale-in">
            <div className="absolute top-4 right-4 z-10">
              <button
                onClick={closeImageModal}
                className="p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors duration-300"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <img
              src={selectedImage.url}
              alt={selectedImage.alt}
              className="w-full h-auto max-h-[80vh] object-contain"
            />
            <div className="p-6 bg-gradient-to-t from-black/60 to-transparent">
              <h3 className="text-xl font-bold text-white mb-2">{selectedImage.caption}</h3>
              <p className="text-gray-300">{selectedImage.alt}</p>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
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
          0%, 100% { opacity: 0.3; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        @keyframes border-glow {
          0%, 100% { opacity: 0; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1.1); }
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
        .animate-blob { animation: blob 7s infinite; }
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
        
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
        .animation-delay-6000 { animation-delay: 6s; }
      `}</style>
    </section>
  );
};
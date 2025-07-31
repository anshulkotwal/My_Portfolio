import {
    Award,
    Star,
    ExternalLink,
    Calendar,
    Shield,
    Trophy,
    Zap,
    Globe,
    Code,
    Brain,
    Sparkles,
    CheckCircle,
    ArrowRight,
    Cloud,
    ServerIcon,
    Database,
    ChevronRight,
    Verified,
    Clock,
    Target,
    TrendingUp,
    BookOpen,
    Users,
    Activity,
    Crown,
    Flame,
    Gem,
    Rocket,
    Wand2,
    Infinity
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

const certificates = [
    {
        id: 1,
        title: "Responsive Web Design",
        issuer: "freeCodeCamp",
        date: "March 4, 2024",
        credentialId: "anshulkotwal/responsive-web-design",
        description: "Completed 300 hours of intensive learning in modern HTML5 and CSS3, mastering responsive layouts using Flexbox, Grid, and mobile-first principles.",
        skills: ["HTML5", "CSS3", "Responsive Design", "CSS Grid", "Flexbox", "Mobile-First"],
        icon: Code,
        gradient: "from-blue-500 to-cyan-500",
        color: "blue",
        verified: true,
        level: "Professional",
        hours: "300 hours",
        link: "https://www.freecodecamp.org/certification/anshulkotwal/responsive-web-design",
        category: "Frontend Development"
    },
    {
        id: 2,
        title: "JavaScript Algorithms and Data Structures",
        issuer: "freeCodeCamp",
        date: "June 22, 2025",
        credentialId: "anshulkotwal/javascript-algorithms-and-data-structures",
        description: "Completed 300 hours covering core JavaScript concepts, including ES6+, recursion, object-oriented and functional programming, and common data structures.",
        skills: ["JavaScript", "ES6+", "Algorithms", "Data Structures", "Functional Programming", "Object-Oriented Programming"],
        icon: Brain,
        gradient: "from-purple-500 to-pink-500",
        color: "purple",
        verified: true,
        level: "Advanced",
        hours: "300 hours",
        link: "https://www.freecodecamp.org/certification/AnshulKotwal/javascript-algorithms-and-data-structures-v8",
        category: "Programming"
    },
    {
        id: 3,
        title: "Web Development Bootcamp",
        issuer: "Udemy",
        date: "May 21, 2024",
        credentialId: "UC-08030ed1-d787-4df1-b4cb-40aa48523df9",
        description: "Completed a comprehensive 61.5-hour bootcamp by Dr. Angela Yu, covering HTML, CSS, JavaScript, Node.js, Express, MongoDB, React, and full-stack project building.",
        skills: ["HTML", "CSS", "JavaScript", "Node.js", "Express", "MongoDB", "React", "Full-Stack Development"],
        icon: Globe,
        gradient: "from-orange-500 to-red-500",
        color: "orange",
        verified: true,
        level: "Professional",
        hours: "61.5 hours",
        link: "https://ude.my/UC-08030ed1-d787-4df1-b4cb-40aa48523df9",
        category: "Full-Stack Development"
    },
    {
        id: 4,
        title: "Google Cloud Arcade Program",
        issuer: "Google Cloud Skills Boost",
        date: "June 2025",
        credentialId: "MSMKutvRbzn",
        description: "Hands-on experience with Google Cloud Platform services, cloud architecture, and deployment strategies",
        skills: ["Google Cloud Platform", "Leadership", "Public Speaking", "Technical Community Building", "Cloud Functions", "Corporate Communications"],
        icon: Shield,
        gradient: "from-indigo-500 to-blue-500",
        color: "indigo",
        verified: true,
        level: "Professional",
        hours: "150 hours",
        link: "https://onedrive.live.com/?redeem=aHR0cHM6Ly8xZHJ2Lm1zL2IvYy9jMzI3NWEyN2I3YzRlZGZmL0VkSDZSeEtZT2laR2xjQVZqbVlmWGRJQk5KdGIxSjZncXhYSU9oWUFwVmJOQWc&cid=C3275A27B7C4EDFF&id=C3275A27B7C4EDFF%21s1247fad13a98462695c0158e661f5dd2&parId=C3275A27B7C4EDFF%21s7b35113f8d9d42d08cc2b92c74280b89&o=OneUp",
        category: "Cloud Computing"
    },
    {
        id: 5,
        title: "SQL (Intermediate)",
        issuer: "HackerRank",
        date: "January 22, 2024",
        credentialId: "48B744735774",
        description: "Successfully passed the HackerRank SQL (Intermediate) skill assessment, demonstrating strong knowledge of joins, aggregations, subqueries, and analytical functions.",
        skills: ["SQL", "Joins", "Aggregate Functions", "Subqueries", "Window Functions"],
        icon: Database,
        gradient: "from-rose-500 to-pink-500",
        color: "rose",
        verified: true,
        level: "Intermediate",
        hours: "Assessment",
        link: "https://www.hackerrank.com/certificates/48b744735774",
        category: "Database"
    },
    {
        id: 6,
        title: "Google Cloud Facilitator",
        issuer: "Google Cloud Community India",
        date: "Oct 2024",
        credentialId: "an1e4w9CVEHm",
        description:
            "Hands-on experience with Google Cloud Platform services, cloud architecture, and deployment strategies.",
        skills: [
            "Google Cloud Platform",
            "Leadership",
            "Time Management",
            "Technical Community Building",
            "Motivational Speaking",
            "Corporate Communications"
        ],
        icon: Cloud,
        gradient: "from-[#0f2027] via-[#203a43] to-[#2c5364]", // Dark Sleek Night
color: "slate",

        verified: true,
        level: "Professional",
        hours: "150 hours",
        link: "https://onedrive.live.com/?redeem=aHR0cHM6Ly8xZHJ2Lm1zL2IvYy9jMzI3NWEyN2I3YzRlZGZmL0ViNnRkLTNIRi1kSW9hYk1Xdnl2bmtjQnhxeENENW5sanQ1VUVuU1RSSXpxdnc&cid=C3275A27B7C4EDFF&id=C3275A27B7C4EDFF%21sed77adbe17c748e7a1a6cc5afcaf9e47&parId=C3275A27B7C4EDFF%21s7b35113f8d9d42d08cc2b92c74280b89&o=OneUp",
        category: "Cloud Computing"
    }

];

const FloatingParticles = () => {
    const [particles, setParticles] = useState([]);
    const [isDarkMode, setIsDarkMode] = useState(true);

    useEffect(() => {
        // Check for dark mode
        const checkDarkMode = () => {
            const isDark = document.documentElement.classList.contains('dark') ||
                window.matchMedia('(prefers-color-scheme: dark)').matches;
            setIsDarkMode(isDark);
        };

        checkDarkMode();
        window.addEventListener('storage', checkDarkMode);

        // Reduce particles on mobile
        const isMobile = window.innerWidth < 768;
        const particleCount = isMobile ? 15 : 30;

        const newParticles = Array.from({ length: particleCount }, (_, i) => ({
            id: i,
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            size: Math.random() * (isMobile ? 4 : 6) + 2,
            speedX: (Math.random() - 0.5) * (isMobile ? 1.5 : 3),
            speedY: (Math.random() - 0.5) * (isMobile ? 1.5 : 3),
            opacity: Math.random() * 0.5 + 0.1,
            color: isDarkMode
                ? ['#8B5CF6', '#06B6D4', '#10B981', '#F59E0B', '#EF4444', '#EC4899'][Math.floor(Math.random() * 6)]
                : ['#8B5CF6', '#06B6D4', '#10B981', '#F59E0B', '#EF4444', '#EC4899'][Math.floor(Math.random() * 6)],
            shape: Math.random() > 0.5 ? 'circle' : 'square'
        }));
        setParticles(newParticles);

        const interval = setInterval(() => {
            setParticles(prev => prev.map(particle => ({
                ...particle,
                x: (particle.x + particle.speedX + window.innerWidth) % window.innerWidth,
                y: (particle.y + particle.speedY + window.innerHeight) % window.innerHeight
            })));
        }, 50);

        return () => {
            clearInterval(interval);
            window.removeEventListener('storage', checkDarkMode);
        };
    }, [isDarkMode]);

    return (
        <div className="fixed inset-0 pointer-events-none z-0">
            {particles.map(particle => (
                <div
                    key={particle.id}
                    className={`absolute ${particle.shape === 'circle' ? 'rounded-full' : 'rounded-sm'} animate-pulse`}
                    style={{
                        left: particle.x,
                        top: particle.y,
                        width: particle.size,
                        height: particle.size,
                        backgroundColor: particle.color,
                        opacity: particle.opacity,
                        filter: 'blur(1px)',
                        transform: `rotate(${particle.x * 0.1}deg)`
                    }}
                />
            ))}
        </div>
    );
};

const MagicOrb = ({ x, y, color, size = 20 }) => {
    return (
        <div
            className="absolute pointer-events-none animate-pulse"
            style={{
                left: x,
                top: y,
                width: size,
                height: size,
                background: `radial-gradient(circle, ${color}80 0%, ${color}40 50%, transparent 70%)`,
                borderRadius: '50%',
                filter: 'blur(2px)',
                animation: `float 3s ease-in-out infinite`
            }}
        />
    );
};

const CertificateCard = ({ certificate, index }) => {
    const cardRef = useRef();
    const [isHovered, setIsHovered] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [magicOrbs, setMagicOrbs] = useState([]);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        const card = cardRef.current;
        if (!card || isMobile) return; // Disable complex animations on mobile

        let animationFrameId;
        let tiltTimeout;

        const handleMouseMove = (e) => {
            if (animationFrameId) return;

            animationFrameId = requestAnimationFrame(() => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                const centerX = rect.width / 2;
                const centerY = rect.height / 2;

                const rotateX = Math.max(-15, Math.min(15, ((y - centerY) / centerY) * -8));
                const rotateY = Math.max(-15, Math.min(15, ((x - centerX) / centerX) * 8));

                setMousePosition({ x, y });

                card.style.transform = `
                    perspective(1000px) 
                    rotateX(${rotateX}deg) 
                    rotateY(${rotateY}deg) 
                    translateZ(20px)
                    scale3d(1.02, 1.02, 1.02)
                `;
                card.style.transition = 'none';

                // Generate magic orbs on hover (less frequent on mobile)
                if (Math.random() > 0.85) {
                    const newOrb = {
                        id: Date.now() + Math.random(),
                        x: x + (Math.random() - 0.5) * 80,
                        y: y + (Math.random() - 0.5) * 80,
                        color: ['#8B5CF6', '#06B6D4', '#10B981', '#F59E0B', '#EF4444'][Math.floor(Math.random() * 5)],
                        size: Math.random() * 12 + 4
                    };
                    setMagicOrbs(prev => [...prev.slice(-3), newOrb]);
                }

                animationFrameId = null;
            });
        };

        const handleMouseLeave = () => {
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
                animationFrameId = null;
            }

            clearTimeout(tiltTimeout);
            tiltTimeout = setTimeout(() => {
                card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px) scale3d(1, 1, 1)';
                card.style.transition = 'all 0.6s cubic-bezier(0.23, 1, 0.320, 1)';
            }, 50);

            setIsHovered(false);
            setMagicOrbs([]);
        };

        const handleMouseEnter = () => {
            clearTimeout(tiltTimeout);
            setIsHovered(true);
        };

        card.addEventListener('mousemove', handleMouseMove);
        card.addEventListener('mouseleave', handleMouseLeave);
        card.addEventListener('mouseenter', handleMouseEnter);

        return () => {
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
            }
            clearTimeout(tiltTimeout);
            card.removeEventListener('mousemove', handleMouseMove);
            card.removeEventListener('mouseleave', handleMouseLeave);
            card.removeEventListener('mouseenter', handleMouseEnter);
        };
    }, [isMobile]);

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
            { threshold: 0.1, rootMargin: '50px' }
        );

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const getLevelColor = (level) => {
        const colors = {
            'Beginner': 'text-green-500 bg-green-50 border-green-200 dark:text-green-400 dark:bg-green-500/20 dark:border-green-400/40',
            'Intermediate': 'text-yellow-600 bg-yellow-50 border-yellow-200 dark:text-yellow-400 dark:bg-yellow-500/20 dark:border-yellow-400/40',
            'Professional': 'text-blue-600 bg-blue-50 border-blue-200 dark:text-blue-400 dark:bg-blue-500/20 dark:border-blue-400/40',
            'Advanced': 'text-purple-600 bg-purple-50 border-purple-200 dark:text-purple-400 dark:bg-purple-500/20 dark:border-purple-400/40',
            'Expert': 'text-red-600 bg-red-50 border-red-200 dark:text-red-400 dark:bg-red-500/20 dark:border-red-400/40'
        };
        return colors[level] || 'text-gray-600 bg-gray-50 border-gray-200 dark:text-gray-400 dark:bg-gray-500/20 dark:border-gray-400/40';
    };

    const Icon = certificate.icon;
    const levelIcons = {
        'Beginner': Star,
        'Intermediate': Zap,
        'Professional': Crown,
        'Advanced': Gem,
        'Expert': Infinity
    };
    const LevelIcon = levelIcons[certificate.level] || Star;

    return (
        <div
            ref={cardRef}
            className="certificate-card relative bg-white/80 dark:bg-gray-900/70 backdrop-blur-xl rounded-2xl md:rounded-3xl overflow-hidden border border-gray-200/50 dark:border-gray-700/50 transition-all duration-700 hover:border-gray-300/50 dark:hover:border-gray-500/50 opacity-0 translate-y-10 scale-95 will-change-transform group shadow-lg dark:shadow-2xl"
            style={{
                transformOrigin: 'center center',
                transitionDelay: `${index * 0.1}s`,
                boxShadow: isHovered
                    ? `0 25px 50px -12px rgba(0,0,0,0.25), 0 0 40px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.1)`
                    : '0 10px 25px -5px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05), inset 0 1px 0 rgba(255,255,255,0.05)'
            }}
        >
            {/* Magic orbs */}
            {!isMobile && magicOrbs.map(orb => (
                <MagicOrb key={orb.id} x={orb.x} y={orb.y} color={orb.color} size={orb.size} />
            ))}

            {/* Enhanced glow effect */}
            <div className={`absolute inset-0 bg-gradient-to-br ${certificate.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-700`} />

            {/* Animated border (desktop only) */}
            {!isMobile && (
                <div className="absolute inset-0 rounded-2xl md:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className={`absolute inset-0 rounded-2xl md:rounded-3xl bg-gradient-to-r ${certificate.gradient} blur-sm opacity-30 animate-pulse`} />
                </div>
            )}

            {/* Mouse follower effect (desktop only) */}
            {!isMobile && isHovered && (
                <div
                    className="absolute pointer-events-none transition-opacity duration-300 z-10"
                    style={{
                        left: mousePosition.x - 60,
                        top: mousePosition.y - 60,
                        width: 120,
                        height: 120,
                        background: `radial-gradient(circle, ${certificate.gradient.includes('purple') ? 'rgba(168,85,247,0.4)' : 'rgba(6,182,212,0.4)'} 0%, transparent 70%)`,
                        borderRadius: '50%',
                        filter: 'blur(20px)',
                        animation: 'pulse 1s ease-in-out infinite'
                    }}
                />
            )}

            {/* Category badge */}
            <div className="absolute top-3 right-3 md:top-4 md:right-4 z-20">
                <div className={`px-2 py-1 md:px-3 md:py-1.5 text-xs font-bold rounded-lg md:rounded-xl bg-gradient-to-r ${certificate.gradient} text-white shadow-lg transform hover:scale-105 transition-all duration-300 border border-white/20`}>
                    <div className="flex items-center gap-1">
                        <Sparkles size={8} className="md:hidden" />
                        <Sparkles size={10} className="hidden md:block" />
                        <span className="hidden sm:inline">{certificate.category}</span>
                        <span className="sm:hidden">{certificate.category.split(' ')[0]}</span>
                    </div>
                </div>
            </div>

            {/* Header */}
            <div className="p-4 md:p-6 pb-3 md:pb-4">
                <div className="flex items-start justify-between mb-4 md:mb-5">
                    <div className={`relative w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-gradient-to-br ${certificate.gradient} p-2.5 md:p-3 transform transition-all duration-500 group-hover:scale-110 ${!isMobile ? 'group-hover:rotate-12' : ''} shadow-lg md:shadow-2xl`}>
                        <Icon size={isMobile ? 20 : 24} className="text-white" />
                        <div className="absolute inset-0 rounded-xl md:rounded-2xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute -top-0.5 -right-0.5 md:-top-1 md:-right-1 w-2.5 h-2.5 md:w-3 md:h-3 bg-green-400 rounded-full animate-ping" />
                    </div>

                    <div className="flex flex-col items-end gap-1.5 md:gap-2">
                        <div className="flex items-center gap-1.5 md:gap-2">
                            {certificate.verified && (
                                <div className="flex items-center gap-1 px-1.5 py-0.5 md:px-2 md:py-1 text-xs font-bold rounded-md md:rounded-lg text-green-600 bg-green-50 border border-green-200 dark:text-green-400 dark:bg-green-500/20 dark:border-green-400/40 backdrop-blur-sm">
                                    <CheckCircle size={8} className="md:hidden" />
                                    <CheckCircle size={10} className="hidden md:block" />
                                    <span className="hidden sm:inline">Verified</span>
                                    <span className="sm:hidden">✓</span>
                                </div>
                            )}
                            <span className={`px-1.5 py-0.5 md:px-2 md:py-1 text-xs font-bold rounded-md md:rounded-lg ${getLevelColor(certificate.level)} border backdrop-blur-sm flex items-center gap-1`}>
                                <LevelIcon size={8} className="md:hidden" />
                                <LevelIcon size={10} className="hidden md:block" />
                                <span className="hidden sm:inline">{certificate.level}</span>
                                <span className="sm:hidden">{certificate.level.slice(0, 3)}</span>
                            </span>
                        </div>
                        <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                            <Calendar size={8} className="md:hidden" />
                            <Calendar size={10} className="hidden md:block" />
                            <span className="text-xs md:text-sm">{certificate.date}</span>
                        </div>
                    </div>
                </div>

                <h3 className={`text-lg md:text-xl font-black mb-2 bg-gradient-to-r ${certificate.gradient} bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300 leading-tight`}>
                    {certificate.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 text-sm font-semibold flex items-center gap-2 mb-2">
                    <Verified size={12} className="text-blue-500 dark:text-blue-400 flex-shrink-0" />
                    <span className="truncate">{certificate.issuer}</span>
                </p>

                <p className="text-gray-500 dark:text-gray-400 text-sm mb-3 md:mb-4 leading-relaxed line-clamp-3">
                    {certificate.description}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-1.5 md:gap-2 mb-3 md:mb-4">
                    {certificate.skills.slice(0, isMobile ? 4 : 6).map((skill, skillIndex) => (
                        <span
                            key={skill}
                            className={`px-2 py-1 md:px-2.5 md:py-1 text-xs font-semibold rounded-full bg-gradient-to-r ${certificate.gradient} bg-opacity-20 text-gray-700 dark:text-white/90 border border-gray-200 dark:border-white/20 backdrop-blur-sm transform transition-all duration-300 hover:scale-105 ${!isMobile ? 'hover:bg-opacity-30 hover:rotate-1' : ''} cursor-default`}
                            style={{
                                animationDelay: `${skillIndex * 0.05}s`,
                                animation: 'fadeInUp 0.5s ease-out forwards'
                            }}
                        >
                            {skill}
                        </span>
                    ))}
                    {certificate.skills.length > (isMobile ? 4 : 6) && (
                        <span className="px-2 py-1 text-xs font-semibold rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-gray-600">
                            +{certificate.skills.length - (isMobile ? 4 : 6)}
                        </span>
                    )}
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mb-4 md:mb-5 bg-gray-50 dark:bg-gray-800/50 rounded-xl p-3 backdrop-blur-sm border border-gray-200 dark:border-gray-700/50">
                    <div className="flex items-center gap-1.5 md:gap-2">
                        <Clock size={10} className="md:hidden" />
                        <Clock size={12} className="hidden md:block" />
                        <span className="font-semibold text-xs md:text-sm">{certificate.hours}</span>
                    </div>
                    <div className="flex items-center gap-1.5 md:gap-2">
                        <Shield size={10} className="md:hidden" />
                        <Shield size={12} className="hidden md:block" />
                        <span className="font-mono font-bold text-xs md:text-sm">{certificate.credentialId.slice(-8)}</span>
                    </div>
                </div>

                {/* Action button */}
                <button
                    className={`w-full flex items-center justify-center gap-2 px-4 py-2.5 md:px-5 md:py-3 rounded-xl md:rounded-2xl bg-gradient-to-r ${certificate.gradient} text-white text-sm font-bold transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-current/30 group/btn relative overflow-hidden`}
                    onClick={() => window.open(certificate.link, '_blank')}
                >
                    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700" />
                    <ExternalLink size={12} className="md:hidden group-hover/btn:rotate-12 transition-transform duration-300" />
                    <ExternalLink size={14} className="hidden md:block group-hover/btn:rotate-12 transition-transform duration-300" />
                    <span className="hidden sm:inline">View Certificate</span>
                    <span className="sm:hidden">View</span>
                    <ChevronRight size={12} className="md:hidden group-hover/btn:translate-x-1 transition-transform duration-300" />
                    <ChevronRight size={14} className="hidden md:block group-hover/btn:translate-x-1 transition-transform duration-300" />
                </button>
            </div>

            {/* Bottom accent */}
            <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${certificate.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />

            {/* Corner decorations (desktop only) */}
            {!isMobile && (
                <>
                    <div className="absolute top-0 left-0 w-6 h-6 md:w-8 md:h-8 border-l-2 border-t-2 border-gray-300 dark:border-white/20 rounded-tl-2xl md:rounded-tl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-0 right-0 w-6 h-6 md:w-8 md:h-8 border-r-2 border-b-2 border-gray-300 dark:border-white/20 rounded-br-2xl md:rounded-br-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </>
            )}
        </div>
    );
};

export const CertificatesSection = () => {
    const containerRef = useRef();
    const titleRef = useRef();
    const [visibleCount, setVisibleCount] = useState(6);
    const [filter, setFilter] = useState('all');
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
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
            { threshold: 0.1, rootMargin: '100px' }
        );

        if (titleRef.current) {
            observer.observe(titleRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const categories = ['all', ...new Set(certificates.map(cert => cert.category))];
    const filteredCertificates = filter === 'all'
        ? certificates
        : certificates.filter(cert => cert.category === filter);

    const handleLoadMore = () => {
        setVisibleCount(prev => Math.min(prev + (isMobile ? 2 : 3), filteredCertificates.length));
    };

    const totalHours = certificates.reduce((sum, cert) => {
        const hours = cert.hours.match(/\d+/);
        return sum + (hours ? parseInt(hours[0]) : 0);
    }, 0);

    return (
        <section id="certificates" className="relative py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
            <FloatingParticles />

            <div ref={containerRef} className="container mx-auto max-w-7xl relative z-10">
                {/* Enhanced Header with mobile-friendly layout */}
                <header
                    ref={titleRef}
                    className="text-center mb-12 sm:mb-16 lg:mb-20 opacity-0 translate-y-10 transition-all duration-1000"
                >
                    {/* Mobile-optimized header icons */}
                    <div className="flex justify-center items-center gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-purple-500 to-pink-500 dark:from-purple-500 dark:to-pink-500 light:from-purple-600 light:to-pink-600 p-3 sm:p-4 animate-bounce shadow-xl sm:shadow-2xl relative">
                            <Award size={isMobile ? 24 : 32} className="text-white" />
                            <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-4 h-4 sm:w-6 sm:h-6 bg-yellow-400 rounded-full animate-ping" />
                        </div>
                        <div className="relative">
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 dark:from-purple-400 dark:via-pink-500 dark:to-cyan-400 light:from-purple-600 light:via-pink-600 light:to-cyan-600 bg-clip-text text-transparent animate-pulse">
                                Certifications
                            </h1>
                            <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 text-yellow-400 dark:text-yellow-400 light:text-yellow-500 animate-spin">
                                <Sparkles size={isMobile ? 16 : 24} />
                            </div>
                            <div className="absolute -bottom-1 sm:-bottom-2 -left-1 sm:-left-2 text-blue-400 dark:text-blue-400 light:text-blue-500 animate-bounce">
                                <Sparkles size={isMobile ? 14 : 20} />
                            </div>
                        </div>
                        <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-cyan-500 to-blue-500 dark:from-cyan-500 dark:to-blue-500 light:from-cyan-600 light:to-blue-600 p-3 sm:p-4 animate-bounce shadow-xl sm:shadow-2xl relative" style={{ animationDelay: '0.5s' }}>
                            <Trophy size={isMobile ? 24 : 32} className="text-white" />
                            <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-4 h-4 sm:w-6 sm:h-6 bg-green-400 rounded-full animate-ping" style={{ animationDelay: '0.5s' }} />
                        </div>
                    </div>

                    {/* Mobile-friendly description */}
                    <p className="text-gray-300 dark:text-gray-300 light:text-gray-600 text-sm sm:text-base lg:text-lg max-w-4xl mx-auto leading-relaxed mb-4 sm:mb-6 px-2 sm:px-4">
                        Professional certifications and achievements that validate my expertise across
                        cutting-edge technologies, frameworks, and development practices. Each certificate
                        represents dedication to continuous learning and industry excellence.
                    </p>

                    {/* Mobile-optimized category filter */}
                    <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-10 px-2">
                        {categories.map((category, index) => (
                            <button
                                key={category}
                                onClick={() => setFilter(category)}
                                className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-500 transform hover:scale-105 ${filter === category
                                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/30'
                                    : 'bg-gray-800/50 dark:bg-gray-800/50 light:bg-gray-200/80 text-gray-300 dark:text-gray-300 light:text-gray-700 hover:bg-gray-700/50 dark:hover:bg-gray-700/50 light:hover:bg-gray-300/80 border border-gray-600/50 dark:border-gray-600/50 light:border-gray-300/50 hover:border-gray-500/50 dark:hover:border-gray-500/50 light:hover:border-gray-400/50'
                                    }`}
                                style={{
                                    animationDelay: `${index * 0.1}s`,
                                    animation: 'fadeInUp 0.5s ease-out forwards'
                                }}
                            >
                                {category === 'all' ? (
                                    <span className="flex items-center gap-1">
                                        <Infinity size={12} />
                                        All Categories
                                    </span>
                                ) : (
                                    <span className="truncate max-w-[100px] sm:max-w-none">
                                        {category}
                                    </span>
                                )}
                            </button>
                        ))}
                    </div>
                </header>

                {/* Mobile-responsive certificates grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16">
                    {filteredCertificates.slice(0, visibleCount).map((certificate, index) => (
                        <CertificateCard key={certificate.id} certificate={certificate} index={index} />
                    ))}
                </div>

                {/* Mobile-optimized Load more button */}
                {visibleCount < filteredCertificates.length && (
                    <div className="text-center mb-12 sm:mb-16">
                        <button
                            onClick={handleLoadMore}
                            className="inline-flex items-center gap-2 sm:gap-4 px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold sm:font-black text-sm sm:text-base rounded-2xl sm:rounded-3xl transform transition-all duration-300 hover:scale-105 hover:shadow-xl sm:hover:shadow-2xl hover:shadow-purple-500/30 sm:hover:shadow-purple-500/40 group focus:outline-none focus:ring-2 focus:ring-purple-500/50 relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                            <Sparkles size={isMobile ? 20 : 24} className="group-hover:rotate-12 transition-transform duration-300" />
                            <span className="whitespace-nowrap">Load More Certificates</span>
                            <Rocket size={isMobile ? 20 : 24} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                        </button>
                    </div>
                )}

                {/* Mobile-responsive Stats footer */}
                <footer className="text-center space-y-8 sm:space-y-12">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
                        <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 dark:from-purple-500/20 dark:to-pink-500/20 light:from-purple-500/10 light:to-pink-500/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-purple-400/30 dark:border-purple-400/30 light:border-purple-400/20 backdrop-blur-sm">
                            <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-purple-400 dark:text-purple-400 light:text-purple-600 mb-1 sm:mb-2">{certificates.length}</div>
                            <div className="text-xs sm:text-sm text-gray-400 dark:text-gray-400 light:text-gray-600 flex items-center justify-center gap-1">
                                <Award size={12} />
                                <span className="hidden sm:inline">Certifications</span>
                                <span className="sm:hidden">Certs</span>
                            </div>
                        </div>
                        <div className="bg-gradient-to-br from-green-500/20 to-teal-500/20 dark:from-green-500/20 dark:to-teal-500/20 light:from-green-500/10 light:to-teal-500/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-green-400/30 dark:border-green-400/30 light:border-green-400/20 backdrop-blur-sm">
                            <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-green-400 dark:text-green-400 light:text-green-600 mb-1 sm:mb-2">{totalHours}+</div>
                            <div className="text-xs sm:text-sm text-gray-400 dark:text-gray-400 light:text-gray-600 flex items-center justify-center gap-1">
                                <Clock size={12} />
                                <span className="hidden sm:inline">Learning Hours</span>
                                <span className="sm:hidden">Hours</span>
                            </div>
                        </div>
                        <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 dark:from-blue-500/20 dark:to-cyan-500/20 light:from-blue-500/10 light:to-cyan-500/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-blue-400/30 dark:border-blue-400/30 light:border-blue-400/20 backdrop-blur-sm">
                            <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-400 dark:text-blue-400 light:text-blue-600 mb-1 sm:mb-2">100%</div>
                            <div className="text-xs sm:text-sm text-gray-400 dark:text-gray-400 light:text-gray-600 flex items-center justify-center gap-1">
                                <CheckCircle size={12} />
                                Verified
                            </div>
                        </div>
                        <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 dark:from-orange-500/20 dark:to-red-500/20 light:from-orange-500/10 light:to-red-500/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-orange-400/30 dark:border-orange-400/30 light:border-orange-400/20 backdrop-blur-sm">
                            <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-orange-400 dark:text-orange-400 light:text-orange-600 mb-1 sm:mb-2">5</div>
                            <div className="text-xs sm:text-sm text-gray-400 dark:text-gray-400 light:text-gray-600 flex items-center justify-center gap-1">
                                <Target size={12} />
                                Categories
                            </div>
                        </div>
                    </div>

                    {/* Mobile-responsive achievement badges */}
                    <div className="flex flex-wrap justify-center gap-2 sm:gap-3 lg:gap-4 px-2">
                        <div className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 lg:px-4 py-1.5 sm:py-2 bg-gray-800/50 dark:bg-gray-800/50 light:bg-gray-200/80 rounded-full border border-gray-600/50 dark:border-gray-600/50 light:border-gray-300/50 backdrop-blur-sm">
                            <TrendingUp size={12} className="text-green-400 dark:text-green-400 light:text-green-500" />
                            <span className="text-xs sm:text-sm text-gray-300 dark:text-gray-300 light:text-gray-700 whitespace-nowrap">
                                <span className="hidden sm:inline">Continuous Learner</span>
                                <span className="sm:hidden">Learner</span>
                            </span>
                        </div>
                        <div className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 lg:px-4 py-1.5 sm:py-2 bg-gray-800/50 dark:bg-gray-800/50 light:bg-gray-200/80 rounded-full border border-gray-600/50 dark:border-gray-600/50 light:border-gray-300/50 backdrop-blur-sm">
                            <BookOpen size={12} className="text-blue-400 dark:text-blue-400 light:text-blue-500" />
                            <span className="text-xs sm:text-sm text-gray-300 dark:text-gray-300 light:text-gray-700 whitespace-nowrap">
                                <span className="hidden sm:inline">Industry Certified</span>
                                <span className="sm:hidden">Certified</span>
                            </span>
                        </div>
                        <div className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 lg:px-4 py-1.5 sm:py-2 bg-gray-800/50 dark:bg-gray-800/50 light:bg-gray-200/80 rounded-full border border-gray-600/50 dark:border-gray-600/50 light:border-gray-300/50 backdrop-blur-sm">
                            <Users size={12} className="text-purple-400 dark:text-purple-400 light:text-purple-500" />
                            <span className="text-xs sm:text-sm text-gray-300 dark:text-gray-300 light:text-gray-700 whitespace-nowrap">
                                <span className="hidden sm:inline">Professional Network</span>
                                <span className="sm:hidden">Network</span>
                            </span>
                        </div>
                        <div className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 lg:px-4 py-1.5 sm:py-2 bg-gray-800/50 dark:bg-gray-800/50 light:bg-gray-200/80 rounded-full border border-gray-600/50 dark:border-gray-600/50 light:border-gray-300/50 backdrop-blur-sm">
                            <Activity size={12} className="text-orange-400 dark:text-orange-400 light:text-orange-500" />
                            <span className="text-xs sm:text-sm text-gray-300 dark:text-gray-300 light:text-gray-700 whitespace-nowrap">
                                <span className="hidden sm:inline">Active Developer</span>
                                <span className="sm:hidden">Active</span>
                            </span>
                        </div>
                    </div>
                </footer>
            </div>
        </section>
    );
};
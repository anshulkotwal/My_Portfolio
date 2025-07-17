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
        date: "2024-2025",
        credentialId: "8cafa6e3-758e-4b5c-a999-009b3e7db7b7",
        description: "Hands-on experience with Google Cloud Platform services, cloud architecture, and deployment strategies",
        skills: ["Google Cloud Platform", "Cloud Architecture", "Kubernetes", "Cloud Storage", "Cloud Functions", "BigQuery"],
        icon: Shield,
        gradient: "from-indigo-500 to-blue-500",
        color: "indigo",
        verified: true,
        level: "Professional",
        hours: "150 hours",
        link: "https://www.cloudskillsboost.google/public_profiles/8f46ea4c-4254-4d52-b575-eba452e010a1",
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
    }
];

const FloatingParticles = () => {
    const [particles, setParticles] = useState([]);

    useEffect(() => {
        const newParticles = Array.from({ length: 30 }, (_, i) => ({
            id: i,
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            size: Math.random() * 6 + 2,
            speedX: (Math.random() - 0.5) * 3,
            speedY: (Math.random() - 0.5) * 3,
            opacity: Math.random() * 0.7 + 0.2,
            color: ['#8B5CF6', '#06B6D4', '#10B981', '#F59E0B', '#EF4444', '#EC4899', '#8B5CF6'][Math.floor(Math.random() * 7)],
            shape: Math.random() > 0.5 ? 'circle' : 'square'
        }));
        setParticles(newParticles);

        const interval = setInterval(() => {
            setParticles(prev => prev.map(particle => ({
                ...particle,
                x: (particle.x + particle.speedX + window.innerWidth) % window.innerWidth,
                y: (particle.y + particle.speedY + window.innerHeight) % window.innerHeight
            })));
        }, 40);

        return () => clearInterval(interval);
    }, []);

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

    useEffect(() => {
        const card = cardRef.current;
        if (!card) return;

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

                const rotateX = Math.max(-20, Math.min(20, ((y - centerY) / centerY) * -10));
                const rotateY = Math.max(-20, Math.min(20, ((x - centerX) / centerX) * 10));

                setMousePosition({ x, y });

                card.style.transform = `
                    perspective(1200px) 
                    rotateX(${rotateX}deg) 
                    rotateY(${rotateY}deg) 
                    translateZ(30px)
                    scale3d(1.05, 1.05, 1.05)
                `;
                card.style.transition = 'none';

                // Generate magic orbs on hover
                if (Math.random() > 0.8) {
                    const newOrb = {
                        id: Date.now() + Math.random(),
                        x: x + (Math.random() - 0.5) * 100,
                        y: y + (Math.random() - 0.5) * 100,
                        color: ['#8B5CF6', '#06B6D4', '#10B981', '#F59E0B', '#EF4444'][Math.floor(Math.random() * 5)],
                        size: Math.random() * 15 + 5
                    };
                    setMagicOrbs(prev => [...prev.slice(-5), newOrb]);
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
                card.style.transform = 'perspective(1200px) rotateX(0deg) rotateY(0deg) translateZ(0px) scale3d(1, 1, 1)';
                card.style.transition = 'all 0.8s cubic-bezier(0.23, 1, 0.320, 1)';
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
            { threshold: 0.1, rootMargin: '50px' }
        );

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const getLevelColor = (level) => {
        const colors = {
            'Beginner': 'text-green-400 bg-green-500/20 border-green-400/40',
            'Intermediate': 'text-yellow-400 bg-yellow-500/20 border-yellow-400/40',
            'Professional': 'text-blue-400 bg-blue-500/20 border-blue-400/40',
            'Advanced': 'text-purple-400 bg-purple-500/20 border-purple-400/40',
            'Expert': 'text-red-400 bg-red-500/20 border-red-400/40'
        };
        return colors[level] || 'text-gray-400 bg-gray-500/20 border-gray-400/40';
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
            className="certificate-card relative bg-gray-900/70 backdrop-blur-xl rounded-3xl overflow-hidden border border-gray-700/50 transition-all duration-700 hover:border-gray-500/50 opacity-0 translate-y-10 scale-95 will-change-transform group"
            style={{
                transformOrigin: 'center center',
                transitionDelay: `${index * 0.1}s`,
                boxShadow: isHovered
                    ? `0 50px 100px -20px rgba(0,0,0,0.9), 0 0 80px rgba(255,255,255,0.15), inset 0 1px 0 rgba(255,255,255,0.15)`
                    : '0 25px 50px -10px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.05)'
            }}
        >
            {/* Magic orbs */}
            {magicOrbs.map(orb => (
                <MagicOrb key={orb.id} x={orb.x} y={orb.y} color={orb.color} size={orb.size} />
            ))}

            {/* Enhanced glow effect */}
            <div className={`absolute inset-0 bg-gradient-to-br ${certificate.gradient} opacity-0 group-hover:opacity-30 transition-opacity duration-700`} />

            {/* Animated border with sparkles */}
            <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${certificate.gradient} blur-sm opacity-40 animate-pulse`} />
                <div className="absolute inset-0 rounded-3xl border-2 border-gradient-to-r from-white/20 via-transparent to-white/20 animate-spin" style={{ animationDuration: '8s' }} />
            </div>

            {/* Mouse follower effect with enhanced visuals */}
            {isHovered && (
                <div
                    className="absolute pointer-events-none transition-opacity duration-300 z-10"
                    style={{
                        left: mousePosition.x - 75,
                        top: mousePosition.y - 75,
                        width: 150,
                        height: 150,
                        background: `radial-gradient(circle, ${certificate.gradient.includes('purple') ? 'rgba(168,85,247,0.6)' : 'rgba(6,182,212,0.6)'} 0%, transparent 70%)`,
                        borderRadius: '50%',
                        filter: 'blur(25px)',
                        animation: 'pulse 1s ease-in-out infinite'
                    }}
                />
            )}

            {/* Category badge with enhanced styling */}
            <div className="absolute top-4 right-4 z-20">
                <div className={`px-3 py-1.5 text-xs font-bold rounded-xl bg-gradient-to-r ${certificate.gradient} text-white shadow-2xl transform hover:scale-105 transition-all duration-300 border border-white/20`}>
                    <div className="flex items-center gap-1">
                        <Sparkles size={10} />
                        {certificate.category}
                    </div>
                </div>
            </div>

            {/* Header */}
            <div className="p-6 pb-4">
                <div className="flex items-start justify-between mb-5">
                    <div className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${certificate.gradient} p-3 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 shadow-2xl`}>
                        <Icon size={24} className="text-white" />
                        <div className="absolute inset-0 rounded-2xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-ping" />
                    </div>

                    <div className="flex flex-col items-end gap-2">
                        <div className="flex items-center gap-2">
                            {certificate.verified && (
                                <div className="flex items-center gap-1 px-2 py-1 text-xs font-bold rounded-lg text-green-400 bg-green-500/20 border border-green-400/40 backdrop-blur-sm">
                                    <CheckCircle size={10} />
                                    Verified
                                </div>
                            )}
                            <span className={`px-2 py-1 text-xs font-bold rounded-lg ${getLevelColor(certificate.level)} border backdrop-blur-sm flex items-center gap-1`}>
                                <LevelIcon size={10} />
                                {certificate.level}
                            </span>
                        </div>
                        <div className="flex items-center gap-1 text-xs text-gray-400">
                            <Calendar size={10} />
                            {certificate.date}
                        </div>
                    </div>
                </div>

                <h3 className={`text-lg font-black mb-2 bg-gradient-to-r ${certificate.gradient} bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300`}>
                    {certificate.title}
                </h3>

                <p className="text-gray-300 text-sm mb-2 font-semibold flex items-center gap-2">
                    <Verified size={12} className="text-blue-400" />
                    {certificate.issuer}
                </p>

                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {certificate.description}
                </p>

                {/* Skills with enhanced animations */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {certificate.skills.map((skill, skillIndex) => (
                        <span
                            key={skill}
                            className={`px-2.5 py-1 text-xs font-semibold rounded-full bg-gradient-to-r ${certificate.gradient} bg-opacity-20 text-white/90 border border-white/20 backdrop-blur-sm transform transition-all duration-300 hover:scale-110 hover:bg-opacity-30 hover:rotate-1 cursor-default`}
                            style={{
                                animationDelay: `${skillIndex * 0.05}s`,
                                animation: 'fadeInUp 0.5s ease-out forwards'
                            }}
                        >
                            {skill}
                        </span>
                    ))}
                </div>

                {/* Enhanced Stats */}
                <div className="flex items-center justify-between text-xs text-gray-400 mb-5 bg-gray-800/50 rounded-xl p-3 backdrop-blur-sm border border-gray-700/50">
                    <div className="flex items-center gap-2">
                        <Clock size={10} />
                        <span className="font-semibold">{certificate.hours}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Shield size={10} />
                        <span className="font-mono font-bold">{certificate.credentialId.slice(-8)}</span>
                    </div>
                </div>

                {/* Enhanced Action button */}
                <button
                    className={`w-full flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-gradient-to-r ${certificate.gradient} text-white text-sm font-bold transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-current/40 group/btn relative overflow-hidden`}
                    onClick={() => window.open(certificate.link, '_blank')}
                >
                    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700" />
                    <ExternalLink size={14} className="group-hover/btn:rotate-12 transition-transform duration-300" />
                    View Certificate
                    <ChevronRight size={14} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                </button>
            </div>

            {/* Enhanced bottom accent */}
            <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${certificate.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />

            {/* Animated corner decorations */}
            <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-white/20 rounded-tl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-white/20 rounded-br-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
    );
};

export const CertificatesSection = () => {
    const containerRef = useRef();
    const titleRef = useRef();
    const [visibleCount, setVisibleCount] = useState(6);
    const [filter, setFilter] = useState('all');

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
        setVisibleCount(prev => Math.min(prev + 3, filteredCertificates.length));
    };

    const totalHours = certificates.reduce((sum, cert) => {
        const hours = cert.hours.match(/\d+/);
        return sum + (hours ? parseInt(hours[0]) : 0);
    }, 0);

    return (
        <section id="certificates" className="relative py-32 px-4 overflow-hidden">
            <FloatingParticles />

            <div ref={containerRef} className="container mx-auto max-w-7xl relative z-10">
                {/* Enhanced Header with more creative elements */}
                <header
                    ref={titleRef}
                    className="text-center mb-20 opacity-0 translate-y-10 transition-all duration-1000"
                >
                    <div className="flex justify-center items-center gap-8 mb-8">
                        <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-purple-500 to-pink-500 p-4 animate-bounce shadow-2xl relative">
                            <Award size={32} className="text-white" />
                            <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full animate-ping" />
                        </div>
                        <div className="relative">
                            <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent animate-pulse">
                                Certifications
                            </h1>
                            <div className="absolute -top-4 -right-4 text-yellow-400 animate-spin">
                                <Sparkles size={24} />
                            </div>
                            <div className="absolute -bottom-2 -left-2 text-blue-400 animate-bounce">
                                <Sparkles size={20} /> {/* Replaced Magic with Sparkles */}
                            </div>
                        </div>
                        <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-cyan-500 to-blue-500 p-4 animate-bounce shadow-2xl relative" style={{ animationDelay: '0.5s' }}>
                            <Trophy size={32} className="text-white" />
                            <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full animate-ping" style={{ animationDelay: '0.5s' }} />
                        </div>
                    </div>
                    <p className="text-gray-300 text-lg max-w-4xl mx-auto leading-relaxed mb-6">
                        Professional certifications and achievements that validate my expertise across
                        cutting-edge technologies, frameworks, and development practices. Each certificate
                        represents dedication to continuous learning and industry excellence.
                    </p>

                    {/* Enhanced Category filter */}
                    <div className="flex flex-wrap justify-center gap-3 mb-10">
                        {categories.map((category, index) => (
                            <button
                                key={category}
                                onClick={() => setFilter(category)}
                                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-500 transform hover:scale-105 ${filter === category
                                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/30'
                                        : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-600/50 hover:border-gray-500/50'
                                    }`}
                                style={{
                                    animationDelay: `${index * 0.1}s`,
                                    animation: 'fadeInUp 0.5s ease-out forwards'
                                }}
                            >
                                {category === 'all' ? (
                                    <span className="flex items-center gap-1">
                                        <Infinity size={14} />
                                        All Categories
                                    </span>
                                ) : (
                                    category
                                )}
                            </button>
                        ))}
                    </div>
                </header>

                {/* Certificates grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {filteredCertificates.slice(0, visibleCount).map((certificate, index) => (
                        <CertificateCard key={certificate.id} certificate={certificate} index={index} />
                    ))}
                </div>

                {/* Enhanced Load more button */}
                {visibleCount < filteredCertificates.length && (
                    <div className="text-center mb-16">
                        <button
                            onClick={handleLoadMore}
                            className="inline-flex items-center gap-4 px-10 py-5 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-black rounded-3xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/40 group focus:outline-none focus:ring-2 focus:ring-purple-500/50 relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                            <Sparkles size={24} className="group-hover:rotate-12 transition-transform duration-300" />
                            Load More Certificates
                            <Rocket size={24} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                        </button>
                    </div>
                )}

                {/* Load more button */}
                {visibleCount < filteredCertificates.length && (
                    <div className="text-center mb-16">
                        <button
                            onClick={handleLoadMore}
                            className="inline-flex items-center gap-4 px-10 py-5 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-3xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30 group focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                        >
                            <Sparkles size={24} className="group-hover:rotate-12 transition-transform duration-300" />
                            Load More Certificates
                            <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform duration-300" />
                        </button>
                    </div>
                )}

                {/* Enhanced Stats footer */}
                <footer className="text-center space-y-12">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl p-6 border border-purple-400/30 backdrop-blur-sm">
                            <div className="text-3xl font-bold text-purple-400 mb-2">{certificates.length}</div>
                            <div className="text-sm text-gray-400 flex items-center justify-center gap-1">
                                <Award size={16} />
                                Certifications
                            </div>
                        </div>
                        <div className="bg-gradient-to-br from-green-500/20 to-teal-500/20 rounded-2xl p-6 border border-green-400/30 backdrop-blur-sm">
                            <div className="text-3xl font-bold text-green-400 mb-2">{totalHours}+</div>
                            <div className="text-sm text-gray-400 flex items-center justify-center gap-1">
                                <Clock size={16} />
                                Learning Hours
                            </div>
                        </div>
                        <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl p-6 border border-blue-400/30 backdrop-blur-sm">
                            <div className="text-3xl font-bold text-blue-400 mb-2">100%</div>
                            <div className="text-sm text-gray-400 flex items-center justify-center gap-1">
                                <CheckCircle size={16} />
                                Verified
                            </div>
                        </div>
                        <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-2xl p-6 border border-orange-400/30 backdrop-blur-sm">
                            <div className="text-3xl font-bold text-orange-400 mb-2">5</div>
                            <div className="text-sm text-gray-400 flex items-center justify-center gap-1">
                                <Target size={16} />
                                Categories
                            </div>
                        </div>
                    </div>

                    {/* Achievement badges */}
                    <div className="flex flex-wrap justify-center gap-4">
                        <div className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 rounded-full border border-gray-600/50 backdrop-blur-sm">
                            <TrendingUp size={16} className="text-green-400" />
                            <span className="text-sm text-gray-300">Continuous Learner</span>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 rounded-full border border-gray-600/50 backdrop-blur-sm">
                            <BookOpen size={16} className="text-blue-400" />
                            <span className="text-sm text-gray-300">Industry Certified</span>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 rounded-full border border-gray-600/50 backdrop-blur-sm">
                            <Users size={16} className="text-purple-400" />
                            <span className="text-sm text-gray-300">Professional Network</span>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 rounded-full border border-gray-600/50 backdrop-blur-sm">
                            <Activity size={16} className="text-orange-400" />
                            <span className="text-sm text-gray-300">Active Developer</span>
                        </div>
                    </div>
                </footer>
            </div>
        </section>
    );
};
/* eslint-disable react/prop-types */
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
    Activity
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
        const newParticles = Array.from({ length: 20 }, (_, i) => ({
            id: i,
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            size: Math.random() * 4 + 2,
            speedX: (Math.random() - 0.5) * 2,
            speedY: (Math.random() - 0.5) * 2,
            opacity: Math.random() * 0.5 + 0.1,
            color: ['#8B5CF6', '#06B6D4', '#10B981', '#F59E0B', '#EF4444'][Math.floor(Math.random() * 5)]
        }));
        setParticles(newParticles);

        const interval = setInterval(() => {
            setParticles(prev => prev.map(particle => ({
                ...particle,
                x: (particle.x + particle.speedX + window.innerWidth) % window.innerWidth,
                y: (particle.y + particle.speedY + window.innerHeight) % window.innerHeight
            })));
        }, 50);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-0">
            {particles.map(particle => (
                <div
                    key={particle.id}
                    className="absolute rounded-full animate-pulse"
                    style={{
                        left: particle.x,
                        top: particle.y,
                        width: particle.size,
                        height: particle.size,
                        backgroundColor: particle.color,
                        opacity: particle.opacity,
                        filter: 'blur(1px)'
                    }}
                />
            ))}
        </div>
    );
};

const CertificateCard = ({ certificate, index }) => {
    const cardRef = useRef();
    const [isHovered, setIsHovered] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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

    return (
        <div
            ref={cardRef}
            className="certificate-card relative bg-gray-900/70 backdrop-blur-xl rounded-3xl overflow-hidden border border-gray-700/50 transition-all duration-700 hover:border-gray-500/50 opacity-0 translate-y-10 scale-95 will-change-transform group"
            style={{
                transformOrigin: 'center center',
                transitionDelay: `${index * 0.1}s`,
                boxShadow: isHovered
                    ? `0 40px 80px -20px rgba(0,0,0,0.9), 0 0 60px rgba(255,255,255,0.1), inset 0 1px 0 rgba(255,255,255,0.1)`
                    : '0 20px 40px -10px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.05)'
            }}
        >
            {/* Enhanced glow effect */}
            <div className={`absolute inset-0 bg-gradient-to-br ${certificate.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-700`} />

            {/* Animated border */}
            <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${certificate.gradient} blur-sm opacity-30 animate-pulse`} />
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
                        background: `radial-gradient(circle, ${certificate.gradient.includes('purple') ? 'rgba(168,85,247,0.4)' : 'rgba(6,182,212,0.4)'} 0%, transparent 70%)`,
                        borderRadius: '50%',
                        filter: 'blur(20px)'
                    }}
                />
            )}

            {/* Category badge */}
            <div className="absolute top-4 right-4 z-20">
                <div className={`px-2 py-1 text-xs font-semibold rounded-lg bg-gradient-to-r ${certificate.gradient} text-white shadow-lg`}>
                    {certificate.category}
                </div>
            </div>

            {/* Header */}
            <div className="p-7 pb-4">
                <div className="flex items-start justify-between mb-6">
                    <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${certificate.gradient} p-3.5 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-2xl`}>
                        <Icon size={28} className="text-white" />
                        <div className="absolute inset-0 rounded-2xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    <div className="flex flex-col items-end gap-2">
                        <div className="flex items-center gap-2">
                            {certificate.verified && (
                                <div className="flex items-center gap-1 px-2 py-1 text-xs font-semibold rounded-lg text-green-400 bg-green-500/20 border border-green-400/40 backdrop-blur-sm">
                                    <CheckCircle size={12} />
                                    Verified
                                </div>
                            )}
                            <span className={`px-2 py-1 text-xs font-semibold rounded-lg ${getLevelColor(certificate.level)} border backdrop-blur-sm`}>
                                {certificate.level}
                            </span>
                        </div>
                        <div className="flex items-center gap-1 text-xs text-gray-400">
                            <Calendar size={12} />
                            {certificate.date}
                        </div>
                    </div>
                </div>

                <h3 className={`text-xl font-bold mb-3 bg-gradient-to-r ${certificate.gradient} bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300`}>
                    {certificate.title}
                </h3>

                <p className="text-gray-300 text-sm mb-3 font-medium flex items-center gap-2">
                    <Verified size={14} className="text-blue-400" />
                    {certificate.issuer}
                </p>

                <p className="text-gray-400 text-sm mb-5 leading-relaxed">
                    {certificate.description}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 mb-5">
                    {certificate.skills.map((skill, skillIndex) => (
                        <span
                            key={skill}
                            className={`px-3 py-1.5 text-xs font-medium rounded-full bg-gradient-to-r ${certificate.gradient} bg-opacity-20 text-white/90 border border-white/20 backdrop-blur-sm transform transition-all duration-300 hover:scale-105 hover:bg-opacity-30`}
                            style={{ animationDelay: `${skillIndex * 0.05}s` }}
                        >
                            {skill}
                        </span>
                    ))}
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between text-xs text-gray-400 mb-6 bg-gray-800/50 rounded-xl p-3 backdrop-blur-sm">
                    <div className="flex items-center gap-2">
                        <Clock size={12} />
                        <span>{certificate.hours}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Shield size={12} />
                        <span className="font-mono">{certificate.credentialId.slice(-8)}</span>
                    </div>
                </div>

                {/* Action button */}
                <button 
                    className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r ${certificate.gradient} text-white text-sm font-semibold transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-current/30 group/btn relative overflow-hidden`}
                    onClick={() => window.open(certificate.link, '_blank')}
                >
                    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                    <ExternalLink size={16} className="group-hover/btn:rotate-12 transition-transform duration-300" />
                    View Certificate
                    <ChevronRight size={16} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                </button>
            </div>

            {/* Bottom accent */}
            <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${certificate.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />
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
                {/* Enhanced Header */}
                <header
                    ref={titleRef}
                    className="text-center mb-24 opacity-0 translate-y-10 transition-all duration-1000"
                >
                    <div className="flex justify-center items-center gap-6 mb-10">
                        <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-purple-500 to-pink-500 p-4 animate-bounce shadow-2xl">
                            <Award size={32} className="text-white" />
                        </div>
                        <h1 className="text-6xl md:text-8xl font-black bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent animate-pulse">
                            Certifications
                        </h1>
                        <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-cyan-500 to-blue-500 p-4 animate-bounce shadow-2xl" style={{animationDelay: '0.5s'}}>
                            <Trophy size={32} className="text-white" />
                        </div>
                    </div>
                    <p className="text-gray-300 text-xl max-w-5xl mx-auto leading-relaxed mb-8">
                        Professional certifications and achievements that validate my expertise across
                        cutting-edge technologies, frameworks, and development practices. Each certificate
                        represents dedication to continuous learning and industry excellence.
                    </p>
                    
                    {/* Category filter */}
                    <div className="flex flex-wrap justify-center gap-3 mb-12">
                        {categories.map(category => (
                            <button
                                key={category}
                                onClick={() => setFilter(category)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                                    filter === category
                                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                                        : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-600/50'
                                }`}
                            >
                                {category === 'all' ? 'All Categories' : category}
                            </button>
                        ))}
                    </div>
                </header>

                {/* Certificates grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    {filteredCertificates.slice(0, visibleCount).map((certificate, index) => (
                        <CertificateCard key={certificate.id} certificate={certificate} index={index} />
                    ))}
                </div>

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
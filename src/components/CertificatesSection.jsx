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
    ArrowRight
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
const certificates = [
  {
    id: 1,
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    date: "2024",
    credentialId: "anshulkotwal/responsive-web-design",
    description: "Comprehensive training in responsive web design principles, CSS Grid, Flexbox, and modern layout techniques",
    skills: ["HTML5", "CSS3", "Responsive Design", "CSS Grid", "Flexbox", "Mobile-First"],
    icon: Code,
    gradient: "from-blue-500 to-cyan-500",
    color: "blue",
    verified: true,
    level: "Professional",
    hours: "300 hours",
    link: "https://www.freecodecamp.org/certification/anshulkotwal/responsive-web-design"
  },
  {
    id: 2,
    title: "JavaScript Algorithms and Data Structures",
    issuer: "freeCodeCamp",
    date: "2024",
    credentialId: "anshulkotwal/javascript-algorithms-and-data-structures",
    description: "Deep dive into JavaScript fundamentals, ES6+, algorithms, data structures, and functional programming",
    skills: ["JavaScript", "ES6+", "Algorithms", "Data Structures", "Functional Programming", "Object-Oriented Programming"],
    icon: Brain,
    gradient: "from-purple-500 to-pink-500",
    color: "purple",
    verified: true,
    level: "Advanced",
    hours: "300 hours",
    link: "https://www.freecodecamp.org/certification/anshulkotwal/javascript-algorithms-and-data-structures"
  },
  {
    id: 3,
    title: "Google Cloud Arcade Program",
    issuer: "Google Cloud Skills Boost",
    date: "2024",
    credentialId: "8cafa6e3-758e-4b5c-a999-009b3e7db7b7",
    description: "Hands-on experience with Google Cloud Platform services, cloud architecture, and deployment strategies",
    skills: ["Google Cloud Platform", "Cloud Architecture", "Kubernetes", "Cloud Storage", "Cloud Functions", "BigQuery"],
    icon: Shield,
    gradient: "from-green-500 to-teal-500",
    color: "green",
    verified: true,
    level: "Professional",
    hours: "150 hours",
    link: "https://www.cloudskillsboost.google/public_profiles/8cafa6e3-758e-4b5c-a999-009b3e7db7b7"
  },
  {
    id: 4,
    title: "Web Development Bootcamp",
    issuer: "Udemy",
    date: "2024",
    credentialId: "UC-12345678",
    description: "Complete full-stack web development bootcamp covering frontend and backend technologies",
    skills: ["HTML", "CSS", "JavaScript", "Node.js", "Express", "MongoDB", "React", "Full-Stack Development"],
    icon: Globe,
    gradient: "from-orange-500 to-red-500",
    color: "orange",
    verified: true,
    level: "Professional",
    hours: "400 hours",
    link: "https://www.udemy.com/certificate/UC-12345678/"
  }
];
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

                const rotateX = Math.max(-20, Math.min(20, ((y - centerY) / centerY) * -10));
                const rotateY = Math.max(-20, Math.min(20, ((x - centerX) / centerX) * 10));

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
                card.style.transition = 'all 0.5s cubic-bezier(0.23, 1, 0.320, 1)';
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
            { threshold: 0.1, rootMargin: '100px' }
        );

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const getLevelColor = (level) => {
        const colors = {
            'Beginner': 'text-green-400 bg-green-500/20 border-green-400/40',
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
            className="certificate-card relative bg-gray-900/60 backdrop-blur-lg rounded-2xl overflow-hidden border border-gray-700/50 transition-all duration-700 hover:border-gray-500/50 opacity-0 translate-y-10 scale-95 will-change-transform group"
            style={{
                transformOrigin: 'center center',
                transitionDelay: `${index * 0.1}s`,
                boxShadow: isHovered
                    ? `0 30px 60px -15px rgba(0,0,0,0.8), 0 0 40px rgba(255,255,255,0.2), inset 0 1px 0 rgba(255,255,255,0.1)`
                    : '0 15px 30px -10px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.05)'
            }}
        >
            {/* Enhanced glow effect */}
            <div className={`absolute inset-0 bg-gradient-to-br ${certificate.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-700`} />

            {/* Floating orb effect */}
            <div className="absolute -inset-4 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${certificate.gradient} blur-xl opacity-20 animate-pulse`} />
            </div>

            {/* Mouse follower effect */}
            {isHovered && (
                <div
                    className="absolute pointer-events-none transition-opacity duration-300 z-10"
                    style={{
                        left: mousePosition.x - 40,
                        top: mousePosition.y - 40,
                        width: 80,
                        height: 80,
                        background: `radial-gradient(circle, ${certificate.gradient.includes('purple') ? 'rgba(168,85,247,0.3)' : 'rgba(6,182,212,0.3)'} 0%, transparent 70%)`,
                        borderRadius: '50%',
                        filter: 'blur(15px)'
                    }}
                />
            )}

            {/* Header */}
            <div className="p-6 pb-4">
                <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${certificate.gradient} p-2.5 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-xl`}>
                        <Icon size={22} className="text-white" />
                    </div>

                    <div className="flex flex-col items-end gap-2">
                        <div className="flex items-center gap-2">
                            {certificate.verified && (
                                <div className="flex items-center gap-1 px-2 py-1 text-xs font-semibold rounded-lg text-green-400 bg-green-500/20 border border-green-400/40">
                                    <CheckCircle size={12} />
                                    Verified
                                </div>
                            )}
                            <span className={`px-2 py-1 text-xs font-semibold rounded-lg ${getLevelColor(certificate.level)} border`}>
                                {certificate.level}
                            </span>
                        </div>
                        <div className="flex items-center gap-1 text-xs text-gray-400">
                            <Calendar size={12} />
                            {certificate.date}
                        </div>
                    </div>
                </div>

                <h3 className={`text-lg font-bold mb-2 bg-gradient-to-r ${certificate.gradient} bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300`}>
                    {certificate.title}
                </h3>

                <p className="text-gray-300 text-sm mb-3 font-medium">
                    {certificate.issuer}
                </p>

                <p className="text-gray-400 text-xs mb-4 leading-relaxed">
                    {certificate.description}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                    {certificate.skills.map((skill, skillIndex) => (
                        <span
                            key={skill}
                            className={`px-2 py-1 text-xs font-medium rounded-md bg-gradient-to-r ${certificate.gradient} bg-opacity-20 text-white/80 border border-white/10 transform transition-all duration-300 hover:scale-105`}
                            style={{ animationDelay: `${skillIndex * 0.05}s` }}
                        >
                            {skill}
                        </span>
                    ))}
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                    <div className="flex items-center gap-1">
                        <Trophy size={12} />
                        <span>{certificate.hours}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Shield size={12} />
                        <span>ID: {certificate.credentialId}</span>
                    </div>
                </div>

                {/* Action button */}
                <button className={`w-full flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r ${certificate.gradient} text-white text-sm font-medium transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-current/25 group/btn`}>
                    <ExternalLink size={14} className="group-hover/btn:rotate-12 transition-transform duration-300" />
                    View Certificate
                    <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
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

    const handleLoadMore = () => {
        setVisibleCount(prev => Math.min(prev + 3, certificates.length));
    };

    return (
        <section id="certificates" className="relative py-32 px-4 bg-transparent overflow-hidden">
            {/* Grid background */}
            <div
                className="absolute inset-0 opacity-3"
                style={{
                    backgroundImage:
                        'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }}
            />

            {/* Radial gradient overlay */}
            <div
                className="absolute inset-0"
                style={{
                    background: 'radial-gradient(circle at 30% 40%, rgba(139,92,246,0.08) 0%, transparent 50%), radial-gradient(circle at 70% 60%, rgba(6,182,212,0.08) 0%, transparent 50%)'
                }}
            />

            <div ref={containerRef} className="container mx-auto max-w-7xl relative z-10">
                {/* Header */}
                <header
                    ref={titleRef}
                    className="text-center mb-20 opacity-0 translate-y-10 transition-all duration-1000"
                >
                    <div className="flex justify-center items-center gap-4 mb-8">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 p-3 animate-pulse shadow-2xl">
                            <Award size={28} className="text-white" />
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-500 bg-clip-text text-transparent">
                            Certifications
                        </h1>
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 p-3 animate-pulse shadow-2xl">
                            <Trophy size={28} className="text-white" />
                        </div>
                    </div>
                    <p className="text-gray-400 text-lg max-w-4xl mx-auto leading-relaxed">
                        Professional certifications and achievements that validate my expertise across
                        cutting-edge technologies, frameworks, and development practices. Each certificate
                        represents dedication to continuous learning and industry excellence.
                    </p>
                </header>

                {/* Certificates grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    {certificates.slice(0, visibleCount).map((certificate, index) => (
                        <CertificateCard key={certificate.id} certificate={certificate} index={index} />
                    ))}
                </div>

                {/* Load more button */}
                {visibleCount < certificates.length && (
                    <div className="text-center mb-12">
                        <button
                            onClick={handleLoadMore}
                            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 group focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                        >
                            <Sparkles size={20} className="group-hover:rotate-12 transition-transform duration-300" />
                            Load More Certificates
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                        </button>
                    </div>
                )}

                {/* Stats footer */}
                <footer className="text-center space-y-8">
                    <div className="flex justify-center items-center gap-8 text-gray-400">
                        <div className="flex items-center gap-2">
                            <Award size={20} />
                            <span>{certificates.length} Certifications</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Shield size={20} />
                            <span>All Verified</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Star size={20} />
                            <span>Industry Standard</span>
                        </div>
                    </div>

                    <div className="flex justify-center gap-4">
                        <div className="px-6 py-3 bg-gradient-to-r from-green-500/20 to-teal-500/20 rounded-xl border border-green-400/30">
                            <div className="text-2xl font-bold text-green-400">800+</div>
                            <div className="text-sm text-gray-400">Learning Hours</div>
                        </div>
                        <div className="px-6 py-3 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-xl border border-blue-400/30">
                            <div className="text-2xl font-bold text-blue-400">6</div>
                            <div className="text-sm text-gray-400">Expert Level</div>
                        </div>
                        <div className="px-6 py-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl border border-purple-400/30">
                            <div className="text-2xl font-bold text-purple-400">100%</div>
                            <div className="text-sm text-gray-400">Completion Rate</div>
                        </div>
                    </div>
                </footer>
            </div>
        </section>
    );
};
import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Github,
  Twitter,
  User,
  MessageCircle,
  Sparkles,
  Zap,
  Heart,
  Star
} from "lucide-react";
import React from "react";
import { useState, useEffect, useRef } from "react";

export const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState([]);
  const [isHovered, setIsHovered] = useState(false);
  
  const sectionRef = useRef();
  const titleRef = useRef();
  const leftPanelRef = useRef();
  const rightPanelRef = useRef();
  const canvasRef = useRef();

  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Particle system
  useEffect(() => {
    const createParticle = () => ({
      id: Math.random(),
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 4 + 1,
      speedX: (Math.random() - 0.5) * 2,
      speedY: (Math.random() - 0.5) * 2,
      opacity: Math.random() * 0.8 + 0.2,
      color: ['#00bcd4', '#9c27b0', '#e91e63', '#ff9800'][Math.floor(Math.random() * 4)]
    });

    const initialParticles = Array.from({ length: 50 }, createParticle);
    setParticles(initialParticles);

    const interval = setInterval(() => {
      setParticles(prev => prev.map(particle => ({
        ...particle,
        x: particle.x + particle.speedX,
        y: particle.y + particle.speedY,
        x: particle.x > window.innerWidth ? 0 : particle.x < 0 ? window.innerWidth : particle.x,
        y: particle.y > window.innerHeight ? 0 : particle.y < 0 ? window.innerHeight : particle.y
      })));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateSection();
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const animateSection = () => {
    if (titleRef.current) {
      titleRef.current.style.opacity = '1';
      titleRef.current.style.transform = 'translateY(0) scale(1)';
    }

    if (leftPanelRef.current) {
      setTimeout(() => {
        leftPanelRef.current.style.opacity = '1';
        leftPanelRef.current.style.transform = 'translateX(0) rotateY(0)';
      }, 300);
    }

    if (rightPanelRef.current) {
      setTimeout(() => {
        rightPanelRef.current.style.opacity = '1';
        rightPanelRef.current.style.transform = 'translateX(0) rotateY(0)';
      }, 600);
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all fields');
      return;
    }

    setIsSubmitting(true);

    try {
      // Direct email using mailto
      const subject = `Portfolio Contact: ${formData.name}`;
      const body = `Hi Anshul,

I'm reaching out from your portfolio contact form.

Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}

---
Best regards,
${formData.name}`;

      const mailtoLink = `mailto:anshulkotwal12@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      // Open email client
      window.open(mailtoLink, '_blank');
      
      // Show success message
      setShowSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setShowSuccess(false), 5000);
      
    } catch (error) {
      console.error('Error:', error);
      alert('Please try again or contact me directly at anshulkotwal12@gmail.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      ref={sectionRef}
      id="contact" 
      className="relative py-12 md:py-20 px-4 md:px-6 min-h-screen overflow-hidden"
      style={{ 
        perspective: '1000px',
        background: 'transparent'
      }}
    >
      {/* Animated Background Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute rounded-full blur-sm animate-pulse"
            style={{
              left: `${particle.x}px`,
              top: `${particle.y}px`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              backgroundColor: particle.color,
              opacity: particle.opacity * 0.3,
              transform: `translate(-50%, -50%)`,
            }}
          />
        ))}
      </div>

      {/* Dynamic cursor light effect */}
      <div 
        className="fixed pointer-events-none z-0 transition-opacity duration-300"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(0,188,212,0.1) 0%, rgba(156,39,176,0.05) 50%, transparent 70%)',
          transform: 'translate(-50%, -50%)',
          opacity: isHovered ? 0.8 : 0.3
        }}
      />

      <div className="relative z-10 container mx-auto max-w-7xl">
        {/* Enhanced Title Section */}
        <div
          ref={titleRef}
          className="text-center mb-12 md:mb-16 opacity-0 transition-all duration-1000 ease-out"
          style={{ transform: 'translateY(50px) scale(0.9)' }}
        >
          <div className="relative inline-block">
            <h2 className="text-3xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
              Let's Create Magic
            </h2>
            <div className="absolute -top-2 -right-2 animate-bounce">
              <Sparkles className="text-yellow-400" size={24} />
            </div>
            <div className="absolute -bottom-2 -left-2 animate-bounce delay-700">
              <Zap className="text-cyan-400" size={20} />
            </div>
          </div>
          <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
            Ready to turn your vision into reality? Let's collaborate and build something extraordinary together.
          </p>
          <div className="flex justify-center gap-2 mt-4 animate-pulse">
            <Star className="text-yellow-400" size={16} />
            <Star className="text-yellow-400" size={16} />
            <Star className="text-yellow-400" size={16} />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Enhanced Contact Info Panel */}
          <div
            ref={leftPanelRef}
            className="space-y-6 md:space-y-8 opacity-0 transition-all duration-1000 ease-out"
            style={{ 
              transform: 'translateX(-50px) rotateY(10deg)',
              transformStyle: 'preserve-3d'
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Contact Information */}
            <div className="space-y-4 md:space-y-6">
              <ContactInfo
                icon={<Mail className="text-cyan-400" size={20} />}
                label="Email"
                value="anshulkotwal12@gmail.com"
                link="mailto:anshulkotwal12@gmail.com"
                delay="0ms"
              />
              <ContactInfo
                icon={<Phone className="text-purple-400" size={20} />}
                label="Phone"
                value="+91 9651411146"
                link="tel:+919651411146"
                delay="200ms"
              />
              <ContactInfo
                icon={<MapPin className="text-pink-400" size={20} />}
                label="Location"
                value="Ghaziabad, UP, India"
                delay="400ms"
              />
            </div>

            {/* Enhanced Social Media */}
            <div className="pt-6">
              <h4 className="font-semibold text-white mb-6 text-lg flex items-center gap-2">
                <Heart className="text-red-400 animate-pulse" size={20} />
                Connect With Me
              </h4>
              <div className="flex flex-wrap gap-4">
                <SocialIcon 
                  href="https://linkedin.com/in/anshul-kotwal-b0558324a" 
                  icon={<Linkedin size={18} />} 
                  color="from-blue-500 to-blue-600"
                  label="LinkedIn"
                />
                <SocialIcon 
                  href="https://github.com/anshulkotwal" 
                  icon={<Github size={18} />} 
                  color="from-gray-600 to-gray-700"
                  label="GitHub"
                />
                <SocialIcon 
                  href="https://x.com/Anshulkotwal12" 
                  icon={<Twitter size={18} />} 
                  color="from-cyan-400 to-cyan-500"
                  label="Twitter"
                />
                <SocialIcon 
                  href="https://www.instagram.com/anshul_kotwal/" 
                  icon={<Instagram size={18} />} 
                  color="from-pink-500 to-purple-600"
                  label="Instagram"
                />
              </div>
            </div>

            {/* Fun Call-to-Action */}
            <div className="mt-8 p-6 bg-gradient-to-r from-cyan-500/10 to-purple-600/10 rounded-2xl border border-cyan-500/20 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-2">
                <Sparkles className="text-yellow-400 animate-spin" size={20} />
                <h4 className="text-white font-semibold">Quick Response Promise</h4>
              </div>
              <p className="text-gray-300 text-sm">I'll get back to you within 24 hours! ⚡</p>
            </div>
          </div>

          {/* Enhanced Contact Form Panel */}
          <div
            ref={rightPanelRef}
            className="opacity-0 transition-all duration-1000 ease-out"
            style={{ 
              transform: 'translateX(50px) rotateY(-10deg)',
              transformStyle: 'preserve-3d'
            }}
          >
            <div className="bg-white/5 backdrop-blur-xl p-6 md:p-8 rounded-3xl shadow-2xl border border-white/10 relative group hover:border-white/20 transition-all duration-500 hover:shadow-xl hover:shadow-purple-500/10">
              {/* Enhanced 3D hover effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-600/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full animate-bounce opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-pink-400 to-yellow-500 rounded-full animate-bounce delay-1000 opacity-20"></div>
              
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold mb-2 text-white flex items-center gap-3">
                  <Send className="text-cyan-400 animate-pulse" size={24} />
                  Send Message
                </h3>
                <p className="text-gray-400 mb-6">Let's build something amazing together!</p>

                {/* Enhanced Success Message */}
                {showSuccess && (
                  <div className="mb-6 p-4 bg-green-500/10 border border-green-500/20 rounded-xl backdrop-blur-sm animate-pulse">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-green-400 rounded-full animate-ping"></div>
                      <p className="text-green-400 text-sm font-medium">✅ Message sent! Check your email client. I'll respond soon!</p>
                    </div>
                  </div>
                )}

                <div className="space-y-6">
                  <InputField 
                    label="Name" 
                    name="name" 
                    placeholder="Your awesome name" 
                    value={formData.name}
                    onChange={handleInputChange}
                    icon={<User size={16} />}
                  />
                  <InputField 
                    label="Email" 
                    name="email" 
                    type="email" 
                    placeholder="your@email.com" 
                    value={formData.email}
                    onChange={handleInputChange}
                    icon={<Mail size={16} />}
                  />
                  <InputField 
                    label="Message" 
                    name="message" 
                    isTextarea 
                    placeholder="Tell me about your amazing project idea..." 
                    value={formData.message}
                    onChange={handleInputChange}
                    icon={<MessageCircle size={16} />}
                  />

                  <button
                    type="button"
                    disabled={isSubmitting}
                    onClick={handleSubmit}
                    className="w-full px-6 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-500/25 text-white disabled:opacity-50 disabled:cursor-not-allowed active:scale-95 relative overflow-hidden group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        Sending Magic...
                      </>
                    ) : (
                      <>
                        <Sparkles size={18} className="animate-pulse" />
                        Send Message
                        <Send size={18} />
                      </>
                    )}
                  </button>

                  <p className="text-xs text-gray-500 text-center mt-2">
                    This will open your email client to send the message directly
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactInfo = ({ icon, label, value, link, delay }) => (
  <div 
    className="flex items-start gap-4 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg transform-gpu group relative overflow-hidden"
    style={{ animationDelay: delay }}
  >
    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    <div className="p-3 bg-gradient-to-br from-cyan-400/20 to-purple-600/20 rounded-xl group-hover:scale-110 transition-transform duration-300">
      {icon}
    </div>
    <div className="relative z-10">
      <h4 className="font-semibold text-white mb-1">{label}</h4>
      {link ? (
        <a
          href={link}
          className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 flex items-center gap-1"
        >
          {value}
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
        </a>
      ) : (
        <p className="text-gray-300">{value}</p>
      )}
    </div>
  </div>
);

const SocialIcon = ({ href, icon, color, label }) => (
  <div className="group relative">
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center text-white transition-all duration-300 hover:scale-110 hover:rotate-12 hover:shadow-lg transform-gpu relative overflow-hidden`}
    >
      <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="relative z-10">
        {icon}
      </div>
    </a>
    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
      {label}
    </div>
  </div>
);

const InputField = ({ label, name, placeholder, type = "text", isTextarea = false, value, onChange, icon }) => (
  <div className="group relative">
    <label 
      htmlFor={name} 
      className="block text-sm font-medium mb-2 text-white flex items-center gap-2 group-hover:text-cyan-400 transition-colors duration-300"
    >
      <span className="group-hover:animate-pulse">{icon}</span>
      {label}
    </label>
    {isTextarea ? (
      <textarea
        id={name}
        name={name}
        required
        value={value}
        onChange={onChange}
        rows={4}
        className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm text-white placeholder-gray-500 focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 focus:outline-none resize-none transition-all duration-300 group-hover:border-white/20 hover:bg-white/10"
        placeholder={placeholder}
      />
    ) : (
      <input
        type={type}
        id={name}
        name={name}
        required
        value={value}
        onChange={onChange}
        className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm text-white placeholder-gray-500 focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 focus:outline-none transition-all duration-300 group-hover:border-white/20 hover:bg-white/10"
        placeholder={placeholder}
      />
    )}
  </div>
);

export default ContactSection;
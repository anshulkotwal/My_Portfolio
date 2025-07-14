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
  MessageCircle
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
  
  const sectionRef = useRef();
  const titleRef = useRef();
  const leftPanelRef = useRef();
  const rightPanelRef = useRef();

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
      titleRef.current.style.transform = 'translateY(0)';
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all fields');
      return;
    }

    setIsSubmitting(true);

    try {
      const subject = `Portfolio Contact: ${formData.name}`;
      const body = `Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}

---
Sent from your portfolio contact form`;

      const mailtoLink = `mailto:anshulkotwal12@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      window.location.href = mailtoLink;
      
      setShowSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setShowSuccess(false), 5000);
      
    } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      ref={sectionRef}
      id="contact" 
      className="relative py-20 px-6 min-h-screen"
      style={{ perspective: '1000px' }}
    >
      <div className="relative z-10 container mx-auto max-w-6xl">
        {/* Title Section */}
        <div
          ref={titleRef}
          className="text-center mb-16 opacity-0 translate-y-10 transition-all duration-1000 ease-out"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Ready to collaborate? I'd love to discuss your ideas and bring them to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info Panel */}
          <div
            ref={leftPanelRef}
            className="space-y-8 opacity-0 transition-all duration-1000 ease-out"
            style={{ 
              transform: 'translateX(-50px) rotateY(10deg)',
              transformStyle: 'preserve-3d'
            }}
          >
            {/* Contact Information */}
            <div className="space-y-6">
              <ContactInfo
                icon={<Mail className="text-cyan-400" size={20} />}
                label="Email"
                value="anshulkotwal12@gmail.com"
                link="mailto:anshulkotwal12@gmail.com"
              />
              <ContactInfo
                icon={<Phone className="text-purple-400" size={20} />}
                label="Phone"
                value="+91 9651411146"
                link="tel:+919651411146"
              />
              <ContactInfo
                icon={<MapPin className="text-pink-400" size={20} />}
                label="Location"
                value="Ghaziabad, UP, India"
              />
            </div>

            {/* Social Media */}
            <div className="pt-6">
              <h4 className="font-semibold text-white mb-4 text-lg">Follow Me</h4>
              <div className="flex gap-4">
                <SocialIcon 
                  href="https://linkedin.com/in/anshul-kotwal-b0558324a" 
                  icon={<Linkedin size={18} />} 
                  color="from-blue-500 to-blue-600"
                />
                <SocialIcon 
                  href="https://github.com/anshulkotwal" 
                  icon={<Github size={18} />} 
                  color="from-gray-600 to-gray-700"
                />
                <SocialIcon 
                  href="https://x.com/Anshulkotwal12" 
                  icon={<Twitter size={18} />} 
                  color="from-cyan-400 to-cyan-500"
                />
                <SocialIcon 
                  href="https://www.instagram.com/anshul_kotwal/" 
                  icon={<Instagram size={18} />} 
                  color="from-pink-500 to-purple-600"
                />
              </div>
            </div>
          </div>

          {/* Contact Form Panel */}
          <div
            ref={rightPanelRef}
            className="opacity-0 transition-all duration-1000 ease-out"
            style={{ 
              transform: 'translateX(50px) rotateY(-10deg)',
              transformStyle: 'preserve-3d'
            }}
          >
            <div className="bg-white/5 backdrop-blur-xl p-8 rounded-2xl shadow-2xl border border-white/10 relative group hover:border-white/20 transition-all duration-500 hover:shadow-xl hover:shadow-purple-500/10">
              {/* 3D hover effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-2 text-white flex items-center gap-3">
                  <Send className="text-cyan-400" size={24} />
                  Send Message
                </h3>
                <p className="text-gray-400 mb-6">Let's discuss your project</p>

                {/* Success Message */}
                {showSuccess && (
                  <div className="mb-6 p-4 bg-green-500/10 border border-green-500/20 rounded-lg animate-pulse">
                    <p className="text-green-400 text-sm">✅ Message sent! I'll get back to you soon.</p>
                  </div>
                )}

                <div className="space-y-6">
                  <InputField 
                    label="Name" 
                    name="name" 
                    placeholder="Your name" 
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
                    placeholder="Tell me about your project..." 
                    value={formData.message}
                    onChange={handleInputChange}
                    icon={<MessageCircle size={16} />}
                  />

                  <button
                    type="button"
                    disabled={isSubmitting}
                    onClick={handleSubmit}
                    className="w-full px-6 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-500/25 text-white disabled:opacity-50 disabled:cursor-not-allowed active:scale-95"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send size={18} />
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactInfo = ({ icon, label, value, link }) => (
  <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg transform-gpu">
    <div className="p-3 bg-gradient-to-br from-cyan-400/20 to-purple-600/20 rounded-xl">
      {icon}
    </div>
    <div>
      <h4 className="font-semibold text-white mb-1">{label}</h4>
      {link ? (
        <a
          href={link}
          className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
        >
          {value}
        </a>
      ) : (
        <p className="text-gray-300">{value}</p>
      )}
    </div>
  </div>
);

const SocialIcon = ({ href, icon, color }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center text-white transition-all duration-300 hover:scale-110 hover:rotate-12 hover:shadow-lg transform-gpu`}
  >
    {icon}
  </a>
);

const InputField = ({ label, name, placeholder, type = "text", isTextarea = false, value, onChange, icon }) => (
  <div className="group">
    <label 
      htmlFor={name} 
      className="block text-sm font-medium mb-2 text-white flex items-center gap-2"
    >
      {icon}
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
        className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm text-white placeholder-gray-500 focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 focus:outline-none resize-none transition-all duration-300 group-hover:border-white/20"
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
        className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm text-white placeholder-gray-500 focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 focus:outline-none transition-all duration-300 group-hover:border-white/20"
        placeholder={placeholder}
      />
    )}
  </div>
);
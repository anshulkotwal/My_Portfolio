import {
  Menu,
  X,
  Home,
  User,
  Code,
  Briefcase,
  Award,
  Mail,
  Sparkles,
  Sun,
  Moon,
  Zap
} from "lucide-react";
import { useEffect, useState, useRef } from "react";

const cn = (...classes) => classes.filter(Boolean).join(" ");

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const navRef = useRef(null);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const navItems = [
    { name: "Home", href: "#hero", icon: Home },
    { name: "About", href: "#about", icon: User },
    { name: "Experience", href: "#experience", icon: Sparkles },
    { name: "Skills", href: "#skills", icon: Code },
    { name: "Projects", href: "#projects", icon: Briefcase },
    { name: "Certificates", href: "#certificates", icon: Award },
    { name: "Contact", href: "#contact", icon: Mail },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 10);

      // Update active section based on scroll position with offset
      const sections = navItems.map(item => item.href.substring(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [navItems]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // Dark mode toggle with smooth animation
  const toggleDarkMode = () => {
    setIsDarkMode(prev => !prev);
    document.documentElement.classList.toggle('dark');
  };

  // Smooth scroll handler
  const handleSmoothScroll = (e, href) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      const offsetTop = targetElement.offsetTop - 100;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    
    setIsMenuOpen(false);
  };

  // Close mobile menu
  const closeMobileMenu = () => {
    setIsMenuOpen(false);
  };

  // Updated theme colors with light gray background for better contrast
  const themeColors = {
    bg: isDarkMode ? 'bg-gray-900/80' : 'bg-gray-100/85',
    text: isDarkMode ? 'text-white' : 'text-gray-900',
    textMuted: isDarkMode ? 'text-white/70' : 'text-gray-800',
    border: isDarkMode ? 'border-gray-700/50' : 'border-gray-300/50',
    menuBg: isDarkMode ? 'bg-gray-800/50' : 'bg-gray-50/80',
    mobileBg: isDarkMode ? 'bg-gray-900/95' : 'bg-gray-100/95',
    hover: isDarkMode ? 'hover:bg-white/10' : 'hover:bg-gray-200/70',
    logoText: isDarkMode ? 'text-white' : 'text-gray-900',
    mobileMenuText: isDarkMode ? 'text-white/80' : 'text-gray-900',
    mobileMenuTextHover: isDarkMode ? 'hover:text-white' : 'hover:text-gray-950',
    mobileMenuBg: isDarkMode ? 'hover:bg-white/10' : 'hover:bg-gray-200/70',
    footerText: isDarkMode ? 'text-white/50' : 'text-gray-700'
  };

  return (
    <>
      {/* Floating cursor glow effect */}
      {isHovered && (
        <div
          className="fixed pointer-events-none z-30 w-32 h-32 rounded-full opacity-60 transition-opacity duration-300"
          style={{
            left: mousePosition.x - 64,
            top: mousePosition.y - 64,
            background: 'radial-gradient(circle, rgba(6,182,212,0.4) 0%, rgba(168,85,247,0.4) 50%, transparent 70%)',
            filter: 'blur(20px)',
          }}
        />
      )}

      <nav
        ref={navRef}
        className={cn(
          "fixed w-full z-50 transition-all duration-700 ease-out",
          isScrolled
            ? `py-2 ${themeColors.bg} backdrop-blur-2xl shadow-2xl border-b border-gradient-to-r from-cyan-500/30 to-purple-500/30`
            : "py-4 bg-transparent"
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        
        {/* Particle effect background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -inset-10 opacity-20">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`,
                  animationDuration: `${2 + Math.random() * 2}s`
                }}
              />
            ))}
          </div>
        </div>

        <div className="container mx-auto flex items-center justify-between px-6 relative z-10">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => handleSmoothScroll(e, '#hero')}
            className={cn("text-2xl font-bold flex items-center group cursor-pointer relative", themeColors.logoText)}
          >
            <div className="relative">
              {/* Animated logo background */}
              <div className="absolute -inset-3 bg-gradient-to-r from-cyan-400 via-purple-600 to-pink-500 rounded-2xl blur-lg opacity-0 group-hover:opacity-40 transition-all duration-500 animate-pulse" />
              
              {/* Logo content */}
              <div className="relative flex items-center">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-purple-600 p-2 mr-3 group-hover:scale-110 transition-transform duration-300">
                  <Sparkles className="text-white w-full h-full" />
                </div>
                <span className="relative">
                  <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent font-extrabold tracking-tight">
                    Anshul&apos;s
                  </span>
                  <span className={cn("ml-2 group-hover:text-cyan-400 transition-colors duration-300 font-light", themeColors.logoText)}>
                    Portfolio
                  </span>
                </span>
              </div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className={cn("hidden md:flex items-center space-x-2 backdrop-blur-xl rounded-2xl p-2 border", themeColors.menuBg, themeColors.border)}>
            {navItems.map((item, index) => {
              const Icon = item.icon;
              const isActive = activeSection === item.href.substring(1);
              
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleSmoothScroll(e, item.href)}
                  className={cn(
                    "relative flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-300 group cursor-pointer",
                    isActive 
                      ? "bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg shadow-cyan-500/25" 
                      : cn(themeColors.textMuted, "hover:text-white hover:bg-white/10")
                  )}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Active indicator */}
                  {isActive && (
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl blur-sm opacity-50 animate-pulse" />
                  )}
                  
                  {/* Icon */}
                  <Icon 
                    size={16} 
                    className={cn(
                      "transition-transform duration-300",
                      isActive ? "scale-110" : "group-hover:scale-110"
                    )} 
                  />
                  
                  {/* Text */}
                  <span className="text-sm font-medium relative z-10">
                    {item.name}
                  </span>
                  
                  {/* Hover effect */}
                  {!isActive && (
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  )}
                </a>
              );
            })}
            
            {/* Dark Mode Toggle - Integrated in desktop menu */}
            <button
              onClick={toggleDarkMode}
              className={cn(
                "relative flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-500 group cursor-pointer ml-2",
                themeColors.textMuted,
                "hover:text-white hover:bg-white/10"
              )}
              aria-label="Toggle dark mode"
            >
              {/* Background gradient effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-blue-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Icon container with smooth rotation */}
              <div className="relative overflow-hidden w-4 h-4">
                <div className={cn(
                  "absolute inset-0 transition-all duration-700 ease-in-out",
                  isDarkMode ? "rotate-0 opacity-100" : "rotate-180 opacity-0"
                )}>
                  <Sun size={16} className="text-yellow-400" />
                </div>
                <div className={cn(
                  "absolute inset-0 transition-all duration-700 ease-in-out",
                  isDarkMode ? "rotate-180 opacity-0" : "rotate-0 opacity-100"
                )}>
                  <Moon size={16} className="text-blue-400" />
                </div>
              </div>
              
              {/* Optional text label */}
              <span className="text-sm font-medium relative z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {isDarkMode ? 'Light' : 'Dark'}
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(prev => !prev)}
            className={cn(
              "md:hidden relative p-3 z-50 hover:text-cyan-400 transition-all duration-300 rounded-xl group",
              themeColors.text,
              themeColors.hover
            )}
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            <div className="relative">
              {isMenuOpen ? (
                <X size={24} className="transform rotate-0 group-hover:rotate-90 transition-transform duration-300" />
              ) : (
                <Menu size={24} className="group-hover:scale-110 transition-transform duration-300" />
              )}
            </div>
            
            {/* Button glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "fixed inset-0 z-40 flex flex-col items-center justify-center transition-all duration-500 ease-out md:hidden",
            isMenuOpen 
              ? `opacity-100 pointer-events-auto ${themeColors.mobileBg} backdrop-blur-3xl` 
              : "opacity-0 pointer-events-none bg-transparent"
          )}
          style={{
            transform: isMenuOpen ? 'translateX(0)' : 'translateX(100%)',
          }}
        >
          {/* Close button in mobile menu */}
          <button
            onClick={closeMobileMenu}
            className={cn(
              "absolute top-6 right-6 p-3 rounded-xl transition-all duration-300 group z-50",
              themeColors.text,
              themeColors.hover
            )}
            aria-label="Close Menu"
          >
            <X size={28} className="group-hover:rotate-90 transition-transform duration-300" />
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>

          {/* Mobile menu background effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10" />
          
          {/* Animated particles for mobile menu */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(30)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full animate-pulse opacity-30"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${3 + Math.random() * 2}s`
                }}
              />
            ))}
          </div>

          {/* Mobile menu items */}
          <div className="flex flex-col space-y-6 text-xl relative z-10">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              const isActive = activeSection === item.href.substring(1);
              
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleSmoothScroll(e, item.href)}
                  className={cn(
                    "flex items-center gap-4 text-center py-4 px-8 rounded-2xl transition-all duration-500 cursor-pointer group relative",
                    isActive 
                      ? "bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-2xl shadow-cyan-500/30" 
                      : cn(themeColors.mobileMenuText, themeColors.mobileMenuTextHover, themeColors.mobileMenuBg)
                  )}
                  style={{ 
                    animationDelay: `${index * 0.1}s`,
                    transform: isMenuOpen ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.9)',
                    opacity: isMenuOpen ? 1 : 0,
                    transition: `all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) ${index * 0.1}s`
                  }}
                >
                  {/* Active background glow */}
                  {isActive && (
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl blur-lg opacity-50 animate-pulse" />
                  )}
                  
                  {/* Icon */}
                  <Icon 
                    size={24} 
                    className={cn(
                      "transition-transform duration-300 relative z-10",
                      isActive ? "scale-110" : "group-hover:scale-110"
                    )} 
                  />
                  
                  {/* Text */}
                  <span className="font-medium relative z-10">
                    {item.name}
                  </span>
                  
                  {/* Hover effect */}
                  {!isActive && (
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  )}
                </a>
              );
            })}
            
            {/* Dark Mode Toggle in Mobile Menu */}
            <button
              onClick={toggleDarkMode}
              className={cn(
                "flex items-center gap-4 text-center py-4 px-8 rounded-2xl transition-all duration-500 cursor-pointer group relative",
                themeColors.mobileMenuText, themeColors.mobileMenuTextHover, themeColors.mobileMenuBg
              )}
              style={{ 
                animationDelay: `${navItems.length * 0.1}s`,
                transform: isMenuOpen ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.9)',
                opacity: isMenuOpen ? 1 : 0,
                transition: `all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) ${navItems.length * 0.1}s`
              }}
            >
              {/* Background gradient effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-blue-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Icon container with smooth rotation */}
              <div className="relative overflow-hidden w-6 h-6">
                <div className={cn(
                  "absolute inset-0 transition-all duration-700 ease-in-out",
                  isDarkMode ? "rotate-0 opacity-100" : "rotate-180 opacity-0"
                )}>
                  <Sun size={24} className="text-yellow-400" />
                </div>
                <div className={cn(
                  "absolute inset-0 transition-all duration-700 ease-in-out",
                  isDarkMode ? "rotate-180 opacity-0" : "rotate-0 opacity-100"
                )}>
                  <Moon size={24} className="text-blue-400" />
                </div>
              </div>
              
              {/* Text */}
              <span className="font-medium relative z-10">
                {isDarkMode ? 'Light Mode' : 'Dark Mode'}
              </span>
            </button>
          </div>

          {/* Mobile menu footer */}
          <div className="absolute bottom-8 left-0 right-0 text-center">
            <div className={cn("flex justify-center items-center gap-2 text-sm", themeColors.footerText)}>
              <Zap size={16} />
              <span>Anshul&apos;s Portfolio</span>
              <Zap size={16} />
            </div>
          </div>
        </div>

        {/* Backdrop overlay for mobile menu */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 md:hidden transition-opacity duration-300"
            onClick={closeMobileMenu}
          />
        )}
      </nav>

      {/* Scroll progress indicator */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 z-50 origin-left transition-transform duration-300" 
           style={{
             transform: `scaleX(${Math.min(window.scrollY / (document.documentElement.scrollHeight - window.innerHeight), 1)})`
           }} />
    </>
  );
};

export default Navbar;
/* eslint-disable react-hooks/exhaustive-deps */
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
  Zap,
  Trophy,
  GraduationCap,
  ChevronRight
} from "lucide-react";
import { useEffect, useState, useRef, useCallback } from "react";

const cn = (...classes) => classes.filter(Boolean).join(' ');

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [savedScrollPosition, setSavedScrollPosition] = useState(0);
  const navRef = useRef(null);

  const navItems = [
    { name: "Home", href: "#hero", icon: Home },
    { name: "About", href: "#about", icon: User },
    { name: "Experience", href: "#experience", icon: Sparkles },
    { name: "Education", href: "#education", icon: GraduationCap },
    { name: "Skills", href: "#skills", icon: Code },
    { name: "Projects", href: "#projects", icon: Briefcase },
    { name: "Achievements", href: "#achievements", icon: Trophy },
    { name: "Certificates", href: "#certificates", icon: Award },
    { name: "Contact", href: "#contact", icon: Mail },
  ];

  // Optimized scroll handler with throttling
  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    
    setIsScrolled(scrollY > 10);
    
    // Calculate scroll progress
    const progress = Math.min(scrollY / (documentHeight - windowHeight), 1);
    setScrollProgress(progress);

    // Update active section with improved logic
    const sections = navItems.map(item => item.href.substring(1));
    let currentSection = 'hero';
    
    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        const offset = windowHeight * 0.3;
        
        if (rect.top <= offset && rect.bottom >= offset) {
          currentSection = section;
          break;
        }
      }
    }
    
    setActiveSection(currentSection);
  }, [navItems]);

  // Throttled mouse move handler
  const handleMouseMove = useCallback((e) => {
    if (isHovered) {
      setMousePosition({ x: e.clientX, y: e.clientY });
    }
  }, [isHovered]);

  useEffect(() => {
    let scrollTimeout;
    const throttledScroll = () => {
      if (scrollTimeout) return;
      scrollTimeout = setTimeout(() => {
        handleScroll();
        scrollTimeout = null;
      }, 16);
    };

    window.addEventListener("scroll", throttledScroll, { passive: true });
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    
    handleScroll();
    
    return () => {
      window.removeEventListener("scroll", throttledScroll);
      window.removeEventListener("mousemove", handleMouseMove);
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  }, [handleScroll, handleMouseMove]);

  // Prevent body scroll when menu is open - FIXED
  useEffect(() => {
    if (isMenuOpen) {
      // Save current scroll position
      const scrollY = window.scrollY;
      setSavedScrollPosition(scrollY);
      
      // Prevent scrolling
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.left = '0';
    } else {
      // Restore scroll position
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.left = '';
      
      // Restore scroll position without triggering scroll to top
      window.scrollTo(0, savedScrollPosition);
    }
    
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.left = '';
    };
  }, [isMenuOpen, savedScrollPosition]);

  // Dark mode toggle
  const toggleDarkMode = useCallback(() => {
    setIsDarkMode(prev => {
      const newMode = !prev;
      document.documentElement.classList.toggle('dark', newMode);
      return newMode;
    });
  }, []);

  // Initialize dark mode
  useEffect(() => {
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(systemPrefersDark);
    document.documentElement.classList.toggle('dark', systemPrefersDark);
  }, []);

  // Enhanced smooth scroll - FIXED: Only scroll when clicking nav items
  const handleSmoothScroll = useCallback((e, href) => {
    e.preventDefault();
    e.stopPropagation();
    
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      // Close menu first
      setIsMenuOpen(false);
      
      // Small delay to allow menu animation to start
      setTimeout(() => {
        const navHeight = navRef.current?.offsetHeight || 80;
        const offsetTop = targetElement.offsetTop - navHeight - 10;
        
        window.scrollTo({
          top: Math.max(0, offsetTop),
          behavior: 'smooth'
        });
      }, 100);
    } else {
      setIsMenuOpen(false);
    }
  }, []);

  // FIXED: Separate function to just close menu without scrolling
  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  // Close mobile menu handlers - FIXED
  useEffect(() => {
    const handleEscapeKey = (e) => {
      if (e.key === 'Escape' && isMenuOpen) {
        closeMenu();
      }
    };

    // Only attach escape key listener
    document.addEventListener('keydown', handleEscapeKey);
    
    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isMenuOpen, closeMenu]);

  // Handle backdrop click - FIXED: Use closeMenu instead of setIsMenuOpen
  const handleBackdropClick = useCallback((e) => {
    // Only close if clicking the backdrop itself, not menu content
    if (e.target === e.currentTarget) {
      closeMenu();
    }
  }, [closeMenu]);

  // Theme colors - UPDATED for more transparency
  const themeColors = {
    bg: isDarkMode ? 'bg-gray-900/80' : 'bg-white/80',
    text: isDarkMode ? 'text-gray-100' : 'text-gray-900',
    textMuted: isDarkMode ? 'text-gray-300' : 'text-gray-600',
    border: isDarkMode ? 'border-gray-700/20' : 'border-gray-200/30',
    menuBg: isDarkMode ? 'bg-gray-800/60' : 'bg-gray-50/60',
    hover: isDarkMode ? 'hover:bg-gray-700/30' : 'hover:bg-gray-100/50',
    logoText: isDarkMode ? 'text-gray-100' : 'text-gray-900',
    shadow: isDarkMode ? 'shadow-2xl shadow-black/10' : 'shadow-2xl shadow-gray-900/5',
    // More transparent mobile menu backgrounds
    mobileMenuBg: isDarkMode ? 'bg-gray-900/10' : 'bg-white/10',
    mobileMenuText: isDarkMode ? 'text-gray-100' : 'text-gray-900',
    mobileMenuTextHover: isDarkMode ? 'hover:text-white' : 'hover:text-gray-900',
    mobileMenuItemBg: isDarkMode ? 'hover:bg-gray-800/20' : 'hover:bg-gray-100/20',
    footerText: isDarkMode ? 'text-gray-400' : 'text-gray-500',
  };

  return (
    <>
      {/* Floating cursor glow effect - hidden on mobile */}
      {isHovered && (
        <div
          className="fixed pointer-events-none z-30 w-24 h-24 rounded-full opacity-40 transition-all duration-300 ease-out hidden lg:block"
          style={{
            left: mousePosition.x - 48,
            top: mousePosition.y - 48,
            background: 'radial-gradient(circle, rgba(99,102,241,0.3) 0%, rgba(168,85,247,0.2) 50%, transparent 70%)',
            filter: 'blur(16px)',
            transform: 'scale(1.1)',
          }}
        />
      )}

      <nav
        ref={navRef}
        className={cn(
          "fixed w-full z-50 transition-all duration-500 ease-out",
          isScrolled
            ? `py-2 sm:py-3 ${themeColors.bg} backdrop-blur-xl ${themeColors.shadow} border-b ${themeColors.border}`
            : "py-3 sm:py-5 bg-transparent"
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="container mx-auto flex items-center justify-between px-3 sm:px-4 lg:px-6 relative z-10">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => handleSmoothScroll(e, '#hero')}
            className={cn(
              "text-lg sm:text-xl lg:text-2xl font-bold flex items-center group cursor-pointer relative transition-all duration-300",
              themeColors.logoText
            )}
            aria-label="Anshul's Portfolio - Go to home"
          >
            <div className="relative">
              <div className="absolute -inset-1 sm:-inset-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg sm:rounded-xl blur-sm sm:blur-lg opacity-0 group-hover:opacity-30 transition-all duration-500" />
              
              <div className="relative flex items-center">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 p-1.5 sm:p-2 mr-2 sm:mr-3 group-hover:scale-105 transition-transform duration-300 shadow-lg">
                  <Sparkles className="text-white w-full h-full" />
                </div>
                <span className="relative">
                  <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent font-extrabold tracking-tight">
                    Anshul
                  </span>
                  <span className={cn(
                    "ml-1 sm:ml-2 group-hover:text-indigo-500 transition-colors duration-300 font-medium hidden sm:inline",
                    themeColors.logoText
                  )}>
                    Portfolio
                  </span>
                </span>
              </div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className={cn(
            "hidden lg:flex items-center space-x-1 backdrop-blur-xl rounded-2xl p-2 border transition-all duration-300",
            themeColors.menuBg,
            themeColors.border
          )}>
            {navItems.map((item, index) => {
              const Icon = item.icon;
              const isActive = activeSection === item.href.substring(1);
              
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleSmoothScroll(e, item.href)}
                  className={cn(
                    "relative flex items-center gap-2 px-3 xl:px-4 py-2.5 rounded-xl transition-all duration-300 group cursor-pointer font-medium text-sm",
                    isActive 
                      ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-500/25" 
                      : cn(themeColors.textMuted, "hover:text-indigo-500", themeColors.hover)
                  )}
                  style={{ animationDelay: `${index * 0.05}s` }}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {isActive && (
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl blur-sm opacity-30 animate-pulse" />
                  )}
                  
                  <Icon 
                    size={16} 
                    className={cn(
                      "transition-transform duration-300 relative z-10",
                      isActive ? "scale-110" : "group-hover:scale-110"
                    )} 
                  />
                  
                  <span className="relative z-10">{item.name}</span>
                  
                  {!isActive && (
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-600/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  )}
                </a>
              );
            })}
            
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className={cn(
                "relative flex items-center gap-2 px-3 xl:px-4 py-2.5 rounded-xl transition-all duration-300 group cursor-pointer ml-2 font-medium text-sm",
                themeColors.textMuted,
                themeColors.hover
              )}
              aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
            >
              <div className="relative overflow-hidden w-4 h-4">
                <div className={cn(
                  "absolute inset-0 transition-all duration-500 ease-in-out",
                  isDarkMode ? "rotate-0 opacity-100" : "rotate-180 opacity-0"
                )}>
                  <Sun size={16} className="text-yellow-500" />
                </div>
                <div className={cn(
                  "absolute inset-0 transition-all duration-500 ease-in-out",
                  isDarkMode ? "rotate-180 opacity-0" : "rotate-0 opacity-100"
                )}>
                  <Moon size={16} className="text-indigo-400" />
                </div>
              </div>
              
              <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {isDarkMode ? 'Light' : 'Dark'}
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(prev => !prev)}
            className={cn(
              "lg:hidden relative p-2 sm:p-3 z-50 transition-all duration-300 rounded-lg sm:rounded-xl group touch-manipulation",
              themeColors.text,
              themeColors.hover
            )}
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
          >
            <div className="relative w-6 h-6 sm:w-7 sm:h-7">
              <div className={cn(
                "absolute inset-0 transition-all duration-300 flex items-center justify-center",
                isMenuOpen ? "rotate-0 opacity-100" : "rotate-90 opacity-0"
              )}>
                <X size={24} className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div className={cn(
                "absolute inset-0 transition-all duration-300 flex items-center justify-center",
                isMenuOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
              )}>
                <Menu size={24} className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
            </div>
          </button>
        </div>

        {/* Enhanced Glassy Mobile Menu - FIXED */}
        <div
          className={cn(
            "fixed inset-0 z-40 lg:hidden transition-all duration-500 ease-out",
            isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          )}
          onClick={handleBackdropClick}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation menu"
        >
          {/* More transparent glassy backdrop */}
          <div 
            className={cn(
              "absolute inset-0 backdrop-blur-xl transition-all duration-500",
              isDarkMode 
                ? "bg-gray-900/10 shadow-2xl shadow-black/20" 
                : "bg-white/10 shadow-2xl shadow-gray-900/10"
            )}
            style={{
              backdropFilter: 'blur(16px) saturate(150%)',
              WebkitBackdropFilter: 'blur(16px) saturate(150%)',
            }}
          />
          
          {/* More transparent animated glass panel */}
          <div 
            className={cn(
              "relative h-full transition-all duration-500 ease-out",
              isDarkMode 
                ? "bg-gradient-to-br from-gray-900/20 via-gray-800/15 to-gray-900/20" 
                : "bg-gradient-to-br from-white/20 via-gray-50/15 to-white/20"
            )}
            style={{
              transform: isMenuOpen ? 'translateX(0) scale(1)' : 'translateX(-100%) scale(0.95)',
              backdropFilter: 'blur(16px) saturate(150%)',
              WebkitBackdropFilter: 'blur(16px) saturate(150%)',
              border: `1px solid ${isDarkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'}`,
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button in top-right corner - FIXED: Use closeMenu */}
            <button
              onClick={closeMenu}
              className={cn(
                "absolute top-4 right-4 p-3 rounded-full transition-all duration-300 touch-manipulation z-50",
                isDarkMode 
                  ? "bg-gray-800/50 hover:bg-gray-700/70 text-gray-200 hover:text-white" 
                  : "bg-white/50 hover:bg-gray-100/70 text-gray-800 hover:text-gray-900"
              )}
              style={{
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                transform: isMenuOpen ? 'rotate(0deg) scale(1)' : 'rotate(90deg) scale(0)',
                transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.2s'
              }}
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
            
            {/* Menu content */}
            <div className="flex flex-col justify-center h-full px-4 sm:px-6 max-w-sm mx-auto pt-16">
              <div className="flex flex-col space-y-3 sm:space-y-4">
                {navItems.map((item, index) => {
                  const Icon = item.icon;
                  const isActive = activeSection === item.href.substring(1);
                  
                  return (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={(e) => handleSmoothScroll(e, item.href)}
                      className={cn(
                        "flex items-center gap-3 sm:gap-4 py-3 sm:py-4 px-4 sm:px-6 rounded-xl sm:rounded-2xl transition-all duration-300 cursor-pointer group relative touch-manipulation",
                        isActive 
                          ? "bg-gradient-to-r from-indigo-500/60 to-purple-600/60 text-white shadow-xl shadow-indigo-500/20" 
                          : cn(
                              themeColors.mobileMenuText, 
                              themeColors.mobileMenuTextHover, 
                              themeColors.mobileMenuItemBg
                            )
                      )}
                      style={{ 
                        animationDelay: `${index * 0.1}s`,
                        transform: isMenuOpen ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.8)',
                        opacity: isMenuOpen ? 1 : 0,
                        transition: `all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) ${index * 0.05}s`,
                        backdropFilter: isActive ? 'blur(8px)' : 'blur(4px)',
                        WebkitBackdropFilter: isActive ? 'blur(8px)' : 'blur(4px)',
                      }}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      <Icon size={20} className="sm:w-6 sm:h-6 relative z-10 flex-shrink-0" />
                      <span className="font-medium relative z-10 flex-1 text-base sm:text-lg">{item.name}</span>
                      {isActive && <ChevronRight size={18} className="sm:w-5 sm:h-5 relative z-10 flex-shrink-0" />}
                    </a>
                  );
                })}
                
                {/* Mobile Dark Mode Toggle */}
                <button
                  onClick={toggleDarkMode}
                  className={cn(
                    "flex items-center gap-3 sm:gap-4 py-3 sm:py-4 px-4 sm:px-6 rounded-xl sm:rounded-2xl transition-all duration-300 cursor-pointer group relative touch-manipulation",
                    themeColors.mobileMenuText, 
                    themeColors.mobileMenuTextHover, 
                    themeColors.mobileMenuItemBg
                  )}
                  style={{ 
                    animationDelay: `${navItems.length * 0.1}s`,
                    transform: isMenuOpen ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.8)',
                    opacity: isMenuOpen ? 1 : 0,
                    transition: `all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) ${navItems.length * 0.05}s`,
                    backdropFilter: 'blur(4px)',
                    WebkitBackdropFilter: 'blur(4px)',
                  }}
                  aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
                >
                  <div className="relative overflow-hidden w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0">
                    <div className={cn(
                      "absolute inset-0 transition-all duration-500 ease-in-out",
                      isDarkMode ? "rotate-0 opacity-100" : "rotate-180 opacity-0"
                    )}>
                      <Sun size={20} className="sm:w-6 sm:h-6 text-yellow-500" />
                    </div>
                    <div className={cn(
                      "absolute inset-0 transition-all duration-500 ease-in-out",
                      isDarkMode ? "rotate-180 opacity-0" : "rotate-0 opacity-100"
                    )}>
                      <Moon size={20} className="sm:w-6 sm:h-6 text-indigo-400" />
                    </div>
                  </div>
                  
                  <span className="font-medium relative z-10 flex-1 text-base sm:text-lg">
                    {isDarkMode ? 'Light Mode' : 'Dark Mode'}
                  </span>
                </button>
              </div>

              {/* Mobile menu footer */}
              <div className="mt-8 px-4 sm:px-6">
                <div 
                  className={cn(
                    "flex justify-center items-center gap-2 text-sm font-medium",
                    themeColors.footerText
                  )}
                  style={{
                    transform: isMenuOpen ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.9)',
                    opacity: isMenuOpen ? 1 : 0,
                    transition: `all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) ${navItems.length * 0.05 + 0.2}s`
                  }}
                >
                  <Zap size={16} className="text-indigo-400" />
                  <span>Anshul&apos;s Portfolio</span>
                  <Zap size={16} className="text-indigo-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Scroll progress indicator */}
      <div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 z-50 origin-left transition-transform duration-100 ease-out shadow-lg shadow-indigo-500/50" 
        style={{
          transform: `scaleX(${scrollProgress})`
        }}
        role="progressbar"
        aria-label="Page scroll progress"
        aria-valuenow={Math.round(scrollProgress * 100)}
        aria-valuemin={0}
        aria-valuemax={100}
      />
    </>
  );
};

export default Navbar;
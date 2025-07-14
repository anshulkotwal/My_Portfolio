import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";


export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      // Update active section based on scroll position
      const sections = navItems.map(item => item.href.substring(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);

  return (
    <nav
      className={cn(
        "fixed w-full z-50 transition-all duration-500",
        isScrolled
          ? "py-3 bg-gray-900/95 backdrop-blur-xl shadow-2xl border-b border-cyan-500/20"
          : "py-5 bg-transparent"
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-6">
        <a
          className="text-2xl font-bold text-white flex items-center group"
          href="#hero"
        >
          <span className="relative">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent animate-pulse">
              Anshul&apos;s
            </span>
            <span className="ml-2 text-white group-hover:text-cyan-400 transition-colors duration-300">
              Portfolio
            </span>
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-lg blur opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                "relative text-white/80 hover:text-cyan-400 transition-all duration-300 py-2 px-4 rounded-lg",
                activeSection === item.href.substring(1) && "text-cyan-400"
              )}
            >
              {item.name}
              <div className={cn(
                "absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-purple-600 transition-all duration-300",
                activeSection === item.href.substring(1) ? "scale-x-100" : "scale-x-0"
              )}></div>
            </a>
          ))}

        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(prev => !prev)}
          className="md:hidden p-2 text-white z-50 hover:text-cyan-400 transition-colors duration-300"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        <div
          className={cn(
            "fixed inset-0 bg-gray-900/98 backdrop-blur-xl z-40 flex flex-col items-center justify-center transition-all duration-300 md:hidden",
            isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-8 text-xl">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-white/80 hover:text-cyan-400 transition-colors duration-300 text-center py-2 px-6 rounded-lg hover:bg-white/10"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}

          </div>
        </div>
      </div>
    </nav>
  );
};


export default Navbar;
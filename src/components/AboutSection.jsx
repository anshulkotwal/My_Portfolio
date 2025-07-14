import {  Code,  Star, Zap, Globe } from "lucide-react";
import { useState } from 'react';
import clsx from "clsx";
const cn = (...args) => clsx(...args); // Optional alias if you want to keep using `cn`

export const AboutSection = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const achievements = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Full-Stack Development",
      description: "Expert in modern web technologies including React.js, Node.js, and MongoDB. Built scalable applications supporting 5000+ concurrent users.",
      color: "from-cyan-500 to-blue-600",
      stats: "25% Performance Boost"
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: "Google Cloud Facilitator",
      description: "Mentored 600+ learners across 2024-2025 cohorts, earned 5200+ skill badges, and received milestone certifications.",
      color: "from-purple-500 to-pink-600",
      stats: "600+ Mentees"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Problem Solver",
      description: "Solved 550+ DSA problems on LeetCode with 1700+ contest rating. 5-star SQL and 4-star Python on HackerRank.",
      color: "from-green-500 to-teal-600",
      stats: "550+ Problems Solved"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "3D Web Experiences",
      description: "Created immersive 3D portfolios with Three.js, WebGL shaders, and GSAP animations maintaining 60fps performance.",
      color: "from-orange-500 to-red-600",
      stats: "60fps Performance"
    }
  ];

  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-7xl">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">Me</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Passionate about creating exceptional digital experiences and solving complex problems through code.
          </p>
        </div>

        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Bio section */}
          <div className="space-y-6">
            <div className="relative">
              <h3 className="text-3xl font-bold text-white mb-6">
                Computer Science Student & Web Developer
              </h3>
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-cyan-400 to-purple-600 rounded-full"></div>
            </div>
            
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Currently pursuing B.Tech (Hons.) in CSIT with Cyber Security specialization at 
                <span className="text-cyan-400 font-semibold"> Ajay Kumar Garg Engineering College</span> 
                (CGPA: 8.23/10).
              </p>
              
              <p>
                As a <span className="text-purple-400 font-semibold">Google Cloud Facilitator</span>, 
                I've mentored 600+ learners and earned 5200+ skill badges. My passion for 
                problem-solving is reflected in my <span className="text-cyan-400 font-semibold">550+ DSA solutions</span> 
                and consistent competitive programming achievements.
              </p>
              
              <p>
                I specialize in creating immersive web experiences using cutting-edge technologies 
                like Three.js, GSAP, and modern frameworks. My projects range from 
                <span className="text-purple-400 font-semibold"> real-time multiplayer games</span> to 
                <span className="text-cyan-400 font-semibold"> AI-powered chatbots</span>.
              </p>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <a
                href="#contact"
                className="group relative px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full text-white font-semibold hover:from-cyan-400 hover:to-purple-500 transition-all duration-300 transform hover:scale-105"
              >
                <span className="relative z-10">Get In Touch</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur"></div>
              </a>
              <a
                href="/projects/Anshul_Kotwal_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border-2 border-cyan-400 rounded-full text-cyan-400 font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 transform hover:scale-105"
              >
                Download Resume
              </a>
            </div>
          </div>

          {/* Profile image placeholder with 3D effect */}
          <div className="relative">
            <div className="relative w-80 h-80 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full animate-pulse-slow"></div>
              <div className="absolute inset-2 bg-gray-900 rounded-full flex items-center justify-center">
                <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">
                  AK
                </div>
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-cyan-400 rounded-full animate-float"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-600 rounded-full animate-float-delayed"></div>
              <div className="absolute top-1/2 -left-8 w-4 h-4 bg-pink-500 rounded-full animate-float"></div>
            </div>
          </div>
        </div>

        {/* Achievement cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((item, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-400/50 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Gradient background */}
              <div className={cn(
                "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl",
                item.color
              )}></div>
              
              {/* Icon */}
              <div className={cn(
                "relative mb-4 p-3 rounded-xl bg-gradient-to-r text-white w-fit",
                item.color
              )}>
                {item.icon}
              </div>
              
              {/* Content */}
              <div className="relative z-10">
                <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                <p className="text-gray-400 text-sm mb-3">{item.description}</p>
                <div className={cn(
                  "inline-block px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r text-white",
                  item.color
                )}>
                  {item.stats}
                </div>
              </div>
              
              {/* Hover effects */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r opacity-0 group-hover:opacity-5 transition-opacity duration-500 from-cyan-400 to-purple-600"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

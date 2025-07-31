import  { useState } from 'react';
import { Navbar } from "../components/Navbar";
import { StarBackground } from "@/components/StarBackground";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { SkillsSection } from "../components/SkillsSection";
import { CertificatesSection } from "../components/CertificatesSection";
import { ExperienceSection } from "../components/ExperienceSection";
import { AchievementsSection } from "../components/AchievementsSection.jsx";
import { EducationSection } from "../components/EducationSection.jsx";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import { PortfolioLoader } from "../components/PortfolioLoader"; 
import { CompactTestimonials } from '../components/TestimonialsSection.jsx';

export const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {/* Show loader first */}
      {isLoading && (
        <PortfolioLoader onLoadingComplete={handleLoadingComplete} />
      )}
      
      {!isLoading && (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
          <StarBackground />
          <Navbar />
          <main>
            <HeroSection />
            <AboutSection />
            <ExperienceSection />
            <EducationSection />
            <SkillsSection />
            <ProjectsSection />
            <AchievementsSection />
            <CertificatesSection />
            <CompactTestimonials/>
            <ContactSection />
          </main>
          <Footer />
        </div>
      )}
    </>
  );
};
import { Navbar } from "../components/Navbar";
import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { CertificatesSection } from "../components/CertificatesSection";
import { ExperienceSection } from "../components/ExperienceSection";
import {AchievementsSection} from "../components/AchievementsSection.jsx"
import {EducationSection} from "../components/EducationSection.jsx"
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ThemeToggle />
      <StarBackground />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection/>
        <EducationSection/>
        <SkillsSection />
        <ProjectsSection />
        <AchievementsSection/>
        <CertificatesSection/>
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

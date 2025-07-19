import { Navbar } from "../components/Navbar";
import { StarBackground } from "@/components/StarBackground";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { SkillsSection } from "../components/SkillsSection";
import { CertificatesSection } from "../components/CertificatesSection";
import { ExperienceSection } from "../components/ExperienceSection";
import {AchievementsSection} from "../components/AchievementsSection.jsx"
import {EducationSection} from "../components/EducationSection.jsx"
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
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

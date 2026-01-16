import HeroSection from "@/components/Hero";
import SkillsSection from "@/components/Skills";
import ContactSection from "@/components/Contact";
import Projects from "@/components/Project";

const Index = () => {
  return (
    <main className="bg-background min-h-screen">
      <HeroSection />
      <SkillsSection />
      <Projects />
      <ContactSection />
      
    </main>
  );
};

export default Index;

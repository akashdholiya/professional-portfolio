import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { AboutSection } from "@/components/AboutSection";
import { ProjectList } from "@/components/ProjectList";
import { BentoSkills } from "@/components/BentoSkills";
import { DesignProcess } from "@/components/DesignProcess";
import { Experience } from "@/components/Experience";
import { FigmaShowcase } from "@/components/FigmaShowcase";
import { ContactCTA } from "@/components/ContactCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0B0F1A] text-neutral-900 dark:text-slate-100 font-sans selection:bg-violet-500 selection:text-white transition-colors duration-300">
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <ProjectList limit={6} showViewMore={true} />
        <BentoSkills />
        <DesignProcess />
        <Experience />
        <FigmaShowcase />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}

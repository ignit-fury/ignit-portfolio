import { Hero } from "@/components/hero/Hero";
import { ProjectsSection } from "@/components/projects/ProjectsSection";
import { CaseStudyHighlight } from "@/components/case-study/CaseStudyHighlight";
import { AboutMe } from "@/components/about/AboutMe";
import { SkillsSection } from "@/components/skills/SkillsSection";
import { ContactSection } from "@/components/contact/ContactSection";
import { Footer } from "@/components/footer/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <ProjectsSection />
      <CaseStudyHighlight />
      <AboutMe />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}

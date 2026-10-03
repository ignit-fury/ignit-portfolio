import { Hero } from "@/components/hero/Hero";
import { ProjectsSection } from "@/components/projects/ProjectsSection";
import { CaseStudyHighlight } from "@/components/case-study/CaseStudyHighlight";
import { AboutMe } from "@/components/about/AboutMe";
import { SkillsSection } from "@/components/skills/SkillsSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <ProjectsSection />
      <CaseStudyHighlight />
      <AboutMe />
      <SkillsSection />
    </main>
  );
}

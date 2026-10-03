import { Hero } from "@/components/hero/Hero";
import { ProjectsSection } from "@/components/projects/ProjectsSection";
import { CaseStudyHighlight } from "@/components/case-study/CaseStudyHighlight";

export default function Home() {
  return (
    <main>
      <Hero />
      <ProjectsSection />
      <CaseStudyHighlight />
    </main>
  );
}

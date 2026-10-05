import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ProjectCard } from "./ProjectCard";
import { projects } from "@/lib/data/projects";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <h2 className="font-display text-3xl font-bold text-white mb-2">
            Featured Projects
          </h2>
          <p className="text-muted mb-10">
            Shipped products with measurable impact.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, i) => (
            <ScrollReveal key={project.slug} delay={i * 0.1}>
              <ProjectCard project={project} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

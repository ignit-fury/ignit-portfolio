import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SkillTag } from "./SkillTag";
import { skillGroups } from "@/lib/data/skills";

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-6 bg-surface/50">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl font-bold text-white mb-10">
            Skills & Tools
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillGroups.map((group) => (
            <ScrollReveal key={group.category}>
              <div>
                <h3 className="text-sm font-medium text-accent uppercase tracking-wider mb-3">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, i) => (
                    <SkillTag key={skill} skill={skill} index={i} />
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

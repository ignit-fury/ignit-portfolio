import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { projects } from "@/lib/data/projects";
import { AlertTriangle, Lightbulb, TrendingUp } from "lucide-react";

const caseStudy = projects.find((p) => p.caseStudy)?.caseStudy;

const columns = [
  {
    label: "Problem",
    icon: AlertTriangle,
    text: caseStudy?.problem,
  },
  {
    label: "Approach",
    icon: Lightbulb,
    text: caseStudy?.approach,
  },
  {
    label: "Results",
    icon: TrendingUp,
    text: caseStudy?.results,
  },
];

export function CaseStudyHighlight() {
  if (!caseStudy) return null;

  return (
    <section className="py-20 px-6 bg-surface/50">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <p className="text-accent text-sm font-medium uppercase tracking-wider mb-2">
            Case Study
          </p>
          <h2 className="text-3xl font-bold text-white mb-10">
            {projects.find((p) => p.caseStudy)?.name}
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {columns.map((col, i) => (
            <ScrollReveal key={col.label} delay={i * 0.15}>
              <div className="relative bg-background border border-border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <col.icon
                      className="h-5 w-5 text-accent"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {col.label}
                  </h3>
                </div>
                <p className="text-muted text-sm leading-relaxed">
                  {col.text}
                </p>
                {i < 2 && (
                  <div
                    className="hidden md:block absolute top-1/2 -right-3 w-6 h-px bg-accent/40"
                    aria-hidden="true"
                  />
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { aboutLines } from "@/lib/data/about";

export function AboutMe() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <h2 className="font-display text-3xl font-bold text-white mb-8">About Me</h2>
          <div className="space-y-4">
            {aboutLines.map((line, i) => (
              <p
                key={i}
                className="text-lg text-muted leading-relaxed border-l-2 border-accent/40 pl-4"
              >
                {line}
              </p>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

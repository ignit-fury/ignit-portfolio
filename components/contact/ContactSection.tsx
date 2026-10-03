import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ContactForm } from "./ContactForm";
import { socialLinks } from "@/lib/data/hero";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const links = [
  { label: "GitHub", href: socialLinks.github, icon: Github },
  { label: "LinkedIn", href: socialLinks.linkedin, icon: Linkedin },
  { label: "Twitter / X", href: socialLinks.twitter, icon: Twitter },
  { label: "Email", href: socialLinks.email, icon: Mail },
];

export function ContactSection() {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ScrollReveal>
            <p className="text-accent text-sm font-medium uppercase tracking-wider mb-2">
              Get In Touch
            </p>
            <h2 className="text-3xl font-bold text-white mb-4">
              Let&apos;s build something
            </h2>
            <p className="text-muted mb-8">
              I reply within 24 hours. Let&apos;s build something.
            </p>

            <div className="space-y-3">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted hover:text-white transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-surface border border-border flex items-center justify-center group-hover:border-accent transition-colors">
                    <link.icon className="h-4 w-4" aria-hidden="true" />
                  </div>
                  <span>{link.label}</span>
                </a>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <ContactForm />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

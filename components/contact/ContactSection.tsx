import { ScrollReveal } from "@/components/ui/ScrollReveal";
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
      <div className="max-w-3xl mx-auto text-center">
        <ScrollReveal>
          <p className="text-accent text-sm font-medium uppercase tracking-wider mb-2">
            Get In Touch
          </p>
          <h2 className="text-3xl font-bold text-white mb-4">
            Let&apos;s build something
          </h2>
          <p className="text-muted mb-8">
            I reply within 24 hours. Drop me a mail.
          </p>

          <a
            href={socialLinks.email}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium bg-accent hover:bg-accent-hover text-white transition-all duration-200 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
            Email Me
          </a>

          <nav aria-label="Social links" className="mt-10 flex justify-center gap-4">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={link.label}
                className="w-10 h-10 rounded-lg bg-surface border border-border flex items-center justify-center text-muted hover:text-accent hover:border-accent transition-colors"
              >
                <link.icon className="h-4 w-4" aria-hidden="true" />
              </a>
            ))}
          </nav>
        </ScrollReveal>
      </div>
    </section>
  );
}

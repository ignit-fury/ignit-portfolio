import { socialLinks } from "@/lib/data/hero";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const links = [
  { label: "GitHub", href: socialLinks.github, icon: Github },
  { label: "LinkedIn", href: socialLinks.linkedin, icon: Linkedin },
  { label: "Twitter / X", href: socialLinks.twitter, icon: Twitter },
  { label: "Email", href: socialLinks.email, icon: Mail },
];

export function Footer() {
  return (
    <footer className="border-t border-border py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-muted text-sm">
          © {new Date().getFullYear()} Prem Patel. Built with Next.js.
        </p>
        <nav aria-label="Social links" className="flex gap-4">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={
                link.href.startsWith("mailto:") ? undefined : "_blank"
              }
              rel="noopener noreferrer"
              aria-label={link.label}
              className="text-muted hover:text-accent transition-colors"
            >
              <link.icon className="h-5 w-5" aria-hidden="true" />
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}

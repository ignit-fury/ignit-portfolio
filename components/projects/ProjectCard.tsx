"use client";

import { ExternalLink, Github } from "lucide-react";
import { Project } from "@/lib/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group bg-surface border border-border rounded-xl p-6 transition-all duration-200 hover:-translate-y-1 hover:border-accent hover:shadow-lg hover:shadow-accent/10">
      <div className="flex items-center justify-between mb-4">
        <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center text-accent font-bold text-lg">
          {project.name.charAt(0)}
        </div>
        <span className="text-accent font-semibold text-sm">
          {project.impact}
        </span>
      </div>

      <h3 className="text-xl font-semibold text-white mb-2">{project.name}</h3>
      <p className="text-muted text-sm leading-relaxed mb-4">
        {project.problem}
      </p>

      <div className="flex flex-wrap gap-2 mb-5">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="px-2.5 py-1 text-xs rounded-full bg-background border border-border text-muted"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex gap-3">
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm text-accent hover:text-accent-hover transition-colors"
        >
          <ExternalLink className="h-4 w-4" aria-hidden="true" />
          Live
        </a>
        <a
          href={project.codeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-white transition-colors"
        >
          <Github className="h-4 w-4" aria-hidden="true" />
          Code
        </a>
      </div>
    </article>
  );
}

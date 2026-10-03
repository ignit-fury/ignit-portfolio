# Portfolio Homepage Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a responsive, mobile-first portfolio homepage with animated hero, 4 project cards, case study, about, skills, and contact sections.

**Architecture:** Next.js 14 App Router with TypeScript. Single-page scroll site. All content in typed data files. Framer Motion for scroll reveals and animations. Tailwind CSS for styling. Formspree for contact form (no backend).

**Tech Stack:** Next.js 14, TypeScript, Tailwind CSS, Framer Motion, Lucide React

## Global Constraints

- Colors: dark bg `#0F172A`, accent `#4F46E5` (exact hex)
- No stock photography, no external image assets (inline SVG only)
- No external UI component libraries (shadcn, MUI, etc.)
- Mobile-first: breakpoints at 640px, 1024px
- All animations must respect `prefers-reduced-motion`
- 4 projects: TaskFlow, DevPulse, SplitSmart, CodeVault (case study = TaskFlow)
- About section: exactly 4 lines
- Contact form fields: Name, Email, Message (all required)
- Social links: GitHub, LinkedIn, Twitter/X, Email
- Location: Mumbai, India • IST (UTC+5:30)
- Typing headline roles: Student / Freelancer, MERN Stack Developer, Product Builder, Open Source Contributor
- Value prop: "A enthusiastic dev"

---

### Task 1: Project Scaffold + Tailwind Config

**Files:**
- Create: `package.json`, `next.config.mjs`, `tsconfig.json`, `tailwind.config.ts`, `postcss.config.mjs`
- Create: `app/layout.tsx`, `app/page.tsx`, `app/globals.css`

**Interfaces:**
- Produces: runnable Next.js dev server with Tailwind configured

- [ ] **Step 1: Initialize project**

```bash
cd /Users/prempatel/Documents/ignit-portfolio
npm init -y
npm install next@14 react@18 react-dom@18 framer-motion lucide-react
npm install -D typescript @types/react @types/node tailwindcss postcss autoprefixer @types/react-dom
npx tailwindcss init -p
```

- [ ] **Step 2: Create `tsconfig.json`**

```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "paths": { "@/*": ["./*"] }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

- [ ] **Step 3: Create `next.config.mjs`**

```js
/** @type {import('next').NextConfig} */
const nextConfig = {};
export default nextConfig;
```

- [ ] **Step 4: Update `tailwind.config.ts`**

```ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0F172A",
        accent: "#4F46E5",
        "accent-hover": "#6366F1",
        surface: "#1E293B",
        border: "#334155",
        muted: "#94A3B8",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      animation: {
        "grid-pulse": "grid-pulse 8s ease-in-out infinite",
        "fade-up": "fade-up 0.6s ease-out forwards",
        "pulse-dot": "pulse-dot 2s ease-in-out infinite",
      },
      keyframes: {
        "grid-pulse": {
          "0%, 100%": { opacity: "0.03" },
          "50%": { opacity: "0.08" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-dot": {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.5", transform: "scale(1.5)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
```

- [ ] **Step 5: Create `app/globals.css`**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

html {
  scroll-behavior: smooth;
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

body {
  @apply bg-background text-white antialiased;
}
```

- [ ] **Step 6: Create `app/layout.tsx`**

```tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Prem Patel — MERN Stack Developer & Product Builder",
  description:
    "Student turned freelancer building scalable products with React, Node, MongoDB. 12+ projects, 3 production apps. Based in Mumbai.",
  openGraph: {
    title: "Prem Patel — MERN Stack Developer",
    description: "Building scalable products with MERN stack. Based in Mumbai.",
    type: "profile",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

- [ ] **Step 7: Create `app/page.tsx` placeholder**

```tsx
export default function Home() {
  return <main className="min-h-screen">Portfolio loading...</main>;
}
```

- [ ] **Step 8: Verify dev server runs**

```bash
npm run dev
```

Expected: Server starts on http://localhost:3000, no TypeScript errors

- [ ] **Step 9: Commit**

```bash
git add -A
git commit -m "chore: scaffold Next.js 14 + Tailwind with custom theme"
```

---

### Task 2: Data Files (Projects, Skills, About)

**Files:**
- Create: `lib/data/projects.ts`
- Create: `lib/data/skills.ts`
- Create: `lib/data/about.ts`
- Create: `lib/data/hero.ts`

**Interfaces:**
- Produces: typed exports consumed by all section components

- [ ] **Step 1: Create `lib/data/projects.ts`**

```ts
export interface Project {
  slug: string;
  name: string;
  problem: string;
  impact: string;
  stack: string[];
  liveUrl: string;
  codeUrl: string;
  caseStudy?: CaseStudy;
}

export interface CaseStudy {
  problem: string;
  approach: string;
  results: string;
}

export const projects: Project[] = [
  {
    slug: "taskflow",
    name: "TaskFlow",
    problem: "Teams waste 30% time on context switching between tools",
    impact: "40% faster task completion",
    stack: ["React", "Node.js", "Express", "MongoDB", "Socket.io"],
    liveUrl: "https://taskflow-demo.vercel.app",
    codeUrl: "https://github.com/ignitfury/taskflow",
    caseStudy: {
      problem:
        "Distributed teams lose 30% productivity to context switching between Slack, Jira, Notion",
      approach:
        "Real-time unified dashboard with WebSocket sync, smart notifications, keyboard-first UX",
      results:
        "40% faster task completion, 60% fewer context switches, adopted by 3 freelance clients",
    },
  },
  {
    slug: "devpulse",
    name: "DevPulse",
    problem: "No visibility into code health across repos",
    impact: "500+ repos analyzed",
    stack: ["Next.js", "TypeScript", "Tailwind", "Prisma", "GitHub API"],
    liveUrl: "https://devpulse-demo.vercel.app",
    codeUrl: "https://github.com/ignitfury/devpulse",
  },
  {
    slug: "splitsmart",
    name: "SplitSmart",
    problem: "Splitting expenses in groups is manual and error-prone",
    impact: "200+ active groups",
    stack: ["React Native", "Expo", "Firebase", "Stripe"],
    liveUrl: "https://splitsmart.app",
    codeUrl: "https://github.com/ignitfury/splitsmart",
  },
  {
    slug: "codevault",
    name: "CodeVault",
    problem: "Snippets scattered across gists and notebooks",
    impact: "1.2k snippets saved",
    stack: ["React", "Node.js", "MongoDB", "Redis", "Monaco Editor"],
    liveUrl: "https://codevault-demo.vercel.app",
    codeUrl: "https://github.com/ignitfury/codevault",
  },
];
```

- [ ] **Step 2: Create `lib/data/skills.ts`**

```ts
export interface SkillGroup {
  category: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux Toolkit"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express", "MongoDB", "PostgreSQL", "Prisma"],
  },
  {
    category: "Real-time",
    skills: ["Socket.io", "WebSockets", "Firebase", "Server-Sent Events"],
  },
  {
    category: "DevOps",
    skills: ["Docker", "Vercel", "GitHub Actions", "AWS"],
  },
  {
    category: "Tools",
    skills: ["Git", "VS Code", "Figma", "Postman", "Chrome DevTools"],
  },
];
```

- [ ] **Step 3: Create `lib/data/about.ts`**

```ts
export const aboutLines: string[] = [
  "Student turned freelancer — building products since 2022",
  "MERN stack specialist, obsessed with clean DX and performance",
  "Love shipping: 12+ projects, 3 production apps, 500+ GitHub stars",
  "Open source contributor • Mumbai-based • Always learning",
];
```

- [ ] **Step 4: Create `lib/data/hero.ts`**

```ts
export const roles: string[] = [
  "Student / Freelancer",
  "MERN Stack Developer",
  "Product Builder",
  "Open Source Contributor",
];

export const valueProp = "A enthusiastic dev";

export const location = "Mumbai, India • IST (UTC+5:30)";

export const socialLinks = {
  github: "https://github.com/ignitfury",
  linkedin: "https://linkedin.com/in/ignitfury",
  twitter: "https://twitter.com/ignitfury",
  email: "mailto:hello@ignitfury.dev",
};
```

- [ ] **Step 5: Commit**

```bash
git add lib/
git commit -m "feat: add typed data files for projects, skills, about, hero"
```

---

### Task 3: Base UI Components (Button, ScrollReveal, GridBackground)

**Files:**
- Create: `components/ui/Button.tsx`
- Create: `components/ui/ScrollReveal.tsx`
- Create: `components/ui/GridBackground.tsx`

**Interfaces:**
- Consumes: Tailwind theme from Task 1
- Produces: `<Button>`, `<ScrollReveal>`, `<GridBackground>` used by all sections

- [ ] **Step 1: Create `components/ui/Button.tsx`**

```tsx
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export function Button({
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const base =
    "px-6 py-3 rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background";
  const styles =
    variant === "primary"
      ? "bg-accent hover:bg-accent-hover text-white hover:-translate-y-0.5"
      : "border border-border hover:border-accent text-white hover:-translate-y-0.5";

  return (
    <button className={`${base} ${styles} ${className}`} {...props}>
      {children}
    </button>
  );
}
```

- [ ] **Step 2: Create `components/ui/ScrollReveal.tsx`**

```tsx
"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function ScrollReveal({
  children,
  delay = 0,
  className = "",
}: ScrollRevealProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
```

- [ ] **Step 3: Create `components/ui/GridBackground.tsx`**

```tsx
export function GridBackground() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 animate-grid-pulse"
      style={{
        backgroundImage: `
          linear-gradient(rgba(79, 70, 229, 0.07) 1px, transparent 1px),
          linear-gradient(90deg, rgba(79, 70, 229, 0.07) 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px",
      }}
    />
  );
}
```

- [ ] **Step 4: Verify build passes**

```bash
npx tsc --noEmit
```

Expected: No errors

- [ ] **Step 5: Commit**

```bash
git add components/
git commit -m "feat: add Button, ScrollReveal, GridBackground UI components"
```

---

### Task 4: Hero Section (Typing Headline + Location + CTAs)

**Files:**
- Create: `components/hero/TypingHeadline.tsx`
- Create: `components/hero/LocationBadge.tsx`
- Create: `components/hero/Hero.tsx`

**Interfaces:**
- Consumes: `roles`, `valueProp`, `location` from `lib/data/hero.ts`; `Button`, `GridBackground`, `ScrollReveal`
- Produces: `<Hero />` rendered in `app/page.tsx`

- [ ] **Step 1: Create `components/hero/TypingHeadline.tsx`**

```tsx
"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

interface TypingHeadlineProps {
  roles: string[];
}

export function TypingHeadline({ roles }: TypingHeadlineProps) {
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (reduceMotion) {
      setDisplayText(roles[0]);
      return;
    }

    const currentRole = roles[index];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayText === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % roles.length);
      return;
    } else {
      const speed = isDeleting ? 40 : 80;
      const nextText = isDeleting
        ? currentRole.substring(0, displayText.length - 1)
        : currentRole.substring(0, displayText.length + 1);
      timeout = setTimeout(() => setDisplayText(nextText), speed);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, index, roles, reduceMotion]);

  return (
    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
      <span className="text-white">{displayText}</span>
      <span className="animate-pulse text-accent">|</span>
    </h1>
  );
}
```

- [ ] **Step 2: Create `components/hero/LocationBadge.tsx`**

```tsx
import { MapPin } from "lucide-react";

export function LocationBadge({ location }: { location: string }) {
  return (
    <div className="inline-flex items-center gap-2 text-muted text-sm">
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-pulse-dot rounded-full bg-accent" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
      </span>
      <MapPin className="h-4 w-4" aria-hidden="true" />
      <span>{location}</span>
    </div>
  );
}
```

- [ ] **Step 3: Create `components/hero/Hero.tsx`**

```tsx
"use client";

import { Button } from "@/components/ui/Button";
import { GridBackground } from "@/components/ui/GridBackground";
import { TypingHeadline } from "./TypingHeadline";
import { LocationBadge } from "./LocationBadge";
import { roles, valueProp, location } from "@/lib/data/hero";

export function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <GridBackground />
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <TypingHeadline roles={roles} />
        <p className="mt-4 text-lg text-muted">{valueProp}</p>
        <div className="mt-6">
          <LocationBadge location={location} />
        </div>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Button onClick={() => scrollTo("projects")}>View Work</Button>
          <Button variant="secondary" onClick={() => scrollTo("contact")}>
            Contact Me
          </Button>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 4: Wire into `app/page.tsx`**

```tsx
import { Hero } from "@/components/hero/Hero";

export default function Home() {
  return (
    <main>
      <Hero />
    </main>
  );
}
```

- [ ] **Step 5: Verify visually**

Run `npm run dev` → check localhost:3000. Typing animation cycles, CTAs visible, grid pulses.

- [ ] **Step 6: Commit**

```bash
git add -A
git commit -m "feat: hero section with typing headline, location badge, CTAs"
```

---

### Task 5: Project Cards + Projects Section

**Files:**
- Create: `components/projects/ProjectCard.tsx`
- Create: `components/projects/ProjectsSection.tsx`

**Interfaces:**
- Consumes: `projects` from `lib/data/projects.ts`, `ScrollReveal`
- Produces: `<ProjectsSection />` with id="projects"

- [ ] **Step 1: Create `components/projects/ProjectCard.tsx`**

```tsx
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
```

- [ ] **Step 2: Create `components/projects/ProjectsSection.tsx`**

```tsx
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ProjectCard } from "./ProjectCard";
import { projects } from "@/lib/data/projects";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl font-bold text-white mb-2">
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
```

- [ ] **Step 3: Wire into `app/page.tsx`**

```tsx
import { Hero } from "@/components/hero/Hero";
import { ProjectsSection } from "@/components/projects/ProjectsSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <ProjectsSection />
    </main>
  );
}
```

- [ ] **Step 4: Verify visually**

Run dev server. 4 cards in responsive grid (1/2/4 cols). Hover lifts cards.

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "feat: project cards with responsive grid section"
```

---

### Task 6: Case Study Highlight

**Files:**
- Create: `components/case-study/CaseStudyHighlight.tsx`

**Interfaces:**
- Consumes: `projects[0].caseStudy` from `lib/data/projects.ts`, `ScrollReveal`
- Produces: `<CaseStudyHighlight />`

- [ ] **Step 1: Create `components/case-study/CaseStudyHighlight.tsx`**

```tsx
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
```

- [ ] **Step 2: Wire into `app/page.tsx`**

```tsx
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
```

- [ ] **Step 3: Verify visually**

Three columns with connecting line on desktop. Stacks on mobile.

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "feat: case study highlight with problem-approach-results"
```

---

### Task 7: About Me Section

**Files:**
- Create: `components/about/AboutMe.tsx`

**Interfaces:**
- Consumes: `aboutLines` from `lib/data/about.ts`, `ScrollReveal`
- Produces: `<AboutMe />`

- [ ] **Step 1: Create `components/about/AboutMe.tsx`**

```tsx
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { aboutLines } from "@/lib/data/about";

export function AboutMe() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl font-bold text-white mb-8">About Me</h2>
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
```

- [ ] **Step 2: Wire into `app/page.tsx`**

Add `<AboutMe />` after `<CaseStudyHighlight />`.

- [ ] **Step 3: Commit**

```bash
git add -A
git commit -m "feat: about me section with 4-line summary"
```

---

### Task 8: Skills & Tools Section

**Files:**
- Create: `components/skills/SkillTag.tsx`
- Create: `components/skills/SkillsSection.tsx`

**Interfaces:**
- Consumes: `skillGroups` from `lib/data/skills.ts`, `ScrollReveal`
- Produces: `<SkillsSection />`

- [ ] **Step 1: Create `components/skills/SkillTag.tsx`**

```tsx
"use client";

import { motion, useReducedMotion } from "framer-motion";

export function SkillTag({
  skill,
  index,
}: {
  skill: string;
  index: number;
}) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return (
      <span className="px-3 py-1.5 text-sm rounded-full bg-surface border border-border text-muted">
        {skill}
      </span>
    );
  }

  return (
    <motion.span
      className="px-3 py-1.5 text-sm rounded-full bg-surface border border-border text-muted hover:border-accent hover:text-white transition-colors"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
    >
      {skill}
    </motion.span>
  );
}
```

- [ ] **Step 2: Create `components/skills/SkillsSection.tsx`**

```tsx
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
```

- [ ] **Step 3: Wire into `app/page.tsx`**

Add `<SkillsSection />` after `<AboutMe />`.

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "feat: skills section with categorized animated tags"
```

---

### Task 9: Contact Section (Form + Social Links + Footer)

**Files:**
- Create: `components/contact/ContactForm.tsx`
- Create: `components/contact/ContactSection.tsx`
- Create: `components/footer/Footer.tsx`

**Interfaces:**
- Consumes: `socialLinks` from `lib/data/hero.ts`, `ScrollReveal`, `Button`
- Produces: `<ContactSection />` with id="contact", `<Footer />`

- [ ] **Step 1: Create `components/contact/ContactForm.tsx`**

```tsx
"use client";

import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { Send, CheckCircle, Loader2 } from "lucide-react";

export function ContactForm() {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="text-center py-12">
        <CheckCircle className="h-12 w-12 text-accent mx-auto mb-4" />
        <p className="text-lg text-white">Message sent!</p>
        <p className="text-muted text-sm mt-1">
          I&apos;ll reply within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate={false}>
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-white mb-1.5"
        >
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          minLength={2}
          className="w-full px-4 py-3 bg-surface border border-border rounded-lg text-white placeholder-muted focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
          placeholder="Your name"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-white mb-1.5"
        >
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full px-4 py-3 bg-surface border border-border rounded-lg text-white placeholder-muted focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-white mb-1.5"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          minLength={50}
          rows={5}
          className="w-full px-4 py-3 bg-surface border border-border rounded-lg text-white placeholder-muted focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent resize-vertical"
          placeholder="Tell me about your project (min 50 characters)"
        />
      </div>

      <Button type="submit" disabled={status === "loading"} className="w-full">
        {status === "loading" ? (
          <span className="inline-flex items-center gap-2">
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
            Sending...
          </span>
        ) : (
          <span className="inline-flex items-center gap-2">
            <Send className="h-4 w-4" aria-hidden="true" />
            Send Message
          </span>
        )}
      </Button>

      {status === "error" && (
        <p className="text-red-400 text-sm text-center">
          Something went wrong. Try emailing directly.
        </p>
      )}
    </form>
  );
}
```

- [ ] **Step 2: Create `components/contact/ContactSection.tsx`**

```tsx
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
```

- [ ] **Step 3: Create `components/footer/Footer.tsx`**

```tsx
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
```

- [ ] **Step 4: Wire into `app/page.tsx` — final assembly**

```tsx
import { Hero } from "@/components/hero/Hero";
import { ProjectsSection } from "@/components/projects/ProjectsSection";
import { CaseStudyHighlight } from "@/components/case-study/CaseStudyHighlight";
import { AboutMe } from "@/components/about/AboutMe";
import { SkillsSection } from "@/components/skills/SkillsSection";
import { ContactSection } from "@/components/contact/ContactSection";
import { Footer } from "@/components/footer/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <ProjectsSection />
      <CaseStudyHighlight />
      <AboutMe />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
```

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "feat: contact section with form, social links, footer"
```

---

### Task 10: SEO + Structured Data + Final Polish

**Files:**
- Modify: `app/layout.tsx` (add JSON-LD)
- Modify: `app/page.tsx` (verify section order)

**Interfaces:**
- Consumes: all section components from Tasks 4-9
- Produces: production-ready page

- [ ] **Step 1: Add JSON-LD structured data to `app/layout.tsx`**

Add inside `<body>` before `{children}`:

```tsx
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Prem Patel",
  url: "https://ignitfury.dev",
  jobTitle: "MERN Stack Developer",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Mumbai",
    addressCountry: "IN",
  },
  sameAs: [
    "https://github.com/ignitfury",
    "https://linkedin.com/in/ignitfury",
    "https://twitter.com/ignitfury",
  ],
};

<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
/>
```

- [ ] **Step 2: Run production build**

```bash
npm run build
```

Expected: Build succeeds, no errors

- [ ] **Step 3: Run type check**

```bash
npx tsc --noEmit
```

Expected: No errors

- [ ] **Step 4: Verify all 7 sections render in order**

Hero → Projects → Case Study → About → Skills → Contact → Footer

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "feat: add JSON-LD structured data, verify production build"
```

---

## Post-Plan Checklist

- [ ] All 6 spec sections implemented
- [ ] Typing headline cycles 4 roles
- [ ] 4 project cards with hover effects
- [ ] Case study 3-column with connecting lines
- [ ] About 4 lines
- [ ] Skills 5 categories with staggered animation
- [ ] Contact form with validation
- [ ] Social links in contact + footer
- [ ] Grid background animating
- [ ] Responsive: mobile / tablet / desktop
- [ ] `prefers-reduced-motion` respected
- [ ] Production build passes
- [ ] TypeScript strict passes

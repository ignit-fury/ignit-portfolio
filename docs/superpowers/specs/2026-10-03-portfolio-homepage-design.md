# Portfolio Homepage Design Specification

**Date**: 2026-10-03  
**Project**: ignit-portfolio  
**Author**: Prem Patel (ignitfury)  
**Status**: Approved for implementation

---

## 1. Project Overview

A responsive, mobile-first portfolio homepage for a student/freelance MERN stack developer based in Mumbai, India. Goal: recruiters can scan in under 30 seconds, showcase measurable impact, drive contact inquiries.

**Vibe**: Modern tech, professional, clean, human  
**Color Palette**: Dark background `#0F172A`, accent `#4F46E5`, subtle grid lines  
**No stock photography** — clean micro-interactions, smooth scroll animations

---

## 2. Section Specifications

### 2.1 Hero Section
- **Animated typing headline** cycling every 3s with cross-fade:
  1. `Student / Freelancer`
  2. `MERN Stack Developer`
  3. `Product Builder`
  4. `Open Source Contributor`
- **Value proposition**: `A enthusiastic dev` (muted accent color, single line)
- **Location badge**: `📍 Mumbai, India • IST (UTC+5:30)` with subtle pulse
- **CTA Buttons**:
  - Primary: `View Work` → scrolls to Projects section
  - Secondary: `Contact Me` → scrolls to Contact section
- **Background**: `#0F172A` with animated CSS grid lines (opacity animation)

### 2.2 Featured Projects (4 cards)
Responsive grid: 1-col mobile, 2-col tablet, 4-col desktop.

| Project | Problem | Impact | Stack | Links |
|---------|---------|--------|-------|-------|
| **TaskFlow** (Case Study) | Teams waste 30% time on context switching | 40% faster task completion | React, Node, Express, MongoDB, Socket.io | [Live] [Code] |
| **DevPulse** | No visibility into code health across repos | 500+ repos analyzed | Next.js, TypeScript, Tailwind, Prisma, GitHub API | [Live] [Code] |
| **SplitSmart** | Splitting expenses in groups is manual/error-prone | 200+ active groups | React Native, Expo, Firebase, Stripe | [App Store] [Code] |
| **CodeVault** | Snippets scattered across gists/notebooks | 1.2k snippets saved | MERN + Monaco Editor, Redis | [Live] [Code] |

**Card components**:
- Thumbnail: Generated SVG placeholder (project-specific icon)
- Problem: 1 line, muted text
- Impact metric: Bold, accent color
- Stack tags: Pill badges (3-5 per project)
- Links: Dual buttons (Live Demo / View Code)

**Interactions**: Hover/tap → lift (translateY -4px), border glow (accent), thumbnail scale (1.02x)

### 2.3 Case Study Highlight (TaskFlow)
3-column layout with animated connecting line on scroll reveal.

- **Problem**: Distributed teams lose 30% productivity to context switching between Slack, Jira, Notion
- **Approach**: Real-time unified dashboard with WebSocket sync, smart notifications, keyboard-first UX
- **Results**: 40% faster task completion, 60% fewer context switches, adopted by 3 freelance clients

### 2.4 About Me (4 lines)
1. `Student turned freelancer — building products since 2022`
2. `MERN stack specialist, obsessed with clean DX and performance`
3. `Love shipping: 12+ projects, 3 production apps, 500+ GitHub stars`
4. `Open source contributor • Mumbai-based • Always learning`

### 2.5 Skills & Tools (Categorized Tags)
**Groups with staggered scroll-in animation**:

- **Frontend**: React, Next.js, TypeScript, Tailwind CSS, Redux Toolkit
- **Backend**: Node.js, Express, MongoDB, PostgreSQL, Prisma
- **Real-time**: Socket.io, WebSockets, Firebase, Server-Sent Events
- **DevOps**: Docker, Vercel, GitHub Actions, AWS (basics)
- **Tools**: Git, VS Code, Figma, Postman, Chrome DevTools

### 2.6 Contact Section (SEO-Optimized)
- **Form fields** (all required):
  - Name (text)
  - Email (email, validation)
  - Message (textarea, min 50 chars)
- **Submit**: `Send Message` → Formspree/Netlify Forms endpoint
- **Direct links**: GitHub, LinkedIn, Twitter/X, Email (mailto: with subject prefill)
- **Micro-copy**: `I reply within 24 hours. Let's build something.`
- **SEO**: Structured data for `ContactPage`, `mailto:` links

---

## 3. Technical Architecture

### 3.1 Stack
- **Framework**: Next.js 14 (App Router) + TypeScript
- **Styling**: Tailwind CSS (custom config)
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel
- **Forms**: Formspree or Netlify Forms (no backend)

### 3.2 Custom Components (No external UI libs)
- `TypingHeadline` — animated role cycler
- `ProjectCard` — project showcase card
- `CaseStudyColumn` — 3-column case study layout
- `SkillTag` — animated pill badge
- `ContactForm` — validated form with honeypot
- `GridBackground` — animated CSS grid

### 3.3 File Structure
```
ignit-portfolio/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── hero/
│   │   ├── Hero.tsx
│   │   ├── TypingHeadline.tsx
│   │   └── LocationBadge.tsx
│   ├── projects/
│   │   ├── ProjectsSection.tsx
│   │   └── ProjectCard.tsx
│   ├── case-study/
│   │   └── CaseStudyHighlight.tsx
│   ├── about/
│   │   └── AboutMe.tsx
│   ├── skills/
│   │   ├── SkillsSection.tsx
│   │   └── SkillTag.tsx
│   ├── contact/
│   │   ├── ContactSection.tsx
│   │   └── ContactForm.tsx
│   └── ui/
│       ├── Button.tsx
│       ├── GridBackground.tsx
│       └── ScrollReveal.tsx
├── lib/
│   ├── data/
│   │   ├── projects.ts
│   │   ├── skills.ts
│   │   └── about.ts
│   └── utils/
│       └── scroll.ts
├── public/
│   └── (no images - SVG placeholders inline)
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## 4. Responsive Breakpoints
- **Mobile**: `< 640px` — 1-col projects, stacked hero CTAs, stacked case study
- **Tablet**: `640-1024px` — 2-col projects, 2-col case study
- **Desktop**: `> 1024px` — 4-col projects, 3-col case study

---

## 5. Animation Specifications

| Element | Animation | Trigger | Duration |
|---------|-----------|---------|----------|
| Typing headline | Character-by-character + cross-fade | Mount | 3s cycle |
| Grid background | Opacity pulse | Continuous | 8s loop |
| Section reveal | Fade + slide up (20px) | Scroll (IntersectionObserver) | 0.6s |
| Skill tags | Staggered fade + scale | Scroll | 0.4s each (0.1s delay) |
| Project cards | Lift + border glow | Hover/tap | 0.2s |
| Case study line | Draw path (stroke-dashoffset) | Scroll | 1s |
| Form submit | Button spinner → checkmark | Click | 0.3s |

---

## 6. Performance Targets
- **LCP**: < 1.5s
- **CLS**: < 0.1
- **TBT**: < 100ms
- **Static generation** for all content
- **No external images** — inline SVG placeholders
- **Code splitting**: Automatic via Next.js

---

## 7. Accessibility
- Semantic HTML5 (header, main, section, footer)
- ARIA labels on interactive elements
- Focus visible states (accent ring)
- Color contrast: WCAG AA minimum
- Reduced motion: respects `prefers-reduced-motion`
- Keyboard navigable

---

## 8. SEO & Metadata
- **Title**: `Prem Patel — MERN Stack Developer & Product Builder`
- **Description**: `Student turned freelancer building scalable products with React, Node, MongoDB. 12+ projects, 3 production apps. Based in Mumbai.`
- **Open Graph**: Portfolio image (generated), type: profile
- **Structured Data**: `Person`, `ContactPage`, `WebSite`
- **Sitemap**: Auto-generated via next-sitemap

---

## 9. Implementation Phases

### Phase 1: Foundation (Day 1)
- Next.js + TypeScript + Tailwind setup
- Tailwind config (colors, fonts, animations)
- Global CSS (grid background, scroll behavior)
- Base UI components (Button, ScrollReveal)

### Phase 2: Hero & Layout (Day 1-2)
- Hero section with TypingHeadline
- Location badge with pulse
- CTA buttons with smooth scroll
- Responsive container layout

### Phase 3: Projects & Case Study (Day 2-3)
- Project data file (projects.ts)
- ProjectCard component with hover states
- ProjectsSection responsive grid
- CaseStudyHighlight with animated line

### Phase 4: About & Skills (Day 3)
- AboutMe component (4 lines)
- SkillsSection with categorized tags
- SkillTag staggered animation

### Phase 5: Contact & Polish (Day 3-4)
- ContactForm with validation
- Formspree/Netlify integration
- Social links footer
- SEO metadata + structured data
- Performance audit + fixes

### Phase 6: Deploy & Verify (Day 4)
- Vercel deployment
- Lighthouse audit
- Cross-browser test
- Mobile device test

---

## 10. Self-Review Checklist

- [x] No placeholder text (TBD/TODO) — all content specified
- [x] Internal consistency — sections flow logically
- [x] Scope focused — single portfolio page, no extra features
- [x] No ambiguity — all measurements, colors, animations specified
- [x] Ponytail compliance — no external UI libs, minimal deps
- [x] Accessibility addressed
- [x] Performance targets defined
- [x] Responsive breakpoints specified
- [x] Deployment target clear (Vercel)

---

## 11. Approval

**Design approved by user**: ✅  
**Ready for implementation plan**: ✅

*Next step: Invoke writing-plans skill to create detailed implementation plan.*
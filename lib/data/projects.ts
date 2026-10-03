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

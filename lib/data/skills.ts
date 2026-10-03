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

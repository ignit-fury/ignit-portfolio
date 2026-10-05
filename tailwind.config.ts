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
        background: "#141210",
        accent: "#BFA181",
        "accent-hover": "#D4B891",
        surface: "#1E1A17",
        border: "#33302B",
        muted: "#A89B8B",
        // Warm white — overrides Tailwind's #FFF so text-white reads warm
        white: "#F4F1EC",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-fraunces)", "Georgia", "serif"],
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

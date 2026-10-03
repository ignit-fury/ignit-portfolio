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

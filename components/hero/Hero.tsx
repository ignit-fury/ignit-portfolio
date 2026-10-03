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

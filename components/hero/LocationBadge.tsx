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

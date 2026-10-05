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
      ? "bg-accent hover:bg-accent-hover text-background hover:-translate-y-0.5"
      : "border border-border hover:border-accent text-white hover:-translate-y-0.5";

  return (
    <button className={`${base} ${styles} ${className}`} {...props}>
      {children}
    </button>
  );
}

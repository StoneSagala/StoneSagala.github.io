import { clsx } from "clsx";
import Link from "next/link";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "outline" | "ghost";
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  children,
  href,
  variant = "primary",
  className,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors duration-200";

  const variants = {
    primary: "bg-accent text-bg-primary hover:bg-accent-hover",
    outline:
      "border border-border text-text-primary hover:border-border-hover hover:bg-bg-secondary",
    ghost: "text-text-secondary hover:text-text-primary hover:bg-bg-secondary",
  };

  const styles = clsx(baseStyles, variants[variant], className);

  if (href) {
    const isExternal = href.startsWith("http") || href.startsWith("mailto:");
    return (
      <Link
        href={href}
        className={styles}
        {...(isExternal
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {children}
      </Link>
    );
  }

  return (
    <button className={styles} {...props}>
      {children}
    </button>
  );
}

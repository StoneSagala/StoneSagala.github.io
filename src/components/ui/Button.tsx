import { clsx } from "clsx";
import Link from "next/link";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "outline" | "ghost";
  className?: string;
  download?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  children,
  href,
  variant = "primary",
  className,
  download,
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
        {...(download ? { download: true } : {})}
        {...(isExternal && !download
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {children}
        {isExternal && !download && <span className="sr-only">(opens in new tab)</span>}
      </Link>
    );
  }

  return (
    <button className={styles} {...props}>
      {children}
    </button>
  );
}

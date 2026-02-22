import Link from "next/link";

const socialLinks = [
  { href: "https://linkedin.com/in/stonesagala", label: "LinkedIn" },
  { href: "mailto:stonesagala@gmail.com", label: "Email" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-bg-primary">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-12 md:flex-row lg:px-8">
        <p className="font-mono text-sm text-text-tertiary">
          &copy; {new Date().getFullYear()} Stone Sagala
        </p>

        <div className="flex items-center gap-6">
          {socialLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-text-secondary transition-colors hover:text-accent"
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={
                link.href.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}

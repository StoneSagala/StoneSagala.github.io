import { clsx } from "clsx";

export default function Container({
  children,
  className,
  as: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}) {
  return (
    <Tag className={clsx("mx-auto max-w-7xl px-6 lg:px-8", className)}>
      {children}
    </Tag>
  );
}

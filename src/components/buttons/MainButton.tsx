export default function MainButton({
  children,
  href,
  variant = "primary",
  target = "blank",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "secondary" | "primary";
  target: string;
}) {
  return (
    <a
      className={`uppercase max-w-[187px] font-bold border-gradient py-4 px-8 ${variant}`}
      href={href}
      target={target}
      rel="noopener noreferrer"
    >
      <span className={variant === "secondary" ? "text-gradient" : ""}>
        {children}
      </span>
    </a>
  );
}

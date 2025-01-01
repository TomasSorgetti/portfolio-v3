export default function MainButton({
  children,
  href,
  variant = "primary",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "secondary" | "primary";
}) {
  return (
    <a
      className={`uppercase max-w-[187px] font-bold border-gradient py-4 px-8 ${variant}`}
      href={href}
    >
      <span className={variant === "secondary" ? "text-gradient" : ""}>
        {children}
      </span>
    </a>
  );
}

export default function MainButton({
  children,
  href,
  variant = "primary",
  target = "_self",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "secondary" | "primary";
  target?: "_blank" | "_self";
}) {
  return (
    <a
      className={`uppercase font-bold max-w-[187px] border-gradient py-4 px-8 ${variant} hover:shadow-[0px_0px_20px_0px_rgba(255,255,255,0.1)]`}
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

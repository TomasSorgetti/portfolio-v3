import "./GradientText.css";

interface IGradientTextProps {
  children: React.ReactNode;
  className?: string;
  colors?: string[];
  animationSpeed?: number;
  showBorder?: boolean;
}
export default function GradientText({
  children,
  className = "",
  colors = ["#e020f1", "#30c2e2"],
  animationSpeed = 20,
}: IGradientTextProps) {
  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, ${colors.join(", ")})`,
    animationDuration: `${animationSpeed}s`,
  };

  return (
    <div className={`animated-gradient-text ${className}`}>
      <div className="text-content" style={gradientStyle}>
        {children}
      </div>
    </div>
  );
}

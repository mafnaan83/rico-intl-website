import React from "react";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon: Icon,
  title,
  description,
  className = "",
}) => {
  return (
    <div
      className={`bg-zinc-800/30 backdrop-blur-sm border border-zinc-700/30 rounded-2xl p-6 hover:bg-zinc-700/40 transition-all duration-300 hover:scale-105 ${className}`}
    >
      <div className="mb-4">
        <Icon className="w-8 h-8 text-zinc-200" />
      </div>
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-zinc-300 leading-relaxed">{description}</p>
    </div>
  );
};

export default FeatureCard;

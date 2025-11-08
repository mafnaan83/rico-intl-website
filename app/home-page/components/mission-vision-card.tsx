import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface MissionVisionCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

export const MissionVisionCard = ({
  icon: Icon,
  title,
  description,
  delay = 0,
}: MissionVisionCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className="flex flex-col gap-4"
    >
      <div className="flex items-center gap-3">
        <Icon className="w-8 h-8 text-black" strokeWidth={1.5} />
        <h2 className="text-3xl text-black md:text-4xl font-bold text-accent">
          {title}
        </h2>
      </div>
      <p className="text-base text-black md:text-lg text-muted-foreground leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
};

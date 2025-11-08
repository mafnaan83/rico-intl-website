import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface CoreValueProps {
  icon: LucideIcon;
  label: string;
  delay?: number;
}

export const CoreValue = ({ icon: Icon, label, delay = 0 }: CoreValueProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="flex flex-col items-center gap-3 text-primary-foreground"
    >
      <Icon className="w-4 h-4 md:w-8 md:h-8" strokeWidth={1.5} />
      <span className="text-sm md:text-base font-medium">{label}</span>
    </motion.div>
  );
};

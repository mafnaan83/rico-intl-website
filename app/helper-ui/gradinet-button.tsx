"use client";

import { motion } from "framer-motion";

interface GradientButtonProps {
  label: string;
  onClick?: () => void;
  showArrow?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export default function GradientButton({
  label,
  onClick,
  showArrow = false,
  className = "",
  type = "button",
  disabled = false,
}: GradientButtonProps) {
  return (
    <motion.button
      whileHover={{
        scale: disabled ? 1 : 1.02,
        boxShadow: disabled ? "none" : "0px 4px 6px rgba(0,0,0,0.15)",
      }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
      onClick={!disabled ? onClick : undefined}
      disabled={disabled}
      type={type}
      className={`flex items-center gap-2 px-6 py-2 text-white bg-linear-to-r from-zinc-600 via-zinc-700 to-zinc-800 rounded-lg shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-zinc-400 disabled:opacity-60 disabled:cursor-not-allowed ${className}`}
    >
      {label}
      {showArrow && <span className="ml-1">→</span>}
    </motion.button>
  );
}

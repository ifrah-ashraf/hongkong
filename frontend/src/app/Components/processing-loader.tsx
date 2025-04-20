"use client";

import { motion } from "framer-motion";

interface ProcessingLoaderProps {
  size?: "sm" | "md" | "lg";
}

export default function ProcessingLoader({
  size = "md",
}: ProcessingLoaderProps) {
  const sizeClasses = {
    sm: "h-24",
    md: "h-32",
    lg: "h-48",
  };

  const barCount = 12;
  const bars = Array.from({ length: barCount }, (_, i) => i);

  return (
    <div
      className={`flex items-center justify-center ${sizeClasses[size]} w-full`}
    >
      <div className="flex items-end justify-center gap-1 h-24 w-48">
        {bars.map((i) => (
          <motion.div
            key={i}
            className="w-2 bg-gradient-to-t from-teal-500 to-emerald-500 rounded-t-sm"
            initial={{ height: 10 }}
            animate={{
              height: [10, 40, 10],
              transition: {
                duration: 1.5,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.1,
                ease: "easeInOut",
              },
            }}
          />
        ))}
      </div>
      <div className="absolute">
        <motion.div
          className="text-teal-600 font-medium"
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 1, 0],
            transition: {
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            },
          }}
        >
          Processing Audio...
        </motion.div>
      </div>
    </div>
  );
}

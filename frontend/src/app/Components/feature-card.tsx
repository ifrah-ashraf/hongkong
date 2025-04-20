"use client";

import type { ReactNode } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function FeatureCard({
  icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300, damping: 10 }}
    >
      <Card className="bg-white border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-500 to-emerald-500"></div>
        <CardContent className="p-6">
          <div className="mb-4 rounded-full bg-teal-50 p-3 inline-block">
            {icon}
          </div>
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-slate-600">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}

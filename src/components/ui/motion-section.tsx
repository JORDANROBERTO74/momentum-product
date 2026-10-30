"use client";

import { motion } from "framer-motion";
import { fadeUp, motionTransition, viewportOnce } from "@/lib/landing-motion";
import { cn } from "@/lib/cn";

export function MotionSection({
  className,
  children,
  delay = 0,
}: {
  className?: string;
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={fadeUp}
      transition={{ ...motionTransition, delay }}
    >
      {children}
    </motion.div>
  );
}

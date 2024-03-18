"use client"
import { motion } from "framer-motion";

const MotionBtn = ({ children }: { children: React.ReactNode }) => (
    <motion.div
    initial={{ y: 200, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    exit={{ y: 300, opacity: 0 }}
    transition={{
      type: "spring",
      stiffness: 600,
      damping: 100,
    }}
  >
    {children}
  </motion.div>
);
export default MotionBtn;

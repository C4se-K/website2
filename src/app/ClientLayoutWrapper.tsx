"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

export default function ClientLayoutWrapper({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  useEffect(() => {
    router.prefetch("/bio");
    router.prefetch("/");
  }, [router]);
  
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={Math.random()}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="min-h-screen"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

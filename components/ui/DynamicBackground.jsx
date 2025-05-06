'use client';

import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

const Particle = ({ x, y, size, delay }) => {
  return (
    <motion.div
      className="absolute rounded-full bg-purple-200/30"
      initial={{ opacity: 0 }}
      animate={{
        opacity: [0, 0.3, 0],
        y: [y, y - 100],
        x: [x, x + (Math.random() * 40 - 20)]
      }}
      transition={{
        duration: 10 + Math.random() * 10,
        repeat: Infinity,
        repeatType: "loop",
        delay: delay,
        ease: "linear"
      }}
      style={{
        width: size,
        height: size,
        left: x,
        top: y
      }}
    />
  );
};

export default function DynamicBackground() {
  const [isDesktop, setIsDesktop] = useState(false);
  const scrollY = useMotionValue(0);
  const gradientEnd = useTransform(scrollY, [0, 500], [0.3, 0.7]);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768);
    };
    
    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", () => scrollY.set(window.scrollY));
    
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", () => scrollY.set(window.scrollY));
    };
  }, []);

  if (!isDesktop) {
    return (
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-indigo-50 to-purple-50" />
    );
  }

  return (
    <motion.div 
      className="fixed inset-0 z-0"
      style={{
        background: `linear-gradient(
          135deg, 
          rgba(224, 231, 255, 1) 0%, 
          rgba(221, 214, 254, ${gradientEnd}) 100%`
      }}
      animate={{
        background: [
          `linear-gradient(135deg, rgba(224, 231, 255, 1) 0%, rgba(221, 214, 254, 0.3) 100%`,
          `linear-gradient(145deg, rgba(224, 231, 255, 1) 0%, rgba(214, 219, 254, 0.5) 100%`,
          `linear-gradient(125deg, rgba(224, 231, 255, 1) 0%, rgba(221, 214, 254, 0.3) 100%`
        ]
      }}
      transition={{
        duration: 15,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "linear"
      }}
    >
      {Array.from({ length: 15 }).map((_, i) => (
        <Particle
          key={i}
          x={`${Math.random() * 100}%`}
          y={`${Math.random() * 100}%`}
          size={`${Math.random() * 6 + 4}px`}
          delay={Math.random() * 5}
        />
      ))}
    </motion.div>
  );
}
"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import {
  Briefcase,
  Hammer,
  Dumbbell,
  Coffee,
  Home,
  Shirt,
  Wrench,
  Plane,
} from "lucide-react";
import Link from "next/link";

export function HorizontalCategoryScroll({ categories }) {
  const controls = useAnimation();
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });

  const categoryIcons = {
    "Auto Repair": <Wrench className="size-6 md:size-8" />,
    "Retail Electronics": <Briefcase className="size-6 md:size-8" />,
    "Real Estate": <Home className="size-6 md:size-8" />,
    "Home Services": <Hammer className="size-6 md:size-8" />,
    "Café": <Coffee className="size-6 md:size-8" />,
    "Travel Agency": <Plane className="size-6 md:size-8" />,
    "IT Services": <Briefcase className="size-6 md:size-8" />,
    "Spa & Wellness": <Dumbbell className="size-6 md:size-8" />,
    "Fashion": <Shirt className="size-6 md:size-8" />,
    "Fitness": <Dumbbell className="size-6 md:size-8" />,
  };

  useEffect(() => {
    if (isInView) {
      const totalWidth = containerRef.current?.scrollWidth || 0;
      controls.start({
        x: [0, -totalWidth / 2],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          },
        },
      });
    }
  }, [isInView, controls]);

  return (
    <div className="relative  w-full overflow-x-hidden py-6  ">
      <motion.div
        ref={containerRef}
        animate={controls}
        className="flex gap-4 w-max"
      >
        {[...categories, ...categories].map((category, index) => (
          <BusinessTypeCard
            key={`${category.name}-${index}`}
            type={category.name}
            icon={
              categoryIcons[category.name] || <Briefcase className="w-8 h-8" />
            }
            slug={category.slug}
          />
        ))}
      </motion.div>
    </div>
  );
}

function BusinessTypeCard({ type, icon, slug }) {
  return (
    <>
      <Link href={`/category/${slug}`}>
        <motion.div
      
          whileTap={{ scale: 0.97 }}
          className="flex-shrink-0 py-2 bg-white/10 backdrop-blur-lg rounded-full flex flex-col items-center justify-center text-white text-center px-4 mx-2 hover:scale-105 transition-all duration-300 "
        >
          <div className="flex gap-2 items-center justify-center">
            {icon}
            <p className="text-sm font-medium">{type}</p>
          </div>
        </motion.div>
      </Link>
    </>
  );
}

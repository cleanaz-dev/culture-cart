"use client";
import { Button } from "@/components/ui/button";
import { Search, MapPin, Menu } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { businesses } from "@/lib/constants/businesses";
import { HorizontalCategoryScroll} from "@/components/landing-page/AutoScrollCategories";
import { lobster } from "./fonts";



const uniqueCategories = [...new Set(businesses.map(b => b.category))];


export default function page() {
  // Smoother animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.3,
      },
    },
  };

  const letter = {
    hidden: {
      opacity: 0,
      y: 20,
      rotateX: 90,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 12,
        mass: 0.5,
      },
    },
  };

  return (
    <main className="relative h-screen w-full bg-black text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://res.cloudinary.com/dmllgn0t7/image/upload/v1746230284/hero-01_d0vocj.png"
          alt="Black-owned businesses"
          fill
          className="object-cover opacity-70"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Header */}
      <header className="relative z-10 flex justify-between p-4">
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full bg-white/10"
        >
          <Menu />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full bg-white/10"
        >
          <Search />
        </Button>
      </header>

      {/* Content */}
      <section className="relative z-10 flex h-[calc(100%-80px)] flex-col items-center justify-center px-6 text-center">
        <div className="max-w-md">
          {/* App Name - Smoother Animation */}
          <motion.div
            className={`mb-6 text-7xl font-bold tracking-tight ${lobster.className}`}
            variants={container}
            initial="hidden"
            animate="visible"
          >
            {"Culture Cart".split("").map((char, i) => (
              <motion.span
                key={i}
                variants={letter}
                className="inline-block origin-bottom"
                style={{
                  color: i >= 7 ? "#f59e0b" : "white",
                  textShadow: "0 2px 8px rgba(0,0,0,0.3)",
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.div>

          {/* Rest of content with staggered entrance */}
          <div>
            <h1 className="mb-4 text-4xl font-bold">
              Discover <span className="text-amber-400">Black-Owned</span>{" "}
              Businesses
            </h1>
            <p className="mb-8 text-gray-200">
              Support your community by finding local Black-owned businesses.
            </p>

            {/* Location Search */}
            <div className="relative w-full">
              <div className="flex h-14 items-center rounded-full bg-white/10 px-4 backdrop-blur-md">
                <MapPin className="mr-2 text-amber-400" />
                <input
                  type="text"
                  placeholder="Your location"
                  className="w-full bg-transparent text-white placeholder-gray-400 focus:outline-none"
                />
              </div>
            </div>

          <div>
          
          </div>
          </div>
        
        </div>
        <div className="md:mt-20 w-[95%] md:w-[80%]">
        <HorizontalCategoryScroll categories={uniqueCategories} />
        </div>
      </section>
     
    </main>
  );
}

'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import { FaFistRaised } from "react-icons/fa";
import { FiMapPin, FiClock } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import { Menu, Search } from "lucide-react";

export default function CategoryPage({ categoryName, filtered }) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  return (
    <main className="relative min-h-screen w-full bg-black text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://res.cloudinary.com/dmllgn0t7/image/upload/v1746230284/hero-01_d0vocj.png"
          alt="Background texture"
          fill
          className="object-cover opacity-70"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Header */}
      <header className="relative z-10 flex justify-between p-4">
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20"
        >
          <Menu className="text-amber-400" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20"
        >
          <Search className="text-amber-400" />
        </Button>
      </header>

      {/* Content */}
      <motion.section 
        className="relative z-10 h-[calc(100%-80px)] flex flex-col items-center justify-start pt-12 px-6"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Category Title */}
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-6 text-center"
          variants={item}
        >
          <span className="text-amber-400">{categoryName}</span> Businesses
        </motion.h1>

        {/* Business Grid */}
        <motion.div 
          className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4"
          variants={container}
        >
          {filtered.map((biz) => (
            <motion.article
              key={biz.id}
              className="group relative bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-amber-400/30 transition-all"
              variants={item}
          
            >
              {/* Business Image */}
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={biz.images.main}
                  alt={biz.name}
                  fill
                  className="object-cover  transition-transform"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              </div>

              {/* Business Info */}
              <div className="p-4">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h2 className="text-xl font-semibold text-white mb-1">{biz.name}</h2>
                    <p className="text-gray-300 flex items-center gap-1.5 text-sm">
                      <FiMapPin className="text-amber-400" />
                      {biz.address}
                    </p>
                  </div>
                
                </div>

                <p className="mt-3 text-gray-300 text-sm line-clamp-2">{biz.description}</p>
                
                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    <FaFistRaised className="w-4 h-4" />
                    <span className="text-sm">4.8 (24)</span>
                  </div>
                  <Button 
                    variant="ghost"
                    className="px-3 py-1.5 text-sm bg-amber-400/10 hover:bg-amber-400/20 text-amber-400"
                  >
                    View
                  </Button>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </motion.section>
    </main>
  );
}
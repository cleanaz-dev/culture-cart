'use client';

import { motion } from 'framer-motion';

export default function BusinessTypeCard({ type, icon }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      className="flex-shrink-0 w-40 h-40 bg-white/10 backdrop-blur-lg rounded-xl flex flex-col items-center justify-center text-white text-center px-4 mx-2 transition-all"
    >
      <div className="text-4xl mb-2">{icon}</div>
      <p className="text-sm font-medium">{type}</p>
    </motion.div>
  );
}

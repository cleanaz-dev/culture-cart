'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

export default function BusinessCard({ business }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
    >
      <Card className="overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-xl transition-shadow duration-300">
        <div className="relative h-48 w-full">
          <Image
            src={business.images.main}
            alt={business.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
            priority
          />
        </div>

        <CardContent className="p-5 space-y-2">
          <h3 className="text-xl font-bold text-gray-900">{business.name}</h3>
          <p className="text-sm text-gray-500">{business.category}</p>
          <p className="text-sm text-gray-600">{business.address}</p>
          <p className="text-sm text-gray-700 line-clamp-3">{business.description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}

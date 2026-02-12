'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

interface Props {
  name: string;
  desc: string;
  image: string;
  href: string;
  specialty: string;
  ambiance: string;
  index: number;
}

export default function RestaurantCard({ name, desc, image, href, specialty, ambiance, index }: Props) {
  return (
    <Link href={href}>
      <motion.div
        initial={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.02 }}
        className="group relative h-[500px] w-full overflow-hidden cursor-pointer rounded-lg"
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-105 brightness-[0.6]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
        </div>

        {/* Content Overlay */}
        <div className="absolute inset-0 z-10 p-10 flex flex-col justify-end">
          <span className="text-[#D4AF37] text-[10px] uppercase tracking-[0.4em] font-bold mb-3 block">
            {specialty}
          </span>
          
          <h3 className="text-4xl font-serif text-white mb-4 tracking-tighter">
            {name}
          </h3>
          
          <p className="text-white/60 text-sm max-w-xs mb-6 font-light leading-relaxed">
            {desc}
          </p>

          <div className="flex items-center gap-3 text-white/50 group-hover:text-[#D4AF37] transition-colors">
             <div className="w-10 h-px bg-white/10 group-hover:w-16 group-hover:bg-[#D4AF37] transition-all duration-500" />
             <span className="text-[10px] uppercase tracking-[0.3em] font-medium">Ver Espaço</span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}

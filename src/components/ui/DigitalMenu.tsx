'use client';

import { motion } from 'framer-motion';
import { Utensils, Zap, Award } from 'lucide-react';
import { menus } from '@/data/menus';
import { useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';
import Image from 'next/image';

interface MenuItem {
  name: string;
  price: string;
  description: string;
}

interface DigitalMenuProps {
  restaurantId: string;
}

export default function DigitalMenu({ restaurantId }: DigitalMenuProps) {
  const menuData = (menus as any)[restaurantId];
  const tiltRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Filter out nulls and apply tilt
    const elements = tiltRefs.current.filter(Boolean) as HTMLElement[];
    if (elements.length > 0) {
      VanillaTilt.init(elements, {
        max: 15,
        speed: 400,
        glare: true,
        "max-glare": 0.3,
        scale: 1.05
      });
    }
    
    // Cleanup
    return () => {
      elements.forEach((el: any) => el.vanillaTilt?.destroy());
    };
  }, [menuData]);

  if (!menuData || Object.keys(menuData).length === 0) {
    return (
      <div className="w-full flex flex-col items-center justify-center py-32 space-y-4">
        <div className="w-12 h-12 border-2 border-[#D4AF37] border-t-transparent rounded-full animate-spin" />
        <p className="text-white/20 uppercase tracking-[0.5em] text-[10px]">Sincronizando com a cozinha...</p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-5xl mx-auto py-12">
      <div className="space-y-32">
        {Object.entries(menuData).map(([category, items]: [string, any], catIdx) => (
          <div key={category} className="space-y-16">
            <div className="relative">
              <h3 className="text-[#D4AF37] font-serif text-3xl md:text-5xl flex items-center gap-6">
                <Utensils size={32} className="opacity-60 text-white" /> {category}
              </h3>
              <div className="absolute -bottom-6 left-0 w-32 h-0.5 bg-gradient-to-r from-[#D4AF37] to-transparent" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {items.map((item: MenuItem, idx: number) => {
                const globalIndex = catIdx * 10 + idx;
                return (
                  <motion.div 
                    key={item.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 + catIdx * 0.2 }}
                    ref={el => { if (el) tiltRefs.current[globalIndex] = el }}
                    className="group relative bg-white/[0.03] backdrop-blur-md border border-white/5 rounded-xl overflow-hidden shadow-2xl hover:shadow-[0_20px_50px_rgba(212,175,55,0.15)] transition-shadow duration-500 h-full flex flex-col justify-between"
                    data-tilt
                    data-tilt-perspective="1000"
                  >
                    {/* Dish Image - High Visibility with Fallback Logic */}
                    <div className="h-48 relative overflow-hidden group-hover:brightness-110 transition-all duration-500">
                        <img 
                          src={`/images/${restaurantId}-dish.jpg`}
                          onError={(e) => {
                            e.currentTarget.src = `/images/${restaurantId}-hero.jpg`;
                          }}
                          alt={item.name}
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
                        <div className="absolute top-4 right-4 bg-[#D4AF37] text-black text-[10px] font-bold px-3 py-1 rounded-sm uppercase tracking-wider shadow-lg z-10">
                            {item.price}
                        </div>
                    </div>

                    <div className="p-8 flex flex-col flex-grow">
                        <h4 className="text-xl font-serif text-white group-hover:text-[#D4AF37] transition-colors duration-300 uppercase tracking-wide mb-4 leading-snug">
                          {item.name}
                        </h4>
                        <p className="text-white/40 text-sm leading-relaxed font-light italic flex-grow">
                          {item.description}
                        </p>
                        
                        <div className="mt-8 pt-6 border-t border-white/5 flex justify-between items-center text-[10px] uppercase tracking-[0.2em] text-[#D4AF37]/50 group-hover:text-[#D4AF37] transition-colors">
                            <span>Recomendado</span>
                            <Zap size={12} fill="currentColor" />
                        </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-40 p-12 border border-white/5 bg-white/[0.01] backdrop-blur-3xl rounded-2xl flex flex-col md:row items-center gap-12 text-center md:text-left relative overflow-hidden group"
      >
        <div className="p-6 bg-[#D4AF37]/10 rounded-full text-[#D4AF37]">
          <Award size={48} strokeWidth={1.5} />
        </div>
        <div>
          <h4 className="text-2xl font-serif text-white mb-4">Assinatura José Avillez</h4>
          <p className="text-white/40 text-lg leading-relaxed font-light italic">
            "No Bairro, celebramos a vida através dos melhores produtos da nossa costa. Cada ingrediente conta uma história de dedicação e frescura."
          </p>
        </div>
      </motion.div>
    </div>
  );
}

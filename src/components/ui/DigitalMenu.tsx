'use client';

import { motion } from 'framer-motion';
import { Utensils, Zap, Award } from 'lucide-react';
import { menus } from '@/data/menus';

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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-24">
        {Object.entries(menuData).map(([category, items]: [string, any], catIdx) => (
          <div key={category} className="space-y-12">
            <div className="relative">
              <h3 className="text-[#D4AF37] font-serif text-3xl md:text-4xl flex items-center gap-4">
                <Utensils size={28} className="opacity-40" /> {category}
              </h3>
              <div className="absolute -bottom-4 left-0 w-24 h-0.5 bg-[#D4AF37]/30" />
            </div>
            
            <div className="space-y-10">
              {items.map((item: MenuItem, idx: number) => (
                <motion.div 
                  key={item.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 + catIdx * 0.1 }}
                  className="group relative"
                >
                  <div className="flex justify-between items-baseline mb-2">
                    <h4 className="text-lg md:text-xl font-medium text-white group-hover:text-[#D4AF37] transition-all duration-300 uppercase tracking-wider font-serif">
                      {item.name}
                    </h4>
                    <div className="flex-grow mx-4 border-b border-white/10 border-dotted" />
                    <span className="text-[#D4AF37] font-medium">{item.price}</span>
                  </div>
                  <p className="text-white/50 text-sm md:text-base leading-relaxed max-w-[95%] italic font-light">
                    {item.description}
                  </p>
                  <div className="absolute -left-8 top-1.5 opacity-0 group-hover:opacity-100 transition-all text-[#D4AF37]">
                    <Zap size={14} fill="currentColor" />
                  </div>
                </motion.div>
              ))}
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

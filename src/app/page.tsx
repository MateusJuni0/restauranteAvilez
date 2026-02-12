'use client';
import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import RestaurantCard from '@/components/ui/RestaurantCard';
import { restaurants } from '@/data/restaurants';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  const [lang] = useState<'pt' | 'en'>('pt');
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  
  const restaurantList = Object.entries(restaurants).map(([key, val]) => ({
    id: key,
    ...val
  }));

  return (
    <main className="bg-[#050505] text-[#f5f5f5] selection:bg-[#D4AF37] selection:text-black font-sans scroll-smooth">
      <Navbar />
      
      {/* Cinematic Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div style={{ y: y1 }} className="absolute inset-0 z-0">
          <Image 
            src="/images/pateo-hero.jpg" 
            alt="Bairro do Avillez" 
            fill 
            className="object-cover brightness-[0.3] scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-[#050505]" />
        </motion.div>

        <div className="relative z-10 text-center px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="text-[#D4AF37] text-[10px] uppercase tracking-[0.8em] font-light mb-6 block">
              José Avillez apresenta
            </span>
            <h1 className="text-6xl md:text-[9rem] font-serif leading-none mb-10 text-white tracking-tighter">
              Bairro do <span className="text-gradient-gold italic">Avillez</span>
            </h1>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-12">
              <a href="#restaurantes" className="px-10 py-4 bg-[#D4AF37] text-black text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-white transition-all">
                Explorar Espaços
              </a>
              <a href="#conceito" className="text-white/30 hover:text-white transition-colors uppercase text-[10px] tracking-[0.5em] flex items-center gap-2">
                O Conceito <ChevronDown size={12} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Collection Grid */}
      <section id="restaurantes" className="py-32 px-6 bg-[#050505]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {restaurantList.map((r, i) => (
              <RestaurantCard 
                key={r.id} 
                name={r.name[lang]}
                desc={r.desc[lang]}
                image={r.image}
                href={r.href}
                specialty={r.specialty[lang]}
                ambiance={r.ambiance[lang]}
                index={i} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* Signature Section */}
      <section id="conceito" className="py-40 px-6 bg-white text-black">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
           <div className="space-y-10">
             <span className="text-[#D4AF37] text-[10px] uppercase tracking-[0.5em] font-bold">Inovação e Tradição</span>
             <h2 className="text-5xl md:text-8xl font-serif leading-[0.9] tracking-tighter">O sabor da nossa <br/><span className="text-[#D4AF37]">identidade.</span></h2>
             <p className="text-xl text-black/50 font-light leading-relaxed max-w-md">
               "A cozinha é a minha forma de comunicar. No Bairro do Avillez, cada prato é uma ponte entre a nossa história e o que ainda vamos descobrir." <br/> <span className="font-bold">— José Avillez.</span>
             </p>
             <button className="px-12 py-5 border-2 border-black text-black text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-black hover:text-white transition-all">
               Conhecer a História
             </button>
           </div>
           <div className="relative h-[700px] rounded-sm overflow-hidden shadow-2xl">
             <Image 
                src="/images/pateo-dish.jpg" 
                alt="José Avillez" 
                fill 
                className="object-cover"
              />
           </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-32 bg-[#050505] text-center border-t border-white/5">
         <h2 className="text-3xl font-serif text-white mb-8 tracking-tighter">Bairro do Avillez.</h2>
         <p className="text-[10px] uppercase tracking-[0.4em] text-white/20">José Avillez Group • Lisboa • 2026</p>
      </footer>
    </main>
  );
}

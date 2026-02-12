'use client';

import { useParams, useRouter } from 'next/navigation';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronLeft, Calendar, MapPin, Phone, Info, Instagram } from 'lucide-react';
import { restaurants } from '@/data/restaurants';
import DigitalMenu from '@/components/ui/DigitalMenu';
import Image from 'next/image';

export default function RestaurantPage() {
  const { slug } = useParams();
  const router = useRouter();
  const restaurant = restaurants[slug as keyof typeof restaurants];
  
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const y = useTransform(scrollY, [0, 400], [0, 150]);

  if (!restaurant) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <h1 className="text-white text-2xl uppercase tracking-widest font-serif">Espaço não encontrado</h1>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#050505] text-[#f5f5f5] overflow-x-hidden font-sans">
      {/* Immersive Header */}
      <section className="relative h-[100vh] w-full flex items-center justify-center overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <Image
            src={restaurant.image}
            alt={restaurant.name.pt}
            fill
            className="object-cover brightness-[0.4] scale-110"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#050505]" />
        </motion.div>

        <button
          onClick={() => router.push('/')}
          className="absolute top-12 left-12 z-20 flex items-center gap-4 text-[10px] uppercase tracking-[0.4em] text-white/50 hover:text-[#D4AF37] transition-all group"
        >
          <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Voltar ao Bairro
        </button>

        <div className="relative z-10 text-center px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            <span className="text-[#D4AF37] text-[10px] uppercase tracking-[0.8em] font-bold mb-8 block">
              {restaurant.specialty.pt}
            </span>
            <h1 className="text-7xl md:text-[14rem] font-serif leading-none mb-12 text-white tracking-tighter">
              {restaurant.name.pt}
            </h1>
            <div className="flex items-center justify-center gap-8 text-[10px] uppercase tracking-[0.4em] font-medium text-white/40">
               <span>Lisboa</span>
               <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
               <span>Chiado</span>
               <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
               <span>José Avillez</span>
            </div>
          </motion.div>
        </div>
        
        <motion.div style={{ opacity }} className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-pulse">
           <div className="w-px h-24 bg-gradient-to-b from-[#D4AF37] to-transparent mx-auto" />
        </motion.div>
      </section>

      {/* Content & Menu */}
      <section className="relative z-10 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 pt-40">
           <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start border-b border-white/5 pb-40">
              <div className="lg:col-span-4 space-y-12 sticky top-32">
                 <h2 className="text-4xl font-serif leading-tight">Uma narrativa <br/><span className="text-[#D4AF37] italic">gastronómica.</span></h2>
                 <p className="text-lg text-white/40 font-light leading-relaxed">
                   O {restaurant.name.pt} não é apenas um restaurante, é um capítulo da visão do Chef José Avillez sobre a alma portuguesa. Descubra uma curadoria de sabores que respeita o passado mas olha para o futuro.
                 </p>
                 <div className="space-y-6 pt-8">
                    <div className="flex items-center gap-6 group cursor-pointer">
                       <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#D4AF37]/10 transition-colors">
                          <MapPin size={18} className="text-[#D4AF37]" />
                       </div>
                       <span className="text-sm font-light text-white/60">Rua Nova da Trindade, 18</span>
                    </div>
                    <div className="flex items-center gap-6 group cursor-pointer">
                       <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#D4AF37]/10 transition-colors">
                          <Phone size={18} className="text-[#D4AF37]" />
                       </div>
                       <span className="text-sm font-light text-white/60">+351 21 583 0290</span>
                    </div>
                 </div>
                 <button className="w-full py-6 bg-white text-black text-[10px] uppercase tracking-[0.5em] font-bold hover:bg-[#D4AF37] transition-all duration-500">
                   Reservar Agora
                 </button>
              </div>

              <div className="lg:col-span-8 space-y-32">
                 {/* Experience Photo */}
                 <div className="relative h-[500px] w-full rounded-sm overflow-hidden shadow-2xl">
                    <Image 
                      src={restaurant.image} 
                      alt="Experiência" 
                      fill 
                      className="object-cover"
                    />
                 </div>

                 {/* Digital Menu */}
                 <div id="ementa" className="space-y-16">
                    <div className="flex justify-between items-end">
                       <h3 className="text-5xl font-serif tracking-tighter uppercase">A Ementa</h3>
                       <span className="text-[10px] uppercase tracking-[0.4em] text-[#D4AF37] mb-2">Seleção Especial</span>
                    </div>
                    <DigitalMenu restaurantId={slug as string} />
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Brand Footer */}
      <footer className="py-40 bg-[#030303] text-center border-t border-white/5">
        <div className="max-w-4xl mx-auto space-y-12">
          <h2 className="text-2xl font-serif text-white/10 uppercase tracking-[2em] translate-x-[1em]">AVILLEZ</h2>
          <div className="flex justify-center gap-12 text-[10px] uppercase tracking-[0.5em] text-white/30">
             <a href="https://instagram.com/bairrodoavillez" className="hover:text-white transition-colors">Instagram</a>
             <a href="#" className="hover:text-white transition-colors">Contactos</a>
             <a href="#" className="hover:text-white transition-colors">Newsletter</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

'use client';

import { useParams, useRouter } from 'next/navigation';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronLeft, MapPin, Phone, Instagram, Facebook, Mail } from 'lucide-react';
import { restaurants } from '@/data/restaurants';
import DishCarousel from '@/components/ui/DishCarousel';
import Image from 'next/image';
import ReservationCalendar from '@/components/ui/ReservationCalendar';
import { useState } from 'react';

export default function RestaurantPage() {
  const { slug } = useParams();
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Robust lookup: try by key, then by id, then by href
  const restaurant = 
    restaurants[slug as keyof typeof restaurants] || 
    Object.values(restaurants).find(r => r.id === slug) ||
    Object.values(restaurants).find(r => r.href === `/${slug}`);
  
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
      
      {/* Modal de Reservas */}
      {isModalOpen && <ReservationCalendar isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />}

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

        <div className="relative z-10 text-center px-6 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            <span className="text-[#D4AF37] text-[10px] uppercase tracking-[0.8em] font-bold mb-8 block">
              {restaurant.specialty.pt}
            </span>
            <h1 className="text-5xl md:text-8xl lg:text-[10rem] font-serif leading-none mb-12 text-white tracking-tighter drop-shadow-2xl">
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
        <div className="max-w-[1800px] mx-auto px-6 pt-40">
           
           {/* Intro Info */}
           <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-32 max-w-7xl mx-auto">
              <div className="lg:col-span-5 space-y-12">
                 <h2 className="text-4xl md:text-5xl font-serif leading-tight">Uma narrativa <br/><span className="text-[#D4AF37] italic">gastronómica.</span></h2>
                 <p className="text-lg text-white/40 font-light leading-relaxed">
                   O {restaurant.name.pt} não é apenas um restaurante, é um capítulo da visão do Chef José Avillez sobre a alma portuguesa. Descubra uma curadoria de sabores que respeita o passado mas olha para o futuro.
                 </p>
                 <div className="space-y-6 pt-8">
                    <a href="https://maps.google.com" target="_blank" className="flex items-center gap-6 group cursor-pointer hover:opacity-80 transition-opacity">
                       <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#D4AF37]/10 transition-colors">
                          <MapPin size={18} className="text-[#D4AF37]" />
                       </div>
                       <span className="text-sm font-light text-white/60">Rua Nova da Trindade, 18</span>
                    </a>
                    <a href="https://wa.me/351215830290" target="_blank" className="flex items-center gap-6 group cursor-pointer hover:opacity-80 transition-opacity">
                       <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#D4AF37]/10 transition-colors">
                          <Phone size={18} className="text-[#D4AF37]" />
                       </div>
                       <span className="text-sm font-light text-white/60">+351 21 583 0290</span>
                    </a>
                 </div>
                 
                 <button 
                   onClick={() => setIsModalOpen(true)}
                   className="w-full py-6 bg-white text-black text-[10px] uppercase tracking-[0.5em] font-bold hover:bg-[#D4AF37] transition-all duration-500 border border-transparent hover:border-[#D4AF37]"
                 >
                   Reservar Agora
                 </button>
              </div>
              
              <div className="lg:col-span-1 hidden lg:block"></div>

              <div className="lg:col-span-6">
                 <div className="relative h-[400px] w-full rounded-sm overflow-hidden shadow-2xl group">
                    <Image 
                      src={restaurant.image} 
                      alt="Experiência" 
                      fill 
                      className="object-cover transition-transform duration-[2s] group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                 </div>
              </div>
           </div>

           {/* 3D CAROUSEL SECTION */}
           <div id="ementa" className="border-t border-white/5 pt-32 pb-40">
              <div className="flex flex-col items-center mb-24 text-center">
                 <span className="text-[#D4AF37] text-[10px] uppercase tracking-[0.6em] font-bold mb-6 block animate-pulse">Degustação Virtual</span>
                 <h3 className="text-5xl md:text-7xl font-serif text-white tracking-tight uppercase">
                    A Ementa
                 </h3>
                 <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mt-8"></div>
              </div>
              
              <DishCarousel restaurantId={slug as string} />
              
              <div className="flex justify-center mt-20">
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="px-12 py-4 border border-[#D4AF37] text-[#D4AF37] text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-[#D4AF37] hover:text-black transition-all duration-500"
                >
                   Reservar Mesa
                </button>
              </div>
           </div>
        </div>
      </section>

      {/* Full Footer (Newsletter + Social) */}
      <footer className="bg-[#030303] text-white pt-32 pb-16 px-8 md:px-20 border-t border-[#D4AF37]/10 relative z-20">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 md:gap-16">
          
          {/* Brand & Newsletter */}
          <div className="lg:col-span-1 space-y-10">
            <div>
              <span className="text-3xl font-serif tracking-[0.2em] block mb-6 text-white">JOSÉ <span className="text-[#D4AF37]">AVILLEZ</span></span>
              <p className="text-[10px] text-gray-500 tracking-[0.25em] leading-loose uppercase font-light">
                Excelência culinária. <br /> Paixão. Memória.
              </p>
            </div>
            
            <div className="pt-8 border-t border-white/5">
              <h5 className="text-[10px] font-bold tracking-[0.3em] text-[#D4AF37] uppercase mb-6">Newsletter Exclusiva</h5>
              <form className="flex flex-col gap-4 relative group">
                <input 
                  type="email" 
                  placeholder="Seu Email" 
                  className="bg-transparent border-b border-white/20 px-0 py-3 text-xs text-white placeholder-gray-700 focus:outline-none focus:border-[#D4AF37] transition-colors w-full autofill:bg-transparent autofill:text-white"
                  style={{ WebkitBoxShadow: '0 0 0 30px #030303 inset', WebkitTextFillColor: 'white' }}
                />
                <button className="absolute right-0 bottom-3 text-[#D4AF37] text-[10px] uppercase tracking-[0.2em] hover:text-white transition-colors opacity-50 group-hover:opacity-100">
                  Assinar
                </button>
              </form>
            </div>
          </div>

          {/* Locations */}
          <div>
            <h4 className="text-[11px] font-bold tracking-[0.3em] text-[#D4AF37] uppercase mb-10">Localizações</h4>
            <ul className="space-y-6 text-[10px] text-gray-500 tracking-[0.15em] uppercase font-light">
              <li className="flex items-center gap-4 hover:text-[#D4AF37] transition-all duration-300 transform hover:translate-x-2 cursor-pointer"><span className="w-1 h-1 bg-[#D4AF37] rounded-full"></span> Chiado, Lisboa</li>
              <li className="flex items-center gap-4 hover:text-[#D4AF37] transition-all duration-300 transform hover:translate-x-2 cursor-pointer"><span className="w-1 h-1 bg-[#D4AF37] rounded-full"></span> Parque das Nações</li>
              <li className="flex items-center gap-4 hover:text-[#D4AF37] transition-all duration-300 transform hover:translate-x-2 cursor-pointer"><span className="w-1 h-1 bg-[#D4AF37] rounded-full"></span> Cascais</li>
              <li className="flex items-center gap-4 hover:text-[#D4AF37] transition-all duration-300 transform hover:translate-x-2 cursor-pointer"><span className="w-1 h-1 bg-[#D4AF37] rounded-full"></span> Porto</li>
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="text-[11px] font-bold tracking-[0.3em] text-[#D4AF37] uppercase mb-10">Concierge</h4>
            <ul className="space-y-6 text-[10px] text-gray-500 tracking-[0.15em] uppercase font-medium">
              <li className="flex items-center gap-4 hover:text-white transition-colors">
                <Phone className="text-[#D4AF37] w-3 h-3" /> +351 211 914 470
              </li>
              <li className="flex items-center gap-4 hover:text-white transition-colors">
                <Mail className="text-[#D4AF37] w-3 h-3" /> reservas@joseavillez.pt
              </li>
              <li className="flex items-center gap-4 hover:text-white transition-colors">
                <Mail className="text-[#D4AF37] w-3 h-3" /> geral@joseavillez.pt
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-[11px] font-bold tracking-[0.3em] text-[#D4AF37] uppercase mb-10">Social</h4>
            <div className="flex gap-6 text-lg">
              <a href="#" className="w-12 h-12 border border-white/5 flex items-center justify-center rounded-full text-gray-500 hover:text-[#D4AF37] hover:border-[#D4AF37] hover:bg-[#D4AF37]/5 transition-all duration-500 hover:scale-110"><Instagram className="w-4 h-4" /></a>
              <a href="#" className="w-12 h-12 border border-white/5 flex items-center justify-center rounded-full text-gray-500 hover:text-[#D4AF37] hover:border-[#D4AF37] hover:bg-[#D4AF37]/5 transition-all duration-500 hover:scale-110"><Facebook className="w-4 h-4" /></a>
            </div>
          </div>

        </div>

        <div className="max-w-[1600px] mx-auto mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[9px] text-gray-700 tracking-[0.3em] uppercase font-light">
            <span className="hover:text-gray-500 transition-colors cursor-default">&copy; {new Date().getFullYear()} Grupo José Avillez.</span>
            <div className="flex gap-10 mt-6 md:mt-0">
                <a href="#" className="hover:text-[#D4AF37] transition-colors">Privacidade</a>
                <a href="#" className="hover:text-[#D4AF37] transition-colors">Termos</a>
                <a href="#" className="hover:text-[#D4AF37] transition-colors">Créditos</a>
            </div>
        </div>
      </footer>
    </main>
  );
}

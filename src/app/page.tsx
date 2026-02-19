// projects/restauranteAvilez/src/app/page.tsx
'use client'

import Link from "next/link";
import { useState, useEffect } from "react";
import { FaInstagram, FaFacebookF, FaTripadvisor, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaYoutube } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { restaurants } from "@/data/restaurants";
import ReservationCalendar from "@/components/ui/ReservationCalendar";

// Convert data object to array
const allRestaurants = Object.values(restaurants);

// Unique locations for filter
const locations = ['Todos', ...new Set(allRestaurants.map(r => r.location.split(',')[0].trim()))];

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [filter, setFilter] = useState('Todos');
  const [filteredRestaurants, setFilteredRestaurants] = useState(allRestaurants);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Handle Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle Filter
  useEffect(() => {
    if (filter === 'Todos') {
      setFilteredRestaurants(allRestaurants);
    } else {
      setFilteredRestaurants(allRestaurants.filter(r => r.location.includes(filter)));
    }
  }, [filter]);

  return (
    <div className="min-h-screen font-sans text-gray-100 bg-[#050505] selection:bg-[#D4AF37] selection:text-black overflow-x-hidden">
      
      {/* 3.5 Reservation Modal */}
      {isModalOpen && <ReservationCalendar isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />}

      {/* 3.1 Hero Section: Video Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover opacity-30 scale-105 transition-opacity duration-1000"
          poster="/images/hero-poster.jpg"
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/50 to-[#050505]"></div>
      </div>
      
      {/* 3.2 Header: Fixed Menu with Effect */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-16 transition-all duration-700 ease-in-out ${
          isScrolled ? 'py-4 bg-black/95 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.5)] border-b border-[#D4AF37]/10' : 'py-10 bg-transparent'
        }`}
      >
        <div className="text-xl md:text-2xl font-serif tracking-[0.25em] text-white uppercase hover:text-[#D4AF37] transition-colors duration-500 cursor-pointer relative group">
          Bairro do <span className="text-[#D4AF37]">Avillez</span>
          <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent group-hover:w-full transition-all duration-700 ease-out"></span>
        </div>

        <nav className="hidden lg:flex space-x-14 text-[10px] font-bold tracking-[0.25em] text-white/80 uppercase">
             {["Restaurantes", "Sobre", "Livros", "Media", "Contactos"].map((item) => (
            <Link key={item} href={`/${item.toLowerCase()}`} className="hover:text-[#D4AF37] transition-all duration-500 relative group py-2">
              {item}
              <span className="absolute bottom-0 left-1/2 w-0 h-[1px] bg-[#D4AF37] group-hover:w-full group-hover:left-0 transition-all duration-500 ease-out opacity-0 group-hover:opacity-100"></span>
            </Link>
          ))}
        </nav>

        {/* 3.1 Button: Premium Gold Design */}
        <button 
          onClick={() => setIsModalOpen(true)}
          className="relative px-8 py-3 overflow-hidden text-[10px] font-bold tracking-[0.25em] text-[#D4AF37] border border-[#D4AF37]/30 rounded-sm group transition-all duration-500 hover:border-[#D4AF37] hover:shadow-[0_0_25px_rgba(212,175,55,0.2)]"
        >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#D4AF37]/10 via-[#D4AF37]/20 to-[#D4AF37]/10 transition-transform duration-700 -translate-x-full group-hover:translate-x-0"></span>
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">Reservar</span>
        </button>
      </header>

      {/* Hero Content */}
      <section className="relative z-10 flex flex-col items-center justify-center h-screen text-center px-4">
        <div className="space-y-12 md:space-y-16 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="text-5xl md:text-8xl lg:text-9xl font-serif text-transparent bg-clip-text bg-gradient-to-b from-[#F4C430] via-[#D4AF37] to-[#AA8C2C] tracking-[0.15em] uppercase leading-tight drop-shadow-2xl">
              Bairro do Avillez
            </h1>
          </motion.div>
          
          <motion.div 
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 2, delay: 0.8, ease: "easeInOut" }}
            className="h-[1px] w-48 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto opacity-80"
          />

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1.2 }}
            className="text-base md:text-2xl text-gray-300 font-light max-w-xl md:max-w-3xl mx-auto font-sans tracking-wide leading-relaxed px-4"
          >
            "Onde Lisboa se encontra à mesa."
          </motion.p>
        </div>

        {/* Scroll Indicator - Perfect Center Fix */}
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 8, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, delay: 3 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-4 cursor-pointer group z-30"
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
            <span className="text-[#D4AF37]/70 text-[9px] tracking-[0.4em] uppercase group-hover:text-[#D4AF37] transition-colors duration-500 font-medium animate-pulse pl-[0.4em] text-center">Descobrir</span>
            <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-[#D4AF37]/40 to-transparent group-hover:via-[#D4AF37] transition-all duration-700"></div>
        </motion.div>
      </section>

      {/* 3.3 Restaurantes Grid */}
      <section className="relative z-20 py-32 px-4 md:px-12 bg-[#050505]">
        
        {/* Section Header & Filter */}
        <div className="max-w-[1800px] mx-auto mb-24 flex flex-col items-center">
          <span className="text-[#D4AF37] text-[10px] font-bold tracking-[0.6em] uppercase mb-6 block animate-pulse">O Universo</span>
          <h2 className="text-3xl md:text-5xl font-serif text-white tracking-[0.2em] uppercase text-center mb-16 relative">
            Nossos Espaços
            <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-24 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent"></span>
          </h2>
          
          {/* 3.2 Filter UI */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            {locations.map((loc) => (
              <button
                key={loc}
                onClick={() => setFilter(loc)}
                className={`text-[10px] tracking-[0.25em] uppercase px-6 py-3 border transition-all duration-500 relative overflow-hidden group ${
                  filter === loc 
                    ? 'border-[#D4AF37] text-[#D4AF37] bg-[#D4AF37]/5 shadow-[0_0_20px_rgba(212,175,55,0.1)]' 
                    : 'border-white/5 text-gray-500 hover:border-[#D4AF37]/30 hover:text-white'
                }`}
              >
                <span className="relative z-10">{loc}</span>
                {filter === loc && <span className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D4AF37]/10 to-transparent opacity-50"></span>}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="max-w-[1800px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 px-4">
          <AnimatePresence>
            {filteredRestaurants.map((restaurant, i) => (
              <motion.div
                layout
                key={restaurant.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="group relative h-[70vh] overflow-hidden bg-[#080808] cursor-pointer border border-white/5 hover:border-[#D4AF37]/20 transition-colors duration-700"
              >
                {/* Image */}
                <div 
                  className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-[2s] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-105 opacity-50 group-hover:opacity-40"
                  style={{ backgroundImage: `url('${restaurant.image}')` }}
                />
                
                {/* Overlay Gradient (Gold Hint) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-90 transition-opacity duration-700 group-hover:opacity-95"></div>
                <div className="absolute inset-0 bg-[#D4AF37]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 mix-blend-overlay"></div>
                
                {/* Content */}
                <div className="absolute inset-0 p-10 md:p-14 flex flex-col justify-end items-start text-left z-20">
                  <span className="text-[#D4AF37] text-[9px] tracking-[0.4em] uppercase mb-5 opacity-0 transform -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 delay-100 border-b border-[#D4AF37]/30 pb-2">
                    {restaurant.location}
                  </span>
                  
                  <h3 className="text-3xl md:text-4xl font-serif text-white tracking-[0.1em] uppercase mb-6 group-hover:text-[#D4AF37] transition-colors duration-500 drop-shadow-lg">
                    {restaurant.name}
                  </h3>
                  
                  <div className="h-[1px] w-16 bg-white/20 mb-8 group-hover:w-24 group-hover:bg-[#D4AF37] transition-all duration-1000 ease-out"></div>
                  
                  <p className="text-sm text-gray-400 leading-relaxed mb-10 font-light tracking-wide max-w-md opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 delay-200">
                    {restaurant.desc.pt}
                  </p>
                  
                  <Link href={restaurant.href}>
                    <span className="inline-flex items-center text-[10px] font-bold tracking-[0.3em] text-white uppercase group-hover:text-[#D4AF37] transition-all duration-500 pb-2 border-b border-transparent group-hover:border-[#D4AF37]">
                      Explorar <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform group-hover:translate-x-1">→</span>
                    </span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* 3.7 Footer: Sophisticated & Premium */}
      <footer className="bg-[#030303] text-white pt-32 pb-16 px-8 md:px-20 border-t border-[#D4AF37]/10 relative z-20">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 md:gap-16">
          
          {/* Brand & Newsletter */}
          <div className="lg:col-span-1 space-y-10">
            <div>
              <span className="text-3xl font-serif tracking-[0.2em] block mb-6 text-white">BAIRRO DO <span className="text-[#D4AF37]">AVILLEZ</span></span>
              <p className="text-[10px] text-gray-500 tracking-[0.25em] leading-loose uppercase font-light">
                Excelência culinária. <br /> Paixão. Memória.
              </p>
            </div>
            
            <div className="pt-8 border-t border-white/5">
              <h5 className="text-[10px] font-bold tracking-[0.3em] text-[#D4AF37] uppercase mb-6">Newsletter Exclusiva</h5>
          {/* Newsletter Input Correction */}
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
              <li className="flex items-center gap-4 hover:text-[#D4AF37] transition-all duration-300 transform hover:translate-x-2 cursor-pointer"><span className="w-1 h-1 bg-[#D4AF37] rounded-full"></span> Dubai</li>
              <li className="flex items-center gap-4 hover:text-[#D4AF37] transition-all duration-300 transform hover:translate-x-2 cursor-pointer"><span className="w-1 h-1 bg-[#D4AF37] rounded-full"></span> Macau</li>
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="text-[11px] font-bold tracking-[0.3em] text-[#D4AF37] uppercase mb-10">Concierge</h4>
            <ul className="space-y-6 text-[10px] text-gray-500 tracking-[0.15em] uppercase font-medium">
              <li className="flex items-center gap-4 hover:text-white transition-colors">
                <FaPhoneAlt className="text-[#D4AF37] text-xs" /> +351 211 914 470
              </li>
              <li className="flex items-center gap-4 hover:text-white transition-colors">
                <FaEnvelope className="text-[#D4AF37] text-xs" /> reservas@joseavillez.pt
              </li>
              <li className="flex items-center gap-4 hover:text-white transition-colors">
                <FaEnvelope className="text-[#D4AF37] text-xs" /> geral@joseavillez.pt
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-[11px] font-bold tracking-[0.3em] text-[#D4AF37] uppercase mb-10">Social</h4>
            <div className="flex gap-6 text-lg">
              <a href="#" className="w-12 h-12 border border-white/5 flex items-center justify-center rounded-full text-gray-500 hover:text-[#D4AF37] hover:border-[#D4AF37] hover:bg-[#D4AF37]/5 transition-all duration-500 hover:scale-110"><FaInstagram /></a>
              <a href="#" className="w-12 h-12 border border-white/5 flex items-center justify-center rounded-full text-gray-500 hover:text-[#D4AF37] hover:border-[#D4AF37] hover:bg-[#D4AF37]/5 transition-all duration-500 hover:scale-110"><FaFacebookF /></a>
              <a href="#" className="w-12 h-12 border border-white/5 flex items-center justify-center rounded-full text-gray-500 hover:text-[#D4AF37] hover:border-[#D4AF37] hover:bg-[#D4AF37]/5 transition-all duration-500 hover:scale-110"><FaTripadvisor /></a>
            </div>
          </div>

        </div>

        <div className="max-w-[1600px] mx-auto mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[9px] text-gray-700 tracking-[0.3em] uppercase font-light">
            <span className="hover:text-gray-500 transition-colors cursor-default">&copy; {new Date().getFullYear()} Grupo Bairro do Avillez.</span>
            <div className="flex gap-10 mt-6 md:mt-0">
                <a href="#" className="hover:text-[#D4AF37] transition-colors">Privacidade</a>
                <a href="#" className="hover:text-[#D4AF37] transition-colors">Termos</a>
                <a href="#" className="hover:text-[#D4AF37] transition-colors">Créditos</a>
            </div>
        </div>
      </footer>
    </div>
  );
}

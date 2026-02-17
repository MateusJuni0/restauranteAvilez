'use client'

import Link from "next/link";
import { useState, useEffect } from "react";
import { FaInstagram, FaFacebookF, FaTripadvisor, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaYoutube } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { restaurants } from "@/data/restaurants";

// Convert data object to array
const allRestaurants = Object.values(restaurants);

// Unique locations for filter
const locations = ['Todos', ...new Set(allRestaurants.map(r => r.location.split(',')[0].trim()))];

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [filter, setFilter] = useState('Todos');
  const [filteredRestaurants, setFilteredRestaurants] = useState(allRestaurants);

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
      
      {/* 3.1 Hero Section: Video Background */}
      <div className="fixed inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover opacity-40 scale-105"
          poster="/images/hero-poster.jpg"
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
          {/* Fallback to CSS gradient/image if video fails or loads slow */}
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-[#050505]"></div>
      </div>
      
      {/* 3.2 Header: Fixed Menu with Effect */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 transition-all duration-500 ${
          isScrolled ? 'py-4 bg-black/90 backdrop-blur-md shadow-lg border-b border-white/5' : 'py-8 bg-transparent'
        }`}
      >
        <div className="text-xl md:text-2xl font-serif tracking-[0.2em] text-white uppercase hover:text-[#D4AF37] transition-colors cursor-pointer relative group">
          José Avillez
          <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#D4AF37] group-hover:w-full transition-all duration-500"></span>
        </div>

        <nav className="hidden lg:flex space-x-12 text-[11px] font-medium tracking-[0.2em] text-white/90 uppercase">
             {["Restaurantes", "Sobre", "Livros", "Media", "Contactos"].map((item) => (
            <Link key={item} href={`/${item.toLowerCase()}`} className="hover:text-[#D4AF37] transition-all duration-300 relative group py-2">
              {item}
              <span className="absolute bottom-0 left-1/2 w-0 h-[1px] bg-[#D4AF37] group-hover:w-full group-hover:left-0 transition-all duration-300 ease-out"></span>
            </Link>
          ))}
        </nav>

        {/* 3.1 Button: Premium Design */}
        <button className="relative px-8 py-3 overflow-hidden text-[10px] font-bold tracking-[0.2em] text-white bg-[#8B0000] rounded-sm group transition-all duration-500 hover:shadow-[0_0_20px_rgba(139,0,0,0.5)]">
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#a30000] to-[#600000] transition-all duration-500 group-hover:scale-105"></span>
            <span className="relative z-10 group-hover:tracking-[0.25em] transition-all duration-300">Reservar</span>
        </button>
      </header>

      {/* Hero Content */}
      <section className="relative z-10 flex flex-col items-center justify-center h-screen text-center px-4">
        <div className="space-y-8 md:space-y-10 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-8xl lg:text-9xl font-serif text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/70 tracking-[0.1em] uppercase leading-tight drop-shadow-2xl">
              José Avillez
            </h1>
          </motion.div>
          
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
            className="h-[1px] w-32 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto"
          />

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-lg md:text-2xl text-gray-200 font-light max-w-2xl mx-auto font-sans tracking-wide leading-relaxed mix-blend-overlay"
          >
            "A cozinha é a minha forma de dar."
          </motion.p>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 2 }}
            className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-4 cursor-pointer"
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
            <span className="text-white/50 text-[9px] tracking-[0.4em] uppercase hover:text-[#D4AF37] transition-colors">Descobrir</span>
            <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-[#D4AF37]/50 to-transparent"></div>
        </motion.div>
      </section>

      {/* 3.3 Restaurantes Grid */}
      <section className="relative z-20 py-24 md:py-32 px-4 md:px-12 bg-[#050505]">
        
        {/* Section Header & Filter */}
        <div className="max-w-[1600px] mx-auto mb-20 md:mb-28 flex flex-col items-center">
          <span className="text-[#D4AF37] text-[10px] font-bold tracking-[0.5em] uppercase mb-4 block">O Universo</span>
          <h2 className="text-3xl md:text-5xl font-serif text-white tracking-[0.15em] uppercase text-center mb-12">Nossos Espaços</h2>
          
          {/* 3.2 Filter UI */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {locations.map((loc) => (
              <button
                key={loc}
                onClick={() => setFilter(loc)}
                className={`text-[10px] tracking-[0.2em] uppercase px-4 py-2 border transition-all duration-300 ${
                  filter === loc 
                    ? 'border-[#D4AF37] text-[#D4AF37] bg-[#D4AF37]/10' 
                    : 'border-white/10 text-gray-400 hover:border-white/30 hover:text-white'
                }`}
              >
                {loc}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="max-w-[1800px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <AnimatePresence>
            {filteredRestaurants.map((restaurant) => (
              <motion.div
                layout
                key={restaurant.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="group relative h-[60vh] overflow-hidden bg-gray-900 cursor-pointer"
              >
                {/* Image */}
                <div 
                  className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-[1.5s] ease-out group-hover:scale-110 opacity-60 group-hover:opacity-40"
                  style={{ backgroundImage: `url('${restaurant.image}')` }}
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-90"></div>
                
                {/* Content */}
                <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end items-start text-left">
                  <span className="text-[#D4AF37] text-[9px] tracking-[0.3em] uppercase mb-3 opacity-0 transform -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                    {restaurant.location}
                  </span>
                  
                  <h3 className="text-2xl md:text-3xl font-serif text-white tracking-[0.1em] uppercase mb-4 group-hover:text-[#D4AF37] transition-colors duration-300">
                    {restaurant.name}
                  </h3>
                  
                  <div className="h-[1px] w-12 bg-white/30 mb-6 group-hover:w-full group-hover:bg-[#D4AF37]/50 transition-all duration-700 ease-out"></div>
                  
                  <p className="text-xs text-gray-300 leading-relaxed mb-8 font-light tracking-wide max-w-sm opacity-80 group-hover:opacity-100">
                    {restaurant.desc.pt}
                  </p>
                  
                  <Link href={restaurant.href}>
                    <span className="inline-flex items-center text-[9px] font-bold tracking-[0.3em] text-white uppercase group-hover:text-[#D4AF37] transition-all duration-300 pb-1 border-b border-transparent group-hover:border-[#D4AF37]">
                      Explorar
                    </span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* 3.5 Footer: Expanded with Newsletter */}
      <footer className="bg-[#080808] text-white pt-24 pb-12 px-8 md:px-16 border-t border-white/5 relative z-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 md:gap-12">
          
          {/* Brand & Newsletter */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <span className="text-2xl font-serif tracking-[0.2em] block mb-4">JOSÉ AVILLEZ</span>
              <p className="text-[10px] text-gray-500 tracking-[0.2em] leading-loose uppercase">
                Cozinha com alma, <br /> tradição e inovação.
              </p>
            </div>
            
            <div className="pt-6 border-t border-white/5">
              <h5 className="text-[10px] font-bold tracking-[0.2em] text-[#D4AF37] uppercase mb-4">Newsletter</h5>
              <form className="flex flex-col gap-3">
                <input 
                  type="email" 
                  placeholder="Seu Email" 
                  className="bg-white/5 border border-white/10 px-4 py-2 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-[#D4AF37] transition-colors"
                />
                <button className="bg-[#D4AF37] text-black px-4 py-2 text-[9px] font-bold tracking-[0.2em] uppercase hover:bg-white transition-colors">
                  Inscrever
                </button>
              </form>
            </div>
          </div>

          {/* Locations */}
          <div>
            <h4 className="text-[11px] font-bold tracking-[0.3em] text-[#D4AF37] uppercase mb-8">Localizações</h4>
            <ul className="space-y-4 text-[10px] text-gray-400 tracking-[0.1em] uppercase">
              <li className="flex items-center gap-3 hover:text-white transition-colors"><FaMapMarkerAlt className="text-[#D4AF37]" /> Chiado, Lisboa</li>
              <li className="flex items-center gap-3 hover:text-white transition-colors"><FaMapMarkerAlt className="text-[#D4AF37]" /> Parque das Nações</li>
              <li className="flex items-center gap-3 hover:text-white transition-colors"><FaMapMarkerAlt className="text-[#D4AF37]" /> Cascais</li>
              <li className="flex items-center gap-3 hover:text-white transition-colors"><FaMapMarkerAlt className="text-[#D4AF37]" /> Porto</li>
              <li className="flex items-center gap-3 hover:text-white transition-colors"><FaMapMarkerAlt className="text-[#D4AF37]" /> Dubai</li>
              <li className="flex items-center gap-3 hover:text-white transition-colors"><FaMapMarkerAlt className="text-[#D4AF37]" /> Macau</li>
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="text-[11px] font-bold tracking-[0.3em] text-[#D4AF37] uppercase mb-8">Contactos</h4>
            <ul className="space-y-4 text-[10px] text-gray-400 tracking-[0.1em] uppercase font-medium">
              <li className="flex items-center gap-3 hover:text-white transition-colors">
                <FaPhoneAlt className="text-[#D4AF37]" /> +351 211 914 470
              </li>
              <li className="flex items-center gap-3 hover:text-white transition-colors">
                <FaEnvelope className="text-[#D4AF37]" /> reservas@joseavillez.pt
              </li>
              <li className="flex items-center gap-3 hover:text-white transition-colors">
                <FaEnvelope className="text-[#D4AF37]" /> geral@joseavillez.pt
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-[11px] font-bold tracking-[0.3em] text-[#D4AF37] uppercase mb-8">Redes Sociais</h4>
            <div className="flex gap-6 text-lg">
              <a href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center rounded-full text-gray-400 hover:text-black hover:bg-[#D4AF37] hover:border-[#D4AF37] transition-all duration-300"><FaInstagram /></a>
              <a href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center rounded-full text-gray-400 hover:text-black hover:bg-[#D4AF37] hover:border-[#D4AF37] transition-all duration-300"><FaFacebookF /></a>
              <a href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center rounded-full text-gray-400 hover:text-black hover:bg-[#D4AF37] hover:border-[#D4AF37] transition-all duration-300"><FaTripadvisor /></a>
              <a href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center rounded-full text-gray-400 hover:text-black hover:bg-[#D4AF37] hover:border-[#D4AF37] transition-all duration-300"><FaYoutube /></a>
            </div>
          </div>

        </div>

        <div className="max-w-7xl mx-auto mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[9px] text-gray-600 tracking-[0.2em] uppercase">
            <span>&copy; {new Date().getFullYear()} Grupo José Avillez.</span>
            <div className="flex gap-6 mt-4 md:mt-0">
                <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
                <a href="#" className="hover:text-white transition-colors">Termos e Condições</a>
            </div>
        </div>
      </footer>
    </div>
  );
}

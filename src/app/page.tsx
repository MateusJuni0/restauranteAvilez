'use client'

import Link from "next/link";
import { FaInstagram, FaFacebook, FaTripadvisor, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import PortalMain from "@/components/3d/PortalMain";

const restaurants = [
  {
    name: "Bairro do Avillez",
    description: "Um bairro atípico onde se cruzam diferentes conceitos de restauração.",
    link: "/bairro-do-avillez",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000",
  },
  {
    name: "Belcanto",
    description: "Cozinha portuguesa contemporânea num ambiente sofisticado. Duas estrelas Michelin.",
    link: "/belcanto",
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1000",
  },
  {
    name: "Cantinho do Avillez",
    description: "Cozinha portuguesa de inspiração com influências de viagens.",
    link: "/cantinho-do-avillez",
    image: "https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=1000",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen font-sans text-gray-100 bg-transparent selection:bg-[#D4AF37] selection:text-black">
      
      {/* Background Component */}
      <PortalMain />
      
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 md:px-12 py-6 bg-gradient-to-b from-black/90 to-transparent backdrop-blur-[2px] transition-all duration-300">
        <div className="text-lg md:text-xl font-serif tracking-[0.2em] md:tracking-[0.3em] text-white uppercase hover:text-[#D4AF37] transition-colors cursor-pointer">
          José Avillez
        </div>
        <nav className="hidden lg:flex space-x-10 text-[10px] font-medium tracking-[0.2em] text-white/80 uppercase">
             {["Restaurantes", "Sobre", "Livros", "Media", "Contactos"].map((item) => (
            <Link key={item} href={`/${item.toLowerCase()}`} className="hover:text-[#D4AF37] transition-all duration-300 relative group">
              {item}
              <span className="absolute -bottom-2 left-1/2 w-0 h-[1px] bg-[#D4AF37] group-hover:w-full group-hover:left-0 transition-all duration-300"></span>
            </Link>
          ))}
        </nav>
        <button className="px-5 md:px-8 py-2 md:py-3 text-[10px] font-bold tracking-[0.2em] text-white bg-[#8B0000] border border-[#8B0000] hover:bg-transparent hover:text-white transition-all duration-500 uppercase">
          Reservar
        </button>
      </header>

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center h-screen text-center px-6 overflow-hidden">
        <div className="relative z-10 max-w-5xl space-y-8 md:space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-7xl lg:text-8xl font-serif text-white tracking-[0.15em] uppercase leading-tight drop-shadow-2xl">
              José Avillez
            </h1>
          </motion.div>
          
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
            className="h-[1px] w-24 bg-[#D4AF37] mx-auto"
          />

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-base md:text-xl lg:text-2xl text-gray-200 font-light max-w-3xl mx-auto italic font-serif tracking-wider leading-relaxed"
          >
            "A cozinha é a minha forma de dar."
          </motion.p>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 2 }}
            className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-4"
        >
            <span className="text-white/40 text-[9px] tracking-[0.4em] uppercase">Scroll</span>
            <div className="w-[1px] h-12 bg-gradient-to-b from-white/0 via-white/40 to-white/0"></div>
        </motion.div>
      </section>

      {/* Restaurantes Grid */}
      <section className="py-24 md:py-32 px-4 md:px-12 max-w-[1600px] mx-auto z-20 relative mt-[10vh]">
        <div className="text-center mb-20 md:mb-28">
          <span className="text-[#D4AF37] text-[10px] font-bold tracking-[0.5em] uppercase mb-4 block">O Universo</span>
          <h2 className="text-3xl md:text-5xl font-serif text-white tracking-[0.15em] uppercase">Nossos Espaços</h2>
          <div className="mt-8 w-12 h-[1px] bg-white/20 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {restaurants.map((restaurant, index) => (
            <motion.div
              key={restaurant.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="group relative overflow-hidden h-[60vh] md:h-[75vh] w-full border border-white/5 hover:border-[#D4AF37]/30 transition-colors duration-700"
            >
              <div className=\"absolute inset-0 bg-[#050505] transition-transform duration-[2s] ease-out group-hover:scale-110\">
                 <div 
                    className="w-full h-full bg-cover bg-center opacity-50 group-hover:opacity-30 transition-all duration-1000"
                    style={{ backgroundImage: `url('${restaurant.image}')` }} 
                 />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90"></div>

              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 z-20 text-white flex flex-col items-center text-center">
                <h3 className="text-2xl md:text-3xl font-serif mb-6 tracking-[0.15em] uppercase">{restaurant.name}</h3>
                <p className="text-xs md:text-sm text-gray-400 leading-relaxed mb-8 max-w-xs opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 delay-100 font-light tracking-wide">
                  {restaurant.description}
                </p>
                <Link href={restaurant.link} className="inline-block px-8 py-3 border border-white/10 text-white hover:bg-[#D4AF37] hover:text-black hover:border-[#D4AF37] transition-all duration-500 text-[9px] uppercase tracking-[0.3em]">
                  Explorar
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Improved Footer */}
      <footer className="bg-[#080808] text-white py-20 px-8 md:px-16 border-t border-white/5 z-20 relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 md:gap-12 text-center md:text-left">
          
          {/* Brand */}
          <div className="lg:col-span-1">
            <span className="text-2xl font-serif tracking-[0.2em] block mb-6">JOSÉ AVILLEZ</span>
            <p className="text-[10px] text-gray-500 tracking-[0.2em] leading-loose uppercase">
              Cozinha com alma, <br /> tradição e inovação.
            </p>
          </div>

          {/* Locations */}
          <div>
            <h4 className="text-[11px] font-bold tracking-[0.3em] text-[#D4AF37] uppercase mb-8">Localizações</h4>
            <ul className="space-y-4 text-[10px] text-gray-400 tracking-[0.1em] uppercase">
              <li className="flex items-center justify-center md:justify-start gap-3">
                <FaMapMarkerAlt className="text-[#D4AF37]" /> Chiado, Lisboa
              </li>
              <li className="flex items-center justify-center md:justify-start gap-3">
                <FaMapMarkerAlt className="text-[#D4AF37]" /> Cascais
              </li>
              <li className="flex items-center justify-center md:justify-start gap-3">
                <FaMapMarkerAlt className="text-[#D4AF37]" /> Dubai
              </li>
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="text-[11px] font-bold tracking-[0.3em] text-[#D4AF37] uppercase mb-8">Contactos</h4>
            <ul className="space-y-4 text-[10px] text-gray-400 tracking-[0.1em] uppercase font-medium">
              <li className="flex items-center justify-center md:justify-start gap-3">
                <FaPhoneAlt className="text-[#D4AF37]" /> +351 211 914 470
              </li>
              <li className="flex items-center justify-center md:justify-start gap-3">
                <FaEnvelope className="text-[#D4AF37]" /> reservas@joseavillez.pt
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-[11px] font-bold tracking-[0.3em] text-[#D4AF37] uppercase mb-8">Redes Sociais</h4>
            <div className="flex justify-center md:justify-start space-x-8 text-xl">
              <a href="#" className="text-gray-500 hover:text-[#D4AF37] transition-all duration-500"><FaInstagram /></a>
              <a href="#" className="text-gray-500 hover:text-[#D4AF37] transition-all duration-500"><FaFacebook /></a>
              <a href="#" className="text-gray-500 hover:text-[#D4AF37] transition-all duration-500"><FaTripadvisor /></a>
            </div>
          </div>

        </div>

        <div className="max-w-7xl mx-auto mt-20 pt-10 border-t border-white/5 text-center text-[9px] text-gray-600 tracking-[0.4em] uppercase">
            &copy; {new Date().getFullYear()} Grupo José Avillez. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

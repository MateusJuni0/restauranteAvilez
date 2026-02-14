'use client'

import Link from "next/link";
import { FaInstagram, FaFacebook, FaTripadvisor } from "react-icons/fa";
import { motion } from "framer-motion";
import PortalMain from "@/components/3d/PortalMain";

const restaurants = [
  {
    name: "Bairro do Avillez",
    logo: "/images/bairro_avillez_logo.svg",
    description: "Um bairro atípico onde se cruzam diferentes conceitos de restauração.",
    link: "/bairro-do-avillez",
    image: "/images/bairro_avillez_bg.jpg",
  },
  {
    name: "Belcanto",
    logo: "/images/belcanto_logo.svg",
    description: "Cozinha portuguesa contemporânea num ambiente sofisticado. Duas estrelas Michelin.",
    link: "/belcanto",
    image: "/images/belcanto_bg.jpg",
  },
  {
    name: "Cantinho do Avillez",
    logo: "/images/cantinho_logo.svg",
    description: "Cozinha portuguesa de inspiração com influências de viagens.",
    link: "/cantinho-do-avillez",
    image: "/images/cantinho_bg.jpg",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen font-sans text-gray-100 bg-transparent selection:bg-gold-500 selection:text-black">
      
      {/* 3D Background with Ken Burns Effect */}
      <PortalMain />
      
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 bg-gradient-to-b from-black/80 to-transparent transition-all duration-300">
        <div className="text-xl font-serif tracking-[0.25em] text-white uppercase hover:text-gold-500 transition-colors cursor-pointer">
          José Avillez
        </div>
        <nav className="hidden md:flex space-x-12 text-xs font-medium tracking-[0.15em] text-white/90 uppercase">
             {["Restaurantes", "Sobre", "Livros", "Media", "Contactos"].map((item) => (
            <Link key={item} href={`/${item.toLowerCase()}`} className="hover:text-gold-500 transition-all duration-300 relative group">
              {item}
              <span className="absolute -bottom-2 left-1/2 w-0 h-[1px] bg-gold-500 group-hover:w-full group-hover:left-0 transition-all duration-300"></span>
            </Link>
          ))}
        </nav>
        <button className="px-6 py-2 text-[10px] font-bold tracking-[0.2em] text-white border border-white/30 hover:bg-white hover:text-black transition-all duration-500 uppercase backdrop-blur-sm">
          Reservar
        </button>
      </header>

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center h-screen text-center px-4 overflow-hidden">
        
        {/* Content Overlay */}
        <div className="relative z-10 max-w-5xl space-y-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <h1 className="text-6xl md:text-8xl font-serif text-white tracking-[0.15em] uppercase leading-tight drop-shadow-2xl">
              José Avillez
            </h1>
          </motion.div>
          
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
            className="h-[1px] w-24 bg-gold-500 mx-auto"
          />

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-lg md:text-2xl text-gray-200 font-light max-w-3xl mx-auto italic font-serif tracking-wider"
          >
            "A cozinha é a minha forma de dar."
          </motion.p>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 2 }}
            className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-4"
        >
            <span className="text-white/50 text-[10px] tracking-[0.4em] uppercase">Scroll</span>
            <div className="w-[1px] h-16 bg-gradient-to-b from-white/0 via-white/50 to-white/0"></div>
        </motion.div>
      </section>

      {/* Restaurantes Grid - Overlay Style */}
      <section className="py-32 px-6 max-w-[1600px] mx-auto z-20 relative mt-[20vh]">
        <div className="text-center mb-24">
          <span className="text-gold-500 text-xs font-bold tracking-[0.4em] uppercase mb-4 block">O Universo</span>
          <h2 className="text-4xl md:text-5xl font-serif text-white tracking-[0.1em] uppercase">Nossos Espaços</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {restaurants.map((restaurant, index) => (
            <motion.div
              key={restaurant.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative overflow-hidden h-[70vh] w-full border border-white/10 hover:border-gold-500/50 transition-colors duration-500"
            >
              {/* Image Placeholder */}
              <div className="absolute inset-0 bg-gray-900 transition-transform duration-[1.5s] ease-out group-hover:scale-110">
                 <div 
                    className="w-full h-full bg-cover bg-center opacity-60 group-hover:opacity-40 transition-all duration-700"
                    style={{ 
                        backgroundImage: index === 0 
                            ? "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000')" // Restaurant interior
                            : index === 1
                            ? "url('https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1000')" // Fine dining plate
                            : "url('https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=1000')" // Plating
                    }} 
                 />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90"></div>

              <div className="absolute bottom-0 left-0 right-0 p-12 z-20 text-white flex flex-col items-center text-center">
                <h3 className="text-3xl font-serif mb-6 tracking-[0.1em]">{restaurant.name}</h3>
                <p className="text-sm text-gray-300 leading-relaxed mb-8 max-w-xs opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 delay-100 font-light tracking-wide">
                  {restaurant.description}
                </p>
                <Link href={restaurant.link} className="inline-block px-8 py-3 border border-white/20 text-white hover:bg-gold-500 hover:text-black hover:border-gold-500 transition-all duration-500 text-[10px] uppercase tracking-[0.25em]">
                  Explorar
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-24 border-t border-white/5 z-20 relative">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="text-center md:text-left">
            <span className="text-4xl font-serif tracking-[0.15em] block mb-3">JOSÉ AVILLEZ</span>
          </div>
          
          <div className="flex space-x-12">
            <a href="#" className="text-gray-500 hover:text-gold-500 transition-colors duration-500 text-xl"><FaInstagram /></a>
            <a href="#" className="text-gray-500 hover:text-gold-500 transition-colors duration-500 text-xl"><FaFacebook /></a>
            <a href="#" className="text-gray-500 hover:text-gold-500 transition-colors duration-500 text-xl"><FaTripadvisor /></a>
          </div>
        </div>
        <div className="text-center mt-16 text-[10px] text-gray-700 tracking-[0.3em] uppercase">
            &copy; {new Date().getFullYear()} Grupo José Avillez
        </div>
      </footer>
    </div>
  );
}

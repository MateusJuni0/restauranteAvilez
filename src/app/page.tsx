'use client'

// import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaFacebook, FaTripadvisor } from "react-icons/fa";
import { motion } from "framer-motion";
import PortalMain from "@/components/3d/PortalMain";

const restaurants = [
  {
    name: "Bairro do Avillez",
    logo: "/images/bairro_avillez_logo.svg", // Placeholder - Need to find a real one or use text
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
    <div className="min-h-screen font-sans text-gray-800 bg-transparent selection:bg-[#D4AF37] selection:text-black">
      
      {/* Premium Background */}
      <PortalMain />
      
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 bg-black/20 backdrop-blur-md border-b border-white/10 transition-all duration-300">
        <div className="text-xl font-serif font-bold tracking-[0.2em] text-white uppercase hover:text-[#D4AF37] transition-colors cursor-pointer">
          José Avillez
        </div>
        <nav className="hidden md:flex space-x-10 text-xs font-medium tracking-[0.15em] text-white/80 uppercase">
             {["Restaurantes", "Sobre", "Livros", "Media", "Contactos"].map((item) => (
            <Link key={item} href={`/${item.toLowerCase()}`} className="hover:text-[#D4AF37] transition-all duration-300 relative group">
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#D4AF37] group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
        </nav>
        <button className="px-8 py-3 text-xs font-bold tracking-[0.15em] text-white bg-[#8B0000] rounded-sm hover:bg-[#600000] transition-all duration-300 shadow-lg hover:shadow-red-900/40 border border-[#8B0000] uppercase">
          Reservar
        </button>
      </header>

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center h-screen text-center px-4 overflow-hidden">
        
        {/* Content Overlay */}
        <div className="relative z-10 max-w-5xl space-y-8">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="text-6xl md:text-8xl font-serif text-white tracking-[0.1em] uppercase leading-tight drop-shadow-2xl"
          >
            José Avillez
          </motion.h1>
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "100px" }}
            transition={{ duration: 1, delay: 0.8 }}
            className="h-[1px] bg-[#D4AF37] mx-auto"
          />
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-lg md:text-xl text-gray-300 font-light max-w-2xl mx-auto italic tracking-wide"
          >
            "A cozinha é a minha forma de dar."
          </motion.p>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
            className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-white/40 text-[10px] tracking-[0.3em] uppercase flex flex-col items-center gap-2"
        >
            <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-white/40 to-transparent"></div>
            Scroll
        </motion.div>
      </section>

      {/* Restaurantes Grid */}
      <section className="py-32 px-6 max-w-[1400px] mx-auto z-20 relative bg-[#f9f9f9] rounded-t-[3rem] shadow-[0_-20px_60px_rgba(0,0,0,0.5)] mt-[100vh]">
        <div className="text-center mb-20">
          <span className="text-[#D4AF37] text-xs font-bold tracking-[0.3em] uppercase mb-4 block">Experiências</span>
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900 tracking-widest uppercase mb-6">Nossos Espaços</h2>
          <div className="w-16 h-[2px] bg-gray-900 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {restaurants.map((restaurant, index) => (
            <motion.div
              key={restaurant.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: "easeOut" }}
              className="group relative overflow-hidden h-[600px] hover:shadow-2xl transition-all duration-500 cursor-pointer bg-white"
            >
              {/* Imagem de Fundo do Card (Placeholder melhorado) */}
              <div className="absolute inset-0 bg-gray-200 transition-transform duration-700 group-hover:scale-105">
                 {/* TODO: Substituir por Next/Image real quando tivermos as fotos */}
                 <div className="w-full h-full bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-700" style={{ backgroundImage: `url('https://source.unsplash.com/random/800x1200/?restaurant,food,${index}')` }}></div>
              </div>

              {/* Overlay Gradiente */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-70 transition-opacity duration-500"></div>

              <div className="absolute bottom-0 left-0 right-0 p-10 z-20 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-[#D4AF37] text-[10px] tracking-[0.2em] uppercase block mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">Restaurante</span>
                <h3 className="text-3xl font-serif mb-4 tracking-wide">{restaurant.name}</h3>
                <div className="h-[1px] w-12 bg-white/30 mb-6 group-hover:w-full transition-all duration-700 delay-100"></div>
                <p className="text-sm text-gray-300 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200 mb-8 max-w-[90%]">
                  {restaurant.description}
                </p>
                <Link href={restaurant.link} className="inline-block px-8 py-3 border border-white/30 text-white hover:bg-white hover:text-black transition-all duration-300 text-xs uppercase tracking-[0.2em]">
                  Descobrir
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#050505] text-white py-20 border-t border-white/5 z-20 relative">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="text-center md:text-left">
            <span className="text-3xl font-serif tracking-[0.2em] block mb-2">JOSÉ AVILLEZ</span>
            <span className="text-xs text-gray-500 tracking-widest uppercase">Grupo Gastronómico</span>
          </div>
          
          <div className="flex space-x-8">
             {/* Icons com hover gold */}
            <a href="#" className="text-gray-400 hover:text-[#D4AF37] transition-colors duration-300 text-xl"><FaInstagram /></a>
            <a href="#" className="text-gray-400 hover:text-[#D4AF37] transition-colors duration-300 text-xl"><FaFacebook /></a>
            <a href="#" className="text-gray-400 hover:text-[#D4AF37] transition-colors duration-300 text-xl"><FaTripadvisor /></a>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-600 tracking-widest uppercase">
            <div>&copy; {new Date().getFullYear()} Grupo José Avillez.</div>
            <div className="flex gap-6 mt-4 md:mt-0">
                <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
                <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            </div>
        </div>
      </footer>
    </div>
  );
}

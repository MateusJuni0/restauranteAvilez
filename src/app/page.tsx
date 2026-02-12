'use client'

import Image from "next/image";
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
    <div className="min-h-screen font-sans text-gray-800 bg-[#f8f8f8] selection:bg-red-200">
      
      {/* 3D Background */}
      <PortalMain />
      
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-white/10 backdrop-blur-md border-b border-white/20">
        <div className="text-xl font-bold tracking-widest text-white uppercase">
          José Avillez
        </div>
        <nav className="hidden md:flex space-x-8 text-sm font-medium tracking-wide text-white/90">
             {["Restaurantes", "Sobre", "Livros", "Media", "Contactos"].map((item) => (
            <Link key={item} href={`/${item.toLowerCase()}`} className="hover:text-red-400 transition-colors">
              {item}
            </Link>
          ))}
        </nav>
        <button className="px-5 py-2 text-sm font-semibold text-white bg-red-600 rounded-full hover:bg-red-700 transition shadow-lg hover:shadow-red-500/50">
          Reservar
        </button>
      </header>

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center h-screen text-center px-4 overflow-hidden">
        
        {/* Content Overlay - NO MOTION ON SERVER */}
        <div className="relative z-10 max-w-4xl space-y-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-light text-white tracking-widest uppercase font-serif"
          >
            José Avillez
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-200 font-light max-w-2xl mx-auto italic"
          >
            "A cozinha é a minha forma de dar."
          </motion.p>
        </div>

        {/* Scroll Indicator - NO MOTION ON SERVER */}
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/50 text-sm tracking-widest"
        >
            SCROLL
        </motion.div>
      </section>

      {/* Restaurantes Grid */}
      <section className="py-20 px-6 max-w-7xl mx-auto z-20 relative bg-white rounded-t-3xl shadow-2xl mt-[100vh]">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-light uppercase tracking-widest mb-4">Nossos Espaços</h2>
          <div className="w-24 h-1 bg-red-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {restaurants.map((restaurant, index) => (
            <motion.div
              key={restaurant.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl shadow-lg bg-gray-100 aspect-[4/5] hover:shadow-2xl transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gray-900/40 group-hover:bg-gray-900/20 transition-all duration-500 z-10"></div>
                {/* Image Placeholder if actual image fails */}
                <div className="absolute inset-0 bg-gray-300 flex items-center justify-center text-gray-500">
                    Image: {restaurant.name}
                </div>

              <div className="absolute bottom-0 left-0 right-0 p-8 z-20 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-2xl font-bold mb-2">{restaurant.name}</h3>
                <p className="text-sm text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 mb-4">
                  {restaurant.description}
                </p>
                <Link href={restaurant.link} className="inline-block px-6 py-2 border border-white text-white rounded-full hover:bg-white hover:text-gray-900 transition text-sm uppercase tracking-wide">
                  Descobrir
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 border-t border-gray-800 z-20 relative">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <span className="text-2xl font-serif tracking-widest">JOSÉ AVILLEZ</span>
          </div>
          <div className="flex space-x-6 text-xl">
            <a href="#" className="hover:text-red-500 transition"><FaInstagram /></a>
            <a href="#" className="hover:text-blue-500 transition"><FaFacebook /></a>
            <a href="#" className="hover:text-green-500 transition"><FaTripadvisor /></a>
          </div>
        </div>
          <div className="text-center text-gray-500 text-xs mt-8">
              &copy; {new Date().getFullYear()} Grupo José Avillez. Todos os direitos reservados.
          </div>
      </footer>
    </div>
  );
}

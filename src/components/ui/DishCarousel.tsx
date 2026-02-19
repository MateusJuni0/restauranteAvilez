'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import { motion } from 'framer-motion';
import { menus } from '@/data/menus';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Dish3DView from '../3d/Dish3DView';

interface MenuItem {
  name: string;
  price: string;
  description: string;
  category?: string; // Para mapear imagem correta
}

// Imagens reais de Fine Dining (Unsplash) para evitar "cara de IA"
const dishImages: Record<string, string> = {
  'Peixe': 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=2070&auto=format&fit=crop', // Prato de Peixe Fino
  'Carne': 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2069&auto=format&fit=crop', // Steak Gourmet
  'Entrada': 'https://images.unsplash.com/photo-1541014741259-de529411b96a?q=80&w=1974&auto=format&fit=crop', // Entrada Delicada
  'Sobremesa': 'https://images.unsplash.com/photo-1551024633-59336d6bb175?q=80&w=2069&auto=format&fit=crop', // Sobremesa Michelin
  'Vegetariano': 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=2080&auto=format&fit=crop', // Vegetais Finos
  'Default': 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop' // Prato Chef Genérico
};

function getImageForCategory(category: string, itemName: string): string {
  const lowerCat = category.toLowerCase();
  const lowerName = itemName.toLowerCase();
  
  if (lowerCat.includes('peixe') || lowerCat.includes('mar') || lowerName.includes('bacalhau') || lowerName.includes('gambas') || lowerName.includes('polvo') || lowerName.includes('carabineiro')) return dishImages['Peixe'];
  if (lowerCat.includes('carne') || lowerName.includes('novilho') || lowerName.includes('porco') || lowerName.includes('bife') || lowerName.includes('leitão')) return dishImages['Carne'];
  if (lowerCat.includes('sobremesa') || lowerCat.includes('doce') || lowerName.includes('chocolate') || lowerName.includes('gelado')) return dishImages['Sobremesa'];
  if (lowerCat.includes('entrada') || lowerCat.includes('petisco') || lowerName.includes('tosta')) return dishImages['Entrada'];
  if (lowerCat.includes('vegetariano') || lowerName.includes('legumes') || lowerName.includes('salada')) return dishImages['Vegetariano'];
  
  return dishImages['Default'];
}

export default function DishCarousel({ restaurantId }: { restaurantId: string }) {
  const menuData = (menus as any)[restaurantId];
  const [activeDish, setActiveDish] = useState<MenuItem | null>(null);
  const [allDishes, setAllDishes] = useState<MenuItem[]>([]);

  // Achatar o menu em uma lista única de pratos para o carrossel
  useEffect(() => {
    if (menuData) {
      const dishes: MenuItem[] = [];
      Object.entries(menuData).forEach(([category, items]: [string, any]) => {
        items.forEach((item: MenuItem) => {
          dishes.push({ ...item, category });
        });
      });
      setAllDishes(dishes);
      if (dishes.length > 0) setActiveDish(dishes[0]);
    }
  }, [menuData]);

  if (!menuData || allDishes.length === 0) return null;

  return (
    <div className="w-full py-12 relative group">
      
      {/* 3D Carousel Swiper */}
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        initialSlide={1}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 300,
          modifier: 1,
          slideShadows: false, // Sem sombras feias, apenas blur/foco
        }}
        pagination={{ clickable: true, dynamicBullets: true }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="dish-swiper w-full max-w-6xl !pb-16"
        onSlideChange={(swiper) => setActiveDish(allDishes[swiper.activeIndex])}
        breakpoints={{
            640: { slidesPerView: 1.5, spaceBetween: 20 }, // Mobile: foca num prato
            1024: { slidesPerView: 3, spaceBetween: 0 },   // Desktop: vê 3 pratos (centro destaque)
        }}
      >
        {allDishes.map((dish, idx) => (
          <SwiperSlide key={`${dish.name}-${idx}`} className="!w-[300px] md:!w-[400px] !h-[400px] md:!h-[500px]">
            {({ isActive }) => (
              <motion.div 
                className={`relative w-full h-full rounded-2xl overflow-hidden transition-all duration-700 ${isActive ? 'shadow-[0_20px_50px_rgba(212,175,55,0.3)] border border-[#D4AF37]' : 'opacity-40 scale-90 grayscale'}`}
              >
                {/* 3D View Overly (Apenas no Belcanto para teste) */}
                {isActive && restaurantId === 'belcanto' && (
                  <div className="absolute inset-0 z-[50]">
                    <Dish3DView 
                      imageUrl={getImageForCategory(dish.category || '', dish.name)} 
                      name={dish.name}
                      isActive={isActive}
                    />
                  </div>
                )}

                {/* Imagem do Prato */}
                <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-1000"
                    style={{ backgroundImage: `url('${getImageForCategory(dish.category || '', dish.name)}')` }}
                />
                
                {/* Overlay Gradiente (apenas se ativo para leitura) */}
                <div className={`absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent ${isActive ? 'opacity-80' : 'opacity-40'}`} />

                {/* Conteúdo dentro do Card (Minimalista) */}
                <div className={`absolute bottom-0 left-0 right-0 p-8 text-center transform transition-all duration-500 ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                    <span className="text-[#D4AF37] text-[10px] uppercase tracking-[0.3em] font-bold mb-2 block">{dish.category}</span>
                    <h3 className="text-2xl md:text-3xl font-serif text-white mb-2 leading-tight">{dish.name}</h3>
                    <div className="w-12 h-[1px] bg-[#D4AF37] mx-auto my-4" />
                    <p className="text-white/70 text-sm font-light italic mb-4 line-clamp-2">{dish.description}</p>
                    <span className="inline-block px-4 py-1 border border-[#D4AF37] text-[#D4AF37] text-sm font-bold tracking-widest uppercase rounded-sm">
                        {dish.price}
                    </span>
                </div>
              </motion.div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navegação Customizada (Setas Laterais) */}
      <div className="hidden md:flex justify-between absolute top-1/2 left-0 right-0 z-10 px-8 pointer-events-none">
         {/* Botões customizados podem ser adicionados aqui se o Swiper Navigation default não agradar */}
      </div>

      <style jsx global>{`
        .swiper-pagination-bullet { background: #fff; opacity: 0.2; }
        .swiper-pagination-bullet-active { background: #D4AF37; opacity: 1; }
      `}</style>
    </div>
  );
}

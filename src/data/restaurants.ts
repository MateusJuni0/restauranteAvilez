export const restaurants = {
  belcanto: {
    id: 'belcanto',
    name: 'Belcanto',
    desc: { 
      pt: 'Cozinha portuguesa revisitada num ambiente sofisticado. Distinguido com duas estrelas Michelin e considerado um dos 50 melhores restaurantes do mundo.', 
      en: 'Revisited Portuguese cuisine in a sophisticated setting. Distinguished with two Michelin stars and considered one of the world\'s 50 best restaurants.' 
    },
    image: '/images/belcanto-hero.jpg',
    href: '/belcanto',
    location: 'Lisboa, Chiado',
    color: '#D4AF37', // Gold
    specialty: { pt: 'Alta Gastronomia', en: 'Fine Dining' },
    ambiance: { pt: 'Elegante e Clássico', en: 'Elegant and Classic' }
  },
  encanto: {
    id: 'encanto',
    name: 'Encanto',
    desc: { 
      pt: 'Um espaço encantado onde os vegetais são as estrelas. Alta cozinha vegetariana distinguida com uma estrela Michelin.', 
      en: 'An enchanted space where vegetables are the stars. Fine vegetarian cuisine distinguished with one Michelin star.' 
    },
    image: '/images/encanto-hero.jpg',
    href: '/encanto',
    location: 'Lisboa, Chiado',
    color: '#2E8B57', // SeaGreen
    specialty: { pt: 'Vegetariano', en: 'Vegetarian' },
    ambiance: { pt: 'Mágico e Intimista', en: 'Magical and Intimate' }
  },
  minibar: {
    id: 'minibar',
    name: 'Mini Bar',
    desc: { 
      pt: 'O primeiro bar gastronómico de José Avillez. Um lugar de diversão e surpresa, com música e cocktails.', 
      en: 'José Avillez\'s first gourmet bar. A place for fun and surprise, with music and cocktails.' 
    },
    image: '/images/minibar-hero.jpg',
    href: '/minibar',
    location: 'Lisboa, Chiado',
    color: '#FFD700', // Gold
    specialty: { pt: 'Gastropub', en: 'Gastropub' },
    ambiance: { pt: 'Vibrante e Teatral', en: 'Vibrant and Theatrical' }
  },
  bairro: {
    id: 'bairro',
    name: 'Bairro do Avillez',
    desc: { 
      pt: 'Um bairro atípico no Chiado que reúne diferentes conceitos: Taberna, Páteo, Mini Bar e Pizzaria Lisboa.', 
      en: 'An atypical neighborhood in Chiado gathering different concepts: Taberna, Páteo, Mini Bar, and Pizzaria Lisboa.' 
    },
    image: '/images/bairro-hero.jpg',
    href: '/bairro',
    location: 'Lisboa, Chiado',
    color: '#CD5C5C', // IndianRed
    specialty: { pt: 'Vários Conceitos', en: 'Various Concepts' },
    ambiance: { pt: 'Animado e Diverso', en: 'Lively and Diverse' }
  },
  cantinho_chiado: {
    id: 'cantinho-chiado',
    name: 'Cantinho do Avillez (Chiado)',
    desc: { 
      pt: 'Cozinha portuguesa contemporânea com influências de viagens, num ambiente descontraído.', 
      en: 'Contemporary Portuguese cuisine with travel influences, in a relaxed atmosphere.' 
    },
    image: '/images/cantinho-chiado-hero.jpg',
    href: '/cantinho-chiado',
    location: 'Lisboa, Chiado',
    color: '#DEB887', // Burlywood
    specialty: { pt: 'Cozinha de Conforto', en: 'Comfort Food' },
    ambiance: { pt: 'Acolhedor', en: 'Cozy' }
  },
  cantinho_parque: {
    id: 'cantinho-parque',
    name: 'Cantinho do Avillez (Parque das Nações)',
    desc: { 
      pt: 'Os clássicos do Cantinho e novidades exclusivas, com vista para o Tejo.', 
      en: 'Cantinho classics and exclusive novelties, overlooking the Tagus River.' 
    },
    image: '/images/cantinho-parque-hero.jpg',
    href: '/cantinho-parque',
    location: 'Lisboa, Parque das Nações',
    color: '#4682B4', // SteelBlue
    specialty: { pt: 'Cozinha de Conforto', en: 'Comfort Food' },
    ambiance: { pt: 'Moderno e Luminoso', en: 'Modern and Bright' }
  },
  cantinho_cascais: {
    id: 'cantinho-cascais',
    name: 'Cantinho do Avillez (Cascais)',
    desc: { 
      pt: 'O espírito do Cantinho com pratos que sabem a mar e a férias.', 
      en: 'The Cantinho spirit with dishes that taste of the sea and holidays.' 
    },
    image: '/images/cantinho-cascais-hero.jpg',
    href: '/cantinho-cascais',
    location: 'Cascais',
    color: '#87CEEB', // SkyBlue
    specialty: { pt: 'Cozinha de Conforto', en: 'Comfort Food' },
    ambiance: { pt: 'Descontraído e Arejado', en: 'Relaxed and Airy' }
  },
  cantinho_porto: {
    id: 'cantinho-porto',
    name: 'Cantinho do Avillez (Porto)',
    desc: { 
      pt: 'A cozinha de José Avillez no coração do Porto, acolhedor e cheio de sabor.', 
      en: 'José Avillez\'s cuisine in the heart of Porto, cozy and full of flavor.' 
    },
    image: '/images/cantinho-porto-hero.jpg',
    href: '/cantinho-porto',
    location: 'Porto',
    color: '#B22222', // FireBrick
    specialty: { pt: 'Cozinha de Conforto', en: 'Comfort Food' },
    ambiance: { pt: 'Rústico e Charmoso', en: 'Rustic and Charming' }
  },
  tasca_chic: {
    id: 'tasca-chic',
    name: 'Tasca Chic',
    desc: { 
      pt: 'Sofisticação e tradição no Gourmet Experience do El Corte Inglés.', 
      en: 'Sophistication and tradition at El Corte Inglés Gourmet Experience.' 
    },
    image: '/images/tasca-chic-hero.jpg',
    href: '/tasca-chic',
    location: 'Lisboa, El Corte Inglés',
    color: '#000000', // Black
    specialty: { pt: 'Petiscos Chic', en: 'Chic Tapas' },
    ambiance: { pt: 'Moderno e Cosmopolita', en: 'Modern and Cosmopolitan' }
  },
  jacare: {
    id: 'jacare',
    name: 'Jacaré',
    desc: { 
      pt: 'Carnívoro vegetariano. As melhores carnes grelhadas e pratos vegetarianos surpreendentes.', 
      en: 'Vegetarian carnivore. The best grilled meats and surprising vegetarian dishes.' 
    },
    image: '/images/jacare-hero.jpg',
    href: '/jacare',
    location: 'Lisboa, El Corte Inglés',
    color: '#228B22', // ForestGreen
    specialty: { pt: 'Grelhados', en: 'Grill' },
    ambiance: { pt: 'Exótico', en: 'Exotic' }
  },
  pitaria: {
    id: 'pitaria',
    name: 'Pitaria',
    desc: { 
      pt: 'Sabores do Médio Oriente numa pitaria cheia de cor e vida.', 
      en: 'Middle Eastern flavors in a colorful and lively pita shop.' 
    },
    image: '/images/pitaria-hero.jpg',
    href: '/pitaria',
    location: 'Lisboa, Chiado',
    color: '#FF8C00', // DarkOrange
    specialty: { pt: 'Médio Oriente', en: 'Middle East' },
    ambiance: { pt: 'Descontraído e Rápido', en: 'Casual and Fast' }
  },
  pizzaria: {
    id: 'pizzaria',
    name: 'Pizzaria Lisboa',
    desc: { 
      pt: 'A paixão de José Avillez pelas pizzas. Massa fina e estaladiça, ingredientes de excelência.', 
      en: 'José Avillez\'s passion for pizza. Thin and crispy dough, excellent ingredients.' 
    },
    image: '/images/pizzaria-hero.jpg',
    href: '/pizzaria',
    location: 'Lisboa, Bairro do Avillez',
    color: '#FF4500', // OrangeRed
    specialty: { pt: 'Pizza', en: 'Pizza' },
    ambiance: { pt: 'Familiar', en: 'Family Friendly' }
  },
  mare: {
    id: 'mare',
    name: 'Maré',
    desc: { 
      pt: 'Cozinha de mar com uma vista única sobre o Atlântico.', 
      en: 'Sea cuisine with a unique view over the Atlantic.' 
    },
    image: '/images/mare-hero.jpg',
    href: '/mare',
    location: 'Cascais, Guincho',
    color: '#00BFFF', // DeepSkyBlue
    specialty: { pt: 'Peixe e Marisco', en: 'Fish and Seafood' },
    ambiance: { pt: 'Praia e Relaxamento', en: 'Beach and Relaxation' }
  },
  tasca_dubai: {
    id: 'tasca-dubai',
    name: 'Tasca Dubai',
    desc: { 
      pt: 'A cozinha portuguesa brilha no Dubai com uma vista deslumbrante.', 
      en: 'Portuguese cuisine shines in Dubai with a breathtaking view.' 
    },
    image: '/images/tasca-dubai-hero.jpg',
    href: '/tasca-dubai',
    location: 'Dubai, Mandarin Oriental',
    color: '#DAA520', // GoldenRod
    specialty: { pt: 'Internacional', en: 'International' },
    ambiance: { pt: 'Luxuoso e Exclusivo', en: 'Luxurious and Exclusive' }
  },
  mesa_macau: {
    id: 'mesa-macau',
    name: 'Mesa Macau',
    desc: { 
      pt: 'Uma viagem de sabores portugueses e macaenses no Karl Lagerfeld Hotel.', 
      en: 'A journey of Portuguese and Macanese flavors at the Karl Lagerfeld Hotel.' 
    },
    image: '/images/mesa-macau-hero.jpg',
    href: '/mesa-macau',
    location: 'Macau, The Karl Lagerfeld',
    color: '#8B0000', // DarkRed
    specialty: { pt: 'Fusão', en: 'Fusion' },
    ambiance: { pt: 'Design e Sofisticação', en: 'Design and Sophistication' }
  }
};

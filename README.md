# 🍷 Bairro do Avillez - Website Premium

Site profissional para os restaurantes do Chef José Avillez em Lisboa.

## ✨ Features

### 🎨 Design
- **Glassmorphism dark mode** elegante
- Animações suaves (Framer Motion)
- Scroll suave (Lenis)
- Responsivo mobile-first
- Paleta: Gold + Olive + Terracotta

### 🏛️ Páginas
- **Home:** Hero animado + grid 4 restaurantes + seção chef + footer
- **Landing Pages:** Páteo, Taberna, Pop Up Noélia (cada uma com hero + sobre + horários/preços)
- **Pizzaria Lisboa:** Redirect externo (minibar.pt)

### 📅 Sistema de Reservas
- Modal glassmorphism animado
- Formulário completo:
  - Dropdown restaurante
  - Nome / Email / WhatsApp
  - Date + Time pickers
  - Nº de pessoas (1-10)
- Mock envio (preparado para integração Email + WhatsApp)
- Botão calendário flutuante (bottom-right)

### 🌍 Internacionalização
- Switch PT / EN no navbar
- Todos os textos traduzidos
- Fácil expansão para mais idiomas

### 📱 UX
- Navbar flutuante glassmorphism
- Menu hamburger mobile
- Scroll-triggered animations
- Hover effects em cards
- Transições suaves

## 🚀 Rodar Local

```bash
npm install
npm run dev
```

Abrir: http://localhost:3000

## 📁 Estrutura

```
src/
├── app/
│   ├── pateo/page.tsx
│   ├── taberna/page.tsx
│   ├── noelia/page.tsx
│   └── page.tsx (home)
├── components/
│   ├── layout/Navbar.tsx
│   └── ui/
│       ├── RestaurantCard.tsx
│       ├── ReservationModal.tsx
│       └── SmoothScroll.tsx
└── data/restaurants.ts
```

## 🎯 Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS (custom config)
- **Animações:** Framer Motion
- **Smooth Scroll:** Lenis
- **Icons:** Lucide React
- **TypeScript:** Full type safety

## 📝 Próximos Passos (Opcional)

- [ ] Adicionar fotos reais dos restaurantes
- [ ] Menu digital interativo com PDFs
- [ ] Pratos 3D (Three.js ou fake CSS 3D)
- [ ] Integração backend (Email/WhatsApp real)
- [ ] Galeria de fotos
- [ ] Google Maps embed
- [ ] SEO meta tags
- [ ] Analytics

## 💰 Custo Desenvolvimento

- **Tempo:** ~60 minutos
- **Custo:** ~$6-7 USD (Anthropic Claude Sonnet)
- **Linhas código:** ~1.500

---

**Desenvolvido com ❤️ para Bairro do Avillez**

import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        gold: { 500: '#D4AF37', 600: '#B8941F' },
        olive: { 500: '#556B2F', 700: '#3D4F1F' },
        terracotta: { 500: '#E07855', 600: '#CC5A3A' },
        cream: { 100: '#FFF8E7', 200: '#F5E6D3' }
      },
      backdropBlur: { xs: '2px' },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
};
export default config;

import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/ui/SmoothScroll";
import CustomCursor from "@/components/ui/CustomCursor";
import { Inter, Outfit, Cormorant_Garamond } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' });
const cormorant = Cormorant_Garamond({ 
  subsets: ['latin'], 
  variable: '--font-serif',
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic']
});

export const metadata: Metadata = {
  title: "Bairro do Avillez | Gastronomia em Lisboa",
  description: "Experiência gastronómica única no coração de Lisboa - Hub Gastronómico de Elite",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt" className="scroll-smooth">
      <body className={`${inter.variable} ${outfit.variable} ${cormorant.variable} bg-[#050505] text-[#f5f5f5] antialiased selection:bg-[#D4AF37] selection:text-black font-sans cursor-none`}>
        <CustomCursor />
        <SmoothScroll>
          {/* Subtle Gradient Mesh Background for Depth */}
          <div className="fixed inset-0 z-[-1] opacity-20 pointer-events-none">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-[#D4AF37]/10 blur-[120px]"></div>
            <div className="absolute bottom-[20%] right-[-5%] w-[30%] h-[50%] rounded-full bg-[#AA8C2C]/5 blur-[100px]"></div>
          </div>

          {/* Film Grain Texture */}
          <div className="fixed inset-0 z-50 pointer-events-none opacity-[0.03] bg-[url('https://res.cloudinary.com/dqr68rvcl/image/upload/v1706821217/grain_z0z2z2.png')] mix-blend-overlay"></div>
          
          <div className="relative z-0">
            {children}
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}

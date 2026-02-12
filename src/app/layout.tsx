import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/ui/SmoothScroll";
import { Inter, Outfit } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' });

export const metadata: Metadata = {
  title: "Bairro do Avillez | José Avillez",
  description: "Experiência gastronómica única no coração de Lisboa - Hub Gastronómico de Elite",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt" className="scroll-smooth">
      <body className={`${inter.variable} ${outfit.variable} bg-[#0a0a0a] text-[#f5f5f5] antialiased selection:bg-[#D4AF37] selection:text-black`}>
        <SmoothScroll>
          {/* Film Grain Texture */}
          <div className="fixed inset-0 z-50 pointer-events-none opacity-[0.05] bg-[url('https://res.cloudinary.com/dqr68rvcl/image/upload/v1706821217/grain_z0z2z2.png')] mix-blend-overlay"></div>
          
          <div className="relative z-0">
            {children}
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}

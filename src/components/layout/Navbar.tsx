'use client';
import { useState } from 'react';
import { Menu, X, Calendar } from 'lucide-react';
import ReservationModal from '@/components/ui/ReservationModal';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [showReservation, setShowReservation] = useState(false);
  const [lang, setLang] = useState<'pt' | 'en'>('pt');

  const links = [
    { pt: 'Início', en: 'Home', href: '/' },
    { pt: 'Restaurantes', en: 'Restaurants', href: '#restaurantes' },
    { pt: 'Menu', en: 'Menu', href: '/menu' },
    { pt: 'Contacto', en: 'Contact', href: '#contacto' }
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-2xl font-bold text-gold-500">Bairro do Avillez</h1>
            
            <div className="hidden md:flex items-center gap-8">
              {links.map(l => (
                <a key={l.href} href={l.href} className="hover:text-gold-500 transition">
                  {l[lang]}
                </a>
              ))}
              <button onClick={() => setLang(lang === 'pt' ? 'en' : 'pt')} 
                      className="px-3 py-1 glass rounded-lg text-sm">
                {lang.toUpperCase()}
              </button>
            </div>

            <button onClick={() => setOpen(!open)} className="md:hidden">
              {open ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden glass-card m-4">
            {links.map(l => (
              <a key={l.href} href={l.href} className="block py-3 hover:text-gold-500">
                {l[lang]}
              </a>
            ))}
          </div>
        )}

        <button 
          onClick={() => setShowReservation(true)}
          className="fixed bottom-6 right-6 glass-card p-4 rounded-full hover:scale-110 transition shadow-2xl z-40"
        >
          <Calendar className="w-6 h-6 text-gold-500" />
        </button>
      </nav>

      <ReservationModal isOpen={showReservation} onClose={() => setShowReservation(false)} />
    </>
  );
}

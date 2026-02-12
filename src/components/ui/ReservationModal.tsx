'use client';
import { useState } from 'react';
import { X, Calendar as CalendarIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ReservationModal({ isOpen, onClose }: ReservationModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    restaurant: 'pateo'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Reserva enviada! Email: ${formData.email} | WhatsApp: ${formData.phone}`);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="glass-card max-w-md w-full max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold flex items-center gap-2">
                  <CalendarIcon className="w-6 h-6 text-gold-500" />
                  Reservar Mesa
                </h2>
                <button onClick={onClose} className="hover:text-gold-500 transition">
                  <X className="w-6 h-6" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm mb-2">Restaurante</label>
                  <select 
                    className="w-full glass px-4 py-2 rounded-lg"
                    value={formData.restaurant}
                    onChange={(e) => setFormData({...formData, restaurant: e.target.value})}
                  >
                    <option value="pateo">Páteo</option>
                    <option value="taberna">Taberna</option>
                    <option value="pizzaria">Pizzaria Lisboa</option>
                    <option value="noelia">Pop Up Noélia</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm mb-2">Nome</label>
                  <input 
                    type="text" 
                    required
                    className="w-full glass px-4 py-2 rounded-lg"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2">Email</label>
                  <input 
                    type="email" 
                    required
                    className="w-full glass px-4 py-2 rounded-lg"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2">WhatsApp</label>
                  <input 
                    type="tel" 
                    required
                    className="w-full glass px-4 py-2 rounded-lg"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm mb-2">Data</label>
                    <input 
                      type="date" 
                      required
                      className="w-full glass px-4 py-2 rounded-lg"
                      value={formData.date}
                      onChange={(e) => setFormData({...formData, date: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-2">Hora</label>
                    <input 
                      type="time" 
                      required
                      className="w-full glass px-4 py-2 rounded-lg"
                      value={formData.time}
                      onChange={(e) => setFormData({...formData, time: e.target.value})}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm mb-2">Nº de Pessoas</label>
                  <select 
                    className="w-full glass px-4 py-2 rounded-lg"
                    value={formData.guests}
                    onChange={(e) => setFormData({...formData, guests: e.target.value})}
                  >
                    {[1,2,3,4,5,6,7,8,9,10].map(n => (
                      <option key={n} value={n}>{n}</option>
                    ))}
                  </select>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-gold-500 hover:bg-gold-600 text-black font-bold py-3 rounded-lg transition"
                >
                  Confirmar Reserva
                </button>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

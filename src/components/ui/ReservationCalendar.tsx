// projects/restauranteAvilez/src/components/ui/ReservationCalendar.tsx
'use client'

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCalendarAlt, FaClock, FaUser, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const days = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

export default function ReservationCalendar({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const [date, setDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [step, setStep] = useState(1); // 1: Date, 2: Time/People, 3: Confirm

  const getDaysInMonth = (month: number, year: number) => new Date(year, month + 1, 0).getDate();
  const firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  const daysInMonth = getDaysInMonth(date.getMonth(), date.getFullYear());

  const handlePrevMonth = () => setDate(new Date(date.getFullYear(), date.getMonth() - 1, 1));
  const handleNextMonth = () => setDate(new Date(date.getFullYear(), date.getMonth() + 1, 1));

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
        >
          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="bg-[#0a0a0a] border border-[#D4AF37]/30 w-full max-w-lg p-8 rounded-sm shadow-[0_0_50px_rgba(212,175,55,0.1)]"
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-4">
              <h2 className="text-2xl font-serif text-white tracking-widest uppercase">
                Reserva <span className="text-[#D4AF37]">Exclusiva</span>
              </h2>
              <button onClick={onClose} className="text-gray-500 hover:text-[#D4AF37] transition-colors text-sm uppercase tracking-widest">Fechar</button>
            </div>

            {/* Step 1: Calendar */}
            {step === 1 && (
              <div className="space-y-6">
                <div className="flex justify-between items-center text-[#D4AF37] uppercase tracking-widest text-sm font-bold">
                  <button onClick={handlePrevMonth} className="hover:text-white transition-colors"><FaChevronLeft /></button>
                  <span>{months[date.getMonth()]} {date.getFullYear()}</span>
                  <button onClick={handleNextMonth} className="hover:text-white transition-colors"><FaChevronRight /></button>
                </div>

                <div className="grid grid-cols-7 gap-2 text-center text-xs text-gray-500 uppercase tracking-wide mb-2">
                  {days.map(d => <div key={d}>{d}</div>)}
                </div>

                <div className="grid grid-cols-7 gap-2">
                  {Array.from({ length: firstDay }).map((_, i) => <div key={`empty-${i}`} />)}
                  {Array.from({ length: daysInMonth }).map((_, i) => {
                    const day = i + 1;
                    const isSelected = selectedDate === day;
                    return (
                      <button
                        key={day}
                        onClick={() => setSelectedDate(day)}
                        className={`
                          h-10 w-10 flex items-center justify-center rounded-full text-sm transition-all duration-300 relative group
                          ${isSelected ? 'bg-[#D4AF37] text-black font-bold shadow-[0_0_15px_rgba(212,175,55,0.4)]' : 'text-gray-300 hover:text-[#D4AF37] hover:bg-white/5'}
                        `}
                      >
                        {day}
                        {!isSelected && <span className="absolute inset-0 rounded-full border border-[#D4AF37]/0 group-hover:border-[#D4AF37]/30 transition-all duration-300 scale-90 group-hover:scale-100"></span>}
                      </button>
                    );
                  })}
                </div>

                <div className="mt-8 flex justify-end">
                  <button 
                    disabled={!selectedDate}
                    onClick={() => setStep(2)}
                    className="px-8 py-3 bg-gradient-to-r from-[#D4AF37] to-[#AA8C2C] text-black text-xs font-bold tracking-[0.2em] uppercase disabled:opacity-50 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all duration-300 transform hover:-translate-y-1"
                  >
                    Continuar
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Details */}
            {step === 2 && (
              <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] text-[#D4AF37] tracking-[0.2em] uppercase mb-3">Horário</label>
                    <div className="relative">
                      <FaClock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                      <select className="w-full bg-white/5 border border-white/10 text-white text-xs py-3 pl-10 pr-4 focus:outline-none focus:border-[#D4AF37] transition-colors appearance-none">
                        <option>19:00</option>
                        <option>20:00</option>
                        <option>21:00</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] text-[#D4AF37] tracking-[0.2em] uppercase mb-3">Pessoas</label>
                    <div className="relative">
                      <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                      <select className="w-full bg-white/5 border border-white/10 text-white text-xs py-3 pl-10 pr-4 focus:outline-none focus:border-[#D4AF37] transition-colors appearance-none">
                        <option>2 Pessoas</option>
                        <option>4 Pessoas</option>
                        <option>6 Pessoas</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between pt-8 border-t border-white/5">
                  <button onClick={() => setStep(1)} className="text-gray-500 hover:text-white text-xs tracking-[0.2em] uppercase transition-colors">Voltar</button>
                  <button 
                    onClick={() => { alert('Reserva Solicitada com Sucesso!'); onClose(); }}
                    className="px-8 py-3 bg-gradient-to-r from-[#D4AF37] to-[#AA8C2C] text-black text-xs font-bold tracking-[0.2em] uppercase hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all duration-300"
                  >
                    Confirmar
                  </button>
                </div>
              </div>
            )}

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

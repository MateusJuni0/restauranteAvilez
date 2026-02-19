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
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative bg-black/40 backdrop-blur-2xl border border-[#D4AF37]/20 w-full max-w-lg p-8 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden group"
          >
            {/* Inner Glow Effect */}
            <div className="absolute -top-24 -left-24 w-48 h-48 bg-[#D4AF37]/10 rounded-full blur-[80px] group-hover:bg-[#D4AF37]/20 transition-all duration-1000"></div>

            {/* Header */}
            <div className="flex justify-between items-center mb-10 relative z-10">
              <div>
                <h2 className="text-2xl font-serif text-white tracking-[0.2em] uppercase leading-none mb-2">
                  Reserva <span className="text-[#D4AF37] italic">Privada</span>
                </h2>
                <div className="h-[1px] w-12 bg-gradient-to-r from-[#D4AF37] to-transparent"></div>
              </div>
              <button 
                onClick={onClose} 
                className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 text-gray-400 hover:text-[#D4AF37] hover:border-[#D4AF37] transition-all duration-500"
              >
                ✕
              </button>
            </div>

            {/* Step 1: Calendar */}
            {step === 1 && (
              <div className="space-y-8 relative z-10 animate-in fade-in zoom-in-95 duration-700">
                <div className="flex justify-between items-center px-2">
                  <button onClick={handlePrevMonth} className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-[#D4AF37] transition-colors"><FaChevronLeft /></button>
                  <span className="text-[11px] font-bold tracking-[0.4em] text-white uppercase">{months[date.getMonth()]} {date.getFullYear()}</span>
                  <button onClick={handleNextMonth} className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-[#D4AF37] transition-colors"><FaChevronRight /></button>
                </div>

                <div className="grid grid-cols-7 gap-3 text-center text-[9px] text-[#D4AF37]/50 font-bold uppercase tracking-[0.2em]">
                  {days.map(d => <div key={d}>{d}</div>)}
                </div>

                <div className="grid grid-cols-7 gap-3">
                  {Array.from({ length: firstDay }).map((_, i) => <div key={`empty-${i}`} />)}
                  {Array.from({ length: daysInMonth }).map((_, i) => {
                    const day = i + 1;
                    const isSelected = selectedDate === day;
                    return (
                      <button
                        key={day}
                        onClick={() => setSelectedDate(day)}
                        className={`
                          relative h-10 w-10 flex items-center justify-center rounded-xl text-xs transition-all duration-500
                          ${isSelected 
                            ? 'text-black font-bold' 
                            : 'text-gray-400 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/10'}
                        `}
                      >
                        {isSelected && (
                          <motion.div 
                            layoutId="activeDay"
                            className="absolute inset-0 bg-gradient-to-br from-[#F4C430] to-[#AA8C2C] rounded-xl shadow-[0_0_20px_rgba(212,175,55,0.4)]"
                          />
                        )}
                        <span className="relative z-10">{day}</span>
                      </button>
                    );
                  })}
                </div>

                <div className="pt-6">
                  <button 
                    disabled={!selectedDate}
                    onClick={() => setStep(2)}
                    className="w-full py-4 bg-white text-black text-[10px] font-bold tracking-[0.3em] uppercase disabled:opacity-20 hover:bg-[#D4AF37] hover:text-white transition-all duration-700 rounded-lg shadow-xl"
                  >
                    Próximo Passo
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Details */}
            {step === 2 && (
              <div className="space-y-10 relative z-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
                <div className="space-y-6">
                  <div className="group/field">
                    <label className="block text-[9px] text-[#D4AF37] tracking-[0.3em] uppercase mb-4 ml-1">Horário de Preferência</label>
                    <div className="grid grid-cols-3 gap-3">
                      {['19:30', '20:30', '21:30'].map(t => (
                        <button key={t} className="py-3 bg-white/5 border border-white/10 text-[10px] text-white hover:border-[#D4AF37] hover:bg-[#D4AF37]/5 transition-all duration-500 rounded-lg">
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="group/field">
                    <label className="block text-[9px] text-[#D4AF37] tracking-[0.3em] uppercase mb-4 ml-1">Número de Convivas</label>
                    <div className="grid grid-cols-4 gap-3">
                      {[2, 4, 6, 8].map(n => (
                        <button key={n} className="py-3 bg-white/5 border border-white/10 text-[10px] text-white hover:border-[#D4AF37] hover:bg-[#D4AF37]/5 transition-all duration-500 rounded-lg">
                          {n}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-8 border-t border-white/10">
                  <button onClick={() => setStep(1)} className="text-[9px] text-gray-500 hover:text-white tracking-[0.3em] uppercase transition-colors">← Voltar</button>
                  <button 
                    onClick={() => { alert('Reserva Solicitada ao Concierge!'); onClose(); }}
                    className="px-10 py-4 bg-gradient-to-r from-[#D4AF37] to-[#AA8C2C] text-black text-[10px] font-bold tracking-[0.3em] uppercase rounded-lg shadow-lg hover:shadow-[#D4AF37]/20 transition-all duration-700 transform hover:-translate-y-1"
                  >
                    Confirmar Reserva
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

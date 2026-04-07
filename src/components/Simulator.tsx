import React, { useState } from 'react';
import { Bell, ArrowLeft, ShieldCheck, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export default function Simulator() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email) {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center text-center space-y-6 pt-20"
      >
        <div className="w-24 h-24 rounded-full bg-primary-container flex items-center justify-center text-white shadow-xl">
          <ShieldCheck size={48} />
        </div>
        <div className="space-y-2">
          <h2 className="text-3xl font-headline font-bold text-primary">¡Registro Exitoso!</h2>
          <p className="text-on-surface-variant max-w-xs mx-auto">
            Te notificaremos en cuanto el simulador esté disponible. ¡Prepárate para el éxito!
          </p>
        </div>
        <button 
          onClick={() => setSubmitted(false)}
          className="text-primary font-bold hover:underline"
        >
          Volver al registro
        </button>
      </motion.div>
    );
  }

  return (
    <div className="space-y-10 flex flex-col items-center">
      <header className="text-center space-y-4">
        <div className="inline-flex bg-primary/10 text-primary px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
          Próximamente
        </div>
        <h2 className="text-5xl md:text-6xl font-headline font-extrabold text-primary leading-tight">
          Simulador de<br />Examen
        </h2>
        <p className="text-on-surface-variant text-lg max-w-md mx-auto">
          Plataforma de preparación avanzada para aspirantes a las fuerzas armadas.
        </p>
      </header>

      {/* Offer Card */}
      <motion.div 
        whileHover={{ y: -5 }}
        className="bg-surface-container-lowest p-8 rounded-2xl shadow-xl border border-white/20 w-full max-w-md relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 p-4 opacity-10">
          <Sparkles size={80} />
        </div>
        
        <div className="text-center space-y-4 relative z-10">
          <p className="text-tertiary font-bold text-sm uppercase tracking-widest">Oferta de Lanzamiento</p>
          <div className="flex items-center justify-center gap-2">
            <span className="text-7xl font-extrabold text-primary font-headline">50%</span>
            <span className="text-xl font-bold text-on-surface-variant uppercase">Descuento</span>
          </div>
          <p className="text-on-surface-variant text-sm">
            Regístrate ahora para asegurar tu precio preferencial.
          </p>
        </div>
      </motion.div>

      {/* Registration Form */}
      <form onSubmit={handleSubmit} className="w-full max-w-md space-y-6">
        <div className="space-y-2">
          <label className="block text-xs font-bold text-primary uppercase tracking-widest px-1">Nombre Completo</label>
          <input 
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Ej. Juan Pérez"
            className="w-full bg-white border-2 border-surface-container-high rounded-xl px-6 py-4 text-lg focus:border-primary focus:ring-0 transition-all outline-none"
          />
        </div>
        
        <div className="space-y-2">
          <label className="block text-xs font-bold text-primary uppercase tracking-widest px-1">Correo Electrónico</label>
          <input 
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="tu@correo.com"
            className="w-full bg-white border-2 border-surface-container-high rounded-xl px-6 py-4 text-lg focus:border-primary focus:ring-0 transition-all outline-none"
          />
        </div>

        <motion.button 
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="w-full bg-primary text-white py-5 rounded-xl text-lg font-bold flex items-center justify-center gap-3 shadow-lg shadow-primary/20 hover:bg-primary-container transition-all"
        >
          <Bell size={20} />
          NOTIFICARME
        </motion.button>
      </form>

      <p className="text-outline text-[10px] font-bold uppercase tracking-[0.2em] text-center max-w-[250px]">
        Recibirás notificaciones exclusivas sobre disponibilidad y promociones.
      </p>
    </div>
  );
}

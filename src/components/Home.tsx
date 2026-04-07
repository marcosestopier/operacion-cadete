import { Link } from 'react-router-dom';
import { ShieldCheck, Anchor, Calendar, Calculator, ClipboardList, Verified, LockOpen, ChevronRight, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function Home() {
  return (
    <div className="space-y-8">
      <h2 className="font-headline font-bold text-2xl text-on-surface px-1 mb-2">Convocatorias</h2>
      
      {/* Hero Cards Grid */}
      <section className="grid grid-cols-2 gap-4">
        {/* SEDENA Card */}
        <a 
          href="https://drive.google.com/file/d/1lGcBWAK7xvDyseVxjZjE2maP05KE09aA/preview?usp=sharing" 
          target="_blank" 
          rel="noopener noreferrer"
          className="block"
        >
          <motion.div 
            whileTap={{ scale: 0.95 }}
            className="aspect-square rounded-xl bg-primary-container p-6 flex flex-col justify-between items-start transition-all duration-300 ease-in-out editorial-shadow cursor-pointer"
          >
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
              <ShieldCheck className="text-white" size={32} />
            </div>
            <div className="space-y-1">
              <p className="text-white/70 font-sans text-[10px] font-bold tracking-widest uppercase">INSTITUCIÓN</p>
              <h2 className="text-white font-headline text-2xl font-bold">SEDENA</h2>
            </div>
          </motion.div>
        </a>

        {/* SEMAR Card */}
        <a 
          href="https://drive.google.com/file/d/1T37-JnTEI04J2lbIGSI_tDZx1c8w0qRr/preview?usp=sharing" 
          target="_blank" 
          rel="noopener noreferrer"
          className="block"
        >
          <motion.div 
            whileTap={{ scale: 0.95 }}
            className="aspect-square rounded-xl bg-secondary-container p-6 flex flex-col justify-between items-start transition-all duration-300 ease-in-out editorial-shadow cursor-pointer"
          >
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
              <Anchor className="text-white" size={32} />
            </div>
            <div className="space-y-1">
              <p className="text-white/70 font-sans text-[10px] font-bold tracking-widest uppercase">INSTITUCIÓN</p>
              <h2 className="text-white font-headline text-2xl font-bold">SEMAR</h2>
            </div>
          </motion.div>
        </a>
      </section>

      {/* Horizontal Calendar Card */}
      <section>
        <Link to="/calendar">
          <motion.div 
            whileTap={{ scale: 0.98 }}
            className="glass-card rounded-xl p-6 flex items-center justify-between editorial-shadow border border-white/20 transition-all duration-300 ease-in-out"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Calendar className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="font-headline font-bold text-lg text-on-surface">Calendario</h3>
                <p className="text-on-surface-variant text-sm font-sans">Próximas convocatorias y fechas clave</p>
              </div>
            </div>
            <ChevronRight className="text-outline" size={24} />
          </motion.div>
        </Link>
      </section>

      {/* Herramientas Section */}
      <section className="space-y-4">
        <h2 className="font-headline font-bold text-2xl text-on-surface px-1">Herramientas</h2>
        <div className="grid grid-cols-1 gap-4">
          {/* IMC Tool */}
          <Link to="/imc">
            <motion.div 
              whileTap={{ scale: 0.99 }}
              className="bg-surface-container-lowest rounded-xl p-5 flex items-center justify-between transition-all duration-300 ease-in-out editorial-shadow"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                  <Calculator className="text-secondary" size={20} />
                </div>
                <span className="font-sans font-semibold text-on-surface">Calculadora de IMC</span>
              </div>
              <ArrowRight className="text-outline-variant" size={16} />
            </motion.div>
          </Link>

          {/* Checklist Tool */}
          <Link to="/checklist">
            <motion.div 
              whileTap={{ scale: 0.99 }}
              className="bg-surface-container-lowest rounded-xl p-5 flex items-center justify-between transition-all duration-300 ease-in-out editorial-shadow"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-tertiary/10 flex items-center justify-center">
                  <ClipboardList className="text-tertiary" size={20} />
                </div>
                <span className="font-sans font-semibold text-on-surface">Checklist de papelería</span>
              </div>
              <ArrowRight className="text-outline-variant" size={16} />
            </motion.div>
          </Link>
        </div>
      </section>

      {/* Featured Card: Simulador */}
      <section>
        <Link to="/simulator">
          <motion.div 
            whileTap={{ scale: 0.98 }}
            className="relative overflow-hidden rounded-xl bg-gradient-to-br from-[#FFB300] to-[#FF8F00] p-8 text-on-tertiary-fixed-variant editorial-shadow transition-all duration-300 ease-in-out"
          >
            {/* Decorative background icon */}
            <LockOpen className="absolute -right-8 -top-8 text-[160px] opacity-10 rotate-12" />
            
            <div className="relative z-10 space-y-6">
              <div className="flex justify-between items-start">
                <div className="bg-white/20 backdrop-blur-md rounded-full px-4 py-1.5 flex items-center gap-2">
                  <Verified className="text-sm" size={16} />
                  <span className="text-[10px] font-bold tracking-widest uppercase">PREMIUM</span>
                </div>
                <div className="bg-tertiary-container text-on-tertiary-container px-3 py-1 rounded-lg font-bold text-sm shadow-lg">
                  $250 MXN
                </div>
              </div>
              
              <div className="space-y-2">
                <h3 className="font-headline font-extrabold text-3xl leading-tight text-tertiary">Simulador de Examen Completo</h3>
                <p className="text-tertiary/80 text-sm font-medium max-w-[80%]">Prepárate con el banco de preguntas más actualizado del 2024.</p>
              </div>
              
              <button className="w-full bg-tertiary py-4 rounded-full text-white font-bold flex items-center justify-center gap-3 shadow-2xl transition-all active:scale-95">
                <LockOpen className="text-xl" size={20} />
                Desbloquear acceso
              </button>
            </div>
          </motion.div>
        </Link>
      </section>
    </div>
  );
}

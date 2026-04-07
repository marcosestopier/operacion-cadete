import { Link } from 'react-router-dom';
import { ShieldCheck, Anchor, Calendar, Calculator, ClipboardList, Verified, LockOpen, ChevronRight, ArrowRight, ListChecks } from 'lucide-react';
import { motion } from 'motion/react';

export default function Home() {
  return (
    <div className="space-y-8">
      <h2 className="font-headline font-bold text-2xl text-black px-1 mb-2">Convocatorias</h2>
      
      {/* Hero Cards Grid */}
      <section className="grid grid-cols-2 gap-3">
        {/* SEDENA Card */}
        <a 
          href="https://drive.google.com/file/d/1lGcBWAK7xvDyseVxjZjE2maP05KE09aA/preview?usp=sharing" 
          target="_blank" 
          rel="noopener noreferrer"
          className="block"
        >
          <motion.div 
            whileTap={{ scale: 0.95 }}
            className="aspect-square rounded-xl bg-primary-container p-4 flex flex-col justify-between items-start transition-all duration-300 ease-in-out editorial-shadow cursor-pointer"
          >
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
              <ShieldCheck className="text-white" size={24} />
            </div>
            <div className="space-y-0.5">
              <p className="text-white/70 font-sans text-[8px] font-bold tracking-widest uppercase">INSTITUCIÓN</p>
              <h2 className="text-white font-headline text-xl font-bold">SEDENA</h2>
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
            className="aspect-square rounded-xl bg-secondary-container p-4 flex flex-col justify-between items-start transition-all duration-300 ease-in-out editorial-shadow cursor-pointer"
          >
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
              <Anchor className="text-white" size={24} />
            </div>
            <div className="space-y-0.5">
              <p className="text-white/70 font-sans text-[8px] font-bold tracking-widest uppercase">INSTITUCIÓN</p>
              <h2 className="text-white font-headline text-xl font-bold">SEMAR</h2>
            </div>
          </motion.div>
        </a>
      </section>

      {/* Horizontal Cards Section */}
      <section className="space-y-4">
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
                <h3 className="font-headline font-bold text-lg text-black">Calendario</h3>
                <p className="text-black/60 text-sm font-sans">Próximas convocatorias y fechas clave</p>
              </div>
            </div>
            <ChevronRight className="text-black/30" size={24} />
          </motion.div>
        </Link>

        <Link to="/requirements">
          <motion.div 
            whileTap={{ scale: 0.98 }}
            className="glass-card rounded-xl p-6 flex items-center justify-between editorial-shadow border border-white/20 transition-all duration-300 ease-in-out"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                <ListChecks className="text-secondary" size={24} />
              </div>
              <div>
                <h3 className="font-headline font-bold text-lg text-black">Requisitos</h3>
                <p className="text-black/60 text-sm font-sans">Perfil de ingreso y bases legales</p>
              </div>
            </div>
            <ChevronRight className="text-black/30" size={24} />
          </motion.div>
        </Link>
      </section>

      {/* Herramientas Section */}
      <section className="space-y-4">
        <h2 className="font-headline font-bold text-2xl text-black px-1">Herramientas</h2>
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
                <span className="font-sans font-bold text-black">Calculadora de IMC</span>
              </div>
              <ArrowRight className="text-black/30" size={16} />
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
                <span className="font-sans font-bold text-black">Checklist de papelería</span>
              </div>
              <ArrowRight className="text-black/30" size={16} />
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
                <h3 className="font-headline font-extrabold text-3xl leading-tight text-black">Simulador de Examen Completo</h3>
                <p className="text-black/80 text-sm font-medium max-w-[80%]">Prepárate con el banco de preguntas más actualizado del 2024.</p>
              </div>
              
              <button className="w-full bg-tertiary py-4 rounded-full text-white font-bold flex items-center justify-center gap-3 shadow-2xl transition-all active:scale-95">
                <LockOpen className="text-xl" size={20} />
                Desbloquear acceso
              </button>
            </div>
          </motion.div>
        </Link>
      </section>

      {/* iOS Install Instructions */}
      <section className="bg-surface-container p-6 rounded-xl border border-outline-variant/30">
        <h3 className="font-headline font-bold text-lg mb-3 text-black flex items-center gap-2">
          <ArrowRight size={20} className="text-primary" />
          Instalar en tu dispositivo
        </h3>
        <div className="space-y-4">
          <div className="flex gap-3">
            <div className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold flex-shrink-0">1</div>
            <p className="text-sm text-black/70">
              <span className="font-bold text-black">Android:</span> Toca los tres puntos y selecciona "Instalar aplicación".
            </p>
          </div>
          <div className="flex gap-3">
            <div className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold flex-shrink-0">2</div>
            <div className="text-sm text-black/70">
              <p className="font-bold text-black mb-1">iOS (iPhone/iPad):</p>
              <ul className="list-disc ml-4 space-y-1">
                <li>Toca el botón <span className="font-bold">Compartir</span> (cuadrado con flecha).</li>
                <li>Desliza hacia abajo y toca <span className="font-bold">"Agregar a inicio"</span>.</li>
                <li>Confirma tocando <span className="font-bold">"Agregar"</span>.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

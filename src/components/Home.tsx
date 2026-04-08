import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Anchor, Calendar, Calculator, ClipboardList, Verified, LockOpen, ChevronRight, ArrowRight, ListChecks, Play, Share2 } from 'lucide-react';
import { motion } from 'motion/react';

export default function Home() {
  const handleShare = async (e: React.MouseEvent, title: string, url: string) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: `Convocatoria ${title}`,
          text: `Consulta la convocatoria de ${title} aquí:`,
          url: url,
        });
      } catch (error) {
        console.error('Error sharing:', error);
      }
    } else {
      // Fallback: Copy to clipboard
      try {
        await navigator.clipboard.writeText(url);
        alert('Enlace copiado al portapapeles');
      } catch (err) {
        console.error('Could not copy text: ', err);
      }
    }
  };

  return (
    <div className="space-y-10 pb-10">
      {/* Convocatorias Section */}
      <section className="space-y-4">
        <div className="flex items-end justify-between px-1">
          <h2 className="font-headline font-bold text-xl tracking-tight">Convocatorias</h2>
          <span className="micro-label">2024 - 2025</span>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          {/* SEDENA Card */}
          <a 
            href="https://drive.google.com/file/d/1lGcBWAK7xvDyseVxjZjE2maP05KE09aA/preview?usp=sharing" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block group"
          >
            <motion.div 
              whileTap={{ scale: 0.98 }}
              className="minimal-card p-5 h-full flex flex-col justify-between border-l-4 border-l-primary"
            >
              <div className="flex justify-between items-start">
                <div className="w-8 h-8 rounded-lg bg-primary/5 flex items-center justify-center text-primary">
                  <ShieldCheck size={20} />
                </div>
                <button 
                  onClick={(e) => handleShare(e, 'SEDENA', 'https://drive.google.com/file/d/1lGcBWAK7xvDyseVxjZjE2maP05KE09aA/preview?usp=sharing')}
                  className="p-1.5 text-zinc-300 hover:text-primary transition-colors"
                >
                  <Share2 size={14} />
                </button>
              </div>
              <div className="mt-6">
                <p className="micro-label mb-1">Ejército y FAM</p>
                <h3 className="font-headline font-bold text-lg">SEDENA</h3>
              </div>
            </motion.div>
          </a>

          {/* SEMAR Card */}
          <a 
            href="https://drive.google.com/file/d/1T37-JnTEI04J2lbIGSI_tDZx1c8w0qRr/preview?usp=sharing" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block group"
          >
            <motion.div 
              whileTap={{ scale: 0.98 }}
              className="minimal-card p-5 h-full flex flex-col justify-between border-l-4 border-l-secondary"
            >
              <div className="flex justify-between items-start">
                <div className="w-8 h-8 rounded-lg bg-secondary/5 flex items-center justify-center text-secondary">
                  <Anchor size={20} />
                </div>
                <button 
                  onClick={(e) => handleShare(e, 'SEMAR', 'https://drive.google.com/file/d/1T37-JnTEI04J2lbIGSI_tDZx1c8w0qRr/preview?usp=sharing')}
                  className="p-1.5 text-zinc-300 hover:text-secondary transition-colors"
                >
                  <Share2 size={14} />
                </button>
              </div>
              <div className="mt-6">
                <p className="micro-label mb-1">Armada de México</p>
                <h3 className="font-headline font-bold text-lg">SEMAR</h3>
              </div>
            </motion.div>
          </a>
        </div>
      </section>

      {/* Navigation Section */}
      <section className="space-y-2">
        <Link to="/calendar" className="block">
          <motion.div 
            whileTap={{ scale: 0.99 }}
            className="flex items-center justify-between py-4 px-2 border-b border-outline hover:bg-zinc-50 transition-colors"
          >
            <div className="flex items-center gap-4">
              <Calendar className="text-zinc-400" size={20} />
              <span className="font-medium text-zinc-900">Calendario de Admisión</span>
            </div>
            <ChevronRight className="text-zinc-300" size={18} />
          </motion.div>
        </Link>

        <Link to="/requirements" className="block">
          <motion.div 
            whileTap={{ scale: 0.99 }}
            className="flex items-center justify-between py-4 px-2 border-b border-outline hover:bg-zinc-50 transition-colors"
          >
            <div className="flex items-center gap-4">
              <ListChecks className="text-zinc-400" size={20} />
              <span className="font-medium text-zinc-900">Requisitos y Bases</span>
            </div>
            <ChevronRight className="text-zinc-300" size={18} />
          </motion.div>
        </Link>
      </section>

      {/* Herramientas Section */}
      <section className="space-y-4">
        <h2 className="font-headline font-bold text-xl px-1">Herramientas</h2>
        <div className="grid grid-cols-1 gap-3">
          <Link to="/imc">
            <div className="minimal-card p-4 flex items-center justify-between group">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-zinc-50 flex items-center justify-center text-zinc-500 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                  <Calculator size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-sm">Calculadora de IMC</h4>
                  <p className="text-[10px] text-zinc-400">Verifica tu aptitud física</p>
                </div>
              </div>
              <ArrowRight className="text-zinc-300 group-hover:text-primary transition-colors" size={16} />
            </div>
          </Link>

          <Link to="/checklist">
            <div className="minimal-card p-4 flex items-center justify-between group">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-zinc-50 flex items-center justify-center text-zinc-500 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                  <ClipboardList size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-sm">Checklist de papelería</h4>
                  <p className="text-[10px] text-zinc-400">Documentación necesaria</p>
                </div>
              </div>
              <ArrowRight className="text-zinc-300 group-hover:text-primary transition-colors" size={16} />
            </div>
          </Link>

          <Link to="/simulator-demo">
            <div className="minimal-card p-4 flex items-center justify-between group border-dashed border-primary/30 bg-primary/[0.02]">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <Play size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-sm">Demo del Simulador</h4>
                  <p className="text-[10px] text-primary/60 font-bold uppercase tracking-wider">Prueba gratuita • 25 Preguntas</p>
                </div>
              </div>
              <ChevronRight className="text-primary/40 group-hover:text-primary transition-colors" size={18} />
            </div>
          </Link>
        </div>
      </section>

      {/* Featured Card: Simulador */}
      <section>
        <Link to="/simulator">
          <motion.div 
            whileTap={{ scale: 0.99 }}
            className="minimal-card p-6 bg-zinc-900 text-white border-none relative overflow-hidden"
          >
            <Verified className="absolute -right-4 -top-4 text-[120px] text-white/5 rotate-12" />
            
            <div className="relative z-10 space-y-6">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-tertiary animate-pulse" />
                  <span className="micro-label text-zinc-400">Acceso Premium</span>
                </div>
                <span className="font-headline font-bold text-tertiary">$250 MXN</span>
              </div>
              
              <div className="space-y-1">
                <h3 className="font-headline font-bold text-2xl">Simulador Completo</h3>
                <p className="text-zinc-400 text-xs">Banco de preguntas actualizado 2024-2025</p>
              </div>
              
              <button className="w-full bg-white text-black py-3.5 rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-zinc-100 transition-colors">
                <LockOpen size={16} />
                Desbloquear ahora
              </button>
            </div>
          </motion.div>
        </Link>
      </section>

      {/* iOS Install Instructions */}
      <section className="p-6 rounded-2xl border border-outline bg-zinc-50/50">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 rounded-lg bg-white border border-outline flex items-center justify-center text-zinc-400">
            <ArrowRight size={16} />
          </div>
          <h3 className="font-headline font-bold">Instalar App</h3>
        </div>
        
        <div className="grid grid-cols-1 gap-4">
          <div className="space-y-1">
            <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">Android</p>
            <p className="text-xs text-zinc-600">Menú de tres puntos &gt; "Instalar aplicación"</p>
          </div>
          <div className="space-y-1">
            <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">iOS (iPhone)</p>
            <p className="text-xs text-zinc-600">Botón Compartir &gt; "Agregar a inicio"</p>
          </div>
        </div>
      </section>
    </div>
  );
}

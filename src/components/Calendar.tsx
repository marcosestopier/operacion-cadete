import { useState } from 'react';
import { CloudUpload, Dumbbell, BookOpen, Brain, Trophy } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

type Institution = 'SEDENA' | 'SEMAR';

interface Event {
  id: string;
  title: string;
  date: string;
  description: string;
  status: 'concluido' | 'actual' | 'proximamente' | 'final';
  icon: any;
}

const SEDENA_EVENTS: Event[] = [
  {
    id: 's1',
    title: 'Registro en línea',
    date: '15 Dic 2025 - 18 Feb 2026',
    description: 'De las 0800 horas del 15 de diciembre de 2025 a las 2359 horas del 18 de febrero de 2026.',
    status: 'proximamente',
    icon: CloudUpload,
  },
  {
    id: 's2',
    title: 'Somatometría y Validación',
    date: '16 Dic 2025 - 05 Mar 2026',
    description: 'Toma de talla, peso y validación de datos para expedición de tarjeta de aspirante.',
    status: 'proximamente',
    icon: Dumbbell,
  },
  {
    id: 's3',
    title: 'Examen de capacidad física',
    date: '17 Dic 2025 - 06 Mar 2026',
    description: 'Evaluación de aptitudes físicas en horarios matutinos y vespertinos.',
    status: 'proximamente',
    icon: Dumbbell,
  },
  {
    id: 's4',
    title: 'Resultados capacidad física',
    date: '23 Mar - 03 Abr 2026',
    description: 'Publicación de los resultados obtenidos en las pruebas físicas.',
    status: 'proximamente',
    icon: Trophy,
  },
  {
    id: 's5',
    title: 'Exámenes Cultural, Inglés y Psicológico',
    date: '06 Abr - 29 Abr 2026',
    description: 'Aplicación de exámenes en un solo día (4 horas y 40 minutos totales).',
    status: 'proximamente',
    icon: BookOpen,
  },
  {
    id: 's6',
    title: 'Resultados Cultural y Psicológico',
    date: '18 May - 27 May 2026',
    description: 'Publicación de resultados de los exámenes de conocimientos y perfil conductual.',
    status: 'proximamente',
    icon: Trophy,
  },
  {
    id: 's7',
    title: 'Examen médico Integral',
    date: '30 May - 10 Jun 2026',
    description: 'Evaluación médica completa de lunes a domingo (0800 a 1800 horas).',
    status: 'proximamente',
    icon: Brain,
  },
  {
    id: 's8',
    title: 'Examen aeromédico',
    date: '30 May - 10 Jun 2026',
    description: 'Específico para aspirantes de la Escuela Militar de Aviación.',
    status: 'proximamente',
    icon: Brain,
  },
  {
    id: 's9',
    title: 'Resultados finales',
    date: '06 Jul - 24 Jul 2026',
    description: 'Publicación del listado definitivo de aspirantes aceptados.',
    status: 'proximamente',
    icon: Trophy,
  },
  {
    id: 's10',
    title: 'Entrega de documentación',
    date: '25 Jul - 21 Ago 2026',
    description: 'Recepción de documentos originales para formalizar el ingreso.',
    status: 'proximamente',
    icon: CloudUpload,
  },
  {
    id: 's11',
    title: 'Ingreso a los planteles',
    date: '01 de Septiembre 2026',
    description: 'Inicio de actividades académicas y militares (0800 horas).',
    status: 'final',
    icon: Trophy,
  },
];

const SEMAR_EVENTS: Event[] = [
  {
    id: '1',
    title: 'Registro en línea',
    date: '28 de Octubre',
    description: 'Carga de documentos y validación inicial de perfil institucional.',
    status: 'concluido',
    icon: CloudUpload,
  },
  {
    id: '2',
    title: 'Examen físico',
    date: '02 de Diciembre',
    description: 'Evaluación de resistencia, fuerza y aptitudes motrices básicas.',
    status: 'actual',
    icon: Dumbbell,
  },
  {
    id: '3',
    title: 'Examen cultural',
    date: '15 de Diciembre',
    description: 'Prueba escrita sobre conocimientos generales e historia institucional.',
    status: 'proximamente',
    icon: BookOpen,
  },
  {
    id: '4',
    title: 'Examen psicológico',
    date: '05 de Enero',
    description: 'Test de perfil conductual y entrevistas individuales con especialistas.',
    status: 'proximamente',
    icon: Brain,
  },
  {
    id: '5',
    title: 'Publicación de resultados',
    date: '25 de Enero',
    description: 'Listado oficial de aspirantes admitidos para el ciclo institucional SEMAR.',
    status: 'final',
    icon: Trophy,
  },
];

function EventCard({ event }: { event: Event }) {
  const Icon = event.icon;
  
  const statusStyles = {
    concluido: {
      card: 'opacity-75 grayscale-[0.5]',
      badge: 'bg-surface-variant text-on-surface-variant',
      iconBg: 'bg-on-surface-variant/10 text-on-surface-variant',
      label: 'Concluido'
    },
    actual: {
      card: 'border-2 border-tertiary-container/20 shadow-[0_12px_40px_rgba(255,184,46,0.1)]',
      badge: 'bg-tertiary-container text-on-tertiary-container',
      iconBg: 'bg-tertiary-container/10 text-tertiary',
      label: 'Etapa Actual'
    },
    proximamente: {
      card: 'hover:translate-y-[-2px]',
      badge: 'bg-primary-container/30 text-primary-container',
      iconBg: 'bg-primary-container/10 text-primary-container',
      label: 'Próximamente'
    },
    final: {
      card: 'hover:translate-y-[-2px] overflow-hidden',
      badge: 'bg-primary-container/20 text-on-primary-container',
      iconBg: 'bg-primary-container text-white shadow-lg',
      label: 'Etapa Final'
    }
  };

  const styles = statusStyles[event.status];

  return (
    <div className={`bg-surface-container-lowest p-6 rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.06)] flex items-center gap-6 group transition-all duration-300 relative ${styles.card}`}>
      {event.status === 'actual' && (
        <div className="absolute top-0 right-0 w-2 h-full bg-on-tertiary-container"></div>
      )}
      {event.status === 'final' && (
        <div className="absolute inset-0 bg-primary-container/5 pointer-events-none"></div>
      )}
      
      <div className={`flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center ${styles.iconBg}`}>
        <Icon size={32} />
      </div>
      
      <div className="flex-grow">
        <div className="flex items-center justify-between mb-1">
          <span className={`font-sans text-[0.75rem] font-semibold px-3 py-1 rounded-full uppercase tracking-wider ${styles.badge}`}>
            {styles.label}
          </span>
          <span className={`font-headline text-lg font-bold ${event.status === 'concluido' ? 'text-on-surface-variant' : 'text-primary'}`}>
            {event.date}
          </span>
        </div>
        <h3 className={`font-headline text-xl font-semibold ${event.status === 'concluido' ? 'text-on-surface-variant' : 'text-on-surface'}`}>
          {event.title}
        </h3>
        <p className="font-sans text-sm text-on-surface-variant mt-1">
          {event.description}
        </p>
      </div>
    </div>
  );
}

export default function Calendar() {
  const [institution, setInstitution] = useState<Institution>('SEMAR');
  const events = institution === 'SEDENA' ? SEDENA_EVENTS : SEMAR_EVENTS;

  return (
    <div className="space-y-10">
      {/* Header Editorial */}
      <header>
        <h2 className="font-headline text-[2.75rem] font-bold text-primary leading-tight mb-4">Fechas clave</h2>
        <p className="font-sans text-on-surface-variant text-lg max-w-md">Cronograma institucional detallado para el proceso de selección y evaluaciones.</p>
        
        <div className="flex w-full mt-6 bg-surface-container rounded-lg p-1 gap-1">
          <button 
            onClick={() => setInstitution('SEDENA')}
            className={`flex-1 py-3 px-4 rounded-md font-headline font-bold text-sm uppercase tracking-wider transition-all ${
              institution === 'SEDENA' 
                ? 'bg-primary text-white shadow-sm' 
                : 'text-on-surface-variant hover:bg-surface-variant'
            }`}
          >
            SEDENA
          </button>
          <button 
            onClick={() => setInstitution('SEMAR')}
            className={`flex-1 py-3 px-4 rounded-md font-headline font-bold text-sm uppercase tracking-wider transition-all ${
              institution === 'SEMAR' 
                ? 'bg-primary text-white shadow-sm' 
                : 'text-on-surface-variant hover:bg-surface-variant'
            }`}
          >
            SEMAR
          </button>
        </div>
      </header>

      {/* Timeline Grid */}
      <div className="flex flex-col gap-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={institution}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            {events.map((event) => (
              <div key={event.id}>
                <EventCard event={event} />
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}


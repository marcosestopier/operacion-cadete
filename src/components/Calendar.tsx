import { useState, useMemo } from 'react';
import { CloudUpload, Dumbbell, BookOpen, Brain, Trophy, FileText, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

type Institution = 'SEDENA' | 'SEMAR';

interface Event {
  id: string;
  title: string;
  date: string;
  startDate: Date;
  endDate: Date;
  description: string;
  icon: any;
}

const SEDENA_EVENTS: Event[] = [
  {
    id: 's1',
    title: 'Registro en línea',
    date: '15 Dic 2025 - 18 Feb 2026',
    startDate: new Date('2025-12-15'),
    endDate: new Date('2026-02-18'),
    description: 'De las 0800 horas del 15 de diciembre de 2025 a las 2359 horas del 18 de febrero de 2026.',
    icon: CloudUpload,
  },
  {
    id: 's2',
    title: 'Somatometría y Validación',
    date: '16 Dic 2025 - 05 Mar 2026',
    startDate: new Date('2025-12-16'),
    endDate: new Date('2026-03-05'),
    description: 'Toma de talla, peso y validación de datos para expedición de tarjeta de aspirante.',
    icon: Dumbbell,
  },
  {
    id: 's3',
    title: 'Examen de capacidad física',
    date: '17 Dic 2025 - 06 Mar 2026',
    startDate: new Date('2025-12-17'),
    endDate: new Date('2026-03-06'),
    description: 'Evaluación de aptitudes físicas en horarios matutinos y vespertinos.',
    icon: Dumbbell,
  },
  {
    id: 's4',
    title: 'Resultados capacidad física',
    date: '23 Mar - 03 Abr 2026',
    startDate: new Date('2026-03-23'),
    endDate: new Date('2026-04-03'),
    description: 'Publicación de los resultados obtenidos en las pruebas físicas.',
    icon: Trophy,
  },
  {
    id: 's5',
    title: 'Exámenes Cultural, Inglés y Psicológico',
    date: '06 Abr - 29 Abr 2026',
    startDate: new Date('2026-04-06'),
    endDate: new Date('2026-04-29'),
    description: 'Aplicación de exámenes en un solo día (4 horas y 40 minutos totales).',
    icon: BookOpen,
  },
  {
    id: 's6',
    title: 'Resultados Cultural y Psicológico',
    date: '18 May - 27 May 2026',
    startDate: new Date('2026-05-18'),
    endDate: new Date('2026-05-27'),
    description: 'Publicación de resultados de los exámenes de conocimientos y perfil conductual.',
    icon: Trophy,
  },
  {
    id: 's7',
    title: 'Examen médico Integral',
    date: '30 May - 10 Jun 2026',
    startDate: new Date('2026-05-30'),
    endDate: new Date('2026-06-10'),
    description: 'Evaluación médica completa de lunes a domingo (0800 a 1800 horas).',
    icon: Brain,
  },
  {
    id: 's8',
    title: 'Examen aeromédico',
    date: '30 May - 10 Jun 2026',
    startDate: new Date('2026-05-30'),
    endDate: new Date('2026-06-10'),
    description: 'Específico para aspirantes de la Escuela Militar de Aviación.',
    icon: Brain,
  },
  {
    id: 's9',
    title: 'Resultados finales',
    date: '06 Jul - 24 Jul 2026',
    startDate: new Date('2026-07-06'),
    endDate: new Date('2026-07-24'),
    description: 'Publicación del listado definitivo de aspirantes aceptados.',
    icon: Trophy,
  },
  {
    id: 's10',
    title: 'Entrega de documentación',
    date: '25 Jul - 21 Ago 2026',
    startDate: new Date('2026-07-25'),
    endDate: new Date('2026-08-21'),
    description: 'Recepción de documentos originales para formalizar el ingreso.',
    icon: CloudUpload,
  },
  {
    id: 's11',
    title: 'Ingreso a los planteles',
    date: '01 de Septiembre 2026',
    startDate: new Date('2026-09-01'),
    endDate: new Date('2026-09-01'),
    description: 'Inicio de actividades académicas y militares (0800 horas).',
    icon: Trophy,
  },
];

const SEMAR_EVENTS: Event[] = [
  {
    id: 'm1',
    title: 'Registro en línea',
    date: '15 Dic 2025 - 09 Mar 2026',
    startDate: new Date('2025-12-15'),
    endDate: new Date('2026-03-09'),
    description: 'Carga de documentos y validación inicial de perfil institucional.',
    icon: CloudUpload,
  },
  {
    id: 'm2',
    title: 'Examen CENEVAL (Exani II)',
    date: 'Sábado 18 de Abril 2026',
    startDate: new Date('2026-04-18'),
    endDate: new Date('2026-04-18'),
    description: 'Examen de conocimientos en línea programado para todos los aspirantes.',
    icon: BookOpen,
  },
  {
    id: 'm3',
    title: 'Resultados Fase Preliminar',
    date: '22 de Mayo 2026',
    startDate: new Date('2026-05-22'),
    endDate: new Date('2026-05-22'),
    description: 'Publicación de los resultados del examen CENEVAL.',
    icon: Search,
  },
  {
    id: 'm4',
    title: 'Fase Definitiva: Ingenierías',
    date: '14 - 20 de Junio 2026',
    startDate: new Date('2026-06-14'),
    endDate: new Date('2026-06-20'),
    description: 'Evaluación presencial en Veracruz para carreras de Ingeniería Naval.',
    icon: Dumbbell,
  },
  {
    id: 'm5',
    title: 'Fase Definitiva: Sanidad',
    date: '21 - 27 de Junio 2026',
    startDate: new Date('2026-06-21'),
    endDate: new Date('2026-06-27'),
    description: 'Evaluación presencial en Veracruz para Medicina y Enfermería.',
    icon: Brain,
  },
  {
    id: 'm6',
    title: 'Fase Definitiva: Técnico Prof.',
    date: '28 Jun - 04 Jul 2026',
    startDate: new Date('2026-06-28'),
    endDate: new Date('2026-07-04'),
    description: 'Evaluación presencial en Veracruz para nivel Técnico Profesional.',
    icon: FileText,
  },
  {
    id: 'm7',
    title: 'Publicación de Resultados Finales',
    date: 'Martes 21 de Julio 2026',
    startDate: new Date('2026-07-21'),
    endDate: new Date('2026-07-21'),
    description: 'Listado definitivo de aspirantes aceptados.',
    icon: Trophy,
  },
  {
    id: 'm8',
    title: 'Incorporación de Nuevo Ingreso',
    date: 'Lunes 03 de Agosto 2026',
    startDate: new Date('2026-08-03'),
    endDate: new Date('2026-08-03'),
    description: 'Inicio de actividades para el personal seleccionado.',
    icon: Trophy,
  },
];

function EventCard({ event }: { event: Event }) {
  const Icon = event.icon;
  const today = new Date();
  
  // Logic for status based on dates
  const getStatus = () => {
    if (event.endDate < today) return 'pasado';
    if (event.startDate <= today && event.endDate >= today) return 'actual';
    
    const oneMonthFromNow = new Date();
    oneMonthFromNow.setMonth(today.getMonth() + 1);
    
    if (event.startDate >= oneMonthFromNow) return 'futuro_lejano';
    return 'futuro_cercano';
  };

  const status = getStatus();
  
  const statusStyles = {
    pasado: {
      card: 'opacity-60 grayscale-[0.8]',
      badge: 'bg-zinc-200 text-zinc-600',
      iconBg: 'bg-zinc-100 text-zinc-500',
      label: 'Concluido'
    },
    actual: {
      card: 'border-2 border-yellow-400 shadow-lg',
      badge: 'bg-yellow-400 text-black',
      iconBg: 'bg-yellow-100 text-yellow-700',
      label: 'En curso'
    },
    futuro_lejano: {
      card: 'border-2 border-green-500/20',
      badge: 'bg-green-500 text-white',
      iconBg: 'bg-green-100 text-green-700',
      label: 'Próximamente'
    },
    futuro_cercano: {
      card: 'border-2 border-primary/10',
      badge: 'bg-primary/20 text-primary',
      iconBg: 'bg-primary/10 text-primary',
      label: 'Próximamente'
    }
  };

  const styles = statusStyles[status];

  return (
    <div className={`bg-surface-container-lowest p-6 rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.06)] flex items-center gap-6 group transition-all duration-300 relative ${styles.card}`}>
      <div className={`flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center ${styles.iconBg}`}>
        <Icon size={32} />
      </div>
      
      <div className="flex-grow">
        <div className="flex items-center justify-between mb-1">
          <span className={`font-sans text-[0.75rem] font-bold px-3 py-1 rounded-full uppercase tracking-wider ${styles.badge}`}>
            {styles.label}
          </span>
          <span className={`font-headline text-lg font-bold text-black`}>
            {event.date}
          </span>
        </div>
        <h3 className={`font-headline text-xl font-bold text-black`}>
          {event.title}
        </h3>
        <p className="font-sans text-sm text-black/70 mt-1">
          {event.description}
        </p>
      </div>
    </div>
  );
}

export default function Calendar() {
  const [institution, setInstitution] = useState<Institution>('SEDENA');
  const events = institution === 'SEDENA' ? SEDENA_EVENTS : SEMAR_EVENTS;

  return (
    <div className={`space-y-10 transition-colors duration-500 ${institution === 'SEMAR' ? 'theme-navy' : ''}`}>
      {/* Header Editorial */}
      <header>
        <h2 className="font-headline text-[2.75rem] font-bold text-black leading-tight mb-4">Fechas clave</h2>
        <p className="font-sans text-black/70 text-lg max-w-md">Cronograma institucional detallado para el proceso de selección y evaluaciones.</p>
        
        <div className="flex w-full mt-6 bg-surface-container rounded-lg p-1 gap-1">
          <button 
            onClick={() => setInstitution('SEDENA')}
            className={`flex-1 py-3 px-4 rounded-md font-headline font-bold text-sm uppercase tracking-wider transition-all ${
              institution === 'SEDENA' 
                ? 'bg-primary text-white shadow-sm' 
                : 'text-black/60 hover:bg-surface-variant'
            }`}
          >
            SEDENA
          </button>
          <button 
            onClick={() => setInstitution('SEMAR')}
            className={`flex-1 py-3 px-4 rounded-md font-headline font-bold text-sm uppercase tracking-wider transition-all ${
              institution === 'SEMAR' 
                ? 'bg-primary text-white shadow-sm' 
                : 'text-black/60 hover:bg-surface-variant'
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


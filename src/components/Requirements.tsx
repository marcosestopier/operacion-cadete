import { useState } from 'react';
import { Landmark, Anchor, CheckCircle2, User, Ruler, Calendar, MapPin, Heart, ShieldAlert } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

type Institution = 'SEDENA' | 'SEMAR';

interface Requirement {
  id: string;
  title: string;
  description: string;
  icon: any;
}

const SEDENA_REQUIREMENTS: Requirement[] = [
  {
    id: 'r1',
    title: 'Nacionalidad',
    description: 'Ser mexicana o mexicano por nacimiento y no tener otra nacionalidad.',
    icon: User,
  },
  {
    id: 'r2',
    title: 'Estado Civil',
    description: 'Ser soltera o soltero y no vivir en concubinato.',
    icon: Heart,
  },
  {
    id: 'r3',
    title: 'Edad',
    description: 'Tener dieciocho años cumplidos y no ser mayor de treinta.',
    icon: Calendar,
  },
  {
    id: 'r4',
    title: 'Estatura Mínima',
    description: 'Hombres: 1.63 metros. Mujeres: 1.55 metros.',
    icon: Ruler,
  },
  {
    id: 'r5',
    title: 'Antecedentes Penales',
    description: 'No contar con antecedentes penales o estar sujeto a proceso penal.',
    icon: ShieldAlert,
  },
  {
    id: 'r6',
    title: 'Salud',
    description: 'Estar sano y apto clínica y psicológicamente para el servicio de las armas.',
    icon: CheckCircle2,
  },
];

const SEMAR_REQUIREMENTS: Requirement[] = [
  {
    id: 'm1',
    title: 'Nacionalidad',
    description: 'Ser mexicano por nacimiento (Artículo 30, inciso A de la Constitución).',
    icon: User,
  },
  {
    id: 'm2',
    title: 'Estatura Mínima',
    description: 'Hombres: 1.63 metros. Mujeres: 1.58 metros.',
    icon: Ruler,
  },
  {
    id: 'm3',
    title: 'IMC',
    description: 'Índice de Masa Corporal (IMC) entre 18.5 y 24.9.',
    icon: CheckCircle2,
  },
  {
    id: 'm4',
    title: 'Salud Física',
    description: 'Resultar apto en los exámenes médico, clínico y psicométrico.',
    icon: Heart,
  },
  {
    id: 'm5',
    title: 'Documentación',
    description: 'No ser desertor de las Fuerzas Armadas o haber pertenecido a otra fuerza policial.',
    icon: ShieldAlert,
  },
];

export default function Requirements() {
  const [institution, setInstitution] = useState<Institution>('SEDENA');
  const requirements = institution === 'SEDENA' ? SEDENA_REQUIREMENTS : SEMAR_REQUIREMENTS;

  return (
    <div className={`space-y-8 transition-colors duration-500 ${institution === 'SEMAR' ? 'theme-navy' : ''}`}>
      {/* Institutional Toggle */}
      <nav className="bg-surface-container/50 backdrop-blur-lg p-1.5 rounded-2xl flex gap-1 shadow-sm">
        <button 
          onClick={() => setInstitution('SEDENA')}
          className={`flex-1 py-3 px-6 rounded-xl flex items-center justify-center gap-3 transition-all duration-300 ${
            institution === 'SEDENA' 
              ? 'bg-primary text-white shadow-md' 
              : 'text-black/60 hover:bg-surface-container-high'
          }`}
        >
          <div className={`w-6 h-6 rounded-full flex items-center justify-center ${institution === 'SEDENA' ? 'bg-white/20' : 'bg-secondary-container/20'}`}>
            <Landmark size={14} />
          </div>
          <span className="font-headline font-bold text-sm tracking-wide">SEDENA</span>
        </button>
        <button 
          onClick={() => setInstitution('SEMAR')}
          className={`flex-1 py-3 px-6 rounded-xl flex items-center justify-center gap-3 transition-all duration-300 ${
            institution === 'SEMAR' 
              ? 'bg-primary text-white shadow-md' 
              : 'text-black/60 hover:bg-surface-container-high'
          }`}
        >
          <div className={`w-6 h-6 rounded-full flex items-center justify-center ${institution === 'SEMAR' ? 'bg-white/20' : 'bg-secondary-container/20'}`}>
            <Anchor size={14} />
          </div>
          <span className="font-headline font-bold text-sm tracking-wide">SEMAR</span>
        </button>
      </nav>

      {/* Header */}
      <header>
        <h2 className="font-headline text-3xl font-bold text-black mb-2">Requisitos Generales</h2>
        <p className="text-black/60">Perfil básico necesario para ingresar a la institución seleccionada.</p>
      </header>

      {/* Requirements List */}
      <div className="grid grid-cols-1 gap-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={institution}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="space-y-4"
          >
            {requirements.map((req) => (
              <div 
                key={req.id}
                className="bg-surface-container-lowest p-5 rounded-2xl shadow-sm flex gap-4 items-start border border-transparent hover:border-primary/10 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center text-primary flex-shrink-0">
                  <req.icon size={24} />
                </div>
                <div>
                  <h4 className="font-headline font-bold text-black">{req.title}</h4>
                  <p className="text-black/60 text-sm mt-1 leading-relaxed">
                    {req.description}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Legal Disclaimer */}
      <div className="p-4 bg-surface-container rounded-xl border border-outline-variant/30">
        <p className="text-[10px] text-black/60 uppercase tracking-widest font-bold mb-2">Aviso Legal</p>
        <p className="text-xs text-black/60 leading-relaxed">
          Estos requisitos son informativos y pueden variar según la convocatoria específica o el plantel educativo. Se recomienda consultar la convocatoria oficial para obtener detalles precisos sobre tatuajes, perforaciones y condiciones médicas específicas.
        </p>
      </div>
    </div>
  );
}

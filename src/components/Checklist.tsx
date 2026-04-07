import { useState, useEffect } from 'react';
import { BadgeCheck, FileText, Home, Medal, GraduationCap, CheckCircle2, MoreHorizontal, Anchor, Landmark, FilePlus, Stethoscope, ClipboardCheck, ChevronRight, Camera, CreditCard, ShieldAlert, Syringe } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

type Institution = 'SEDENA' | 'SEMAR';

interface Document {
  id: string;
  title: string;
  status: 'validado' | 'pendiente' | 'revision' | 'no_cargado';
  date?: string;
  icon: any;
  description?: string;
}

const SEDENA_DOCS: Document[] = [
  {
    id: 'sd1',
    title: 'Solicitud de registro en línea',
    status: 'no_cargado',
    description: 'Firmada con aviso de privacidad.',
    icon: FileText,
  },
  {
    id: 'sd2',
    title: 'C.U.R.P.',
    status: 'no_cargado',
    description: 'Original (cotejo) y copia.',
    icon: BadgeCheck,
  },
  {
    id: 'sd3',
    title: 'Carta responsiva (Anexo D)',
    status: 'no_cargado',
    description: 'Consentimiento informado.',
    icon: ClipboardCheck,
  },
  {
    id: 'sd4',
    title: 'Acta de Nacimiento',
    status: 'no_cargado',
    description: 'Expedida en el año en curso.',
    icon: FilePlus,
  },
  {
    id: 'sd5',
    title: 'Comprobante de Domicilio',
    status: 'no_cargado',
    description: 'Asentado en el registro en línea.',
    icon: Home,
  },
  {
    id: 'sd6',
    title: 'Certificado Médico (Anexo E)',
    status: 'no_cargado',
    description: 'Expedido por médico con cédula profesional.',
    icon: Stethoscope,
  },
  {
    id: 'sd7',
    title: 'Certificado de Bachillerato',
    status: 'no_cargado',
    description: 'Promedio mínimo de 7.0.',
    icon: GraduationCap,
  },
  {
    id: 'sd8',
    title: 'Constancia de Estudios',
    status: 'no_cargado',
    description: 'Para quienes cursan el último semestre.',
    icon: GraduationCap,
  },
];

const SEMAR_DOCS: Document[] = [
  {
    id: 'm1',
    title: 'Certificado o Constancia de Estudios',
    status: 'no_cargado',
    description: 'PDF con sello, firma y promedio calculado.',
    icon: GraduationCap,
  },
  {
    id: 'm2',
    title: 'Acta de nacimiento',
    status: 'no_cargado',
    description: 'PDF vigencia < 3 meses, descargada de miregistrocivil.',
    icon: FileText,
  },
  {
    id: 'm3',
    title: 'Cartilla o Hoja de Liberación',
    status: 'no_cargado',
    description: 'Obligatoria para personal masculino (PDF).',
    icon: Medal,
  },
  {
    id: 'm4',
    title: 'Antecedentes Penales Federales',
    status: 'no_cargado',
    description: 'PDF vigencia < 3 meses, motivo: Ingreso planteles Marina.',
    icon: ShieldAlert,
  },
  {
    id: 'm5',
    title: 'Esquema de vacunación',
    status: 'no_cargado',
    description: 'Completo + Hepatitis A, Varicela y COVID-19.',
    icon: Syringe,
  },
  {
    id: 'm6',
    title: 'Certificado Médico',
    status: 'no_cargado',
    description: 'Debe certificar peso, talla e IMC.',
    icon: Stethoscope,
  },
  {
    id: 'm7',
    title: 'Solicitud Circular SIETE',
    status: 'no_cargado',
    description: 'Solo militares en activo (PDF).',
    icon: ClipboardCheck,
  },
  {
    id: 'm8',
    title: 'Fotografía digital',
    status: 'no_cargado',
    description: '170x200 px, JPEG/PNG, <400Kb, fondo blanco.',
    icon: Camera,
  },
  {
    id: 'm9',
    title: 'Comprobante de pago CENEVAL',
    status: 'no_cargado',
    description: '$252.00 MXN, pagado en BANAMEX.',
    icon: CreditCard,
  },
];

export default function Checklist() {
  const [institution, setInstitution] = useState<Institution>('SEDENA');
  
  // LocalStorage logic
  const [sedenaStatus, setSedenaStatus] = useState<Record<string, Document['status']>>(() => {
    const saved = localStorage.getItem('checklist_sedena');
    return saved ? JSON.parse(saved) : Object.fromEntries(SEDENA_DOCS.map(d => [d.id, d.status]));
  });
  
  const [semarStatus, setSemarStatus] = useState<Record<string, Document['status']>>(() => {
    const saved = localStorage.getItem('checklist_semar');
    return saved ? JSON.parse(saved) : Object.fromEntries(SEMAR_DOCS.map(d => [d.id, d.status]));
  });

  useEffect(() => {
    localStorage.setItem('checklist_sedena', JSON.stringify(sedenaStatus));
  }, [sedenaStatus]);

  useEffect(() => {
    localStorage.setItem('checklist_semar', JSON.stringify(semarStatus));
  }, [semarStatus]);

  const documents = (institution === 'SEDENA' ? SEDENA_DOCS : SEMAR_DOCS).map(doc => ({
    ...doc,
    status: institution === 'SEDENA' ? sedenaStatus[doc.id] : semarStatus[doc.id]
  }));

  const validatedCount = documents.filter(d => d.status === 'validado').length;
  const progress = (validatedCount / documents.length) * 100;

  const toggleStatus = (id: string) => {
    const currentStatus = institution === 'SEDENA' ? sedenaStatus[id] : semarStatus[id];
    const nextStatus = currentStatus === 'validado' ? 'no_cargado' : 'validado';
    
    if (institution === 'SEDENA') {
      setSedenaStatus(prev => ({ ...prev, [id]: nextStatus }));
    } else {
      setSemarStatus(prev => ({ ...prev, [id]: nextStatus }));
    }
  };

  const convocatoriaLink = institution === 'SEDENA' 
    ? 'https://drive.google.com/file/d/1lGcBWAK7xvDyseVxjZjE2maP05KE09aA/preview?usp=sharing'
    : 'https://drive.google.com/file/d/1T37-JnTEI04J2lbIGSI_tDZx1c8w0qRr/preview?usp=sharing';

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

      {/* Progress Bento */}
      <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm">
        <div className="flex justify-between items-end mb-4">
          <div>
            <h3 className="font-headline font-bold text-lg mb-1 text-black">Progreso General</h3>
            <p className="text-black/60 text-xs">{validatedCount} de {documents.length} documentos validados</p>
          </div>
          <motion.span 
            key={validatedCount}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-primary font-bold text-sm"
          >
            {Math.round(progress)}%
          </motion.span>
        </div>
        <div className="relative w-full h-2 bg-surface-container rounded-full overflow-hidden">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ type: "spring", stiffness: 50, damping: 15 }}
            className="absolute top-0 left-0 h-full bg-primary rounded-full"
          />
        </div>
      </div>

      {/* Minimalist Checklist */}
      <div className="space-y-3">
        <AnimatePresence mode="popLayout">
          {documents.map((doc, index) => (
            <motion.div 
              key={doc.id}
              layout
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              onClick={() => toggleStatus(doc.id)}
              className="bg-surface-container-lowest p-4 rounded-2xl flex items-center justify-between border border-transparent shadow-sm hover:shadow-md transition-all cursor-pointer active:scale-[0.98]"
            >
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-300 ${
                  doc.status === 'validado' ? 'bg-primary-container text-on-primary-container' : 'bg-surface-container text-black/40'
                }`}>
                  <doc.icon size={24} />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-base text-black">{doc.title}</h4>
                  <p className="text-black/50 text-[10px] uppercase tracking-tight font-bold">
                    {doc.status === 'validado' ? `Validado` : 
                     doc.status === 'revision' ? 'En revisión' : 
                     doc.status === 'pendiente' ? 'Pendiente' : 'No cargado'}
                  </p>
                  {doc.description && (
                    <p className="text-black/60 text-[11px] mt-0.5 italic">{doc.description}</p>
                  )}
                </div>
              </div>
              
              <div className="flex items-center">
                {doc.status === 'validado' ? (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                  >
                    <CheckCircle2 className="text-primary" size={24} fill="currentColor" fillOpacity={0.2} />
                  </motion.div>
                ) : doc.status === 'revision' ? (
                  <div className="w-6 h-6 rounded-full border-2 border-zinc-300 flex items-center justify-center text-zinc-400">
                    <MoreHorizontal size={14} />
                  </div>
                ) : (
                  <div className="w-6 h-6 rounded-full border-2 border-zinc-200" />
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Anexos Card */}
      <a 
        href={convocatoriaLink}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <motion.div 
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
          className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm border border-transparent hover:border-primary/20 transition-all cursor-pointer flex items-center justify-between group"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-tertiary/10 flex items-center justify-center text-tertiary">
              <FilePlus size={24} />
            </div>
            <div>
              <h3 className="font-headline font-bold text-lg text-black">Convocatoria Oficial</h3>
              <p className="text-black/60 text-sm">Consulta las bases y anexos oficiales.</p>
            </div>
          </div>
          <ChevronRight className="text-black/30 group-hover:translate-x-1 transition-transform" />
        </motion.div>
      </a>
    </div>
  );
}

import { useState } from 'react';
import { Calculator, HeartPulse, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function IMCCalculator() {
  const [weight, setWeight] = useState<string>('');
  const [height, setHeight] = useState<string>('');
  const [imc, setImc] = useState<number | null>(null);

  const calculateIMC = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height) / 100;
    if (w > 0 && h > 0) {
      setImc(parseFloat((w / (h * h)).toFixed(1)));
    }
  };

  const getStatus = (val: number) => {
    if (val < 18.5) return { label: 'Bajo Peso', color: 'bg-secondary-container', text: 'Tienes un peso inferior al normal. Es importante consultar con un profesional de la salud.' };
    if (val < 25) return { label: 'Normal', color: 'bg-primary-container', text: 'Tienes un peso saludable para tu estatura. Mantén tus hábitos de alimentación y ejercicio.' };
    if (val < 30) return { label: 'Sobrepeso', color: 'bg-tertiary-container', text: 'Tu peso es superior al ideal para tu estatura. Considera ajustar tu dieta y actividad física.' };
    return { label: 'Obesidad', color: 'bg-error', text: 'Tu peso indica obesidad. Se recomienda buscar asesoría médica para un plan de salud integral.' };
  };

  const status = imc ? getStatus(imc) : null;

  return (
    <div className="space-y-10">
      {/* Instructional Header */}
      <section className="space-y-4">
        <h2 className="text-4xl md:text-[2.75rem] font-bold text-on-surface leading-tight tracking-tight font-headline">
          Tu Salud en Números
        </h2>
        <p className="text-on-surface-variant text-lg leading-relaxed max-w-md">
          Calcula tu índice de masa corporal ingresando tu peso y altura de manera precisa y profesional.
        </p>
      </section>

      {/* Input Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Weight Card */}
        <div className="bg-surface-container-lowest p-8 rounded-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.06)] space-y-4">
          <label className="block text-sm font-semibold uppercase tracking-wider text-outline font-sans">Peso (kg)</label>
          <div className="relative">
            <input 
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="w-full bg-surface-container-high border-none rounded-full px-6 py-4 text-xl font-semibold focus:ring-2 focus:ring-primary-container transition-all outline-none" 
              placeholder="0.0" 
              type="number"
            />
            <span className="absolute right-6 top-1/2 -translate-y-1/2 text-on-surface-variant font-medium">kg</span>
          </div>
        </div>
        {/* Height Card */}
        <div className="bg-surface-container-lowest p-8 rounded-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.06)] space-y-4">
          <label className="block text-sm font-semibold uppercase tracking-wider text-outline font-sans">Altura (cm)</label>
          <div className="relative">
            <input 
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="w-full bg-surface-container-high border-none rounded-full px-6 py-4 text-xl font-semibold focus:ring-2 focus:ring-primary-container transition-all outline-none" 
              placeholder="0" 
              type="number"
            />
            <span className="absolute right-6 top-1/2 -translate-y-1/2 text-on-surface-variant font-medium">cm</span>
          </div>
        </div>
      </div>

      {/* Action Button */}
      <motion.button 
        whileTap={{ scale: 0.95 }}
        onClick={calculateIMC}
        className="w-full bg-primary-container text-white py-6 rounded-full text-xl font-bold font-headline shadow-lg shadow-primary-container/20 hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-3 group"
      >
        <span>Calcular IMC</span>
        <Calculator className="group-hover:translate-x-1 transition-transform" size={24} />
      </motion.button>

      {/* Results Section */}
      {imc && status && (
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8 pt-6"
        >
          <div className="bg-surface-container-lowest p-8 rounded-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.06)] relative overflow-hidden">
            {/* Decorative Backdrop */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-container/5 rounded-bl-full -mr-8 -mt-8"></div>
            
            <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
              <div className="flex flex-col items-center">
                <div className="text-6xl font-extrabold text-primary-container font-headline">{imc}</div>
                <div className="text-sm font-semibold text-outline font-sans mt-1">TU IMC ACTUAL</div>
              </div>
              <div className="flex-1 space-y-3 text-center md:text-left">
                <h3 className="text-2xl font-bold text-on-surface font-headline">Estado: {status.label}</h3>
                <p className="text-on-surface-variant">{status.text}</p>
              </div>
            </div>

            {/* Interpretation Scale */}
            <div className="mt-10 space-y-4">
              <div className="relative h-4 w-full bg-surface-container-high rounded-full overflow-hidden flex">
                <div className={`h-full bg-secondary-container ${imc < 18.5 ? 'ring-2 ring-black/20 z-10' : ''}`} style={{ width: '18.5%' }}></div>
                <div className={`h-full bg-primary-container ${imc >= 18.5 && imc < 25 ? 'ring-2 ring-black/20 z-10' : ''}`} style={{ width: '25%' }}></div>
                <div className={`h-full bg-tertiary-container ${imc >= 25 && imc < 30 ? 'ring-2 ring-black/20 z-10' : ''}`} style={{ width: '22%' }}></div>
                <div className={`h-full bg-red-600 ${imc >= 30 ? 'ring-2 ring-black/20 z-10' : ''}`} style={{ width: '34.5%' }}></div>
              </div>
              {/* Labels Grid */}
              <div className="grid grid-cols-4 text-[10px] md:text-xs font-bold text-outline font-sans uppercase tracking-tighter">
                <div className="text-center">Bajo Peso<br/>(&lt;18.5)</div>
                <div className="text-center text-primary-container">Normal<br/>(18.5-24.9)</div>
                <div className="text-center">Sobrepeso<br/>(25-29.9)</div>
                <div className="text-center">Obesidad<br/>(&gt;30)</div>
              </div>
            </div>
          </div>

          {/* Editorial Feature Card */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-tertiary-container p-8 rounded-xl flex flex-col justify-center items-center text-center space-y-4">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center">
                <HeartPulse className="text-on-tertiary-container text-3xl" size={32} />
              </div>
              <div className="text-on-tertiary-container">
                <div className="text-xs font-bold font-sans uppercase tracking-widest mb-1">Tu Meta</div>
                <div className="text-2xl font-bold font-headline">
                  {((parseFloat(height)/100)**2 * 22).toFixed(1)} kg
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      )}

      <footer className="mt-auto py-8 text-center text-outline text-xs font-medium font-sans uppercase tracking-[0.2em]">
        Sistema de Salud Institucional • 2024
      </footer>
    </div>
  );
}

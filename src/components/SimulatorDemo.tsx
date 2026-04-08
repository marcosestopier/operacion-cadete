import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Timer, ChevronRight, ChevronLeft, BookOpen, Calculator, Globe, History, CheckCircle2, AlertCircle, Play } from 'lucide-react';
import Layout from './Layout';

interface Question {
  id: number;
  subject: string;
  topic: string;
  question: string;
  options: string[];
  correctAnswer: number;
}

const QUESTIONS: Question[] = [
  // Taller de Lectura y Redacción
  {
    id: 1,
    subject: 'Lectura y Redacción',
    topic: 'Proceso Comunicativo',
    question: '¿Cuál es el elemento del proceso comunicativo que recibe e interpreta el mensaje?',
    options: ['Emisor', 'Canal', 'Receptor', 'Código'],
    correctAnswer: 2
  },
  {
    id: 2,
    subject: 'Lectura y Redacción',
    topic: 'Funciones del Lenguaje',
    question: '¿Qué función del lenguaje se centra en el factor de la comunicación "Referente" y busca transmitir información objetiva?',
    options: ['Función Apelativa', 'Función Referencial', 'Función Poética', 'Función Fática'],
    correctAnswer: 1
  },
  {
    id: 3,
    subject: 'Lectura y Redacción',
    topic: 'Sintaxis',
    question: 'En la oración "El cadete estudia con disciplina", ¿cuál es el núcleo del predicado?',
    options: ['El cadete', 'estudia', 'con disciplina', 'disciplina'],
    correctAnswer: 1
  },
  {
    id: 4,
    subject: 'Lectura y Redacción',
    topic: 'Acentuación',
    question: 'Las palabras que llevan el acento en la antepenúltima sílaba se llaman:',
    options: ['Agudas', 'Graves', 'Esdrújulas', 'Sobreesdrújulas'],
    correctAnswer: 2
  },
  {
    id: 5,
    subject: 'Lectura y Redacción',
    topic: 'Puntuación',
    question: '¿Qué signo de puntuación se utiliza para separar elementos de una enumeración cuando estos ya incluyen comas?',
    options: ['Punto y seguido', 'Dos puntos', 'Punto y coma', 'Puntos suspensivos'],
    correctAnswer: 2
  },
  {
    id: 6,
    subject: 'Lectura y Redacción',
    topic: 'Proceso Comunicativo',
    question: '¿Cómo se le llama al conjunto de signos y reglas que el emisor y el receptor comparten para entender el mensaje?',
    options: ['Contexto', 'Código', 'Canal', 'Retroalimentación'],
    correctAnswer: 1
  },

  // Álgebra
  {
    id: 7,
    subject: 'Álgebra',
    topic: 'Suma y Resta',
    question: 'Simplifica la expresión: (3x + 2y) + (5x - 4y)',
    options: ['8x + 6y', '8x - 2y', '15x - 8y', '2x - 2y'],
    correctAnswer: 1
  },
  {
    id: 8,
    subject: 'Álgebra',
    topic: 'Signos de Agrupación',
    question: 'Resuelve: 10 - [5 - (2 + 1)]',
    options: ['8', '4', '12', '6'],
    correctAnswer: 0
  },
  {
    id: 9,
    subject: 'Álgebra',
    topic: 'Multiplicación',
    question: '¿Cuál es el resultado de multiplicar (2a)(3a²)?',
    options: ['5a³', '6a²', '6a³', '5a²'],
    correctAnswer: 2
  },
  {
    id: 10,
    subject: 'Álgebra',
    topic: 'División',
    question: 'Divide: 12x⁴ / 3x²',
    options: ['4x⁶', '9x²', '4x²', '15x⁶'],
    correctAnswer: 2
  },
  {
    id: 11,
    subject: 'Álgebra',
    topic: 'Productos Notables',
    question: '¿Cuál es el desarrollo de (x + 3)²?',
    options: ['x² + 9', 'x² + 6x + 9', 'x² + 3x + 9', '2x + 6'],
    correctAnswer: 1
  },
  {
    id: 12,
    subject: 'Álgebra',
    topic: 'Cocientes Notables',
    question: '¿Cuál es el resultado de (a² - b²) / (a - b)?',
    options: ['a - b', 'a² + b²', 'a + b', 'ab'],
    correctAnswer: 2
  },

  // Historia Universal
  {
    id: 13,
    subject: 'Historia Universal',
    topic: 'Guerra Fría',
    question: '¿Qué evento simbolizó el fin de la Guerra Fría en 1989?',
    options: ['La Revolución Rusa', 'La caída del Muro de Berlín', 'La crisis de los misiles', 'La Guerra de Vietnam'],
    correctAnswer: 1
  },
  {
    id: 14,
    subject: 'Historia Universal',
    topic: 'Organizaciones Internacionales',
    question: '¿Cuál es el principal objetivo de la Organización de las Naciones Unidas (ONU)?',
    options: ['Fomentar la guerra', 'Controlar el petróleo mundial', 'Mantener la paz y seguridad internacionales', 'Unificar todas las monedas'],
    correctAnswer: 2
  },
  {
    id: 15,
    subject: 'Historia Universal',
    topic: 'Acontecimientos Actuales',
    question: '¿En qué año ocurrieron los atentados a las Torres Gemelas en Nueva York?',
    options: ['1999', '2000', '2001', '2005'],
    correctAnswer: 2
  },
  {
    id: 16,
    subject: 'Historia Universal',
    topic: 'Siglo XXI',
    question: '¿Qué fenómeno ha caracterizado la economía y cultura del Siglo XXI a nivel global?',
    options: ['El Feudalismo', 'La Globalización', 'El Mercantilismo', 'El Aislamiento'],
    correctAnswer: 1
  },
  {
    id: 17,
    subject: 'Historia Universal',
    topic: 'Guerra Fría',
    question: '¿Qué dos superpotencias se enfrentaron ideológicamente durante la Guerra Fría?',
    options: ['Alemania y Japón', 'Francia e Inglaterra', 'EE.UU. y la URSS', 'China e India'],
    correctAnswer: 2
  },
  {
    id: 18,
    subject: 'Historia Universal',
    topic: 'Organizaciones Internacionales',
    question: '¿Qué alianza militar fue creada por los países occidentales durante la Guerra Fría?',
    options: ['Pacto de Varsovia', 'OTAN', 'Unión Europea', 'Mercosur'],
    correctAnswer: 1
  },

  // Geografía de México
  {
    id: 19,
    subject: 'Geografía de México',
    topic: 'Situación Geográfica',
    question: '¿En qué continente se localiza México?',
    options: ['América del Sur', 'Europa', 'América del Norte', 'América Central'],
    correctAnswer: 2
  },
  {
    id: 20,
    subject: 'Geografía de México',
    topic: 'División Política',
    question: '¿Cuántas entidades federativas integran los Estados Unidos Mexicanos?',
    options: ['31 estados y la CDMX', '32 estados', '30 estados y la CDMX', '28 estados'],
    correctAnswer: 0
  },
  {
    id: 21,
    subject: 'Geografía de México',
    topic: 'Orografía',
    question: '¿Cuál es el sistema montañoso más extenso de México?',
    options: ['Eje Neovolcánico', 'Sierra Madre Occidental', 'Sierra de Baja California', 'Sierra de Chiapas'],
    correctAnswer: 1
  },
  {
    id: 22,
    subject: 'Geografía de México',
    topic: 'Litorales',
    question: '¿Qué océano baña las costas occidentales de México?',
    options: ['Océano Atlántico', 'Océano Índico', 'Océano Pacífico', 'Mar Caribe'],
    correctAnswer: 2
  },
  {
    id: 23,
    subject: 'Geografía de México',
    topic: 'Islas',
    question: '¿Cuál es la isla más grande de México situada en el Mar Caribe?',
    options: ['Isla Guadalupe', 'Isla Cedros', 'Cozumel', 'Isla Tiburón'],
    correctAnswer: 2
  },
  {
    id: 24,
    subject: 'Geografía de México',
    topic: 'Representación Cartográfica',
    question: '¿Cómo se le llama a la relación entre la distancia en el mapa y la distancia real en el terreno?',
    options: ['Proyección', 'Escala', 'Simbología', 'Orientación'],
    correctAnswer: 1
  },
  {
    id: 25,
    subject: 'Geografía de México',
    topic: 'Extensión',
    question: '¿Cuál es la superficie aproximada del territorio mexicano?',
    options: ['1.5 millones de km²', '3 millones de km²', '1.96 millones de km²', '2.5 millones de km²'],
    correctAnswer: 2
  }
];

const SUBJECTS = [
  { name: 'Lectura y Redacción', icon: BookOpen, color: 'bg-blue-500' },
  { name: 'Álgebra', icon: Calculator, color: 'bg-orange-500' },
  { name: 'Historia Universal', icon: History, color: 'bg-purple-500' },
  { name: 'Geografía de México', icon: Globe, color: 'bg-green-500' }
];

export default function SimulatorDemo() {
  const [gameState, setGameState] = useState<'instructions' | 'subject_select' | 'quiz' | 'results'>('instructions');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [timeLeft, setTimeLeft] = useState(900); // 15 minutes in seconds
  const [score, setScore] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (gameState === 'quiz' && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && gameState === 'quiz') {
      handleFinish();
    }
    return () => clearInterval(timer);
  }, [gameState, timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleStartExam = () => {
    setGameState('quiz');
  };

  const handleSelectSubject = (subject: string) => {
    const firstQuestionIndex = QUESTIONS.findIndex(q => q.subject === subject);
    setCurrentQuestionIndex(firstQuestionIndex);
    setGameState('quiz');
  };

  const handleAnswer = (optionIndex: number) => {
    setAnswers({ ...answers, [currentQuestionIndex]: optionIndex });
    
    // Auto-advance after a short delay
    if (currentQuestionIndex < QUESTIONS.length - 1) {
      setTimeout(() => {
        setCurrentQuestionIndex(prev => prev + 1);
      }, 400);
    }
  };

  const handleFinish = () => {
    const unansweredCount = QUESTIONS.length - Object.keys(answers).length;
    if (unansweredCount > 0) {
      const confirmFinish = window.confirm(`Aún tienes ${unansweredCount} preguntas sin contestar. ¿Estás seguro de que quieres finalizar?`);
      if (!confirmFinish) return;
    }

    let correctCount = 0;
    QUESTIONS.forEach((q, index) => {
      if (answers[index] === q.correctAnswer) {
        correctCount++;
      }
    });
    setScore(correctCount);
    setGameState('results');
  };

  const getSubjectColor = (subjectName: string) => {
    return SUBJECTS.find(s => s.name === subjectName)?.color || 'bg-zinc-500';
  };

  const getSubjectStats = () => {
    const stats: Record<string, { correct: number, total: number }> = {};
    QUESTIONS.forEach((q, index) => {
      if (!stats[q.subject]) {
        stats[q.subject] = { correct: 0, total: 0 };
      }
      stats[q.subject].total++;
      if (answers[index] === q.correctAnswer) {
        stats[q.subject].correct++;
      }
    });
    return stats;
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < QUESTIONS.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const prevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  // Scroll active question into view in the horizontal bar
  useEffect(() => {
    if (scrollRef.current) {
      const activeElement = scrollRef.current.children[currentQuestionIndex] as HTMLElement;
      if (activeElement) {
        scrollRef.current.scrollTo({
          left: activeElement.offsetLeft - scrollRef.current.offsetWidth / 2 + activeElement.offsetWidth / 2,
          behavior: 'smooth'
        });
      }
    }
  }, [currentQuestionIndex]);

  return (
    <Layout title="Demo Simulador" showBack>
      <div className="max-w-2xl mx-auto">
        <AnimatePresence mode="wait">
          {gameState === 'instructions' && (
            <motion.div
              key="instructions"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-white rounded-3xl p-8 shadow-xl border border-zinc-100 space-y-6"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto">
                <BookOpen size={32} />
              </div>
              <div className="text-center space-y-2">
                <h2 className="text-2xl font-headline font-bold text-black">Instrucciones del Examen</h2>
                <p className="text-zinc-500">Lee cuidadosamente antes de comenzar.</p>
              </div>
              
              <ul className="space-y-4 text-zinc-600">
                <li className="flex gap-3">
                  <CheckCircle2 className="text-primary shrink-0" size={20} />
                  <span>El examen consta de 25 preguntas de opción múltiple.</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="text-primary shrink-0" size={20} />
                  <span>Tienes un tiempo límite de 15 minutos.</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="text-primary shrink-0" size={20} />
                  <span>Puedes navegar entre preguntas usando la barra superior.</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="text-primary shrink-0" size={20} />
                  <span>Al finalizar, verás únicamente tu puntaje total.</span>
                </li>
              </ul>

              <button
                onClick={() => setGameState('subject_select')}
                className="w-full bg-primary text-white py-4 rounded-2xl font-bold text-lg shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all flex items-center justify-center gap-2"
              >
                Comenzar Examen
                <Play size={20} />
              </button>
            </motion.div>
          )}

          {gameState === 'subject_select' && (
            <motion.div
              key="subject_select"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="space-y-6"
            >
              <div className="text-center space-y-2">
                <h2 className="text-2xl font-headline font-bold text-black">¿Por qué materia quieres empezar?</h2>
                <p className="text-zinc-500">Selecciona un bloque para ir directamente a esas preguntas.</p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {SUBJECTS.map((subject) => (
                  <button
                    key={subject.name}
                    onClick={() => handleSelectSubject(subject.name)}
                    className="bg-white p-6 rounded-3xl shadow-sm border border-zinc-100 hover:border-primary/30 hover:shadow-md transition-all flex items-center gap-4 group text-left"
                  >
                    <div className={`w-12 h-12 ${subject.color} rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform`}>
                      <subject.icon size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-black">{subject.name}</h3>
                      <p className="text-xs text-zinc-400">Toca para iniciar</p>
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {gameState === 'quiz' && (
            <motion.div
              key="quiz"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              {/* Progress Bar */}
              <div className="w-full h-2 bg-zinc-100 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-primary"
                  initial={{ width: 0 }}
                  animate={{ width: `${(Object.keys(answers).length / QUESTIONS.length) * 100}%` }}
                />
              </div>

              {/* Header: Timer and Progress */}
              <div className="flex items-center justify-between bg-white p-4 rounded-2xl shadow-sm border border-zinc-100">
                <div className="flex items-center gap-2 text-primary font-bold">
                  <Timer size={20} />
                  <span className={timeLeft < 60 ? 'text-red-500 animate-pulse' : ''}>
                    {formatTime(timeLeft)}
                  </span>
                </div>
                <div className="text-sm font-bold text-zinc-400">
                  Pregunta {currentQuestionIndex + 1} de {QUESTIONS.length}
                </div>
                <button
                  onClick={handleFinish}
                  className="bg-zinc-900 text-white px-4 py-2 rounded-xl text-sm font-bold hover:bg-black transition-colors"
                >
                  Finalizar
                </button>
              </div>

              {/* Horizontal Question Scroll */}
              <div 
                ref={scrollRef}
                className="flex gap-2 overflow-x-auto pb-2 no-scrollbar px-1"
              >
                {QUESTIONS.map((q, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentQuestionIndex(idx)}
                    className={`shrink-0 w-10 h-10 rounded-xl flex flex-col items-center justify-center font-bold text-sm transition-all relative ${
                      currentQuestionIndex === idx
                        ? 'bg-primary text-white shadow-md scale-110'
                        : answers[idx] !== undefined
                        ? 'bg-white text-primary border-2 border-primary/30'
                        : 'bg-white text-zinc-400 border border-zinc-100'
                    }`}
                  >
                    {idx + 1}
                    <div className={`absolute -bottom-1 w-1.5 h-1.5 rounded-full ${getSubjectColor(q.subject)}`} />
                  </button>
                ))}
              </div>

              {/* Question Card */}
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-zinc-100 space-y-8 min-h-[400px] flex flex-col">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 bg-zinc-100 text-zinc-500 rounded-full text-[10px] font-bold uppercase tracking-wider">
                      {QUESTIONS[currentQuestionIndex].subject}
                    </span>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-[10px] font-bold uppercase tracking-wider">
                      {QUESTIONS[currentQuestionIndex].topic}
                    </span>
                  </div>
                  <h3 className="text-xl font-headline font-bold text-black leading-tight">
                    {QUESTIONS[currentQuestionIndex].question}
                  </h3>
                </div>

                <div className="space-y-3 flex-1">
                  {QUESTIONS[currentQuestionIndex].options.map((option, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleAnswer(idx)}
                      className={`w-full p-4 rounded-2xl text-left font-medium transition-all flex items-center gap-4 border-2 ${
                        answers[currentQuestionIndex] === idx
                          ? 'border-primary bg-primary/5 text-primary'
                          : 'border-zinc-50 bg-zinc-50 text-zinc-600 hover:border-zinc-200'
                      }`}
                    >
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold shrink-0 ${
                        answers[currentQuestionIndex] === idx ? 'bg-primary text-white' : 'bg-white text-zinc-400'
                      }`}>
                        {String.fromCharCode(65 + idx)}
                      </div>
                      {option}
                    </button>
                  ))}
                </div>

                <div className="flex justify-between pt-4">
                  <button
                    onClick={prevQuestion}
                    disabled={currentQuestionIndex === 0}
                    className="flex items-center gap-2 text-zinc-400 font-bold disabled:opacity-30"
                  >
                    <ChevronLeft size={20} />
                    Anterior
                  </button>
                  <button
                    onClick={nextQuestion}
                    disabled={currentQuestionIndex === QUESTIONS.length - 1}
                    className="flex items-center gap-2 text-primary font-bold disabled:opacity-30"
                  >
                    Siguiente
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {gameState === 'results' && (
            <motion.div
              key="results"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-3xl p-10 shadow-xl border border-zinc-100 text-center space-y-8"
            >
              <div className="relative inline-block">
                <div className="w-32 h-32 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto">
                  <Trophy size={64} />
                </div>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5, type: 'spring' }}
                  className="absolute -bottom-2 -right-2 bg-green-500 text-white p-2 rounded-full shadow-lg"
                >
                  <CheckCircle2 size={24} />
                </motion.div>
              </div>

              <div className="space-y-2">
                <h2 className="text-3xl font-headline font-bold text-black">Examen Finalizado</h2>
                <p className="text-zinc-500">Has completado el demo del simulador.</p>
              </div>

              <div className="bg-zinc-50 rounded-3xl p-8 space-y-6">
                <div className="space-y-2">
                  <p className="text-zinc-400 font-bold uppercase tracking-widest text-xs">Tu Resultado Total</p>
                  <div className="text-6xl font-headline font-black text-primary">
                    {score} <span className="text-2xl text-zinc-300">/ {QUESTIONS.length}</span>
                  </div>
                </div>

                <div className="space-y-3 pt-4 border-t border-zinc-200">
                  <p className="text-zinc-400 font-bold uppercase tracking-widest text-[10px] text-left">Desglose por materia</p>
                  <div className="grid grid-cols-1 gap-2">
                    {Object.entries(getSubjectStats()).map(([subject, stat]) => (
                      <div key={subject} className="flex items-center justify-between bg-white p-3 rounded-xl border border-zinc-100">
                        <div className="flex items-center gap-3">
                          <div className={`w-2 h-2 rounded-full ${getSubjectColor(subject)}`} />
                          <span className="text-sm font-bold text-zinc-700">{subject}</span>
                        </div>
                        <span className="text-sm font-mono font-bold text-primary">
                          {stat.correct} / {stat.total}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <p className="text-sm font-medium text-zinc-500 mt-2">
                  {score >= 20 ? '¡Excelente desempeño!' : score >= 15 ? 'Buen trabajo, sigue practicando.' : 'Sigue estudiando para mejorar.'}
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <button
                  onClick={() => {
                    setGameState('instructions');
                    setAnswers({});
                    setTimeLeft(900);
                    setCurrentQuestionIndex(0);
                  }}
                  className="w-full bg-primary text-white py-4 rounded-2xl font-bold hover:bg-primary/90 transition-all"
                >
                  Reintentar Demo
                </button>
                <button
                  onClick={() => window.history.back()}
                  className="w-full bg-zinc-100 text-zinc-600 py-4 rounded-2xl font-bold hover:bg-zinc-200 transition-all"
                >
                  Volver al Inicio
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Layout>
  );
}

function Trophy({ size }: { size: number }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </svg>
  );
}

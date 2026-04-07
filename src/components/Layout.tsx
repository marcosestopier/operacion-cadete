import { ReactNode, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

interface LayoutProps {
  children: ReactNode;
  title?: string;
  showBack?: boolean;
}

export default function Layout({ children, title, showBack = false }: LayoutProps) {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-surface flex flex-col">
      {/* Top App Bar */}
      <nav className="sticky top-0 w-full z-50 bg-white/80 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.06)] flex items-center px-4 h-16">
        <div className="flex items-center gap-4 w-full max-w-2xl mx-auto">
          <div className="flex-shrink-0">
            <img 
              src="https://i.supaimg.com/8ede1eff-04f9-46c3-b18b-272e89384eda/cecd5d91-045e-4a03-948c-1c98656c8bc3.webp" 
              alt="Operación Cadete" 
              className="h-10 w-auto object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
          
          {showBack && (
            <button 
              onClick={() => navigate(-1)}
              className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-zinc-100 transition-colors active:scale-95 duration-200 text-primary"
            >
              <ArrowLeft size={24} />
            </button>
          )}
          
          {title && (
            <h1 className="font-headline font-bold text-lg tracking-tight text-black truncate">
              {title}
            </h1>
          )}
        </div>
      </nav>

      <main className="flex-1 w-full max-w-2xl mx-auto px-4 py-8 pb-20">
        {children}
      </main>

      {/* Bottom Spacer for mobile UX */}
      <div className="h-12" />
    </div>
  );
}

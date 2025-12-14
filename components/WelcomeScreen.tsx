import React from 'react';
import { Music, ArrowRight, Star } from 'lucide-react';

interface WelcomeScreenProps {
  onStart: () => void;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStart }) => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center p-6 text-white z-50 animate-in fade-in duration-1000 overflow-hidden bg-slate-900">
      
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1512389142860-9c449e58a543?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80" 
          alt="Christmas Background" 
          className="w-full h-full object-cover opacity-60 scale-105" 
          style={{ 
            animation: 'kenburns 30s ease-out infinite alternate',
            transformOrigin: 'center center'
          }}
        />
        {/* Gradients to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-950/90 via-red-950/80 to-slate-950/95 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]"></div>
      </div>

      {/* CSS Snowflakes */}
      {[...Array(12)].map((_, i) => (
        <div 
          key={i} 
          className="snowflake" 
          style={{ 
            left: `${Math.random() * 100}%`, 
            animationDuration: `${5 + Math.random() * 5}s`,
            animationDelay: `${Math.random() * 5}s`
          }}
        >
          ❄
        </div>
      ))}

      {/* Decorative background glow elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
         <div className="absolute -top-32 -left-32 w-80 h-80 rounded-full bg-red-600/30 blur-3xl mix-blend-screen"></div>
         <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-amber-500/20 blur-3xl mix-blend-screen"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center w-full max-w-md">
        <div className="mb-10 p-8 bg-white/10 backdrop-blur-md rounded-full shadow-2xl ring-4 ring-amber-400/40 flex items-center justify-center relative border border-white/10">
           <div className="absolute -top-3 -right-3 text-amber-300 animate-pulse">
             <Star className="w-8 h-8 fill-current drop-shadow-[0_0_8px_rgba(251,191,36,0.8)]" />
           </div>
           <span className="text-7xl drop-shadow-2xl filter">🎄</span>
        </div>
        
        <h1 className="font-cinzel text-5xl md:text-6xl font-bold text-center mb-4 leading-tight tracking-tight drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)] text-amber-50">
          Friends of<br/>
          <span className="text-amber-400 drop-shadow-[0_2px_4px_rgba(180,83,9,0.5)]">Dagenham</span>
        </h1>
        
        {/* Candy Cane Divider */}
        <div className="w-32 h-2 rounded-full my-8 bg-[repeating-linear-gradient(45deg,#b91c1c,#b91c1c_10px,#fca5a5_10px,#fca5a5_20px)] shadow-lg box-border border border-red-900/30"></div>
        
        <h2 className="text-xl font-medium tracking-[0.3em] uppercase mb-12 text-red-100 text-center font-cinzel drop-shadow-md">
          Christmas Carol Songs
        </h2>
        
        <button 
          onClick={onStart}
          className="group w-full bg-gradient-to-r from-amber-400 to-amber-500 text-red-900 font-bold text-lg py-5 px-8 rounded-2xl shadow-[0_20px_40px_-10px_rgba(245,158,11,0.3)] active:scale-[0.98] transition-all flex items-center justify-between border-t border-amber-300 border-b-4 border-amber-700 hover:brightness-110 relative overflow-hidden"
        >
          {/* Shimmer effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out"></div>
          
          <span className="flex items-center gap-3 relative z-10">
            <Music className="w-6 h-6 fill-red-800" />
            <span className="font-cinzel font-bold">Open Songbook</span>
          </span>
          <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform relative z-10" />
        </button>
        
        <div className="mt-12 text-center space-y-2">
            <p className="text-white/60 text-xs font-medium uppercase tracking-widest font-sans drop-shadow-sm">
              Joy to the World
            </p>
            <p className="text-white/40 text-[10px] font-medium tracking-wide">
              Created by Jobby Kuttamperror Tom
            </p>
        </div>
      </div>
      
      <style>{`
        @keyframes kenburns {
          0% { transform: scale(1.05); }
          100% { transform: scale(1.15); }
        }
      `}</style>
    </div>
  );
};
import React from 'react';
import { Music, ArrowRight, Star } from 'lucide-react';

interface WelcomeScreenProps {
  onStart: () => void;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStart }) => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-green-900 via-red-900 to-green-950 flex flex-col items-center justify-center p-6 text-white z-50 animate-in fade-in duration-500 overflow-hidden">
      
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

      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
         <div className="absolute -top-32 -left-32 w-80 h-80 rounded-full bg-red-600/20 blur-3xl mix-blend-screen"></div>
         <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-green-500/10 blur-3xl mix-blend-screen"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center w-full max-w-md">
        <div className="mb-10 p-8 bg-white/5 backdrop-blur-md rounded-full shadow-2xl ring-4 ring-amber-400/30 flex items-center justify-center relative">
           <div className="absolute -top-3 -right-3 text-amber-300 animate-pulse">
             <Star className="w-8 h-8 fill-current" />
           </div>
           <span className="text-7xl drop-shadow-2xl filter">🎄</span>
        </div>
        
        <h1 className="font-cinzel text-5xl md:text-6xl font-bold text-center mb-4 leading-tight tracking-tight drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)] text-amber-50">
          Friends of<br/>
          <span className="text-amber-400">Dagenham</span>
        </h1>
        
        {/* Candy Cane Divider */}
        <div className="w-32 h-2 rounded-full my-8 bg-[repeating-linear-gradient(45deg,#b91c1c,#b91c1c_10px,#fca5a5_10px,#fca5a5_20px)] shadow-inner"></div>
        
        <h2 className="text-xl font-medium tracking-[0.3em] uppercase mb-12 text-red-100 text-center font-cinzel">
          Christmas Carol Songs
        </h2>
        
        <button 
          onClick={onStart}
          className="group w-full bg-gradient-to-r from-amber-400 to-amber-500 text-red-900 font-bold text-lg py-5 px-8 rounded-2xl shadow-xl shadow-amber-900/20 active:scale-[0.98] transition-all flex items-center justify-between border-b-4 border-amber-600 hover:brightness-110"
        >
          <span className="flex items-center gap-3">
            <Music className="w-6 h-6 fill-red-800" />
            <span className="font-cinzel font-bold">Open Songbook</span>
          </span>
          <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
        </button>
        
        <div className="mt-12 text-center space-y-2">
            <p className="text-white/40 text-xs font-medium uppercase tracking-widest font-sans">
              Joy to the World
            </p>
            <p className="text-white/30 text-[10px] font-medium tracking-wide">
              Created by Jobby Kuttamperror Tom
            </p>
        </div>
      </div>
    </div>
  );
};
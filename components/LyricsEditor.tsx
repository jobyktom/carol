import React, { useRef, useEffect, useState } from 'react';
import { Song } from '../types';
import { ChevronLeft, Music, Snowflake } from 'lucide-react';

interface LyricsEditorProps {
  song: Song;
  onBack?: () => void;
}

export const LyricsEditor: React.FC<LyricsEditorProps> = ({ song, onBack }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showManglish, setShowManglish] = useState(false);

  // Scroll to top when song changes
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = 0;
    }
  }, [song.id]);

  // Determine if we should show the toggle.
  // We only show it if Manglish lyrics exist AND they are different from the main lyrics.
  // This prevents the toggle from appearing on purely English songs.
  const hasManglish = !!song.lyricsManglish && 
    (song.lyrics.replace(/\s/g, '') !== song.lyricsManglish.replace(/\s/g, ''));

  return (
    <div className="flex-1 h-full flex flex-col bg-amber-50/20 overflow-hidden relative">
      
      {/* Festive Background Animations */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
        {/* Subtle Falling Snowflakes */}
        {[...Array(8)].map((_, i) => (
          <div 
            key={`snow-${i}`}
            className="snowflake"
            style={{
              left: `${Math.random() * 100}%`,
              animationDuration: `${15 + Math.random() * 20}s`,
              animationDelay: `-${Math.random() * 15}s`,
              fontSize: `${0.8 + Math.random() * 1}rem`,
              color: 'rgba(148, 163, 184, 0.2)',
              textShadow: '0 0 1px rgba(148, 163, 184, 0.1)'
            }}
          >
            ❄
          </div>
        ))}
      </div>

      {/* Decorative background corners */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-red-500/5 to-transparent pointer-events-none z-0"></div>
      
      {/* Mobile Navigation Bar */}
      <div className="bg-white/90 backdrop-blur-md border-b border-amber-100 py-3 px-3 flex items-center justify-between shadow-sm z-30 sticky top-0 flex-shrink-0 md:hidden h-16">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-slate-700 px-2 py-2 rounded-lg transition-colors active:bg-slate-100"
          aria-label="Back"
        >
          <ChevronLeft className="w-6 h-6 text-green-800" />
          <span className="font-cinzel font-bold text-base text-green-900">Back</span>
        </button>
        
        {/* Mobile Toggle (Segmented Control) - High Visibility */}
        {hasManglish && (
          <div className="flex bg-white p-1 rounded-xl border border-green-200 shadow-sm relative z-40">
            <button
              onClick={() => setShowManglish(false)}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all shadow-sm border border-transparent ${
                !showManglish 
                  ? 'bg-green-700 text-white border-green-800 shadow-md scale-105 z-10' 
                  : 'text-green-800 hover:bg-green-50'
              }`}
            >
              Malayalam
            </button>
            <button
              onClick={() => setShowManglish(true)}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all shadow-sm border border-transparent ${
                showManglish 
                  ? 'bg-amber-500 text-white border-amber-600 shadow-md scale-105 z-10' 
                  : 'text-amber-800 hover:bg-amber-50'
              }`}
            >
              Manglish
            </button>
          </div>
        )}
      </div>

      {/* Desktop Header */}
      <div className="hidden md:flex bg-white/50 backdrop-blur-sm border-b border-amber-100 px-8 py-5 items-center justify-between sticky top-0 z-20">
         <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-green-50 border border-green-100 rounded-full flex items-center justify-center text-green-700">
               <Music className="w-5 h-5" />
            </div>
            <div>
               <span className="text-xs font-bold text-amber-600 uppercase tracking-widest block mb-0.5 font-cinzel">Now Reading</span>
               <h2 className="text-lg font-bold text-gray-900 malayalam-text truncate">
                 <span className="font-cinzel text-red-800 mr-2">Song {song.id}</span> 
                 <span className="text-gray-400 mx-1">|</span> 
                 {song.title}
               </h2>
            </div>
         </div>

         {/* Desktop Toggle (Segmented Control) - High Visibility */}
         {hasManglish && (
           <div className="flex items-center gap-3">
             <span className="text-xs font-bold text-green-800 uppercase tracking-widest opacity-60 hidden lg:block">Display:</span>
             <div className="flex bg-white p-1.5 rounded-xl border border-green-200 shadow-md">
               <button
                 onClick={() => setShowManglish(false)}
                 className={`px-6 py-2 rounded-lg text-sm font-bold transition-all font-cinzel ${
                   !showManglish 
                     ? 'bg-green-700 text-white shadow-md transform scale-105 ring-1 ring-green-800' 
                     : 'text-green-800 hover:bg-green-50'
                 }`}
               >
                 Malayalam
               </button>
               <button
                 onClick={() => setShowManglish(true)}
                 className={`px-6 py-2 rounded-lg text-sm font-bold transition-all font-cinzel ${
                   showManglish 
                     ? 'bg-amber-500 text-white shadow-md transform scale-105 ring-1 ring-amber-600' 
                     : 'text-amber-800 hover:bg-amber-50'
                 }`}
               >
                 Manglish
               </button>
             </div>
           </div>
         )}
      </div>

      {/* Scrollable Content */}
      <div 
        ref={scrollContainerRef}
        className="flex-1 overflow-y-auto overscroll-contain relative z-10"
        style={{ WebkitOverflowScrolling: 'touch' }}
      >
        <div className="max-w-3xl mx-auto px-4 py-6 pb-24 md:px-6 md:py-12 relative">
            
            {/* Title Section */}
            <div className="mb-6 md:mb-10 text-center relative break-words">
              <div className="inline-flex items-center justify-center p-3 bg-red-50 rounded-full mb-3 text-red-600 md:hidden shadow-inner">
                <Music className="w-6 h-6" />
              </div>
              <h3 className="text-2xl md:text-4xl font-bold text-green-900 malayalam-text leading-snug drop-shadow-sm px-2">
                {song.title}
              </h3>
              {song.originalTitle && song.originalTitle !== song.title && (
                <p className="text-amber-700/80 font-cinzel font-medium text-sm md:text-base mt-2 md:mt-3 border-t border-amber-200/50 inline-block pt-2 md:pt-3 px-4 md:px-8">
                  {song.originalTitle}
                </p>
              )}
            </div>
            
            {/* Lyrics Section */}
            <div className={`
              relative z-10 bg-white/95 backdrop-blur-sm shadow-xl shadow-amber-900/5 rounded-2xl border border-white/50 transition-all
              p-5 md:p-12
              ${showManglish ? 'font-sans text-lg md:text-xl' : 'malayalam-text text-xl md:text-2xl'}
            `}>
                {/* Decoration Icons on Card (Static) */}
                <Snowflake className="absolute top-3 right-3 md:top-4 md:right-4 w-5 h-5 md:w-6 md:h-6 text-slate-100 rotate-12" />
                <Snowflake className="absolute bottom-3 left-3 md:bottom-4 md:left-4 w-5 h-5 md:w-6 md:h-6 text-slate-100 -rotate-12" />

                <div className="whitespace-pre-wrap break-words leading-[1.8] md:leading-[2.2] text-slate-800 font-medium text-center select-text w-full">
                  {showManglish && hasManglish ? song.lyricsManglish : song.lyrics}
                </div>
                
                {showManglish && !hasManglish && (
                  <div className="text-slate-400 italic mt-6 md:mt-8 text-center text-sm md:text-base border-t border-slate-100 pt-4">
                    [Manglish lyrics not available for this song]
                  </div>
                )}

                {!song.lyrics && (
                   <div className="text-slate-400 italic text-center">
                    [Lyrics not available]
                  </div>
                )}
            </div>
            
            {/* Footer decoration */}
            <div className="mt-8 md:mt-12 flex justify-center items-center gap-2 opacity-40">
               <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-red-300 rounded-full"></div>
               <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-green-300 rounded-full"></div>
               <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-amber-300 rounded-full"></div>
            </div>
        </div>
      </div>
    </div>
  );
};
import React, { useRef, useEffect, useState } from 'react';
import { Song } from '../types';
import { ChevronLeft, Music, Globe, Snowflake } from 'lucide-react';

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

  const hasManglish = !!song.lyricsManglish;

  return (
    <div className="flex-1 h-full flex flex-col bg-amber-50/20 overflow-hidden relative">
      
      {/* Decorative background corners */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-red-500/5 to-transparent pointer-events-none"></div>
      
      {/* Mobile Navigation Bar */}
      <div className="bg-white/90 backdrop-blur-md border-b border-amber-100 py-3 px-3 flex items-center justify-between shadow-sm z-30 sticky top-0 flex-shrink-0 md:hidden">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 px-4 py-2 rounded-full transition-colors touch-manipulation flex-shrink-0"
          aria-label="Back to Index"
        >
          <ChevronLeft className="w-5 h-5" />
          <span className="font-cinzel font-bold text-sm">Index</span>
        </button>
        
        {/* Mobile Toggle */}
        {hasManglish && (
          <button 
            onClick={() => setShowManglish(!showManglish)}
            className="flex items-center gap-2 bg-red-50 text-red-800 px-3 py-2 rounded-lg font-bold text-xs uppercase tracking-wide border border-red-100 shadow-sm"
          >
            <Globe className="w-4 h-4" />
            {showManglish ? 'Manglish' : 'Malayalam'}
          </button>
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

         {/* Desktop Toggle */}
         {hasManglish && (
           <div className="flex bg-slate-100 p-1 rounded-full border border-slate-200">
             <button
               onClick={() => setShowManglish(false)}
               className={`px-4 py-1.5 rounded-full text-sm font-bold transition-all font-cinzel ${!showManglish ? 'bg-white text-green-800 shadow-sm ring-1 ring-black/5' : 'text-slate-500 hover:text-slate-700'}`}
             >
               Malayalam
             </button>
             <button
               onClick={() => setShowManglish(true)}
               className={`px-4 py-1.5 rounded-full text-sm font-bold transition-all font-cinzel ${showManglish ? 'bg-white text-green-800 shadow-sm ring-1 ring-black/5' : 'text-slate-500 hover:text-slate-700'}`}
             >
               Manglish
             </button>
           </div>
         )}
      </div>

      {/* Scrollable Content */}
      <div 
        ref={scrollContainerRef}
        className="flex-1 overflow-y-auto overscroll-contain"
        style={{ WebkitOverflowScrolling: 'touch' }}
      >
        <div className="max-w-3xl mx-auto px-6 py-8 pb-32 md:py-12 relative">
            
            {/* Title Section */}
            <div className="mb-10 text-center relative">
              <div className="inline-flex items-center justify-center p-3 bg-red-50 rounded-full mb-4 text-red-600 md:hidden shadow-inner">
                <Music className="w-6 h-6" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-green-900 malayalam-text leading-snug drop-shadow-sm">
                {song.title}
              </h3>
              {song.originalTitle && song.originalTitle !== song.title && (
                <p className="text-amber-700/80 font-cinzel font-medium text-base mt-3 border-t border-amber-200/50 inline-block pt-3 px-8">
                  {song.originalTitle}
                </p>
              )}
            </div>
            
            {/* Lyrics Section */}
            <div className={`
              relative z-10 bg-white shadow-xl shadow-amber-900/5 rounded-2xl p-8 md:p-12 border border-white
              ${showManglish ? 'font-sans text-xl md:text-2xl' : 'malayalam-text text-[1.5rem] md:text-2xl'}
            `}>
                {/* Decoration */}
                <Snowflake className="absolute top-4 right-4 w-6 h-6 text-slate-100 rotate-12" />
                <Snowflake className="absolute bottom-4 left-4 w-6 h-6 text-slate-100 -rotate-12" />

                <div className="whitespace-pre-wrap leading-[2.2] text-slate-800 font-medium text-center select-text">
                  {showManglish && hasManglish ? song.lyricsManglish : song.lyrics}
                </div>
                
                {showManglish && !hasManglish && (
                  <div className="text-slate-400 italic mt-8 text-center text-base border-t border-slate-100 pt-4">
                    [Manglish version not available for this song]
                  </div>
                )}

                {!song.lyrics && (
                   <div className="text-slate-400 italic text-center">
                    [Lyrics not available]
                  </div>
                )}
            </div>
            
            {/* Footer decoration */}
            <div className="mt-12 flex justify-center items-center gap-2 opacity-40">
               <div className="w-2 h-2 bg-red-300 rounded-full"></div>
               <div className="w-2 h-2 bg-green-300 rounded-full"></div>
               <div className="w-2 h-2 bg-amber-300 rounded-full"></div>
            </div>
        </div>
      </div>
    </div>
  );
};
import React from 'react';
import { Song } from '../types';
import { ChevronRight, Star, Calendar } from 'lucide-react';

interface SongListSidebarProps {
  songs: Song[];
  selectedSongId: number | null;
  onSelectSong: (id: number) => void;
  onShowSchedule?: () => void;
  isScheduleSelected?: boolean;
}

export const SongListSidebar: React.FC<SongListSidebarProps> = ({ 
  songs, 
  selectedSongId, 
  onSelectSong, 
  onShowSchedule,
  isScheduleSelected 
}) => {
  return (
    <div className="w-full h-full flex flex-col bg-slate-50 border-r border-gray-200">
      
      {/* Schedule Button Section */}
      <div className="p-4 border-b border-gray-200 bg-white shadow-sm z-10">
        <button
          onClick={onShowSchedule}
          className={`
            w-full flex items-center gap-3 p-4 rounded-xl transition-all border
            ${isScheduleSelected 
              ? 'bg-red-50 border-red-200 text-red-900 shadow-sm' 
              : 'bg-green-50 border-green-100 text-green-900 hover:bg-green-100/80 hover:border-green-200'}
          `}
        >
          <div className={`
             w-10 h-10 rounded-full flex items-center justify-center shadow-sm text-white
             ${isScheduleSelected ? 'bg-red-600' : 'bg-green-600'}
          `}>
             <Calendar className="w-5 h-5" />
          </div>
          <div className="flex-1 text-left">
             <span className="block font-cinzel font-bold text-base">House Visit Order</span>
             <span className={`text-xs font-medium uppercase tracking-wider ${isScheduleSelected ? 'text-red-700/70' : 'text-green-700/70'}`}>
                19th & 20th Dec
             </span>
          </div>
          {isScheduleSelected && <ChevronRight className="w-5 h-5 text-red-400" />}
        </button>
      </div>

      <div className="flex-1 overflow-y-auto overscroll-contain pb-safe-area">
        <div className="px-4 py-3 text-xs font-bold uppercase tracking-widest text-slate-400">Song List</div>
        <ul className="divide-y divide-gray-100/50">
          {songs.map((song) => {
            const isSelected = selectedSongId === song.id && !isScheduleSelected;
            return (
              <li key={song.id}>
                <button
                  onClick={() => onSelectSong(song.id)}
                  className={`
                    w-full text-left py-4 px-4 active:bg-green-50/50 transition-all flex items-center gap-4 group relative overflow-hidden
                    ${isSelected ? 'bg-gradient-to-r from-green-50 to-transparent' : 'bg-white hover:bg-slate-50'}
                  `}
                >
                  {/* Decorative Left Border for Selected */}
                  {isSelected && (
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-green-600 shadow-sm"></div>
                  )}

                  {/* Song Number Badge */}
                  <div className={`
                    w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 shadow-sm transition-colors border
                    ${isSelected 
                      ? 'bg-green-700 text-amber-200 border-green-600 shadow-green-100' 
                      : 'bg-red-50 text-red-800 border-red-100'}
                  `}>
                    <span className="font-cinzel text-lg">{song.id}</span>
                  </div>

                  {/* Song Details */}
                  <div className="flex-1 min-w-0 py-1">
                    <h3 className={`font-bold text-[17px] malayalam-text leading-snug truncate mb-1 transition-colors ${
                      isSelected ? 'text-green-900' : 'text-slate-800'
                    }`}>
                      {song.title}
                    </h3>
                    {song.originalTitle && song.originalTitle !== song.title && (
                      <p className={`text-sm truncate ${isSelected ? 'text-green-700/70' : 'text-slate-400'}`}>
                        {song.originalTitle}
                      </p>
                    )}
                  </div>

                  {/* Icon */}
                  <div className="flex-shrink-0">
                     {isSelected ? (
                       <Star className="w-5 h-5 text-amber-500 fill-current animate-pulse" />
                     ) : (
                       <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-slate-400" />
                     )}
                  </div>
                </button>
              </li>
            );
          })}
        </ul>

        {/* Credits */}
        <div className="py-8 text-center opacity-60">
           <div className="w-16 h-px bg-slate-200 mx-auto mb-3"></div>
           <p className="text-[10px] uppercase tracking-widest text-slate-500 font-semibold">Created by</p>
           <p className="text-xs font-cinzel text-slate-700 mt-1">Jobby Kuttamperror Tom</p>
        </div>

        {/* Bottom padding for safe area on iPhone X+ */}
        <div className="h-20 md:hidden"></div>
      </div>
    </div>
  );
};
import React from 'react';
import { Calendar, ChevronLeft, MapPin, Clock, Home, Snowflake } from 'lucide-react';
import { HOUSE_SCHEDULE } from '../constants';

interface ScheduleViewProps {
  onBack?: () => void;
}

export const ScheduleView: React.FC<ScheduleViewProps> = ({ onBack }) => {
  return (
    <div className="flex-1 h-full flex flex-col bg-amber-50/20 overflow-hidden relative">
      
      {/* Festive Background Animations (Consistent with LyricsEditor) */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
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

      <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-green-500/5 to-transparent pointer-events-none z-0"></div>

      {/* Mobile Header */}
      <div className="bg-white/90 backdrop-blur-md border-b border-amber-100 py-3 px-3 flex items-center justify-between shadow-sm z-30 sticky top-0 flex-shrink-0 md:hidden h-16">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-slate-700 px-2 py-2 rounded-lg transition-colors active:bg-slate-100"
          aria-label="Back"
        >
          <ChevronLeft className="w-6 h-6 text-green-800" />
          <span className="font-cinzel font-bold text-base text-green-900">Back</span>
        </button>
      </div>

      {/* Desktop Header */}
      <div className="hidden md:flex bg-white/50 backdrop-blur-sm border-b border-amber-100 px-8 py-5 items-center justify-between sticky top-0 z-20">
         <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-red-50 border border-red-100 rounded-full flex items-center justify-center text-red-700">
               <Calendar className="w-5 h-5" />
            </div>
            <div>
               <span className="text-xs font-bold text-amber-600 uppercase tracking-widest block mb-0.5 font-cinzel">Carol Rounds</span>
               <h2 className="text-lg font-bold text-gray-900 font-cinzel">House Visits Schedule 2025</h2>
            </div>
         </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto overscroll-contain relative z-10 px-4 py-6 md:p-12">
        <div className="max-w-3xl mx-auto space-y-8 pb-12">
          
          <div className="text-center md:hidden mb-2">
            <h2 className="text-2xl font-bold text-green-900 font-cinzel">House Visits 2025</h2>
            <p className="text-xs text-amber-700 font-bold uppercase tracking-widest mt-1">Friends of Dagenham</p>
          </div>

          {HOUSE_SCHEDULE.map((daySchedule, index) => (
            <div 
              key={index} 
              className="bg-white/95 backdrop-blur-sm shadow-xl shadow-amber-900/5 rounded-2xl border border-white/50 overflow-hidden relative group"
            >
              {/* Card Decoration */}
              <div className={`absolute top-0 left-0 w-2 h-full ${index % 2 === 0 ? 'bg-red-600' : 'bg-green-600'}`}></div>
              <Snowflake className="absolute -top-2 -right-2 w-12 h-12 text-slate-50 rotate-12" />

              {/* Date Header */}
              <div className="bg-slate-50 border-b border-slate-100 p-5 pl-7 flex flex-col md:flex-row md:items-center justify-between gap-2">
                <div>
                  <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                    <span className="font-cinzel">{daySchedule.day}</span>
                    <span className="text-slate-300">|</span>
                    <span className="text-slate-600 font-medium">{daySchedule.date}</span>
                  </h3>
                </div>
                <div className="flex items-center gap-2 bg-amber-50 text-amber-800 px-3 py-1.5 rounded-full self-start md:self-auto border border-amber-100 shadow-sm">
                   <Clock className="w-4 h-4" />
                   <span className="text-sm font-bold">{daySchedule.startTime} Start</span>
                </div>
              </div>

              {/* Itinerary */}
              <div className="p-6 pl-7">
                 <div className="mb-6 pb-6 border-b border-dashed border-slate-200">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Starting Point</p>
                    <div className="flex items-center gap-3">
                       <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white shadow-md ${index % 2 === 0 ? 'bg-red-600' : 'bg-green-600'}`}>
                          <Home className="w-5 h-5" />
                       </div>
                       <span className="text-lg font-bold text-slate-800">{daySchedule.startHouse}</span>
                    </div>
                 </div>

                 <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Route</p>
                    <div className="space-y-0 relative">
                        {/* Timeline line */}
                        <div className="absolute left-[19px] top-2 bottom-4 w-0.5 bg-slate-100"></div>

                        {daySchedule.houses.map((house, hIdx) => (
                          <div key={hIdx} className="flex items-center gap-4 py-2 relative z-10 group/item">
                             <div className="w-10 flex justify-center">
                                <div className="w-3 h-3 rounded-full bg-white border-2 border-slate-300 group-hover/item:border-amber-400 group-hover/item:bg-amber-50 transition-colors"></div>
                             </div>
                             <div className="bg-slate-50 group-hover/item:bg-white group-hover/item:shadow-md border border-transparent group-hover/item:border-slate-100 px-4 py-2 rounded-lg transition-all w-full">
                                <span className="text-slate-700 font-medium">{house}</span>
                             </div>
                          </div>
                        ))}
                    </div>
                 </div>
              </div>
            </div>
          ))}

          <div className="text-center pt-8 opacity-60">
               <p className="font-cinzel text-slate-500 italic">"O Come, All Ye Faithful"</p>
          </div>

        </div>
      </div>
    </div>
  );
};
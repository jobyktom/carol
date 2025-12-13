import React, { useState, useEffect } from 'react';
import { SongListSidebar } from './components/SongListSidebar';
import { LyricsEditor } from './components/LyricsEditor';
import { BookletView } from './components/BookletView';
import { WelcomeScreen } from './components/WelcomeScreen';
import { INITIAL_SONGS, APP_TITLE } from './constants';
import { Song, BookletMetadata } from './types';
import { Printer } from 'lucide-react';

const App: React.FC = () => {
  const [songs] = useState<Song[]>(INITIAL_SONGS);
  const [selectedSongId, setSelectedSongId] = useState<number | null>(null);
  const [mobileView, setMobileView] = useState<'list' | 'editor'>('list');
  const [showWelcome, setShowWelcome] = useState<boolean>(true);
  const [metadata] = useState<BookletMetadata>({
    title: APP_TITLE,
    subtitle: "Christmas Carols"
  });

  const selectedSong = songs.find(s => s.id === selectedSongId) || songs[0];

  // 1. Handle "Exit App" confirmation
  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      // Only confirm exit if they've passed the welcome screen
      if (!showWelcome) {
        e.preventDefault();
        e.returnValue = ''; 
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [showWelcome]);

  // 2. Handle Hardware Back Button (History API)
  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      if (showWelcome) return;

      // If user presses back button and we were in editor mode, 
      // the history pop will happen. We simply sync our state to 'list'.
      setMobileView('list');
      setSelectedSongId(null);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [showWelcome]);

  const handleStartApp = () => {
    setShowWelcome(false);
  };

  const handleSelectSong = (id: number) => {
    setSelectedSongId(id);
    setMobileView('editor');
    // Push a new entry to history so the back button works naturally
    window.history.pushState({ view: 'editor', songId: id }, '');
  };

  const handleBackToMenu = () => {
    // If we have history state, go back (triggering popstate). 
    // Otherwise just manually set state (fallback).
    if (window.history.state?.view === 'editor') {
      window.history.back();
    } else {
      setMobileView('list');
      setSelectedSongId(null);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="h-[100dvh] w-full flex flex-col bg-slate-50 overflow-hidden print:bg-white touch-none">
      
      {showWelcome && (
        <WelcomeScreen onStart={handleStartApp} />
      )}

      {/* 
         Mobile: Header is visible ONLY in List View. 
         Desktop: Header is always visible.
      */}
      <header className={`
        bg-green-900 border-b-4 border-amber-400 h-20 flex items-center justify-between px-4 md:px-6 shadow-lg print:hidden flex-shrink-0 z-20 transition-transform duration-300 relative
        ${mobileView === 'editor' ? '-translate-y-full absolute w-full md:translate-y-0 md:relative' : 'translate-y-0 relative'}
      `}>
        {/* Subtle texture overlay */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '12px 12px' }}></div>

        <div className="flex items-center gap-3 relative z-10">
          <div className="w-12 h-12 bg-red-700 rounded-lg flex items-center justify-center text-white font-bold text-2xl flex-shrink-0 shadow-lg border-2 border-amber-400/50">
            🎄
          </div>
          <div className="flex flex-col">
             <h1 className="font-cinzel font-bold text-amber-50 text-xl leading-none tracking-wide">Friends of Dagenham</h1>
             <span className="text-xs text-red-300 font-bold uppercase tracking-[0.2em] mt-1">Christmas Carols</span>
          </div>
        </div>
        <button 
          onClick={handlePrint}
          className="relative z-10 p-2.5 bg-green-800/50 text-amber-100 rounded-full hover:bg-green-800 border border-green-700 active:scale-95 transition-all shadow-sm"
          aria-label="Print"
        >
          <Printer className="w-5 h-5" />
        </button>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex overflow-hidden print:hidden relative w-full">
        
        {/* Sidebar / List View */}
        <div className={`
          absolute inset-0 z-10 bg-white md:static md:w-96 md:block h-full transition-transform duration-300 ease-out will-change-transform
          ${mobileView === 'list' ? 'translate-x-0' : '-translate-x-[20%] opacity-0 md:opacity-100 md:translate-x-0'}
        `}>
          <SongListSidebar 
            songs={songs} 
            selectedSongId={selectedSongId} 
            onSelectSong={handleSelectSong} 
          />
        </div>
        
        {/* Detail / Lyrics View */}
        <div className={`
          absolute inset-0 z-20 bg-amber-50/30 md:static md:flex-1 h-full transition-transform duration-300 ease-out will-change-transform border-l border-amber-100 shadow-2xl md:shadow-none
          ${mobileView === 'editor' ? 'translate-x-0' : 'translate-x-full md:translate-x-0'}
        `}>
          {/* On Desktop, show empty state if nothing selected. On Mobile, the view slides in. */}
          <LyricsEditor 
            song={selectedSong} 
            onBack={handleBackToMenu}
          />
        </div>
      </div>

      {/* Hidden Print Component */}
      <BookletView songs={songs} metadata={metadata} />
      
      <style>{`
        @media print {
          @page { margin: 0; size: auto; }
          body { background-color: white; -webkit-print-color-adjust: exact; }
          .page-break-after { page-break-after: always; }
          /* Hide welcome screen on print if it happens to be open, though it shouldn't */
          .fixed { display: none !important; }
        }
      `}</style>
    </div>
  );
};

export default App;
import React from 'react';
import { Song, BookletMetadata } from '../types';
import { Music } from 'lucide-react';

interface BookletViewProps {
  songs: Song[];
  metadata: BookletMetadata;
}

export const BookletView: React.FC<BookletViewProps> = ({ songs, metadata }) => {
  return (
    <div className="print-only hidden print:block w-full bg-white text-black font-sans">
      {/* Cover Page */}
      <div className="booklet-page h-[297mm] w-[210mm] relative flex flex-col items-center justify-center text-center p-16 page-break-after">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-4xl font-bold uppercase tracking-wide text-black">
            Friends of Dagenham
          </h1>
          <h2 className="text-3xl font-medium text-black">
            Christmas Carol Songs
          </h2>
        </div>

        {/* Credits Footer */}
        <div className="absolute bottom-16 left-0 w-full text-center">
             <p className="text-xs text-gray-500 uppercase tracking-widest">Designed & Created by</p>
             <p className="text-sm font-semibold text-black mt-1">Jobby Kuttamperror Tom</p>
        </div>
      </div>

      {/* Table of Contents */}
      <div className="booklet-page h-[297mm] w-[210mm] p-16 page-break-after flex flex-col">
        <h2 className="text-3xl font-bold mb-10 border-b-2 border-black pb-2 inline-block text-black">Contents</h2>
        <ul className="space-y-4 flex-1">
          {songs.map((song) => (
            <li key={song.id} className="flex items-baseline gap-4 text-xl text-black">
              <span className="font-bold whitespace-nowrap min-w-[2ch]">{song.id}.</span>
              <span className="malayalam-text font-medium">{song.title}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Songs Pages */}
      {songs.map((song) => (
        <div key={song.id} className="booklet-page min-h-[297mm] w-[210mm] px-16 py-12 page-break-after relative">
          
          {/* Header */}
          <div className="flex items-start gap-3 mb-8 border-b border-black/10 pb-4">
             <span className="mt-1"><Music className="w-5 h-5 fill-black text-black" /></span>
             <h2 className="text-2xl font-bold text-black malayalam-text leading-tight">
               Song {song.id} – {song.title}
             </h2>
          </div>
            
          {/* Lyrics Body */}
          <div className="pl-1">
            {/* Malayalam Lyrics */}
            {song.lyrics ? (
              <div className="whitespace-pre-wrap text-[1.35rem] leading-[1.8] malayalam-text text-black font-medium text-left mb-8">
                {song.lyrics}
              </div>
            ) : (
              <div className="text-gray-400 italic mb-8">
                [Lyrics not available]
              </div>
            )}

            {/* Manglish Lyrics (if available) */}
            {song.lyricsManglish && (
              <div className="mt-8 pt-8 border-t border-black/20">
                <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-4">Manglish</h3>
                <div className="whitespace-pre-wrap text-[1.1rem] leading-[1.6] font-sans text-black text-left">
                  {song.lyricsManglish}
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
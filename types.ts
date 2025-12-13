export interface Song {
  id: number;
  title: string;
  originalTitle?: string; // For reference
  lyrics: string;
  lyricsManglish?: string;
}

export interface BookletMetadata {
  title: string;
  subtitle: string;
}
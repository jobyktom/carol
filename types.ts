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

export interface ScheduleDay {
  date: string;
  day: string;
  startTime: string;
  startHouse: string;
  houses: string[];
}
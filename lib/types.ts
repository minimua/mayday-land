// @/lib/types.ts
export interface Lyric {
  artist: string;
  album: string;
  release_date: string;
  song: string;
  lyrics: string;
  album_type: number;
}

export interface ApiResponse<T> {
  code: number;
  message: string;
  data: T | null;
}
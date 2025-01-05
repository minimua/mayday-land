export interface Lyric {
    id: string;
    content: string;
    song: string;
    album: string;
    year: number;
    tags: string[];
  }
  
  export interface ApiResponse<T> {
    code: number;
    message: string;
    data: T | null;
  }
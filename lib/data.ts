import { readFileSync } from 'fs';
import { join } from 'path';
import { Lyric } from './types';

export function getLyrics(): Lyric[] {
  const filePath = join(process.cwd(), 'data', 'lyrics.json');
  const fileContent = readFileSync(filePath, 'utf-8');
  return JSON.parse(fileContent);
}

export function getRandomLyric(): Lyric {
  const lyrics = getLyrics();
  const randomIndex = Math.floor(Math.random() * lyrics.length);
  return lyrics[randomIndex];
}

export function getLyricsByAlbum(albumName: string): Lyric[] {
  const lyrics = getLyrics();
  return lyrics.filter(lyric => 
    lyric.album.toLowerCase().includes(albumName.toLowerCase())
  );
}

export function searchLyrics(keyword: string): Lyric[] {
  const lyrics = getLyrics();
  return lyrics.filter(lyric => 
    lyric.content.includes(keyword) ||
    lyric.song.includes(keyword) ||
    lyric.album.includes(keyword)
  );
}
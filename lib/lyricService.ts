import { getLyricsCollection } from './mongodb';
import { Lyric } from './types';

export async function getRandomLyric(): Promise<Lyric | null> {
  const collection = await getLyricsCollection();
  const [lyric] = await collection.aggregate([{ $sample: { size: 1 } }]).toArray();
  return lyric as Lyric || null; 
  }
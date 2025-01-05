import { getLyricsCollection } from './mongodb';
import { Lyric } from './types';

export async function getRandomLyric(): Promise<Lyric | null> {
  const collection = await getLyricsCollection();
  const [lyric] = await collection.aggregate([
    { $sample: { size: 1 } }
  ]).toArray();
  return lyric as Lyric;
}

export async function getLyricsByAlbum(albumName: string): Promise<Lyric[]> {
  const collection = await getLyricsCollection();
  return collection
    .find({
      album: { $regex: albumName, $options: 'i' }
    })
    .toArray();
}

export async function searchLyrics(keyword: string): Promise<Lyric[]> {
  const collection = await getLyricsCollection();
  return collection
    .find({
      $or: [
        { content: { $regex: keyword, $options: 'i' } },
        { song: { $regex: keyword, $options: 'i' } },
        { album: { $regex: keyword, $options: 'i' } }
      ]
    })
    .toArray();
}

export async function addLyric(lyric: Omit<Lyric, 'id'>): Promise<Lyric> {
  const collection = await getLyricsCollection();
  const result = await collection.insertOne({
    ...lyric,
    id: new Date().getTime().toString()
  } as Lyric);
  return await collection.findOne({ _id: result.insertedId }) as Lyric;
}
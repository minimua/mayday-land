import { MongoClient } from 'mongodb';
import { Lyric } from './types';

if (!process.env.MONGODB_URI) {
  throw new Error('Please add your Mongodb URI to .env.local');
}

const uri = process.env.MONGODB_URI;
const options = {
  // 简化连接选项
  serverSelectionTimeoutMS: 5000,
  connectTimeoutMS: 10000,
  // 只保留必要的 SSL 选项
  ssl: true,
  tls: true,
} as const;

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

if (process.env.NODE_ENV === 'development') {
  if (!(global as any)._mongoClientPromise) {
    client = new MongoClient(uri, options);
    (global as any)._mongoClientPromise = client.connect();
  }
  clientPromise = (global as any)._mongoClientPromise;
} else {
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export async function getLyricsCollection() {
  try {
    const client = await clientPromise;
    const db = client.db('mayday-land');
    return db.collection<Lyric>('lyrics');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    throw error;
  }
}
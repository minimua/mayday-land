import { MongoClient, Collection, Document } from 'mongodb';

const uri = process.env.MONGODB_URI || '';

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

// 定义一个全局接口
interface GlobalWithMongo {
  _mongoClientPromise?: Promise<MongoClient>;
}

if (process.env.NODE_ENV === 'development') {
  if (!(global as GlobalWithMongo)._mongoClientPromise) {
    client = new MongoClient(uri);
    (global as GlobalWithMongo)._mongoClientPromise = client.connect();
  }
  clientPromise = (global as GlobalWithMongo)._mongoClientPromise!;
} else {
  client = new MongoClient(uri);
  clientPromise = client.connect();
}

export async function getLyricsCollection(): Promise<Collection<Document>> {
  const client = await clientPromise;
  const db = client.db('mayday-land');
  return db.collection<Document>('lyrics');
}
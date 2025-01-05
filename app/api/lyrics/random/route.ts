import { NextResponse } from 'next/server';
import { getRandomLyric } from '@/lib/lyricService';
import { ApiResponse, Lyric } from '@/lib/types';

export async function GET(): Promise<NextResponse<ApiResponse<Lyric>>> {
  try {
    const lyric = await getRandomLyric();
    
    if (!lyric) {
      return NextResponse.json({
        code: 404,
        message: 'No lyrics found',
        data: null
      }, { status: 404 });
    }
    
    return NextResponse.json({
      code: 200,
      message: 'success',
      data: lyric
    });
  } catch (error) {
    console.error('Error fetching random lyric:', error);
    return NextResponse.json({
      code: 500,
      message: 'Internal Server Error',
      data: null
    }, { status: 500 });
  }
}
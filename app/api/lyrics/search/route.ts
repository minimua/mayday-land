import { NextResponse } from 'next/server';
import { searchLyrics } from '@/lib/data';
import { ApiResponse, Lyric } from '@/lib/types';

export async function GET(
  request: Request
): Promise<NextResponse<ApiResponse<Lyric[]>>> {
  try {
    const { searchParams } = new URL(request.url);
    const q = searchParams.get('q') || '';
    
    const lyrics = searchLyrics(q);
    
    return NextResponse.json({
      code: 200,
      message: 'success',
      data: lyrics
    });
  } catch (error) {
    return NextResponse.json({
      code: 500,
      message: 'Internal Server Error',
      data: null
    }, { status: 500 });
  }
}
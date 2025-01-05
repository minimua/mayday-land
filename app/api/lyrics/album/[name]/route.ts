import { NextResponse } from 'next/server';
import { getLyricsByAlbum } from '@/lib/data';
import { ApiResponse, Lyric } from '@/lib/types';

export async function GET(
  request: Request,
  { params }: { params: { name: string } }
): Promise<NextResponse<ApiResponse<Lyric[]>>> {
  try {
    const lyrics = getLyricsByAlbum(params.name);
    
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
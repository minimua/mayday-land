'use client';

import { useState, useEffect } from 'react';

interface LyricData {
  artist: string;
  album: string;
  release_date: string;
  song: string;
  lyrics: string;
  album_type: number;
}

export default function LyricDisplay() {
  const [lyric, setLyric] = useState<LyricData | null>(null);

  const fetchNewLyric = async () => {
    try {
      const response = await fetch('/api/lyrics/random');
      const data = await response.json();
      if (data.data) {
        setLyric(data.data);
      }
    } catch (error) {
      console.error('获取歌词失败:', error);
    }
  };

  useEffect(() => {
    fetchNewLyric();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="text-3xl md:text-4xl text-gray-700 text-center max-w-2xl">
        <p className="mb-4">{lyric?.lyrics || '加载中...'}</p>
        {lyric && (
          <p className="text-sm text-gray-500 mt-4">
            —— {lyric.song} · {lyric.album} ({lyric.release_date.split('-')[0]})
          </p>
        )}
      </div>
      
      <button 
        className="mt-8 px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
        onClick={fetchNewLyric}
      >
        换一句
      </button>
    </div>
  );
} 
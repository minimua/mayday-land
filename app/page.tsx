import LyricDisplay from './components/LyricDisplay';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100">
      <nav className="p-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-600">MaydayLand</div>
      </nav>
      
      <div className="flex flex-col items-center justify-center min-h-[80vh] px-4">
        <LyricDisplay />
      </div>
      
      <footer className="text-center p-4 text-blue-600">
        {/* <p>根据时间、地点智能推荐</p>
        <p>支持图片和 JSON 格式调用</p> */}
      </footer>
    </main>
  )
}
export default function Footer() {
  return (
    <footer className="py-20 px-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div>
          <h2 className="text-2xl font-bold tracking-tighter mb-2">GOROCKET</h2>
          <p className="text-gray-400 text-sm max-w-xs">
            고려대학교 기계공학부 로켓제작 소모임 (Founded in 2019).
            하늘을 향한 열정으로 미지의 세계를 탐구합니다.
          </p>
        </div>

        <div className="flex flex-col gap-2 text-sm text-gray-400">
          <p>© {new Date().getFullYear()} GOROCKET. All rights reserved.</p>
          <p>Korea University, Seoul, South Korea</p>
        </div>
      </div>
    </footer>
  );
}

import { Button } from "@/components/ui/button";
import { useAuth } from "@/_core/hooks/useAuth";
import { getLoginUrl } from "@/const";
import { Link } from "wouter";

export default function Home() {
  const { user, isAuthenticated } = useAuth();

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border">
        <div className="container py-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="text-3xl">☯</div>
            <h1 className="text-3xl font-bold">Đạo Sinh Tâm</h1>
          </div>
          <nav className="flex gap-6 items-center">
            <Link href="/hexagrams" className="hover:text-accent transition">Lục Thập Tứ Quái</Link>
            <Link href="/wheel" className="hover:text-accent transition">Quay Quẻ</Link>
            <Link href="/connect" className="hover:text-accent transition">Kết Nối</Link>
            {isAuthenticated && (
              <>
                <Link href="/chat" className="hover:text-accent transition">Chat AI</Link>
                <Link href="/history" className="hover:text-accent transition">Lịch Sử</Link>
              </>
            )}
            {isAuthenticated ? (
              <div className="text-sm text-muted-foreground">
                Xin chào, {user?.name || user?.email}
              </div>
            ) : (
              <a href={getLoginUrl()} className="text-accent hover:underline">
                Đăng nhập
              </a>
            )}
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6 leading-tight">
            Khám Phá Kinh Dịch Cổ Xưa
          </h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Đạo Sinh Tâm là ứng dụng huyền học tích hợp AI, giúp bạn khám phá 64 quẻ Kinh Dịch, 
            gieo quẻ, và nhận được lời giải thích từ trí tuệ cổ xưa.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div className="p-6 sm:p-8 bg-card border border-border rounded-lg hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4 text-center">📖</div>
              <h3 className="text-lg sm:text-xl font-bold mb-3">64 Quẻ Kinh Dịch</h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-4">
                Khám phá chi tiết 64 quẻ với ý nghĩa, giải thích và lời khuyên.
              </p>
              <Link href="/hexagrams">
                <Button variant="outline" className="w-full text-sm sm:text-base">
                  Xem Danh Sách
                </Button>
              </Link>
            </div>

            <div className="p-6 sm:p-8 bg-card border border-border rounded-lg hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4 text-center">🎯</div>
              <h3 className="text-lg sm:text-xl font-bold mb-3">Quay Quẻ</h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-4">
                Gieo quẻ ngẫu nhiên và nhận được lời giải thích chi tiết.
              </p>
              <Link href="/wheel">
                <Button variant="outline" className="w-full text-sm sm:text-base">
                  Bắt Đầu Quay
                </Button>
              </Link>
            </div>

            <div className="p-6 sm:p-8 bg-card border border-border rounded-lg hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4 text-center">✨</div>
              <h3 className="text-lg sm:text-xl font-bold mb-3">Chat AI Thông Thái</h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-4">
                Hỏi AI để nhận lời giải thích sâu sắc về Kinh Dịch.
              </p>
              <Link href="/chat">
                <Button variant="outline" className="w-full text-sm sm:text-base">
                  Đăng Nhập để Chat
                </Button>
              </Link>
            </div>
          </div>

          {/* Kết Nối Section */}
          <div className="mt-16 mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8">Kết Nối Với Chúng Tôi</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Theo dõi chúng tôi trên các nền tảng xã hội để cập nhật thông tin mới nhất
            </p>
            <Link href="/connect">
              <Button className="px-8 py-3 text-lg">Xem Tất Cả Kênh Kết Nối</Button>
            </Link>
          </div>

          {!isAuthenticated && (
            <div className="mt-16 p-8 sm:p-12 bg-card border border-border rounded-lg">
              <h3 className="text-xl sm:text-2xl font-bold mb-4">Bắt Đầu Hành Trình Của Bạn</h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-8">
                Đăng nhập để truy cập các tính năng đầy đủ và lưu lịch sử của bạn.
              </p>
              <a href={getLoginUrl()}>
                <Button className="px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-lg">Đăng Nhập Ngay</Button>
              </a>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-16">
        <div className="container py-8 text-center text-muted-foreground">
          <p>Đạo Sinh Tâm - Kinh Dịch AI © 2026</p>
          <p className="text-sm mt-2">Khám phá trí tuệ cổ xưa với công nghệ hiện đại</p>
        </div>
      </footer>
    </div>
  );
}

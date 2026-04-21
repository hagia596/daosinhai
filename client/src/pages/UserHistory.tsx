import { Button } from "@/components/ui/button";
import { trpc } from "@/lib/trpc";
import { Link } from "wouter";
import { useAuth } from "@/_core/hooks/useAuth";
import { getLoginUrl } from "@/const";

export default function UserHistory() {
  const { isAuthenticated } = useAuth();
  const { data: history } = trpc.userHistory.getHistory.useQuery(undefined, {
    enabled: isAuthenticated,
  });

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <header className="border-b border-border">
          <div className="container py-6">
            <Link href="/" className="text-2xl font-bold hover:text-accent">
              ☯ Đạo Sinh Tâm
            </Link>
          </div>
        </header>
        <main className="container py-12 flex items-center justify-center min-h-[calc(100vh-100px)]">
          <div className="text-center">
            <p className="text-lg text-muted-foreground mb-6">
              Vui lòng đăng nhập để xem lịch sử
            </p>
            <a href={getLoginUrl()}>
              <Button>Đăng Nhập</Button>
            </a>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border">
        <div className="container py-6">
          <Link href="/" className="text-2xl font-bold hover:text-accent">
            ☯ Đạo Sinh Tâm
          </Link>
        </div>
      </header>

      <main className="container py-12">
        <h1 className="text-4xl font-bold mb-8">Lịch Sử Của Bạn</h1>

        {!history || history.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg mb-6">
              Bạn chưa có lịch sử gieo quẻ nào
            </p>
            <Link href="/wheel">
              <Button>Bắt Đầu Quay Quẻ</Button>
            </Link>
          </div>
        ) : (
          <div className="grid gap-6">
            {history.map((record, idx) => (
              <div
                key={idx}
                className="p-6 bg-card border border-border rounded-lg hover:shadow-lg transition"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <p className="text-sm text-muted-foreground">
                      {new Date(record.createdAt).toLocaleString("vi-VN")}
                    </p>
                  </div>
                  <span className="text-xs bg-accent text-accent-foreground px-2 py-1 rounded">
                    {record.castMethod || "Không xác định"}
                  </span>
                </div>

                {record.question && (
                  <div className="mb-4">
                    <p className="font-bold mb-2">Câu Hỏi:</p>
                    <p className="text-muted-foreground">{record.question}</p>
                  </div>
                )}

                {record.answer && (
                  <div className="mb-4">
                    <p className="font-bold mb-2">Lời Giải:</p>
                    <p className="text-muted-foreground">{record.answer}</p>
                  </div>
                )}

                {record.hexagramId && (
                  <Link href={`/hexagrams/${record.hexagramId}`}>
                    <Button variant="outline" size="sm">
                      Xem Quẻ
                    </Button>
                  </Link>
                )}
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

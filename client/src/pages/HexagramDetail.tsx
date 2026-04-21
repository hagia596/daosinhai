import { useParams } from "wouter";
import { Button } from "@/components/ui/button";
import { trpc } from "@/lib/trpc";
import { Link } from "wouter";

export default function HexagramDetail() {
  const params = useParams();
  const hexagramId = parseInt(params.id || "1", 10);

  const { data: hexagram, isLoading } = trpc.hexagrams.getById.useQuery(
    { id: hexagramId },
    { enabled: !!hexagramId }
  ) as any;

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <p>Đang tải...</p>
      </div>
    );
  }

  if (!hexagram) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <header className="border-b border-border">
          <div className="container py-6">
            <Link href="/" className="text-2xl font-bold hover:text-accent">
              ☯ Đạo Sinh Tâm
            </Link>
          </div>
        </header>
        <main className="container py-12">
          <p className="text-center text-muted-foreground">Không tìm thấy quẻ</p>
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
        <div className="max-w-3xl mx-auto">
          {/* Back Button */}
          <Link href="/hexagrams">
            <Button variant="outline" className="mb-8">
              ← Quay Lại
            </Button>
          </Link>

          {/* Title */}
          <div className="text-center mb-12">
            <div className="text-7xl mb-4">{hexagram.symbol}</div>
            <h1 className="text-4xl font-bold mb-2">{hexagram.name}</h1>
            <p className="text-xl text-muted-foreground mb-2">{hexagram.nameEnglish}</p>
            <p className="text-sm text-muted-foreground">Quẻ số {hexagram.number}</p>
          </div>

          {/* Content */}
          <div className="space-y-8">
            {/* Description */}
            <section className="p-6 bg-card border border-border rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Mô Tả</h2>
              <p className="text-muted-foreground leading-relaxed">
                {String(hexagram.description)}
              </p>
            </section>

            {/* Meaning */}
            <section className="p-6 bg-card border border-border rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Ý Nghĩa</h2>
              <p className="text-muted-foreground leading-relaxed">
                {String(hexagram.meaning)}
              </p>
            </section>

            {/* Interpretation */}
            <section className="p-6 bg-card border border-border rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Giải Thích</h2>
              <p className="text-muted-foreground leading-relaxed">
                {String(hexagram.interpretation)}
              </p>
            </section>

            {/* Advice */}
            <section className="p-6 bg-card border border-border rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Lời Khùyên</h2>
              <p className="text-muted-foreground leading-relaxed">
                {String(hexagram.advice)}
              </p>
            </section>

            {/* Lines */}
            {hexagram.lines && Array.isArray(hexagram.lines) && (
              <section className="p-6 bg-card border border-border rounded-lg">
                <h2 className="text-2xl font-bold mb-4">Sáu Nét</h2>
                <div className="space-y-4">
                  {(hexagram.lines as any[]).map((line: any, idx: number) => (
                    <div key={idx} className="pb-4 border-b border-border last:border-0">
                      <div className="font-bold mb-2">
                        Nét {line.position}: {line.type === "yang" ? "Dương (—)" : "Âm (--)"}
                      </div>
                      <p className="text-muted-foreground">{line.meaning}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Related */}
            {hexagram.relatedHexagrams && Array.isArray(hexagram.relatedHexagrams) && (
              <section className="p-6 bg-card border border-border rounded-lg">
                <h2 className="text-2xl font-bold mb-4">Quẻ Liên Quan</h2>
                <div className="flex gap-4 flex-wrap">
                  {(hexagram.relatedHexagrams as number[]).map((relatedId: number) => (
                    <Link key={relatedId} href={`/hexagrams/${relatedId}`}>
                      <Button variant="outline">Quẻ {relatedId}</Button>
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

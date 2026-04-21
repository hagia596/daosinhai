import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { trpc } from "@/lib/trpc";
import { Link } from "wouter";

export default function HexagramGrid() {
  const [searchTerm, setSearchTerm] = useState("");
  
  const { data: hexagrams } = trpc.hexagrams.list.useQuery();

  const filteredHexagrams = useMemo(() => {
    if (!hexagrams) return [];
    return hexagrams.filter(hex =>
      hex.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      hex.nameEnglish?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      hex.number.toString().includes(searchTerm)
    );
  }, [hexagrams, searchTerm]);

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
        <h1 className="text-4xl font-bold mb-8">Lục Thập Tứ Quái</h1>

        {/* Search */}
        <div className="mb-8">
          <Input
            placeholder="Tìm kiếm quẻ theo tên, số hoặc ý nghĩa..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="max-w-md"
          />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {filteredHexagrams.map((hex) => (
            <Link key={hex.id} href={`/hexagrams/${hex.id}`}>
              <div className="p-4 border border-border rounded-lg hover:shadow-lg hover:border-accent transition cursor-pointer">
                <div className="text-4xl text-center mb-2">{hex.symbol}</div>
                <div className="text-sm font-bold text-center mb-1">{hex.number}</div>
                <div className="text-xs text-muted-foreground text-center">{hex.name}</div>
              </div>
            </Link>
          ))}
        </div>

        {filteredHexagrams.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">Không tìm thấy quẻ nào phù hợp</p>
          </div>
        )}

        <div className="mt-12 text-center text-muted-foreground">
          <p>Tìm thấy {filteredHexagrams.length} quẻ</p>
        </div>
      </main>
    </div>
  );
}

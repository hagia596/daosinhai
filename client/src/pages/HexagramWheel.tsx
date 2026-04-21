import { useState, useRef, useEffect, useCallback, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { trpc } from "@/lib/trpc";
import { Link } from "wouter";

export default function HexagramWheel() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isSpinning, setIsSpinning] = useState(false);
  const [selectedHexagram, setSelectedHexagram] = useState<any>(null);
  const [rotation, setRotation] = useState(0);
  
  const { data: hexagrams } = trpc.hexagrams.list.useQuery();
  const randomHexagramQuery = trpc.hexagrams.random.useQuery();

  const hexCount = useMemo(() => {
    return hexagrams ? Math.min(hexagrams.length, 8) : 0;
  }, [hexagrams]);

  const drawWheel = useCallback(() => {
    if (!canvasRef.current || !hexagrams || hexagrams.length === 0) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    const centerX = width / 2;
    const centerY = height / 2;
    const radius = 150;

    // Clear canvas
    ctx.fillStyle = "#f5f1e8";
    ctx.fillRect(0, 0, width, height);

    // Draw circle border
    ctx.strokeStyle = "#8b7355";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
    ctx.stroke();

    // Draw hexagrams around the wheel
    hexagrams.slice(0, hexCount).forEach((hex, index) => {
      const angle = (index / hexCount) * Math.PI * 2 + rotation;
      const x = centerX + Math.cos(angle) * radius;
      const y = centerY + Math.sin(angle) * radius;

      // Draw hexagram
      ctx.font = "bold 28px serif";
      ctx.fillStyle = "#3d2817";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(hex.symbol, x, y);
    });

    // Draw center circle
    ctx.fillStyle = "#d4af37";
    ctx.beginPath();
    ctx.arc(centerX, centerY, 40, 0, Math.PI * 2);
    ctx.fill();

    ctx.strokeStyle = "#8b7355";
    ctx.lineWidth = 2;
    ctx.stroke();

    // Draw yin-yang in center
    ctx.fillStyle = "#3d2817";
    ctx.font = "bold 32px serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("☯", centerX, centerY);
  }, [hexagrams, rotation, hexCount]);

  useEffect(() => {
    drawWheel();
  }, [drawWheel]);

  const handleSpin = useCallback(async () => {
    if (isSpinning) return;
    
    setIsSpinning(true);
    const spins = 10;
    const duration = 3000;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth deceleration
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const newRotation = (spins * Math.PI * 2 * easeOut) % (Math.PI * 2);
      
      setRotation(newRotation);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setIsSpinning(false);
        // Get random hexagram
        randomHexagramQuery.refetch().then((result) => {
          if (result.data) {
            setSelectedHexagram(result.data);
          }
        });
      }
    };

    animate();
  }, [isSpinning, randomHexagramQuery]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border">
        <div className="container py-6 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold hover:text-accent">
            ☯ Đạo Sinh Tâm
          </Link>
          <nav className="flex gap-6">
            <Link href="/hexagrams" className="hover:text-accent">
              Lục Thập Tứ Quái
            </Link>
            <Link href="/chat" className="hover:text-accent">
              Chat AI
            </Link>
            <Link href="/history" className="hover:text-accent">
              Lịch Sử
            </Link>
          </nav>
        </div>
      </header>

      <main className="container py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12">Vòng Quay Quẻ</h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Canvas */}
            <div className="flex justify-center items-center">
              <div className="relative">
                <canvas
                  ref={canvasRef}
                  width={400}
                  height={400}
                  className="border-4 border-border rounded-lg shadow-lg"
                />
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2">
                  <div className="w-0 h-0 border-l-8 border-r-8 border-t-12 border-l-transparent border-r-transparent border-t-accent"></div>
                </div>
              </div>
            </div>

            {/* Info Panel */}
            <div className="flex flex-col justify-center">
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Gieo Quẻ</h2>
                <p className="text-muted-foreground mb-6">
                  Nhấn nút "Quay Quẻ" để gieo quẻ ngẫu nhiên. Vòng quay sẽ xoay và dừng lại tại một quẻ.
                </p>
              </div>

              <Button
                onClick={handleSpin}
                disabled={isSpinning || !hexagrams}
                className="mb-8 py-6 text-lg"
                size="lg"
              >
                {isSpinning ? "Đang Quay..." : "Quay Quẻ"}
              </Button>

              {selectedHexagram && (
                <div className="p-6 bg-card border border-border rounded-lg">
                  <div className="text-5xl text-center mb-4">{selectedHexagram.symbol}</div>
                  <h3 className="text-2xl font-bold mb-2 text-center">{selectedHexagram.name}</h3>
                  <p className="text-sm text-muted-foreground text-center mb-4">
                    {selectedHexagram.nameEnglish}
                  </p>
                  <p className="text-muted-foreground mb-6">
                    {selectedHexagram.meaning}
                  </p>
                  <Link href={`/hexagrams/${selectedHexagram.id}`}>
                    <Button variant="outline" className="w-full">
                      Xem Chi Tiết
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { trpc } from "@/lib/trpc";
import { Link } from "wouter";
import { useAuth } from "@/_core/hooks/useAuth";
import { Streamdown } from "streamdown";

interface SearchSource {
  title: string;
  url: string;
}

interface Message {
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
  sources?: SearchSource[];
}

export default function AIChat() {
  const { isAuthenticated, user } = useAuth();
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Use public chat for guests, protected chat for authenticated users
  const publicChatMutation = trpc.publicChat.chat.useMutation();
  const protectedChatMutation = trpc.conversations.chat.useMutation();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input;
    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: userMessage, timestamp: new Date() }]);
    setIsLoading(true);

    try {
      let result;

      if (isAuthenticated && user) {
        // Use protected chat for authenticated users
        result = await protectedChatMutation.mutateAsync({
          message: userMessage,
          context: "User is asking about I Ching wisdom and divination",
          conversationHistory: messages.map(m => ({
            role: m.role,
            content: m.content,
          })),
          enableWebSearch: true,
        });
      } else {
        // Use public chat for guests
        result = await publicChatMutation.mutateAsync({
          message: userMessage,
          context: "User is asking about I Ching wisdom and divination",
          conversationHistory: messages.map(m => ({
            role: m.role,
            content: m.content,
          })),
          enableWebSearch: true,
        });
      }

      setMessages((prev) => [
        ...prev,
        { 
          role: "assistant", 
          content: result.aiResponse, 
          timestamp: new Date(),
          sources: result.sources,
        },
      ]);
    } catch (error) {
      console.error("Chat error:", error);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Xin lỗi, tôi gặp lỗi khi xử lý câu hỏi của bạn. Vui lòng thử lại.",
          timestamp: new Date(),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

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
            <Link href="/wheel" className="hover:text-accent">
              Quay Quẻ
            </Link>
            {isAuthenticated && (
              <Link href="/history" className="hover:text-accent">
                Lịch Sử
              </Link>
            )}
          </nav>
        </div>
      </header>

      <main className="container py-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">Chat AI Thông Thái</h1>
            {isAuthenticated && (
              <span className="text-sm text-muted-foreground">
                Đã đăng nhập: {user?.name || user?.email}
              </span>
            )}
          </div>

          {/* Chat Messages */}
          <div className="bg-card border border-border rounded-lg p-6 mb-6 h-[600px] overflow-y-auto flex flex-col gap-4">
            {messages.length === 0 && (
              <div className="flex-1 flex items-center justify-center text-center text-muted-foreground">
                <div>
                  <p className="text-lg mb-2">Bắt đầu cuộc trò chuyện</p>
                  <p className="text-sm">Hỏi tôi bất cứ điều gì về Kinh Dịch, tôi sẽ trả lời với sự hiểu biết từ trí tuệ cổ xưa.</p>
                </div>
              </div>
            )}

            {messages.map((message, index) => (
              <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[70%] rounded-lg p-4 ${
                    message.role === "user"
                      ? "bg-accent text-accent-foreground"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {message.role === "assistant" ? (
                    <Streamdown>{message.content}</Streamdown>
                  ) : (
                    <p>{message.content}</p>
                  )}

                  {/* Display search sources if available */}
                  {message.sources && message.sources.length > 0 && (
                    <div className="mt-4 pt-4 border-t border-border/30">
                      <p className="text-xs font-semibold mb-2 opacity-70">📚 Nguồn tham khảo:</p>
                      <div className="space-y-2">
                        {message.sources.map((source, idx) => (
                          <a
                            key={idx}
                            href={source.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs hover:underline opacity-80 hover:opacity-100 block truncate"
                            title={source.title}
                          >
                            {idx + 1}. {source.title}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}

                  <p className="text-xs opacity-50 mt-2">
                    {message.timestamp.toLocaleTimeString('vi-VN')}
                  </p>
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-muted text-muted-foreground rounded-lg p-4">
                  <div className="flex gap-2">
                    <div className="w-2 h-2 bg-current rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-current rounded-full animate-bounce delay-100"></div>
                    <div className="w-2 h-2 bg-current rounded-full animate-bounce delay-200"></div>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="flex gap-2">
            <Input
              type="text"
              placeholder="Hỏi tôi về Kinh Dịch..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleSendMessage();
                }
              }}
              disabled={isLoading}
              className="flex-1"
            />
            <Button
              onClick={handleSendMessage}
              disabled={isLoading || !input.trim()}
            >
              {isLoading ? "Đang xử lý..." : "Gửi"}
            </Button>
          </div>

          {/* Info */}
          <div className="mt-6 p-4 bg-muted rounded-lg text-sm text-muted-foreground">
            <p>💡 <strong>Mẹo:</strong> AI sẽ tự động tìm kiếm thông tin trên internet để trả lời câu hỏi của bạn. Bạn có thể hỏi về các chủ đề hiện tại, định nghĩa, hoặc bất kỳ thông tin nào liên quan đến Kinh Dịch.</p>
            {!isAuthenticated && (
              <p className="mt-2 text-xs">ℹ️ Chat này là công khai - không cần đăng nhập. Nếu bạn muốn lưu lịch sử chat, vui lòng <Link href="/" className="hover:underline">đăng nhập</Link>.</p>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { trpc } from "@/lib/trpc";
import { Link } from "wouter";
import { useAuth } from "@/_core/hooks/useAuth";
import { getLoginUrl } from "@/const";

interface Conversation {
  id: number;
  userId: number;
  title?: string;
  messages: any[];
  isArchived: boolean;
  isVisible: boolean;
  createdAt: Date;
}

interface UserHistory {
  id: number;
  userId: number;
  hexagramId?: number;
  question?: string;
  answer?: string;
  castMethod?: string;
  metadata?: any;
  createdAt: Date;
}

export default function AdminPanel() {
  const { user, isAuthenticated } = useAuth();
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [history, setHistory] = useState<UserHistory[]>([]);
  const [activeTab, setActiveTab] = useState<"conversations" | "history">("conversations");
  const [selectedConversation, setSelectedConversation] = useState<Conversation | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const getAllConversationsQuery = trpc.conversations.getAllConversations.useQuery(undefined, {
    enabled: user?.role === "admin",
  });
  const getAllHistoryQuery = trpc.userHistory.getAllHistory.useQuery(undefined, {
    enabled: user?.role === "admin",
  });


  useEffect(() => {
    if (getAllConversationsQuery.data) {
      setConversations(getAllConversationsQuery.data as any);
    }
  }, [getAllConversationsQuery.data]);

  useEffect(() => {
    if (getAllHistoryQuery.data) {
      setHistory(getAllHistoryQuery.data as any);
    }
  }, [getAllHistoryQuery.data]);



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
              Vui lòng đăng nhập
            </p>
            <a href={getLoginUrl()}>
              <Button>Đăng Nhập</Button>
            </a>
          </div>
        </main>
      </div>
    );
  }

  if (user?.role !== "admin") {
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
              Bạn không có quyền truy cập trang này. Chỉ quản trị viên mới có thể xem.
            </p>
            <Link href="/">
              <Button>Quay Lại Trang Chủ</Button>
            </Link>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Header */}
      <header className="border-b border-border">
        <div className="container py-6 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold hover:text-accent">
            ☯ Đạo Sinh Tâm - Admin
          </Link>
          <nav className="flex gap-6">
            <Link href="/" className="hover:text-accent">
              Trang Chủ
            </Link>
          </nav>
        </div>
      </header>

      <main className="container flex-1 py-8">
        <h1 className="text-3xl font-bold mb-8">Bảng Điều Khiển Quản Trị</h1>

        {/* Tabs */}
        <div className="flex gap-4 mb-8 border-b border-border">
          <button
            onClick={() => setActiveTab("conversations")}
            className={`pb-2 px-4 font-semibold ${
              activeTab === "conversations"
                ? "border-b-2 border-accent text-accent"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Hộp Thư Hội Thoại ({conversations.length})
          </button>
          <button
            onClick={() => setActiveTab("history")}
            className={`pb-2 px-4 font-semibold ${
              activeTab === "history"
                ? "border-b-2 border-accent text-accent"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Lịch Sử Người Dùng ({history.length})
          </button>

        </div>

        {/* Conversations Tab */}
        {activeTab === "conversations" && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Conversation List */}
            <div className="lg:col-span-1 border border-border rounded-lg p-4 max-h-96 overflow-y-auto">
              <h2 className="font-bold mb-4">Danh Sách Hội Thoại</h2>
              {conversations.length === 0 ? (
                <p className="text-muted-foreground">Không có hội thoại nào</p>
              ) : (
                <div className="space-y-2">
                  {conversations.map((conv) => (
                    <button
                      key={conv.id}
                      onClick={() => setSelectedConversation(conv)}
                      className={`w-full text-left p-2 rounded hover:bg-accent hover:text-accent-foreground ${
                        selectedConversation?.id === conv.id ? "bg-accent text-accent-foreground" : ""
                      }`}
                    >
                      <div className="font-semibold truncate">{conv.title || "Untitled"}</div>
                      <div className="text-sm text-muted-foreground">
                        {conv.messages?.length || 0} tin nhắn
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Conversation Detail */}
            <div className="lg:col-span-2 border border-border rounded-lg p-4">
              {selectedConversation ? (
                <div>
                  <h2 className="font-bold mb-4 text-lg">{selectedConversation.title || "Untitled"}</h2>
                  <div className="space-y-4 max-h-96 overflow-y-auto">
                    {selectedConversation.messages && selectedConversation.messages.length > 0 ? (
                      selectedConversation.messages.map((msg, idx) => (
                        <div key={idx} className={`p-3 rounded ${
                          msg.role === "user" ? "bg-accent text-accent-foreground" : "bg-muted"
                        }`}>
                          <div className="font-semibold text-sm mb-1">
                            {msg.role === "user" ? "Người Dùng" : "AI"}
                          </div>
                          <p className="whitespace-pre-wrap text-sm">{msg.content}</p>
                          {msg.timestamp && (
                            <div className="text-xs opacity-70 mt-1">
                              {new Date(msg.timestamp).toLocaleString('vi-VN')}
                            </div>
                          )}
                        </div>
                      ))
                    ) : (
                      <p className="text-muted-foreground">Không có tin nhắn</p>
                    )}
                  </div>
                </div>
              ) : (
                <p className="text-muted-foreground text-center py-12">
                  Chọn một hội thoại để xem chi tiết
                </p>
              )}
            </div>
          </div>
        )}

        {/* History Tab */}
        {activeTab === "history" && (
          <div className="border border-border rounded-lg p-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="border-b border-border">
                <tr>
                  <th className="text-left py-2 px-4">User ID</th>
                  <th className="text-left py-2 px-4">Câu Hỏi</th>
                  <th className="text-left py-2 px-4">Loại</th>
                  <th className="text-left py-2 px-4">Thời Gian</th>
                </tr>
              </thead>
              <tbody>
                {history.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="text-center py-4 text-muted-foreground">
                      Không có lịch sử nào
                    </td>
                  </tr>
                ) : (
                  history.map((item) => (
                    <tr key={item.id} className="border-b border-border hover:bg-muted">
                      <td className="py-2 px-4">{item.userId}</td>
                      <td className="py-2 px-4 truncate max-w-xs">{item.question || "-"}</td>
                      <td className="py-2 px-4">{item.castMethod || "-"}</td>
                      <td className="py-2 px-4">
                        {new Date(item.createdAt).toLocaleString('vi-VN')}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        )}


      </main>
    </div>
  );
}

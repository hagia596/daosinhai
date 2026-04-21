import { Facebook, MessageCircle, Music } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Connect() {
  const connections = [
    {
      name: 'Facebook Cá Nhân',
      icon: Facebook,
      url: 'https://www.facebook.com/HGbinhz2356',
      color: 'bg-blue-600 hover:bg-blue-700',
      description: 'Kết nối cá nhân'
    },
    {
      name: 'Trang Facebook',
      icon: Facebook,
      url: 'https://www.facebook.com/senpai2k3',
      color: 'bg-blue-500 hover:bg-blue-600',
      description: 'Trang chính thức'
    },
    {
      name: 'Nhóm Facebook',
      icon: Facebook,
      url: 'https://www.facebook.com/groups/315568554759304',
      color: 'bg-blue-700 hover:bg-blue-800',
      description: 'Cộng đồng'
    },
    {
      name: 'Chat Nhóm',
      icon: MessageCircle,
      url: 'https://m.me/cm/AbYq3UG-EbZcpykd/?send_source=cm%3Acopy_invite_link',
      color: 'bg-indigo-600 hover:bg-indigo-700',
      description: 'Trò chuyện trực tiếp'
    },
    {
      name: 'TikTok',
      icon: Music,
      url: 'https://www.tiktok.com/@daosinhtam888',
      color: 'bg-black hover:bg-gray-900',
      description: 'Video & nội dung'
    }
  ];

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-foreground">Kết Nối Với Chúng Tôi</h1>
          <p className="text-lg text-muted-foreground">
            Theo dõi các kênh của chúng tôi để cập nhật thông tin mới nhất
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {connections.map((conn) => {
            const IconComponent = conn.icon;
            return (
              <a
                key={conn.name}
                href={conn.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="h-full bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  <div className={`${conn.color} w-16 h-16 rounded-full flex items-center justify-center mb-4 text-white transition-all duration-300`}>
                    <IconComponent size={32} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">{conn.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{conn.description}</p>
                  <Button 
                    className={`w-full ${conn.color} text-white`}
                    asChild
                  >
                    <a href={conn.url} target="_blank" rel="noopener noreferrer">
                      Truy Cập
                    </a>
                  </Button>
                </div>
              </a>
            );
          })}
        </div>

        <div className="mt-16 bg-card border border-border rounded-lg p-8 text-center">
          <h2 className="text-2xl font-semibold mb-4 text-foreground">Tham Gia Cộng Đồng</h2>
          <p className="text-muted-foreground mb-6">
            Đừng bỏ lỡ những cập nhật mới nhất, mẹo hữu ích, và các sự kiện đặc biệt. 
            Hãy kết nối với chúng tôi trên các nền tảng xã hội yêu thích của bạn.
          </p>
          <p className="text-sm text-muted-foreground">
            Chúng tôi rất vui khi được gặp bạn ở bất kỳ kênh nào!
          </p>
        </div>
      </div>
    </div>
  );
}

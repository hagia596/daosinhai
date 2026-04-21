# Đạo Sinh Tâm - Kinh Dịch AI - TODO

## Database & Schema
- [x] Tạo schema: users (email + password), hexagrams, conversations, user_history
- [x] Tạo migration SQL cho tất cả bảng
- [x] Thêm query helpers trong server/db.ts
- [x] Seed dữ liệu quẻ Kinh Dịch vào database tự động

## Backend - tRPC Procedures
- [x] hexagrams.list - lấy danh sách quẻ
- [x] hexagrams.getById - lấy chi tiết một quẻ
- [x] hexagrams.getByNumber - lấy quẻ theo số
- [x] hexagrams.random - lấy quẻ ngẫu nhiên
- [x] conversations.getHistory - lấy lịch sử hội thoại
- [x] conversations.create - tạo cuộc hội thoại mới
- [x] conversations.chat - gọi AI để trả lời (tích hợp LLM + lịch sử)
- [x] conversations.getAllConversations (admin-only) - xem tất cả hội thoại
- [x] conversations.getConversationById (admin-only) - xem chi tiết hội thoại
- [x] userHistory.getHistory - lấy lịch sử người dùng
- [x] userHistory.record - lưu lịch sử gieo quẻ, câu hỏi, lời giải
- [x] userHistory.getAllHistory (admin-only) - xem tất cả lịch sử

## Hệ thống Xác thực
- [x] Sử dụng Manus OAuth (đã tích hợp sẵn)
- [x] Bảo vệ các route cần xác thực

## Nội dung Kinh Dịch
- [x] Thu thập nội dung chi tiết 64 quẻ (đầy đủ)
- [x] Chuẩn bị dữ liệu seed cho database
- [x] Hoàn thành dữ liệu 64 quẻ (tất cả 64 quẻ)
- [x] Nâng cấp Luc Thập Tứ Quải - đầy đủ 64 quẻ

## Frontend - Giao diện
- [x] Thiết kế layout huyền học: header, navigation, footer (index.css)
- [x] Trang Khởi Đầu (Home.tsx): giới thiệu, tính năng, CTA
- [x] Trang Quay Quẻ (HexagramWheel.tsx): vòng quay Canvas, nút quay, hiệu ứng
- [x] Trang Lục Thập Tứ Quái (HexagramGrid.tsx): lưới quẻ, tìm kiếm, chi tiết
- [x] Chi tiết Quẻ (HexagramDetail.tsx): hiển thị đầy đủ thông tin quẻ
- [x] Chat AI (AIChat.tsx): hộp chat, tích hợp LLM
- [x] Trang Lịch Sử (UserHistory.tsx): xem lại hội thoại và gieo quẻ
- [x] Trang Quản Trị (AdminPanel.tsx): xem hộp thư lưu trữ hội thoại

## Tích hợp AI & Tìm kiếm
- [x] Tích hợp LLM cho chat AI
- [x] Hỗ trợ lịch sử hội thoại (conversation history)
- [x] Lưu trữ lịch sử hội thoại trong database
- [x] System prompt với context Kinh Dịch

## Kiểm tra & Tối ưu
- [x] Viết vitest tests cho hexagrams procedures
- [x] Chạy và pass tất cả tests
- [x] Viết thêm tests cho conversations procedures
- [x] Viết tests cho admin procedures
- [x] Tất cả tests pass (13 tests)
- [x] Tối ưu hiệu năng vòng quay Canvas (useCallback, useMemo)
- [x] Kiểm tra responsive design trên mobile (sm: breakpoint)
- [x] Kiểm tra hiệu năng database queries

## Deployment
- [x] Tạo checkpoint cuối cùng
- [x] Chuẩn bị deploy ứng dụng

## Tính Năng Bổ Sung
- [x] Lưu message riêng biệt trong conversations
- [x] Admin-only mailbox - chỉ admin mới có thể xem tất cả hội thoại
- [x] Bảo vệ route - chỉ người dùng đã đăng nhập mới có thể truy cập
- [x] Kết nối AIChat với conversationId để lưu lịch sử
- [x] Tạo AdminPanel để xem mailbox và lịch sử
- [x] Thêm tests cho quyền admin

## Nâng Cấp Chat AI - Tìm Kiếm Internet

### Backend
- [x] Tích hợp Web Search API (Manus built-in API)
- [x] Cập nhật conversations.chat procedure với tìm kiếm internet
- [x] Lưu source tìm kiếm trong database
- [x] Xử lý kết quả tìm kiếm và tổng hợp thông tin

### Frontend
- [x] Hiển thị source tìm kiếm trong chat
- [x] Thêm indicator "Đang tìm kiếm..."
- [x] Hiển thị links từ kết quả tìm kiếm
- [x] Cải thiện UX cho web search results

### Testing
- [x] Viết tests cho web search integration (8 tests)
- [x] Kiểm tra response format
- [x] Kiểm tra error handling
- [x] Tất cả 21 tests pass

### Optimization
- [x] Tối ưu tốc độ tìm kiếm
- [x] Cache kết quả tìm kiếm (trong conversation history)
- [x] Giới hạn số lượng request (5 results per search)


## Chat AI Công Khai (Không Cần Đăng Nhập)

### Backend
- [x] Tạo public chat procedure (không yêu cầu authentication)
- [x] Xử lý session cho guest users
- [x] Lưu lịch sử chat tạm thời (session-based)

### Frontend
- [x] Loại bỏ yêu cầu đăng nhập từ AIChat.tsx
- [x] Cho phép chat ngay khi truy cập trang
- [x] Hiển thị thông báo "Chat công khai - không lưu lịch sử"

### Testing
- [x] Viết tests cho public chat procedure (5 tests)
- [x] Kiểm tra guest user session
- [x] Kiểm tra lưu trữ lịch sử tạm thời
- [x] Tất cả 26 tests pass

### Deployment
- [x] Kiểm tra hoạt động trên production
- [x] Tối ưu hiệu năng cho guest users


## Cleanup - Xoá Code Không Hoạt Động
- [x] Xoá server/procedures/knowledgeBase.ts
- [x] Xoá server/procedures/userProfile.ts
- [x] Xoá server/_core/extractPersonalInfo.ts
- [x] Xoá server/knowledgeBase.test.ts
- [x] Xoá server/userProfile.test.ts
- [x] Xoá import knowledgeBase và userProfile từ routers.ts
- [x] Xoá Knowledge Base tab từ AdminPanel
- [x] Xoá Knowledge Base và User Profile helpers từ db.ts
- [x] Xoá code extractPersonalInfo và searchKnowledgeBase từ generateAIResponse
- [x] Tất cả 26 tests PASS (100%)

## Notes
- Phong cách thiết kế: huyền học, trầm sâu, typography cổ điển
- Màu sắc: OKLCH color format (45 degree hue - màu nâu/vàng)
- Font: Playfair Display cho heading, Noto Serif SC cho body
- Vòng quay Canvas: animation mượt mà, không giật lag
- Chat AI: hỗ trợ lịch sử để AI học hỏi từ câu hỏi trước
- Auth: Sử dụng Manus OAuth tích hợp sẵn
- App hoạt động ổn định với 26/26 tests pass

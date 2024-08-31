// middleware.js หรือ _middleware.js (Next.js 12 หรือ 13)

// คุณต้องติดตั้ง next@13.0.0 หรือสูงกว่า
import { NextResponse } from 'next/server';

export function middleware(request) {
  const token = request.cookies.get('authToken');

  // ถ้าไม่มี token ให้เปลี่ยนเส้นทางไปยังหน้า login
  if (!token) {
    return NextResponse.redirect(new URL('/signin', request.url));
  }

  return NextResponse.next();
}

// ระบุเส้นทางที่ middleware ควรทำงาน
export const config = {
  matcher: ['/users/:path*'], // เฉพาะหน้า /users
};

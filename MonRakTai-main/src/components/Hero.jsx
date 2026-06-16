import React from 'react';
import { useRouter } from 'next/router'; // นำเข้า useRouter สำหรับทำลิงก์

export default function Hero() {
  const router = useRouter(); // เรียกใช้งาน router

  return (
    <div className="relative w-full h-[400px] bg-gray-900 flex items-center justify-center">
      {/* รูปภาพพื้นหลัง */}
      <img
        src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2000&auto=format&fit=crop"
        alt="ทะเลภาคใต้"
        className="absolute inset-0 w-full h-full object-cover opacity-60"
      />
      
      {/* ข้อความและปุ่ม */}
      <div className="relative z-10 text-center text-white px-4">
        {/* เปลี่ยนข้อความหัวเรื่องและคำอธิบายตรงนี้ */}
        <h1 className="text-4xl md:text-6xl font-bold mb-4">รวมฮิตที่เที่ยวเด็ดในภาคใต้</h1>
        <p className="text-lg md:text-xl mb-8 font-light">สัมผัสธรรมชาติ ทะเลสวย และเส้นทางสุดประทับใจ</p>
        
        {/* เปลี่ยนชื่อปุ่ม และใส่ฟังก์ชัน onClick ให้เด้งไปหน้า /popular */}
        <button 
          onClick={() => router.push('/popular')}
          className="bg-white text-black hover:bg-gray-100 font-semibold py-3 px-8 rounded-full transition shadow-lg cursor-pointer"
        >
          ที่เที่ยวแนะนำ
        </button>
      </div>
    </div>
  );
}
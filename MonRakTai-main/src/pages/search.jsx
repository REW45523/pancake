import React from 'react';
import { useRouter } from 'next/router';
import Navbar from '../components/Navbar';
import PlaceCard from '../components/PlaceCard';
import Footer from '../components/Footer';
import { places } from '../data/places';

export default function SearchResults() {
  const router = useRouter();
  // ดึงคำค้นหา 'q' มาจาก URL (เช่น ถ้าพิมพ์ "ทะเล" ตัวแปร query จะเท่ากับ "ทะเล")
  const { q } = router.query;
  const keyword = q ? q.toString().toLowerCase() : '';

  // ระบบกรองข้อมูล: เช็คว่าคำค้นหาไปตรงกับ "ชื่อ", "จังหวัด", "หมวดหมู่" หรือ "คำบรรยาย" หรือไม่
  const searchResults = places.filter((place) => {
    const matchName = place.name.toLowerCase().includes(keyword);
    const matchProvince = place.province.toLowerCase().includes(keyword);
    const matchCategory = place.category.toLowerCase().includes(keyword);
    const matchDescription = place.description && place.description.toLowerCase().includes(keyword);
    
    // ถ้าตรงกับส่วนใดส่วนหนึ่งให้ส่งคืนมาแสดงผล
    return matchName || matchProvince || matchCategory || matchDescription;
  });

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        {/* หัวข้อแสดงคำค้นหา */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            ผลการค้นหาสำหรับ: "{q}"
          </h1>
          <p className="text-gray-500">พบสถานที่ที่ตรงกับเงื่อนไขทั้งหมด {searchResults.length} แห่ง</p>
        </div>

        {/* แสดงผลการ์ดที่ค้นเจอ */}
        {searchResults.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {searchResults.map((place) => (
              <PlaceCard key={place.id} place={place} />
            ))}
          </div>
        ) : (
          /* กรณีค้นหาไม่เจออะไรเลย */
          <div className="flex flex-col items-center justify-center py-20 text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 mb-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
            <h2 className="text-xl font-semibold mb-2">ไม่พบสถานที่ที่คุณค้นหา</h2>
            <p>ลองใช้คำค้นหาอื่น เช่น ชื่อจังหวัด หรือประเภทสถานที่ดูนะ</p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
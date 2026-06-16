import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero'; 
import PlaceCard from '../components/PlaceCard';
import Footer from '../components/Footer';
import { places } from '../data/places';

export default function Home() {
  // 1. ตั้งค่าหมวดหมู่ที่ถูกเลือกตอนเปิดเว็บครั้งแรก
  const [activeCategory, setActiveCategory] = useState('ทะเลและหมู่เกาะ');

  // รายชื่อหมวดหมู่ (ต้องตรงกับในไฟล์ places.js)
  const categories = ['ทะเลและหมู่เกาะ', 'เส้นทางไบค์เกอร์', 'จุดถ่ายรูปสไตล์ Y2K'];

  // 2. กรองข้อมูล! ให้ดึงมาเฉพาะ place ที่มี category ตรงกับปุ่มที่กด
  const filteredPlaces = places.filter(place => place.category === activeCategory);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <Hero />

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 w-full">
        {/* หมวดหมู่ (Categories) */}
        <div className="flex gap-8 overflow-x-auto pb-4 mb-6 scrollbar-hide">
          {categories.map((category) => (
            <button 
              key={category} 
              onClick={() => setActiveCategory(category)}
              className={`flex flex-col items-center gap-2 min-w-max border-b-2 pb-2 transition cursor-pointer
                ${activeCategory === category 
                  ? 'text-black border-black font-bold' 
                  : 'text-gray-400 border-transparent hover:text-gray-600 hover:border-gray-300' 
                }
              `}
            >
              <span className="text-sm md:text-base">{category}</span>
            </button>
          ))}
        </div>

        {/* 3. นำข้อมูลที่ "กรองแล้ว (filteredPlaces)" มาแสดงผล */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredPlaces.map((place) => (
            <PlaceCard key={place.id} place={place} />
          ))}
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
import React, { useState } from 'react';
import { useRouter } from 'next/router';

export default function Navbar() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim() !== '') {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* จัดเรียงให้มีแค่ 2 ส่วน: โลโก้ (ซ้าย) และ ค้นหา (ขวา) */}
        <div className="flex flex-col md:flex-row justify-between items-center py-4 md:h-20 gap-4 md:gap-0">
          
          {/* ส่วนที่ 1: โลโก้ */}
          <div 
            onClick={() => router.push('/')}
            className="flex-shrink-0 text-red-500 font-bold text-2xl md:text-3xl cursor-pointer hover:scale-105 transition-transform"
          >
            MonRak Tai
          </div>

          {/* ส่วนที่ 2: ช่องค้นหา (ขยับมาอยู่ฝั่งขวาแทนที่เมนูผู้ใช้) */}
          <form 
            onSubmit={handleSearch} 
            className="flex items-center border rounded-full p-1 sm:p-2 shadow-sm hover:shadow-md transition w-full md:w-[400px] lg:w-[500px]"
          >
            <input 
              type="text" 
              placeholder="ค้นหาชื่อสถานที่ หรือ จังหวัด" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-grow px-4 py-2 text-sm text-gray-700 outline-none bg-transparent w-full"
            />
            <button 
              type="submit" 
              className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-full mx-1 transition cursor-pointer flex-shrink-0"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 md:w-5 md:h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
            </button>
          </form>

        </div>
      </div>
    </nav>
  );
}
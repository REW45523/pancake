import React from 'react';
import Navbar from '../components/Navbar';
import PlaceCard from '../components/PlaceCard';
import Footer from '../components/Footer';
import { places } from '../data/places';

export default function Popular() {
  // คัดเลือกสถานที่ยอดฮิต 6 แห่ง (ดึงข้อมูลที่คะแนน rating สูงสุด 6 อันดับแรก)
  const popularPlaces = [...places]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 6);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        {/* หัวข้อของหน้ายอดฮิต */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">🔥 สถานที่ท่องเที่ยวยอดฮิต</h1>
          <p className="text-gray-500">6 สถานที่ที่ได้รับความนิยมสูงสุดในภาคใต้ที่คุณไม่ควรพลาด</p>
        </div>

        {/* แสดงผลการ์ดที่เที่ยว 6 แห่ง */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {popularPlaces.map((place) => (
            <PlaceCard key={place.id} place={place} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
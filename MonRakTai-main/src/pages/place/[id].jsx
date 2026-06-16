import React from 'react';
import { useRouter } from 'next/router';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { places } from '../../data/places';

export default function PlaceDetail() {
  const router = useRouter();
  const { id } = router.query;

  // ค้นหาข้อมูลสถานที่จาก ID
  const place = places.find((p) => p.id === parseInt(id));

  // หน้าจอโหลดข้อมูลระหว่างรอ
  if (!place) return <div className="min-h-screen flex items-center justify-center font-bold text-xl">กำลังโหลดข้อมูล...</div>;

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-grow w-full pb-16">
        {/* รูปภาพแบนเนอร์กว้างเต็มจอ (Hero Image) */}
        <div className="w-full h-[300px] md:h-[500px]">
          <img 
            src={place.imageUrl} 
            alt={place.name} 
            className="w-full h-full object-cover" 
          />
        </div>

        {/* คอนเทนเนอร์สำหรับเนื้อหา (บีบความกว้างให้อ่านง่าย คล้ายอ่านบทความ) */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
          
          {/* ส่วนหัวเรื่องและวันที่/สถานที่ */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-5xl font-bold text-[#3E2723] mb-4">
              {place.name}
            </h1>
            
            <div className="flex items-center justify-center gap-6 text-gray-600 text-sm md:text-base">
              {/* ไอคอนปฏิทิน */}
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                </svg>
                {/* ดึงวันที่จากข้อมูล */}
                <span>{place.date}</span>
              </div>

              {/* ไอคอนหมุดสถานที่ */}
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
                <span>{place.province}</span>
              </div>
            </div>
          </div>

          {/* เส้นประคั่นด้านบน */}
          <hr className="border-t-2 border-dotted border-gray-300 mb-8" />

          {/* เนื้อหาบรรยายสถานที่ */}
          {/* คลาส whitespace-pre-line คือหัวใจสำคัญที่ทำให้ \n\n กลายเป็นการเว้นบรรทัดจริงๆ */}
          <div className="text-gray-800 leading-loose text-base md:text-lg whitespace-pre-line px-2 md:px-8">
            {place.description}
          </div>

          {/* เส้นประคั่นด้านล่าง */}
          <hr className="border-t-2 border-dotted border-gray-300 mt-12 mb-8" />
          
        </div>
      </main>

      <Footer />
    </div>
  );
}
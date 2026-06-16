import React from 'react';
import { useRouter } from 'next/router'; // เพิ่มเพื่อทำลิงก์กดไปหน้ารายละเอียด

export default function PlaceCard({ place }) {
  const router = useRouter();

  return (
    <div 
      onClick={() => router.push(`/place/${place.id}`)} 
      className="flex flex-col gap-2 cursor-pointer group"
    >
      {/* รูปภาพ */}
      <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-gray-200">
        <img 
          src={place.imageUrl} 
          alt={place.name} 
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
        />
        <button className="absolute top-3 right-3 text-white hover:text-red-500 z-10">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
          </svg>
        </button>
      </div>

      {/* ข้อมูล */}
      <div className="flex justify-between items-start mt-2">
        <div>
          <h3 className="font-semibold text-gray-900 text-lg">{place.name}</h3>
          <p className="text-gray-500 text-sm">จ.{place.province} · {place.category}</p>
          <div className="mt-1">
            <span className="font-semibold text-gray-900">{place.fee}</span>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-yellow-500">
            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
          </svg>
          <span className="text-sm font-medium">{place.rating}</span>
        </div>
      </div>
    </div>
  );
}
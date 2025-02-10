'use client'

import Image from 'next/image';

export default function Yay() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center gap-6">
      <h1 className="text-4xl font-bold px-4">
        yay!! i will pick you up friday night for our date on 
      </h1>
      <div className="text-6xl font-extrabold text-pink-500">
        february 14, 2025
      </div>
      <div className="text-5xl font-bold">
        9:00 pm
      </div>
      <div className="text-3xl font-bold">
        location: a secret 🤩
      </div>
      <Image
        src="/images/uscat.jpg"
        alt="Cute Cat"
        width={250}
        height={250}
        className="mt-4"
      />
    </div>
  );
}
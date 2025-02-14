'use client'

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Analytics } from '@vercel/analytics/react';

export default function Home() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/ask');
  };

  return (
    <> {/* Fragment ensures a valid JSX return */}
      <div className="flex flex-col items-center justify-center min-h-screen relative text-center">
        <Image
          src="/images/cutecat.gif"
          alt="Cute Cat"
          width={450}
          height={450}
          className="mb-4"
        />
        <h1 className="text-xl font-bold mb-4 px-4">
          annyeoongggg, i have something i wanna ask you...
        </h1>
        <p 
          className="text-blue-500 cursor-pointer mb-4"
          onClick={handleClick}
        >
          what is it?
        </p>
      </div>
      <Analytics /> {/* Keep Analytics outside of main content */}
    </>
  );
}

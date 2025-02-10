'use client'

import { useRouter } from 'next/navigation';

const GoBack = () => {
  const router = useRouter();

  return (
    <p 
      className="text-blue-500 cursor-pointer mb-4" 
      onClick={() => router.back()} // Go back to the previous page
    >
      Go Back
    </p>
  );
};

export default GoBack;
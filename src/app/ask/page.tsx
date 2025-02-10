'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from 'next/image'
import React from 'react';

const Home: React.FC = () => {
  const [yesSize, setYesSize] = useState(1);
  const [noCount, setNoCount] = useState(0);
  const [isNoButtonMoving, setIsNoButtonMoving] = useState(false);
  const [noPosition, setNoPosition] = useState({ top: 0, left: 0 });
  const router = useRouter();

  const messages = [
    "will you be my valentine?",
    "please, i really like you!",
    "are you sure? think again!",
    "come on, give me a chance!",
    "pretty please with sugar on top?",
    "i'll buy you all the chocolates!",
    "don't break my heart like this 💔",
    "i promise i'm worth it!",
    "you're making me sad... 🥺",
    "just one date, please?",
    "i'll be the best valentine ever!",
    "is that your final answer? 😢",
    "my heart can't take this rejection",
    "please reconsider! 🙏",
    "i'm not giving up on you!"
  ];

  const getCurrentMessage = () => {
    if (noCount >= messages.length) {
      return messages[messages.length - 1];
    }
    return messages[noCount];
  };

  const handleNoClick = () => {
    setNoCount(noCount + 1);
    setYesSize(prev => Math.min(prev + 0.1, 2));
    setIsNoButtonMoving(true);
    
    const randomTop = Math.random() * (window.innerHeight - 100);
    const randomLeft = Math.random() * (window.innerWidth - 100);
    setNoPosition({ top: randomTop, left: randomLeft });
  };

  const handleYesClick = () => {
    router.push('/yay');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="flex flex-col items-center gap-12">
        <div className="flex flex-col items-center">
          <Image
            src="/images/smilecat.jpg"
            alt="Smile Cat"
            width={300}
            height={300}
            className="mb-4"
          />
          <h1 className="text-2xl font-bold text-center transition-all duration-200 px-4">
            {getCurrentMessage()}
          </h1>
        </div>
        
        <div className="relative flex items-center gap-4">
          <button
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-green-500 text-white text-sm h-12 px-5 hover:bg-green-600"
            style={{ 
              transform: `scale(${yesSize})`, 
              transition: 'transform 0.2s ease',
              zIndex: 10
            }}
            onClick={handleYesClick}
          >
            yes
          </button>
          <button
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center bg-red-500 text-white text-sm h-12 px-5 hover:bg-red-600"
            style={isNoButtonMoving ? {
              position: 'fixed',
              top: `${noPosition.top}px`,
              left: `${noPosition.left}px`,
              zIndex: 10
            } : {}}
            onClick={handleNoClick}
          >
            no
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
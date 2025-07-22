import React from 'react';

interface ScrapbookTextProps {
  text: string;
}

const ScrapbookText: React.FC<ScrapbookTextProps> = ({ text }) => {
  return (
    <div className="flex justify-center items-center flex-wrap">
      {text.split('').map((char, index) => (
        <span
          key={index}
          className="font-serif text-5xl md:text-7xl font-bold text-gray-800 bg-white p-2 m-1 transform rotate-[-2deg] shadow-md"
          style={{
            animation: `jiggle 0.5s ease-in-out ${index * 0.1}s`,
            transform: `rotate(${Math.random() * 10 - 5}deg)`,
          }}
        >
          {char}
        </span>
      ))}
    </div>
  );
};

export default ScrapbookText;

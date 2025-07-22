import { Star } from 'lucide-react';
import React from 'react';

const StarAnimation = () => {
  return (
    <>
      {Array.from({ length: 30 }).map((_, i) => {
        const style: React.CSSProperties = {
          position: 'absolute',
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          animation: `fadeInOut ${Math.random() * 4 + 2}s ease-in-out infinite`,
          animationDelay: `${Math.random() * 2}s`,
        };
        return <Star key={i} className="text-white" size={24} style={style} />;
      })}
    </>
  );
};

export default StarAnimation;

import React from 'react';

const BalloonAnimation = () => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
      {Array.from({ length: 15 }).map((_, i) => {
        const colorClass = ['bg-celebration-pink', 'bg-celebration-yellow', 'bg-celebration-green', 'bg-celebration-purple'][i % 4];
        const size = Math.random() * 50 + 20;
        const animationDuration = Math.random() * 10 + 8;
        const animationDelay = Math.random() * 8;
        const left = Math.random() * 100;

        return (
          <div
            key={i}
            className={`absolute rounded-full ${colorClass} opacity-70`}
            style={{
              width: `${size}px`,
              height: `${size * 1.2}px`,
              left: `${left}%`,
              animation: `floatUp ${animationDuration}s ease-in-out infinite`,
              animationDelay: `${animationDelay}s`,
            }}
          />
        );
      })}
    </div>
  );
};

export default BalloonAnimation;

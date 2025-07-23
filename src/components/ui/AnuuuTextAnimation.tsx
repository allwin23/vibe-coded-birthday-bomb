import React from 'react';

const AnuuuTextAnimation = () => {
  const count = 7; // fewer to make it less frequent
  const usedPositions: { top: number; left: number }[] = [];

  const getNonOverlappingPosition = () => {
    let top = 0, left = 0, valid = false;
    const minDistance = 12;

    while (!valid) {
      top = Math.random() * 85;
      left = Math.random() * 85;

      valid = !usedPositions.some(pos => (
        Math.abs(pos.top - top) < minDistance &&
        Math.abs(pos.left - left) < minDistance
      ));
    }

    usedPositions.push({ top, left });
    return { top, left };
  };

  return (
    <>
      {Array.from({ length: count }).map((_, i) => {
        const { top, left } = getNonOverlappingPosition();
        const size = Math.random() * 6 + 22;
        const delay = Math.random() * 15 + 3; // longer wait
        const duration = Math.random() * 2 + 7; // slower float
        const rotate = Math.random() * 4 - 2;

        const style: React.CSSProperties = {
          position: 'absolute',
          top: `${top}%`,
          left: `${left}%`,
          fontSize: `${size}px`,
          fontWeight: 600,
          color: '#fff',
          textShadow: `
            0 0 6px hsl(280, 100%, 80%),
            0 0 12px hsl(220, 100%, 75%),
            0 0 18px hsl(320, 100%, 80%)
          `,
          animation: `anuuuFloatFade ${duration}s ease-in-out infinite`,
          animationDelay: `${delay}s`,
          transform: `rotate(${rotate}deg)`,
          pointerEvents: 'none',
          opacity: 0,
        };

        return (
          <div key={i} style={style}>
            Anuu😊
          </div>
        );
      })}
    </>
  );
};

export default AnuuuTextAnimation;

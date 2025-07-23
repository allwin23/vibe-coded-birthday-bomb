import React from 'react';

const ConfettiRain = () => {
  const count = 40;
  const colors = ['#FF69B4', '#FFC700', '#00C2FF', '#FF6F61', '#B266FF'];

  const confetti = Array.from({ length: count }).map((_, i) => {
    const left = Math.random() * 100;
    const delay = Math.random() * 5;
    const size = Math.random() * 8 + 6;
    const color = colors[Math.floor(Math.random() * colors.length)];

    const style: React.CSSProperties = {
      left: `${left}%`,
      top: '0%',
      width: `${size}px`,
      height: `${size}px`,
      backgroundColor: color,
      animationDelay: `${delay}s`,
      zIndex: 0,
    };

    return <div key={i} className="confetti-piece" style={style}></div>;
  });

  return (
    <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
      {confetti}
    </div>
  );
};

export default ConfettiRain;

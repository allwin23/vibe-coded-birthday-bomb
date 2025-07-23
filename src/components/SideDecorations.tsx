import React from 'react';

const SideDecorations = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="animate-float-lr">🎈</div>
<div className="animate-float-up">🐱</div>
<div className="animate-float-cross">💫</div>
<div className="animate-float-rl">🍰</div>
       
    
        {/* Background Shapes */}

      {/* Additional decorative elements */}
      <div
        className="absolute top-1/4 -right-1/3 w-1/2 h-1/2 rounded-2xl bg-gradient-to-l from-indigo-500/30 to-transparent blur-3xl opacity-40 animate-pulse"
        style={{ animationDelay: '1s' }}
      ></div>
      <div
        className="absolute bottom-1/4 -left-1/3 w-1/2 h-1/2 rounded-2xl bg-gradient-to-r from-purple-500/30 to-transparent blur-3xl opacity-40 animate-pulse"
        style={{ animationDelay: '3s' }}
      ></div>

      {/* Floating Shapes */}
      <div className="absolute top-1/2 left-1/4 w-24 h-24 border-2 border-cyan-300/50 rounded-full animate-spin-slow opacity-30"></div>
      <div
        className="absolute top-1/3 right-1/4 w-32 h-32 border-t-2 border-blue-400/50 rounded-full animate-spin-slow opacity-30"
        style={{ animationDelay: '2s' }}
      ></div>

      {/* Twinkling Stars */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full opacity-20 animate-ping"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        ></div>
      ))}

      {/* Floating Blobs */}
      <div className="absolute top-[10%] left-[15%] w-40 h-40 bg-pink-400/20 blur-2xl rounded-full animate-bounce-slow"></div>
      <div className="absolute bottom-[20%] right-[10%] w-32 h-32 bg-violet-500/20 blur-2xl rounded-full animate-bounce-slower"></div>

      {/* Subtle moving dots */}
      <div className="absolute top-[50%] left-[5%] w-3 h-3 bg-cyan-200/60 rounded-full animate-float"></div>
      <div className="absolute top-[20%] right-[10%] w-2 h-2 bg-blue-300/70 rounded-full animate-float delay-1000"></div>
      {/* 🎈 Left to Right Floaters */}
{['🎈', '🎂', '🎊'].map((emoji, i) => (
  <div
    key={`lr-${i}`}
    className="absolute text-3xl animate-float-lr"
    style={{
      top: `${10 + i * 25}%`,
      left: `-${10 + i * 5}%`,
      animationDelay: `${i * 2}s`,
    }}
  >
    {emoji}
  </div>
))}

{/* 🎉 Right to Left Floaters */}
{['🎁', '✨', '🥳'].map((emoji, i) => (
  <div
    key={`rl-${i}`}
    className="absolute text-3xl animate-float-rl"
    style={{
      top: `${20 + i * 20}%`,
      right: `-${10 + i * 5}%`,
      animationDelay: `${i * 2.5}s`,
    }}
  >
    {emoji}
  </div>
))}

{/* 💫 Diagonal Cross Floaters */}
{['🍰', '💖', '💫'].map((emoji, i) => (
  <div
    key={`cross-${i}`}
    className="absolute text-3xl animate-float-cross"
    style={{
      top: `${5 + i * 30}%`,
      left: `${-10 + i * 15}%`,
      animationDelay: `${i * 3}s`,
    }}
  >
    {emoji}
  </div>
))}

{/* 🐱 Cats Floating Up */}
{[...Array(3)].map((_, i) => (
  <div
    key={`cat-${i}`}
    className="absolute text-4xl animate-float-up"
    style={{
      left: `${10 + i * 30}%`,
      bottom: `-${i * 10}%`,
      animationDelay: `${i * 1.5}s`,
    }}
  >
    🐱
  </div>
))}
{/* ✨ Twinkling Stars */}
{[...Array(30)].map((_, i) => (
  <div
    key={`star-${i}`}
    className="absolute w-1 h-1 bg-white rounded-full opacity-20 animate-ping"
    style={{
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 5}s`,
    }}
  ></div>
))}

{/* 🎆 Confetti Rain */}
{[...Array(20)].map((_, i) => (
  <div
    key={`confetti-${i}`}
    className="absolute w-2 h-2 rounded-sm"
    style={{
      top: `${-Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      backgroundColor: `hsl(${Math.random() * 360}, 100%, 70%)`,
      animation: 'confetti-fall 6s linear infinite',
      animationDelay: `${Math.random() * 4}s`,
      opacity: 0.8,
    }}
  />
))}

{/* 🎉 Party Pop Explosions */}
{[...Array(3)].map((_, i) => (
  <div
    key={`burst-${i}`}
    className="absolute text-2xl animate-burst"
    style={{
      top: `${Math.random() * 90 + 5}%`,
      left: `${Math.random() * 90 + 5}%`,
      animationDelay: `${i * 4}s`,
    }}
  >
    🎉
  </div>
))}     
{/* 🎂 Center Cake Drop Animation */}
<div
  className="absolute text-6xl animate-cake-drop-glow"
  style={{
    top: '-10%',
    left: '50%',
    transform: 'translateX(-50%)',
    animationDelay: '2s',
  }}
>
  🎂
</div>



    </div>
  );
};

export default SideDecorations;

import { useEffect, useState } from 'react';

interface FloatingEmoji {
  id: string;
  emoji: string;
  left: number;
  delay: number;
  duration: number;
}

const FloatingEmojis = () => {
  const [emojis, setEmojis] = useState<FloatingEmoji[]>([]);
  
  const emojiList = ['💖', '✨', '🌟', '🥳', '🎉', '🎁', '🎂', '💙', '🌈', '🎈', '🦋', '🌸'];

  useEffect(() => {
    const createEmoji = () => {
      const newEmoji: FloatingEmoji = {
        id: Date.now() + Math.random().toString(),
        emoji: emojiList[Math.floor(Math.random() * emojiList.length)],
        left: Math.random() * 95,
        delay: Math.random() * 2,
        duration: 6 + Math.random() * 4,
      };
      
      setEmojis(prev => [...prev, newEmoji]);
      
      // Remove emoji after animation
      setTimeout(() => {
        setEmojis(prev => prev.filter(e => e.id !== newEmoji.id));
      }, (newEmoji.duration + newEmoji.delay) * 1000);
    };

    // Create initial emojis
    const initialEmojis = Array.from({ length: 5 }, () => {
      setTimeout(createEmoji, Math.random() * 3000);
    });

    // Continue creating emojis
    const interval = setInterval(createEmoji, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="floating-emojis">
      {emojis.map(emoji => (
        <div
          key={emoji.id}
          className="floating-emoji"
          style={{
            left: `${emoji.left}%`,
            animationDelay: `${emoji.delay}s`,
            animationDuration: `${emoji.duration}s`,
          }}
        >
          {emoji.emoji}
        </div>
      ))}
    </div>
  );
};

export default FloatingEmojis;
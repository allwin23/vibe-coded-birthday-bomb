import { Heart, Sparkles, Music, Star, Gift } from 'lucide-react';

const elements = [
  { Icon: Heart, color: 'text-celebration-pink' },
  { Icon: Sparkles, color: 'text-celebration-yellow' },
  { Icon: Music, color: 'text-celebration-purple' },
  { Icon: Star, color: 'text-celebration-green' },
  { Icon: Gift, color: 'text-white' },
];

const DecorativeElements = () => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
      {Array.from({ length: 20 }).map((_, i) => {
        const Element = elements[i % elements.length];
        const size = Math.random() * 24 + 12;
        const animationDuration = Math.random() * 5 + 5;
        const animationDelay = Math.random() * 5;
        const top = Math.random() * 100;
        const left = Math.random() * 100;

        return (
          <Element.Icon
            key={i}
            className={`${Element.color} absolute animate-pulse`}
            style={{
              top: `${top}%`,
              left: `${left}%`,
              width: `${size}px`,
              height: `${size}px`,
              animationDuration: `${animationDuration}s`,
              animationDelay: `${animationDelay}s`,
            }}
          />
        );
      })}
    </div>
  );
};

export default DecorativeElements;

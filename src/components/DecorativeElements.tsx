import { Heart, Sparkles, Music, Star, Gift } from 'lucide-react';

const iconElements = [
  { Icon: Heart, color: 'text-celebration-pink' },
  { Icon: Sparkles, color: 'text-celebration-yellow' },
  { Icon: Music, color: 'text-celebration-purple' },
  { Icon: Star, color: 'text-celebration-green' },
  { Icon: Gift, color: 'text-white' },
];

const DecorativeElements = () => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
      {/* Existing Icon Elements */}
      {Array.from({ length: 15 }).map((_, i) => {
        const Element = iconElements[i % iconElements.length];
        const size = Math.random() * 20 + 10;
        const animationDuration = Math.random() * 8 + 7;
        const animationDelay = Math.random() * 10;
        const top = Math.random() * 100;
        const left = Math.random() * 100;

        return (
          <Element.Icon
            key={`icon-${i}`}
            className={`${Element.color} absolute animate-pulse opacity-70`}
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

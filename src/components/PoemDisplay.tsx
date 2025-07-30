import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Heart, Sparkles } from 'lucide-react';

const PoemDisplay = () => {
  // Placeholder poems - user can customize these
 const poemLines = [
  "To the one who feels like a quiet spell in a noisy world — Anurati, you’re warmth in motion.",
  "You carry yourself like a cat basking in sunlight — calm, gentle, and full of quiet strength.",
  "Your presence brings ease, your laughter softens even the toughest days,",
  "Your kindness moves through people like a soft breeze they didn’t know they needed.",
  "You don’t just brighten rooms — you hold space for others without asking for anything in return.",
  "You make ordinary moments feel like memories, just by being in them.",
  "Your name, Anurati, already means affection — but you’ve redefined it.",
  "You’ve made care look effortless, love feel safe, and friendship feel like magic.",
  "You are the golden thread in this messy, beautiful life — connecting, healing, and making people feel seen.",
  "So today, on your birthday, I hope the world gives back even a piece of the light you pour into it every day.",
  "Because having you in our lives isn’t just a blessing — it’s something we should never take for granted.",
  "Happy Birthday to the most soft-hearted, strong-souled person I know. 🎂✨"
];


  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [displayedLines, setDisplayedLines] = useState<string[]>([poemLines[0]]);

  const revealNextLine = () => {
    const nextIndex = (currentLineIndex + 1) % poemLines.length;
    
    if (nextIndex === 0) {
      // Reset to beginning
      setDisplayedLines([poemLines[0]]);
      setCurrentLineIndex(0);
    } else {
      setDisplayedLines(prev => [...prev, poemLines[nextIndex]]);
      setCurrentLineIndex(nextIndex);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="text-center mb-16 relative">
        <h2 
          className="text-5xl md:text-6xl font-black text-white bg-gradient-to-r from-cyan-400 via-blue-500 to-pink-500 bg-clip-text text-transparent mb-4 drop-shadow-xl animate-text-glow"
          style={{ textShadow: '0 4px 20px #2563eb, 0 2px 10px #ec4899' }}
        >
          Words from the Heart
        </h2>
        <div className="w-32 h-1 bg-primary/20 mx-auto mt-6 rounded-full"></div>
      </div>
      
      <Card className="p-8 shadow-magical bg-gradient-to-br from-card to-secondary/20 border-primary/20">
        <div className="space-y-4 min-h-[200px]">
          {displayedLines.map((line, index) => (
            <div
              key={index}
              className="celebration-bounce text-lg md:text-xl text-center font-medium text-foreground leading-relaxed"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {line}
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-8">
          <Button
            onClick={revealNextLine}
            variant="birthday"
            size="lg"
            className="group"
          >
            <Sparkles className="w-5 h-5 mr-2 group-hover:animate-spin" />
            Read Another Verse ✨
            <Heart className="w-5 h-5 ml-2 text-celebration-pink" />
          </Button>
        </div>
        
        <div className="text-center mt-6 text-sm text-muted-foreground">
          <p>Many more Happy returns of the day 💝</p>
        </div>
      </Card>
    </div>
  );
};

export default PoemDisplay;

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Heart, Sparkles } from 'lucide-react';

const PoemDisplay = () => {
  // Placeholder poems - user can customize these
  const poemLines = [
    "To the brightest star in my constellation of friends,",
    "Your laughter echoes through every memory we've made,",
    "Like sunshine breaking through the cloudiest days,",
    "You bring magic to every moment we share.",
    "Your kindness knows no bounds, your spirit so free,",
    "In this beautiful tapestry of life, you're golden thread,",
    "Happy Birthday to the most amazing soul I know,",
    "May your day be filled with all the joy you bring to others! 🎂✨"
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
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold gradient-celebration bg-clip-text text-transparent mb-4">
          💝 Words from the Heart 💝
        </h2>
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
          <p>📝 Customize these poem lines in the code to make them personal!</p>
        </div>
      </Card>
    </div>
  );
};

export default PoemDisplay;
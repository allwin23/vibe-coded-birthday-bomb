import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { 
  Search, 
  MapPin, 
  Gift, 
  Camera, 
  Music, 
  Heart, 
  CheckCircle, 
  ArrowRight,
  Trophy,
  Sparkles 
} from 'lucide-react';

const MemoryScavengerHunt = () => {
  const [currentClueIndex, setCurrentClueIndex] = useState(0);
  const [foundClues, setFoundClues] = useState<number[]>([]);
  const [gameComplete, setGameComplete] = useState(false);

  const clues = [
    {
      id: 1,
      riddle: "Where caffeine flows and laughter grows, your favorite morning spot that everyone knows...",
      hint: "☕ Think about our coffee dates!",
      location: "Your Favorite Cafe",
      reward: "A photo from our first coffee date together!",
      icon: <Music className="w-6 h-6" />
    },
    {
      id: 2,
      riddle: "In pixels and frames, where memories are caught, the place where our silliest photos were brought...",
      hint: "📸 Remember that photo booth adventure?",
      location: "Photo Booth Memories",
      reward: "A video montage of our funniest moments!",
      icon: <Camera className="w-6 h-6" />
    },
    {
      id: 3,
      riddle: "Where melodies dance and our voices unite, the song that makes everything feel just right...",
      hint: "🎵 Our friendship anthem!",
      location: "Our Special Song",
      reward: "A playlist of songs that define our friendship!",
      icon: <Heart className="w-6 h-6" />
    },
    {
      id: 4,
      riddle: "The final treasure awaits where celebrations begin, look for the place where birthday magic comes from within...",
      hint: "🎂 Where the birthday magic happens!",
      location: "Birthday Surprise Location",
      reward: "Your ultimate birthday surprise!",
      icon: <Gift className="w-6 h-6" />
    }
  ];

  const solveClue = (clueIndex: number) => {
    if (!foundClues.includes(clueIndex)) {
      setFoundClues([...foundClues, clueIndex]);
      if (clueIndex === clues.length - 1) {
        setGameComplete(true);
      } else {
        setCurrentClueIndex(clueIndex + 1);
      }
    }
  };

  const resetHunt = () => {
    setCurrentClueIndex(0);
    setFoundClues([]);
    setGameComplete(false);
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold gradient-joy bg-clip-text text-transparent mb-4">
          🕵️‍♀️ Memory Lane Scavenger Hunt 🕵️‍♀️
        </h2>
        <p className="text-xl text-muted-foreground">
          Follow the clues through our shared adventures!
        </p>
      </div>

      {!gameComplete ? (
        <div className="space-y-8">
          {/* Progress Bar */}
          <Card className="p-6 shadow-celebration">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-primary">Hunt Progress</h3>
              <span className="text-sm text-muted-foreground">
                {foundClues.length} / {clues.length} clues found
              </span>
            </div>
            <div className="flex space-x-2">
              {clues.map((_, index) => (
                <div
                  key={index}
                  className={`flex-1 h-3 rounded-full transition-all duration-300 ${
                    foundClues.includes(index)
                      ? 'bg-primary shadow-magical'
                      : index === currentClueIndex
                      ? 'bg-primary/50 animate-pulse'
                      : 'bg-muted'
                  }`}
                />
              ))}
            </div>
          </Card>

          {/* Current Clue */}
          <Card className="p-8 shadow-magical bg-gradient-to-br from-card to-secondary/20 border-primary/20">
            <div className="text-center space-y-6">
              <div className="flex justify-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center text-primary">
                  {clues[currentClueIndex]?.icon}
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-primary">
                Clue #{currentClueIndex + 1}
              </h3>
              
              <div className="bg-muted/50 p-6 rounded-lg">
                <Search className="w-8 h-8 mx-auto mb-4 text-primary" />
                <p className="text-lg font-medium italic text-center">
                  "{clues[currentClueIndex]?.riddle}"
                </p>
              </div>
              
              <div className="text-sm text-muted-foreground">
                💡 {clues[currentClueIndex]?.hint}
              </div>
              
              <Button
                onClick={() => solveClue(currentClueIndex)}
                variant="birthday"
                size="lg"
                className="group"
              >
                <MapPin className="w-5 h-5 mr-2" />
                I Found It!
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </Card>

          {/* Found Clues */}
          {foundClues.length > 0 && (
            <div>
              <h3 className="text-xl font-semibold text-primary mb-4 text-center">
                🏆 Discovered Treasures
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {foundClues.map((clueIndex) => (
                  <Card key={clueIndex} className="p-4 bg-celebration-green/20 border-celebration-green/50">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-6 h-6 text-celebration-green" />
                      <div>
                        <h4 className="font-semibold text-sm">
                          {clues[clueIndex].location}
                        </h4>
                        <p className="text-xs text-muted-foreground">
                          {clues[clueIndex].reward}
                        </p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>
      ) : (
        /* Game Complete */
        <Card className="p-8 shadow-magical bg-gradient-to-br from-celebration-yellow/20 to-celebration-pink/20 border-primary/20 text-center">
          <div className="space-y-6">
            <Trophy className="w-16 h-16 mx-auto text-celebration-yellow" />
            <h3 className="text-3xl font-bold gradient-celebration bg-clip-text text-transparent">
              🎉 Hunt Complete! 🎉
            </h3>
            <p className="text-xl text-foreground">
              You've found all the memory treasures!
            </p>
            <div className="bg-primary/10 p-6 rounded-lg">
              <Gift className="w-12 h-12 mx-auto mb-4 text-primary" />
              <p className="text-lg font-medium text-primary">
                🎁 Congratulations! Your ultimate birthday surprise awaits!
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                [Add your final birthday surprise details here!]
              </p>
            </div>
            <Button
              onClick={resetHunt}
              variant="celebration"
              size="lg"
              className="group"
            >
              <Sparkles className="w-5 h-5 mr-2" />
              Play Again!
            </Button>
          </div>
        </Card>
      )}
      
      <div className="text-center mt-8 text-sm text-muted-foreground">
        <p>🎮 Customize the clues and rewards to match your unique friendship memories!</p>
      </div>
    </div>
  );
};

export default MemoryScavengerHunt;
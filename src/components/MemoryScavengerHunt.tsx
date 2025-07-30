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
  riddle: "Where love wore a nurse's disguise, and every glance felt like a sweet surprise...",
  hint: "🎭 Think of your favorite movie where mischief meets heart!",
  location: "The place Remo first made you fun",
  reward: "Yes Its a your fav movie   Remo 💙",
  icon: <Music className="w-6 h-6" />
}
,
    {
  id: 3,
  riddle: "In a song where raindrops tap like tiny drumbeats, and hearts sway like leaves in love’s breeze — you always hum along, eyes closed, as if the lyrics know your soul...",
  hint: "☔ Sound and the rain knows its rhythm.",
  location: "That one song where you always hum along",
  reward: "One of you fav raling oligal 🎥✨",
  //icon: <Umbrella className="w-6 h-6" />
}
,
    {
  id: 4,
  riddle: "A table for two, beneath soft yellow lights, where stories spilled over and eyes held quiet goodbyes. A place painted in French hues, and memories we chose not to lose... One guy came late for his ddate i made fun of him",
  hint: "💬 Think: The café from our *last* pre-birthday outing. The one with laughter, pasta, and that perfect croissant.",
  location: "Café de Paris",
  reward: "A snapshot from that golden evening — just before your day began. 🎂📷",
  //icon: //<Coffee className="w-6 h-6" />
}
,
   {
  id: 4,
  riddle: "Not a place or a thing, but someone you know — who’s seen every version of you and never let go. He’s the constant in chaos, the calm in the storm, the hug in a sentence, the laugh that feels warm...",
  hint: "🎂 Look for the one who’s been through it all with you. He’s not behind the curtain ",
  location: "Allwin – The One Who’s Always There",
  reward: "Your favorite person, your best friend — Allwin, waiting with a smile and a hug only he can give. 💙",
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
      <div className="text-center mb-16 relative">
        <h2 
          className="text-5xl md:text-6xl font-black text-white bg-gradient-to-r from-cyan-400 via-blue-500 to-pink-500 bg-clip-text text-transparent mb-4 drop-shadow-xl animate-text-glow"
          style={{ textShadow: '0 4px 20px #2563eb, 0 2px 10px #ec4899' }}
        >
          Memory Lane Scavenger Hunt
        </h2>
        <p 
          className="text-xl font-medium text-white bg-gradient-to-r from-cyan-400 via-blue-500 to-pink-500 bg-clip-text text-transparent drop-shadow-lg animate-text-glow"
          style={{ textShadow: '0 2px 10px #2563eb, 0 1px 5px #ec4899' }}
        >
          Follow the clues through our shared adventures!
        </p>
        <div className="w-32 h-1 bg-primary/20 mx-auto mt-6 rounded-full"></div>
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
                🎁 Congratulations! Many More Happy returns of the day 💝
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Your gift is just sitting right to you  
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
        <p>🎮 Positvity is the key to all ☺️☺️!</p>
      </div>
    </div>
  );
};

export default MemoryScavengerHunt;

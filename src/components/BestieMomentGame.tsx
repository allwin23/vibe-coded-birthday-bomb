import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Eye, Trophy, Heart, Sparkles } from 'lucide-react';
import memory1 from '@/assets/6.jpg';
import memory2 from '@/assets/7.jpg';
import memory3 from '@/assets/WhatsApp Image 2025-07-31 at 02.54.30_093ffd51.jpg';
import memory4 from '@/assets/10.jpg';

interface GameMoment {
  id: number;
  image: string;
  hint: string;
  answer: string;
  poemLine: string;
  revealed: boolean;
}

const BestieMomentGame = () => {
  const [currentMoment, setCurrentMoment] = useState(0);
  const [guess, setGuess] = useState('');
  const [score, setScore] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const [gameState, setGameState] = useState<'playing' | 'revealed' | 'completed'>('playing');

  const moments: GameMoment[] = [
    {
  id: 1,
  image: memory1,
  hint: "'Jo'kes cant be done lightly🌚🌚",
  answer: "Marriage day",
  poemLine: "The day shimmered with joy and nerves alike,\nAs you met the fam and instantly felt like light.",
  revealed: false
}
,
   {
  id: 2,
  image: memory2,
  hint: "🚗 Just an hour, but worth every mile — the kind of birthday that ends too soon.",
  answer: "Last Birthday ",
  poemLine: "Even for a fleeting hour, you made the day glow,\nA quiet reminder of how far our friendship will go.",
  revealed: false
},
    {
  id: 3,
  image: memory3,
  hint: "🌸 The first ethnic day — a ride just for one photo, but worth a thousand memories.",
  answer: "ethnic day",
  poemLine: "For just one photo I crossed the day,\nBut your smile made the trip more than okay.",
  revealed: false
}
,
    {
  id: 4,
  image: memory4,
  hint: "🎲 Where strategy met laughter — the boardroom afternoon we didn't want to end.",
  answer: "Board room First Day 😉",
  poemLine: "In dice and laughs our time flew fast,\nAn afternoon I wished would forever last.",
  revealed: false
}

  ];

  const [gameMoments, setGameMoments] = useState(moments);

  const handleGuess = () => {
    const current = gameMoments[currentMoment];
    const isCorrect = guess.toLowerCase().includes(current.answer.toLowerCase()) ||
                     current.answer.toLowerCase().includes(guess.toLowerCase());

    if (isCorrect) {
      setScore(score + 10);
    }

    setGameState('revealed');

    const updatedMoments = [...gameMoments];
    updatedMoments[currentMoment].revealed = true;
    setGameMoments(updatedMoments);
  };

  const nextMoment = () => {
    if (currentMoment < gameMoments.length - 1) {
      setCurrentMoment(currentMoment + 1);
      setGuess('');
      setShowHint(false);
      setGameState('playing');
    } else {
      setGameState('completed');
    }
  };

  const resetGame = () => {
    setCurrentMoment(0);
    setGuess('');
    setScore(0);
    setShowHint(false);
    setGameState('playing');
    setGameMoments(moments.map(m => ({ ...m, revealed: false })));
  };

  if (gameState === 'completed') {
    return (
      <div className="max-w-4xl mx-auto px-6">
        <Card className="text-center shadow-celebration">
          <CardHeader>
            <CardTitle className="text-3xl font-bold gradient-celebration bg-clip-text text-transparent flex items-center justify-center gap-2">
              <Trophy className="w-8 h-8 text-celebration-yellow" />
              Game Complete!
              <Trophy className="w-8 h-8 text-celebration-yellow" />
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-6xl font-bold text-primary">
              Final Score: {score}
            </div>
            <p className="text-xl text-muted-foreground">
              Amazing! You've unlocked all our precious memories! 🎉
            </p>
            <div className="text-lg italic text-celebration-purple font-medium">
              "Every picture tells our story, every moment holds our glory"
            </div>
            <Button onClick={resetGame} variant="birthday" size="lg" className="magical-glow">
              <Sparkles className="w-5 h-5 mr-2" />
              Play Again
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const current = gameMoments[currentMoment];

  return (
    <div className="max-w-4xl mx-auto px-6">
      <div className="text-center mb-16 relative">
        <h2 
          className="text-5xl md:text-6xl font-black text-white bg-gradient-to-r from-cyan-400 via-blue-500 to-pink-500 bg-clip-text text-transparent mb-4 drop-shadow-xl animate-text-glow"
          style={{ textShadow: '0 4px 20px #2563eb, 0 2px 10px #ec4899' }}
        >
          Guess the Bestie Moment!
        </h2>
        <p 
          className="text-xl font-medium text-white bg-gradient-to-r from-cyan-400 via-blue-500 to-pink-500 bg-clip-text text-transparent drop-shadow-lg animate-text-glow"
          style={{ textShadow: '0 2px 10px #2563eb, 0 1px 5px #ec4899' }}
        >
          Can you guess what memory this cropped image is from?
        </p>
        <div className="w-32 h-1 bg-primary/20 mx-auto mt-6 rounded-full"></div>
      </div>
      <div className="flex justify-center items-center gap-4 mb-8">
        <Badge variant="secondary" className="text-lg px-4 py-2">
          Round {currentMoment + 1} of {gameMoments.length}
        </Badge>
        <Badge variant="outline" className="text-lg px-4 py-2">
          Score: {score}
        </Badge>
      </div>

      <Card className="shadow-magical">
        <CardContent className="p-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Image Section */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-lg shadow-celebration">
                <img
  src={current.image}
  alt="Mystery memory"
  className={`w-full max-w-md mx-auto rounded-xl shadow-md mb-8 h-64 object-cover object-[50%_10%] transition-all duration-500 ${
    gameState === 'playing' 
      ? 'filter blur-sm scale-150 opacity-70' 
      : 'filter blur-0 scale-100 opacity-100'
  }`}
/>

                {gameState === 'playing' && (
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-celebration-pink/20 flex items-center justify-center">
                    <Eye className="w-12 h-12 text-white animate-pulse" />
                  </div>
                )}
              </div>
              
              {gameState === 'revealed' && (
                <div className="mt-4 p-4 bg-gradient-to-r from-accent/10 to-celebration-purple/10 rounded-lg celebration-bounce">
                  <p className="text-center italic text-celebration-purple font-medium text-lg">
                    "{current.poemLine}"
                  </p>
                </div>
              )}
            </div>

            {/* Game Section */}
            <div className="space-y-6">
              {gameState === 'playing' ? (
                <>
                  <div className="space-y-4">
                    <Input
                      placeholder="What moment is this from?"
                      value={guess}
                      onChange={(e) => setGuess(e.target.value)}
                      className="text-lg p-4"
                      onKeyPress={(e) => e.key === 'Enter' && guess && handleGuess()}
                    />
                    
                    <div className="flex gap-3">
                      <Button
                        onClick={handleGuess}
                        disabled={!guess}
                        variant="birthday"
                        size="lg"
                        className="flex-1"
                      >
                        <Heart className="w-5 h-5 mr-2" />
                        Reveal Memory
                      </Button>
                      
                      <Button
                        onClick={() => setShowHint(!showHint)}
                        variant="outline"
                        size="lg"
                      >
                        💡 Hint
                      </Button>
                    </div>
                  </div>

                  {showHint && (
                    <div className="p-4 bg-celebration-yellow/20 border border-celebration-yellow/30 rounded-lg">
                      <p className="text-center font-medium">
                        {current.hint}
                      </p>
                    </div>
                  )}
                </>
              ) : (
                <div className="text-center space-y-6">
                  <div className="text-2xl font-bold text-primary celebration-bounce">
                    Memory Revealed! ✨
                  </div>
                  
                  <div className="space-y-2">
                    <p className="text-lg">
                      <span className="font-semibold">The answer was:</span> {current.answer}
                    </p>
                    {guess && (
                      <p className="text-muted-foreground">
                        Your guess: "{guess}"
                      </p>
                    )}
                  </div>

                  <Button
                    onClick={nextMoment}
                    variant="birthday"
                    size="lg"
                    className="magical-glow"
                  >
                    {currentMoment < gameMoments.length - 1 ? (
                      <>
                        <Sparkles className="w-5 h-5 mr-2" />
                        Next Memory
                      </>
                    ) : (
                      <>
                        <Trophy className="w-5 h-5 mr-2" />
                        See Final Score
                      </>
                    )}
                  </Button>
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BestieMomentGame;

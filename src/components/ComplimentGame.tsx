import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Gift, Heart, Sparkles, Star } from 'lucide-react';

const ComplimentGame = () => {
  // Placeholder compliments - user can customize these
  const compliments = [
    "Your laugh is contagious and brightens every room! 😊",
    "You're incredibly kind and always there for your friends! 💝",
    "Your creativity and imagination inspire everyone around you! ✨",
    "You have the most beautiful soul and genuine heart! 💙",
    "Your positive energy is absolutely infectious! 🌟",
    "You're the most loyal friend anyone could ask for! 🤗",
    "Your wisdom and advice always come at the perfect time! 🦋",
    "You make the world a brighter place just by being in it! 🌈",
    "Your strength and resilience are truly admirable! 💪",
    "You're absolutely amazing in every single way! 🎉"
  ];

  const [currentCompliment, setCurrentCompliment] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const generateCompliment = () => {
    const randomCompliment = compliments[Math.floor(Math.random() * compliments.length)];
    setIsVisible(false);
    
    setTimeout(() => {
      setCurrentCompliment(randomCompliment);
      setIsVisible(true);
    }, 200);
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="text-center mb-16 relative">
        <h2 
          className="text-5xl md:text-6xl font-black text-white bg-gradient-to-r from-cyan-400 via-blue-500 to-pink-500 bg-clip-text text-transparent mb-4 drop-shadow-xl animate-text-glow"
          style={{ textShadow: '0 4px 20px #2563eb, 0 2px 10px #ec4899' }}
        >
          Your Compliment Game!
        </h2>
        <p 
          className="text-xl font-medium text-white bg-gradient-to-r from-cyan-400 via-blue-500 to-pink-500 bg-clip-text text-transparent drop-shadow-lg animate-text-glow"
          style={{ textShadow: '0 2px 10px #2563eb, 0 1px 5px #ec4899' }}
        >
          Click the button to receive a special compliment just for you!
        </p>
        <div className="w-32 h-1 bg-primary/20 mx-auto mt-6 rounded-full"></div>
      </div>
      
      <div className="text-center space-y-8">
        <Button
          onClick={generateCompliment}
          variant="celebration"
          size="xl"
          className="group magical-glow"
        >
          <Gift className="w-6 h-6 mr-3 group-hover:bounce" />
          Get Your Compliment!
          <Sparkles className="w-6 h-6 ml-3 group-hover:spin" />
        </Button>

        {currentCompliment && (
          <Card className={`p-8 mx-auto max-w-2xl shadow-magical bg-gradient-to-br from-card to-celebration-purple/10 border-primary/20 transition-all duration-500 ${
            isVisible ? 'celebration-bounce opacity-100' : 'opacity-0'
          }`}>
            <div className="flex items-center justify-center mb-4">
              <Star className="w-8 h-8 text-celebration-yellow mr-2" />
              <Heart className="w-8 h-8 text-celebration-pink" />
              <Star className="w-8 h-8 text-celebration-yellow ml-2" />
            </div>
            <p className="text-xl md:text-2xl font-medium text-center leading-relaxed">
              {currentCompliment}
            </p>
          </Card>
        )}
        
        <div className="text-center mt-8 text-sm text-muted-foreground">
          <p>💡 Customize the compliments array in the code to make them personal!</p>
        </div>
      </div>
    </div>
  );
};

export default ComplimentGame;

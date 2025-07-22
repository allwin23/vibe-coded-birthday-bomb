import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Gift, Heart, Sparkles, PartyPopper } from 'lucide-react';
import FloatingEmojis from '@/components/FloatingEmojis';
import PhotoGallery from '@/components/PhotoGallery';
import PoemDisplay from '@/components/PoemDisplay';
import VideoWall from '@/components/VideoWall';
import ComplimentGame from '@/components/ComplimentGame';
import birthdayHero from '@/assets/birthday-hero.jpg';

const Index = () => {
  const [showContent, setShowContent] = useState(false);

  const revealWebsite = () => {
    setShowContent(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/30 to-accent/20 relative overflow-x-hidden">
      <FloatingEmojis />
      
      {!showContent ? (
        // Grand Opening Header
        <div className="min-h-screen flex items-center justify-center px-6 relative z-10">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <div className="birthday-pulse">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold gradient-primary bg-clip-text text-transparent mb-6">
                Happy Birthday,
              </h1>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold gradient-celebration bg-clip-text text-transparent mb-8">
                [Bestie's Name]! 🥳
              </h2>
            </div>
            
            <div className="celebration-bounce">
              <p className="text-xl md:text-3xl text-foreground font-medium mb-12">
                To the most amazing person I know! ✨
              </p>
            </div>

            <Button
              onClick={revealWebsite}
              variant="birthday"
              size="xl"
              className="group magical-glow text-xl px-16 py-6"
            >
              <Gift className="w-8 h-8 mr-4 group-hover:bounce" />
              Click for a Surprise!
              <PartyPopper className="w-8 h-8 ml-4 group-hover:bounce" />
            </Button>
            
            <div className="mt-12 opacity-70">
              <img 
                src={birthdayHero} 
                alt="Birthday celebration" 
                className="rounded-2xl shadow-magical mx-auto max-w-2xl w-full"
              />
            </div>
          </div>
        </div>
      ) : (
        // Main Website Content
        <div className="relative z-10 celebration-bounce">
          {/* Hero Section */}
          <div className="min-h-screen flex items-center justify-center px-6 py-12">
            <div className="text-center space-y-8 max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold gradient-primary bg-clip-text text-transparent">
                🎉 Welcome to Your Special Day! 🎉
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground">
                A digital love bomb crafted with all my heart 💝
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <Heart className="w-8 h-8 text-celebration-pink animate-pulse" />
                <Sparkles className="w-8 h-8 text-celebration-yellow animate-pulse" />
                <Heart className="w-8 h-8 text-primary animate-pulse" />
              </div>
            </div>
          </div>

          {/* Photo Gallery Section */}
          <section className="py-16 bg-gradient-to-r from-secondary/10 to-accent/10">
            <PhotoGallery />
          </section>

          {/* Poem Display Section */}
          <section className="py-16">
            <PoemDisplay />
          </section>

          {/* Video Wall Section */}
          <section className="py-16 bg-gradient-to-r from-accent/10 to-secondary/10">
            <VideoWall />
          </section>

          {/* Compliment Game Section */}
          <section className="py-16">
            <ComplimentGame />
          </section>

          {/* Footer */}
          <footer className="py-16 text-center bg-gradient-to-r from-primary/5 to-accent/5">
            <div className="max-w-4xl mx-auto px-6">
              <h3 className="text-3xl font-bold gradient-celebration bg-clip-text text-transparent mb-4">
                Made with endless love and friendship 💕
              </h3>
              <p className="text-lg text-muted-foreground mb-8">
                Hope your special day is as wonderful as you are!
              </p>
              <div className="flex justify-center space-x-4">
                <Heart className="w-8 h-8 text-celebration-pink float-animation" />
                <Sparkles className="w-8 h-8 text-celebration-yellow float-animation" style={{ animationDelay: '1s' }} />
                <Heart className="w-8 h-8 text-primary float-animation" style={{ animationDelay: '2s' }} />
              </div>
            </div>
          </footer>
        </div>
      )}
    </div>
  );
};

export default Index;

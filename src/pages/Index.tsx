import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Gift, Heart, Sparkles, PartyPopper } from 'lucide-react';
import FloatingEmojis from '@/components/FloatingEmojis';
import PhotoGallery from '@/components/PhotoGallery';
import PoemDisplay from '@/components/PoemDisplay';
import VideoWall from '@/components/VideoWall';
import ComplimentGame from '@/components/ComplimentGame';
import OurStoryChapters from '@/components/OurStoryChapters';
import BirthdayNewspaper from '@/components/BirthdayNewspaper';
import MemoryScavengerHunt from '@/components/MemoryScavengerHunt';
import BestieMomentGame from '@/components/BestieMomentGame';
import SideDecorations from '@/components/SideDecorations';
import CatAnimation from '@/components/CatAnimation';
import BalloonAnimation from '@/components/BalloonAnimation';
import StarAnimation from '@/components/StarAnimation';
import ScrapbookText from '@/components/ScrapbookText';
import ScrapbookPage from '@/components/ScrapbookPage';


const Index = () => {
  const [showContent, setShowContent] = useState(false);

  const revealWebsite = () => {
    setShowContent(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-celebration-pink/30 via-accent/20 to-celebration-yellow/30 animate-gradient-move relative overflow-x-hidden">
      <FloatingEmojis />
      <SideDecorations />
      <CatAnimation />
      <BalloonAnimation />
      <StarAnimation />
      
      {!showContent ? (
        // Grand Opening Header
        // Grand Opening Header
        <div className="min-h-screen flex items-center justify-center px-6 relative z-10">
          <div className="text-center space-y-12 max-w-4xl mx-auto">
            <div className="relative inline-block">
              <span className="absolute -inset-2 blur-2xl opacity-60 animate-pulse bg-gradient-to-r from-celebration-pink via-celebration-yellow to-celebration-green rounded-full"></span>
              <div className="relative z-10 animate-fade-in-down">
                <h1
                  className="text-6xl md:text-8xl lg:text-9xl font-black text-white bg-gradient-to-r from-celebration-pink via-celebration-yellow to-celebration-green bg-clip-text mb-4 drop-shadow-xl animate-text-glow"
                  style={{ textShadow: '0 6px 40px #f472b6, 0 4px 16px #facc15' }}
                >
                  Happy Birthday,
                </h1>
                <h2
                  className="text-5xl md:text-7xl lg:text-8xl font-bold text-white bg-gradient-to-r from-celebration-green via-celebration-purple to-celebration-pink bg-clip-text mb-8 animate-fade-in-up"
                  style={{ textShadow: '0 4px 24px #a7f3d0, 0 2px 8px #c4b5fd' }}
                >
                  [Bestie's Name]! <span className="inline-block animate-bounce">🥳</span>
                </h2>
              </div>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              <p className="text-xl md:text-3xl text-foreground font-medium mb-12 drop-shadow-md animate-wiggle">
                To the most amazing person I know! <span className="inline-block animate-spin-slow">✨</span>
              </p>
            </div>
            <Button
              onClick={revealWebsite}
              variant="birthday"
              size="xl"
              className="group magical-glow text-xl px-16 py-6 animate-fade-in-up"
              style={{ animationDelay: '1s' }}
            >
              <Gift className="w-8 h-8 mr-4 group-hover:bounce" />
              Click for a Surprise!
              <PartyPopper className="w-8 h-8 ml-4 group-hover:bounce" />
            </Button>
            <div className="mt-12 opacity-80 animate-fade-in-up" style={{ animationDelay: '1.5s' }}>
              
            </div>
          </div>
        </div>
      ) : (
        // Main Website Content
        <div className="relative z-10 celebration-bounce">
          {/* Hero Section */}
          <div className="min-h-screen flex items-center justify-center px-6 py-12 relative">
            <ScrapbookPage>
              <div className="text-center space-y-8 max-w-4xl mx-auto">
                <ScrapbookText text="Welcome to Your Special Day!" />
                <p className="text-xl md:text-2xl text-muted-foreground">
                  A digital love bomb crafted with all my heart 💝
                </p>
                <div className="flex flex-wrap justify-center gap-4 mt-8">
                  <Heart className="w-8 h-8 text-celebration-pink animate-pulse" />
                  <Sparkles className="w-8 h-8 text-celebration-yellow animate-pulse" />
                  <Heart className="w-8 h-8 text-primary animate-pulse" />
                </div>
              </div>
            </ScrapbookPage>
          </div>

          {/* Our Story Interactive Chapters */}
          <section className="py-16 bg-gradient-to-r from-accent/10 to-celebration-purple/10">
            <OurStoryChapters />
          </section>

          {/* Photo Gallery Section */}
          <section className="py-16 bg-gradient-to-r from-secondary/10 to-accent/10">
            <PhotoGallery />
          </section>

          {/* Birthday Newspaper */}
          <section className="py-16">
            <BirthdayNewspaper />
          </section>

          {/* Memory Scavenger Hunt */}
          <section className="py-16 bg-gradient-to-r from-celebration-pink/10 to-celebration-yellow/10">
            <MemoryScavengerHunt />
          </section>

          {/* Poem Display Section */}
          <section className="py-16 bg-gradient-to-r from-celebration-green/10 to-secondary/10">
            <PoemDisplay />
          </section>

          {/* Video Wall Section */}
          <section className="py-16 bg-gradient-to-r from-accent/10 to-secondary/10">
            <VideoWall />
          </section>

          {/* Bestie Moment Guessing Game */}
          <section className="py-16 bg-gradient-to-r from-primary/5 to-celebration-pink/5">
            <BestieMomentGame />
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

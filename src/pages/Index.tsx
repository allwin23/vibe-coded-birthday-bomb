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
import SectionDivider from '@/components/SectionDivider';
import Checkpoint from '@/components/Checkpoint';
import GeometricBackground from '@/components/GeometricBackground';
import CatAnimation from '@/components/CatAnimation';
import BalloonAnimation from '@/components/BalloonAnimation';
import StarAnimation from '@/components/StarAnimation';
import ScrapbookText from '@/components/ScrapbookText';
import ScrapbookPage from '@/components/ScrapbookPage';
import AnuuuTextAnimation from '@/components/ui/AnuuuTextAnimation';
import ConfettiRain from '@/components/ui/ConfettiRain';


const Index = () => {
  const [showContent, setShowContent] = useState(false);

  const revealWebsite = () => {
    setShowContent(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-celebration-pink/30 via-accent/20 to-celebration-yellow/30 animate-gradient-move relative">
      <FloatingEmojis />
      <SideDecorations />
      <CatAnimation />
      <BalloonAnimation />
      <StarAnimation />
      
      {!showContent ? (
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
                  Dr.Annnuuurati! <span className="inline-block animate-bounce">🥳</span>
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
          <GeometricBackground />
          <ConfettiRain />
          <div className="fixed inset-0 z-0 pointer-events-none">
  <AnuuuTextAnimation />
</div>
            
            
          {/* Hero Section */}
          <div className="min-h-screen flex items-center justify-center px-6 py-12 relative">
            <AnuuuTextAnimation />
            <ScrapbookPage>
              <div className="text-center space-y-8 max-w-4xl mx-auto">
                <ScrapbookText text="Welcome to Your Special Day!" />
                <p className="text-xl md:text-2xl text-muted-foreground">
                  A digital creative bomb crafted to make you laugh 😂😂
                </p>
                <div className="flex flex-wrap justify-center gap-4 mt-8">
                  <Heart className="w-8 h-8 text-celebration-pink animate-pulse" />
                  <Sparkles className="w-8 h-8 text-celebration-yellow animate-pulse" />
                  <Heart className="w-8 h-8 text-primary animate-pulse" />
                </div>
              </div>
            </ScrapbookPage>
          </div>
          <SectionDivider />
         

          {/* Our Story Section */}
          {/* Our Story Interactive Chapters */}
          <section className="py-12 relative">
            
            <Checkpoint title="Our Story" position="left" />
            
            <OurStoryChapters />
            
          </section>
          <SectionDivider />

          {/* Photo Gallery Section */}
          <section className="py-12 relative">
            <Checkpoint title="Gallery" position="right" />
            <PhotoGallery />
          </section>
          <SectionDivider />

          {/* Birthday Newspaper */}
          <section className="py-12 relative">
            <Checkpoint title="Chronicle" position="left" />
            <BirthdayNewspaper />
          </section>
          <SectionDivider />

          {/* Memory Scavenger Hunt */}
          <section className="py-12 relative">
            <Checkpoint title="Scavenger Hunt" position="right" />
            <MemoryScavengerHunt />
          </section>
          <SectionDivider />

          {/* Poem Display Section */}
          <section className="py-12 relative">
            <Checkpoint title="Poem" position="left" />
            <PoemDisplay />
          </section>
          <SectionDivider />

          {/* Video Wall Section */}
          <section className="py-12 relative">
            <Checkpoint title="Videos" position="right" />
            <VideoWall />
          </section>
          <SectionDivider />

          {/* Bestie Moment Guessing Game */}
          <section className="py-12 relative">
            <Checkpoint title="Bestie Game" position="left" />
            <BestieMomentGame />
          </section>
          <SectionDivider />

          {/* Compliment Game Section */}
          <section className="py-12 relative">
            <Checkpoint title="Compliments" position="right" />
            <ComplimentGame />
          </section>

          {/* Footer */}
          <footer className="py-24 text-center">
            <div className="max-w-4xl mx-auto px-6">
              <h3 
                className="text-4xl md:text-5xl font-black text-white bg-gradient-to-r from-cyan-400 via-blue-500 to-pink-500 bg-clip-text text-transparent mb-4 drop-shadow-xl animate-text-glow"
                style={{ textShadow: '0 4px 20px #2563eb, 0 2px 10px #ec4899' }}
              >
                Made with endless love and friendship 💕
              </h3>
              <p 
                className="text-xl font-medium text-white bg-gradient-to-r from-cyan-400 via-blue-500 to-pink-500 bg-clip-text text-transparent drop-shadow-lg animate-text-glow"
                style={{ textShadow: '0 2px 10px #2563eb, 0 1px 5px #ec4899' }}
              >
                Hope your special day is as wonderful as you are!
              </p>
              <div className="flex justify-center space-x-4 mt-8">
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

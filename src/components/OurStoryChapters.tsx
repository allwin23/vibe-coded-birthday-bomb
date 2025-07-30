import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, BookOpen, Heart, Camera, MapPin, Sparkles } from 'lucide-react';

const OurStoryChapters = () => {
  const [currentChapter, setCurrentChapter] = useState(0);

  const chapters = [
    {
      title: "Chapter 1: The Beginning",
      icon: <Heart className="w-6 h-6" />,
      content: "Our friendship story starts here...",
      description: "Last Photo before u left",
      placeholder: {
        image: "/first.jpg",
        caption: "📝 This was the first moment our paths crossed — unforgettable beginnings."
      }
    },
    {
      title: "Chapter 2: Adventures & Laughter", 
      icon: <Camera className="w-6 h-6" />,
      content: "From silly moments to grand adventures...",
      description: "Everything we started together",
      placeholder: {
        image: "/Third.jpg",
        caption: "🎬 Our laughter echoed through every frame of this adventure."
      }
    },
    {
      title: "Chapter 3: Through Thick and Thin",
      icon: <Sparkles className="w-6 h-6" />,
      content: "The times that made our bond unbreakable...",
      description: "Photos from challenging times but still together",
      placeholder: {
        image: "/o.jpg",
        caption: "💪 Even the hard days felt easier because we had each other."
      }
    },
    {
      title: "Chapter 4: What's Next?",
      icon: <MapPin className="w-6 h-6" />,
      content: "The future is bright with you by my side...",
      description: "Coming soon section with future adventure wishes and more exciting memories",
      placeholder: {
        image: "/p.jpg",
        caption: "🌟 Here's to more magical memories waiting just ahead."
      }
    }
  ];

  const nextChapter = () => {
    setCurrentChapter((prev) => (prev + 1) % chapters.length);
  };

  const prevChapter = () => {
    setCurrentChapter((prev) => (prev - 1 + chapters.length) % chapters.length);
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="text-center mb-16 relative">
        <div className="absolute -top-4 -left-4 w-16 h-16 bg-celebration-yellow/50 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-celebration-pink/50 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        <h2 
          className="text-5xl md:text-6xl font-black text-white bg-gradient-to-r from-cyan-400 via-blue-500 to-pink-500 bg-clip-text text-transparent mb-4 drop-shadow-xl animate-text-glow"
          style={{ textShadow: '0 4px 20px #2563eb, 0 2px 10px #ec4899' }}
        >
          Our Unforgettable Story
        </h2>
        <p 
          className="text-xl font-medium text-white bg-gradient-to-r from-cyan-400 via-blue-500 to-pink-500 bg-clip-text text-transparent drop-shadow-lg animate-text-glow"
          style={{ textShadow: '0 2px 10px #2563eb, 0 1px 5px #ec4899' }}
        >
          A journey through the chapters of our amazing friendship
        </p>
        <div className="w-32 h-1 bg-primary/20 mx-auto mt-6 rounded-full"></div>
      </div>

      <Card className="p-8 shadow-magical bg-gradient-to-br from-card to-secondary/20 border-primary/20">
        <div className="flex items-center justify-between mb-6">
          <Button
            onClick={prevChapter}
            variant="outline"
            size="sm"
            className="hover:shadow-celebration"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          
          <div className="flex items-center space-x-2">
            {chapters[currentChapter].icon}
            <h3 className="text-2xl font-bold text-primary">
              {chapters[currentChapter].title}
            </h3>
          </div>
          
          <Button
            onClick={nextChapter}
            variant="outline"
            size="sm"
            className="hover:shadow-celebration"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>

        <div className="text-center space-y-6 min-h-[300px]">
          <div className="text-lg font-medium text-foreground">
            {chapters[currentChapter].content}
          </div>
          
          <div className="text-muted-foreground italic">
            {chapters[currentChapter].description}
          </div>
          
          <div className="bg-muted/50 rounded-lg p-6 border-2 border-dashed border-primary/30">
            <BookOpen className="w-12 h-12 mx-auto mb-4 text-primary/60" />

            <div className="flex flex-col items-center space-y-4">
              <img 
                src={chapters[currentChapter].placeholder.image} 
                alt={chapters[currentChapter].title}
                className="rounded-lg w-full max-w-xs mx-auto shadow-lg border border-primary/30"
                draggable={false}
              />
              <p className="text-primary font-medium text-center">
                {chapters[currentChapter].placeholder.caption}
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {chapters.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentChapter(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentChapter 
                  ? 'bg-primary shadow-magical' 
                  : 'bg-muted hover:bg-primary/50'
              }`}
            />
          ))}
        </div>
      </Card>
    </div>
  );
};

export default OurStoryChapters;

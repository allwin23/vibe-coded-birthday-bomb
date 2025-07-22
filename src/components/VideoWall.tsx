import { Card } from '@/components/ui/card';

const VideoWall = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="text-center mb-16 relative">
        <h2 
          className="text-5xl md:text-6xl font-black text-white bg-gradient-to-r from-cyan-400 via-blue-500 to-pink-500 bg-clip-text text-transparent mb-4 drop-shadow-xl animate-text-glow"
          style={{ textShadow: '0 4px 20px #2563eb, 0 2px 10px #ec4899' }}
        >
          Reel Moments
        </h2>
        <div className="w-32 h-1 bg-primary/20 mx-auto mt-6 rounded-full"></div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Ross & Rachel Video */}
        <Card className="p-6 shadow-celebration hover:shadow-magical transition-all duration-300">
          <div className="aspect-video mb-4 bg-muted rounded-lg flex items-center justify-center">
            <div className="text-center p-8">
              <div className="text-4xl mb-4">🎥</div>
              <p className="text-lg font-medium text-muted-foreground mb-2">
                Ross & Rachel Compilation
              </p>
              <p className="text-sm text-muted-foreground">
                [Insert YouTube embed URL here]
              </p>
            </div>
          </div>
          <div className="text-center">
            <p className="text-lg font-medium text-primary">
              "Just like Ross and Rachel, our friendship is legendary!"
            </p>
          </div>
        </Card>

        {/* Personal Video */}
        <Card className="p-6 shadow-celebration hover:shadow-magical transition-all duration-300">
          <div className="aspect-video mb-4 bg-muted rounded-lg flex items-center justify-center">
            <div className="text-center p-8">
              <div className="text-4xl mb-4">📱</div>
              <p className="text-lg font-medium text-muted-foreground mb-2">
                Personal Video
              </p>
              <p className="text-sm text-muted-foreground">
                [Insert Personal Video URL here]
              </p>
            </div>
          </div>
          <div className="text-center">
            <p className="text-lg font-medium text-primary">
              "More amazing moments with you!"
            </p>
          </div>
        </Card>
      </div>
      
      <div className="text-center mt-8 text-sm text-muted-foreground">
        <p>🔧 Replace the placeholder areas with actual YouTube embed codes or video links!</p>
      </div>
    </div>
  );
};

export default VideoWall;

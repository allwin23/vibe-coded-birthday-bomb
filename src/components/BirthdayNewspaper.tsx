import { Card } from '@/components/ui/card';
import { Newspaper, Star, Calendar, Coffee, Music, MapPin } from 'lucide-react';

const BirthdayNewspaper = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="text-center mb-16 relative">
        <h2 
          className="text-5xl md:text-6xl font-black text-white bg-gradient-to-r from-cyan-400 via-blue-500 to-pink-500 bg-clip-text text-transparent mb-4 drop-shadow-xl animate-text-glow"
          style={{ textShadow: '0 4px 20px #2563eb, 0 2px 10px #ec4899' }}
        >
          The Bestie's Birthday Chronicle
        </h2>
        <p 
          className="text-xl font-medium text-white bg-gradient-to-r from-cyan-400 via-blue-500 to-pink-500 bg-clip-text text-transparent drop-shadow-lg animate-text-glow"
          style={{ textShadow: '0 2px 10px #2563eb, 0 1px 5px #ec4899' }}
        >
          "All the News That's Fit to Celebrate!"
        </p>
        <div className="w-32 h-1 bg-primary/20 mx-auto mt-6 rounded-full"></div>
      </div>

      <Card className="p-8 shadow-magical bg-gradient-to-br from-card to-accent/10 border-primary/20 newspaper-style">
        {/* Newspaper Header */}
        <div className="border-b-4 border-primary pb-6 mb-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-primary mb-2">
              THE BIRTHDAY TIMES
            </h1>
            <div className="flex justify-center items-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                [Today's Date]
              </div>
              <div>SPECIAL BIRTHDAY EDITION</div>
              <div>Vol. [Her Age] No. 1</div>
            </div>
          </div>
        </div>

        {/* Main Headline */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
            🎉 HAPPY BIRTHDAY, [BESTIE'S NAME]! 🎉
          </h2>
          <h3 className="text-lg md:text-xl text-primary font-semibold">
            "A Decade of Amazing Friendship Celebrated Today"
          </h3>
        </div>

        {/* Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Main Article */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-primary border-b border-primary/30 pb-2">
              🌟 FRIEND OF THE YEAR STRIKES AGAIN
            </h3>
            <p className="text-sm leading-relaxed">
              <strong>Local Legend</strong> - In an unsurprising turn of events, [Bestie's Name] has once again proven why she holds the unofficial title of "Most Amazing Friend Ever." Sources close to the birthday girl report unprecedented levels of kindness, hilarious jokes, and infectious laughter throughout the year.
            </p>
            <p className="text-sm leading-relaxed">
              "She's just the best," said one close friend. "Every day with her is like having your own personal ray of sunshine."
            </p>
            <div className="bg-muted/50 p-3 rounded text-xs italic">
              📝 Customize this with your own funny "news article" about her amazing qualities!
            </div>
          </div>

          {/* Side Articles */}
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-bold text-primary border-b border-primary/30 pb-1 mb-2">
                🍰 WEATHER REPORT
              </h4>
              <p className="text-sm">
                Today's forecast: 100% chance of birthday magic with scattered celebrations and a high probability of cake! 
              </p>
            </div>

            <div>
              <h4 className="text-lg font-bold text-primary border-b border-primary/30 pb-1 mb-2">
                📸 MEMORY LANE UPDATE
              </h4>
              <p className="text-sm">
                Recent investigations reveal an abundance of epic photos and unforgettable moments. See gallery inside for evidence of pure friendship gold!
              </p>
            </div>
          </div>
        </div>

        {/* Classified Ads Section */}
        <div className="border-t-2 border-primary/30 pt-6">
          <h3 className="text-xl font-bold text-primary mb-4 text-center">
            🛍️ BIRTHDAY CLASSIFIEDS 🛍️
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <Card className="p-4 bg-celebration-yellow/20">
              <Coffee className="w-6 h-6 text-celebration-yellow mb-2" />
              <h4 className="font-bold">BEST COFFEE SHOP EVER!</h4>
              <p>[Her Favorite Cafe] - Where amazing conversations happen daily!</p>
            </Card>
            
            <Card className="p-4 bg-celebration-pink/20">
              <Music className="w-6 h-6 text-celebration-pink mb-2" />
              <h4 className="font-bold">EPIC PLAYLIST ALERT!</h4>
              <p>🎵 Songs that define our friendship - streaming now in the memories section!</p>
            </Card>
            
            <Card className="p-4 bg-celebration-purple/20">
              <MapPin className="w-6 h-6 text-celebration-purple mb-2" />
              <h4 className="font-bold">ADVENTURE DESTINATIONS</h4>
              <p>📍 Future trip planning sessions available - bring your passport!</p>
            </Card>
          </div>
        </div>

        {/* Poetry Corner */}
        <div className="mt-8 border-t-2 border-primary/30 pt-6">
          <h3 className="text-xl font-bold text-primary mb-4 text-center">
            💝 POETRY CORNER 💝
          </h3>
          <div className="bg-muted/30 p-6 rounded-lg text-center italic">
            <p className="text-lg">
              "A friend like you is rare to find,<br />
              With the biggest heart and brilliant mind...<br />
              <span className="text-primary font-semibold">[Continue with your beautiful poems here!]</span>"
            </p>
          </div>
        </div>

        {/* QR Code Section */}
        <div className="mt-6 text-center">
          <div className="bg-muted/50 p-4 rounded-lg inline-block">
            <div className="w-20 h-20 bg-primary/20 rounded border-2 border-dashed border-primary mx-auto mb-2 flex items-center justify-center">
              <Newspaper className="w-8 h-8 text-primary" />
            </div>
            <p className="text-xs text-muted-foreground">
              📱 Add QR codes linking to your special videos!
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default BirthdayNewspaper;

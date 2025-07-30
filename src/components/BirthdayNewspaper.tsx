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
                July 31, 2025
              </div>
              <div>SPECIAL BIRTHDAY EDITION</div>
              <div>Vol. 22 No. 1</div>
            </div>
          </div>
        </div>

        {/* Main Headline */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
            🎉 HAPPY BIRTHDAY, ANU! 🎉
          </h2>
          <h3 className="text-lg md:text-xl text-primary font-semibold">
            "A Timeless Bond, Born in College and Blossomed Beyond"
          </h3>
        </div>

        {/* Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Main Article */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-primary border-b border-primary/30 pb-2">
              🌟 THE HEART OF A FRIENDSHIP LEGEND
            </h3>
            <p className="text-sm leading-relaxed">
              <strong>College Diaries – 2022</strong> — On a warm September day in 2022, a friendship was born in a bustling college campus. That day, when I met Anu, little did I know I was about to find a soul twin. Within days, we clicked — no scripts, no expectations — just pure vibe and laughter that echoed through corridors.
            </p>
            <p className="text-sm leading-relaxed">
              Even after she followed her dream of becoming a doctor, leaving campus behind, our bond remained unshaken. From random texts about canteen food to deep 2 a.m. conversations, we stitched our friendship together, one thread of love and patience at a time.
            </p>
            <p className="text-sm leading-relaxed">
              We've weathered silence during exam seasons, cheered for each other's wins, and held space through heartbreaks and fears. Anu has been my vault, my cheerleader, and my constant — and today, I raise this tribute to the most beautiful soul I know.
            </p>
          </div>

          {/* Side Articles */}
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-bold text-primary border-b border-primary/30 pb-1 mb-2">
                🍰 WEATHER REPORT
              </h4>
              <p className="text-sm">
                Today's forecast calls for 100% chance of tight hugs, spontaneous giggles, and overwhelming waves of love. Expect a light drizzle of nostalgia and a downpour of cake!
              </p>
            </div>

            <div>
              <h4 className="text-lg font-bold text-primary border-b border-primary/30 pb-1 mb-2">
                📸 MEMORY LANE UPDATE
              </h4>
              <p className="text-sm">
                Investigation confirms: over 2.10 years of epic friendship stored in the heart's gallery. Photos include birthday outings, late-night calls, and moments that defined what true friendship looks like.
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
              <h4 className="font-bold">CAFÉ CONFESSIONS</h4>
              <p>Coffee dates pending at Cafe de Paris — where gossip brews and memories pour.</p>
            </Card>
            
            <Card className="p-4 bg-celebration-pink/20">
              <Music className="w-6 h-6 text-celebration-pink mb-2" />
              <h4 className="font-bold">SONG DEDICATIONS</h4>
              <p>From “Love me like you do” to “Railin Oligal” — the playlist of us is playing loud today.</p>
            </Card>
            
            <Card className="p-4 bg-celebration-purple/20">
              <MapPin className="w-6 h-6 text-celebration-purple mb-2" />
              <h4 className="font-bold">TRIP TO REMEMBER 📍</h4>
              <p>📍 Coming soon: Our dream destination! Passport ready. Vibes set. Anu, let’s go!</p>
            </Card>
          </div>
        </div>

        {/* Poetry Corner */}
        <div className="mt-8 border-t-2 border-primary/30 pt-6">
          <h3 className="text-xl font-bold text-primary mb-4 text-center">
            💝 POETRY CORNER 💝
          </h3>
          <div className="bg-muted/30 p-6 rounded-lg text-center italic">
            <p className="text-lg leading-relaxed">
              "We met on a September breeze,<br />
              No promises, no guarantees.<br />
              But laughter sparked and hearts aligned,<br />
              In you, a soulmate I did find.<br /><br />

              Three months of classes, just the start,<br />
              Before you followed your healing heart.<br />
              Though distance tried to dim our flame,<br />
              We stayed in touch — never the same.<br /><br />

              You saw my mess, I saw your grace,<br />
              Through every test, we found our place.<br />
              A friendship strong, both fierce and kind,<br />
              With honesty so rare to find.<br /><br />

              You wait for me, I wait for you,<br />
              Through exams, chaos, skies so blue.<br />
              No judgment, pressure, or pretend,<br />
              Just you and me — best friend to end.<br /><br />

              Today I write, not just to cheer,<br />
              But to say you’re loved, my Anu dear.<br />
              With every laugh and tear we share,<br />
              I know for sure — you’ll always be there."
            </p>
          </div>
        </div>

        {/* QR Code Section */}
        <div className="mt-10 text-center">
        <div className="mt-6 text-center">
  <div className="bg-muted/50 p-6 rounded-xl inline-block shadow-md">
    <div className="w-40 h-40 mx-auto mb-2">
      <img
        src="/b.png"
        alt="Scan to view birthday surprise!"
        className="w-full h-full object-cover rounded border border-primary focus:outline-none focus:ring-0 focus:border-transparent"
        draggable={false}
      />
    </div>
   
  </div>

          </div>
        </div>
      </Card>
    </div>
  );
};

export default BirthdayNewspaper;

import { useState } from 'react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ZoomIn } from 'lucide-react';
import memory1 from '@/assets/1.jpg';
import memory2 from '@/assets/5.jpg';
import memory3 from '@/assets/3.jpg';
import memory4 from '@/assets/4.jpg';

const PhotoGallery = () => {
  const photos = [
    { id: 1, src: memory1, caption: "Awesome" },
    { id: 2, src: memory2, caption: "u know who it is ??" },
    { id: 3, src: memory3, caption: "vibe han" },
    { id: 4, src: memory4, caption: "Sun set feels less" },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="text-center mb-16 relative">
        <h2 
          className="text-5xl md:text-6xl font-black text-white bg-gradient-to-r from-cyan-400 via-blue-500 to-pink-500 bg-clip-text text-transparent mb-4 drop-shadow-xl animate-text-glow"
          style={{ textShadow: '0 4px 20px #2563eb, 0 2px 10px #ec4899' }}
        >
          Memories Captured
        </h2>
        <p 
          className="text-xl font-medium text-white bg-gradient-to-r from-cyan-400 via-blue-500 to-pink-500 bg-clip-text text-transparent drop-shadow-lg animate-text-glow"
          style={{ textShadow: '0 2px 10px #2563eb, 0 1px 5px #ec4899' }}
        >
          "Every picture tells a story, and you  are epic!"
        </p>
        <div className="w-32 h-1 bg-primary/20 mx-auto mt-6 rounded-full"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {photos.map((photo, index) => (
          <Dialog key={photo.id}>
            <DialogTrigger asChild>
              <div className="group relative overflow-hidden rounded-xl shadow-celebration hover:shadow-magical transition-all duration-300 cursor-pointer">
                <img
                  src={photo.src}
                  alt={photo.caption}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                  </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/80 to-transparent p-4">
                  <p className="text-white text-sm font-medium">{photo.caption}</p>
                </div>
              </div>
            </DialogTrigger>
            <DialogContent className="max-w-4xl w-full max-h-[90vh] p-2">
              <img
                src={photo.src}
                alt={photo.caption}
                className="w-full h-auto rounded-lg"
              />
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;

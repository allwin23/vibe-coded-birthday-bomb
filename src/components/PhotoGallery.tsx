import { useState } from 'react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ZoomIn } from 'lucide-react';
import memory1 from '@/assets/memory-1.jpg';
import memory2 from '@/assets/memory-2.jpg';
import memory3 from '@/assets/memory-3.jpg';
import memory4 from '@/assets/memory-4.jpg';

const PhotoGallery = () => {
  const photos = [
    { id: 1, src: memory1, caption: "Upload Photo 1 of Bestie" },
    { id: 2, src: memory2, caption: "Upload Photo 2 of Bestie" },
    { id: 3, src: memory3, caption: "Upload Photo 3 of Bestie" },
    { id: 4, src: memory4, caption: "Upload Photo 4 of Bestie" },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold gradient-primary bg-clip-text text-transparent mb-4">
          📸 Memories Captured ✨
        </h2>
        <p className="text-xl text-muted-foreground">
          "Every picture tells a story, and ours are epic!"
        </p>
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
                  <ZoomIn className="w-8 h-8 text-white" />
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
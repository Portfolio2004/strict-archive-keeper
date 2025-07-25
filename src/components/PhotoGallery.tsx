import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogOverlay,
} from '@/components/ui/dialog';

interface PhotoGalleryProps {
  photos: string[];
  isOpen: boolean;
  onClose: () => void;
  initialIndex?: number;
}

const PhotoGallery: React.FC<PhotoGalleryProps> = ({
  photos,
  isOpen,
  onClose,
  initialIndex = 0
}) => {
  const [currentIndex, setCurrentIndex] = React.useState(initialIndex);

  React.useEffect(() => {
    if (isOpen) {
      setCurrentIndex(initialIndex);
    }
  }, [isOpen, initialIndex]);

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      switch (e.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowLeft':
          setCurrentIndex((prev) => (prev > 0 ? prev - 1 : photos.length - 1));
          break;
        case 'ArrowRight':
          setCurrentIndex((prev) => (prev < photos.length - 1 ? prev + 1 : 0));
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, photos.length]);

  const nextPhoto = () => {
    setCurrentIndex((prev) => (prev < photos.length - 1 ? prev + 1 : 0));
  };

  const prevPhoto = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : photos.length - 1));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog open={isOpen} onOpenChange={onClose}>
          <DialogOverlay className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm" />
          <DialogContent className="fixed left-[50%] top-[50%] z-50 w-[95vw] max-w-6xl h-[95vh] translate-x-[-50%] translate-y-[-50%] bg-gradient-to-br from-card/95 via-card/90 to-card/95 backdrop-blur-xl border border-primary/20 shadow-2xl rounded-3xl p-0 overflow-hidden">
            
            {/* Premium Background Effects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <motion.div
                className="absolute top-0 left-0 w-32 h-32 rounded-full bg-primary/10 blur-2xl"
                animate={{
                  x: [0, 50, 0],
                  y: [0, 30, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute bottom-0 right-0 w-40 h-40 rounded-full bg-accent/10 blur-3xl"
                animate={{
                  x: [0, -30, 0],
                  y: [0, -20, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              />
            </div>

            {/* Custom Close Button */}
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
              className="absolute right-6 top-6 z-20 p-3 rounded-full bg-black/20 hover:bg-black/40 backdrop-blur-sm border border-white/20 transition-all duration-300 group"
            >
              <X className="h-5 w-5 text-white group-hover:text-primary" />
            </motion.button>

            <div className="relative w-full h-full flex flex-col p-8">
              
              {/* Premium Navigation Buttons */}
              {photos.length > 1 && (
                <>
                  <motion.button
                    whileHover={{ scale: 1.1, x: -5 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={prevPhoto}
                    className="absolute left-6 top-1/2 transform -translate-y-1/2 z-10 p-4 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 hover:from-primary/30 hover:to-accent/30 backdrop-blur-xl border border-primary/30 shadow-2xl transition-all duration-300 group"
                  >
                    <ChevronLeft className="h-6 w-6 text-primary group-hover:text-white" />
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.1, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={nextPhoto}
                    className="absolute right-6 top-1/2 transform -translate-y-1/2 z-10 p-4 rounded-full bg-gradient-to-r from-accent/20 to-primary/20 hover:from-accent/30 hover:to-primary/30 backdrop-blur-xl border border-primary/30 shadow-2xl transition-all duration-300 group"
                  >
                    <ChevronRight className="h-6 w-6 text-primary group-hover:text-white" />
                  </motion.button>
                </>
              )}

              {/* Premium Main Photo Container */}
              <div className="flex-1 flex items-center justify-center px-20 py-4">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
                    animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                    exit={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                    transition={{ 
                      duration: 0.6, 
                      ease: [0.25, 0.46, 0.45, 0.94],
                      rotateY: { duration: 0.8 }
                    }}
                    className="relative w-full h-full max-h-[65vh] rounded-2xl overflow-hidden crystal-card"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 rounded-2xl" />
                    <img
                      src={photos[currentIndex]}
                      alt={`Photo ${currentIndex + 1}`}
                      className="w-full h-full object-cover object-center rounded-2xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-2xl" />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Premium Counter and Thumbnails */}
              <div className="flex flex-col items-center gap-6 mt-4">
                
                {/* Elegant Counter */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="px-6 py-3 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 backdrop-blur-xl border border-primary/30 shadow-lg"
                >
                  <span className="text-primary font-medium text-lg tracking-wider">
                    {currentIndex + 1} <span className="text-muted-foreground/60">of</span> {photos.length}
                  </span>
                </motion.div>

                {/* Premium Thumbnails */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex gap-4 overflow-x-auto pb-2 max-w-full px-4"
                >
                  {photos.map((photo, index) => (
                    <motion.button
                      key={index}
                      whileHover={{ scale: 1.15, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setCurrentIndex(index)}
                      className={`flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden transition-all duration-300 crystal-card ${
                        index === currentIndex
                          ? 'ring-2 ring-primary ring-offset-2 ring-offset-background scale-110 shadow-2xl'
                          : 'hover:ring-2 hover:ring-primary/50 hover:ring-offset-2 hover:ring-offset-background shadow-lg'
                      }`}
                    >
                      <img
                        src={photo}
                        alt={`Thumbnail ${index + 1}`}
                        className="w-full h-full object-cover object-center"
                      />
                      {index === currentIndex && (
                        <motion.div
                          layoutId="activeIndicator"
                          className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl"
                        />
                      )}
                    </motion.button>
                  ))}
                </motion.div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </AnimatePresence>
  );
};

export default PhotoGallery;
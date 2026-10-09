import React from 'react';
import { X, Sparkles, Film } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  videoUrl: string;
  title: string;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({
  isOpen,
  videoUrl,
  title,
  onClose,
}) => {
  if (!isOpen || !videoUrl) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
      {/* Dark Glass Overlay */}
      <div
        className="fixed inset-0 bg-black/90 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-5xl glass-card-dark rounded-3xl overflow-hidden shadow-2xl border border-white/20 z-10 animate-scale-up">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-black/40">
          <div className="flex items-center space-x-2.5">
            <Film className="w-5 h-5 text-[#BD9C7A]" />
            <h3 className="text-sm font-semibold tracking-wider uppercase text-white truncate max-w-md">
              {title}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full glass-button text-white/80 hover:text-white cursor-pointer transition-transform hover:scale-110"
            aria-label="Close video player"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player Frame */}
        <div className="relative aspect-video w-full bg-black">
          <iframe
            src={videoUrl}
            title={title}
            className="w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* Footer info bar */}
        <div className="px-6 py-3.5 bg-black/60 flex items-center justify-between text-xs text-zinc-400">
          <span className="flex items-center space-x-1.5 text-amber-200/90 font-mono uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-[#BD9C7A]" />
            <span>Emoze Cinematic Wedding Film</span>
          </span>
          <button
            onClick={onClose}
            className="text-xs uppercase tracking-wider hover:text-white transition-colors cursor-pointer"
          >
            Close Player
          </button>
        </div>

      </div>
    </div>
  );
};

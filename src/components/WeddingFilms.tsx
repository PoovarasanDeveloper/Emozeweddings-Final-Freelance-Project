import React from "react";
import { FILMS } from "../data/weddingData";
import { Play, Film, Clock, MapPin, Sparkles } from "lucide-react";

interface WeddingFilmsProps {
  onPlayVideo: (videoUrl: string, title: string) => void;
}

export const WeddingFilms: React.FC<WeddingFilmsProps> = ({ onPlayVideo }) => {
  return (
    <section
      id="films"
      className="py-20 sm:py-28 bg-[#2C251E] text-white relative scroll-mt-20 md:scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full glass-button text-[#BD9C7A] text-xs tracking-[0.25em] uppercase font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Cinematic Cinema</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-light text-white tracking-wide">
            Wedding Films
          </h2>
          <p className="text-sm sm:text-base text-[#EBDEBE]/80 font-light leading-relaxed">
            Story-based wedding cinema crafted with soul, original soundtracks,
            and high-definition visual poetry.
          </p>
        </div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FILMS.map((film) => (
            <div
              key={film.id}
              onClick={() => onPlayVideo(film.videoUrl, film.title)}
              className="group relative rounded-3xl overflow-hidden glass-card-dark border border-white/10 shadow-2xl transition-all duration-500 hover:border-[#BD9C7A]/50 hover:shadow-amber-500/10 cursor-pointer flex flex-col justify-between"
            >
              {/* Thumbnail Container */}
              <div className="relative aspect-video w-full overflow-hidden bg-amber-950">
                <img
                  src={film.thumbnail}
                  alt={film.title}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />

                {/* Glass Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full glass-play-btn flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 fill-current translate-x-0.5 text-[#BD9C7A]" />
                  </div>
                </div>

                {/* Duration Badge */}
                <div className="absolute bottom-3 right-3 px-3 py-1 rounded-full glass-card text-[11px] font-mono text-zinc-200 flex items-center space-x-1">
                  <Clock className="w-3 h-3 text-[#BD9C7A]" />
                  <span>{film.duration}</span>
                </div>
              </div>

              {/* Film Details */}
              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center space-x-2 text-xs text-[#BD9C7A]/90 font-mono uppercase tracking-wider mb-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{film.location}</span>
                  </div>
                  <h3 className="text-xl font-serif text-white group-hover:text-[#BD9C7A] transition-colors">
                    {film.title}
                  </h3>
                  <p className="text-xs text-[#B8C19C] font-medium tracking-wide mt-1">
                    Couple: {film.couple}
                  </p>
                </div>

                <p className="text-xs text-zinc-400 font-light line-clamp-2 leading-relaxed pt-2 border-t border-white/10">
                  {film.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

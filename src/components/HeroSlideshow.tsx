import React, { useState, useEffect } from 'react';
import { Play, Pause, ChevronLeft, ChevronRight, Sparkles, ArrowRight, Video, Image as ImageIcon } from 'lucide-react';
import { HERO_SLIDES } from '../data/weddingData';

interface HeroSlideshowProps {
  onPlayVideo: (videoUrl: string, title: string) => void;
  onExploreGallery: () => void;
  onOpenEnquiry: () => void;
}

export const HeroSlideshow: React.FC<HeroSlideshowProps> = ({
  onPlayVideo,
  onExploreGallery,
  onOpenEnquiry,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const [progress, setProgress] = useState(0);

  // Auto-advance slides with live smooth progress
  useEffect(() => {
    if (!isAutoplay) {
      setProgress(0);
      return;
    }
    const intervalTime = 50;
    const totalDuration = 6000;
    const step = (intervalTime / totalDuration) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setCurrentIndex((curr) => (curr + 1) % HERO_SLIDES.length);
          return 0;
        }
        return prev + step;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [currentIndex, isAutoplay]);

  const currentSlide = HERO_SLIDES[currentIndex];

  const handleSelectSlide = (idx: number) => {
    setCurrentIndex(idx);
    setProgress(0);
  };

  const handlePrev = () => {
    setProgress(0);
    setCurrentIndex((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const handleNext = () => {
    setProgress(0);
    setCurrentIndex((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const toggleAutoplay = () => {
    setIsAutoplay((prev) => !prev);
    if (!isAutoplay) setProgress(0);
  };

  return (
    <section className="relative w-full h-screen min-h-[680px] lg:min-h-[720px] overflow-hidden bg-black flex flex-col justify-between pt-20 sm:pt-24 lg:pt-28">
      {/* Background Images / Slides with transition */}
      {HERO_SLIDES.map((slide, idx) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === currentIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
          }`}
          style={{ transitionProperty: 'opacity, transform' }}
        >
          <img
            src={slide.bgImage}
            alt={slide.title}
            onError={(e) => {
              const target = e.currentTarget;
              const tried = target.dataset.tried || '0';
              if (tried === '0') {
                target.dataset.tried = '1';
                // Automatically try switching between .jpg and .jpeg
                if (slide.bgImage.endsWith('.jpg')) {
                  target.src = slide.bgImage.replace(/\.jpg$/, '.jpeg');
                  return;
                }
                if (slide.bgImage.endsWith('.jpeg')) {
                  target.src = slide.bgImage.replace(/\.jpeg$/, '.jpg');
                  return;
                }
              }
              if (tried === '1') {
                target.dataset.tried = '2';
                // Fallback to high-res wedding photo if local file is missing
                const fallbacks = [
                  'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=2000',
                  'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=2000',
                  'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=2000',
                  'https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&q=80&w=2000',
                ];
                target.src = fallbacks[idx % fallbacks.length];
              }
            }}
            className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-10000"
          />
          {/* Subtle gradient overlays for cinematic mood */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#2C251E] via-[#2C251E]/50 to-black/40" />
          <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px]" />
        </div>
      ))}

      {/* Main Hero Center Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-8 md:pt-12 pb-32 sm:pb-36 my-auto">
        <div className="max-w-3xl space-y-4 sm:space-y-5">
          
          {/* Category Pill */}
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full glass-card text-[#EBDEBE] font-10 tracking-[0.25em] uppercase font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-[#B8C19C]" />
            <span>{currentSlide.category}</span>
          </div>

          {/* Title */}
          <h1 className="font-0 text-white text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-normal leading-tight sm:leading-tight tracking-normal drop-shadow-md">
            {currentSlide.title}
          </h1>

          {/* Subtitle */}
          <p className="font-7 text-[#EBDEBE]/90 font-light max-w-2xl leading-relaxed tracking-wide">
            {currentSlide.subtitle}
          </p>

          {/* Action Buttons Bar */}
          <div className="pt-4 flex flex-wrap items-center gap-4 sm:gap-6">
            
            {/* PLAY BUTTON (If slide has video) */}
            {currentSlide.hasVideo && currentSlide.videoUrl && (
              <button
                onClick={() => onPlayVideo(currentSlide.videoUrl!, currentSlide.title)}
                className="group flex items-center space-x-3 px-6 py-3.5 rounded-full glass-card border border-[#BD9C7A]/50 hover:border-[#BD9C7A] text-white cursor-pointer transition-all shadow-lg hover:scale-105"
                title="Watch Cinematic Film"
              >
                <div className="w-9 h-9 rounded-full bg-[#BD9C7A] text-[#2C251E] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Play className="w-4 h-4 fill-current translate-x-0.5" />
                </div>
                <div className="text-left">
                  <span className="block font-10 tracking-[0.2em] uppercase font-bold text-[#BD9C7A]">
                    Play Film
                  </span>
                  <span className="block font-9 font-semibold text-white tracking-wider">
                    Watch Teaser
                  </span>
                </div>
              </button>
            )}

            {/* EXPLORE GALLERIES BUTTON */}
            <button
              onClick={onExploreGallery}
              className="group flex items-center space-x-3 px-7 py-4 rounded-full bg-[#B8C19C] text-[#2C251E] hover:bg-[#A4AF82] font-10 font-semibold tracking-[0.25em] uppercase cursor-pointer transition-all shadow-lg hover:scale-105"
            >
              <span>Explore Wedding Gallery</span>
              <ArrowRight className="w-4 h-4 text-[#2C251E] group-hover:translate-x-1.5 transition-transform" />
            </button>

            {/* TELL YOUR STORY / BOOKING BUTTON */}
            <button
              onClick={onOpenEnquiry}
              className="px-6 py-4 rounded-full bg-[#BD9C7A] text-[#2C251E] hover:bg-[#A38362] font-semibold font-10 tracking-[0.2em] uppercase transition-all shadow-xl hover:scale-105 cursor-pointer hidden sm:inline-flex"
            >
              Book Wedding Session
            </button>
          </div>

        </div>
      </div>

      {/* Bottom Luxury Floating Timeline Capsule (01, 02, 03, 04) - 80% screen width & responsive across all screens */}
      <div className="absolute bottom-3 sm:bottom-6 md:bottom-7 left-0 right-0 z-30 px-2 sm:px-4 md:px-6 pointer-events-none flex justify-center">
        <div className="w-[80%] max-w-[80%] mx-auto  sm: border border-[#BD9C7A]/40 rounded-full p-1.5 sm:p-2.5 shadow-2xl flex items-center justify-between gap-1 sm:gap-3 md:gap-4 ring-1 ring-white/10 pointer-events-auto">
          
          {/* Left: Play/Pause Autoplay & Slide Counter */}
          <div className="flex items-center space-x-1.5 sm:space-x-2 pl-1 sm:pl-2 shrink-0">
            <button
              onClick={toggleAutoplay}
              className={`w-7 h-7 sm:w-9 sm:h-9 rounded-full flex items-center justify-center transition-all cursor-pointer border ${
                isAutoplay
                  ? 'bg-[#BD9C7A]/20 border-[#BD9C7A] text-[#BD9C7A] hover:bg-[#BD9C7A] hover:text-[#2C251E]'
                  : 'bg-white/10 border-white/20 text-[#EBDEBE] hover:bg-white/20'
              }`}
              title={isAutoplay ? 'Pause slideshow' : 'Resume auto-play'}
              aria-label={isAutoplay ? 'Pause auto-play' : 'Resume auto-play'}
            >
              {isAutoplay ? (
                <Pause className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current" />
              ) : (
                <Play className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current translate-x-0.5" />
              )}
            </button>

            <div className="flex items-baseline space-x-0.5 sm:space-x-1 font-10">
              <span className="text-[#BD9C7A] font-bold text-xs sm:text-base">0{currentIndex + 1}</span>
              <span className="text-[#EBDEBE]/40 text-[10px] sm:text-xs">/</span>
              <span className="text-[#EBDEBE]/60 text-[10px] sm:text-xs">0{HERO_SLIDES.length}</span>
            </div>
          </div>

          {/* Center: Adaptable 01, 02, 03, 04 Numbers & Progress */}
          <div className="flex items-center justify-center gap-1 sm:gap-2 flex-1 overflow-x-auto no-scrollbar py-0.5 px-0.5">
            {HERO_SLIDES.map((slide, idx) => {
              const isActive = idx === currentIndex;
              return (
                <button
                  key={slide.id}
                  onClick={() => handleSelectSlide(idx)}
                  className={`group relative transition-all duration-300 ease-out cursor-pointer rounded-full flex items-center shrink-0 ${
                    isActive
                      ? 'bg-[#BD9C7A] text-[#2C251E] px-2.5 sm:px-3.5 md:px-4 py-1 sm:py-1.5 md:py-2 shadow-lg ring-1 ring-[#F3F0DD]/60 scale-100 sm:scale-105'
                      : 'bg-white/5 hover:bg-white/15 border border-white/10 hover:border-[#BD9C7A]/50 text-[#EBDEBE]/80 hover:text-white px-2 sm:px-2.5 md:px-3 py-1 sm:py-1.5 md:py-2'
                  }`}
                  title={slide.title}
                >
                  {/* Thumbnail Avatar for active slide on tablet/desktop */}
                  {isActive && (
                    <div className="hidden xs:block w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 rounded-full overflow-hidden border border-[#2C251E]/30 mr-1.5 sm:mr-2 shrink-0">
                      <img
                        src={slide.bgImage}
                        alt={slide.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}

                  {/* Numeral: 01, 02, 03, 04 */}
                  <span
                    className={`font-10 tracking-wider sm:tracking-widest font-bold text-[11px] sm:text-xs md:text-sm ${
                      isActive ? 'text-[#2C251E]' : 'group-hover:text-[#BD9C7A] text-[#EBDEBE]/90'
                    }`}
                  >
                    0{idx + 1}
                  </span>

                  {/* Category text on larger screens */}
                  {isActive && (
                    <>
                      <span className="hidden lg:inline-block font-10 font-semibold text-[11px] tracking-wider uppercase ml-2 mr-2 truncate max-w-[130px] xl:max-w-[180px] text-[#2C251E]">
                        {slide.category.split('&')[0]}
                      </span>

                      {/* Smooth Live Countdown Bar - visible across screens */}
                      <div className="w-5 sm:w-8 md:w-11 h-1 bg-[#2C251E]/25 rounded-full overflow-hidden ml-1 sm:ml-1.5 shrink-0">
                        <div
                          className="h-full bg-[#2C251E] rounded-full transition-all duration-75 ease-linear"
                          style={{ width: `${progress}%` }}
                        />
                      </div>
                    </>
                  )}
                </button>
              );
            })}
          </div>

          {/* Right: Prev & Next Circular Controls */}
          <div className="flex items-center space-x-1 sm:space-x-1.5 pr-1 sm:pr-2 shrink-0">
            <button
              onClick={handlePrev}
              className="w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-white/5 hover:bg-[#BD9C7A] text-[#EBDEBE] hover:text-[#2C251E] border border-[#BD9C7A]/30 flex items-center justify-center transition-all cursor-pointer shadow-md hover:scale-105 active:scale-95"
              aria-label="Previous Slide"
              title="Previous Slide"
            >
              <ChevronLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </button>
            <button
              onClick={handleNext}
              className="w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-white/5 hover:bg-[#BD9C7A] text-[#EBDEBE] hover:text-[#2C251E] border border-[#BD9C7A]/30 flex items-center justify-center transition-all cursor-pointer shadow-md hover:scale-105 active:scale-95"
              aria-label="Next Slide"
              title="Next Slide"
            >
              <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

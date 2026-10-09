import React, { useState } from "react";
import { TESTIMONIALS } from "../data/weddingData";
import { Quote, Star, ChevronLeft, ChevronRight, Heart } from "lucide-react";

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section
      id="testimonials"
      className="py-24 bg-[#E2E7BD] text-[#2C251E] relative border-y border-[#EBDEBE]"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full glass-button text-[#546135] font-10 tracking-[0.25em] uppercase font-semibold mb-8 shadow-sm">
          <Heart className="w-3.5 h-3.5 text-[#BD9C7A]" />
          <span>Real Bride & Groom Reviews</span>
        </div>

        <Quote className="w-12 h-12 text-[#BD9C7A]/50 mx-auto mb-6" />

        {/* Active Testimonial Card */}
        <div className="min-h-[220px] flex flex-col items-center justify-center space-y-6">
          <p className="font-4 font-light text-[#2C251E] leading-relaxed italic max-w-3xl">
            "{current.review}"
          </p>

          <div className="flex items-center space-x-1 text-[#BD9C7A]">
            {Array.from({ length: current.rating }).map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-current" />
            ))}
          </div>

          <div className="flex items-center space-x-4 pt-2">
            <img
              src={current.avatar}
              alt={current.reviewby}
              className="w-12 h-12 rounded-full object-cover border-2 border-[#BD9C7A] shadow-md"
            />
            <div className="text-left">
              <h4 className="font-6 text-[#2C251E] tracking-wider uppercase">
                {current.reviewby}
              </h4>
              <p className="font-10 text-[#615546]">
                {current.names} • {current.location} • {current.weddingDate}
              </p>
            </div>
          </div>
        </div>

        {/* Carousel Controls */}
        <div className="flex items-center justify-center space-x-4 mt-10">
          <button
            onClick={handlePrev}
            className="p-3 rounded-full glass-button text-[#2C251E] hover:bg-[#BD9C7A] transition-colors cursor-pointer shadow-sm"
            aria-label="Previous Review"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex items-center space-x-2">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2.5 rounded-full transition-all cursor-pointer ${
                  idx === currentIndex
                    ? "bg-[#BD9C7A] w-6"
                    : "bg-[#BD9C7A]/30 hover:bg-[#BD9C7A]/60 w-2.5"
                }`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="p-3 rounded-full glass-button text-[#2C251E] hover:bg-[#BD9C7A] transition-colors cursor-pointer shadow-sm"
            aria-label="Next Review"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

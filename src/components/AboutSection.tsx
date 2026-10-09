import React from "react";
import {
  Camera,
  Award,
  Film,
  Heart,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

interface AboutSectionProps {
  onOpenEnquiry: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  onOpenEnquiry,
}) => {
  return (
    <section
      id="about"
      className="py-20 sm:py-28 bg-[#F3F0DD] text-white relative scroll-mt-20 md:scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Image Mosaic */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden glass-card shadow-2xl">
                  <img
                    src="/images/about/Founder_karthisubramani.jpeg"
                    alt="Wedding story"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 rounded-2xl glass-mild border border-[#BD9C7A]/30 text-center space-y-1">
                  <span className="text-3xl font-serif text-[#546135] font-bold block">
                    Karthik Subramani
                  </span>
                  <span className="text-xs uppercase tracking-widest  text-[#54483C] block">
                    Founder
                  </span>
                </div>
              </div>

              <div className="space-y-4 pt-8">
                <div className="p-6 rounded-2xl glass-mild border border-[#BD9C7A]/40 text-center space-y-1">
                  <span className="text-3xl font-serif text-[#546135] font-bold block">
                    Irfan
                  </span>
                  <span className="text-xs uppercase tracking-widest  text-[#54483C] block">
                    Co-founder
                  </span>
                </div>
                <div className="aspect-[3/4] rounded-2xl overflow-hidden glass-card shadow-2xl">
                  <img
                    src="/images/about/co-founder_Irfan.jpg"
                    alt="Wedding couple"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full glass-button text-[#546135] text-xs tracking-[0.25em] uppercase font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>About EMOZE Weddings & Events</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-serif font-light text-[#2C251E] leading-tight">
              Lifetime Memories, Unfiltered Emotions & Timeless Art
            </h2>

            <p className="text-sm sm:text-base  text-[#54483C] font-light leading-relaxed">
              Founded on the belief that every couple has an unrepeatable life
              story, EMOZE Weddings & Events brings together South India's top
              candid photographers, cinematographers, and event storytellers.
            </p>

            <p className="text-xs sm:text-sm text-[#615546] font-light leading-relaxed">
              From traditional Tamilnadu rituals to grand destination
              celebrations in Dubai, Kovalam, and Chennai, our team blends
              subtle, non-intrusive shooting techniques with high-end editorial
              color tones.
            </p>

            {/* Feature Bullet Highlights */}
            <div className="space-y-3 pt-2 text-xs sm:text-sm text-[#2C251E]">
              <div className="flex items-center space-x-3">
                <CheckCircle2 className="w-4 h-4 text-[#546135] shrink-0" />
                <span>
                  Story-driven candid photography with natural light styling
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle2 className="w-4 h-4 text-[#546135] shrink-0" />
                <span>
                  Custom 4K cinematic wedding feature films & drone coverage
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle2 className="w-4 h-4 text-[#546135] shrink-0" />
                <span>
                  Dedicated production managers & rapid delivery of albums
                </span>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={onOpenEnquiry}
                className="px-8 py-3.5 rounded-full bg-[#BD9C7A] text-[#2C251E] font-bold text-xs tracking-[0.2em] uppercase hover:bg-[#BD9C7A] transition-all cursor-pointer shadow-xl hover:scale-105"
              >
                Tell Your Story With Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

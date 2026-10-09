import React, { useState, useEffect } from "react";
import { Menu, Sparkles } from "lucide-react";
import { BrandLogo } from "./BrandLogo";

interface HeaderProps {
  onOpenSidebar: () => void;
  onOpenSearch?: () => void;
  onOpenEnquiry: () => void;
  activeSection: string;
  onNavigate: (section: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenSidebar,
  onOpenEnquiry,
  activeSection,
  onNavigate,
}) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 sm:px-4 sm:px-6 lg:px-10 ${
        scrolled
          ? " border-b border-[#BD9C7A]/30 shadow-xl text-[#F3F0DD]"
          : " border-b border-[#BD9C7A]/20 text-[#F3F0DD]"
      }`}
    >
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* =========================================================================
            1. LEFT CORNER
            - Mobile: Drawer Menu Button
            - Desktop: "EMOZE Weddings & Events" Branding
           ========================================================================= */}
        <div className="flex items-center justify-start flex-shrink-0 w-auto md:min-w-[180px] lg:min-w-[220px]">
          {/* Mobile Menu Button */}
          <button
            onClick={onOpenSidebar}
            className="md:hidden flex items-center space-x-2 px-3 py-1.5 rounded-lg glass-mild-btn text-[#F3F0DD] hover:bg-[#BD9C7A]/30 transition-colors cursor-pointer"
            aria-label="Open Navigation Menu"
          >
            <Menu className="w-4 h-4 text-[#BD9C7A]" />
            <span className="font-10 font-bold tracking-wider uppercase text-[#EBDEBE]">
              MENU
            </span>
          </button>

          {/* Desktop & Tablet: Congratulations Calligraphy Branding (Left Corner) */}
          <div className="hidden md:flex items-center">
            <BrandLogo
              size="md"
              variant="light"
              showSubtitle={true}
              onClick={() => onNavigate("home")}
            />
          </div>
        </div>

        {/* =========================================================================
            2. MIDDLE / CENTER
            - Mobile: Centered Clean Calligraphy Brand
            - Tablet & Desktop: Centered Navigation Links with clean underline
           ========================================================================= */}
        {/* Mobile Centered Brand */}
        <div className="md:hidden flex-1 flex items-center justify-center text-center px-2">
          <BrandLogo
            size="sm"
            variant="light"
            showSubtitle={true}
            onClick={() => onNavigate("home")}
          />
        </div>

        {/* Desktop & Tablet Centered Navigation Bar */}
        <div className="hidden md:flex flex-1 items-center justify-center px-2">
          <nav className="flex items-center space-x-4 lg:space-x-8 font-1 tracking-[0.18em] lg:tracking-[0.22em] uppercase font-medium text-[#EBDEBE] whitespace-nowrap">
            <button
              onClick={() => onNavigate("home")}
              className={`hover:text-[#BD9C7A] transition-colors cursor-pointer relative py-1 ${
                activeSection === "home" ? "text-[#BD9C7A] font-semibold" : ""
              }`}
            >
              Home
              {activeSection === "home" && (
                <span className="absolute -bottom-1.5 left-0 w-full h-[2px] bg-[#BD9C7A] rounded-full" />
              )}
            </button>

            <button
              onClick={() => onNavigate("gallery")}
              className={`hover:text-[#BD9C7A] transition-colors cursor-pointer relative py-1 ${
                activeSection === "gallery"
                  ? "text-[#BD9C7A] font-semibold"
                  : ""
              }`}
            >
              Gallery
              {activeSection === "gallery" && (
                <span className="absolute -bottom-1.5 left-0 w-full h-[2px] bg-[#BD9C7A] rounded-full" />
              )}
            </button>

            <button
              onClick={() => onNavigate("films")}
              className={`hover:text-[#BD9C7A] transition-colors cursor-pointer relative py-1 ${
                activeSection === "films" ? "text-[#BD9C7A] font-semibold" : ""
              }`}
            >
              Films
              {activeSection === "films" && (
                <span className="absolute -bottom-1.5 left-0 w-full h-[2px] bg-[#BD9C7A] rounded-full" />
              )}
            </button>

            <button
              onClick={() => onNavigate("about")}
              className={`hover:text-[#BD9C7A] transition-colors cursor-pointer relative py-1 ${
                activeSection === "about" ? "text-[#BD9C7A] font-semibold" : ""
              }`}
            >
              About Us
              {activeSection === "about" && (
                <span className="absolute -bottom-1.5 left-0 w-full h-[2px] bg-[#BD9C7A] rounded-full" />
              )}
            </button>

            <button
              onClick={() => onNavigate("contact")}
              className={`hover:text-[#BD9C7A] transition-colors cursor-pointer relative py-1 ${
                activeSection === "contact"
                  ? "text-[#BD9C7A] font-semibold"
                  : ""
              }`}
            >
              Contact
              {activeSection === "contact" && (
                <span className="absolute -bottom-1.5 left-0 w-full h-[2px] bg-[#BD9C7A] rounded-full" />
              )}
            </button>
          </nav>
        </div>

        {/* =========================================================================
            3. RIGHT CORNER
            - Tell Your Story CTA Button
           ========================================================================= */}
        <div className="flex items-center justify-end flex-shrink-0 w-auto md:min-w-[160px] lg:min-w-[200px]">
          <button
            onClick={onOpenEnquiry}
            className="flex items-center space-x-2 px-3.5 sm:px-5 py-2 rounded-full bg-[#BD9C7A] text-[#2C251E] font-bold font-10 tracking-[0.16em] uppercase cursor-pointer hover:bg-[#A38362] hover:scale-105 transition-all shadow-md active:scale-95 whitespace-nowrap"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#2C251E] fill-[#2C251E]" />
            <span className="hidden sm:inline">Tell Your Story</span>
            <span className="sm:hidden font-10">Book</span>
          </button>
        </div>
      </div>
    </header>
  );
};

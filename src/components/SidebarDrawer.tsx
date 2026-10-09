import React from "react";
import {
  X,
  Phone,
  Mail,
  MapPin,
  Instagram,
  Youtube,
  Facebook,
  Camera,
  ArrowRight,
  Heart,
} from "lucide-react";
import { BrandLogo } from "./BrandLogo";
interface SidebarDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (section: string) => void;
  onOpenEnquiry: () => void;
}

export const SidebarDrawer: React.FC<SidebarDrawerProps> = ({
  isOpen,
  onClose,
  onNavigate,
  onOpenEnquiry,
}) => {
  if (!isOpen) return null;

  const handleNavClick = (section: string) => {
    onNavigate(section);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Semi-transparent Backdrop - clicking backdrop closes drawer */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Normal Size Sidebar Drawer (Max-width ~360px-380px, NOT full screen!) */}
      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-sm glass-card-dark bg-zinc-950/90 text-white shadow-2xl border-l border-white/10 flex flex-col justify-between p-6 sm:p-8 transform transition-transform duration-300 ease-out overflow-y-auto no-scrollbar">
          {/* Top Header */}
          <div>
            <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-8">
              <div className="flex flex-col text-left">
                <span className="text-xl font-serif tracking-[0.2em] font-bold uppercase text-white leading-none">
                  EMOZE
                </span>
                <span className="text-[9px] tracking-[0.25em] uppercase font-mono text-[#BD9C7A] font-semibold mt-1">
                  Weddings & Events
                </span>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-full glass-button text-white/80 hover:text-white hover:bg-white/20 transition-all cursor-pointer"
                aria-label="Close Sidebar"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Menu Navigation Links */}
            <nav className="space-y-4 text-sm tracking-[0.25em] uppercase font-medium">
              <button
                onClick={() => handleNavClick("home")}
                className="w-full text-left py-2.5 px-4 rounded-xl hover:bg-white/10 hover:text-[#BD9C7A] transition-all flex items-center justify-between group cursor-pointer"
              >
                <span>Home</span>
                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-[#BD9C7A]" />
              </button>

              <button
                onClick={() => handleNavClick("gallery")}
                className="w-full text-left py-2.5 px-4 rounded-xl hover:bg-white/10 hover:text-[#BD9C7A] transition-all flex items-center justify-between group cursor-pointer"
              >
                <span>Wedding Gallery</span>
                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-[#BD9C7A]" />
              </button>

              <button
                onClick={() => handleNavClick("films")}
                className="w-full text-left py-2.5 px-4 rounded-xl hover:bg-white/10 hover:text-[#BD9C7A] transition-all flex items-center justify-between group cursor-pointer"
              >
                <span>Wedding Films</span>
                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-[#BD9C7A]" />
              </button>

              <button
                onClick={() => handleNavClick("about")}
                className="w-full text-left py-2.5 px-4 rounded-xl hover:bg-white/10 hover:text-[#BD9C7A] transition-all flex items-center justify-between group cursor-pointer"
              >
                <span>About Us</span>
                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-[#BD9C7A]" />
              </button>

              <button
                onClick={() => handleNavClick("testimonials")}
                className="w-full text-left py-2.5 px-4 rounded-xl hover:bg-white/10 hover:text-[#BD9C7A] transition-all flex items-center justify-between group cursor-pointer"
              >
                <span>Love Stories</span>
                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-[#BD9C7A]" />
              </button>

              <button
                onClick={() => handleNavClick("contact")}
                className="w-full text-left py-2.5 px-4 rounded-xl hover:bg-white/10 hover:text-[#BD9C7A] transition-all flex items-center justify-between group cursor-pointer"
              >
                <span>Contact Studio</span>
                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-[#BD9C7A]" />
              </button>
            </nav>

            {/* Quick Tell Your Story CTA Box */}
            <div className="mt-8 p-5 rounded-2xl glass-card border border-[#BD9C7A]/30 bg-gradient-to-br from-amber-500/10 to-amber-900/20 text-center">
              <Heart className="w-6 h-6 text-[#BD9C7A] mx-auto mb-2 animate-bounce" />
              <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-amber-200 mb-1">
                Planning Your Wedding?
              </h4>
              <p className="text-[11px] text-zinc-300 leading-relaxed mb-4">
                Let’s create everlasting visual art for your special day.
              </p>
              <button
                onClick={() => {
                  onClose();
                  onOpenEnquiry();
                }}
                className="w-full py-2.5 px-4 rounded-full bg-amber-400 text-zinc-950 font-semibold text-xs tracking-wider uppercase hover:bg-[#BD9C7A] transition-all shadow-lg cursor-pointer"
              >
                Tell Your Story
              </button>
            </div>
          </div>

          {/* Bottom Info & Socials */}
          <div className="pt-8 border-t border-white/10 space-y-4">
            <div className="space-y-2 text-xs text-zinc-300">
              <div className="flex items-center space-x-2.5">
                <MapPin className="w-4 h-4 text-[#BD9C7A] shrink-0" />
                <span>
                  64/A,Indra Nagar, Swarnapuri Annexe, Salem, Tamil Nadu 636004
                </span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-[#BD9C7A] shrink-0" />
                <a
                  href="tel:+919487021503"
                  className="hover:text-[#BD9C7A] transition-colors"
                >
                  +91 9487021503
                </a>
              </div>
              <div className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-[#BD9C7A] shrink-0" />
                <a
                  href="mailto:mail@emozeweddings@gmail.com"
                  className="hover:text-[#BD9C7A] transition-colors"
                >
                  emozeweddings@gmail.com
                </a>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center justify-center space-x-3 pt-3">
              <a
                href="https://www.instagram.com/emozeweddings?igsh=Z3VxZTdieTN0Ym5x"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full glass-button hover:text-pink-400 transition-colors"
                title="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com/@emozeweddings?si=3MppQL5ngzwI0RR8"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full glass-button hover:text-red-400 transition-colors"
                title="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/emozeweddings"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full glass-button hover:text-blue-400 transition-colors"
                title="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>

            <p className="text-[10px] text-center text-zinc-500 uppercase tracking-widest pt-2">
              © 2026 EMOZE Weddings & Events
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

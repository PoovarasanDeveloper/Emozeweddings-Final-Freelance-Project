import React from "react";
import {
  Upload,
  RotateCcw,
  X,
  Image as ImageIcon,
  Globe,
  CheckCircle2,
} from "lucide-react";
import defaultBrandLogo from "./Brandlogo.png";

// Global console helper to reset logo anytime
if (typeof window !== "undefined") {
  (window as any).resetBrandLogo = () => {
    try {
      localStorage.removeItem("emoze_custom_logo");
      window.dispatchEvent(new Event("brand_logo_updated"));
      fetch("/api/brand-logo", { method: "DELETE" }).catch(() => {});
      console.log("Brand logo reset to default official ZEMO logo.");
    } catch {
      // ignore
    }
  };
}

// ----------------------------------------------------------------------
// 💡 ZEMO Haute-Couture Luxury Typography Logo (Voyage Editorial Typeface)
// Shared across ALL devices (mobile, tablet, laptop, PC) and browsers
// ----------------------------------------------------------------------
export const CUSTOM_LOGO_SRC: string | null = "/custom-brand-logo.png";

// Normalize static public image path
function normalizeImagePath(src: string | null | undefined): string | null {
  if (!src) return null;
  let clean = src.trim();
  if (clean.startsWith("http") || clean.startsWith("data:")) {
    return clean;
  }
  // Strip any leading dist/ or assets/ prefixes if user typed them
  clean = clean.replace(/^(\/)?dist\/assets\/public\//, "");
  clean = clean.replace(/^(\/)?dist\/assets\//, "");
  clean = clean.replace(/^(\/)?dist\//, "");
  clean = clean.replace(/^(\/)?assets\/public\//, "");
  clean = clean.replace(/^(\/)?assets\//, "");
  clean = clean.replace(/^(\/)?public\//, "");
  clean = clean.replace(/^\//, "");

  const baseUrl =
    (typeof import.meta !== "undefined" &&
      (import.meta as any).env &&
      (import.meta as any).env.BASE_URL) ||
    "/";
  return baseUrl.endsWith("/") ? `${baseUrl}${clean}` : `${baseUrl}/${clean}`;
}

interface BrandLogoProps {
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  variant?: "light" | "dark" | "gold" | "white";
  showSubtitle?: boolean;
  className?: string;
  imageSrc?: string;
  allowUpload?: boolean;
  onClick?: () => void;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  size = "md",
  variant = "light",
  className = "",
  imageSrc,
  allowUpload = true,
  onClick,
}) => {
  const [serverLogo, setServerLogo] = React.useState<string | null>(null);
  const [localStoredLogo, setLocalStoredLogo] = React.useState<string | null>(
    () => {
      try {
        const stored = localStorage.getItem("emoze_custom_logo");
        if (stored && (stored.includes("congrats") || stored.length < 50)) {
          localStorage.removeItem("emoze_custom_logo");
          return null;
        }
        return stored;
      } catch {
        return null;
      }
    }
  );

  // ஒரு முறை லோகோ சேவ் ஆன பிறகு மாற்றக்கூடிய அல்லது ரீசெட் செய்யக்கூடிய வசதி
  const [showManagerModal, setShowManagerModal] = React.useState(false);

  // Sync with server API so all devices (mobile, tablet, desktop) show the same fixed logo
  React.useEffect(() => {
    let isMounted = true;

    // 1. Check server if a logo was saved by any device
    fetch("/api/brand-logo")
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (!isMounted) return;
        if (data?.hasCustomLogo && (data.logo || data.dataUrl)) {
          const logoVal = data.dataUrl || data.logo;
          setServerLogo(logoVal);
          try {
            localStorage.setItem("emoze_custom_logo", logoVal);
          } catch {
            // ignore
          }
        } else {
          // If server doesn't have it yet, but this device already has a fixed logo from earlier double-click:
          // Automatically sync it to the server so all other devices will receive it!
          try {
            const currentLocal = localStorage.getItem("emoze_custom_logo");
            if (currentLocal && currentLocal.length > 50) {
              fetch("/api/brand-logo", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ logo: currentLocal }),
              }).catch(() => {});
            }
          } catch {
            // ignore
          }
        }
      })
      .catch(() => {});

    const handleLogoUpdate = () => {
      try {
        setLocalStoredLogo(localStorage.getItem("emoze_custom_logo"));
      } catch {
        // ignore
      }
    };
    window.addEventListener("brand_logo_updated", handleLogoUpdate);
    return () => {
      isMounted = false;
      window.removeEventListener("brand_logo_updated", handleLogoUpdate);
    };
  }, []);

  const handleResetLogo = async () => {
    try {
      localStorage.removeItem("emoze_custom_logo");
      setLocalStoredLogo(null);
      setServerLogo(null);
      window.dispatchEvent(new Event("brand_logo_updated"));
      setShowManagerModal(false);

      await fetch("/api/brand-logo", {
        method: "DELETE",
      });
    } catch {
      // ignore
    }
  };

  const fileInputRef = React.useRef<HTMLInputElement | null>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = async (event) => {
      const dataUrl = event.target?.result as string;
      if (dataUrl) {
        try {
          localStorage.setItem("emoze_custom_logo", dataUrl);
          setLocalStoredLogo(dataUrl);
          setServerLogo(dataUrl);
          window.dispatchEvent(new Event("brand_logo_updated"));

          // Persist to server so ALL devices (mobile, laptop, etc.) load this exact image!
          await fetch("/api/brand-logo", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ logo: dataUrl }),
          });
        } catch {
          // ignore quota error
        }
      }
    };
    reader.readAsDataURL(file);
  };

  // Determine which image source to use:
  // 1. localStorage uploaded image (cached on current device - highest priority)
  // 2. Server shared custom logo (visible on ALL devices via /api/brand-logo)
  // 3. User prop override (if provided)
  // 4. Bundled Brandlogo.png (src/components/Brandlogo.png - always available offline & in all browsers)
  // 5. Normalized path from CUSTOM_LOGO_SRC
  const activeImageSrc =
    localStoredLogo ||
    serverLogo ||
    imageSrc ||
    defaultBrandLogo ||
    (CUSTOM_LOGO_SRC
      ? variant === "dark"
        ? normalizeImagePath("/zemo.png")
        : normalizeImagePath(CUSTOM_LOGO_SRC)
      : null);

  // Responsive touch double-tap detection for mobile & tablet screens
  const lastTapRef = React.useRef<number>(0);
  const handleTouchEnd = (e: React.TouchEvent) => {
    const now = Date.now();
    if (now - lastTapRef.current < 380) {
      e.preventDefault();
      e.stopPropagation();
      if (allowUpload) {
        if (localStoredLogo) {
          setShowManagerModal(true);
        } else {
          fileInputRef.current?.click();
        }
      }
    }
    lastTapRef.current = now;
  };

  // Size mappings for responsive brand logo image
  // Fluidly adapts to screen size (mobile -> tablet -> desktop)
  const sizeClasses = {
    xs: {
      imgH: "h-6 sm:h-7",
      maxW: "max-w-[100px] sm:max-w-[120px]",
    },
    sm: {
      imgH: "h-7 sm:h-8 md:h-9",
      maxW: "max-w-[120px] sm:max-w-[150px] md:max-w-[180px]",
    },
    md: {
      imgH: "h-10 sm:h-14 md:h-24 lg:h-28",
      maxW: "max-w-[150px] sm:max-w-[190px] md:max-w-[230px] lg:max-w-[260px]",
    },
    lg: {
      imgH: "h-11 sm:h-13 md:h-16 lg:h-18",
      maxW: "max-w-[190px] sm:max-w-[240px] md:max-w-[290px] lg:max-w-[340px]",
    },
    xl: {
      imgH: "h-14 sm:h-18 md:h-22",
      maxW: "max-w-[240px] sm:max-w-[300px] md:max-w-[360px]",
    },
  };

  const currentSize = sizeClasses[size] || sizeClasses.md;

  // Color theme mappings
  const colorStyles = {
    light: {
      primary: "#F3F0DD",
      secondary: "#BD9C7A",
      filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.35))",
    },
    white: {
      primary: "#FFFFFF",
      secondary: "#BD9C7A",
      filter: "drop-shadow(0 2px 10px rgba(0,0,0,0.45))",
    },
    dark: {
      primary: "#2C251E",
      secondary: "#8C7152",
      filter: "none",
    },
    gold: {
      primary: "#BD9C7A",
      secondary: "#EBDEBE",
      filter: "drop-shadow(0 2px 8px rgba(189,156,122,0.25))",
    },
  };

  const currentColor = colorStyles[variant] || colorStyles.light;

  return (
    <div
      onClick={onClick}
      className={`inline-flex flex-col items-center select-none ${
        onClick ? "cursor-pointer group" : ""
      } ${className}`}
      style={{ filter: currentColor.filter }}
    >
      {/* 
        Responsive Calligraphy Artwork SVG with high-res scalable vector paths
        matching the uploaded "Congratulations" cursive script & flourishes
      */}
      <div
        className="relative flex items-center justify-center w-full"
        onDoubleClick={(e) => {
          e.stopPropagation();
          if (allowUpload) {
            if (localStoredLogo) {
              setShowManagerModal(true);
            } else {
              fileInputRef.current?.click();
            }
          }
        }}
        onTouchEnd={handleTouchEnd}
        title={
          allowUpload
            ? localStoredLogo
              ? "Double-click or double-tap to change/reset logo"
              : "Double-click or double-tap to set logo"
            : undefined
        }
      >
        {allowUpload && (
          <input
            ref={fileInputRef}
            type="file"
            accept="image/png,image/jpeg,image/webp,image/svg+xml"
            className="hidden"
            onChange={handleFileUpload}
          />
        )}

        <img
          src={activeImageSrc || defaultBrandLogo}
          alt="Brand Logo"
          referrerPolicy="no-referrer"
          onError={() => {
            if (activeImageSrc !== defaultBrandLogo && defaultBrandLogo) {
              setLocalStoredLogo(defaultBrandLogo);
              setServerLogo(defaultBrandLogo);
            }
          }}
          className={`${currentSize.imgH} ${currentSize.maxW} w-auto object-contain transition-transform duration-300 ${
            onClick ? "group-hover:scale-105" : ""
          }`}
        />
      </div>

      {/* Brand Logo Settings Modal */}
      {showManagerModal && (
        <div
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 text-white cursor-default"
          onClick={(e) => {
            e.stopPropagation();
            setShowManagerModal(false);
          }}
        >
          <div
            className="bg-[#12141a] border border-[#2d323f] rounded-2xl max-w-md w-full p-6 shadow-2xl space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-[#2d323f] pb-4">
              <div>
                <h3 className="text-lg font-semibold text-white tracking-wide">
                  Brand Logo Settings
                </h3>
                <p className="text-xs text-gray-400 mt-0.5">
                  பிராண்ட் லோகோ அமைப்புகள்
                </p>
              </div>
              <button
                type="button"
                onClick={() => setShowManagerModal(false)}
                className="text-gray-400 hover:text-white p-1.5 rounded-lg hover:bg-white/10 transition-colors"
                title="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Current Active Preview */}
            <div className="p-4 rounded-xl bg-black/60 border border-white/5 flex flex-col items-center justify-center min-h-[110px]">
              <span className="text-[10px] uppercase tracking-widest text-[#d4af37] font-semibold mb-3">
                தற்போது பயன்படுத்தப்படும் லோகோ
              </span>
              {activeImageSrc ? (
                <img
                  src={activeImageSrc}
                  alt="Current Logo"
                  className="h-12 w-auto max-w-[260px] object-contain"
                />
              ) : (
                <span className="text-sm text-gray-300 font-medium">
                  Default Official ZEMO Logo
                </span>
              )}
            </div>

            {/* Actions */}
            <div className="space-y-3">
              <button
                type="button"
                onClick={() => {
                  setShowManagerModal(false);
                  setTimeout(() => fileInputRef.current?.click(), 100);
                }}
                className="w-full flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl bg-[#c5a880] hover:bg-[#b59870] text-black font-semibold text-sm transition-all shadow-lg active:scale-95 cursor-pointer"
              >
                <Upload className="w-4 h-4" />
                <span>Upload New Logo (புதிய லோகோ மாற்ற)</span>
              </button>

              <button
                type="button"
                onClick={handleResetLogo}
                className="w-full flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl bg-white/5 hover:bg-rose-500/10 text-rose-300 hover:text-rose-200 border border-rose-500/20 text-sm font-medium transition-all active:scale-95 cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
                <span>
                  Reset to Default ZEMO Logo (அசல் லோகோவிற்கு மீட்டமைக்க)
                </span>
              </button>
            </div>

            <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center gap-2 text-emerald-300 text-xs">
              <Globe className="w-4 h-4 shrink-0 text-emerald-400" />
              <span>
                இங்கு சேவ் செய்யப்படும் லோகோ மொபைல், லேப்டாப் என அனைத்து
                சாதனங்களிலும் தானாகவே தோன்றும்.
              </span>
            </div>

            <p className="text-[11px] text-gray-400 text-center leading-relaxed">
              💡 குறிப்பு: நீங்கள் புதிய PNG / SVG லோகோ தேர்ந்தெடுக்கலாம் அல்லது
              எப்போது வேண்டுமானாலும் அசல் ZEMO லோகோவிற்கு மீட்டமைக்கலாம்.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

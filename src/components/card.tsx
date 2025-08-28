import React, { useRef, useEffect, useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
// import DiagonalLines from "@/components/patters/diagonal-lines.astro";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

interface CardImageProps {
  src: string;
  alt: string;
  link: string;
  className?: string;
}

interface CardVideoProps {
  src: string;
  link: string;
  className?: string;
}

interface CardContentProps {
  children: React.ReactNode;
  className?: string;
}

interface BottomPanelProps {
  link?: string;
  videoSrc?: string;
}

// Diagonal Lines Pattern Component
const DiagonalLines: React.FC<{ className?: string }> = ({
  className = "",
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <pattern
        id="diagonalPattern"
        patternUnits="userSpaceOnUse"
        width="10"
        height="10"
        patternTransform="rotate(45)"
      >
        <line x1="0" y1="0" x2="0" y2="10" strokeWidth="1"></line>
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#diagonalPattern)"></rect>
  </svg>
);

// Main Card Component
export const Card: React.FC<CardProps> = ({ children, className = "" }) => {
  return <div className={`flex flex-col ${className}`}>{children}</div>;
};

export const BottomPanel: React.FC<BottomPanelProps> = ({
  link = "",
  videoSrc = "",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const modalVideoRef = useRef<HTMLVideoElement>(null);

  // Reset video state when modal opens
  useEffect(() => {
    if (isOpen && modalVideoRef.current) {
      setVideoLoaded(false);
      setVideoError(false);
      modalVideoRef.current.currentTime = 0;
    }
  }, [isOpen]);

  const handleVideoLoad = () => {
    setVideoLoaded(true);
    setVideoError(false);
  };

  const handleVideoError = () => {
    setVideoError(true);
    setVideoLoaded(false);
  };

  return (
    <div className="absolute bg-background right-0 bottom-0 left-0 z-4 flex items-center bg-cream-50 border-t border-blue-300 divide-x divide-blue-300 dark:divide-blue-400/50 text-accent-blue text-xs [box-shadow:hsl(218,_13%,_50%,_0.1)_0_-2px_0_0_inset] transform transition-transform duration-200 group-hover:translate-y-0 md:translate-y-full">
      <a
        className="dark:bg-offgray-950 w-full px-3 py-2 text-center hover:bg-blue-50 dark:hover:bg-blue-950"
        href={link}
      >
        Learn More →
      </a>
      {videoSrc && (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <button
              type="button"
              disabled={!videoSrc}
              className={`dark:bg-offgray-950 flex w-full cursor-pointer items-center justify-center gap-1.5 px-3 py-2 transition-colors ${
                videoSrc
                  ? "hover:bg-blue-50 dark:hover:bg-blue-950"
                  : "opacity-50 cursor-not-allowed"
              }`}
            >
              Expand Video
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="10"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-maximize2"
              >
                <polyline points="15 3 21 3 21 9"></polyline>
                <polyline points="9 21 3 21 3 15"></polyline>
                <line x1="21" x2="14" y1="3" y2="10"></line>
                <line x1="3" x2="10" y1="21" y2="14"></line>
              </svg>
            </button>
          </DialogTrigger>
          <DialogContent
            className="max-w-6xl w-[95vw] h-[95vh] max-h-[90vh] p-0"
            showCloseButton={true}
          >
            <div className="w-full h-full flex items-center justify-center bg-black rounded-lg overflow-hidden relative">
              {!videoLoaded && !videoError && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 z-10">
                  <div className="text-white text-lg">Loading video...</div>
                </div>
              )}
              {videoError && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 z-10">
                  <div className="text-white text-lg">Error loading video</div>
                </div>
              )}
              <video
                ref={modalVideoRef}
                src={videoSrc}
                className="w-full h-full object-contain"
                controls
                autoPlay
                muted
                playsInline
                preload="metadata"
                onLoadedData={handleVideoLoad}
                onError={handleVideoError}
                onCanPlay={handleVideoLoad}
              />
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};
// Card Image Component
export const CardImage: React.FC<CardImageProps> = ({
  src,
  alt,
  link,
  className = "",
}) => {
  return (
    <div
      className={`group relative p-2 overflow-hidden rounded-md border transition-all duration-300 ease-in-out hover:border-blue-300 ${className}`}
    >
      <DiagonalLines className="absolute inset-0 w-full h-full pointer-events-none stroke-border transition-all duration-300 ease-in-out group-hover:stroke-blue-300" />
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover rounded-sm relative z-10 pointer-events-none select-none"
      />
      <BottomPanel link={link} />
    </div>
  );
};

// Card Content Component
export const CardContent: React.FC<CardContentProps> = ({
  children,
  className = "",
}) => {
  return (
    <div className={`text-left flex flex-col gap-1 mt-2 ${className}`}>
      {children}
    </div>
  );
};

// Default export for convenience
export default Card;

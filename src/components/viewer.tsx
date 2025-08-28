import React, { useRef, useEffect, useState } from "react";

interface ViewerProps {
  isOpen: boolean;
  onClose: () => void;
  src: string;
  alt?: string;
  type: "image" | "video";
}

export const Viewer: React.FC<ViewerProps> = ({
  isOpen,
  onClose,
  src,
  alt = "",
  type,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen && type === "video" && videoRef.current) {
      const video = videoRef.current;
      video.currentTime = 0;
      video.play().catch(() => {
        // Handle autoplay restrictions
      });
    }
  }, [isOpen, type]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleLoad = () => {
    setIsLoading(false);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 backdrop-blur-sm"
      onClick={handleBackdropClick}
    >
      <div className="relative max-w-[90vw] max-h-[90vh] w-full h-full flex items-center justify-center">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-black bg-opacity-50 hover:bg-opacity-70 text-white rounded-full transition-all duration-200"
          aria-label="Close viewer"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 6L6 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6 6L18 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* Loading spinner */}
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}

        {/* Content */}
        {type === "image" ? (
          <img
            src={src}
            alt={alt}
            className="max-w-full max-h-full object-contain rounded-lg"
            onLoad={handleLoad}
            onError={handleLoad}
          />
        ) : (
          <video
            ref={videoRef}
            src={src}
            className="max-w-full max-h-full object-contain rounded-lg"
            controls
            autoPlay
            muted
            onLoadedData={handleLoad}
            onError={handleLoad}
          />
        )}
      </div>
    </div>
  );
};

export default Viewer;

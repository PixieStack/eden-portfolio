import { useState, useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight, X, Play } from "lucide-react";
import { galleryItems } from "../data/galleryData";

interface SelectedImage {
  index: number;
}

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<SelectedImage | null>(
    null
  );
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [loadedMedia, setLoadedMedia] = useState<Set<string>>(new Set());
  const [isPortrait, setIsPortrait] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Get all unique categories
  const categories = [
    "All",
    ...new Set(galleryItems.map((item) => item.category)),
  ];

  // Filter images based on selected category
  const filteredImages =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (selectedImage !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedImage]);

  // Reset portrait state when changing items
  useEffect(() => {
    setIsPortrait(false);
  }, [selectedImage]);

  // Pause video when navigating away in lightbox
  useEffect(() => {
    return () => {
      if (videoRef.current) {
        videoRef.current.pause();
      }
    };
  }, [selectedImage]);

  // Keyboard navigation
  const handleNext = useCallback(() => {
    if (selectedImage === null) return;
    if (videoRef.current) videoRef.current.pause();
    const nextIndex = (selectedImage.index + 1) % filteredImages.length;
    setSelectedImage({ index: nextIndex });
  }, [selectedImage, filteredImages.length]);

  const handlePrev = useCallback(() => {
    if (selectedImage === null) return;
    if (videoRef.current) videoRef.current.pause();
    const prevIndex =
      selectedImage.index === 0
        ? filteredImages.length - 1
        : selectedImage.index - 1;
    setSelectedImage({ index: prevIndex });
  }, [selectedImage, filteredImages.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage === null) return;

      if (e.key === "ArrowRight") {
        e.preventDefault();
        handleNext();
      }
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        handlePrev();
      }
      if (e.key === "Escape") {
        setSelectedImage(null);
      }
    };

    if (selectedImage !== null) {
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }
  }, [selectedImage, handleNext, handlePrev]);

  const handleMediaLoaded = (id: string) => {
    setLoadedMedia((prev) => new Set(prev).add(id));
  };

  // Detect video orientation when metadata loads in lightbox
  const handleLightboxVideoLoad = (
    e: React.SyntheticEvent<HTMLVideoElement>
  ) => {
    const video = e.currentTarget;
    if (video.videoWidth && video.videoHeight) {
      setIsPortrait(video.videoHeight > video.videoWidth);
    }
  };

  // Detect image orientation when it loads in lightbox
  const handleLightboxImageLoad = (
    e: React.SyntheticEvent<HTMLImageElement>
  ) => {
    const img = e.currentTarget;
    if (img.naturalWidth && img.naturalHeight) {
      setIsPortrait(img.naturalHeight > img.naturalWidth);
    }
  };

  return (
    <div>
      {/* Category Filter */}
      <div className="flex flex-wrap gap-3 justify-center mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => {
              setActiveCategory(category);
              setSelectedImage(null);
            }}
            className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
              activeCategory === category
                ? "bg-gradient-to-r from-primary to-primary-dark text-white shadow-glow"
                : "bg-surface border border-white/5 text-muted-light hover:border-primary/30 hover:text-primary"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredImages.map((item, index) => (
          <div
            key={item.id}
            onClick={() => setSelectedImage({ index })}
            className="group cursor-pointer relative overflow-hidden rounded-xl bg-surface"
            style={{
              animation: `fadeInUp 0.6s ease-out ${index * 0.08}s both`,
            }}
          >
            {/* Fixed aspect ratio container */}
            <div
              className="relative w-full"
              style={{ paddingBottom: "66.67%" }}
            >
              {/* Loading skeleton */}
              {!loadedMedia.has(item.id) && (
                <div className="absolute inset-0 bg-surface animate-pulse flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full border-2 border-primary/30 border-t-primary animate-spin" />
                </div>
              )}

              {item.type === "image" ? (
                <img
                  src={item.src}
                  alt={item.title}
                  loading="lazy"
                  onLoad={() => handleMediaLoaded(item.id)}
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 group-hover:scale-110 ${
                    loadedMedia.has(item.id) ? "opacity-100" : "opacity-0"
                  }`}
                />
              ) : (
                <video
                  src={item.src}
                  preload="metadata"
                  onLoadedData={() => handleMediaLoaded(item.id)}
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 group-hover:scale-105 ${
                    loadedMedia.has(item.id) ? "opacity-100" : "opacity-0"
                  }`}
                  muted
                  loop
                  playsInline
                  onMouseEnter={(e) => {
                    e.currentTarget.play().catch(() => {});
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.pause();
                    e.currentTarget.currentTime = 0;
                  }}
                />
              )}

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-20">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-3 py-1 rounded-full bg-primary/20 border border-primary/40 text-primary text-xs font-medium backdrop-blur-sm">
                    {item.category}
                  </span>
                </div>
                <h3 className="font-display font-bold text-lg text-white mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-300 line-clamp-2">
                  {item.description}
                </p>
              </div>

              {/* Play Icon for Videos */}
              {item.type === "video" && (
                <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                  <div className="w-14 h-14 rounded-full bg-black/50 border-2 border-white/30 flex items-center justify-center group-hover:bg-primary/80 group-hover:border-primary group-hover:scale-110 transition-all duration-300">
                    <Play
                      size={22}
                      className="text-white ml-1"
                      fill="white"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredImages.length === 0 && (
        <div className="text-center py-20">
          <p className="text-muted-light text-lg">
            No items in this category yet.
          </p>
        </div>
      )}

      {/* Lightbox Modal */}
      {selectedImage !== null && filteredImages[selectedImage.index] && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          {/* Close Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
            }}
            className="absolute top-4 right-4 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all group"
          >
            <X
              size={24}
              className="text-white group-hover:scale-110 transition-transform"
            />
          </button>

          {/* Center content area */}
          <div className="absolute inset-0 flex flex-col items-center justify-center px-16 py-6 md:px-20">
            {/* Media container - adapts to portrait or landscape */}
            <div
              className={`relative flex items-center justify-center animate-zoom-in ${
                isPortrait
                  ? "w-auto max-w-[min(500px,85vw)]"
                  : "w-full max-w-6xl"
              }`}
              style={{ maxHeight: "calc(100vh - 140px)" }}
              onClick={(e) => e.stopPropagation()}
            >
              {filteredImages[selectedImage.index].type === "image" ? (
                <img
                  src={filteredImages[selectedImage.index].src}
                  alt={filteredImages[selectedImage.index].title}
                  onLoad={handleLightboxImageLoad}
                  className={`rounded-lg shadow-2xl ${
                    isPortrait
                      ? "max-h-[85vh] w-auto max-w-full"
                      : "w-full max-h-[75vh] object-contain"
                  }`}
                />
              ) : (
                <video
                  ref={videoRef}
                  key={filteredImages[selectedImage.index].src}
                  src={filteredImages[selectedImage.index].src}
                  onLoadedMetadata={handleLightboxVideoLoad}
                  className={`rounded-lg shadow-2xl bg-black ${
                    isPortrait
                      ? "max-h-[85vh] w-auto max-w-full"
                      : "w-full max-h-[75vh]"
                  }`}
                  controls
                  autoPlay
                  playsInline
                  controlsList="nodownload"
                />
              )}
            </div>

            {/* Info below media */}
            <div className="w-full max-w-4xl mt-4 px-2 flex-shrink-0">
              <div className="flex items-center gap-3 mb-1">
                <span className="px-3 py-1 rounded-full bg-primary/20 border border-primary/40 text-primary text-xs font-medium">
                  {filteredImages[selectedImage.index].category}
                </span>
                <span className="text-white/40 text-sm">
                  {selectedImage.index + 1} / {filteredImages.length}
                </span>
              </div>
              <h3 className="font-display font-bold text-lg md:text-xl text-white mb-1">
                {filteredImages[selectedImage.index].title}
              </h3>
              <p className="text-muted-light text-sm">
                {filteredImages[selectedImage.index].description}
              </p>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-50 w-11 h-11 md:w-14 md:h-14 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all group"
          >
            <ChevronLeft
              size={28}
              className="text-white group-hover:scale-110 transition-transform"
            />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-50 w-11 h-11 md:w-14 md:h-14 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all group"
          >
            <ChevronRight
              size={28}
              className="text-white group-hover:scale-110 transition-transform"
            />
          </button>
        </div>
      )}

      {/* CSS Animations */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes zoomIn {
          from {
            opacity: 0;
            transform: scale(0.92);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.25s ease-out;
        }

        .animate-zoom-in {
          animation: zoomIn 0.3s ease-out;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        video::-webkit-media-controls {
          visibility: visible !important;
        }
      `}</style>
    </div>
  );
}
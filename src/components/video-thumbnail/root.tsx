import { useEffect, useRef, useState } from "react";
import playIcon from "../../assets/images/play-icon.png";

export const VideoThumbnail = ({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLButtonElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handleClick = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
      setIsPlaying(false);
    } else {
      video.play();
      setIsPlaying(true);
    }
  };

  return (
    <button
      ref={containerRef}
      type="button"
      className={`overflow-hidden relative cursor-pointer ${className ?? ""}`}
      onClick={handleClick}
    >
      <video
        ref={videoRef}
        src={isVisible ? src : undefined}
        preload={isVisible ? "metadata" : "none"}
        playsInline
        className="w-full h-full object-cover"
        aria-label={alt}
        onEnded={() => setIsPlaying(false)}
      >
        <track kind="captions" />
      </video>
      {!isPlaying && (
        <>
          <div className="absolute inset-0 bg-black opacity-45" />
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <img
              src={playIcon}
              alt="Play"
              className="w-16 h-16 md:w-20 md:h-20"
            />
          </div>
        </>
      )}
    </button>
  );
};

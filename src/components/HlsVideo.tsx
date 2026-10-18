import React, { useEffect, useRef } from "react";
import Hls from "hls.js";

interface HlsVideoProps {
  src: string;
  className?: string;
  videoClassName?: string;
  flipped?: boolean;
  overlayClassName?: string;
}

export const HlsVideo: React.FC<HlsVideoProps> = ({
  src,
  className = "",
  videoClassName = "",
  flipped = false,
  overlayClassName = "bg-black/20",
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let hls: Hls | null = null;

    if (Hls.isSupported()) {
      hls = new Hls({
        enableWorker: true,
        lowLatencyMode: true,
        backBufferLength: 30,
      });

      hls.loadSource(src);
      hls.attachMedia(video);

      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch(() => {
          // Autoplay was prevented; muted autoplay should succeed
        });
      });

      hls.on(Hls.Events.ERROR, (_event, data) => {
        if (data.fatal) {
          switch (data.type) {
            case Hls.ErrorTypes.NETWORK_ERROR:
              hls?.startLoad();
              break;
            case Hls.ErrorTypes.MEDIA_ERROR:
              hls?.recoverMediaError();
              break;
            default:
              hls?.destroy();
              break;
          }
        }
      });
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      // Native HLS support (Safari)
      video.src = src;
      video.addEventListener("loadedmetadata", () => {
        video.play().catch(() => {});
      });
    }

    return () => {
      if (hls) {
        hls.destroy();
      }
    };
  }, [src]);

  return (
    <div className={`overflow-hidden pointer-events-none select-none ${className}`}>
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className={`absolute min-w-full min-h-full object-cover -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 ${
          flipped ? "scale-y-[-1]" : ""
        } ${videoClassName}`}
      />
      {overlayClassName && (
        <div className={`absolute inset-0 ${overlayClassName}`} />
      )}
    </div>
  );
};


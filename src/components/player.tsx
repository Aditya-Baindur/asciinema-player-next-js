"use client";

import { useEffect, useRef } from "react";

interface TerminalPlayerProps {
  src: string; // path to your .cast file
}

export default function TerminalPlayer({ src }: TerminalPlayerProps) {
  const playerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only run in browser
    import("asciinema-player").then((AsciinemaPlayer) => {
      if (playerRef.current) {
        AsciinemaPlayer.create(src, playerRef.current, {
          autoplay: true,
          loop: true,
          fit: "none",
          poster: "npt:0:0",
          speed: 1,
          theme: "asciinema",
        });
      }
    });
  }, [src]);

  return <div ref={playerRef} className="w-full" />;
}

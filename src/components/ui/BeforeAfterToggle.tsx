"use client";

import { useState, useRef, useEffect } from "react";

export default function BeforeAfterToggle({
  beforeVideo,
  afterVideo,
}: {
  beforeVideo: string;
  afterVideo: string;
}) {
  const [view, setView] = useState<"before" | "after">("before");
  const [playing, setPlaying] = useState(true);
  const [expanded, setExpanded] = useState(false);
  const beforeRef = useRef<HTMLVideoElement>(null);
  const afterRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (expanded) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [expanded]);

  function togglePlay() {
    const active = view === "before" ? beforeRef.current : afterRef.current;
    if (!active) return;
    if (active.paused) { active.play(); setPlaying(true); }
    else { active.pause(); setPlaying(false); }
  }

  // Sync play state when switching views
  function switchView(next: "before" | "after") {
    setView(next);
    const target = next === "before" ? beforeRef.current : afterRef.current;
    if (!target) return;
    if (playing) target.play();
    else target.pause();
  }

  const activeSrc = view === "before" ? beforeVideo : afterVideo;

  return (
    <>
      <div className="mt-8">
        <div className="mb-3 inline-flex rounded-full border border-border bg-bg-secondary p-1">
          <button
            onClick={() => switchView("before")}
            className={`rounded-full px-5 py-1.5 font-mono text-sm transition-colors ${
              view === "before" ? "bg-accent text-bg-primary" : "text-text-secondary hover:text-text-primary"
            }`}
          >
            Before
          </button>
          <button
            onClick={() => switchView("after")}
            className={`rounded-full px-5 py-1.5 font-mono text-sm transition-colors ${
              view === "after" ? "bg-accent text-bg-primary" : "text-text-secondary hover:text-text-primary"
            }`}
          >
            After
          </button>
        </div>

        <div className="relative aspect-video overflow-hidden rounded-xl border border-border">
          <video
            ref={beforeRef}
            src={beforeVideo}
            autoPlay muted loop playsInline
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 cursor-zoom-in ${view === "before" ? "opacity-100" : "opacity-0 pointer-events-none"}`}
            onClick={() => setExpanded(true)}
          />
          <video
            ref={afterRef}
            src={afterVideo}
            autoPlay muted loop playsInline
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 cursor-zoom-in ${view === "after" ? "opacity-100" : "opacity-0 pointer-events-none"}`}
            onClick={() => setExpanded(true)}
          />
          <button
            onClick={togglePlay}
            aria-label={playing ? "Pause video" : "Play video"}
            className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-sm transition hover:bg-black/80"
          >
            {playing ? (
              <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" aria-hidden="true">
                <rect x="2" y="1" width="3.5" height="12" rx="1" />
                <rect x="8.5" y="1" width="3.5" height="12" rx="1" />
              </svg>
            ) : (
              <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" aria-hidden="true">
                <path d="M3 1.5l9 5.5-9 5.5V1.5z" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {expanded && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 cursor-zoom-out"
          onClick={() => setExpanded(false)}
        >
          <video
            src={activeSrc}
            autoPlay muted loop playsInline controls
            className="max-h-[90vh] max-w-full rounded-xl cursor-default"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}

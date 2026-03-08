import { useState, useEffect, useRef, useCallback } from "react";
import { Music, Pause } from "lucide-react";

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

const MusicPlayer = () => {
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(12);
  const [ready, setReady] = useState(false);
  const playerRef = useRef<any>(null);

  const onReady = useCallback((event: any) => {
    event.target.setVolume(12);
    setReady(true);
  }, []);

  const onStateChange = useCallback((event: any) => {
    if (event.data === window.YT?.PlayerState?.PLAYING) setPlaying(true);
    else if (event.data === window.YT?.PlayerState?.PAUSED) setPlaying(false);
  }, []);

  useEffect(() => {
    if (window.YT && window.YT.Player) {
      playerRef.current = new window.YT.Player("yt-player", {
        videoId: "SRCgHHt08ME",
        playerVars: { autoplay: 0, loop: 1, playlist: "SRCgHHt08ME", controls: 0, disablekb: 1, modestbranding: 1, rel: 0, iv_load_policy: 3, fs: 0 },
        events: { onReady, onStateChange },
      });
      return;
    }

    window.onYouTubeIframeAPIReady = () => {
      playerRef.current = new window.YT.Player("yt-player", {
        videoId: "SRCgHHt08ME",
        playerVars: { autoplay: 0, loop: 1, playlist: "SRCgHHt08ME", controls: 0, disablekb: 1, modestbranding: 1, rel: 0, iv_load_policy: 3, fs: 0 },
        events: { onReady, onStateChange },
      });
    };

    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    document.head.appendChild(tag);
  }, [onReady, onStateChange]);

  const togglePlay = () => {
    if (!playerRef.current) return;
    if (playing) playerRef.current.pauseVideo();
    else playerRef.current.playVideo();
  };

  const handleVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = Number(e.target.value);
    setVolume(v);
    playerRef.current?.setVolume(v);
  };

  return (
    <>
      <div id="yt-player" className="fixed" style={{ width: 1, height: 1, opacity: 0, zIndex: -1 }} />
      <div className="fixed bottom-4 right-4 z-50 animate-slide-up">
        <div
          className="rounded-xl p-4 flex items-center gap-3 border border-primary/30 backdrop-blur-md"
          style={{ background: "rgba(10,10,10,0.92)" }}
        >
          <button
            onClick={togglePlay}
            disabled={!ready}
            className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center shrink-0 hover:bg-accent transition-colors disabled:opacity-50"
          >
            {playing ? <Pause size={18} /> : <Music size={18} />}
          </button>
          <div className="min-w-0">
            <p className="text-foreground text-xs font-sub font-bold truncate">Stereo Love</p>
            <p className="text-muted-foreground text-[10px] font-body truncate">Edward Maya · Background Music</p>
            <div className="flex items-center gap-2 mt-1">
              <input
                type="range"
                min={0}
                max={100}
                value={volume}
                onChange={handleVolume}
                className="w-20 h-1 accent-primary cursor-pointer"
              />
              <span className="text-muted-foreground text-[10px] font-body w-6">{volume}%</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MusicPlayer;

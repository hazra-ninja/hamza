import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react';

const MusicButton = forwardRef(({ audioSrc = '/media/music.m4a' }, ref) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const playMusic = () => {
    if (!audioRef.current) return;
    audioRef.current
      .play()
      .then(() => {
        setIsPlaying(true);
      })
      .catch((err) => {
        console.warn('Autoplay prevented or audio error:', err);
      });
  };

  const pauseMusic = () => {
    if (!audioRef.current) return;
    audioRef.current.pause();
    setIsPlaying(false);
  };

  const toggleMusic = () => {
    if (isPlaying) {
      pauseMusic();
    } else {
      playMusic();
    }
  };

  useImperativeHandle(ref, () => ({
    play: playMusic,
    pause: pauseMusic,
    toggle: toggleMusic,
    isPlaying: () => isPlaying
  }));

  return (
    <>
      <audio ref={audioRef} src={audioSrc} loop preload="auto" />
      <button
        onClick={toggleMusic}
        type="button"
        aria-pressed={isPlaying}
        aria-label="Toggle background music"
        className="fixed right-2.5 top-[calc(10px+env(safe-area-inset-top))] z-30 w-11 h-11 border-0 bg-transparent grid place-items-center cursor-pointer text-ivory hover:opacity-80 transition-opacity"
      >
        {isPlaying ? (
          <svg
            className="w-[22px] h-[22px]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
          >
            <path d="M9 18V6l10-2v12" />
            <circle cx="6.5" cy="18" r="2.5" />
            <circle cx="16.5" cy="16" r="2.5" />
          </svg>
        ) : (
          <svg
            className="w-[22px] h-[22px]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
          >
            <path d="M9 18V6l10-2v12" />
            <circle cx="6.5" cy="18" r="2.5" />
            <circle cx="16.5" cy="16" r="2.5" />
            <path d="M3 3l18 18" />
          </svg>
        )}
      </button>
    </>
  );
});

MusicButton.displayName = 'MusicButton';

export default MusicButton;


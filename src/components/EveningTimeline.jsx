import React, { useEffect, useRef, useState } from 'react';
import { invitationData } from '../data/invitationData';

export default function EveningTimeline() {
  const containerRef = useRef(null);
  const [progress, setProgress] = useState(0);

  const { itinerary } = invitationData;
  const events = itinerary.events;

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const totalScrollable = rect.height - window.innerHeight;
      const currentScroll = -rect.top;
      const e = Math.max(0, Math.min(1, currentScroll / Math.max(1, totalScrollable)));
      setProgress(e);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const n = events.length;
  const translateX = -progress * (n - 1) * 100;
  const barScale = 0.08 + 0.92 * progress;

  return (
    <section
      ref={containerRef}
      id="evening"
      className="relative bg-wine"
      style={{ height: `${n * 100}vh` }}
    >
      <div className="sticky top-0 h-screen h-[100svh] overflow-hidden">
        {/* Floating section label */}
        <p className="absolute left-[clamp(20px,6vw,30px)] top-[calc(26px+env(safe-area-inset-top))] z-20 font-pinyon text-[30px] leading-none text-rose">
          {itinerary.sectionLabel}
        </p>

        {/* Horizontal track of scenes */}
        <div
          className="flex h-full [will-change:transform]"
          style={{
            transform: `translate3d(${translateX}vw, 0, 0)`,
          }}
        >
          {events.map((item, idx) => (
            <article
              key={idx}
              className={`flex-none w-screen h-full flex flex-col justify-end px-[clamp(20px,6vw,30px)] pb-[22vh] relative overflow-hidden ${item.bg}`}
            >
              <span className="font-pinyon text-[40px] leading-none text-rose">
                {item.time}
              </span>
              <h3 className="mt-2.5 max-w-full font-gloock font-normal text-[clamp(54px,15.5vw,82px)] leading-[0.9] tracking-[-0.02em] break-words text-ivory">
                {item.title}
              </h3>
              <p className="mt-[18px] max-w-[24ch] text-[17px] opacity-80 text-ivory">
                {item.desc}
              </p>
            </article>
          ))}
        </div>

        {/* Progress indicator line */}
        <div
          className="absolute left-[clamp(20px,6vw,30px)] right-[clamp(20px,6vw,30px)] bottom-[calc(30px+env(safe-area-inset-bottom))] h-[2px] bg-[rgba(247,236,232,0.2)]"
          aria-hidden="true"
        >
          <div
            className="h-full bg-ivory origin-left transition-transform duration-75"
            style={{ transform: `scaleX(${barScale})` }}
          />
        </div>
      </div>
    </section>
  );
}

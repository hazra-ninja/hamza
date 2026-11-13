import React, { useEffect, useRef, useState } from 'react';
import { invitationData } from '../data/invitationData';

export default function DressCode() {
  const listRef = useRef(null);
  const [growthProgress, setGrowthProgress] = useState(0);

  const { dressCode } = invitationData;
  const shades = dressCode.shades;

  useEffect(() => {
    const handleScroll = () => {
      if (!listRef.current) return;
      const rect = listRef.current.getBoundingClientRect();
      const k = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / (window.innerHeight * 0.75)));
      setGrowthProgress(k);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="dress" className="relative py-[clamp(96px,26vw,140px)] bg-wine text-ivory">
      <div className="max-w-col mx-auto px-6 text-center">
        <p className="mb-4 font-pinyon text-[30px] leading-none opacity-85">
          {dressCode.sectionLabel}
        </p>
        <h2 className="mb-8 font-gloock font-normal text-[clamp(46px,13.5vw,60px)] leading-[0.95] tracking-[-0.01em] whitespace-pre-line">
          {dressCode.title}
        </h2>

        {/* Lipstick color columns */}
        <ul
          ref={listRef}
          className="grid grid-cols-6 gap-2 items-end h-[240px] list-none m-0 p-0"
        >
          {shades.map((shade) => {
            const heightPercent = growthProgress * (88 - shade.k * 8);
            return (
              <li
                key={shade.name}
                className="flex flex-col justify-end h-full gap-2.5 items-center"
              >
                <i
                  className="block w-full transition-[height] duration-[900ms] [transition-timing-function:cubic-bezier(0.2,0.8,0.2,1)]"
                  style={{
                    height: `${heightPercent}%`,
                    backgroundColor: shade.color,
                    borderRadius: '999px 999px 6px 6px',
                    transitionDelay: `${shade.k * 60}ms`,
                  }}
                />
                <span className="text-[11px] tracking-[0.02em] opacity-80 select-none">
                  {shade.name}
                </span>
              </li>
            );
          })}
        </ul>

        {/* Lookbook duo */}
        <div className="grid grid-cols-[1.15fr_0.85fr] gap-3 mt-12 items-start text-center">
          <figure className="m-0">
            <img
              src={dressCode.looks.herImage}
              alt={dressCode.looks.herCaption}
              loading="lazy"
              className="block w-full aspect-[3/4.3] object-cover rounded-t-full"
            />
            <figcaption className="mt-3 text-[13px] opacity-80">
              {dressCode.looks.herCaption}
            </figcaption>
          </figure>

          <figure className="m-0 mt-[60px]">
            <img
              src={dressCode.looks.himImage}
              alt={dressCode.looks.himCaption}
              loading="lazy"
              className="block w-full aspect-[3/4.3] object-cover rounded-t-full"
            />
            <figcaption className="mt-3 text-[13px] opacity-80">
              {dressCode.looks.himCaption}
            </figcaption>
          </figure>
        </div>

        <p className="mt-9 font-pinyon text-[28px] leading-[1.1] text-rose">
          {dressCode.adviceNote}
        </p>
      </div>
    </section>
  );
}

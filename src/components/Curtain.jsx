import React, { useEffect, useRef, useState } from 'react';
import { invitationData } from '../data/invitationData';

export default function Curtain({ guestName }) {
  const containerRef = useRef(null);
  const [progress, setProgress] = useState(0);

  const { curtain, media, couple } = invitationData;

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const totalScrollable = rect.height - window.innerHeight;
      const currentScroll = -rect.top;
      const p = Math.max(0, Math.min(1, currentScroll / Math.max(1, totalScrollable)));
      setProgress(p);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const p = progress;
  const stageOpacity = 0.15 + p * 1.3;
  const stageScale = 1.06 - p * 0.06;
  const leftTransform = `translateX(${p * -96}%) skewY(${p * 3}deg)`;
  const rightTransform = `translateX(${p * 96}%) skewY(${p * -3}deg)`;
  const hintOpacity = Math.max(0, 1 - p * 4);

  const salutation = guestName
    ? curtain.personalizedSalutation(guestName)
    : curtain.defaultSalutation;

  return (
    <section
      ref={containerRef}
      id="curtain"
      className="relative h-[240vh] bg-ox"
    >
      <div className="sticky top-0 h-screen h-[100svh] overflow-hidden">
        {/* Letter behind the velvet */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center transition-transform duration-75"
          style={{
            opacity: stageOpacity,
            transform: `scale(${stageScale})`,
          }}
        >
          {couple.bismillah && (
            <p className="mb-2 text-[20px] md:text-[24px] text-rose font-medium select-none" dir="rtl">
              {couple.bismillah}
            </p>
          )}
          <p className="mb-4 font-pinyon text-[30px] leading-none opacity-85 text-ivory">
            {curtain.sectionLabel}
          </p>
          <p className="mb-4 font-familjen text-[16px] opacity-80">
            {salutation}
          </p>
          <p className="max-w-[13ch] mx-auto font-gloock font-normal text-[clamp(36px,10.4vw,48px)] leading-[1.04]">
            {curtain.letterBody}
          </p>
          <p className="mt-6 font-pinyon text-[38px] leading-none text-rose">
            {curtain.signature}
          </p>
        </div>

        {/* Left velvet curtain half */}
        <div
          className="absolute -top-[2%] -bottom-[2%] left-0 w-[52%] bg-[#5a0712] bg-cover bg-center [will-change:transform] shadow-[0_0_60px_rgba(0,0,0,0.6)]"
          style={{
            backgroundImage: `url('${media.velvetBg}')`,
            transformOrigin: '0 0',
            transform: leftTransform,
          }}
          aria-hidden="true"
        />

        {/* Right velvet curtain half */}
        <div
          className="absolute -top-[2%] -bottom-[2%] right-0 w-[52%] bg-[#5a0712] bg-cover bg-right [will-change:transform] shadow-[0_0_60px_rgba(0,0,0,0.6)]"
          style={{
            backgroundImage: `url('${media.velvetBg}')`,
            transformOrigin: '100% 0',
            transform: rightTransform,
          }}
          aria-hidden="true"
        />

        {/* Scroll hint */}
        <p
          className="absolute left-0 right-0 bottom-[calc(30px+env(safe-area-inset-bottom))] m-0 text-center font-pinyon text-[26px] text-rose pointer-events-none transition-opacity"
          style={{ opacity: hintOpacity }}
          aria-hidden="true"
        >
          {curtain.scrollHint}
        </p>
      </div>
    </section>
  );
}

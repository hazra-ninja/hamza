import React, { useEffect, useState } from 'react';
import { invitationData } from '../data/invitationData';

export default function FloatingDock({ isRSVPSent }) {
  const [isVisible, setIsVisible] = useState(false);
  const { cover } = invitationData;

  useEffect(() => {
    let rsvpInView = false;

    const rsvpEl = document.getElementById('rsvp');
    let observer;
    if (rsvpEl && 'IntersectionObserver' in window) {
      observer = new IntersectionObserver(
        ([entry]) => {
          rsvpInView = entry.isIntersecting;
          syncVisibility();
        },
        { threshold: 0.05 }
      );
      observer.observe(rsvpEl);
    }

    const syncVisibility = () => {
      const pastHero = window.scrollY > window.innerHeight * 0.85;
      setIsVisible(pastHero && !rsvpInView && !isRSVPSent);
    };

    window.addEventListener('scroll', syncVisibility, { passive: true });
    syncVisibility();

    return () => {
      window.removeEventListener('scroll', syncVisibility);
      if (observer && rsvpEl) observer.unobserve(rsvpEl);
    };
  }, [isRSVPSent]);

  return (
    <div
      className={`fixed left-0 right-0 bottom-0 z-30 px-[18px] pt-3 pb-[calc(12px+env(safe-area-inset-bottom))] transition-transform duration-400 ease-in-out pointer-events-none ${
        isVisible ? 'translate-y-0' : 'translate-y-[130%]'
      }`}
    >
      <a
        href="#rsvp"
        className="pointer-events-auto flex items-center justify-center w-full max-w-col mx-auto min-h-[52px] rounded-full bg-car text-ivory font-familjen font-medium text-[14px] tracking-[0.02em] no-underline shadow-[0_14px_30px_-14px_rgba(0,0,0,0.6)] hover:bg-opacity-90 transition-all"
      >
        {cover.replyButtonText}
      </a>
    </div>
  );
}

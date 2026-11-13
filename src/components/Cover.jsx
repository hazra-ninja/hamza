import React from 'react';
import { invitationData } from '../data/invitationData';

export default function Cover({
  guestName,
  isGone,
  isWaiting,
  onOpen,
  onSkip,
}) {
  if (isGone) return null;

  const { cover } = invitationData;

  const headingText = guestName
    ? cover.personalizedTitle(guestName)
    : cover.defaultTitle;

  return (
    <div
      className={`fixed inset-0 z-50 transition-opacity duration-700 ${
        isGone ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Tap area to untie the ribbon */}
      <button
        onClick={onOpen}
        type="button"
        aria-label="Untie the ribbon and open the invitation"
        className="absolute inset-0 w-full h-full border-0 bg-transparent cursor-pointer [-webkit-tap-highlight-color:transparent]"
      />

      {/* Top text */}
      <div
        className={`absolute left-0 right-0 top-[calc(7vh+env(safe-area-inset-top))] text-center pointer-events-none text-wine transition-opacity duration-400 ${
          isWaiting ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <p className="m-0 font-gloock text-[clamp(30px,8.6vw,40px)] leading-none text-wine">
          {headingText}
        </p>
        <p className="mt-2.5 font-pinyon text-[26px] leading-none text-wine animate-breathe">
          {cover.hint}
        </p>
      </div>

      {/* Skip button */}
      <button
        onClick={onSkip}
        type="button"
        className="absolute left-2.5 top-[calc(10px+env(safe-area-inset-top))] border-0 bg-transparent p-3 font-familjen text-[13px] text-wine opacity-75 hover:opacity-100 cursor-pointer"
      >
        {cover.skipButtonText}
      </button>
    </div>
  );
}

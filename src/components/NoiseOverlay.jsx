import React, { useEffect, useRef } from 'react';

export default function NoiseOverlay({ alpha = 12 }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    const SIZE = 1024;
    canvas.width = SIZE;
    canvas.height = SIZE;

    const frames = [];
    for (let f = 0; f < 6; f++) {
      const img = ctx.createImageData(SIZE, SIZE);
      const d = img.data;
      for (let i = 0; i < d.length; i += 4) {
        const v = Math.random() * 255;
        d[i] = v;
        d[i + 1] = v;
        d[i + 2] = v;
        d[i + 3] = alpha;
      }
      frames.push(img);
    }

    ctx.putImageData(frames[0], 0, 0);

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    let frame = 0;
    let k = 0;
    let animId;

    const loop = () => {
      if (frame % 2 === 0) {
        k = (k + 1) % 6;
        ctx.putImageData(frames[k], 0, 0);
      }
      frame++;
      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(animId);
    };
  }, [alpha]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-screen h-screen z-[110] pointer-events-none [image-rendering:pixelated]"
      aria-hidden="true"
    />
  );
}


import { useEffect, useRef, useState } from 'react';
import Ghost from './Ghost';

/** The cream Kiro ghost palette, used everywhere regardless of background. */
const GHOST_PALETTE = {
  bodyFill: '#F5F1E8',
  strokeColor: '#0B0A0F',
  cheekFill: '#C4B5FD',
  eyeFill: '#0B0A0F',
  highlightFill: '#F5F1E8',
};

/**
 * A subtle desktop-only custom cursor. A small Kiro ghost tracks the real
 * cursor directly and grows when hovering interactive elements (links,
 * buttons, [data-cursor="hover"]).
 *
 * Disabled entirely on touch / small-screen devices.
 */
export default function CustomCursor() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    // Only enable on devices with a fine pointer (desktop with mouse)
    if (!window.matchMedia('(pointer: fine)').matches) return;
    setEnabled(true);

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      const target = e.target as Element | null;
      const interactive = !!target?.closest(
        'a, button, [role="button"], [data-cursor="hover"]',
      );
      setHovering(interactive);
    };

    const loop = () => {
      // Track the real cursor directly, no trailing lag.
      if (wrapperRef.current) {
        wrapperRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener('mousemove', onMove);
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] hidden md:block">
      {/* position layer — moved directly via rAF, never fights the scale transition below */}
      <div
        ref={wrapperRef}
        className="absolute left-0 top-0 -ml-6 -mt-7"
        style={{ willChange: 'transform' }}
      >
        {/* scale layer — CSS-transitioned hover grow, independent of position */}
        <div
          className={`h-14 w-12 transition-transform duration-150 ease-out ${
            hovering ? 'scale-125' : 'scale-100'
          }`}
        >
          <Ghost className="h-full w-full" {...GHOST_PALETTE} />
        </div>
      </div>
    </div>
  );
}

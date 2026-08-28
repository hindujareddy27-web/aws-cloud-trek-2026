import { useEffect, useRef, useState } from 'react';

/**
 * A subtle desktop-only custom cursor. A small purple dot follows the real
 * cursor with a slight trailing lag, and grows when hovering interactive
 * elements (links, buttons, images with [data-cursor] attributes).
 *
 * Disabled entirely on touch / small-screen devices.
 */
export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    // Only enable on devices with a fine pointer (desktop with mouse)
    if (!window.matchMedia('(pointer: fine)').matches) return;
    setEnabled(true);

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
      }
      const target = e.target as Element | null;
      const interactive = !!target?.closest(
        'a, button, [role="button"], [data-cursor="hover"]',
      );
      setHovering(interactive);
    };

    const loop = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX}px, ${ringY}px)`;
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
      {/* trailing ring */}
      <div
        ref={ringRef}
        className="absolute left-0 top-0 -ml-4 -mt-4 h-8 w-8 rounded-full border-[2px] border-e-purple transition-[width,height,opacity] duration-200"
        style={{ willChange: 'transform' }}
      />
      {/* center dot */}
      <div
        ref={dotRef}
        className={`absolute left-0 top-0 -ml-1 -mt-1 h-2 w-2 rounded-full bg-ink transition-[width,height,background-color] duration-150 ${
          hovering ? 'h-5 w-5 -ml-2.5 -mt-2.5 bg-e-purple' : ''
        }`}
        style={{ willChange: 'transform' }}
      />
    </div>
  );
}

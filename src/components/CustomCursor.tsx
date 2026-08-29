import { useEffect, useRef, useState } from 'react';
import Ghost from './Ghost';

/** Ghost palette used over light (cream) backgrounds — a solid dark ghost. */
const DARK_GHOST = {
  bodyFill: '#0B0A0F',
  strokeColor: '#F5F1E8',
  cheekFill: '#8B5CF6',
  eyeFill: '#F5F1E8',
  highlightFill: '#0B0A0F',
};

/** Ghost palette used over dark (ink) backgrounds — the default cream ghost. */
const LIGHT_GHOST = {
  bodyFill: '#F5F1E8',
  strokeColor: '#0B0A0F',
  cheekFill: '#C4B5FD',
  eyeFill: '#0B0A0F',
  highlightFill: '#F5F1E8',
};

/** Walks up from the point under the cursor to find the nearest opaque
 *  background color, then reports whether it reads as light or dark. */
function isBackgroundLight(x: number, y: number): boolean {
  let node = document.elementFromPoint(x, y);
  while (node) {
    const bg = window.getComputedStyle(node).backgroundColor;
    const match = bg.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/);
    if (match) {
      const alpha = match[4] === undefined ? 1 : parseFloat(match[4]);
      if (alpha > 0.4) {
        const [r, g, b] = [match[1], match[2], match[3]].map(Number);
        const luminance = (r * 299 + g * 587 + b * 114) / 1000;
        return luminance > 128;
      }
    }
    node = node.parentElement;
  }
  return true;
}

/**
 * A subtle desktop-only custom cursor. A small Kiro ghost follows the real
 * cursor with a smooth trailing lag, grows when hovering interactive
 * elements (links, buttons, [data-cursor="hover"]), and swaps to a solid
 * dark palette whenever it's over a light background so it stays visible.
 *
 * Disabled entirely on touch / small-screen devices.
 */
export default function CustomCursor() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [onLight, setOnLight] = useState(true);

  useEffect(() => {
    // Only enable on devices with a fine pointer (desktop with mouse)
    if (!window.matchMedia('(pointer: fine)').matches) return;
    setEnabled(true);

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ghostX = mouseX;
    let ghostY = mouseY;
    let raf = 0;
    let frame = 0;

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
      // Smooth, GPU-accelerated trailing motion toward the real cursor.
      ghostX += (mouseX - ghostX) * 0.25;
      ghostY += (mouseY - ghostY) * 0.25;
      if (wrapperRef.current) {
        wrapperRef.current.style.transform = `translate3d(${ghostX}px, ${ghostY}px, 0)`;
      }
      // Sample the background a few times a second — plenty responsive,
      // far cheaper than checking on every frame.
      frame++;
      if (frame % 4 === 0) {
        setOnLight(isBackgroundLight(ghostX, ghostY));
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

  const palette = onLight ? DARK_GHOST : LIGHT_GHOST;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] hidden md:block">
      {/* position layer — moved directly via rAF, never fights the scale transition below */}
      <div
        ref={wrapperRef}
        className="absolute left-0 top-0 -ml-4.5 -mt-5"
        style={{ willChange: 'transform' }}
      >
        {/* scale layer — CSS-transitioned hover grow, independent of position */}
        <div
          className={`h-10 w-9 transition-transform duration-150 ease-out ${
            hovering ? 'scale-125' : 'scale-100'
          }`}
        >
          <Ghost className="h-full w-full" {...palette} />
        </div>
      </div>
    </div>
  );
}

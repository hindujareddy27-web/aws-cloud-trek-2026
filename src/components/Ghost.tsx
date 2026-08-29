import { useRef, useEffect, type RefObject } from 'react';

type GhostProps = {
  className?: string;
  /** When provided, the ghost's eyes subtly follow the cursor. */
  eyeTargetRef?: RefObject<HTMLElement | null>;
  /** When true, the ghost performs a wink on mount (after entrance). */
  wink?: boolean;
  /** Body fill color. Defaults to cream. */
  bodyFill?: string;
  /** Outline / mouth stroke color. Defaults to ink. */
  strokeColor?: string;
  /** Cheek blush color. Defaults to lavender. */
  cheekFill?: string;
  /** Eye (pupil) fill color. Defaults to ink. */
  eyeFill?: string;
  /** Eye highlight dot color. Defaults to cream. */
  highlightFill?: string;
};

export default function Ghost({
  className = '',
  eyeTargetRef,
  wink = false,
  bodyFill = '#F5F1E8',
  strokeColor = '#0B0A0F',
  cheekFill = '#C4B5FD',
  eyeFill = '#0B0A0F',
  highlightFill = '#F5F1E8',
}: GhostProps) {
  const leftPupilRef = useRef<SVGGElement>(null);
  const rightPupilRef = useRef<SVGGElement>(null);
  const leftHighlightRef = useRef<SVGCircleElement>(null);
  const rightHighlightRef = useRef<SVGCircleElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    // Skip eye tracking on touch / small screens
    if (window.matchMedia('(hover: none)').matches) return;

    let raf = 0;
    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const eyes = [
          { pupil: leftPupilRef.current, hl: leftHighlightRef.current },
          { pupil: rightPupilRef.current, hl: rightHighlightRef.current },
        ];
        const target = eyeTargetRef?.current;
        if (!target) return;
        const rect = target.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = e.clientX - cx;
        const dy = e.clientY - cy;
        const dist = Math.hypot(dx, dy);
        const maxShift = 3.5;
        const scale = Math.min(1, dist / 200) * maxShift;
        const angle = Math.atan2(dy, dx);
        const ox = Math.cos(angle) * scale;
        const oy = Math.sin(angle) * scale;
        for (const eye of eyes) {
          if (eye.pupil) eye.pupil.setAttribute('transform', `translate(${ox} ${oy})`);
          if (eye.hl) eye.hl.setAttribute('transform', `translate(${ox} ${oy})`);
        }
      });
    };

    window.addEventListener('mousemove', onMove);
    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    };
  }, [eyeTargetRef]);

  return (
    <svg
      viewBox="0 0 200 220"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* body */}
      <path
        d="M100 10
           C 55 10, 28 46, 28 96
           L 28 196
           L 46 178
           L 64 196
           L 82 178
           L 100 196
           L 118 178
           L 136 196
           L 154 178
           L 172 196
           L 172 96
           C 172 46, 145 10, 100 10 Z"
        style={{ fill: bodyFill, stroke: strokeColor, transition: 'fill 200ms ease-out, stroke 200ms ease-out' }}
        strokeWidth="6"
        strokeLinejoin="round"
      />
      {/* cheeks */}
      <circle cx="66" cy="108" r="9" style={{ fill: cheekFill, transition: 'fill 200ms ease-out' }} />
      <circle cx="134" cy="108" r="9" style={{ fill: cheekFill, transition: 'fill 200ms ease-out' }} />
      {/* left eye group */}
      <g ref={leftPupilRef}>
        <ellipse cx="78" cy="92" rx="9" ry="11" style={{ fill: eyeFill, transition: 'fill 200ms ease-out' }} />
        <circle ref={leftHighlightRef} cx="81" cy="88" r="3" style={{ fill: highlightFill, transition: 'fill 200ms ease-out' }} />
      </g>
      {/* right eye group — winks on entrance when enabled */}
      <g ref={rightPupilRef} className={wink ? 'origin-center animate-wink' : ''} style={{ transformBox: 'fill-box', transformOrigin: 'center' }}>
        <ellipse cx="122" cy="92" rx="9" ry="11" style={{ fill: eyeFill, transition: 'fill 200ms ease-out' }} />
        <circle ref={rightHighlightRef} cx="125" cy="88" r="3" style={{ fill: highlightFill, transition: 'fill 200ms ease-out' }} />
      </g>
      {/* mouth */}
      <path
        d="M88 118 Q 100 132 112 118"
        fill="none"
        style={{ stroke: strokeColor, transition: 'stroke 200ms ease-out' }}
        strokeWidth="5"
        strokeLinecap="round"
      />
    </svg>
  );
}

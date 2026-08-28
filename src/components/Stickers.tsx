import type { SVGProps } from 'react';

export function StarSticker(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 100 100" fill="none" {...props}>
      <path
        d="M50 4 L61 38 L97 38 L68 60 L79 95 L50 73 L21 95 L32 60 L3 38 L39 38 Z"
        fill="#8B5CF6"
        stroke="#0B0A0F"
        strokeWidth="5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CircleSticker(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 100 100" fill="none" {...props}>
      <circle cx="50" cy="50" r="42" fill="#A855F7" stroke="#0B0A0F" strokeWidth="5" />
      <circle cx="50" cy="50" r="14" fill="#F5F1E8" stroke="#0B0A0F" strokeWidth="4" />
    </svg>
  );
}

export function TriangleSticker(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 100 100" fill="none" {...props}>
      <path d="M50 8 L92 86 L8 86 Z" fill="#C4B5FD" stroke="#0B0A0F" strokeWidth="5" strokeLinejoin="round" />
    </svg>
  );
}

export function CloudSticker(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 120 80" fill="none" {...props}>
      <path
        d="M30 60 a20 20 0 0 1 6 -39 a24 24 0 0 1 45 6 a18 18 0 0 1 -3 33 Z"
        fill="#F5F1E8"
        stroke="#0B0A0F"
        strokeWidth="5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ArrowSticker(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 100 100" fill="none" {...props}>
      <path
        d="M10 50 H 72 M72 50 L 56 34 M72 50 L 56 66"
        stroke="#0B0A0F"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

export function SquiggleSticker(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 120 40" fill="none" {...props}>
      <path
        d="M6 20 Q 21 4 36 20 T 66 20 T 96 20 T 114 20"
        stroke="#8B5CF6"
        strokeWidth="7"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

export function DotsSticker(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 100 100" fill="none" {...props}>
      {[20, 50, 80].map((y) =>
        [20, 50, 80].map((x) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r="7" fill="#0B0A0F" />
        )),
      )}
    </svg>
  );
}

export function BurstSticker(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 100 100" fill="none" {...props}>
      <path
        d="M50 2 L57 22 L78 10 L70 32 L92 30 L72 44 L96 54 L72 58 L88 78 L66 70 L70 92 L54 74 L50 98 L46 74 L30 92 L34 70 L12 78 L28 58 L4 54 L28 44 L8 30 L30 32 L22 10 L43 22 Z"
        fill="#8B5CF6"
        stroke="#0B0A0F"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <circle cx="50" cy="50" r="12" fill="#F5F1E8" stroke="#0B0A0F" strokeWidth="4" />
    </svg>
  );
}

import { useEffect, useRef, useState } from 'react';
import Ghost from './Ghost';
import RegisterButton from './RegisterButton';
import { useRegisterHover } from './RegisterHoverContext';
import { StarSticker, CircleSticker, TriangleSticker, CloudSticker, ArrowSticker, BurstSticker } from './Stickers';
import { EVENT, BRANDING } from '@/config';

export default function Hero() {
  const { registerHovered } = useRegisterHover();
  const ghostRef = useRef<HTMLDivElement>(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [entered, setEntered] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    // Ghost entrance ~1.1s, then content fades in
    const t1 = setTimeout(() => setEntered(true), 1200);
    const t2 = setTimeout(() => setContentVisible(true), 900);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const el = ghostRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / window.innerWidth;
      const dy = (e.clientY - cy) / window.innerHeight;
      setCursor({ x: dx, y: dy });
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  const ghostTilt = cursor.x * 10;
  const ghostShiftX = cursor.x * 14;
  const ghostShiftY = cursor.y * 8;
  const ghostLookRight = registerHovered ? 12 : ghostShiftX;

  return (
    <section id="top" className="relative overflow-hidden bg-cream px-3 pb-10 pt-4 md:px-6 md:pb-16 md:pt-8">
      {/* dotted backdrop */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: 'radial-gradient(#0B0A0F 2px, transparent 2px)',
          backgroundSize: '28px 28px',
        }}
      />

      <div className="relative mx-auto max-w-6xl">
        {/* black framed composition */}
        <div className="relative border-[4px] border-ink bg-cream p-4 shadow-hard-lg md:p-8">
          {/* top metadata bar — SCOPE logo + event info */}
          <div className="flex flex-wrap items-center justify-between gap-2 border-b-[3px] border-ink pb-3">
            <div className="flex items-center gap-2">
              <img
                src={BRANDING.scopeLogo}
                alt="SCOPE Club MLRIT logo"
                className="h-8 w-auto border-[2px] border-ink bg-cream object-contain p-0.5 md:h-10"
              />
              <span className="border-[2px] border-ink bg-ink px-2 py-0.5 font-sans text-[9px] font-bold uppercase tracking-[0.15em] text-cream md:text-xs">
                {BRANDING.scope}
              </span>
            </div>
            <span className="font-sans text-[9px] font-bold uppercase tracking-[0.15em] text-ink md:text-sm">
              {EVENT.date} · {EVENT.level}
            </span>
          </div>

          {/* main composition */}
          <div className="relative mt-5 grid grid-cols-1 gap-3 md:mt-8 md:grid-cols-12 md:gap-4">
            {/* left: headline + content (appears after ghost) */}
            <div className={`relative md:col-span-8 transition-all duration-700 ${contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              <h1 className="font-display uppercase leading-[0.82] tracking-tighter text-ink">
                <span className="block text-[clamp(3rem,15vw,11rem)]">AWS</span>
                <span className="block text-[clamp(3rem,15vw,11rem)]">
                  CLOUD
                </span>
                <span className="block text-[clamp(3rem,15vw,11rem)] text-e-purple">
                  TREK
                </span>
              </h1>

              <div className="mt-4 flex flex-col gap-2 md:mt-6 md:gap-3">
                <div className="flex items-center gap-3">
                  <span className="inline-block h-3 w-3 border-[3px] border-ink bg-e-purple md:h-4 md:w-4" />
                  <p className="font-display text-base uppercase tracking-tight text-ink md:text-3xl">
                    Build with Kiro.
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="inline-block h-3 w-3 border-[3px] border-ink bg-ink md:h-4 md:w-4" />
                  <p className="font-display text-base uppercase tracking-tight text-ink md:text-3xl">
                    Deploy on AWS.
                  </p>
                </div>
              </div>

              {/* buttons */}
              <div className="mt-5 flex flex-col gap-3 sm:flex-row md:mt-10 md:gap-4">
                <RegisterButton size="lg" href={EVENT.registrationUrl} className="w-full sm:w-auto" />
                <a
                  href="#trek"
                  className="group inline-flex w-full items-center justify-center gap-2 border-[3px] border-ink bg-cream px-6 py-4 font-display text-base uppercase tracking-tight text-ink shadow-hard transition-all duration-150 hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-hard-sm active:translate-x-[6px] active:translate-y-[6px] active:shadow-none sm:w-auto md:px-9 md:text-2xl"
                >
                  GET TO KNOW THE TREK
                  <span className="transition-transform duration-150 group-hover:translate-y-1">↓</span>
                </a>
              </div>
            </div>

            {/* right: ghost + stickers — ghost appears FIRST */}
            <div className="relative md:col-span-4">
              <div className="relative mx-auto flex min-h-[200px] items-center justify-center md:min-h-[400px]">
                {/* stickers — appear after ghost */}
                <div className={`absolute inset-0 transition-opacity duration-500 ${contentVisible ? 'opacity-100' : 'opacity-0'}`}>
                  <StarSticker className="absolute left-0 top-2 h-10 w-10 md:h-16 md:w-16" />
                  <CircleSticker className="absolute right-2 top-6 h-8 w-8 md:h-14 md:w-14" />
                  <TriangleSticker className="absolute bottom-4 left-4 h-10 w-10 animate-wobble md:h-16 md:w-16" />
                  <CloudSticker className="absolute right-0 bottom-8 h-10 w-16 animate-floatY opacity-90 md:h-14 md:w-20" />
                  <BurstSticker className="absolute left-6 top-1/2 h-6 w-6 animate-spinSlow opacity-80 md:h-8 md:w-8" />
                  <ArrowSticker className="absolute right-4 top-1/2 h-6 w-6 -rotate-45 md:h-8 md:w-8" />
                </div>

                {/* ghost — entrance animation plays first, then idle float */}
                <div
                  ref={ghostRef}
                  className="relative z-10"
                  style={{
                    transform: entered
                      ? `translate(${ghostLookRight}px, ${ghostShiftY}px) rotate(${ghostTilt}deg)`
                      : undefined,
                    transition: 'transform 0.3s ease-out',
                  }}
                >
                  <div className="animate-ghostEntrance">
                    <div className="animate-floatY [animation-delay:1.1s]">
                      <Ghost
                        className="h-32 w-28 drop-shadow-[6px_6px_0_#0B0A0F] md:h-56 md:w-52"
                        eyeTargetRef={ghostRef}
                        wink
                      />
                    </div>
                  </div>
                  {/* speech bubble — appears after ghost settles */}
                  <div className={`absolute -right-2 -top-2 rotate-6 border-[3px] border-ink bg-e-purple px-2 py-1 font-sans text-[10px] font-bold uppercase text-ink shadow-hard-sm transition-opacity duration-500 md:-right-8 md:text-xs ${contentVisible ? 'opacity-100' : 'opacity-0'}`}>
                    hi!
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* bottom strip */}
          <div className={`mt-5 flex flex-wrap items-center justify-between gap-3 border-t-[3px] border-ink pt-3 transition-opacity duration-700 md:mt-8 ${contentVisible ? 'opacity-100' : 'opacity-0'}`}>
            <span className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-ink md:text-sm">
              {EVENT.focus}
            </span>
            <span className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-ink md:text-sm">
              Scroll to explore ↓
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

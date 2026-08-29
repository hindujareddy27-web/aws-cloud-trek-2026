import Ghost from './Ghost';
import { BurstSticker, StarSticker, CircleSticker, ArrowSticker } from './Stickers';
import { EVENT, BRANDING } from '@/config';
import { useInView } from '@/hooks/useInView';

export default function FinalCta() {
  const { ref: ghostRef, inView } = useInView<HTMLDivElement>();

  return (
    <section id="register" className="relative bg-ink px-3 py-14 md:px-6 md:py-20">
      <div className="relative mx-auto max-w-6xl">
        {/* Final CTA block */}
        <div className="relative overflow-hidden border-[4px] border-cream bg-e-purple p-6 shadow-[10px_10px_0_#F5F1E8] md:p-16">
          {/* stickers */}
          <BurstSticker className="absolute -left-3 -top-3 h-12 w-12 animate-spinSlow opacity-90 md:-left-4 md:-top-4 md:h-24 md:w-24" />
          <StarSticker className="absolute right-6 top-8 h-8 w-8 animate-wobble md:h-16 md:w-16" />
          <CircleSticker className="absolute bottom-6 left-8 h-10 w-10 animate-floatY opacity-80 md:h-16 md:w-16" />
          <ArrowSticker className="absolute right-10 bottom-10 h-8 w-8 rotate-90 opacity-70 md:h-14 md:w-14" />

          {/* ghost returns — floats up on scroll, bounces playfully */}
          <div ref={ghostRef} className="group absolute right-2 top-1/2 hidden -translate-y-1/2 md:block">
            <div className={`transition-all duration-500 ${inView ? 'animate-ghostPeek' : 'opacity-0 translate-y-8'} group-hover:scale-110 group-hover:rotate-6`}>
              <div className="animate-ghostBounce">
                <Ghost className="h-32 w-28 drop-shadow-[4px_4px_0_#0B0A0F]" />
              </div>
            </div>
          </div>

          <div className="relative text-center">
            <span className="inline-block border-[3px] border-ink bg-cream px-4 py-1 font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-ink md:text-xs">
              Final call
            </span>
            <h2 className="mt-5 font-display text-[clamp(3rem,14vw,10rem)] uppercase leading-[0.8] tracking-tighter text-ink">
              Ready to Build?
            </h2>
            <p className="mt-4 font-display text-base uppercase tracking-tight text-ink md:text-2xl">
              {EVENT.tagline}
            </p>

            <div className="mt-8 flex justify-center">
              <a
                href={EVENT.registrationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 border-[3px] border-ink bg-ink px-9 py-4 font-display text-xl uppercase tracking-tight text-cream shadow-hard transition-all duration-150 hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-hard-sm active:translate-x-[6px] active:translate-y-[6px] active:shadow-none md:text-2xl"
              >
                REGISTER NOW
                <span className="transition-transform duration-150 group-hover:translate-x-1">→</span>
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mx-auto mt-10 max-w-6xl md:mt-14">
          {/* Dual Organizations Logo Row — Clean horizontal layout: Left: SCOPE, Right: AWS SBG */}
          <div className="flex flex-col items-center justify-between gap-6 border-y-[3px] border-cream/30 py-8 sm:flex-row sm:items-center md:py-10">
            {/* LEFT SIDE: SCOPE — MLRIT logo */}
            <div className="flex w-full items-center justify-center sm:w-auto sm:justify-start">
              <img
                src={BRANDING.scopeLogo}
                alt="SCOPE — MLRIT logo"
                className="h-10 w-auto max-w-[200px] object-contain sm:h-12 sm:max-w-[240px] md:h-14 md:max-w-[280px] lg:h-16 lg:max-w-[320px]"
              />
            </div>

            {/* RIGHT SIDE: AWS Student Builder Group at MLRIT logo */}
            <div className="flex w-full items-center justify-center sm:w-auto sm:justify-end">
              <img
                src={BRANDING.awsSbgLogo}
                alt="AWS Student Builder Group at MLRIT logo"
                className="h-10 w-auto max-w-[200px] object-contain sm:h-12 sm:max-w-[240px] md:h-14 md:max-w-[280px] lg:h-16 lg:max-w-[320px]"
              />
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
}

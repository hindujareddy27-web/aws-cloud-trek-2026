import Ghost from './Ghost';
import { BurstSticker, StarSticker, CircleSticker, ArrowSticker } from './Stickers';
import { EVENT, BRANDING, CONTACT } from '@/config';
import { useInView } from '@/hooks/useInView';
import { Instagram, Linkedin, Mail, Phone } from 'lucide-react';

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
          {/* Branding row */}
          <div className="flex flex-col items-center gap-6 border-t-[3px] border-cream/30 pt-8 md:flex-row md:items-center md:justify-between md:pt-10">
            <div className="flex flex-col items-center gap-3 md:items-start">
              <p className="font-display text-lg uppercase tracking-tight text-cream md:text-2xl">
                {EVENT.name}
              </p>
              <p className="font-sans text-xs font-medium text-cream/60 md:text-sm">
                {EVENT.tagline} · {EVENT.date}
              </p>
              <div className="mt-2 flex items-center gap-2">
                <img
                  src={BRANDING.scopeLogo}
                  alt="SCOPE Club MLRIT logo"
                  className="h-10 w-auto border-[2px] border-cream/40 bg-cream object-contain p-0.5"
                />
                <span className="font-sans text-[10px] font-bold uppercase tracking-[0.15em] text-cream/80 md:text-xs">
                  {BRANDING.scope}
                </span>
              </div>
            </div>

            {/* AWS SBG logo */}
            <div className="flex flex-col items-center gap-3">
              <img
                src={BRANDING.awsSbgLogo}
                alt="AWS Student Builder Group at MLRIT logo"
                className="h-16 w-auto border-[2px] border-cream/40 bg-cream object-contain p-1 md:h-20"
              />
              <span className="font-sans text-[10px] font-bold uppercase tracking-[0.15em] text-cream/80 md:text-xs">
                AWS Student Builder Group at MLRIT
              </span>
            </div>

            {/* AWS logo */}
            <img
              src={BRANDING.awsLogo}
              alt="AWS logo"
              className="h-12 w-auto border-[2px] border-cream/40 bg-cream object-contain p-1 md:h-16"
            />
          </div>

          {/* Contact + Social links */}
          <div className="mt-8 flex flex-col gap-4 border-t-[3px] border-cream/30 pt-6 md:flex-row md:items-start md:justify-between">
            <div className="flex flex-col gap-2">
              <a href={`tel:${CONTACT.phone1.replace(/\s/g, '')}`} className="inline-flex items-center gap-2 font-sans text-xs font-bold text-cream/80 hover:text-cream md:text-sm">
                <Phone size={14} strokeWidth={2.5} />
                {CONTACT.phone1}
              </a>
              <a href={`tel:${CONTACT.phone2.replace(/\s/g, '')}`} className="inline-flex items-center gap-2 font-sans text-xs font-bold text-cream/80 hover:text-cream md:text-sm">
                <Phone size={14} strokeWidth={2.5} />
                {CONTACT.phone2}
              </a>
              <a href={`mailto:${CONTACT.email}`} className="inline-flex items-center gap-2 font-sans text-xs font-bold text-cream/80 hover:text-cream md:text-sm">
                <Mail size={14} strokeWidth={2.5} />
                {CONTACT.email}
              </a>
            </div>

            <div className="flex flex-col gap-2 md:items-end">
              <a href={CONTACT.awsSbgInstagram} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-sans text-xs font-bold text-cream/80 hover:text-cream md:text-sm">
                <Instagram size={14} strokeWidth={2.5} />
                @awssbg_mlrit
              </a>
              <a href={CONTACT.scopeInstagram} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-sans text-xs font-bold text-cream/80 hover:text-cream md:text-sm">
                <Instagram size={14} strokeWidth={2.5} />
                @mlrit_scope
              </a>
              <a href={CONTACT.awsSbgLinkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-sans text-xs font-bold text-cream/80 hover:text-cream md:text-sm">
                <Linkedin size={14} strokeWidth={2.5} />
                AWS SBG MLRIT
              </a>
              <a href={CONTACT.scopeLinkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-sans text-xs font-bold text-cream/80 hover:text-cream md:text-sm">
                <Linkedin size={14} strokeWidth={2.5} />
                SCOPE Club MLRIT
              </a>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
}

import { Instagram, Mail, Phone, Linkedin } from 'lucide-react';
import Ghost from './Ghost';
import { CloudSticker, StarSticker } from './Stickers';
import { CONTACT } from '@/config';
import { useInView } from '@/hooks/useInView';

export default function Contact() {
  const { ref: ghostRef, inView } = useInView<HTMLDivElement>();

  return (
    <section id="contact" className="relative bg-cream px-3 py-16 md:px-6 md:py-24">
      <CloudSticker className="absolute left-8 top-12 h-10 w-14 animate-floatY opacity-90 md:h-16 md:w-24" />
      <StarSticker className="absolute right-10 bottom-20 h-8 w-8 animate-wobble opacity-90 md:h-14 md:w-14" />

      <div className="relative mx-auto max-w-5xl">
        {/* GOT QUESTIONS? */}
        <div className="relative border-[4px] border-ink bg-cream p-6 shadow-hard-lg md:p-12">
          {/* ghost with speech bubble */}
          <div ref={ghostRef} className="group absolute -top-8 right-4 flex items-start gap-2 md:-top-14 md:right-8">
            <div className={`transition-all duration-500 ${inView ? 'animate-ghostPeek' : 'opacity-0 translate-y-8'} group-hover:rotate-6 group-hover:scale-105`}>
              <Ghost className="h-16 w-14 drop-shadow-[4px_4px_0_#0B0A0F] transition-transform duration-300 group-hover:-translate-y-1 md:h-28 md:w-24" />
            </div>
            <div className="mt-2 -rotate-6 border-[3px] border-ink bg-e-purple px-2 py-1 font-sans text-[10px] font-bold uppercase text-ink shadow-hard-sm md:text-sm">
              still here
            </div>
          </div>

          <div className="mt-8 md:mt-16">
            <span className="inline-block border-[3px] border-ink bg-ink px-4 py-1 font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-cream md:text-xs">
              Contact
            </span>
            <h2 className="mt-4 font-display text-[clamp(2.5rem,10vw,7rem)] uppercase leading-[0.82] tracking-tighter text-ink">
              Got Questions?
            </h2>

            {/* Call us + Email */}
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="border-[3px] border-ink bg-e-purple p-4 shadow-hard-sm">
                <h3 className="font-display text-lg uppercase tracking-tight text-ink md:text-xl">
                  Call Us
                </h3>
                <div className="mt-2 flex flex-col gap-2">
                  <a
                    href={`tel:${CONTACT.phone1.replace(/\s/g, '')}`}
                    className="inline-flex items-center gap-2 font-sans text-sm font-bold text-ink hover:underline md:text-base"
                  >
                    <Phone size={16} strokeWidth={2.5} />
                    {CONTACT.phone1}
                  </a>
                  <a
                    href={`tel:${CONTACT.phone2.replace(/\s/g, '')}`}
                    className="inline-flex items-center gap-2 font-sans text-sm font-bold text-ink hover:underline md:text-base"
                  >
                    <Phone size={16} strokeWidth={2.5} />
                    {CONTACT.phone2}
                  </a>
                </div>
              </div>

              <div className="border-[3px] border-ink bg-ink p-4 shadow-hard-sm">
                <h3 className="font-display text-lg uppercase tracking-tight text-cream md:text-xl">
                  Email
                </h3>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="mt-2 inline-flex items-center gap-2 font-sans text-sm font-bold text-cream break-all hover:underline md:text-base"
                >
                  <Mail size={16} strokeWidth={2.5} />
                  {CONTACT.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* FOLLOW US FOR MORE UPDATES */}
        <div className="relative mt-8 border-[4px] border-ink bg-ink p-6 shadow-hard-lg md:mt-10 md:p-10">
          <h2 className="text-center font-display text-[clamp(2rem,8vw,5rem)] uppercase leading-[0.85] tracking-tighter text-cream">
            Follow Us For
            <br />
            <span className="text-e-purple">More Updates</span>
          </h2>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {/* AWS SBG */}
            <div className="border-[3px] border-cream bg-cream p-4 shadow-[4px_4px_0_#F5F1E8]">
              <h3 className="font-display text-base uppercase tracking-tight text-ink md:text-lg">
                AWS SBG MLRIT
              </h3>
              <div className="mt-3 flex flex-col gap-2">
                <a
                  href={CONTACT.awsSbgInstagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-sans text-sm font-bold text-ink hover:text-e-purple md:text-base"
                >
                  <Instagram size={18} strokeWidth={2.5} />
                  @awssbg_mlrit
                </a>
                <a
                  href={CONTACT.awsSbgLinkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-sans text-sm font-bold text-ink hover:text-e-purple md:text-base"
                >
                  <Linkedin size={18} strokeWidth={2.5} />
                  AWS SBG MLRIT
                </a>
              </div>
            </div>

            {/* SCOPE */}
            <div className="border-[3px] border-cream bg-cream p-4 shadow-[4px_4px_0_#F5F1E8]">
              <h3 className="font-display text-base uppercase tracking-tight text-ink md:text-lg">
                SCOPE Club
              </h3>
              <div className="mt-3 flex flex-col gap-2">
                <a
                  href={CONTACT.scopeInstagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-sans text-sm font-bold text-ink hover:text-e-purple md:text-base"
                >
                  <Instagram size={18} strokeWidth={2.5} />
                  @mlrit_scope
                </a>
                <a
                  href={CONTACT.scopeLinkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-sans text-sm font-bold text-ink hover:text-e-purple md:text-base"
                >
                  <Linkedin size={18} strokeWidth={2.5} />
                  SCOPE Club MLRIT
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

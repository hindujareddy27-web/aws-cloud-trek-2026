import { useState } from 'react';
import { Plus } from 'lucide-react';
import Ghost from './Ghost';
import { StarSticker, DotsSticker } from './Stickers';
import { FAQ } from '@/config';
import { useInView } from '@/hooks/useInView';

export default function Faq() {
  const [open, setOpen] = useState<number | null>(null);
  const { ref: ghostRef, inView } = useInView<HTMLDivElement>();

  return (
    <section id="faq" className="relative bg-ink px-3 py-16 md:px-6 md:py-24">
      <DotsSticker className="absolute left-6 top-12 h-12 w-12 opacity-30 md:h-20 md:w-20" />
      <StarSticker className="absolute right-8 bottom-24 h-8 w-8 animate-wobble opacity-90 md:h-14 md:w-14" />

      <div className="relative mx-auto max-w-5xl">
        {/* heading */}
        <div className="flex flex-col items-center text-center">
          <span className="inline-block border-[3px] border-cream bg-e-purple px-4 py-1 font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-ink shadow-[4px_4px_0_#F5F1E8] md:text-xs">
            FAQ
          </span>
          <h2 className="mt-4 font-display text-[clamp(2rem,9vw,6rem)] uppercase leading-[0.85] tracking-tighter text-cream">
            You Asked.
          </h2>
          <h2 className="font-display text-[clamp(2rem,9vw,6rem)] uppercase leading-[0.85] tracking-tighter text-e-purple">
            We Answered.
          </h2>
        </div>

        {/* accordion + ghost */}
        <div className="relative mt-10 grid grid-cols-1 gap-6 md:mt-16 md:grid-cols-12">
          <div className="md:col-span-9">
            <div className="flex flex-col gap-3 md:gap-4">
              {FAQ.map((item, i) => {
                const isOpen = open === i;
                return (
                  <div
                    key={i}
                    data-cursor="hover"
                    className={`border-[4px] border-cream bg-cream shadow-[6px_6px_0_#F5F1E8] transition-colors duration-200 ${isOpen ? 'bg-e-purple' : ''}`}
                  >
                    <button
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="flex w-full items-center justify-between gap-3 p-4 text-left md:p-5"
                      aria-expanded={isOpen}
                    >
                      <span className="font-display text-base uppercase tracking-tight text-ink md:text-2xl">
                        {item.question}
                      </span>
                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center border-[3px] border-ink bg-cream transition-transform duration-300 md:h-9 md:w-9 ${isOpen ? 'rotate-45' : ''}`}
                      >
                        <Plus size={18} strokeWidth={3} />
                      </span>
                    </button>
                    <div
                      className="grid transition-all duration-300 ease-out"
                      style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
                    >
                      <div className="overflow-hidden">
                        <p className="px-4 pb-5 font-sans text-sm font-medium text-ink md:px-5 md:text-lg">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ghost beside FAQ — tilts when a question opens, floats gently */}
          <div ref={ghostRef} className="relative hidden md:col-span-3 md:block">
            <div className="sticky top-28 flex flex-col items-center">
              <div className={`transition-transform duration-500 ${inView ? 'animate-ghostTilt' : 'opacity-0'}`} style={{ transform: open !== null ? 'rotate(10deg) scale(1.08)' : undefined }}>
                <Ghost className="h-28 w-24 drop-shadow-[4px_4px_0_#F5F1E8]" />
              </div>
              <div className="mt-3 -rotate-3 border-[3px] border-cream bg-ink px-3 py-1 font-sans text-xs font-bold uppercase text-cream shadow-[4px_4px_0_#F5F1E8]">
                ask me!
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

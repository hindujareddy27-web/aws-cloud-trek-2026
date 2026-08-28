import { useState } from 'react';
import Ghost from './Ghost';
import { StarSticker, ArrowSticker } from './Stickers';
import { GALLERY } from '@/config';
import { useInView } from '@/hooks/useInView';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function Gallery() {
  const { ref: ghostRef, inView } = useInView<HTMLDivElement>();
  const [showAll, setShowAll] = useState(false);

  const initialCount = 2;
  const visibleItems = showAll ? GALLERY : GALLERY.slice(0, initialCount);
  const hasMore = GALLERY.length > initialCount;

  return (
    <section id="gallery" className="relative bg-cream px-3 py-14 md:px-6 md:py-20">
      <StarSticker className="absolute left-6 top-10 h-8 w-8 animate-wobble opacity-90 md:h-14 md:w-14" />
      <ArrowSticker className="absolute right-8 top-16 h-8 w-8 rotate-90 opacity-80 md:h-14 md:w-14" />

      <div className="relative mx-auto max-w-6xl">
        {/* heading */}
        <div className="flex flex-col items-center text-center">
          <span className="inline-block border-[3px] border-ink bg-e-purple px-4 py-1 font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-ink shadow-hard-sm md:text-xs">
            Gallery
          </span>
          <h2 className="mt-4 font-display text-[clamp(2.5rem,10vw,8rem)] uppercase leading-[0.82] tracking-tighter text-ink">
            Last Trek
          </h2>
          <p className="mt-2 max-w-md font-sans text-sm font-medium text-ink/80 md:text-lg">
            A look back at the moments that came before.
          </p>
        </div>

        {/* collage — photos in scrapbook layout */}
        <div className="relative mt-10 md:mt-14">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
            {visibleItems.map((item, i) => (
              <GalleryCard key={item.id || `gallery-${i}`} item={item} index={i} />
            ))}
          </div>

          {/* ghost peeking from behind the collage */}
          <div ref={ghostRef} className="group absolute -bottom-6 left-1/2 z-20 hidden -translate-x-1/2 md:block pointer-events-none">
            <div className={`transition-all duration-500 ${inView ? 'animate-ghostPeek' : 'opacity-0 translate-y-4'} group-hover:rotate-12 group-hover:-translate-y-1`}>
              <div className="animate-floatY">
                <Ghost className="h-20 w-16 drop-shadow-[3px_3px_0_#0B0A0F]" />
              </div>
            </div>
          </div>
        </div>

        {/* Expand / Collapse Button */}
        {hasMore && (
          <div className="mt-10 flex justify-center md:mt-14">
            <button
              type="button"
              data-cursor="hover"
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2.5 border-[3px] border-ink bg-e-purple px-6 py-3 font-sans text-xs font-bold uppercase tracking-[0.18em] text-ink shadow-hard transition-all duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:bg-e-purple-dark hover:shadow-hard-lg active:translate-x-0.5 active:translate-y-0.5 active:shadow-hard-sm md:px-8 md:py-3.5 md:text-sm"
            >
              <span>{showAll ? 'SHOW LESS' : 'SEE MORE PICTURES'}</span>
              {showAll ? (
                <ChevronUp className="h-4 w-4 stroke-[3]" />
              ) : (
                <ChevronDown className="h-4 w-4 stroke-[3]" />
              )}
            </button>
          </div>
        )}

        <p className="mt-12 text-center font-sans text-xs font-bold uppercase tracking-[0.2em] text-ink/60 md:mt-16 md:text-sm">
          More moments coming after this year's Trek.
        </p>
      </div>
    </section>
  );
}

type CardProps = {
  item: (typeof GALLERY)[number];
  index: number;
};

function GalleryCard({ item, index }: CardProps) {
  // Compute alternating rotations if not explicitly specified
  const rotations = ['-rotate-2', 'rotate-2', '-rotate-1', 'rotate-1', '-rotate-3', 'rotate-3'];
  const rotationClass = item.rotate || rotations[index % rotations.length];
  const formattedNumber = item.number || String(index + 1).padStart(2, '0');
  const staggeredMargin = index % 2 === 1 ? 'md:mt-6' : 'md:mt-0';

  return (
    <figure
      data-cursor="hover"
      className={`group relative overflow-hidden border-[4px] border-ink bg-ink shadow-hard-lg transition-transform duration-200 hover:rotate-0 hover:scale-[1.02] ${rotationClass} ${staggeredMargin}`}
    >
      <img
        src={item.src}
        alt={item.alt || item.label || `Event photograph ${formattedNumber}`}
        loading="lazy"
        className="h-64 w-full object-cover md:h-[400px]"
      />
      {/* number */}
      <figcaption className="absolute left-0 top-0 bg-e-purple px-2 py-1 font-display text-xl uppercase leading-none text-ink shadow-hard-sm md:px-3 md:text-3xl">
        {formattedNumber}
      </figcaption>
      {/* label sticker */}
      <div className="absolute right-2 top-2 rotate-3 border-[3px] border-ink bg-cream px-2 py-0.5 font-sans text-[9px] font-bold uppercase tracking-wide text-ink md:text-xs">
        {item.label}
      </div>
      {/* caption */}
      <div className="absolute inset-x-0 bottom-0 translate-y-0 bg-ink/90 p-2 font-sans text-[10px] font-semibold uppercase tracking-wide text-cream transition-transform duration-200 md:translate-y-full md:group-hover:translate-y-0 md:text-sm">
        {item.caption}
      </div>
    </figure>
  );
}

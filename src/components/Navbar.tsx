import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import RegisterButton from './RegisterButton';
import { EVENT } from '@/config';

const NAV_LINKS = [
  { label: 'THE TREK', href: '#trek' },
  { label: 'FAQ', href: '#faq' },
  { label: 'GALLERY', href: '#gallery' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 px-3 pt-3 md:px-6 md:pt-4">
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-2xl border-[3px] border-ink bg-cream px-4 py-3 shadow-hard transition-all duration-200 md:px-6 ${
          scrolled ? 'md:py-2' : ''
        }`}
      >
        <a
          href="#top"
          className="font-display text-lg uppercase leading-none tracking-tight text-ink md:text-2xl"
        >
          {EVENT.name}
        </a>

        <div className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-sans text-sm font-bold uppercase tracking-wide text-ink underline-offset-4 transition-colors hover:text-e-purple hover:underline"
            >
              {l.label}
            </a>
          ))}
          <RegisterButton size="sm" href={EVENT.registrationUrl} />
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center border-[3px] border-ink bg-cream shadow-hard-sm transition-all active:translate-x-[2px] active:translate-y-[2px] active:shadow-none md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={20} strokeWidth={3} /> : <Menu size={20} strokeWidth={3} />}
        </button>
      </nav>

      {open && (
        <div className="mx-auto mt-2 max-w-6xl rounded-2xl border-[3px] border-ink bg-cream p-4 shadow-hard md:hidden">
          <div className="flex flex-col gap-3">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b-[3px] border-ink/20 pb-2 font-sans text-base font-bold uppercase tracking-wide text-ink"
              >
                {l.label}
              </a>
            ))}
            <RegisterButton
              size="md"
              href={EVENT.registrationUrl}
              className="mt-2 w-full justify-center"
            />
          </div>
        </div>
      )}
    </header>
  );
}

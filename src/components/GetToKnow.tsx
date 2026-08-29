import Ghost from './Ghost';
import { StarSticker, DotsSticker, BurstSticker, CircleSticker } from './Stickers';
import { EVENT } from '@/config';
import { useInView } from '@/hooks/useInView';

const DAYS = [
  {
    day: 'DAY 01',
    title: 'Learn & Kickoff',
    bg: 'bg-e-violet',
    text: 'text-ink',
  },
  {
    day: 'DAY 02',
    title: 'Deploy & Awards',
    bg: 'bg-ink',
    text: 'text-cream',
  },
];

const DETAILS = [
  { label: 'WHEN', value: EVENT.date, accent: 'bg-e-purple', text: 'text-ink' },
  { label: 'WHERE', value: EVENT.venue, accent: 'bg-ink', text: 'text-cream' },
  { label: 'LEVEL', value: EVENT.level, accent: 'bg-e-violet', text: 'text-ink' },
  { label: 'FOCUS', value: EVENT.focus, accent: 'bg-lavender', text: 'text-ink' },
];

const INFO_BLOCKS = [
  { label: 'SPEAKER 1', value: 'Coming Soon' },
  { label: 'SPEAKER 2', value: 'Coming Soon' },
];

const WORKSHOP_TOPICS = [
  { title: 'AI-Powered Development', desc: 'AI coding assistants, agentic development, effective prompting, and building faster with AI.' },
  { title: 'Introduction to Kiro', desc: 'Project setup, prompting, project context, code generation, debugging, testing, and spec-driven development.' },
  { title: 'Building Applications', desc: 'Defining requirements, planning features, APIs, basic databases, and running apps locally.' },
  { title: 'Cloud Computing Fundamentals', desc: 'Why cloud, localhost vs cloud, AWS concepts, regions, availability, and scalability.' },
  { title: 'Application Deployment', desc: 'Preparing for deployment, configuration, environment variables, production basics, and going live.' },
  { title: 'Git & GitHub Basics', desc: 'Repositories, commits, pushing code, maintaining versions, and basic collaboration.' },
  { title: 'Cloud & Security Basics', desc: 'Protecting credentials, authentication, authorization, access control, and API-key security.' },
  { title: 'Real-World Development', desc: 'Maintainable code, testing, debugging, documentation, reviewing AI code, and version management.' },
];

const JOURNEY_STEPS = [
  'IDEA', 'AI-ASSISTED DEV', 'APPLICATION', 'TESTING', 'GITHUB', 'CLOUD', 'DEPLOYMENT', 'LIVE APP',
];

export default function GetToKnow() {
  const { ref: ghostRef, inView } = useInView<HTMLDivElement>();

  return (
    <section id="trek" className="relative bg-ink px-3 py-14 md:px-6 md:py-20">
      <DotsSticker className="absolute left-4 top-10 h-12 w-12 opacity-30 md:left-12 md:h-16 md:w-16" />

      <div className="relative mx-auto max-w-6xl">
        {/* heading */}
        <div className="flex flex-col items-center text-center">
          <span className="inline-block border-[3px] border-cream bg-ink px-4 py-1 font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-cream md:text-xs">
            The Trek
          </span>
          <h2 className="mt-4 font-display text-[clamp(2.25rem,8vw,6rem)] uppercase leading-[0.85] tracking-tighter text-cream">
            From Ideas
          </h2>
          <div className="my-2 flex items-center gap-3">
            <span className="h-1 w-10 bg-e-purple md:w-16" />
            <StarSticker className="h-6 w-6 animate-wobble text-cream md:h-8 md:w-8" />
            <span className="h-1 w-10 bg-e-purple md:w-16" />
          </div>
          <h2 className="font-display text-[clamp(2.25rem,8vw,6rem)] uppercase leading-[0.85] tracking-tighter text-e-purple">
            To Cloud
          </h2>
        </div>

        {/* Day 01 / Day 02 with ghost between */}
        <div className="relative mt-10 grid grid-cols-1 items-stretch gap-4 md:mt-12 md:grid-cols-12 md:gap-4">
          {DAYS.map((d) => (
            <div
              key={d.day}
              className={`relative border-[4px] border-cream ${d.bg} ${d.text} p-5 shadow-[6px_6px_0_#F5F1E8] transition-transform duration-200 hover:-translate-y-1 md:col-span-5 md:p-8`}
            >
              <span className="font-sans text-xs font-bold uppercase tracking-[0.2em] opacity-70 md:text-sm">
                {d.day}
              </span>
              <h3 className="mt-2 font-display text-3xl uppercase tracking-tight md:text-5xl">
                {d.title}
              </h3>
            </div>
          ))}

          {/* ghost between the two day blocks */}
          <div ref={ghostRef} className="group relative col-span-1 flex items-center justify-center md:col-span-2">
            <div className={`transition-transform duration-300 ${inView ? 'animate-ghostPeek' : 'opacity-0'} group-hover:scale-110 group-hover:rotate-6`}>
              <div className="animate-ghostBounce">
                <Ghost className="h-20 w-16 drop-shadow-[4px_4px_0_#F5F1E8] transition-transform duration-300 group-hover:-translate-y-1 md:h-28 md:w-24" />
              </div>
            </div>
            <div className="absolute -top-1 right-2 -rotate-6 border-[3px] border-cream bg-e-purple px-2 py-1 font-sans text-[10px] font-bold uppercase text-ink shadow-[4px_4px_0_#F5F1E8] md:text-xs">
              2 days!
            </div>
          </div>
        </div>

        {/* Event detail blocks — 4 only */}
        <div className="mt-8 grid grid-cols-2 gap-3 md:mt-10 md:grid-cols-4 md:gap-4">
          {DETAILS.map((d, i) => (
            <div
              key={d.label}
              className={`border-[4px] border-cream ${d.accent} ${d.text} p-4 shadow-[6px_6px_0_#F5F1E8] ${i % 2 === 0 ? '-rotate-1' : 'rotate-1'} transition-transform duration-200 hover:rotate-0 hover:-translate-y-1`}
            >
              <span className="font-sans text-[10px] font-bold uppercase tracking-[0.15em] opacity-70 md:text-xs">
                {d.label}
              </span>
              <p className="mt-2 font-display text-sm uppercase leading-tight tracking-tight md:text-xl">
                {d.value}
              </p>
            </div>
          ))}
        </div>

        {/* NO CLOUD EXPERIENCE poster statement */}
        <div className="relative mt-10 border-[4px] border-cream bg-ink p-5 shadow-[8px_8px_0_#8B5CF6] md:mt-12 md:p-10">
          <BurstSticker className="absolute -right-3 -top-3 h-12 w-12 animate-spinSlow md:h-20 md:w-20" />
          <CircleSticker className="absolute -left-3 -bottom-3 h-10 w-10 animate-floatY opacity-80 md:h-14 md:w-14" />
          <h2 className="text-center font-display text-[clamp(1.75rem,8vw,6rem)] uppercase leading-[0.85] tracking-tighter text-cream">
            No Cloud
            <br />
            <span className="text-e-purple">Experience?</span>
          </h2>
          <div className="mx-auto my-3 h-1 w-20 bg-e-purple md:my-5 md:w-40" />
          <h2 className="text-center font-display text-[clamp(1.75rem,8vw,6rem)] uppercase leading-[0.85] tracking-tighter text-cream">
            No Problem.
          </h2>
        </div>

        {/* Info blocks — Speakers */}
        <div className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-2 md:mt-10 md:gap-4">
          {INFO_BLOCKS.map((b, i) => (
            <div
              key={b.label}
              className={`border-[4px] border-cream bg-cream p-5 text-ink shadow-[6px_6px_0_#F5F1E8] transition-transform duration-200 hover:-translate-y-1 ${i % 2 === 0 ? '-rotate-1' : 'rotate-1'} md:p-6`}
            >
              <span className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-e-purple md:text-sm">
                {b.label}
              </span>
              <p className="mt-2 font-display text-2xl uppercase tracking-tight text-ink md:text-3xl">
                {b.value}
              </p>
            </div>
          ))}
        </div>

        {/* Workshop content overview */}
        <div className="mt-12 md:mt-16">
          <h3 className="text-center font-display text-[clamp(1.5rem,6vw,4rem)] uppercase leading-[0.85] tracking-tighter text-cream">
            What You'll Explore
          </h3>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 md:gap-4">
            {WORKSHOP_TOPICS.map((t, i) => (
              <div
                key={t.title}
                className={`border-[3px] border-cream bg-cream p-4 text-ink shadow-[4px_4px_0_#F5F1E8] transition-transform duration-200 hover:-translate-y-1 ${i % 2 === 0 ? '-rotate-1' : 'rotate-1'}`}
              >
                <span className="font-sans text-[10px] font-bold uppercase tracking-[0.15em] text-e-purple">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h4 className="mt-1 font-display text-sm uppercase leading-tight tracking-tight md:text-base">
                  {t.title}
                </h4>
                <p className="mt-2 font-sans text-xs font-medium text-ink/70 md:text-sm">
                  {t.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Journey flow */}
        <div className="mt-10 border-[3px] border-cream/40 bg-ink p-4 md:mt-12 md:p-6">
          <p className="text-center font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-cream/60 md:text-xs">
            The Journey
          </p>
          <div className="mt-4 flex flex-col items-center gap-2 md:flex-row md:flex-wrap md:justify-center md:gap-3">
            {JOURNEY_STEPS.map((step, i) => (
              <div key={step} className="flex flex-col items-center gap-2 md:flex-row md:gap-3">
                <span className="border-[2px] border-cream bg-e-purple px-2 py-1 font-sans text-[9px] font-bold uppercase tracking-wide text-ink md:px-3 md:text-xs">
                  {step}
                </span>
                {i < JOURNEY_STEPS.length - 1 && (
                  <span className="rotate-90 text-e-purple md:rotate-0 md:text-lg">→</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Laptop + Certifications callout */}
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-4">
          <div className="border-[4px] border-cream bg-e-purple p-5 text-ink shadow-[6px_6px_0_#F5F1E8]">
            <h4 className="font-display text-xl uppercase tracking-tight md:text-2xl">
              Laptop Required
            </h4>
            <p className="mt-2 font-sans text-sm font-medium text-ink/80 md:text-base">
              A laptop is required for hands-on development, testing, Git/GitHub work, and deployment.
            </p>
          </div>
          <div className="border-[4px] border-cream bg-cream p-5 text-ink shadow-[6px_6px_0_#F5F1E8]">
            <h4 className="font-display text-xl uppercase tracking-tight md:text-2xl">
              Certifications
            </h4>
            <p className="mt-2 font-sans text-sm font-medium text-ink/80 md:text-base">
              Participants will receive certificates along with credentials for Kiro and AWS deployment.
            </p>
          </div>
        </div>

        {/* Prerequisites + accounts note */}
        <div className="mt-4 border-[3px] border-cream/40 bg-ink p-4 md:p-6">
          <p className="font-sans text-xs font-medium text-cream/70 md:text-sm">
            Any prerequisites or preparation requirements will be communicated to participants in advance. Any accounts required for the workshop will be guided and communicated by the organizers during the workshop preparation.
          </p>
        </div>
      </div>
    </section>
  );
}

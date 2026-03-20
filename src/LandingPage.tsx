import { FAQ } from './components/FAQ'
import { Footer } from './components/Footer'
import { Nav } from './components/Nav'
import { RevealSection } from './components/RevealSection'

function IconCheck({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden
    >
      <path
        d="M16.667 5L7.5 14.167 3.333 10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function IconX({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden
    >
      <path
        d="M5 5l10 10M15 5L5 15"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

function Stars() {
  return (
    <div className="flex gap-0.5 text-[var(--c-accent)]" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className="h-4 w-4 shrink-0"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden
        >
          <path d="M10 1.5l2.35 5.42 5.9.52-4.43 4.05 1.28 5.76L10 14.77l-5.1 3.48 1.28-5.76-4.43-4.05 5.9-.52L10 1.5z" />
        </svg>
      ))}
    </div>
  )
}

const painCards = [
  {
    icon: '📞',
    title: 'Sorry, hindi ka natanggap.',
    body: "You applied to BPOs and call centers. You went through the process — and still got rejected. That's not a failure. That's a sign there's a better fit out there for you.",
  },
  {
    icon: '🎓',
    title: 'Degree in hand, no job offers.',
    body: "You finished college or graduated from SHS — but the corporate doors aren't opening fast enough. Meanwhile your savings are counting down.",
  },
  {
    icon: '🌙',
    title: "You don't want a graveyard shift life.",
    body: "Sleeping when the sun is out, eating kanin at 3am, missing every family event — the BPO lifestyle isn't for everyone. And that's perfectly okay.",
  },
  {
    icon: '💸',
    title: "Your friends are earning online. You're not.",
    body: "You've seen the posts — '₱50k month ko online.' You don't know where they started, or if it's even real. It is real. And this is where you start.",
  },
  {
    icon: '🤔',
    title: 'Anong trabaho mo na?',
    body: "Every family reunion, every group chat, every tita — you're tired of the question. You want an answer you're proud of. A real career. Not just any job.",
  },
  {
    icon: '🤖',
    title: 'AI is changing everything and you feel left behind.',
    body: "ChatGPT, Gemini, Canva AI — everyone's talking about it. You want to actually use these tools to earn money, not just scroll past the posts about them.",
  },
] as const

const personas = [
  {
    icon: '🎓',
    title: 'SHS Graduate',
    body: "You just finished Grade 12 and you're figuring out what's next. You don't want to waste a year idle. Start earning before your batchmates even start college.",
    tag: 'No experience needed',
  },
  {
    icon: '🌱',
    title: 'Out-of-School Youth',
    body: "Life happened. Maybe college wasn't the path, or you had to stop. That doesn't close doors — it opens different ones. This is yours.",
    tag: '17 years old and up',
  },
  {
    icon: '📚',
    title: 'College Undergrad',
    body: "You're still studying but you want to earn on the side. VA work is perfect for your schedule — work 2–4 hours a day and cover your own tuition and allowance.",
    tag: 'Flexible schedule',
  },
  {
    icon: '🔍',
    title: 'Fresh Graduate',
    body: 'You have your diploma but the job market is slow. Don\'t wait. Build your VA career now — many of our Online Projects graduates earn more than entry-level office jobs within 3 months.',
    tag: 'Earn while you job-hunt',
  },
] as const

const modules = [
  {
    n: '01',
    title: 'VA Foundations and Mindset',
    desc: 'What a VA actually does, setting up your workspace, and building a client-ready professional presence',
    badge: 'Core',
    badgeStyle: 'default' as const,
  },
  {
    n: '02',
    title: 'Communication and English for Clients',
    desc: 'Email etiquette, professional writing, async communication, and how to sound confident without sounding scripted',
    badge: 'Core',
    badgeStyle: 'default' as const,
  },
  {
    n: '03',
    title: 'Admin VA: Inbox, Calendar and Systems',
    desc: 'Google Workspace, Notion, ClickUp, scheduling, travel research, and inbox zero management',
    badge: 'Core',
    badgeStyle: 'default' as const,
  },
  {
    n: '04',
    title: 'Social Media VA',
    desc: "Content calendars, basic copywriting, Canva, scheduling tools, and how to grow a client's audience",
    badge: 'Core',
    badgeStyle: 'default' as const,
  },
  {
    n: '05',
    title: 'AI Tools Mastery for VAs',
    desc: 'ChatGPT, Claude, Canva AI, Notion AI, and automation tools — hands-on practice, not just theory',
    badge: 'AI-Powered',
    badgeStyle: 'blue' as const,
  },
  {
    n: '06',
    title: 'Finding Clients and Getting Hired',
    desc: 'Upwork, OnlineJobs.ph, direct outreach, how to write a winning proposal, and pricing your services',
    badge: 'Core',
    badgeStyle: 'default' as const,
  },
  {
    n: '07',
    title: 'Building Your VA Portfolio',
    desc: 'Create real samples, write your bio, set up your profile, and prepare for client interviews',
    badge: 'Core',
    badgeStyle: 'default' as const,
  },
  {
    n: '08',
    title: 'Managing Clients, Payments and Growth',
    desc: 'Contracts, PayPal/Wise setup, how to handle difficult clients, and how to grow from 1 to 3+ clients',
    badge: 'Bonus',
    badgeStyle: 'amber' as const,
  },
] as const

export default function LandingPage() {
  return (
    <div className="min-h-svh bg-[var(--c-bg)] font-dm text-[var(--c-text)]">
      <Nav />

      <RevealSection
        className="border-b border-[var(--c-border-subtle)] px-5 pb-20 pt-28 md:px-8 md:pb-28 md:pt-32"
        as="section"
      >
        <div className="mx-auto max-w-6xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--c-accent)]/35 bg-[var(--c-accent)]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-[var(--c-accent)]">
            <span
              className="h-2 w-2 rounded-full bg-[var(--c-accent)] animate-pulse-dot"
              aria-hidden
            />
            Now enrolling — Batch 1
          </div>

          <h1 className="mt-8 font-syne text-[2.35rem] font-extrabold leading-[1.06] tracking-[-0.04em] text-[var(--c-text)] sm:text-5xl md:text-6xl lg:text-[4.35rem] lg:leading-[1.02]">
            <span className="block">
              The{' '}
              <span className="text-[var(--c-strike)] line-through decoration-2 decoration-[var(--c-strike)]">
                call center
              </span>
            </span>
            <span className="block">didn&apos;t hire you.</span>
            <span className="mt-1 block text-[var(--c-accent)] md:mt-2">
              We will train you better.
            </span>
          </h1>

          <p className="mt-8 max-w-[560px] text-base font-light leading-[1.75] text-[var(--c-text-muted)] md:text-lg">
            Become a Virtual Assistant who earns in dollars — working from home,
            on your own schedule, serving clients worldwide. No graveyard shift.
            No scripted calls. No dress code.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#pricing"
              className="inline-flex w-fit items-center justify-center rounded-full bg-[var(--c-accent)] px-8 py-3.5 text-sm font-bold font-syne tracking-[0em] text-[var(--c-bg)] transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              Start Your VA Journey →
            </a>
            <a
              href="#curriculum"
              className="text-sm font-medium text-[var(--c-text-muted)] underline decoration-[var(--c-border)] underline-offset-4 transition-colors hover:text-[var(--c-accent)]"
            >
              See what&apos;s inside ↓
            </a>
          </div>

          <div className="mt-16 border-t border-[var(--c-border)] pt-8">
            <ul className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-[var(--c-text-faint)] md:gap-x-8 md:text-[15px]">
              <li className="flex items-center gap-2">
                <span className="text-[var(--c-accent)]">✓</span>
                Open to Grade 12 graduates
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[var(--c-accent)]">✓</span>
                No experience required
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[var(--c-accent)]">✓</span>
                Learn at your own pace
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[var(--c-accent)]">✓</span>
                Certificate upon completion
              </li>
            </ul>
          </div>
        </div>
      </RevealSection>

      <RevealSection
        className="bg-[var(--c-bg-elevated)] px-5 py-20 md:px-8 md:py-28"
        as="section"
      >
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[var(--c-accent)]">
            Sound familiar?
          </p>
          <h2 className="mt-4 max-w-3xl font-syne text-3xl font-extrabold leading-tight tracking-[-0.03em] md:text-4xl lg:text-[2.75rem]">
            You&apos;re not behind. You&apos;ve just been looking in the wrong
            place.
          </h2>

          <div className="mt-12 grid gap-[2px] overflow-hidden rounded-2xl border border-[var(--c-border)] bg-[var(--c-border)] md:grid-cols-2 lg:grid-cols-3">
            {painCards.map((c) => (
              <article
                key={c.title}
                className="bg-[var(--c-bg-elevated)] p-6 md:p-8"
              >
                <span className="text-2xl" aria-hidden>
                  {c.icon}
                </span>
                <h3 className="mt-4 font-syne text-lg font-bold tracking-[-0.03em] text-[var(--c-text)] md:text-xl">
                  {c.title}
                </h3>
                <p className="mt-3 text-sm leading-[1.75] text-[var(--c-text-muted)] md:text-[15px]">
                  {c.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </RevealSection>

      <RevealSection className="px-5 py-20 md:px-8 md:py-28" as="section">
        <div className="mx-auto grid max-w-6xl gap-14 md:grid-cols-2 md:gap-16 md:items-start lg:gap-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[var(--c-accent)]">
              Your path forward
            </p>
            <h2 className="mt-4 font-syne text-3xl font-extrabold leading-tight tracking-[-0.03em] md:text-4xl">
              The VA economy is{' '}
              <span className="text-[var(--c-accent)]">booming</span> — and
              it&apos;s made for you.
            </h2>
            <div className="mt-6 space-y-4 text-[15px] leading-[1.75] text-[var(--c-text-muted)] md:text-base">
              <p>
                Right now, thousands of businesses in the US, Australia, UK, and
                Canada are actively looking for Filipino virtual assistants. They
                want people who are reliable, detail-oriented, and can communicate
                well in English.
              </p>
              <p>
                That&apos;s you. You just need the right skills, a proven playbook,
                and the confidence to market yourself. That&apos;s exactly what
                Online Projects delivers.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-[2px] overflow-hidden rounded-xl border border-[var(--c-border)] bg-[var(--c-border)]">
              {[
                ['$5–22', 'Average hourly VA rate'],
                ['₱40k+', 'Monthly potential (part-time)'],
                ['100%', 'Work from home'],
                ['8 wks', 'To your first client'],
              ].map(([stat, label]) => (
                <div
                  key={label}
                  className="bg-[var(--c-bg)] p-5 md:p-6"
                >
                  <p className="font-syne text-xl font-extrabold tracking-[-0.04em] text-[var(--c-accent)] md:text-2xl">
                    {stat}
                  </p>
                  <p className="mt-1 text-xs text-[var(--c-text-faint)] md:text-sm">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <ul className="flex flex-col gap-4">
            {[
              {
                title: 'Structured VA training from day one',
                body: 'Modules built around what real clients actually pay for — admin, social media, email, research, and more.',
              },
              {
                title: 'AI tools mastery — not just theory',
                body: "You'll use ChatGPT, Canva AI, Notion AI, and more inside the platform. Hands-on, not just watching.",
              },
              {
                title: 'Portfolio that gets you hired',
                body: 'Build real work samples during the course. By graduation, you\'ll have a VA portfolio ready to show clients.',
              },
              {
                title: 'Community + job board access',
                body: 'Join a growing network of Filipino VAs and get first access to client job postings through our platform.',
              },
              {
                title: 'Verified certificate of completion',
                body: 'A shareable Online Projects certificate you can put on LinkedIn, Upwork, and your VA profile to stand out from the crowd.',
              },
            ].map((f) => (
              <li
                key={f.title}
                className="flex gap-4 rounded-xl border border-[var(--c-border)] bg-[var(--c-bg-elevated)]/40 p-5 md:p-6"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--c-accent)]/30 bg-[var(--c-accent)]/10 text-[var(--c-accent)]">
                  <IconCheck className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-syne text-base font-bold tracking-[-0.03em] text-[var(--c-text)] md:text-lg">
                    {f.title}
                  </p>
                  <p className="mt-2 text-sm leading-[1.75] text-[var(--c-text-muted)]">
                    {f.body}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </RevealSection>

      <RevealSection
        className="bg-[var(--c-bg-elevated)] px-5 py-20 md:px-8 md:py-28"
        as="section"
      >
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[var(--c-accent)]">
            This is for you if...
          </p>
          <h2 className="mt-4 max-w-3xl font-syne text-3xl font-extrabold leading-tight tracking-[-0.03em] md:text-4xl">
            Built for Filipino young people who are ready to take control.
          </h2>
          <p className="mt-4 max-w-2xl text-[15px] font-light leading-[1.75] text-[var(--c-text-muted)] md:text-base">
            You don&apos;t need experience. You don&apos;t need a college degree.
            You need a device, internet, and the willingness to put in the work.
          </p>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {personas.map((p) => (
              <article
                key={p.title}
                className="group relative overflow-hidden rounded-2xl border border-[var(--c-border)] bg-[var(--c-bg)] p-6 shadow-none transition-[transform,box-shadow] duration-300 hover:-translate-y-1 md:p-8"
              >
                <div className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-[var(--c-accent)] transition-transform duration-300 ease-out group-hover:scale-x-100" />
                <span className="text-2xl" aria-hidden>
                  {p.icon}
                </span>
                <h3 className="mt-4 font-syne text-lg font-bold tracking-[-0.03em] md:text-xl">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-[1.75] text-[var(--c-text-muted)] md:text-[15px]">
                  {p.body}
                </p>
                <span className="mt-5 inline-block rounded-full border border-[var(--c-border)] bg-[var(--c-bg-elevated)] px-3 py-1 text-xs font-medium text-[var(--c-text-muted)]">
                  {p.tag}
                </span>
              </article>
            ))}
          </div>
        </div>
      </RevealSection>

      <RevealSection
        className="scroll-mt-24 px-5 py-20 md:px-8 md:py-28"
        as="section"
        id="curriculum"
      >
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[var(--c-accent)]">
            The curriculum
          </p>
          <h2 className="mt-4 font-syne text-3xl font-extrabold leading-tight tracking-[-0.03em] md:text-4xl">
            Everything you need. Nothing you don&apos;t.
          </h2>
          <p className="mt-4 max-w-2xl text-[15px] font-light leading-[1.75] text-[var(--c-text-muted)] md:text-base">
            8 focused modules. Built around what clients pay for right now —
            including AI tools that make you 10× faster than other VAs.
          </p>

          <div className="mt-12 overflow-hidden rounded-2xl border border-[var(--c-border)] bg-[var(--c-bg)] divide-y divide-[var(--c-border)]">
            {modules.map((m) => (
              <div
                key={m.n}
                className="flex flex-col gap-4 p-5 md:flex-row md:items-start md:gap-8 md:p-8"
              >
                <span className="font-syne text-sm font-extrabold text-[var(--c-text-faint)] md:w-10">
                  {m.n}
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="font-syne text-lg font-bold tracking-[-0.03em] text-[var(--c-text)] md:text-xl">
                    {m.title}
                  </h3>
                  <p className="mt-2 text-sm leading-[1.75] text-[var(--c-text-muted)] md:text-[15px]">
                    {m.desc}
                  </p>
                </div>
                <span
                  className={[
                    'shrink-0 self-start rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide',
                    m.badgeStyle === 'blue' &&
                      'bg-[var(--c-blue-badge-bg)] text-[var(--c-blue-badge)]',
                    m.badgeStyle === 'amber' &&
                      'bg-[var(--c-amber-badge-bg)] text-[var(--c-amber-badge)]',
                    m.badgeStyle === 'default' &&
                      'border border-[var(--c-border)] text-[var(--c-text-muted)]',
                  ]
                    .filter(Boolean)
                    .join(' ')}
                >
                  {m.badge}
                </span>
              </div>
            ))}
          </div>
        </div>
      </RevealSection>

      <RevealSection
        className="bg-[var(--c-bg-elevated)] px-5 py-20 md:px-8 md:py-28"
        as="section"
      >
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="font-syne text-3xl font-extrabold tracking-[-0.03em] md:text-4xl">
            Simple process. Real results.
          </h2>
        </div>
        <div className="mx-auto mt-14 grid max-w-6xl gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {[
            {
              step: '01',
              title: 'Enroll and join your batch',
              body: 'Pick your plan, pay via GCash, Maya, or QR Ph, and get instant access to the Online Projects platform and your batch community.',
            },
            {
              step: '02',
              title: 'Learn at your own pace',
              body: "Go through video lessons, complete assignments, and ask your AI Q&A assistant any time you're stuck — day or night.",
            },
            {
              step: '03',
              title: 'Build your portfolio',
              body: 'Every module produces real work samples. By module 7, you have an actual VA portfolio — not just a certificate.',
            },
            {
              step: '04',
              title: 'Get hired through our job board',
              body: 'Online Projects graduates get exclusive access to our client job board. Apply to real openings from businesses looking for Filipino VAs.',
            },
          ].map((s) => (
            <div key={s.step} className="relative text-left">
              <span
                className="pointer-events-none select-none font-syne text-6xl font-extrabold leading-none text-[var(--c-border)] md:text-7xl"
                aria-hidden
              >
                {s.step}
              </span>
              <h3 className="relative -mt-4 font-syne text-lg font-bold tracking-[-0.03em] text-[var(--c-text)] md:text-xl">
                {s.title}
              </h3>
              <p className="mt-3 text-sm leading-[1.75] text-[var(--c-text-muted)] md:text-[15px]">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </RevealSection>

      <RevealSection
        className="scroll-mt-24 px-5 py-20 md:px-8 md:py-28"
        as="section"
        id="earnings"
      >
        <div className="mx-auto grid max-w-6xl gap-14 md:grid-cols-2 md:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[var(--c-accent)]">
              Real earning potential
            </p>
            <h2 className="mt-4 font-syne text-3xl font-extrabold leading-tight tracking-[-0.03em] md:text-4xl">
              Stop trading time for{' '}
              <span className="text-[var(--c-strike)] line-through decoration-2 decoration-[var(--c-strike)]">
                minimum wage
              </span>
              .
            </h2>
            <div className="mt-6 space-y-4 text-[15px] leading-[1.75] text-[var(--c-text-muted)] md:text-base">
              <p>
                A BPO agent earns ₱16,000–₱22,000 a month — before deductions,
                on a graveyard shift, with a fixed schedule and limited growth.
              </p>
              <p>
                A skilled VA earns the same or more, in fewer hours, from home —
                and your income grows as you add clients and skills. The ceiling
                is set by you, not by HR.
              </p>
            </div>
            <a
              href="#pricing"
              className="mt-10 inline-flex items-center justify-center rounded-full bg-[var(--c-accent)] px-8 py-3.5 text-sm font-bold font-syne tracking-[0em] text-[var(--c-bg)] transition-transform hover:scale-[1.02]"
            >
              Start Learning Today →
            </a>
          </div>

          <div className="overflow-hidden rounded-2xl border border-[var(--c-border)]">
            <table className="w-full border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-[var(--c-border)] bg-[var(--c-bg-elevated)] text-xs uppercase tracking-wide text-[var(--c-text-faint)]">
                  <th className="px-4 py-3 font-semibold md:px-5">Role</th>
                  <th className="hidden px-4 py-3 font-semibold sm:table-cell md:px-5">
                    Focus
                  </th>
                  <th className="px-4 py-3 font-semibold md:px-5">Rate</th>
                  <th className="px-4 py-3 font-semibold md:px-5">Monthly</th>
                </tr>
              </thead>
              <tbody className="text-[var(--c-text-muted)]">
                {[
                  {
                    role: 'General VA (starter)',
                    focus: 'Admin, email, scheduling',
                    rate: '$5–8/hr',
                    mo: '≈ ₱25–40k/mo',
                    hi: false,
                  },
                  {
                    role: 'Social Media VA',
                    focus: 'Content, Canva, scheduling',
                    rate: '$7–12/hr',
                    mo: '≈ ₱35–60k/mo',
                    hi: false,
                  },
                  {
                    role: 'AI-Powered VA',
                    focus: 'You + AI tools = premium rate',
                    rate: '$12–20/hr',
                    mo: '≈ ₱60–100k/mo',
                    hi: true,
                  },
                  {
                    role: 'Senior VA / OBM',
                    focus: 'Managing teams and systems',
                    rate: '$20–35/hr',
                    mo: '≈ ₱100k+/mo',
                    hi: false,
                  },
                ].map((row) => (
                  <tr
                    key={row.role}
                    className={[
                      'border-b border-[var(--c-border)] last:border-0',
                      row.hi
                        ? 'bg-[var(--c-accent-muted)] text-[var(--c-text)]'
                        : 'bg-[var(--c-bg)]',
                    ].join(' ')}
                  >
                    <td className="px-4 py-4 font-medium text-[var(--c-text)] md:px-5">
                      {row.role}
                    </td>
                    <td className="hidden px-4 py-4 sm:table-cell md:px-5">
                      {row.focus}
                    </td>
                    <td className="px-4 py-4 md:px-5">{row.rate}</td>
                    <td className="px-4 py-4 md:px-5">{row.mo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="border-t border-[var(--c-border)] bg-[var(--c-bg-elevated)] px-4 py-3 text-xs text-[var(--c-text-faint)] md:px-5">
              Estimates based on typical Upwork and OnlineJobs.ph market rates
              as of 2025.
            </p>
          </div>
        </div>
      </RevealSection>

      <RevealSection
        className="bg-[var(--c-bg-elevated)] px-5 py-20 md:px-8 md:py-28"
        as="section"
      >
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="font-syne text-3xl font-extrabold tracking-[-0.03em] md:text-4xl">
            They were exactly where you are now.
          </h2>
        </div>
        <div className="mx-auto mt-14 grid max-w-6xl gap-6 md:grid-cols-3">
          {[
            {
              quote:
                "Na-reject ako ng 4 na BPO companies. Sabi ko sa sarili ko, hindi talaga para sa akin 'yun. After 6 weeks sa Online Projects, nakakuha na ako ng US client — ₱35k a month, work from home. Wala na akong inaaplayan pa.",
              name: 'Mariz D.',
              detail: 'SHS Graduate · Batangas · Social Media VA',
            },
            {
              quote:
                'Nagulat ako na pati ChatGPT ituturo sa Online Projects. I use it every day now for my clients. Ang sabi ng isa sa kanila, mas mabilis daw ako kaysa sa dati niyang VA na ilang taon nang nagtatrabaho. That\'s the power of AI tools.',
              name: 'Jc Reyes',
              detail: 'Fresh Graduate · Cebu · Admin + AI VA',
            },
            {
              quote:
                'College pa ko, 3rd year. Nagbabayad na ako ng sarili kong tuition dahil sa Online Projects. Hindi ko kailangan humingi sa parents ko. This is the best thing I did for myself — even before graduating.',
              name: 'Kevin A.',
              detail: '3rd Year BS Tourism · Manila · Part-time VA',
            },
          ].map((t) => (
            <blockquote
              key={t.name}
              className="flex h-full flex-col rounded-2xl border border-[var(--c-border)] bg-[var(--c-bg)] p-6 text-left md:p-8"
            >
              <Stars />
              <p className="mt-4 flex-1 text-sm leading-[1.75] text-[var(--c-text-muted)] md:text-[15px]">
                &ldquo;{t.quote}&rdquo;
              </p>
              <footer className="mt-6 border-t border-[var(--c-border)] pt-6">
                <cite className="not-italic font-syne text-base font-extrabold text-[var(--c-text)]">
                  {t.name}
                </cite>
                <p className="mt-1 text-xs text-[var(--c-text-faint)] md:text-sm">
                  {t.detail}
                </p>
              </footer>
            </blockquote>
          ))}
        </div>
      </RevealSection>

      <RevealSection
        className="scroll-mt-24 px-5 py-20 md:px-8 md:py-28"
        as="section"
        id="pricing"
      >
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[var(--c-accent)]">
            Enrollment plans
          </p>
          <h2 className="mt-4 font-syne text-3xl font-extrabold tracking-[-0.03em] md:text-4xl">
            Invest in yourself once. Earn forever.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[15px] font-light leading-[1.75] text-[var(--c-text-muted)] md:text-base">
            Pay via GCash, Maya, or QR Ph. Installment options available.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3 lg:items-stretch">
          <div className="flex h-full flex-col rounded-2xl border border-[var(--c-border)] bg-[var(--c-bg)] p-6 transition-transform duration-300 hover:-translate-y-1 md:p-8">
            <p className="text-lg font-semibold tracking-[0.08em]">Starter</p>
            <p className="mt-4 font-syne text-3xl font-extrabold text-[var(--c-text)]">
              ₱2,999
            </p>
            <p className="text-sm text-[var(--c-text-faint)]">
              one-time · lifetime access
            </p>
            <ul className="mt-8 flex flex-1 flex-col gap-3 text-sm text-[var(--c-text-muted)]">
              {[
                ['ok', 'All 8 core modules'],
                ['ok', 'Progress tracking'],
                ['ok', 'Online Projects certificate'],
                ['ok', 'Resource library'],
                ['no', 'AI Q&A assistant'],
                ['no', 'Job board access'],
                ['no', 'Community forum'],
              ].map(([kind, label]) => (
                <li key={label} className="flex items-start gap-2">
                  {kind === 'ok' ? (
                    <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-[var(--c-accent)]" />
                  ) : (
                    <IconX className="mt-0.5 h-4 w-4 shrink-0 text-[var(--c-text-faint)]" />
                  )}
                  <span
                    className={
                      kind === 'no' ? 'text-[var(--c-text-faint)]' : undefined
                    }
                  >
                    {label}
                  </span>
                </li>
              ))}
            </ul>
            <a
              href="#pricing"
              className="mt-auto inline-flex justify-center rounded-full border-2 border-[var(--c-border)] px-6 py-3 text-sm font-bold font-syne tracking-[0em] text-[var(--c-text)] transition-colors hover:border-[var(--c-accent)] hover:text-[var(--c-accent)]"
            >
              Enroll — Starter
            </a>
          </div>

          <div className="relative flex h-full flex-col rounded-2xl border-2 border-[var(--c-accent)] bg-[var(--c-bg)] p-6 shadow-[0_0_0_1px_color-mix(in_srgb,var(--c-accent)_25%,transparent)] transition-transform duration-300 hover:-translate-y-1 md:p-8">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[var(--c-accent)] px-4 py-1 text-xs font-bold uppercase tracking-wide text-[var(--c-bg)]">
              Most Popular
            </span>
            <p className="text-lg font-semibold tracking-[0.08em]">Pro</p>
            <p className="mt-4 font-syne text-3xl font-extrabold text-[var(--c-text)]">
              ₱5,499
            </p>
            <p className="text-sm text-[var(--c-text-faint)]">
              one-time · lifetime access
            </p>
            <ul className="mt-8 flex flex-1 flex-col gap-3 text-sm text-[var(--c-text-muted)]">
              {[
                'All 8 core modules',
                'Progress tracking',
                'Online Projects certificate',
                'Resource library',
                'AI Q&A assistant',
                'Job board access',
                'Community + batch cohort',
              ].map((label) => (
                <li key={label} className="flex items-start gap-2">
                  <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-[var(--c-accent)]" />
                  {label}
                </li>
              ))}
            </ul>
            <a
              href="#pricing"
              className="mt-auto inline-flex justify-center rounded-full bg-[var(--c-accent)] px-6 py-3 text-sm font-bold font-syne tracking-[0em] text-[var(--c-bg)] transition-transform hover:scale-[1.02]"
            >
              Enroll — Pro
            </a>
          </div>

          <div className="flex h-full flex-col rounded-2xl border border-[var(--c-border)] bg-[var(--c-bg)] p-6 transition-transform duration-300 hover:-translate-y-1 md:p-8">
            <p className="text-lg font-semibold tracking-[0.08em]">Installment</p>
            <p className="mt-4 font-syne text-3xl font-extrabold text-[var(--c-text)]">
              ₱2,000 × 3 months
            </p>
            <p className="text-sm text-[var(--c-text-faint)]">
              Pro plan features
            </p>
            <ul className="mt-8 flex flex-1 flex-col gap-3 text-sm text-[var(--c-text-muted)]">
              {[
                'Everything in Pro',
                'Split into 3 easy payments',
                'Pay via GCash auto-debit',
                'Full access from day one',
                'Job board access',
                'AI Q&A assistant',
                'Community + batch cohort',
              ].map((label) => (
                <li key={label} className="flex items-start gap-2">
                  <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-[var(--c-accent)]" />
                  {label}
                </li>
              ))}
            </ul>
            <a
              href="#pricing"
              className="mt-auto inline-flex justify-center rounded-full border-2 border-[var(--c-border)] px-6 py-3 text-sm font-bold font-syne tracking-[0em] text-[var(--c-text)] transition-colors hover:border-[var(--c-accent)] hover:text-[var(--c-accent)]"
            >
              Enroll — 3-Month Plan
            </a>
          </div>
        </div>
      </RevealSection>

      <RevealSection
        className="scroll-mt-24 bg-[var(--c-bg-elevated)] px-5 py-20 md:px-8 md:py-28"
        as="section"
        id="faq"
      >
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="font-syne text-3xl font-extrabold tracking-[-0.03em] md:text-4xl">
            Questions people ask before enrolling.
          </h2>
        </div>
        <div className="mx-auto mt-12 max-w-3xl">
          <FAQ />
        </div>
      </RevealSection>

      <RevealSection
        className="border-t border-[var(--c-border)] px-5 py-24 text-center md:px-8 md:py-32"
        as="section"
      >
        <div className="mx-auto max-w-3xl">
          <h2 className="font-syne text-3xl font-extrabold leading-tight tracking-[-0.03em] text-[var(--c-text)] md:text-4xl lg:text-5xl">
            The call center said no.
            <span className="mt-2 block text-[var(--c-accent)]">
              Your clients are waiting.
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-[15px] font-light leading-[1.75] text-[var(--c-text-muted)] md:text-lg">
            Join Online Projects Batch 1 before seats fill up. Your first
            earning month as a VA is closer than you think.
          </p>
          <a
            href="#pricing"
            className="mt-10 inline-flex items-center justify-center rounded-full bg-[var(--c-accent)] px-10 py-4 text-base font-bold font-syne tracking-[0em] text-[var(--c-bg)] transition-transform hover:scale-[1.02]"
          >
            Enroll in Online Projects Now →
          </a>
          <p className="mt-8 text-xs text-[var(--c-text-faint)] md:text-sm">
            ✓ 7-day money-back guarantee · ✓ Pay via GCash, Maya, QR Ph · ✓
            Lifetime access
          </p>
        </div>
      </RevealSection>

      <RevealSection as="div">
        <Footer />
      </RevealSection>
    </div>
  )
}

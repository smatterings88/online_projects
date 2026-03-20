import { useState } from 'react'

const items = [
  {
    q: 'Do I need experience to enroll?',
    a: "No experience required — none at all. Online Projects is built from the ground up for people who are starting fresh. If you can use a smartphone and type in English, you have everything you need to begin.",
  },
  {
    q: "I didn't finish college. Can I still enroll?",
    a: "Absolutely. Many of our best students are out-of-school youth or SHS graduates. Clients don't ask for your diploma — they care about your skills, your reliability, and your results. That's what we train you for at Online Projects.",
  },
  {
    q: 'How fast can I find my first client?',
    a: "Most dedicated Online Projects students land their first client within 6–10 weeks of starting the program. The key is completing all the modules, building your portfolio samples, and applying to job board listings consistently. We'll coach you through every step.",
  },
  {
    q: "What's the minimum internet speed I need?",
    a: 'A stable connection of at least 5 Mbps is enough to watch lessons and complete assignments. Most VA work for clients requires only 10–20 Mbps. We also offer offline lesson downloads on the Pro plan for lower-data situations.',
  },
  {
    q: 'Can I take this while still in college or school?',
    a: "Yes — that's actually one of the best times. VA work is completely flexible. Many Online Projects students do 2–4 hours of client work per day around their class schedule and earn enough to cover their own allowance, load, and even tuition.",
  },
  {
    q: 'What payment methods are accepted?',
    a: 'We accept GCash, Maya, and QR Ph (InstaPay-compatible banks including BDO, BPI, Metrobank, UnionBank, and more). For the installment plan, you can set up a GCash auto-debit for convenience.',
  },
  {
    q: 'Is there a refund policy?',
    a: "Yes. If you complete fewer than 2 modules and feel the program isn't right for you, request a full refund within 7 days of enrollment. We stand behind the quality of what Online Projects has built — and we're confident you'll love it.",
  },
] as const

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <div className="mx-auto max-w-3xl divide-y divide-[var(--c-border)] rounded-2xl border border-[var(--c-border)] bg-[var(--c-bg)] px-2 md:px-4">
      {items.map(({ q, a }, i) => {
        const isOpen = open === i
        return (
          <div key={q} className="py-1">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-start justify-between gap-4 rounded-xl px-4 py-4 text-left transition-colors hover:bg-[var(--c-bg-elevated)]"
              aria-expanded={isOpen}
            >
              <span className="text-base font-medium text-[var(--c-text)] md:text-lg">
                {q}
              </span>
              <span
                className={[
                  'mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[var(--c-border)] text-lg font-light text-[var(--c-accent)] transition-transform duration-300',
                  isOpen ? 'rotate-45' : 'rotate-0',
                ].join(' ')}
                aria-hidden
              >
                +
              </span>
            </button>
            <div
              className={[
                'grid transition-[grid-template-rows] duration-300 ease-out',
                isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
              ].join(' ')}
            >
              <div className="overflow-hidden">
                <p className="px-4 pb-4 text-sm leading-relaxed text-[var(--c-text-muted)] md:text-[15px]">
                  {a}
                </p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

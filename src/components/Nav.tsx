import { useEffect, useState } from 'react'

const links = [
  { href: '#curriculum', label: "What You'll Learn" },
  { href: '#earnings', label: 'Earnings' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#faq', label: 'FAQ' },
] as const

export function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={[
        'fixed inset-x-0 top-0 z-50 border-b transition-[background,border-color,backdrop-filter] duration-300',
        scrolled
          ? 'border-[var(--c-border-subtle)] bg-[var(--c-nav-glass)] backdrop-blur-xl backdrop-saturate-150'
          : 'border-transparent bg-transparent',
      ].join(' ')}
    >
      <div className="mx-auto flex h-[4.25rem] max-w-6xl items-center justify-between px-5 md:px-8">
        <a href="#" className="font-syne text-xl font-extrabold tracking-tight">
          <span className="text-[var(--c-text)]">Online</span>
          <span className="text-[var(--c-accent)]">Projects</span>
        </a>

        <nav
          className="hidden items-center gap-10 md:flex"
          aria-label="Primary"
        >
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="text-sm font-medium text-[var(--c-text-faint)] transition-colors hover:text-[var(--c-text-muted)]"
            >
              {label}
            </a>
          ))}
        </nav>

        <a
          href="#pricing"
          className="rounded-full bg-[var(--c-accent)] px-5 py-2.5 text-sm font-semibold text-[var(--c-bg)] transition-transform hover:scale-[1.02] active:scale-[0.98]"
        >
          Enroll Now
        </a>
      </div>
    </header>
  )
}

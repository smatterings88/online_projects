export function Footer() {
  return (
    <footer className="border-t border-[var(--c-border)] bg-[var(--c-bg)] px-5 py-14 md:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 md:flex-row md:items-center md:justify-between">
        <a href="#" className="font-syne text-xl font-extrabold tracking-tight">
          <span className="text-[var(--c-text)]">Online</span>
          <span className="text-[var(--c-accent)]">Projects</span>
        </a>
        <nav className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-[var(--c-text-muted)]">
          <a href="#" className="transition-colors hover:text-[var(--c-text)]">
            Privacy Policy
          </a>
          <a href="#" className="transition-colors hover:text-[var(--c-text)]">
            Terms of Use
          </a>
          <a href="#" className="transition-colors hover:text-[var(--c-text)]">
            Contact Us
          </a>
          <a href="#" className="transition-colors hover:text-[var(--c-text)]">
            Become a Mentor
          </a>
        </nav>
        <p className="text-sm text-[var(--c-text-faint)]">
          © 2025 Online Projects. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

import { SITE, FOOTER } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 px-6 py-20">
      <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-3">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-cyan/20 bg-cyan/5">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M8 1L14.5 4.75V12.25L8 16L1.5 12.25V4.75L8 1Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="text-cyan"
                />
                <circle cx="8" cy="8.5" r="2" fill="currentColor" className="text-cyan" />
              </svg>
            </div>
            <span className="text-lg font-bold">{SITE.name}</span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
            {FOOTER.tagline}
          </p>
        </div>

        {/* Links */}
        <div>
          <div className="font-[family-name:var(--font-mono)] text-xs font-medium uppercase tracking-widest text-muted">
            Navigation
          </div>
          <ul className="mt-5 flex flex-col gap-3">
            {FOOTER.links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm text-muted transition-colors hover:text-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <div className="font-[family-name:var(--font-mono)] text-xs font-medium uppercase tracking-widest text-muted">
            Contact
          </div>
          <a
            href={`mailto:${FOOTER.email}`}
            className="mt-5 inline-block text-sm text-cyan transition-opacity hover:opacity-80"
          >
            {FOOTER.email}
          </a>
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-7xl border-t border-white/5 pt-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <span className="font-[family-name:var(--font-mono)] text-xs text-muted">
            &copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </span>
          <span className="font-[family-name:var(--font-mono)] text-xs text-muted/50">
            Built with precision.
          </span>
        </div>
      </div>
    </footer>
  );
}

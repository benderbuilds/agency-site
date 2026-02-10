import { SITE, FOOTER } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-dark px-6 py-16 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path
                  d="M9 2L15 5.5V12.5L9 16L3 12.5V5.5L9 2Z"
                  fill="white"
                  fillOpacity="0.9"
                />
              </svg>
            </div>
            <span className="text-lg font-bold text-white">{SITE.name}</span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-dark-muted">
            {FOOTER.tagline}
          </p>
        </div>

        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-dark-muted">
            Quick Links
          </div>
          <ul className="mt-4 flex flex-col gap-3">
            {FOOTER.links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm text-dark-muted transition-colors hover:text-white"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-dark-muted">
            Contact
          </div>
          <a
            href={`mailto:${FOOTER.email}`}
            className="mt-4 inline-block text-sm text-white transition-opacity hover:opacity-80"
          >
            {FOOTER.email}
          </a>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-7xl border-t border-white/10 pt-8">
        <span className="text-xs text-dark-muted">
          &copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.
        </span>
      </div>
    </footer>
  );
}

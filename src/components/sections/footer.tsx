import { SITE, FOOTER } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 px-6 py-16">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-3">
        <div>
          <div className="text-lg font-bold">{SITE.name}</div>
          <p className="mt-3 text-sm text-muted leading-relaxed">
            {FOOTER.tagline}
          </p>
        </div>

        <div>
          <div className="text-sm font-semibold uppercase tracking-wider text-muted">
            Quick Links
          </div>
          <ul className="mt-4 flex flex-col gap-3">
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

        <div>
          <div className="text-sm font-semibold uppercase tracking-wider text-muted">
            Get in Touch
          </div>
          <a
            href={`mailto:${FOOTER.email}`}
            className="mt-4 inline-block text-sm text-cyan transition-opacity hover:opacity-80"
          >
            {FOOTER.email}
          </a>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-6xl border-t border-white/5 pt-8 text-center text-sm text-muted">
        &copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.
      </div>
    </footer>
  );
}

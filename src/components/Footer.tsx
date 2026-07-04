import { CONTACT, NAV_LINKS } from "@/lib/data";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="mt-28 bg-ink px-5 pb-10 pt-20 text-paper sm:mt-40 sm:px-8">
      <div className="mx-auto w-full max-w-[1400px]">
        <div className="grid gap-12 border-b border-paper/10 pb-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Logo tone="paper" className="h-14 w-auto" />
            <p className="mt-6 max-w-md text-lg leading-relaxed text-paper/70">
              {CONTACT.tagline}
            </p>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-paper/50">
              A full-service digital marketing agency helping brands grow through
              creative strategy, performance marketing, branding, website
              development and content creation.
            </p>
          </div>

          <nav
            aria-label="Footer"
            className="lg:col-span-3 lg:col-start-7"
          >
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-paper/40">
              Quick links
            </p>
            <ul className="mt-5 flex flex-col gap-3">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="link-underline text-paper/80 transition-colors hover:text-accent-bright"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-paper/40">
              Get in touch
            </p>
            <ul className="mt-5 flex flex-col gap-3">
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="link-underline text-paper/80 hover:text-accent-bright"
                >
                  {CONTACT.email}
                </a>
              </li>
              {CONTACT.phones.map((p) => (
                <li key={p}>
                  <a
                    href={`tel:${p}`}
                    className="link-underline text-paper/80 hover:text-accent-bright"
                  >
                    {p}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-8 text-sm text-paper/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} The Social Verse. All rights reserved.</p>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em]">
            Guwahati · Working worldwide
          </p>
        </div>
      </div>
    </footer>
  );
}

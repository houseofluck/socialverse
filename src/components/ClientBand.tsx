import Image from "next/image";
import { CLIENT_LOGOS } from "@/lib/data";

function LogoCard({ name, src }: { name: string; src: string }) {
  return (
    <li className="flex h-20 w-44 shrink-0 items-center justify-center rounded-2xl bg-[#fbfaf6] px-6 ring-1 ring-ink/[0.06] transition-transform duration-500 hover:-translate-y-1 sm:h-24 sm:w-52">
      <Image
        src={src}
        alt={`${name} logo`}
        width={180}
        height={72}
        className="max-h-11 w-auto max-w-[130px] object-contain sm:max-h-12"
      />
    </li>
  );
}

export function ClientBand() {
  return (
    <section
      aria-label="Our clientele"
      className="mt-20 border-y hairline py-10 sm:mt-28 sm:py-14"
    >
      <div className="mx-auto mb-8 w-full max-w-[1400px] px-5 sm:px-8">
        <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-stone">
          Trusted by brands that want to be seen
        </span>
      </div>

      <div
        className="marquee flex w-full overflow-hidden"
        style={{ "--marquee-duration": "34s" } as React.CSSProperties}
      >
        <ul className="marquee-track items-center" aria-label="Client logos">
          {CLIENT_LOGOS.map((c) => (
            <LogoCard key={c.name} {...c} />
          ))}
        </ul>
        <ul className="marquee-track items-center" aria-hidden="true">
          {CLIENT_LOGOS.map((c) => (
            <LogoCard key={`dup-${c.name}`} {...c} />
          ))}
        </ul>
      </div>
    </section>
  );
}

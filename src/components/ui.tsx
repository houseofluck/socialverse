import Image from "next/image";
import type { ReactNode } from "react";

/** Small mono eyebrow label with a accent tick. */
export function Eyebrow({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.28em] text-stone ${className}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
      {children}
    </span>
  );
}

const TONES: Record<string, string> = {
  warm: "from-[#e7d9c2] via-[#dcc7a6] to-[#c9ad82]",
  cool: "from-[#cdd3c6] via-[#b6c0ae] to-[#98a68c]",
  gold: "from-[#e6d3a0] via-[#d8bd77] to-[#bd9c4e]",
};

type MediaFrameProps = {
  label: string;
  caption?: string;
  tone?: "warm" | "cool" | "gold";
  className?: string;
  /** Optimized still image path (in /public). */
  image?: string;
  /** Muted autoplay loop video path (in /public). */
  video?: string;
  poster?: string;
  priority?: boolean;
  sizes?: string;
  objectPosition?: string;
  children?: ReactNode;
};

/**
 * Framed media tile. Renders a real image or looping video when provided,
 * otherwise a duotone gradient placeholder. Shared label / hover treatment
 * keeps everything visually consistent whether or not the asset exists yet.
 */
export function MediaFrame({
  label,
  caption,
  tone = "warm",
  className = "",
  image,
  video,
  poster,
  priority = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
  objectPosition = "center",
  children,
}: MediaFrameProps) {
  const hasMedia = Boolean(image || video);

  return (
    <div
      className={`group relative isolate overflow-hidden rounded-[4px] bg-gradient-to-br ${TONES[tone]} ${className}`}
      data-cursor="focus"
    >
      {/* Real media, zooming subtly on hover */}
      {image && (
        <Image
          src={image}
          alt={label}
          fill
          sizes={sizes}
          priority={priority}
          style={{ objectPosition }}
          className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
        />
      )}
      {video && (
        <video
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={poster}
        >
          <source src={video} type="video/mp4" />
        </video>
      )}

      {/* grain only on gradient placeholders */}
      {!hasMedia && (
        <div className="grain-overlay pointer-events-none absolute inset-0 opacity-[0.12] mix-blend-multiply" />
      )}

      {/* legibility vignette */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />

      {children}

      <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="font-display text-xl leading-tight text-paper drop-shadow-sm sm:text-2xl">
              {label}
            </p>
            {caption && (
              <p className="mt-1 max-w-[24ch] text-sm text-paper/85">
                {caption}
              </p>
            )}
          </div>
          <span
            aria-hidden
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-paper/90 text-ink transition-transform duration-500 group-hover:rotate-45"
          >
            <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
              <path
                d="M4 12L12 4M12 4H5M12 4v7"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
}

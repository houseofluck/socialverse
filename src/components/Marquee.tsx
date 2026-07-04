import type { ReactNode } from "react";

/**
 * Infinite horizontal marquee. Renders the row twice so the CSS
 * translate(-50%) loop is seamless. Pauses on hover, off for reduced-motion.
 */
export function Marquee({
  items,
  duration = 32,
  reverse = false,
  separator,
  className = "",
  itemClassName = "",
}: {
  items: string[];
  duration?: number;
  reverse?: boolean;
  separator?: ReactNode;
  className?: string;
  itemClassName?: string;
}) {
  const Track = (
    <ul
      className={`marquee-track ${reverse ? "marquee-reverse" : ""}`}
      aria-hidden="false"
    >
      {items.map((item, i) => (
        <li key={i} className={`flex items-center gap-14 ${itemClassName}`}>
          <span>{item}</span>
          {separator ?? (
            <span className="text-accent-deep" aria-hidden>
              ✦
            </span>
          )}
        </li>
      ))}
    </ul>
  );

  return (
    <div
      className={`marquee flex w-full overflow-hidden ${className}`}
      style={
        {
          "--marquee-duration": `${duration}s`,
        } as React.CSSProperties
      }
    >
      {Track}
      <ul
        className={`marquee-track ${reverse ? "marquee-reverse" : ""}`}
        aria-hidden="true"
      >
        {items.map((item, i) => (
          <li key={i} className={`flex items-center gap-14 ${itemClassName}`}>
            <span>{item}</span>
            {separator ?? (
              <span className="text-accent-deep" aria-hidden>
                ✦
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

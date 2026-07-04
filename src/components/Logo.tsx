import Image from "next/image";
import Link from "next/link";

/**
 * Brand wordmark — background-removed "the social verse." logo.
 * `tone="ink"` (default) for light surfaces, `tone="paper"` for dark ones.
 * Size via className height (width auto keeps the aspect ratio).
 */
export function Logo({
  className = "h-9 w-auto",
  tone = "ink",
  onClick,
}: {
  className?: string;
  tone?: "ink" | "paper";
  onClick?: () => void;
}) {
  return (
    <Link
      href="/"
      onClick={onClick}
      aria-label="The Social Verse — home"
      className="inline-flex shrink-0 transition-transform duration-300 hover:-translate-y-0.5"
    >
      <Image
        src={tone === "paper" ? "/logo-paper.png" : "/logo-ink.png"}
        alt="The Social Verse"
        width={351}
        height={236}
        priority
        className={className}
      />
    </Link>
  );
}

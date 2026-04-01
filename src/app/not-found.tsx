import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-6">
      <div className="text-center">
        <div className="font-display text-[8rem] font-black text-gold leading-none mb-2 opacity-20">
          404
        </div>
        <h1 className="font-display text-3xl font-black text-white mb-3">
          Page Not Found
        </h1>
        <p className="text-white/40 max-w-md mx-auto mb-8 font-light">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back on track.
        </p>
        <div className="flex gap-3 justify-center flex-wrap">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-black font-accent font-semibold text-sm tracking-wider uppercase rounded-sm hover:bg-gold-light transition-all no-underline"
          >
            <i className="ri-home-4-line" /> Go Home
          </Link>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-transparent text-white font-accent font-medium text-sm tracking-wider uppercase border border-white/15 rounded-sm hover:border-gold hover:text-gold transition-all no-underline"
          >
            <i className="ri-whatsapp-line" /> Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}

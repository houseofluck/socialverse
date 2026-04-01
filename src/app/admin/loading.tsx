export default function AdminLoading() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="text-center">
        <div className="font-display text-2xl font-black text-white mb-3">
          Social <span className="text-gold">Verse.</span>
        </div>
        <i className="ri-loader-4-line animate-spin text-2xl text-gold" />
      </div>
    </div>
  );
}

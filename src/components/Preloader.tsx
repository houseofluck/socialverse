"use client";

import { useState, useEffect } from "react";

export default function Preloader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHidden(true), 900);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className={`preloader ${hidden ? "hidden" : ""}`}>
      <div className="font-display text-2xl font-black text-white">
        Social <span className="text-gold">Verse.</span>
      </div>
      <div className="preloader-bar" />
    </div>
  );
}

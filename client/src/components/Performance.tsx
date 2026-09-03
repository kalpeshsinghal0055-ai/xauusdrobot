import { m as motion } from "framer-motion";
import { useEffect, useState } from "react";


type ShotPost = { id: number; date: string | null; files: string[] };

function TelegramShots() {
  const [posts, setPosts] = useState<ShotPost[]>([]);
  const [lightbox, setLightbox] = useState<string | null>(null);
  useEffect(() => {
    fetch("/performance/manifest.json")
      .then((r) => (r.ok ? r.json() : []))
      .then(setPosts)
      .catch(() => {});
  }, []);
  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setLightbox(null);
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox]);
  if (!posts.length) return null;
  const shots = posts.flatMap((p) =>
    p.files.map((f) => ({ id: p.id, date: p.date, file: f })),
  );
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mt-16"
    >
      <div className="text-center mb-8">
        <h3 className="font-serif text-2xl lg:text-3xl font-bold text-foreground mb-3">
          Latest <span className="text-gold">Live Trading Results</span>
        </h3>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Real MT5 terminal screenshots from our live trading — updated automatically on this
          page.
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
        {shots.slice(0, 6).map((s) => (
          <button
            key={s.file}
            type="button"
            onClick={() => setLightbox(s.file)}
            className="rounded-xl overflow-hidden border border-border/40 bg-card/60 hover:border-gold/50 transition-colors cursor-zoom-in text-left"
            aria-label="View screenshot full size"
          >
            <img
              src={`/performance/${s.file}`}
              alt={`XAUUSD Robot live trading result screenshot${s.date ? ` from ${s.date.slice(0, 10)}` : ""}`}
              className="w-full h-48 object-cover object-top"
              loading="lazy"
            />
            {s.date && (
              <div className="px-3 py-2 text-xs text-muted-foreground border-t border-border/40">
                {s.date.slice(0, 10)}
              </div>
            )}
          </button>
        ))}
      </div>
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 cursor-zoom-out"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white text-2xl leading-none flex items-center justify-center"
            aria-label="Close"
          >
            ×
          </button>
          <img
            src={`/performance/${lightbox}`}
            alt="Live trading result screenshot — full size"
            className="max-w-full max-h-[92vh] w-auto h-auto rounded-lg shadow-2xl"
          />
        </div>
      )}
    </motion.div>
  );
}

export default function Performance() {
  return (
    <section id="performance" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-background" />

      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
                    <span className="text-gold text-sm font-semibold uppercase tracking-[0.2em] mb-4 block">
            Performance
          </span>
          <h2 className="font-serif text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-4">
            Three live accounts,{" "}
            <span className="text-gold">published whole.</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto leading-relaxed">
            Net result, win rate, profit factor and maximum drawdown for each &mdash; including
            the small account that barely moved. Every badge links to that account&apos;s full
            trade history.
          </p>
        </motion.div>

        {/* Verified accounts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex flex-wrap justify-center gap-5">
            <a
              href="https://www.copyconnectfx.com/p/GG5yHLWOoWyco7J2HB2E"
              target="_blank"
              rel="noopener"
              className="inline-block"
            >
              <img
                src="https://www.copyconnectfx.com/badge/p/GG5yHLWOoWyco7J2HB2E.svg"
                alt="Account 11324902 — verified trading results on CopyConnectFX"
                width={340}
                height={96}
                loading="lazy"
              />
            </a>
            <a
              href="https://www.copyconnectfx.com/p/wGJIt1aADIe3jO_dUQa4"
              target="_blank"
              rel="noopener"
              className="inline-block"
            >
              <img
                src="https://www.copyconnectfx.com/badge/p/wGJIt1aADIe3jO_dUQa4.svg"
                alt="Account 11324901 — verified trading results on CopyConnectFX"
                width={340}
                height={96}
                loading="lazy"
              />
            </a>
            <a
              href="https://www.copyconnectfx.com/p/RGbEVAWp72cXcupuwkIV"
              target="_blank"
              rel="noopener"
              className="inline-block"
            >
              <img
                src="https://www.copyconnectfx.com/badge/p/RGbEVAWp72cXcupuwkIV.svg"
                alt="Account 11429969 — verified trading results on CopyConnectFX"
                width={340}
                height={96}
                loading="lazy"
              />
            </a>
          </div>
          <p className="text-muted-foreground text-sm text-center mt-8 max-w-2xl mx-auto">
            Read the drawdown figure before the profit figure &mdash; it is the one that tells you
            what holding these positions felt like. Past results do not predict future ones.
          </p>
          <div className="text-center mt-6">
            <a
              href="/verified-results/"
              className="inline-flex items-center gap-2 bg-gold text-background font-bold px-8 py-3.5 rounded-xl hover:opacity-90 transition-opacity"
            >
              How to read these records →
            </a>
          </div>
        </motion.div>

        <TelegramShots />

      </div>
    </section>
  );
}

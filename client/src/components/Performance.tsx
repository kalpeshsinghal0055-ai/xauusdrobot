import { m as motion } from "framer-motion";
import { useEffect, useState } from "react";

const MYFXBOOK_URL = "https://www.myfxbook.com/members/BBFx_Ai/bbfxai-100-usd/12092687";
const CHANNEL_URL = "https://t.me/pssforxr";

type ShotPost = { id: number; date: string | null; files: string[] };

function TelegramShots() {
  const [posts, setPosts] = useState<ShotPost[]>([]);
  useEffect(() => {
    fetch("/performance/manifest.json")
      .then((r) => (r.ok ? r.json() : []))
      .then(setPosts)
      .catch(() => {});
  }, []);
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
          Latest Results from Our <span className="text-gold">Telegram Channel</span>
        </h3>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Real MT5 terminal screenshots, posted regularly in our public channel — full post
          history visible to everyone. Updated automatically on this page.
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
        {shots.slice(0, 6).map((s) => (
          <a
            key={s.file}
            href={`https://t.me/pssforxr/${s.id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-xl overflow-hidden border border-border/40 bg-card/60 hover:border-gold/50 transition-colors"
          >
            <img
              src={`/performance/${s.file}`}
              alt={`XAUUSD Robot live trading result screenshot${s.date ? ` from ${s.date.slice(0, 10)}` : ""}`}
              className="w-full h-48 object-cover object-top group-hover:opacity-90 transition-opacity"
              loading="lazy"
            />
            {s.date && (
              <div className="px-3 py-2 text-xs text-muted-foreground border-t border-border/40">
                {s.date.slice(0, 10)}
              </div>
            )}
          </a>
        ))}
      </div>
      <div className="text-center mt-8">
        <a
          href={CHANNEL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#229ED9] text-white font-bold px-8 py-3.5 rounded-xl hover:opacity-90 transition-opacity"
        >
          📊 Follow Daily Results on Telegram →
        </a>
      </div>
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
            Verified on{" "}
            <span className="text-gold">Myfxbook.</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto leading-relaxed">
            We don&apos;t post screenshots you can&apos;t check. Our live account is tracked
            independently on Myfxbook — see the real trades, drawdown and history for yourself.
          </p>
        </motion.div>

        {/* Myfxbook link card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-lg mx-auto text-center p-8 lg:p-10 rounded-2xl bg-card/60 border border-border/40"
        >
          <div className="text-sm font-semibold text-gold uppercase tracking-wider mb-4">
            Live &amp; Independently Verified
          </div>
          <a href={MYFXBOOK_URL} target="_blank" rel="noopener nofollow" className="block mb-6">
            <img
              src="https://widget.myfxbook.com/widget/widget.png?accountOid=12092687&type=4"
              alt="Live Myfxbook performance for the BBFx AI XAUUSD account"
              className="w-full h-auto rounded-lg border border-border/40"
              loading="lazy"
            />
          </a>
          <p className="text-muted-foreground text-sm mb-6">
            Full trade-by-trade history, updated in real time on Myfxbook. Past performance does
            not guarantee future results — trade only with capital you can afford to lose.
          </p>
          <a
            href={MYFXBOOK_URL}
            target="_blank"
            rel="noopener nofollow"
            className="inline-flex items-center gap-2 bg-gold text-background font-bold px-8 py-3.5 rounded-xl hover:opacity-90 transition-opacity"
          >
            View Live Myfxbook Results →
          </a>
        </motion.div>

        <TelegramShots />

      </div>
    </section>
  );
}

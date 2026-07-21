import { m as motion } from "framer-motion";

const MYFXBOOK_URL = "https://www.myfxbook.com/members/BBFx_Ai/bbfxai-100-usd/12092687";

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

      </div>
    </section>
  );
}

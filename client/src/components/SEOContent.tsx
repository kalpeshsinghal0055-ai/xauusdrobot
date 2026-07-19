import { m as motion } from "framer-motion";

export default function SEOContent() {
  return (
    <section id="learn" className="py-24 lg:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-card/20 via-transparent to-card/20" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <span className="text-gold text-sm font-semibold uppercase tracking-[0.2em] mb-4 block text-center">
            Learn
          </span>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-foreground mb-12 text-center">
            gold bot Trading
            <br />
            <span className="text-gold/80">Complete Guide</span>
          </h2>

          <div className="prose prose-invert max-w-none space-y-8">
            <article>
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                What is a XAUUSD Robot / Gold Expert Advisor?
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                A <strong className="text-foreground">XAUUSD Robot</strong>, also called a{" "}
                <strong className="text-foreground">Gold Expert Advisor (EA)</strong>, is an
                automated trading program installed directly on your{" "}
                <a href="#" className="text-gold hover:text-gold-light transition-colors">
                  MetaTrader 5 (MT5)
                </a>{" "}
                or MT4 platform. It uses algorithmic logic — built from technical indicators, price
                action patterns, and AI filters — to enter and exit{" "}
                <a href="#" className="text-gold hover:text-gold-light transition-colors">
                  gold (XAUUSD) trades
                </a>{" "}
                24 hours a day, 5 days a week, without manual intervention.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our free MT5 EA is designed specifically for XAUUSD gold bot trading, though our
                portfolio includes bots for EURUSD, GBPUSD, BTCUSD and other major pairs. All
                algos are available completely free when you open a trading account via our{" "}
                <a
                  href="https://one.exnessonelink.com/a/uhk6peieiq"
                  target="_blank"
                  rel="noopener noreferrer sponsored nofollow"
                  className="text-gold hover:text-gold-light transition-colors"
                >
                  broker affiliate link
                </a>
                .
              </p>
            </article>

            <div className="art-deco-divider my-10" />

            <article>
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                How Does Our Gold Trading Algorithm Work?
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Our <strong className="text-foreground">XAUUSD Expert Advisor</strong> combines
                multiple layers of AI-driven analysis. It reads M5, M15, H1, and H4 timeframes
                simultaneously, identifies confluence zones where institutional orders accumulate,
                applies a news filter to avoid high-impact events, and executes trades with
                pre-calculated stop-loss and take-profit targets. The algo also uses trailing stops
                to lock in profits as gold moves in your favour.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Unlike dangerous martingale or grid EAs, our MT5 gold robot uses{" "}
                <strong className="text-foreground">fixed fractional position sizing</strong> —
                meaning risk per trade is always proportional to your account balance. This makes
                it one of the safest{" "}
                <a href="#" className="text-gold hover:text-gold-light transition-colors">
                  automated gold trading systems
                </a>{" "}
                available today.
              </p>
            </article>

            <div className="art-deco-divider my-10" />

            <article>
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                Why Use Automated Trading for XAUUSD?
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Gold (XAU/USD) is one of the most actively traded instruments in the forex market,
                with over $120 billion in daily volume. Its volatility creates constant algorithmic
                trading opportunities. Human traders miss these setups due to fatigue, emotion, and
                information overload. A well-coded{" "}
                <strong className="text-foreground">MT5 Expert Advisor for gold</strong> captures
                these opportunities around the clock with consistent, rule-based execution.
              </p>
            </article>

            <div className="art-deco-divider my-10" />

            <article>
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                Free MT5 EA — Affiliate Model Explained
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Our business model is straightforward: we provide free forex and gold trading
                algorithms to traders who open broker accounts through our affiliate links. The
                broker pays us a small commission — at no cost to you. In return, you get a
                professional XAUUSD robot installed on your MT4/MT5, free setup support, and access
                to our private Telegram community with live{" "}
                <a
                  href="https://t.me/BBFx_Ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold hover:text-gold-light transition-colors"
                >
                  XAUUSD algo signals
                </a>
                .
              </p>
            </article>

            <div className="art-deco-divider my-10" />

            <article>
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                XAUUSD Automated Trading vs Manual Trading
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Manual gold trading requires constant chart monitoring, emotional discipline, and
                fast execution skills. Algo trading removes these barriers entirely. Our XAUUSD
                automated trading system monitors 4 timeframes simultaneously, reacts to price
                action in milliseconds, and never deviates from its tested strategy. For traders
                who want to build wealth in gold markets without spending hours at a screen, a{" "}
                <strong className="text-foreground">free MT5 gold EA</strong> is the logical
                solution.
              </p>
            </article>

            <div className="art-deco-divider my-10" />

            <article>
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                Best Brokers for MT5 EA Automated Trading on XAUUSD
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Choosing the right broker is critical for successful algo trading. For XAUUSD
                automated trading, you need low spreads, fast execution, and reliable MT5 platform
                support. Our recommended brokers —{" "}
                <strong className="text-foreground">Exness</strong>,{" "}
                <strong className="text-foreground">IC Markets</strong>,{" "}
                <strong className="text-foreground">Tickmill</strong>, and{" "}
                <strong className="text-foreground">Vantage</strong> — all offer ECN/STP execution
                with spreads starting from 0.0 pips on gold. Each broker is fully regulated by
                tier-1 authorities (FCA, ASIC, CySEC) and supports Expert Advisors on MetaTrader 5.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Tickmill stands out for its ultra-tight spreads and institutional-grade execution
                speed, making it particularly suitable for high-frequency XAUUSD scalping
                algorithms. Combined with NDD (No Dealing Desk) execution, your MT5 EA gets
                filled at the best available price with minimal slippage.
              </p>
            </article>
          </div>
        </motion.div>

        {/* SEO Keyword Tags */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-border/20"
        >
          <h4 className="text-xs font-semibold text-gold/40 uppercase tracking-wider mb-4 text-center">
            Algo Trading Keywords
          </h4>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              "XAUUSD Robot", "Gold EA MT5", "Free MT5 EA", "MT5 Expert Advisor",
              "gold bot Trading", "Forex Robot Free", "Gold Trading Bot",
              "Automated Gold Trading", "MT4 Gold EA", "XAUUSD Scalper",
              "AI Forex Robot", "MT5 Algo Bot", "MetaTrader Gold Robot",
              "Best Gold EA 2026", "Free Forex Algo", "XAUUSD Expert Advisor",
              "Gold Trading Algorithm", "Free Gold Robot", "MT5 EA XAUUSD",
              "Algo Trading XAUUSD", "Gold Scalper EA", "XAUUSD Automated Trading",
            ].map((keyword) => (
              <span
                key={keyword}
                className="px-3 py-1.5 text-xs text-muted-foreground/60 border border-border/20 rounded-full hover:border-gold/20 hover:text-gold/60 transition-colors"
              >
                {keyword}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

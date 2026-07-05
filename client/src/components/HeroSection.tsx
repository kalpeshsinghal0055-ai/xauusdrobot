import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-28 overflow-hidden"
      aria-label="XAUUSD Robot - Free Gold EA for MT5"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663516965961/Cbv9jtGGeaDuk52nzLan2A/hero-gold-vault-AHFnK4pX5f5BpLLbDDSyAt.webp"
          alt="Gold vault background - XAUUSD algo trading"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
      </div>

      {/* Content */}
      <div className="container relative z-10">
        <div className="max-w-3xl">
          {/* Live Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald/30 bg-emerald/5 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-emerald animate-pulse" />
            <span className="text-emerald text-sm font-medium tracking-wider uppercase">
              AI Algo — Live Trading Active
            </span>
          </motion.div>

          {/* Main Heading - H1 for SEO */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.95] mb-6"
          >
            <span className="text-foreground">The #1 Free</span>
            <br />
            <span className="gold-shimmer">Gold Trading</span>
            <br />
            <span className="text-foreground/80">Robot for MT5</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg lg:text-xl text-muted-foreground max-w-xl mb-10 leading-relaxed"
          >
            <strong className="text-foreground">AI-powered XAUUSD Expert Advisor</strong> for
            MetaTrader 4 & MT5. Get our algo completely{" "}
            <strong className="text-gold">free</strong> — just open a broker account via our
            affiliate link. No subscriptions. No hidden fees.{" "}
            <em>Pure algorithmic gold trading.</em>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="/BBFxAi_GGHP_v2_0_0.ex5"
              download
              className="group px-8 py-4 bg-emerald text-background font-bold text-base rounded transition-all duration-300 hover:shadow-xl hover:shadow-emerald/25 hover:scale-[1.02] active:scale-[0.98] flex items-center gap-2"
            >
              <span>⬇</span> DOWNLOAD EA (.EX5)
            </a>
            <a
              href="https://my.xs.com/links/go/5382"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 bg-gradient-to-r from-gold-dark via-gold to-gold-light text-background font-bold text-base rounded transition-all duration-300 hover:shadow-xl hover:shadow-gold/25 hover:scale-[1.02] active:scale-[0.98] flex items-center gap-2"
            >
              <span>⚡</span> GET FREE MT5 ALGO
            </a>
            <a
              href="https://t.me/BBFxAi_Community"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-4 bg-gradient-to-r from-gold via-gold-light to-gold text-background font-bold text-base rounded transition-all duration-300 hover:shadow-2xl hover:shadow-gold/50 hover:scale-[1.05] active:scale-[0.98] flex items-center gap-2 ring-2 ring-gold/60 ring-offset-2 ring-offset-background animate-pulse hover:animate-none"
            >
              <span>🚀</span> JOIN BBFXAI COMMUNITY
            </a>
            <a
              href="https://t.me/BBFx_Ai"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-gold/30 text-gold font-semibold text-base rounded hover:bg-gold/5 hover:border-gold/60 transition-all duration-300 flex items-center gap-2"
            >
              <span>💬</span> TALK TO US
            </a>
          </motion.div>

          {/* License key contact */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-5 text-sm text-muted-foreground"
          >
            For license key, contact{" "}
            <a
              href="https://t.me/BBFx_Ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold font-semibold hover:underline"
            >
              @BBFx_Ai on Telegram
            </a>
          </motion.p>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-gold/30 flex items-start justify-center p-1.5"
        >
          <div className="w-1.5 h-3 rounded-full bg-gold/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}

import { motion } from "framer-motion";

const features = [
  {
    icon: "🤖",
    title: "AI-Powered Entry Logic",
    desc: "Machine learning models identify high-probability XAUUSD setups across M5, M15, H1 and H4 timeframes. No emotional decisions — pure algorithmic gold trading.",
    tag: "MT5 EXPERT ADVISOR",
  },
  {
    icon: "📰",
    title: "Smart News Filter",
    desc: "The algo automatically pauses before NFP, FOMC, CPI, and other high-impact economic events. Protects your gold positions from volatility spikes.",
    tag: "RISK PROTECTION",
  },
  {
    icon: "🛡",
    title: "Multi-Layer Risk Management",
    desc: "Hard stop-loss, trailing stop, max daily drawdown, and position sizing based on account equity. No martingale. No dangerous grid. Safe by design.",
    tag: "CAPITAL SAFETY",
  },
  {
    icon: "📊",
    title: "MT4 & MT5 Compatible",
    desc: "Our free Expert Advisor runs seamlessly on MetaTrader 4 and MetaTrader 5. Works on Windows PC, VPS, or any hosting environment.",
    tag: "CROSS-PLATFORM",
  },
  {
    icon: "⚡",
    title: "12ms Trade Execution",
    desc: "ECN broker integration ensures institutional-speed order execution. Low latency means your XAUUSD algo gets the price you see — no requotes.",
    tag: "SPEED OPTIMIZED",
  },
  {
    icon: "💬",
    title: "Free Setup + Support",
    desc: "We install the MT5 gold robot on your platform for free. Dedicated Telegram support, 1-on-1 tuning sessions, and live signal alerts included.",
    tag: "FULL SUPPORT",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 lg:py-32 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/30 to-transparent" />

      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 lg:mb-20"
        >
          <span className="text-gold text-sm font-semibold uppercase tracking-[0.2em] mb-4 block">
            Technology
          </span>
          <h2 className="font-serif text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-6">
            Why Our Gold Algo
            <br />
            <span className="text-gold/80">Outperforms Manual Trading</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Every component of our XAUUSD Expert Advisor is engineered for institutional-grade
            gold algo trading on MT5.
          </p>
        </motion.div>

        {/* Feature Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-16 lg:mb-20 rounded-xl overflow-hidden gold-border"
        >
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663516965961/Cbv9jtGGeaDuk52nzLan2A/algorithm-dashboard-aw6qby5J22gmLk3QoDDxEK.webp"
            alt="XAUUSD Robot Algorithm Dashboard - MT5 EA Gold Trading Interface"
            className="w-full h-auto"
            loading="lazy"
          />
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.article
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="group p-8 rounded-lg bg-card/60 border border-border/50 hover:border-gold/30 transition-all duration-500 hover:shadow-lg hover:shadow-gold/5"
            >
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="font-serif text-xl font-bold text-foreground mb-3 group-hover:text-gold transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{feature.desc}</p>
              <span className="text-xs font-semibold text-gold/60 uppercase tracking-wider">
                {feature.tag}
              </span>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

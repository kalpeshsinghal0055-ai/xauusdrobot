import { motion } from "framer-motion";

const performanceData = [
  { name: "Gold Bot AI", value: 32.6, color: "bg-gold" },
  { name: "XAUUSD Swing", value: 18.2, color: "bg-gold/80" },
  { name: "BTC Momentum", value: 15.2, color: "bg-emerald" },
  { name: "Gold Scalper Pro", value: 12.4, color: "bg-gold/60" },
  { name: "Crypto Grid", value: 10.1, color: "bg-emerald/70" },
  { name: "EURUSD Trend", value: 8.7, color: "bg-gold/40" },
];

export default function Performance() {
  return (
    <section id="performance" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663516965961/Cbv9jtGGeaDuk52nzLan2A/gold-trading-chart-MHqrWM5APHoUGsGyi5nuqY.webp"
          alt="XAUUSD Gold Trading Chart Performance"
          className="w-full h-full object-cover opacity-15"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-background/85" />
      </div>

      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm font-semibold uppercase tracking-[0.2em] mb-4 block">
            Performance
          </span>
          <h2 className="font-serif text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-4">
            Real Algo Results.{" "}
            <span className="text-gold">Real Data.</span>
          </h2>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            { val: "85%", label: "Win Rate", sub: "Across all XAUUSD trades" },
            { val: "2,500+", label: "Active Traders", sub: "Using our free MT5 EA" },
            { val: "15+", label: "Algo Bots", sub: "All free via affiliate" },
            { val: "12ms", label: "Execution Speed", sub: "ECN order latency" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center p-6 rounded-lg bg-card/60 border border-border/30"
            >
              <div className="font-serif text-3xl lg:text-4xl font-bold text-gold mb-1">{stat.val}</div>
              <div className="text-sm font-semibold text-foreground mb-1">{stat.label}</div>
              <div className="text-xs text-muted-foreground">{stat.sub}</div>
            </motion.div>
          ))}
        </div>

        {/* Performance Bars */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mb-24"
        >
          <h3 className="text-sm font-semibold text-gold uppercase tracking-wider mb-6 text-center">
            Monthly Performance — By Algo
          </h3>
          <div className="space-y-4">
            {performanceData.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-center gap-4"
              >
                <span className="text-sm text-muted-foreground w-36 shrink-0">{item.name}</span>
                <div className="flex-1 h-8 bg-card rounded overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${(item.value / 35) * 100}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1, duration: 0.8, ease: "easeOut" }}
                    className={`h-full ${item.color} rounded flex items-center justify-end pr-3`}
                  >
                    <span className="text-xs font-bold text-background">+{item.value}%</span>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>


      </div>
    </section>
  );
}
import { motion } from "framer-motion";

const performanceData = [
  { name: "Gold Bot AI", value: 32.6, color: "bg-gold" },
  { name: "XAUUSD Swing", value: 18.2, color: "bg-gold/80" },
  { name: "BTC Momentum", value: 15.2, color: "bg-emerald" },
  { name: "Gold Scalper Pro", value: 12.4, color: "bg-gold/60" },
  { name: "Crypto Grid", value: 10.1, color: "bg-emerald/70" },
  { name: "EURUSD Trend", value: 8.7, color: "bg-gold/40" },
];

const myfxAccounts = [
  {
    name: "BBFxAi USD",
    broker: "Vantage Markets",
    leverage: "1:500",
    platform: "MT5",
    type: "Real (USD)",
    gain: "+17.62%",
    absGain: "+17.62%",
    drawdown: "4.44%",
    profit: "$176.21",
    balance: "$1,176.21",
    deposit: "$1,000.00",
    daily: "0.86%",
    monthly: "17.62%",
    image: "/Screenshot 2026-05-29 142908.png",
    alt: "BBFxAi USD Myfxbook verified performance chart",
  },
  {
    name: "BBFxAi",
    broker: "Vantage Markets",
    leverage: "1:2000",
    platform: "MT5",
    type: "Real (USC Cent)",
    gain: "+21.98%",
    absGain: "+18.77%",
    drawdown: "40.44%",
    profit: "USC 4,504.59",
    balance: "USC 11,552.59",
    deposit: "USC 24,000.00",
    daily: "0.17%",
    monthly: "5.20%",
    image: "/Screenshot 2026-05-29 142949.png",
    alt: "BBFxAi USC Myfxbook verified performance chart",
  },
];

export default function Performance() {
  return (
    <section id="performance" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663516965961/Cbv9jtGGeaDuk52nzLan2A/gold-trading-chart-MHqrWM5APHoUGsGyi5nuqY.webp"
          alt="XAUUSD Gold Trading Chart Performance"
          className="w-full h-full object-cover opacity-15"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-background/85" />
      </div>

      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm font-semibold uppercase tracking-[0.2em] mb-4 block">
            Performance
          </span>
          <h2 className="font-serif text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-4">
            Real Algo Results.{" "}
            <span className="text-gold">Real Data.</span>
          </h2>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            { val: "85%", label: "Win Rate", sub: "Across all XAUUSD trades" },
            { val: "2,500+", label: "Active Traders", sub: "Using our free MT5 EA" },
            { val: "15+", label: "Algo Bots", sub: "All free via affiliate" },
            { val: "12ms", label: "Execution Speed", sub: "ECN order latency" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center p-6 rounded-lg bg-card/60 border border-border/30"
            >
              <div className="font-serif text-3xl lg:text-4xl font-bold text-gold mb-1">{stat.val}</div>
              <div className="text-sm font-semibold text-foreground mb-1">{stat.label}</div>
              <div className="text-xs text-muted-foreground">{stat.sub}</div>
            </motion.div>
          ))}
        </div>

        {/* Performance Bars */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mb-24"
        >
          <h3 className="text-sm font-semibold text-gold uppercase tracking-wider mb-6 text-center">
            Monthly Performance — By Algo
          </h3>
          <div className="space-y-4">
            {performanceData.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-center gap-4"
              >
                <span className="text-sm text-muted-foreground w-36 shrink-0">{item.name}</span>
                <div className="flex-1 h-8 bg-card rounded overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${(item.value / 35) * 100}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1, duration: 0.8, ease: "easeOut" }}
                    className={`h-full ${item.color} rounded flex items-center justify-end pr-3`}
                  >
                    <span className="text-xs font-bold text-background">+{item.value}%</span>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── MYFXBOOK VERIFIED SECTION ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 16 16" aria-hidden="true">
              <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M4.5 8l2.5 2.5 4.5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Myfxbook Verified
          </div>
          <h3 className="font-serif text-3xl lg:text-4xl font-bold text-foreground mb-3">
            Live Verified{" "}
            <span className="text-gold">Track Records</span>
          </h3>
          <p className="text-muted-foreground text-sm max-w-lg mx-auto">
            Independent third-party verification by Myfxbook. Real accounts, real results — not demo, not backtested.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {myfxAccounts.map((acc, i) => (
            <motion.div
              key={acc.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-card/60 border border-border/30 rounded-xl overflow-hidden"
            >
              {/* Card Header */}
              <div className="bg-card/80 px-5 py-4 border-b border-border/20 flex items-start justify-between">
                <div>
                  <h4 className="font-semibold text-foreground text-base">{acc.name}</h4>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {acc.broker} · {acc.leverage} · {acc.platform}
                  </p>
                </div>
                <div className="flex flex-col items-end gap-1.5">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2.5 py-1 rounded-full">
                    {acc.type}
                  </span>
                  <span className="text-[10px] font-semibold text-emerald-400 flex items-center gap-1">
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 12 12" aria-hidden="true">
                      <circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="1.2"/>
                      <path d="M3.5 6l2 2 3-4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Verified
                  </span>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-3 p-5 pb-4">
                <div className="bg-background/40 rounded-lg p-3">
                  <p className="text-[11px] text-muted-foreground mb-1">Gain</p>
                  <p className="text-xl font-bold text-emerald-400">{acc.gain}</p>
                </div>
                <div className="bg-background/40 rounded-lg p-3">
                  <p className="text-[11px] text-muted-foreground mb-1">Drawdown</p>
                  <p className="text-xl font-bold text-foreground">{acc.drawdown}</p>
                </div>
                <div className="bg-background/40 rounded-lg p-3">
                  <p className="text-[11px] text-muted-foreground mb-1">Net Profit</p>
                  <p className="text-xl font-bold text-emerald-400">{acc.profit}</p>
                </div>
                <div className="bg-background/40 rounded-lg p-3">
                  <p className="text-[11px] text-muted-foreground mb-1">Balance</p>
                  <p className="text-xl font-bold text-foreground">{acc.balance}</p>
                </div>
              </div>

              {/* Myfxbook Screenshot */}
              <div className="mx-5 mb-4 rounded-lg overflow-hidden border border-border/20">
                <div className="bg-background/60 px-3 py-1.5 flex items-center gap-2 border-b border-border/20">
                  <svg className="w-3 h-3 text-emerald-400 shrink-0" fill="none" viewBox="0 0 12 12" aria-hidden="true">
                    <circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="1.2"/>
                    <path d="M3.5 6l2 2 3-4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-[10px] text-muted-foreground font-medium">
                    Myfxbook verified chart
                  </span>
                </div>
                <img
                  src={acc.image}
                  alt={acc.alt}
                  className="w-full h-auto block"
                  loading="lazy"
                />
              </div>

              {/* Footer Stats */}
              <div className="px-5 pb-4 flex flex-wrap gap-x-5 gap-y-1">
                <span className="text-xs text-muted-foreground">Daily: <span className="text-foreground font-medium">{acc.daily}</span></span>
                <span className="text-xs text-muted-foreground">Monthly: <span className="text-foreground font-medium">{acc.monthly}</span></span>
                <span className="text-xs text-muted-foreground">Deposit: <span className="text-foreground font-medium">{acc.deposit}</span></span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Verification Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-8"
        >
          <p className="text-xs text-muted-foreground flex items-center justify-center gap-2">
            <svg className="w-3.5 h-3.5 text-emerald-400" fill="none" viewBox="0 0 16 16" aria-hidden="true">
              <path d="M8 1.5L10 6h4.5l-3.5 2.5 1.5 4.5L8 10.5 3.5 13l1.5-4.5L1.5 6H6z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
            </svg>
            Independent third-party verification by Myfxbook · Results are from live trading accounts
          </p>
        </motion.div>

      </div>
    </section>
  );
}

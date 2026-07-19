import { m as motion } from "framer-motion";

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

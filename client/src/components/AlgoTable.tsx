import { motion } from "framer-motion";

const algos = [
  { name: "Gold Scalper Pro EA", pair: "XAUUSD", tf: "M5 / M15", ret: "+12.4% avg", strategy: "AI Scalping", status: "LIVE" },
  { name: "Gold Bot AI", pair: "XAUUSD", tf: "H1 / H4", ret: "+32.6% avg", strategy: "Trend Following", status: "LIVE" },
  { name: "XAUUSD Swing Algo", pair: "XAUUSD", tf: "H4 / D1", ret: "+18.2% avg", strategy: "Swing / Structure", status: "LIVE" },
  { name: "EURUSD Trend Bot", pair: "EURUSD", tf: "H1", ret: "+8.7% avg", strategy: "Trend + Breakout", status: "LIVE" },
  { name: "BTC Momentum AI", pair: "BTCUSD", tf: "M30", ret: "+15.2% avg", strategy: "Momentum AI", status: "LIVE" },
  { name: "Crypto Grid Bot", pair: "Multi-pair", tf: "H1", ret: "+10.1% avg", strategy: "Smart Grid", status: "LIVE" },
];

export default function AlgoTable() {
  return (
    <section id="bots" className="py-24 lg:py-32 relative">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm font-semibold uppercase tracking-[0.2em] mb-4 block">
            Algorithms
          </span>
          <h2 className="font-serif text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-6">
            All Free Algo Trading Bots
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Every Expert Advisor below is free via affiliate. Just open a broker account through
            our link and choose your algo.
          </p>
        </motion.div>

        {/* Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-x-auto rounded-xl gold-border"
        >
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-gold/10 bg-card/80">
                <th className="px-6 py-4 text-xs font-semibold text-gold uppercase tracking-wider">Algorithm Name</th>
                <th className="px-6 py-4 text-xs font-semibold text-gold uppercase tracking-wider">Pair</th>
                <th className="px-6 py-4 text-xs font-semibold text-gold uppercase tracking-wider hidden sm:table-cell">Timeframe</th>
                <th className="px-6 py-4 text-xs font-semibold text-gold uppercase tracking-wider">Monthly Return</th>
                <th className="px-6 py-4 text-xs font-semibold text-gold uppercase tracking-wider hidden md:table-cell">Strategy</th>
                <th className="px-6 py-4 text-xs font-semibold text-gold uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-xs font-semibold text-gold uppercase tracking-wider">Price</th>
              </tr>
            </thead>
            <tbody>
              {algos.map((algo, i) => (
                <tr
                  key={algo.name}
                  className="border-b border-border/30 hover:bg-gold/5 transition-colors"
                >
                  <td className="px-6 py-4 font-semibold text-foreground text-sm">{algo.name}</td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">{algo.pair}</td>
                  <td className="px-6 py-4 text-sm text-muted-foreground hidden sm:table-cell">{algo.tf}</td>
                  <td className="px-6 py-4 text-sm font-semibold text-emerald">{algo.ret}</td>
                  <td className="px-6 py-4 text-sm text-muted-foreground hidden md:table-cell">{algo.strategy}</td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald/10 text-emerald text-xs font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald animate-pulse" />
                      {algo.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="font-bold text-gold text-sm">FREE</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}

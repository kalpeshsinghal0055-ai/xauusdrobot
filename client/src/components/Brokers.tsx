import { m as motion } from "framer-motion";

const brokers = [
  {
    name: "XS",
    badge: "TOP PICK",
    badgeColor: "bg-gold/20 text-gold",
    desc: "Ultra-low XAUUSD spreads with lightning-fast ECN execution. Multi-regulated (FSC, CySEC, FSA). Our #1 recommended broker for running the free gold MT5 Expert Advisor.",
    specs: [
      { label: "XAUUSD Spread", value: "From 0.0 pips" },
      { label: "Min Deposit", value: "$5" },
      { label: "Platform", value: "MT4 / MT5" },
      { label: "Algo Trading", value: "Supported" },
    ],
    href: "https://my.xs.com/links/go/5382",
  },
  {
    name: "Exness",
    badge: "RECOMMENDED",
    badgeColor: "bg-gold/20 text-gold",
    desc: "Best ECN spreads on XAUUSD. Instant withdrawals. Regulation: FCA, CySEC, FSA. Ideal for algo trading with our free MT5 EA.",
    specs: [
      { label: "XAUUSD Spread", value: "From 0.1 pips" },
      { label: "Min Deposit", value: "$10" },
      { label: "Platform", value: "MT4 / MT5" },
      { label: "Algo Trading", value: "Supported" },
    ],
    href: "https://one.exnessonelink.com/a/uhk6peieiq",
  },
  {
    name: "Vantage",
    badge: "LOW SPREAD",
    badgeColor: "bg-orange-500/20 text-orange-400",
    desc: "Ultra-low spreads, fast execution, global regulation. Great option for XAUUSD automated trading with our free Expert Advisor on MT5.",
    specs: [
      { label: "XAUUSD Spread", value: "From 0.2 pips" },
      { label: "Min Deposit", value: "$50" },
      { label: "Platform", value: "MT4 / MT5" },
      { label: "Leverage", value: "Up to 1:500" },
    ],
    href: "https://vigco.co/la-com-inv/bbfxai",
  },
  {
    name: "Markets4you",
    badge: "FLEXIBLE",
    badgeColor: "bg-purple-500/20 text-purple-400",
    desc: "Flexible account types with low spreads on XAUUSD. Regulated, fast withdrawals, and full MT4/MT5 support - ideal for running our free gold Expert Advisor.",
    specs: [
      { label: "XAUUSD Spread", value: "From 0.2 pips" },
      { label: "Min Deposit", value: "$50" },
      { label: "Platform", value: "MT4 / MT5" },
      { label: "Leverage", value: "Up to 1:1000" },
    ],
    href: "https://www.markets4you.online/?affid=ky6kt3m",
  },
];

export default function Brokers() {
  return (
    <section id="brokers" className="py-24 lg:py-32 relative">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 lg:mb-20"
        >
          <span className="text-gold text-sm font-semibold uppercase tracking-[0.2em] mb-4 block">
            Brokers
          </span>
          <h2 className="font-serif text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-6">
            Open via Affiliate and Get
            <br />
            <span className="text-gold/80">Free Algo Instantly</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Our MT5 Expert Advisors are free when you open a live account through our broker
            affiliate links. These are our top recommended ECN brokers for gold (XAUUSD) trading.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {brokers.map((broker, i) => (
            <motion.div
              key={broker.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group gold-border rounded-xl p-8 bg-card hover:shadow-xl hover:shadow-gold/5 transition-all duration-500"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className={`px-3 py-1 rounded text-xs font-bold uppercase tracking-wider ${broker.badgeColor}`}>
                  {broker.badge}
                </span>
              </div>
              <h3 className="font-serif text-2xl lg:text-3xl font-bold text-foreground mb-3 group-hover:text-gold transition-colors">
                {broker.name}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">{broker.desc}</p>
              <div className="grid grid-cols-2 gap-3 mb-6">
                {broker.specs.map((spec) => (
                  <div key={spec.label} className="p-3 rounded bg-background/50 border border-border/30">
                    <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                      {spec.label}
                    </div>
                    <div className="text-sm font-semibold text-foreground">{spec.value}</div>
                  </div>
                ))}
              </div>
              <a
                href={broker.href}
                target="_blank"
                rel="noopener noreferrer sponsored nofollow"
                className="block w-full text-center py-3 px-6 rounded-lg bg-gold/10 border border-gold/30 text-gold font-semibold text-sm hover:bg-gold/20 hover:border-gold/60 transition-all duration-300"
              >
                Open Account - Free EA
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

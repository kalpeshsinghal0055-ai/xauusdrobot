import { m as motion } from "framer-motion";

const steps = [
  {
    num: "01",
    icon: "🏦",
    title: "Open Affiliate Broker Account",
    desc: "Register a live trading account with one of our recommended ECN brokers — Exness, IC Markets, Vantage, or Tickmill — using our affiliate link. Takes less than 5 minutes. Low minimum deposit starting at $10.",
    cta: { label: "OPEN ACCOUNT →", href: "https://one.exnessonelink.com/a/uhk6peieiq" },
  },
  {
    num: "02",
    icon: "📲",
    title: "Contact Us on Telegram",
    desc: "Message us on Telegram with your broker confirmation. Our team will verify your account and install your free XAUUSD Expert Advisor on your MetaTrader 4 or MT5 platform within 24 hours.",
    cta: { label: "MESSAGE NOW →", href: "https://t.me/BBFx_Ai" },
  },
  {
    num: "03",
    icon: "🤖",
    title: "Let the Algo Trade 24/7",
    desc: "Your MT5 gold algo runs automatically — scanning XAUUSD for high-probability setups, executing trades, managing risk, and compounding profits. You just monitor performance.",
    cta: { label: "JOIN LIVE SIGNALS →", href: "https://t.me/BBFx_Ai" },
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="py-24 lg:py-32 relative">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 lg:mb-20"
        >
          <span className="text-gold text-sm font-semibold uppercase tracking-[0.2em] mb-4 block">
            Process
          </span>
          <h2 className="font-serif text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-6">
            Get Your Free MT5 EA
            <br />
            <span className="text-gold/80">in 3 Simple Steps</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            No coding. No subscriptions. Just open a broker account via our affiliate link and we
            set up your gold trading algorithm free of charge.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="relative group"
            >
              <div className="gold-border rounded-lg p-8 lg:p-10 h-full bg-card hover:bg-card/80 transition-all duration-500 hover:shadow-xl hover:shadow-gold/5">
                {/* Step Number */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-serif text-5xl font-bold text-gold/20 group-hover:text-gold/40 transition-colors">
                    {step.num}
                  </span>
                  <span className="text-4xl">{step.icon}</span>
                </div>

                {/* Content */}
                <h3 className="font-serif text-xl lg:text-2xl font-bold text-foreground mb-4">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">{step.desc}</p>

                {/* CTA */}
                <a
                  href={step.cta.href}
                  target="_blank"
                  rel={/(exness|xs\.com|icmarkets|tickmill|vigco|markets4you|govpsfx)/.test(step.cta.href) ? "noopener noreferrer sponsored nofollow" : "noopener noreferrer"}
                  className="inline-flex items-center text-gold font-semibold text-sm hover:text-gold-light transition-colors tracking-wide"
                >
                  {step.cta.label}
                </a>
              </div>

              {/* Connector line (desktop) */}
              {i < 2 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-gradient-to-r from-gold/40 to-transparent" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

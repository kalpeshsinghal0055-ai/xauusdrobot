import { motion } from "framer-motion";

const reviews = [
  {
    text: "This gold algo is the real deal. 85%+ win rate isn't a gimmick — I've been running it for 3 months on Exness and the consistency is unlike anything I've used before.",
    name: "David Thompson",
    role: "XAUUSD Algo Trader, UK",
    initials: "DT",
  },
  {
    text: "I searched for a free MT5 EA for months and most were scams. This one actually works. The affiliate model makes total sense — no cost to me, great algo, proper support.",
    name: "Aman K.",
    role: "MT5 Trader, India",
    initials: "AK",
  },
  {
    text: "Risk controls are what sold me. No martingale, proper stop-loss on every trade, news filter active. I sleep well knowing my gold algo is protecting my capital.",
    name: "Nitin P.",
    role: "Algo Trader, Dubai",
    initials: "NP",
  },
  {
    text: "Setup was quick. Team installed the XAUUSD robot on my MT5 within hours. Now I just check performance once a day. Way better than staring at gold charts all night.",
    name: "Emily Zhang",
    role: "Crypto & Forex Investor",
    initials: "EZ",
  },
  {
    text: "The XAUUSD entries are incredibly clean. The algo waits for proper setups and doesn't overtrade. My equity curve went from zigzag to smooth consistent growth.",
    name: "Rohit S.",
    role: "Full-time Forex Trader, IN",
    initials: "RS",
  },
  {
    text: "Was skeptical about a 'free MT5 EA' but the affiliate model is clever and transparent. Got my gold robot running in under 24 hours. Returns are solid — highly recommend.",
    name: "Amit Verma",
    role: "Business Owner, Mumbai",
    initials: "AV",
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 lg:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/20 to-transparent" />

      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm font-semibold uppercase tracking-[0.2em] mb-4 block">
            Reviews
          </span>
          <h2 className="font-serif text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground">
            Trusted by <span className="text-gold">2,500+</span> Traders
            <br />
            Worldwide
          </h2>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="p-6 lg:p-8 rounded-lg bg-card/60 border border-border/30 hover:border-gold/20 transition-all duration-500"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <span key={j} className="text-gold text-sm">★</span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 italic font-[var(--font-accent)]">
                "{review.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center">
                  <span className="text-xs font-bold text-gold">{review.initials}</span>
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">{review.name}</div>
                  <div className="text-xs text-muted-foreground">{review.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

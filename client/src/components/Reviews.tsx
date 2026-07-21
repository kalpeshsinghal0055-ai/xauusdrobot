import { m as motion } from "framer-motion";

const reviews = [
  {
    text: "I searched for a free MT5 EA for months and most were scams. The affiliate model here makes sense — no cost to me, a proper gold algo, and real support when I had questions.",
    name: "Aman K.",
    role: "MT5 Trader, India",
    initials: "AK",
  },
  {
    text: "The risk controls are what sold me. No martingale, a fixed stop-loss on every trade, and a news filter. I like that it's disciplined rather than trying to trade everything.",
    name: "Nitin P.",
    role: "Algo Trader, Dubai",
    initials: "NP",
  },
  {
    text: "Setup was quick — the team helped me get the XAUUSD robot running on MT5 the same day. Now I just check in once a day instead of staring at gold charts all night.",
    name: "Emily Zhang",
    role: "Crypto & Forex Investor",
    initials: "EZ",
  },
  {
    text: "What I appreciate is the honesty — results are tracked live on Myfxbook so you can check the real account yourself, and they're upfront that trading carries risk.",
    name: "Rohit S.",
    role: "Full-time Forex Trader, IN",
    initials: "RS",
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
            What Gold Traders <span className="text-gold">Say</span>
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

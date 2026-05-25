import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663516965961/Cbv9jtGGeaDuk52nzLan2A/gold-bars-abstract-8fCpFjnDp7X2wJqDMFaawn.webp"
          alt="Gold bars - Start algo trading today"
          className="w-full h-full object-cover opacity-20"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-background/80" />
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="font-serif text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-6">
            Start Gold Algo Trading
            <br />
            <span className="gold-shimmer">Today — For Free</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
            Join 2,500+ traders already using our AI-powered XAUUSD robot on MT4 & MT5. Open a
            broker account via affiliate, and we install your free gold EA within 24 hours.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://one.exnessonelink.com/a/uhk6peieiq"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-gold-dark via-gold to-gold-light text-background font-bold text-base rounded hover:shadow-xl hover:shadow-gold/25 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] flex items-center gap-2"
            >
              <span>⚡</span> GET FREE MT5 EA NOW
            </a>
            <a
              href="https://t.me/BBFx_Ai"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-gold/30 text-gold font-semibold text-base rounded hover:bg-gold/5 hover:border-gold/60 transition-all duration-300 flex items-center gap-2"
            >
              <span>💬</span> TELEGRAM SUPPORT
            </a>
            <a
              href="https://t.me/BBFx_Ai"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-emerald/30 text-emerald font-semibold text-base rounded hover:bg-emerald/5 hover:border-emerald/60 transition-all duration-300 flex items-center gap-2"
            >
              <span>📡</span> LIVE SIGNALS
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

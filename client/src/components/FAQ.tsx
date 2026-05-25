import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What is the XAUUSD Robot?",
    a: "The XAUUSD Robot is an AI-powered Expert Advisor (EA) that automates gold trading on MetaTrader 4 and MT5 platforms. It identifies XAUUSD trading setups using algorithmic analysis and executes trades 24/7 with built-in risk management. Our MT5 EA uses machine learning to scan M5, M15, H1, and H4 timeframes simultaneously.",
  },
  {
    q: "Is the MT5 gold EA really free?",
    a: "Yes — 100% free. Our affiliate model means we earn a commission from the broker when you open an account through our link. You pay nothing extra. The algo, setup, and Telegram support are all free. No hidden fees, no subscriptions, no trial periods.",
  },
  {
    q: "Which broker should I use for the XAUUSD algo?",
    a: "We recommend Exness (lowest XAUUSD spreads, instant withdrawals), IC Markets (best ECN execution for algo trading), Tickmill (ultra-tight spreads with institutional execution), or Vantage (great low-spread option). All four are regulated, support MT5 EAs, and give excellent gold trading conditions.",
  },
  {
    q: "Do I need trading experience to use the algo?",
    a: "No. That's the beauty of algo trading. Our team installs and configures the XAUUSD robot on your MT5 for you. Beginners welcome — we provide full setup guidance via Telegram. The EA handles all analysis, entries, exits, and risk management automatically.",
  },
  {
    q: "Does the EA use martingale or grid strategies?",
    a: "No martingale. No grid. Our gold algorithm uses fixed fractional position sizing with a hard stop-loss on every trade. This is one of the safest MT5 EAs available, designed to protect your capital first. Risk per trade is always proportional to your account balance.",
  },
  {
    q: "What is the minimum deposit required?",
    a: "We recommend starting with at least $200–$500 for standard accounts. The algo automatically adjusts lot sizes based on your account balance, so it works at any deposit level. Exness accepts as low as $10, Tickmill from $100.",
  },
  {
    q: "Can the robot trade Bitcoin and Forex too?",
    a: "Yes! We have algos for BTCUSD, EURUSD, GBPUSD, and more. All are free via the same affiliate model. Contact us on Telegram for our full bot portfolio including crypto, forex, and commodities.",
  },
  {
    q: "What does 'algo trading affiliate' mean?",
    a: "Algo trading affiliate means you open a broker account through our referral (affiliate) link. The broker pays us a small fee — you pay nothing extra. In return, you get our professional trading algorithm free, plus full setup and support.",
  },
  {
    q: "Do I need a VPS to run the XAUUSD Robot?",
    a: "Yes, a VPS (Virtual Private Server) is recommended for 24/7 uninterrupted algo trading. We recommend GoVPS for reliable forex VPS hosting. Our team can help you set up the VPS and install the EA remotely.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 lg:py-32 relative">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm font-semibold uppercase tracking-[0.2em] mb-4 block">
            FAQ
          </span>
          <h2 className="font-serif text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground">
            Frequently Asked
            <br />
            <span className="text-gold/80">Questions</span>
          </h2>
        </motion.div>

        {/* FAQ Items */}
        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="border border-border/30 rounded-lg overflow-hidden hover:border-gold/20 transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 lg:p-6 text-left"
                aria-expanded={openIndex === i}
              >
                <h3 className="font-serif text-base lg:text-lg font-semibold text-foreground pr-4">
                  {faq.q}
                </h3>
                <ChevronDown
                  size={20}
                  className={`text-gold shrink-0 transition-transform duration-300 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-5 lg:px-6 pb-5 lg:pb-6">
                      <p className="text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

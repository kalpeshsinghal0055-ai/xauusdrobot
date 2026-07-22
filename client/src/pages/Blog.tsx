/**
 * Blog Page - XAUUSD Robot
 * Style: Luxury Gold Vault theme
 */

import { m as motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useSeo } from "@/lib/seo";

const blogPosts = [
  {
    slug: "xauusd-scalping-bot",
    title: "XAUUSD Scalping Bot: Free Gold Scalper EA for MT4 & MT5",
    excerpt: "How gold scalping bots work, why the broker spread and VPS decide everything, scalping vs trend-following — plus our free XAUUSD Scalping EA.",
    category: "Guides",
    date: "2026-07-23",
    readTime: "8 min read",
    ext: true,
  },
  {
    slug: "mt4-vs-mt5-for-gold-ea",
    title: "MT4 vs MT5 for a Gold EA: Which Should You Run?",
    excerpt: "MT4 or MT5 for your XAUUSD robot? Speed, backtesting, the economic calendar and which MetaTrader platform to choose.",
    category: "Comparison",
    date: "2026-07-22",
    readTime: "7 min read",
    ext: true,
  },
  {
    slug: "how-much-money-to-start-gold-ea",
    title: "How Much Money Do You Need to Start a Gold EA?",
    excerpt: "Realistic XAUUSD minimums — $100 vs $500 vs $1,000, lot sizes, the drawdown buffer, and the cent-account shortcut.",
    category: "Guides",
    date: "2026-07-21",
    readTime: "7 min read",
    ext: true,
  },
  {
    slug: "trading-gold-during-news-nfp-fomc-cpi",
    title: "Trading Gold During News: Should Your EA Trade NFP & FOMC?",
    excerpt: "What really happens to XAUUSD spreads and stops during NFP, FOMC and CPI — and how a news filter works.",
    category: "Guides",
    date: "2026-07-20",
    readTime: "8 min read",
    ext: true,
  },
  {
    slug: "do-gold-trading-robots-work",
    title: "Do Gold Trading Robots Actually Work? (2026)",
    excerpt: "An honest look at when XAUUSD robots succeed, when they fail, and how to spot a scam.",
    category: "Guides",
    date: "2026-07-17",
    readTime: "8 min read",
    ext: true,
  },
  {
    slug: "free-xauusd-gold-ea",
    title: "Free XAUUSD Trading Bot & Gold EA: What You Get & How to Download",
    excerpt: "What a free XAUUSD trading bot (gold EA) really gives you, how the no-cost model works, how to download it, and how to test it safely.",
    category: "Guides",
    date: "2026-07-17",
    readTime: "6 min read",
    ext: true,
  },
  {
    slug: "gold-ea-strategy-types",
    title: "Gold EA Strategy Types Explained (2026)",
    excerpt: "Scalping, grid, martingale, trend and news gold EA strategies — how each works and the risks.",
    category: "Guides",
    date: "2026-07-17",
    readTime: "7 min read",
    ext: true,
  },
  {
    slug: "best-vps-gold-ea",
    title: "Best VPS for Gold EA Trading (2026)",
    excerpt: "What a forex VPS does for a gold robot, the specs that matter, and how to choose one.",
    category: "Tools",
    date: "2026-07-17",
    readTime: "6 min read",
    ext: true,
  },
  {
    slug: "how-to-backtest-gold-ea",
    title: "How to Backtest a Gold EA Properly (MT4 & MT5)",
    excerpt: "Backtest a gold EA the right way — data quality, realistic spreads and forward testing.",
    category: "Guides",
    date: "2026-07-17",
    readTime: "6 min read",
    ext: true,
  },
  {
    slug: "gold-ea-risk-management",
    title: "Gold EA Risk Management: Settings That Protect You",
    excerpt: "Risk per trade, lot sizing, stop-loss and drawdown limits that keep a gold robot safe.",
    category: "Guides",
    date: "2026-07-17",
    readTime: "6 min read",
    ext: true,
  },{
    slug: "best-brokers-xauusd-gold-ea",
    title: "Best Brokers for XAUUSD / Gold EA Trading (2026)",
    excerpt: "The best MT4 & MT5 brokers for automated gold trading — what matters in spreads, execution and EA support, plus our top broker picks.",
    category: "Brokers",
    date: "2026-07-17",
    readTime: "6 min read",
    ext: true,
  },{
    slug: "best-xauusd-robot-gold-ea-2026",
    title: "Best XAUUSD Robots & Gold EAs 2026 (Honest Comparison)",
    excerpt: "An honest comparison of the best XAUUSD robots and gold EAs for 2026 — the traits that matter, red flags to avoid, and how to pick one that fits your goals.",
    category: "Comparison",
    date: "2026-07-16",
    readTime: "8 min read",
    ext: true,
  },
  {
    slug: "best-gold-ea-prop-firm-ftmo",
    title: "Best Gold EA for Prop Firm & FTMO Challenges (2026 Guide)",
    excerpt: "Can a XAUUSD robot pass an FTMO or prop firm challenge? The rules that matter, prop-firm-safe EA traits, red flags, and honest expectations.",
    category: "Guide",
    date: "2026-07-16",
    readTime: "9 min read",
    ext: true,
  },
  {
    slug: "xauusd-robot-complete-guide",
    ext: true,
    title: "XAUUSD Robot: The Complete 2026 Guide to Automated Gold Trading",
    excerpt: "What a gold trading robot is, how it works, the strategies it uses, and what to realistically expect.",
    category: "Guide",
    date: "July 12, 2026",
    readTime: "8 min read",
  },
  {
    slug: "how-to-set-up-xauusd-robot-mt4-mt5",
    ext: true,
    title: "How to Set Up a XAUUSD Robot on MT4 & MT5",
    excerpt: "A beginner-friendly, step-by-step guide to installing, backtesting, and running a gold robot the safe way.",
    category: "Tutorial",
    date: "July 12, 2026",
    readTime: "7 min read",
  },
  {
    slug: "bbfxai-xauusd-robot-mt5-complete-guide",
    title: "BBFxAi XAUUSD Robot for MT5 – Complete Guide to AI-Powered Gold Trading in 2026",
    excerpt: "Everything you need to know about the BBFxAi XAUUSD Robot — what it is, how it works, key features, installation steps, best practices, and FAQs for automated gold trading.",
    category: "AI Trading Guide",
    date: "May 29, 2026",
    readTime: "8 min read",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

export default function Blog() {
  useSeo({
    title: "XAUUSD Robot Blog — Gold Algo Trading Guides & MT5 EA Tips",
    description:
      "Guides, tutorials and insights on XAUUSD algo trading, the free MT5 gold EA, broker setup and automated gold strategies from the BBFxAi team.",
    canonical: "https://xauusdrobot.com/blog/",
  });
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <main className="pt-24 pb-24">
        <section className="container text-center py-16 lg:py-20">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block px-4 py-1.5 text-xs font-semibold text-gold border border-gold/20 rounded-full uppercase tracking-widest mb-6">
              Gold Trading Intelligence
            </span>
            <h1 className="font-serif text-4xl lg:text-6xl font-bold text-foreground mb-5 leading-tight">
              XAUUSD <span className="text-gold">Insights</span> &amp; Guides
            </h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto leading-relaxed">
              Deep-dive analysis, MT5 EA tutorials, and algorithmic trading strategies for serious gold traders.
            </p>
          </motion.div>
        </section>
        <div className="container">
          <div className="h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent mb-12" />
        </div>
        <section className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, i) => (
              <motion.div key={post.slug} custom={i} initial="hidden" animate="show" variants={fadeUp} className="group">
                <a href={`/blog/${post.slug}${(post as any).ext ? "/" : ""}`}>
                  <div className="h-full bg-card border border-border/30 rounded-xl overflow-hidden hover:border-gold/30 transition-all duration-300 hover:shadow-xl hover:shadow-gold/5 cursor-pointer">
                    <div className="relative h-48 overflow-hidden bg-card">
                      <img
                        src={`/images/${post.slug}.jpg`}
                        alt={post.title}
                        width={1200}
                        height={630}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3 flex-wrap">
                        <span className="px-2.5 py-1 text-[10px] font-bold text-gold bg-gold/10 border border-gold/15 rounded-full uppercase tracking-wider">{post.category}</span>
                        <span className="text-xs text-muted-foreground">{post.date}</span>
                      </div>
                      <h2 className="font-serif text-base lg:text-lg font-bold text-foreground leading-snug mb-3 group-hover:text-gold transition-colors line-clamp-3">{post.title}</h2>
                      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 mb-5">{post.excerpt}</p>
                      <div className="flex items-center justify-between pt-4 border-t border-border/20">
                        <span className="text-xs text-muted-foreground">{post.readTime}</span>
                        <span className="text-xs font-semibold text-gold uppercase tracking-wider group-hover:translate-x-1 transition-transform inline-block">Read Article →</span>
                      </div>
                    </div>
                  </div>
                </a>
              </motion.div>
            ))}
            <motion.div custom={blogPosts.length} initial="hidden" animate="show" variants={fadeUp}>
              <div className="h-full bg-card/30 border border-dashed border-border/30 rounded-xl flex flex-col items-center justify-center py-16 px-6 text-center opacity-60">
                <div className="text-3xl mb-3">✍️</div>
                <p className="text-sm text-muted-foreground">More articles coming soon</p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

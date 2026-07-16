/**
 * Blog Page - XAUUSD Robot
 * Style: Luxury Gold Vault theme
 */

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useSeo } from "@/lib/seo";

const blogPosts = [
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
    slug: "bbfxai-xauusd-expert-advisor-guide",
    title: "Maximizing Gold Trading Efficiency: A Comprehensive Guide to the BBFxAi XAUUSD Expert Advisor",
    excerpt: "Discover how BBFxAi's non-martingale, trend-following algorithm delivers institutional-grade gold trading automation on MetaTrader 5 — completely free via our affiliate ecosystem.",
    category: "Comprehensive Guide",
    date: "May 29, 2026",
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
    canonical: "https://xauusdrobot.com/blog",
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
                    <div className="relative h-48 bg-gradient-to-br from-[#0d0b07] via-[#1a1200] to-background flex items-center justify-center overflow-hidden">
                      <div className="absolute inset-0" style={{ backgroundImage: "repeating-linear-gradient(0deg,transparent,transparent 29px,rgba(212,160,23,0.05) 30px),repeating-linear-gradient(90deg,transparent,transparent 29px,rgba(212,160,23,0.05) 30px)" }} />
                      <div className="relative z-10 text-center">
                        <div className="text-5xl mb-2 drop-shadow-[0_0_15px_rgba(212,160,23,0.5)]">⬡</div>
                        <div className="text-gold/70 text-xs uppercase tracking-widest font-semibold">BBFxAi · XAUUSD EA</div>
                      </div>
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

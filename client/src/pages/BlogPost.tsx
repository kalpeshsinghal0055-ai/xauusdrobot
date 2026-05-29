/**
 * BlogPost Page - XAUUSD Robot
 * Dynamic blog post renderer
 */

import { motion } from "framer-motion";
import { Link, useRoute } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function BBFxAiGuideContent() {
  return (
    <div className="space-y-8 text-muted-foreground text-[15px] leading-relaxed">
      <p>
        In the dynamic world of financial markets, automated trading has emerged as a cornerstone for traders seeking
        precision and consistency. <strong className="text-foreground">BBFxAi</strong> stands at the forefront of this
        evolution, offering a sophisticated Expert Advisor (EA) specifically engineered for{" "}
        <strong className="text-foreground">XAUUSD (Gold)</strong> trading on the{" "}
        <strong className="text-foreground">MetaTrader 5 (MT5)</strong> platform.
      </p>

      <div>
        <h2 className="font-serif text-xl lg:text-2xl font-bold text-foreground mt-10 mb-4 pb-3 border-b border-border/30">
          The BBFxAi Philosophy: Performance Without Compromise
        </h2>
        <p>
          The core of the BBFxAi strategy is built upon the principles of{" "}
          <strong className="text-foreground">stability and intelligent market analysis</strong>. Unlike many automated
          systems that rely on high-risk methodologies such as Martingale or Grid strategies — which can lead to
          catastrophic account drawdowns during volatile periods — BBFxAi utilizes a proprietary algorithm designed to
          identify high-probability setups.
        </p>
        <div className="my-6 pl-5 border-l-2 border-gold bg-gold/5 py-4 pr-4 rounded-r-lg italic text-sm">
          "Our mission is to provide retail traders with institutional-grade tools. By focusing exclusively on XAUUSD,
          we ensure that our EA is perfectly tuned to the specific liquidity and volatility patterns of the gold market."
          <div className="mt-2 not-italic text-xs text-gold font-semibold">— BBFxAi Development Team</div>
        </div>
      </div>

      <div>
        <h2 className="font-serif text-xl lg:text-2xl font-bold text-foreground mt-10 mb-4 pb-3 border-b border-border/30">
          Technical Superiority and Strategy
        </h2>
        <p>The BBFxAi EA is not just another trading robot — it is a comprehensive trading solution backed by a heavy track record of live trading.</p>
        <div className="my-6 overflow-x-auto rounded-xl border border-border/30">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gold/10 border-b border-border/30">
                <th className="text-left px-4 py-3 font-semibold text-gold text-xs uppercase tracking-wider">Feature</th>
                <th className="text-left px-4 py-3 font-semibold text-gold text-xs uppercase tracking-wider">BBFxAi EA Specification</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Primary Asset", "XAUUSD (Gold)"],
                ["Platform", "MetaTrader 5 (MT5)"],
                ["Strategy Type", "Non-Martingale, Non-Grid, Trend-Following"],
                ["Risk Management", "Dynamic Stop-Loss and Take-Profit Levels"],
                ["Live Tracking", "Available for all active users"],
              ].map(([feature, spec], i) => (
                <tr key={i} className="border-b border-border/10 hover:bg-gold/5 transition-colors">
                  <td className="px-4 py-3 text-foreground font-medium">{feature}</td>
                  <td className="px-4 py-3 text-muted-foreground">{spec}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <h2 className="font-serif text-xl lg:text-2xl font-bold text-foreground mt-10 mb-4 pb-3 border-b border-border/30">
          Seamless Integration &amp; Infrastructure Requirements
        </h2>
        <p>BBFxAi recommends a <strong className="text-foreground">Virtual Private Server (VPS)</strong> to ensure 24/7 uptime and minimal latency.</p>
        <div className="my-6 bg-card border border-border/30 rounded-xl p-5 flex gap-4 items-start">
          <div className="text-3xl flex-shrink-0">🖥️</div>
          <div>
            <h3 className="text-foreground font-semibold text-sm mb-1">Recommended VPS: GoVPSFX</h3>
            <p className="text-xs text-muted-foreground mb-3">Use GoVPSFX with the affiliate code below for optimal BBFxAi EA compatibility:</p>
            <a href="https://my.govpsfx.com/?ref=NDM0ODU6OlJV" target="_blank" rel="noopener noreferrer"
              className="inline-block font-mono text-xs bg-background border border-gold/20 text-gold px-3 py-1.5 rounded hover:bg-gold/5 transition-colors">
              NDM0ODU6OlJV
            </a>
          </div>
        </div>
      </div>

      <div>
        <h2 className="font-serif text-xl lg:text-2xl font-bold text-foreground mt-10 mb-4 pb-3 border-b border-border/30">
          Partnering for Success: The Affiliate Model
        </h2>
        <p>BBFxAi provides the <strong className="text-foreground">EA free of charge</strong> to users who join through our partner brokers.</p>
        <h3 className="text-base font-semibold text-foreground mt-6 mb-3">Recommended Broker Partners</h3>
        <div className="my-4 overflow-x-auto rounded-xl border border-border/30">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gold/10 border-b border-border/30">
                <th className="text-left px-4 py-3 font-semibold text-gold text-xs uppercase tracking-wider">Broker</th>
                <th className="text-left px-4 py-3 font-semibold text-gold text-xs uppercase tracking-wider">IB / Partner Code</th>
                <th className="text-left px-4 py-3 font-semibold text-gold text-xs uppercase tracking-wider">Register</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: "Vantage", code: "bbfxai", url: "https://vigco.co/la-com-inv/bbfxai" },
                { name: "IC Markets", code: "78272", url: "https://icmarkets.com/?camp=78272" },
                { name: "Exness", code: "uhk6peieiq", url: "https://one.exnessonelink.com/a/uhk6peieiq" },
                { name: "Tickmill", code: "IB25495227", url: "https://tickmill.link/3RimUpD" },
              ].map((broker, i) => (
                <tr key={i} className="border-b border-border/10 hover:bg-gold/5 transition-colors">
                  <td className="px-4 py-3 text-foreground font-semibold">{broker.name}</td>
                  <td className="px-4 py-3"><span className="font-mono text-xs bg-background border border-gold/20 text-gold px-2 py-1 rounded">{broker.code}</span></td>
                  <td className="px-4 py-3">
                    <a href={broker.url} target="_blank" rel="noopener noreferrer"
                      className="inline-block px-3 py-1.5 bg-gradient-to-r from-gold-dark via-gold to-gold-light text-background text-xs font-bold rounded hover:opacity-90 transition-opacity">
                      Register
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="my-5 bg-gold/5 border border-gold/15 rounded-lg p-4 text-sm">
          <span className="text-gold font-semibold">💡 Note: </span>
          Using our affiliate links and IB codes qualifies you to receive the BBFxAi EA completely free.
        </div>
      </div>

      <div>
        <h2 className="font-serif text-xl lg:text-2xl font-bold text-foreground mt-10 mb-4 pb-3 border-b border-border/30">
          Conclusion &amp; Support
        </h2>
        <p>BBFxAi provides institutional-grade gold trading tools <strong className="text-foreground">free of charge</strong> to our dedicated community.</p>
        <div className="grid sm:grid-cols-2 gap-4 my-6">
          <a href="https://t.me/BBFx_Ai" target="_blank" rel="noopener noreferrer"
            className="flex flex-col items-center justify-center bg-card border border-border/30 rounded-xl py-6 px-4 text-center hover:border-gold/30 transition-all hover:-translate-y-0.5 group">
            <div className="text-3xl mb-2">✈️</div>
            <div className="text-[10px] text-muted-foreground uppercase tracking-widest mb-1">Telegram Support</div>
            <div className="text-gold font-semibold text-sm">@BBFx_Ai</div>
          </a>
          <a href="https://wa.me/919251195316" target="_blank" rel="noopener noreferrer"
            className="flex flex-col items-center justify-center bg-card border border-border/30 rounded-xl py-6 px-4 text-center hover:border-gold/30 transition-all hover:-translate-y-0.5 group">
            <div className="text-3xl mb-2">💬</div>
            <div className="text-[10px] text-muted-foreground uppercase tracking-widest mb-1">WhatsApp Support</div>
            <div className="text-gold font-semibold text-sm">+91 92511 95316</div>
          </a>
        </div>
      </div>
    </div>
  );
}

const posts: Record<string, { title: string; category: string; date: string; readTime: string; author: string; content: React.ReactNode; }> = {
  "bbfxai-xauusd-expert-advisor-guide": {
    title: "Maximizing Gold Trading Efficiency: A Comprehensive Guide to the BBFxAi XAUUSD Expert Advisor",
    category: "Comprehensive Guide",
    date: "May 29, 2026",
    readTime: "7 min read",
    author: "BBFxAi Development Team",
    content: <BBFxAiGuideContent />,
  },
};

export default function BlogPost() {
  const [, params] = useRoute("/blog/:slug");
  const slug = params?.slug ?? "";
  const post = posts[slug];

  if (!post) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Navbar />
        <div className="flex-1 flex flex-col items-center justify-center text-center py-32">
          <div className="text-5xl mb-4">📄</div>
          <h1 className="font-serif text-2xl text-foreground mb-3">Post not found</h1>
          <Link href="/blog"><span className="text-gold hover:underline cursor-pointer text-sm">← Back to Blog</span></Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <main className="pt-24 pb-24">
        <div className="container max-w-3xl py-12 lg:py-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Link href="/blog"><span className="text-xs text-muted-foreground hover:text-gold transition-colors cursor-pointer mb-6 inline-block">← Back to Blog</span></Link>
            <span className="inline-block px-3 py-1 text-[10px] font-bold text-gold bg-gold/10 border border-gold/15 rounded-full uppercase tracking-wider mb-5">{post.category}</span>
            <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-5">{post.title}</h1>
            <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
              <span>📅 {post.date}</span>
              <span>⏱ {post.readTime}</span>
              <span>✍️ {post.author}</span>
            </div>
          </motion.div>
        </div>
        <div className="container max-w-3xl mb-12">
          <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="w-full h-56 sm:h-72 rounded-xl border border-border/30 flex items-center justify-center relative overflow-hidden"
            style={{ background: "radial-gradient(ellipse at 30% 50%, rgba(212,160,23,0.15) 0%, transparent 60%), linear-gradient(135deg, #0d0b07 0%, #1a1200 40%, #0a0a0a 100%)" }}>
            <div className="absolute inset-0" style={{ backgroundImage: "repeating-linear-gradient(0deg,transparent,transparent 39px,rgba(212,160,23,0.04) 40px),repeating-linear-gradient(90deg,transparent,transparent 39px,rgba(212,160,23,0.04) 40px)" }} />
            <div className="relative z-10 text-center">
              <div className="text-5xl mb-3 drop-shadow-[0_0_20px_rgba(212,160,23,0.5)]">⬡</div>
              <div className="font-serif text-gold font-bold text-base tracking-widest uppercase">BBFxAi · XAUUSD Expert Advisor</div>
              <div className="text-muted-foreground text-xs mt-1 tracking-wider">MetaTrader 5 · Automated Gold Trading</div>
            </div>
          </motion.div>
        </div>
        <motion.article initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
          className="container max-w-3xl">
          {post.content}
        </motion.article>
      </main>
      <Footer />
    </div>
  );
}

/**
 * BlogPost Page - XAUUSD Robot
 */

import { m as motion } from "framer-motion";
import { Link, useRoute } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useSeo } from "@/lib/seo";

const postsMeta: Record<string, { title: string; category: string; date: string; readTime: string; author: string }> = {
  "bbfxai-xauusd-expert-advisor-guide": {
    title: "Maximizing Gold Trading Efficiency: A Comprehensive Guide to the BBFxAi XAUUSD Expert Advisor",
    category: "Comprehensive Guide", date: "May 29, 2026", readTime: "7 min read", author: "BBFxAi Development Team",
  },
  "bbfxai-xauusd-robot-mt5-complete-guide": {
    title: "BBFxAi XAUUSD Robot for MT5 – Complete Guide to AI-Powered Gold Trading in 2026",
    category: "AI Trading Guide", date: "May 29, 2026", readTime: "8 min read", author: "BBFxAi Development Team",
  },
};

const brokers = [
  { name: "Vantage", code: "bbfxai", url: "https://vigco.co/la-com-inv/bbfxai" },
  { name: "IC Markets", code: "78272", url: "https://icmarkets.com/?camp=78272" },
  { name: "Exness", code: "uhk6peieiq", url: "https://one.exnessonelink.com/a/uhk6peieiq" },
  { name: "Tickmill", code: "IB25495227", url: "https://tickmill.link/3RimUpD" },
];

function SupportCards() {
  return (
    <div className="grid sm:grid-cols-2 gap-4 my-6">
      <a href="https://t.me/BBFx_Ai" target="_blank" rel="noopener noreferrer"
        className="flex flex-col items-center justify-center bg-card border border-border/30 rounded-xl py-6 px-4 text-center hover:border-gold/30 transition-all hover:-translate-y-0.5">
        <div className="text-3xl mb-2">✈️</div>
        <div className="text-[10px] text-muted-foreground uppercase tracking-widest mb-1">Telegram</div>
        <div className="text-gold font-semibold text-sm">@BBFx_Ai</div>
      </a>
      <a href="https://wa.me/919251195316" target="_blank" rel="noopener noreferrer"
        className="flex flex-col items-center justify-center bg-card border border-border/30 rounded-xl py-6 px-4 text-center hover:border-gold/30 transition-all hover:-translate-y-0.5">
        <div className="text-3xl mb-2">💬</div>
        <div className="text-[10px] text-muted-foreground uppercase tracking-widest mb-1">WhatsApp</div>
        <div className="text-gold font-semibold text-sm">+91 92511 95316</div>
      </a>
    </div>
  );
}

function Post1() {
  return (
    <div className="space-y-8 text-muted-foreground text-[15px] leading-relaxed">
      <p>In the dynamic world of financial markets, automated trading has emerged as a cornerstone for traders seeking precision. <strong className="text-foreground">BBFxAi</strong> offers a sophisticated Expert Advisor for <strong className="text-foreground">XAUUSD (Gold)</strong> on <strong className="text-foreground">MetaTrader 5</strong>.</p>
      <div>
        <h2 className="font-serif text-xl lg:text-2xl font-bold text-foreground mt-10 mb-4 pb-3 border-b border-border/30">The BBFxAi Philosophy</h2>
        <p>BBFxAi uses a <strong className="text-foreground">non-martingale, non-grid, trend-following algorithm</strong> to identify high-probability setups with controlled drawdowns.</p>
        <div className="my-6 pl-5 border-l-2 border-gold bg-gold/5 py-4 pr-4 rounded-r-lg italic text-sm">
          "Our mission is to provide retail traders with institutional-grade tools, perfectly tuned to XAUUSD liquidity and volatility patterns."
          <div className="mt-2 not-italic text-xs text-gold font-semibold">— BBFxAi Development Team</div>
        </div>
      </div>
      <div>
        <h2 className="font-serif text-xl lg:text-2xl font-bold text-foreground mt-10 mb-4 pb-3 border-b border-border/30">Technical Specifications</h2>
        <div className="overflow-x-auto rounded-xl border border-border/30">
          <table className="w-full text-sm">
            <thead><tr className="bg-gold/10 border-b border-border/30"><th className="text-left px-4 py-3 text-gold text-xs uppercase">Feature</th><th className="text-left px-4 py-3 text-gold text-xs uppercase">Specification</th></tr></thead>
            <tbody>{[["Primary Asset","XAUUSD (Gold)"],["Platform","MetaTrader 5 (MT5)"],["Strategy","Non-Martingale, Non-Grid, Trend-Following"],["Risk Management","Dynamic Stop-Loss and Take-Profit"],["Live Tracking","Available for all active users"]].map(([f,s],i)=>(
              <tr key={i} className="border-b border-border/10 hover:bg-gold/5"><td className="px-4 py-3 text-foreground font-medium">{f}</td><td className="px-4 py-3">{s}</td></tr>
            ))}</tbody>
          </table>
        </div>
      </div>
      <div>
        <h2 className="font-serif text-xl lg:text-2xl font-bold text-foreground mt-10 mb-4 pb-3 border-b border-border/30">VPS Recommendation</h2>
        <div className="bg-card border border-border/30 rounded-xl p-5 flex gap-4 items-start">
          <div className="text-3xl flex-shrink-0">🖥️</div>
          <div>
            <h3 className="text-foreground font-semibold text-sm mb-1">Recommended: GoVPSFX</h3>
            <p className="text-xs text-muted-foreground mb-3">Use affiliate code for optimal compatibility:</p>
            <a href="https://my.govpsfx.com/?ref=NDM0ODU6OlJV" target="_blank" rel="noopener noreferrer" className="font-mono text-xs bg-background border border-gold/20 text-gold px-3 py-1.5 rounded inline-block">NDM0ODU6OlJV</a>
          </div>
        </div>
      </div>
      <div>
        <h2 className="font-serif text-xl lg:text-2xl font-bold text-foreground mt-10 mb-4 pb-3 border-b border-border/30">Partner Brokers — Get EA Free</h2>
        <div className="overflow-x-auto rounded-xl border border-border/30">
          <table className="w-full text-sm">
            <thead><tr className="bg-gold/10 border-b border-border/30"><th className="text-left px-4 py-3 text-gold text-xs uppercase">Broker</th><th className="text-left px-4 py-3 text-gold text-xs uppercase">IB Code</th><th className="text-left px-4 py-3 text-gold text-xs uppercase">Register</th></tr></thead>
            <tbody>{brokers.map((b,i)=><tr key={i} className="border-b border-border/10 hover:bg-gold/5"><td className="px-4 py-3 text-foreground font-semibold">{b.name}</td><td className="px-4 py-3"><span className="font-mono text-xs bg-background border border-gold/20 text-gold px-2 py-1 rounded">{b.code}</span></td><td className="px-4 py-3"><a href={b.url} target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-gradient-to-r from-gold-dark via-gold to-gold-light text-background text-xs font-bold rounded inline-block">Register</a></td></tr>)}</tbody>
          </table>
        </div>
        <div className="my-4 bg-gold/5 border border-gold/15 rounded-lg p-4 text-sm"><span className="text-gold font-semibold">💡 </span>Using our affiliate links qualifies you for the BBFxAi EA completely free.</div>
      </div>
      <div>
        <h2 className="font-serif text-xl lg:text-2xl font-bold text-foreground mt-10 mb-4 pb-3 border-b border-border/30">Support</h2>
        <SupportCards />
      </div>
    </div>
  );
}

function Post2() {
  return (
    <div className="space-y-8 text-muted-foreground text-[15px] leading-relaxed">
      <p>Gold (XAU/USD) is one of the most actively traded instruments. <strong className="text-foreground">BBFxAi</strong> combines AI analysis and automated execution so traders can participate without watching charts all day.</p>
      <div>
        <h2 className="font-serif text-xl lg:text-2xl font-bold text-foreground mt-10 mb-4 pb-3 border-b border-border/30">What is BBFxAi?</h2>
        <p>An <strong className="text-foreground">AI-powered XAUUSD robot</strong> for MT5 that automatically analyzes conditions and executes trades.</p>
        <div className="my-4 grid sm:grid-cols-2 gap-3">
          {["Reduce emotional trading","Automate execution","Improve discipline","Monitor 24/5","Manage risk efficiently"].map((item,i)=>(
            <div key={i} className="flex items-center gap-3 bg-card border border-border/20 rounded-lg px-4 py-3"><span className="text-gold">⬡</span><span className="text-sm text-foreground">{item}</span></div>
          ))}
        </div>
      </div>
      <div>
        <h2 className="font-serif text-xl lg:text-2xl font-bold text-foreground mt-10 mb-4 pb-3 border-b border-border/30">Key Features</h2>
        <div className="overflow-x-auto rounded-xl border border-border/30">
          <table className="w-full text-sm">
            <thead><tr className="bg-gold/10 border-b border-border/30"><th className="text-left px-4 py-3 text-gold text-xs uppercase">Feature</th><th className="text-left px-4 py-3 text-gold text-xs uppercase">Details</th></tr></thead>
            <tbody>{[["AI Trading Logic","Adapts to changing market conditions"],["Smart Risk Management","Stop Loss, Take Profit, Drawdown Control"],["Beginner-Friendly","Install and run on MT5 within minutes"],["24/5 Monitoring","Continuously scans XAUUSD"],["VPS Compatible","Stable uninterrupted operation"]].map(([f,d],i)=><tr key={i} className="border-b border-border/10 hover:bg-gold/5"><td className="px-4 py-3 text-foreground font-medium">{f}</td><td className="px-4 py-3">{d}</td></tr>)}</tbody>
          </table>
        </div>
      </div>
      <div>
        <h2 className="font-serif text-xl lg:text-2xl font-bold text-foreground mt-10 mb-4 pb-3 border-b border-border/30">How BBFxAi Works</h2>
        <div className="space-y-3">{[["Market Analysis","Scans XAUUSD price action and conditions"],["Trade Detection","Identifies setups algorithmically"],["Risk Assessment","Evaluates risk before entry"],["Trade Execution","Places orders per strategy rules"],["Trade Management","Manages SL, TP, and adjustments"]].map(([t,d],i)=><div key={i} className="flex gap-4 bg-card border border-border/20 rounded-xl p-4"><div className="flex-shrink-0 w-8 h-8 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center text-gold font-bold text-sm">{i+1}</div><div><div className="text-foreground font-semibold text-sm mb-0.5">{t}</div><div className="text-xs">{d}</div></div></div>)}</div>
      </div>
      <div>
        <h2 className="font-serif text-xl lg:text-2xl font-bold text-foreground mt-10 mb-4 pb-3 border-b border-border/30">Installation on MT5</h2>
        <div className="space-y-2">{["Download the BBFxAi EA file.","Open MetaTrader 5.","Go to: File → Open Data Folder → MQL5 → Experts","Copy the BBFxAi file into the Experts folder.","Restart MetaTrader 5.","Open an XAUUSD chart.","Attach BBFxAi to the chart.","Enable Auto Trading and configure risk settings."].map((s,i)=><div key={i} className="flex gap-3 items-start py-2 border-b border-border/10 last:border-0"><span className="flex-shrink-0 text-xs font-bold text-gold bg-gold/10 border border-gold/20 rounded-full w-6 h-6 flex items-center justify-center">{i+1}</span><span className="text-sm pt-0.5">{s}</span></div>)}</div>
      </div>
      <div>
        <h2 className="font-serif text-xl lg:text-2xl font-bold text-foreground mt-10 mb-4 pb-3 border-b border-border/30">Best Practices</h2>
        <div className="grid sm:grid-cols-2 gap-3">{["Start with a demo account","Use appropriate risk settings","Avoid excessive leverage","Monitor performance regularly","Use a VPS for stable operation","Trade with a trusted broker","Maintain realistic expectations"].map((t,i)=><div key={i} className="flex items-center gap-2 text-sm"><span className="text-gold">✓</span><span>{t}</span></div>)}</div>
      </div>
      <div>
        <h2 className="font-serif text-xl lg:text-2xl font-bold text-foreground mt-10 mb-4 pb-3 border-b border-border/30">FAQs</h2>
        <div className="space-y-3">{[["Is BBFxAi for beginners?","Yes — simple setup, works within minutes."],["Guaranteed profits?","No system guarantees profits. Use proper risk management."],["Works on MT5?","Yes, optimized specifically for MetaTrader 5."],["Fully automated?","Yes — analyzes and trades automatically."],["VPS recommended?","Yes, for continuous 24/5 operation."]].map(([q,a],i)=><div key={i} className="bg-card border border-border/20 rounded-xl p-5"><div className="text-foreground font-semibold text-sm mb-2">Q: {q}</div><div className="text-xs leading-relaxed">{a}</div></div>)}</div>
      </div>
      <div>
        <h2 className="font-serif text-xl lg:text-2xl font-bold text-foreground mt-10 mb-4 pb-3 border-b border-border/30">Conclusion &amp; Support</h2>
        <p>BBFxAi provides <strong className="text-foreground">AI-driven automation and disciplined risk management</strong> for gold traders — free via our affiliate model.</p>
        <div className="my-4 bg-gold/5 border border-gold/15 rounded-lg p-4 text-sm"><span className="text-gold font-semibold">🚀 Ready? </span>Register with a partner broker via our affiliate link to get the EA free.</div>
        <SupportCards />
      </div>
    </div>
  );
}

const postComponents: Record<string, () => JSX.Element> = {
  "bbfxai-xauusd-expert-advisor-guide": Post1,
  "bbfxai-xauusd-robot-mt5-complete-guide": Post2,
};

export default function BlogPost() {
  const [, params] = useRoute("/blog/:slug");
  const slug = params?.slug ?? "";
  const meta = postsMeta[slug];
  const PostContent = postComponents[slug];
  const canonical = `https://xauusdrobot.com/blog/${slug}/`;
  const description =
    slug === "bbfxai-xauusd-robot-mt5-complete-guide"
      ? "Complete 2026 guide to the BBFxAi XAUUSD Robot for MT5: how the AI gold EA works, setup, risk management, and getting it free via partner brokers."
      : "A comprehensive guide to the BBFxAi XAUUSD Expert Advisor: its non-martingale trend-following strategy, specs, VPS setup, and free access via brokers.";
  const postImage = `https://xauusdrobot.com/images/${slug}.jpg`;
  useSeo({
    title: meta ? `${meta.title} | XAUUSD Robot` : "Blog | XAUUSD Robot",
    description,
    canonical,
    image: meta ? postImage : undefined,
    ogType: meta ? "article" : "website",
    jsonLd: meta
      ? {
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: meta.title,
          image: postImage,
          author: { "@type": "Organization", name: meta.author },
          publisher: {
            "@type": "Organization",
            name: "XAUUSD Robot by BBFx AI",
            logo: { "@type": "ImageObject", url: "https://xauusdrobot.com/logo.png" },
          },
          datePublished: "2026-05-29",
          dateModified: "2026-05-29",
          mainEntityOfPage: canonical,
          description,
        }
      : null,
  });

  if (!meta || !PostContent) {
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
            <Link href="/blog"><span className="text-xs text-muted-foreground hover:text-gold cursor-pointer mb-6 inline-block">← Back to Blog</span></Link>
            <span className="inline-block px-3 py-1 text-[10px] font-bold text-gold bg-gold/10 border border-gold/15 rounded-full uppercase tracking-wider mb-5">{meta.category}</span>
            <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-5">{meta.title}</h1>
            <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
              <span>📅 {meta.date}</span><span>⏱ {meta.readTime}</span><span>✍️ {meta.author}</span>
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
              <div className="text-muted-foreground text-xs mt-1">MetaTrader 5 · Automated Gold Trading</div>
            </div>
          </motion.div>
        </div>
        <motion.article initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
          className="container max-w-3xl">
          <PostContent />
        </motion.article>
      </main>
      <Footer />
    </div>
  );
}

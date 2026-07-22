/**
 * XAUUSD Robot - Advanced Gold EA Website
 * Design: "Luxury Gold Vault" - Art Deco meets luxury fintech
 * Colors: Near-black base with warm gold gradients, emerald accents
 * Typography: Playfair Display (display) + DM Sans (body)
 */

import { lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsBar from "@/components/StatsBar";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import { useSeo } from "@/lib/seo";

// Below-the-fold sections load after the hero so heavy libraries
// (recharts in Performance, carousel in Reviews) stay off the critical path.
const AlgoTable = lazy(() => import("@/components/AlgoTable"));
const Performance = lazy(() => import("@/components/Performance"));
const Brokers = lazy(() => import("@/components/Brokers"));
const FAQ = lazy(() => import("@/components/FAQ"));
const CTASection = lazy(() => import("@/components/CTASection"));
const Footer = lazy(() => import("@/components/Footer"));

export default function Home() {
  useSeo({
    title: "XAUUSD Robot – Free Gold Trading EA for MT4 & MT5 (2026)",
    description:
      "Free XAUUSD Robot for MT4 & MT5 — AI-powered gold trading EA. Get the algo free via our broker affiliate. No subscriptions, no hidden fees.",
    canonical: "https://xauusdrobot.com/",
  });

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <StatsBar />
        <HowItWorks />
        <Features />
        <Suspense fallback={<div className="min-h-screen" aria-hidden="true" />}>
          <AlgoTable />
          <Performance />
          <Brokers />
          <FAQ />
          <CTASection />
        </Suspense>
      </main>
      
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">Understanding Automated Gold Trading</h2>
<p className="text-white/70 leading-relaxed mb-4">The precious-metals market is one of the most actively traded in the world. Prices react quickly to inflation data, central-bank decisions, interest-rate expectations and geopolitical events — creating the kind of movement that both attracts and challenges traders. An expert advisor removes the emotional side of that equation by following a defined set of rules on the MetaTrader platform, around the clock, without hesitation or fatigue.</p>
<p className="text-white/70 leading-relaxed mb-4">Automation appeals to newcomers and experienced participants alike. A beginner benefits from consistency and discipline that would otherwise take years to develop, while a seasoned trader gains the ability to run a strategy continuously without sitting in front of a screen. Because the software reacts to price in milliseconds, it can enter and exit positions faster than any person, which matters a great deal when spreads widen during volatile sessions.</p>
<p className="text-white/70 leading-relaxed mb-4">Of course, no automated system is a shortcut to guaranteed profit. Bullion markets can move violently, and any tool is only as sound as the logic and risk settings behind it. That is why we place so much emphasis on transparency: a verified track record, sensible position sizing, a protective stop on every trade, and a filter that steps aside around high-impact news. These safeguards will not remove risk, but they help keep losses within reasonable limits.</p>
<p className="text-white/70 leading-relaxed mb-4">Different traders want different things from automation. Some prefer a conservative, trend-following approach that trades only a handful of times each week; others look for a more active style that captures short intraday moves. Prop-firm participants, meanwhile, need tight control over daily and overall drawdown so they can pass an evaluation without breaking the rules. Matching the strategy to your goals and risk tolerance is far more important than chasing the highest advertised return.</p>
<p className="text-white/70 leading-relaxed mb-4">Choosing the right broker matters just as much as the strategy itself. Tight spreads, rapid execution and low commissions can be the difference between a system that performs and one that struggles. A virtual private server keeps the software running continuously, so trades are never missed while your computer is switched off, and a stable connection reduces the slippage that eats into results over time.</p>
<p className="text-white/70 leading-relaxed mb-4">Ultimately, automated trading is a tool — not a promise. Used thoughtfully, tested on a demo account first, with realistic expectations and only capital you can afford to lose, it can bring structure and discipline to a market that rewards both patience and preparation. The guides below walk through how the whole process works, from installation and back-testing to choosing settings and going live.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-white">Latest Guides</h2>
          <div className="grid md:grid-cols-2 gap-4">
          <a href="/blog/xauusd-robot-complete-guide/" className="block p-5 rounded-xl border border-white/10 hover:border-white/30 transition-colors">
            <span className="text-xs text-gold font-semibold uppercase tracking-wide">Guide</span>
            <h3 className="text-lg font-semibold mt-1 text-white">XAUUSD Robot: The Complete 2026 Guide</h3>
          </a>
          <a href="/blog/how-to-set-up-xauusd-robot-mt4-mt5/" className="block p-5 rounded-xl border border-white/10 hover:border-white/30 transition-colors">
            <span className="text-xs text-gold font-semibold uppercase tracking-wide">Tutorial</span>
            <h3 className="text-lg font-semibold mt-1 text-white">How to Set Up a XAUUSD Robot on MT4 & MT5</h3>
          </a>
          <a href="/blog/best-xauusd-robot-gold-ea-2026/" className="block p-5 rounded-xl border border-white/10 hover:border-white/30 transition-colors">
            <span className="text-xs text-gold font-semibold uppercase tracking-wide">Comparison</span>
            <h3 className="text-lg font-semibold mt-1 text-white">Best XAUUSD Robots &amp; Gold EAs 2026</h3>
          </a>
          <a href="/blog/bbfxai-xauusd-robot-mt5-complete-guide/" className="block p-5 rounded-xl border border-white/10 hover:border-white/30 transition-colors">
            <span className="text-xs text-gold font-semibold uppercase tracking-wide">Guide</span>
            <h3 className="text-lg font-semibold mt-1 text-white">BBFxAi XAUUSD Robot &amp; EA for MT5 Guide</h3>
          </a>
          </div>
          <div className="text-center mt-8">
            <a href="/blog/" className="text-gold font-semibold hover:underline">View all guides →</a>
          </div>
        </div>
      </section>
      <Suspense fallback={<div className="h-64" aria-hidden="true" />}>
        <Footer />
      </Suspense>
    </div>
  );
}

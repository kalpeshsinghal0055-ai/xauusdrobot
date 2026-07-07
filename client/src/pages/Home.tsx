/**
 * XAUUSD Robot - Advanced Gold EA Website
 * Design: "Luxury Gold Vault" - Art Deco meets luxury fintech
 * Colors: Near-black base with warm gold gradients, emerald accents
 * Typography: Playfair Display (display) + DM Sans (body)
 */

import { useState, useEffect, useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsBar from "@/components/StatsBar";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import AlgoTable from "@/components/AlgoTable";
import Performance from "@/components/Performance";
import Brokers from "@/components/Brokers";
import Reviews from "@/components/Reviews";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { useSeo } from "@/lib/seo";
function TrustpilotWidget() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if ((window as any).Trustpilot && ref.current) {
      (window as any).Trustpilot.loadFromElement(ref.current, true);
    }
    return <div ref={ref} className="trustpilot-widget container py-12" data-locale="en-US" data-template-id="56278e9abfbbba0bdcd568bc" data-businessunit-id="6a4ccdc32d710c062e249956" data-style-height="52px" data-style-width="100%" data-token="53e33d66-bef6-4254-b461-f35525f292b0" dangerouslySetInnerHTML={{ __html: '<a href="https://www.trustpilot.com/review/xauusdrobot.com" target="_blank" rel="noopener">Trustpilot</a>' }} />
  }


export default function Home() {
  useSeo({
    title: "XAUUSD Robot – #1 Free Gold EA for MT4 & MT5 | AI Algo Trading Bot 2026",
    description:
      "Free XAUUSD Robot MT5 Expert Advisor for automated gold algo trading. AI-powered EA. Get the free MT5 EA via broker affiliate. Best gold trading algorithm 2026.",
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
        <AlgoTable />
        <Performance />
          <TrustpilotWidget />
        <Brokers />
        <Reviews />
        <FAQ />
        <SEOContent />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

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
import SEOContent from "@/components/SEOContent";
import Footer from "@/components/Footer";
import { useSeo } from "@/lib/seo";

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

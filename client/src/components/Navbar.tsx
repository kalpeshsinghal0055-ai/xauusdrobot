import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link } from "wouter";
const navLinks = [
  { href: "/#how", label: "How It Works" },
  { href: "/#features", label: "Features" },
  { href: "/#bots", label: "Free Algos" },
  { href: "/#brokers", label: "Brokers" },
  { href: "/blog", label: "Blog", internal: true },
  { href: "/#faq", label: "FAQ" },
  { href: "https://t.me/BBFx_Ai", label: "Telegram", external: true },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/90 backdrop-blur-xl border-b border-gold/10 shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      {/* Flashing Announcement Bar */}
      <div className="w-full bg-gradient-to-r from-gold-dark via-gold to-gold-dark text-background text-center py-1.5 px-4">
        <span
          className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em]"
          style={{ animation: "flashText 1.2s ease-in-out infinite" }}
        >
          ⚡ First Try Then Trust ⚡
        </span>
        <style>{`
          @keyframes flashText {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.25; }
          }
        `}</style>
      </div>
      <nav className="container flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 group shrink-0">
          <img
            src="/photo_2026-05-29_13-44-37.jpg"
            alt="BBFx AI - XAUUSD Robot"
            className="h-8 lg:h-10 w-auto"
          />
          <span className="font-serif font-bold text-lg lg:text-xl text-foreground group-hover:text-gold transition-colors">
            XAUUSD<span className="text-gold">Robot</span>
          </span>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) =>
            link.internal ? (
              <Link key={link.href} href={link.href}>
                <span className="text-sm font-medium text-muted-foreground hover:text-gold transition-colors duration-300 tracking-wide uppercase cursor-pointer">
                  {link.label}
                </span>
              </Link>
            ) : (
              <a
                key={link.href}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="text-sm font-medium text-muted-foreground hover:text-gold transition-colors duration-300 tracking-wide uppercase"
              >
                {link.label}
              </a>
            )
          )}
          <a
            href="https://www.myfxbook.com/members/BBFx_Ai/bbfxai-100-usd/12092687"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 border border-emerald/40 bg-emerald/5 text-emerald font-semibold text-sm rounded tracking-wide hover:bg-emerald/10 hover:border-emerald/60 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] flex items-center gap-2 shrink-0"
          >
            <span>✔</span> MYFXBOOK VERIFIED
          </a>
          <a
            href="https://my.xs.com/links/go/5382"
            target="_blank"
            rel="noopener noreferrer sponsored nofollow"
            className="px-5 py-2.5 bg-gradient-to-r from-gold-dark via-gold to-gold-light text-background font-semibold text-sm rounded tracking-wide hover:shadow-lg hover:shadow-gold/20 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shrink-0"
          >
            GET FREE EA
          </a>
          <a
            href="https://t.me/BBFxAi_Community"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-gradient-to-r from-gold via-gold-light to-gold text-background font-bold text-sm rounded tracking-wide ring-2 ring-gold/60 hover:shadow-xl hover:shadow-gold/40 transition-all duration-300 hover:scale-[1.05] active:scale-[0.98] shrink-0 flex items-center gap-2"
          >
            <span>🚀</span> JOIN COMMUNITY
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 text-foreground"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background/95 backdrop-blur-xl border-b border-gold/10"
          >
            <div className="container py-6 flex flex-col gap-4">
              {navLinks.map((link) =>
                link.internal ? (
                  <Link key={link.href} href={link.href}>
                    <span
                      onClick={() => setMobileOpen(false)}
                      className="text-base font-medium text-muted-foreground hover:text-gold transition-colors py-2 uppercase tracking-wide cursor-pointer block"
                    >
                      {link.label}
                    </span>
                  </Link>
                ) : (
                  <a
                    key={link.href}
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    onClick={() => setMobileOpen(false)}
                    className="text-base font-medium text-muted-foreground hover:text-gold transition-colors py-2 uppercase tracking-wide"
                  >
                    {link.label}
                  </a>
                )
              )}
              <a
                href="https://www.myfxbook.com/members/BBFx_Ai/bbfxai-100-usd/12092687"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="mt-2 px-5 py-3 border border-emerald/40 bg-emerald/5 text-emerald font-semibold text-sm rounded tracking-wide text-center flex items-center justify-center gap-2"
              >
                <span>✔</span> MYFXBOOK VERIFIED
              </a>
              <a
                href="https://my.xs.com/links/go/5382"
                target="_blank"
                rel="noopener noreferrer sponsored nofollow"
                className="px-5 py-3 bg-gradient-to-r from-gold-dark via-gold to-gold-light text-background font-semibold text-sm rounded tracking-wide text-center"
              >
                GET FREE EA
              </a>
              <a
                href="https://t.me/BBFxAi_Community"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="px-5 py-3 bg-gradient-to-r from-gold via-gold-light to-gold text-background font-bold text-sm rounded tracking-wide text-center ring-2 ring-gold/60 flex items-center justify-center gap-2"
              >
                <span>🚀</span> JOIN BBFXAI COMMUNITY
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

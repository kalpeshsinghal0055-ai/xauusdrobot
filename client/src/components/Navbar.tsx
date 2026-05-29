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
      <nav className="container flex items-center justify-between h-16 lg:h-20">
        <a href="/" className="flex items-center gap-2 group">
          <img
            src="/manus-storage/logo_54bf4c98.png"
            alt="BBFx AI - XAUUSD Robot"
            className="h-8 lg:h-10 w-auto"
          />
          <span className="font-serif font-bold text-lg lg:text-xl text-foreground group-hover:text-gold transition-colors">
            XAUUSD<span className="text-gold">Robot</span>
          </span>
        </a>

        <div className="hidden lg:flex items-center gap-8">
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
            href="https://one.exnessonelink.com/a/uhk6peieiq"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-gradient-to-r from-gold-dark via-gold to-gold-light text-background font-semibold text-sm rounded tracking-wide hover:shadow-lg hover:shadow-gold/20 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
          >
            GET FREE EA
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 text-foreground"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

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
                href="https://one.exnessonelink.com/a/uhk6peieiq"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 px-5 py-3 bg-gradient-to-r from-gold-dark via-gold to-gold-light text-background font-semibold text-sm rounded text-center tracking-wide"
              >
                GET FREE EA
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

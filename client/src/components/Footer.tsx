import { LOGO_SRC } from "../lib/logo";

export default function Footer() {
  return (
    <footer className="border-t border-border/20 bg-card/30">
      <div className="container py-16 lg:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img
                src={LOGO_SRC}
                alt="BBFx AI Logo"
                loading="lazy"
                className="h-8 w-auto"
              />
              <span className="font-serif font-bold text-lg text-foreground">
                XAUUSD<span className="text-gold">Robot</span>
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm mb-6">
              AI-powered free gold trading algorithms for MetaTrader 4 & MT5. Built by BBFx AI.
              Free XAUUSD Expert Advisor for MT4 & MT5, with results tracked live on Myfxbook.
            </p>
            <div className="flex gap-3">
              <a
                href="https://t.me/BBFx_Ai"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-xs font-semibold text-gold border border-gold/20 rounded hover:bg-gold/5 transition-colors"
              >
                Telegram
              </a>
              <a
                href="https://t.me/BBFx_Ai"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-xs font-semibold text-emerald border border-emerald/20 rounded hover:bg-emerald/5 transition-colors"
              >
                Signals
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-bold text-gold uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {["How It Works", "EA Features", "Free Algos", "Performance", "Brokers", "FAQ"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase().replace(/\s+/g, "")}`}
                      className="text-sm text-muted-foreground hover:text-gold transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Free EAs */}
          <div>
            <h4 className="text-xs font-bold text-gold uppercase tracking-wider mb-4">
              Free EAs
            </h4>
            <ul className="space-y-2.5">
              {[
                "XAUUSD PRO",
                "BTCUSD PRO",
              ].map((item) => (
                <li key={item}>
                  <span className="text-sm text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold text-gold uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="https://one.exnessonelink.com/a/uhk6peieiq"
                  target="_blank"
                  rel="noopener noreferrer sponsored nofollow"
                  className="text-sm text-muted-foreground hover:text-gold transition-colors"
                >
                  Get Free EA (Exness)
                </a>
              </li>
              <li>
                <a
                  href="https://icmarkets.com/?camp=78272"
                  target="_blank"
                  rel="noopener noreferrer sponsored nofollow"
                  className="text-sm text-muted-foreground hover:text-gold transition-colors"
                >
                  Get Free Algo (IC Markets)
                </a>
              </li>
              <li>
                <a
                  href="https://tickmill.link/3RimUpD"
                  target="_blank"
                  rel="noopener noreferrer sponsored nofollow"
                  className="text-sm text-muted-foreground hover:text-gold transition-colors"
                >
                  Get Free Algo (Tickmill)
                </a>
              </li>
              <li>
                <a
                  href="https://vigco.co/la-com-inv/bbfxai"
                  target="_blank"
                  rel="noopener noreferrer sponsored nofollow"
                  className="text-sm text-muted-foreground hover:text-gold transition-colors"
                >
                  Get Free Algo (Vantage)
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/BBFx_Ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-gold transition-colors"
                >
                  Telegram Support
                </a>
              </li>
              <li>
                <a
                  href="https://my.govpsfx.com/?ref=NDM0ODU6OlJV"
                  target="_blank"
                  rel="noopener noreferrer sponsored nofollow"
                  className="text-sm text-muted-foreground hover:text-gold transition-colors"
                >
                  VPS Hosting
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Algo Specifications */}
        <div className="mt-12 pt-8 border-t border-border/20">
          <h4 className="text-xs font-bold text-gold/60 uppercase tracking-wider mb-4 text-center">
            Algo Specification
          </h4>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
            <span>Platform: MT4 & MT5</span>
            <span>Assets: XAUUSD & BTCUSD</span>
            <span>Strategy: Trend Following</span>
            <span>Risk: Fixed Fractional</span>
            <span>Martingale: ✗ Disabled</span>
            <span>News Filter: ✓ Built-in</span>
            <span>Cost: 100% Free</span>
          </div>
        </div>

        {/* Copyright & Disclaimer */}
        <div className="mt-8 pt-8 border-t border-border/20 text-center">
          <p className="text-xs text-muted-foreground mb-3">
            <a href="/about/" className="hover:text-gold transition-colors">About</a>
            <span className="mx-2">·</span>
            <a href="/contact/" className="hover:text-gold transition-colors">Contact</a>
            <span className="mx-2">·</span>
            <a href="/privacy-policy/" className="hover:text-gold transition-colors">Privacy Policy</a>
            <span className="mx-2">·</span>
            <a href="/affiliate-disclosure/" className="hover:text-gold transition-colors">Affiliate Disclosure</a>
            <span className="mx-2">·</span>
            <a href="/sitemap/" className="hover:text-gold transition-colors">Sitemap</a>
          </p>
          <p className="text-xs text-muted-foreground mb-4">
            © 2026 XAUUSDRobot.com by{" "}
            <a
              href="https://t.me/BBFx_Ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold/60 hover:text-gold transition-colors"
            >
              BBFx AI
            </a>
            . All rights reserved.
          </p>
          <p className="text-[10px] text-muted-foreground/50 max-w-4xl mx-auto leading-relaxed">
            ⚠️ Risk Disclaimer: Trading gold (XAUUSD), forex, and cryptocurrencies involves
            significant risk of loss. Past performance of any Expert Advisor or automated trading
            system does not guarantee future results. Never trade with money you cannot afford to
            lose. The XAUUSD Robot and all algo trading bots are provided for informational and
            affiliate purposes only. This website does not constitute financial advice. Affiliate
            broker links on this page may earn us a commission at no extra cost to you. Results may
            vary. Always conduct your own due diligence before trading.
          </p>
        </div>
      </div>
    </footer>
  );
}

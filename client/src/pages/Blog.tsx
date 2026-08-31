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
    slug: "backtest-live-mismatch",
    title: "Backtest Profitable, Live Account Losing. Why?",
    excerpt: "Seven causes ordered by likelihood: curve fitting, unrealistic spread, unmodelled slippage, coarse tick data, broker mismatch, regime change and quiet human intervention.",
    category: "Guides",
    date: "2026-08-22",
    readTime: "8 min read",
    ext: true,
  },
  {
    slug: "mt5-strategy-tester-guide",
    title: "The MT5 Strategy Tester, Operated Properly",
    excerpt: "Modelling mode, spread, deposit and the forward period — the five settings that decide whether a backtest means anything, and which report figures to read first.",
    category: "Tutorial",
    date: "2026-08-22",
    readTime: "8 min read",
    ext: true,
  },
  {
    slug: "metatrader-on-mac",
    title: "Running MetaTrader and an EA on a Mac",
    excerpt: "Four routes compared on whether they genuinely support Expert Advisors, why Apple Silicon removed the easy answer, and where the advisor should actually live.",
    category: "Tutorial",
    date: "2026-08-22",
    readTime: "7 min read",
    ext: true,
  },
  {
    slug: "run-ea-on-phone",
    title: "Can You Run an Expert Advisor on a Phone?",
    excerpt: "No — the mobile apps ship without the MQL engine entirely. Why that is structural, what the apps are genuinely good for, and the three setups people use instead.",
    category: "Guides",
    date: "2026-08-22",
    readTime: "6 min read",
    ext: true,
  },
  {
    slug: "multiple-eas-one-account",
    title: "Running Multiple EAs on One Account Without Chaos",
    excerpt: "Magic numbers, shared margin nobody is tracking, one advisor per chart — and the combinations that belong on a second account entirely.",
    category: "Guides",
    date: "2026-08-21",
    readTime: "7 min read",
    ext: true,
  },
  {
    slug: "ea-preset-files-mt4-mt5",
    title: "Preset Files: How .set Actually Works in MetaTrader",
    excerpt: "What a .set file stores, the exact folder it belongs in, the step people miss when loading one, and why someone else's preset can quietly hurt your account.",
    category: "Tutorial",
    date: "2026-08-21",
    readTime: "7 min read",
    ext: true,
  },
  {
    slug: "ea-not-trading-fix",
    title: "Your EA Isn't Placing Trades. Here's the Checklist.",
    excerpt: "Nine causes in order of likelihood, how to confirm each from the Experts log, and the fix for every one — plus when not trading is the EA working correctly.",
    category: "Guides",
    date: "2026-08-18",
    readTime: "7 min read",
    ext: true,
  },
  {
    slug: "copy-trading-vs-ea",
    title: "Copy Trading vs Expert Advisors: Two Different Bets",
    excerpt: "One bets on a person staying disciplined, the other on rules staying valid. The hidden risk in each, real cost structures, and which suits whom.",
    category: "Comparison",
    date: "2026-08-18",
    readTime: "8 min read",
    ext: true,
  },
  {
    slug: "ai-trading-bot",
    title: "AI Trading Bots: Separating the Software From the Sales Pitch",
    excerpt: "What the AI label usually covers, the three things a model can genuinely do, why prediction accuracy is not an edge, and a ten-minute test for any claim.",
    category: "Guides",
    date: "2026-08-18",
    readTime: "9 min read",
    ext: true,
  },
  {
    slug: "what-is-algorithmic-trading",
    title: "What Is Algorithmic Trading? The Practical Version",
    excerpt: "The three layers inside every algorithm, how retail algo trading differs from institutional, and the specific things automation does and does not fix.",
    category: "Guides",
    date: "2026-08-18",
    readTime: "8 min read",
    ext: true,
  },
  {
    slug: "how-to-use-metatrader-4",
    title: "How to Use MetaTrader 4: Everything That Actually Matters",
    excerpt: "Install and log in, the four windows that do all the work, placing an order with the stop typed first, and installing an Expert Advisor on MT4.",
    category: "Tutorial",
    date: "2026-08-18",
    readTime: "8 min read",
    ext: true,
  },
  {
    slug: "how-to-use-metatrader-5",
    title: "How to Use MetaTrader 5: The Complete First-Week Walkthrough",
    excerpt: "Install and login, reading charts, orders with the stop typed first, the strategy tester, and running your first EA — MT5's four real skills.",
    category: "Guides",
    date: "2026-08-11",
    readTime: "8 min read",
    ext: true,
  },
  {
    slug: "support-resistance-gold",
    title: "Support and Resistance in Gold: How XAUUSD Really Behaves at Levels",
    excerpt: "Zones not lines, round-number magnetism, the wick-hunt trap — and how to trade levels with stops the hunt can't reach.",
    category: "Guides",
    date: "2026-08-10",
    readTime: "8 min read",
    ext: true,
  },
  {
    slug: "how-do-trading-robots-work",
    title: "How Do Trading Robots Work? The Honest Look Inside an EA",
    excerpt: "The tick-to-order pipeline, the risk module, session filters, what automation genuinely does better — and what no robot can ever do.",
    category: "Guides",
    date: "2026-08-06",
    readTime: "8 min read",
    ext: true,
  },
  {
    slug: "what-is-xauusd",
    title: "What Is XAUUSD? The Symbol, the Quote and How Gold Actually Trades",
    excerpt: "Gold's currency code decoded — the quote, pips and lots, spot vs futures vs ETFs, and how XAUUSD differs from owning metal.",
    category: "Guides",
    date: "2026-08-05",
    readTime: "7 min read",
    ext: true,
  },
  {
    slug: "trade-gold-with-100",
    title: "Can You Trade Gold With $100? Yes — Here's the Only Way It Works",
    excerpt: "The cent-account and 0.01-lot math, what $100 can realistically do, the mistakes that destroy tiny accounts, and the tuition-first growth path.",
    category: "Guides",
    date: "2026-08-05",
    readTime: "7 min read",
    ext: true,
  },
  {
    slug: "best-indicators-gold-trading",
    title: "Best Indicators for Gold Trading: The Few That Earn Their Place",
    excerpt: "Why indicators describe rather than predict, the minimal honest stack (trend MA, ATR, sessions), and the indicator-soup myth that costs money.",
    category: "Guides",
    date: "2026-08-02",
    readTime: "8 min read",
    ext: true,
  },
  {
    slug: "free-gold-signals",
    title: "Free Gold Signals: Why Most Lose You Money (and What Works Instead)",
    excerpt: "How signal channels really earn, the 6 red flags of XAUUSD signal scams, why even honest signals underperform — and the transparent alternatives.",
    category: "Guides",
    date: "2026-08-01",
    readTime: "8 min read",
    ext: true,
  },
  {
    slug: "gold-price-prediction",
    title: "Gold Price Prediction: The Honest Answer Nobody Gives You",
    excerpt: "Why bank and AI forecasts keep missing, what genuinely drives XAUUSD, and how traders profit by reacting with rules instead of predicting.",
    category: "Guides",
    date: "2026-08-01",
    readTime: "7 min read",
    ext: true,
  },
  {
    slug: "best-forex-robot",
    title: "Best Forex Robot 2026: The Selection Framework That Filters Out 95%",
    excerpt: "Skip the affiliate top-10 lists — the 7-point verification checklist that eliminates most robots, and what a legitimate EA actually looks like.",
    category: "Guides",
    date: "2026-08-01",
    readTime: "8 min read",
    ext: true,
  },
  {
    slug: "is-forex-trading-profitable",
    title: "Is Forex Trading Profitable? The Numbers Nobody Shows You",
    excerpt: "The broker-disclosed loss statistics, the four controllable reasons most accounts lose, and what the profitable minority does differently.",
    category: "Guides",
    date: "2026-08-01",
    readTime: "8 min read",
    ext: true,
  },
  {
    slug: "gold-investment-vs-trading",
    title: "Gold Investment vs Gold Trading: Two Different Games Explained",
    excerpt: "Physical, ETFs and XAUUSD CFDs compared by goal, risk, cost and horizon — and an honest sorting of which path fits which person.",
    category: "Guides",
    date: "2026-08-01",
    readTime: "8 min read",
    ext: true,
  },
  {
    slug: "how-to-trade-gold-xauusd",
    title: "How to Trade Gold (XAUUSD): The Complete Beginner's Guide",
    excerpt: "From your first broker account to your first rule-based trade — pips, lots, sessions, strategies, risk rules and the manual vs automated decision.",
    category: "Guides",
    date: "2026-08-01",
    readTime: "10 min read",
    ext: true,
  },
  {
    slug: "gold-slippage-explained",
    title: "Slippage in Gold Trading: Why Your Fills Are Worse Than Your Backtest",
    excerpt: "The variable execution cost — latency, thin liquidity and gaps, when gold slips hardest, why backtests hide it, and how to keep it a rounding error.",
    category: "Guides",
    date: "2026-07-31",
    readTime: "8 min read",
    ext: true,
  },
  {
    slug: "best-leverage-xauusd",
    title: "Best Leverage for XAUUSD: What Gold Traders Actually Need",
    excerpt: "1:100 or 1:500? The margin math, the leverage-risk myth almost everyone believes, stop-out mechanics — and the honest answer for EA users.",
    category: "Guides",
    date: "2026-07-30",
    readTime: "8 min read",
    ext: true,
  },
  {
    slug: "xauusd-spread-explained",
    title: "XAUUSD Spread Explained: The Hidden Cost That Decides Your EA's Results",
    excerpt: "Bid vs ask, why gold's spread beats forex pairs, when it blows out, the real cost per trade — and why it can make or break an automated strategy.",
    category: "Guides",
    date: "2026-07-29",
    readTime: "8 min read",
    ext: true,
  },
  {
    slug: "how-to-read-myfxbook",
    title: "How to Read a Myfxbook Record — and Spot a Fake One",
    excerpt: "The 5-minute verification checklist: what the two badges prove, why equity drawdown beats the gain number, and the 7 tricks sellers use to fake results.",
    category: "Guides",
    date: "2026-07-28",
    readTime: "8 min read",
    ext: true,
  },
  {
    slug: "xauusd-hedge-ea",
    title: "XAUUSD Hedge EA: How Gold Hedging Robots Really Work",
    excerpt: "Hedge-and-recover cycles, hedging vs martingale, the floating-drawdown risk nobody advertises — plus our free XAUUSD Hedge EA for MT5.",
    category: "Guides",
    date: "2026-07-27",
    readTime: "8 min read",
    ext: true,
  },
  {
    slug: "gold-ea-drawdown-explained",
    title: "Drawdown Explained: The Number That Matters More Than Profit",
    excerpt: "What max drawdown really means, the brutal recovery math, balance vs equity drawdown, and how much is acceptable for a gold EA.",
    category: "Guides",
    date: "2026-07-24",
    readTime: "7 min read",
    ext: true,
  },
  {
    slug: "what-moves-gold-price",
    title: "What Moves the Gold Price? XAUUSD Drivers Explained",
    excerpt: "The five real forces behind gold — the US dollar, real rates, inflation, safe-haven demand and central banks — and what an EA does with them.",
    category: "Guides",
    date: "2026-07-24",
    readTime: "7 min read",
    ext: true,
  },
  {
    slug: "best-time-to-trade-xauusd",
    title: "Best Time to Trade XAUUSD: Gold Trading Hours & Sessions",
    excerpt: "When gold actually moves — the Asian, London and New York sessions in GMT, the London-NY overlap, and when spreads quietly kill your edge.",
    category: "Guides",
    date: "2026-07-23",
    readTime: "7 min read",
    ext: true,
  },
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

const LANES: { key: string; label: string; blurb: string; slugs: string[] }[] = [
  {
    key: "robots",
    label: "Robots & automation",
    blurb: "What an EA actually does between tick and order — and which ones survive contact with gold.",
    slugs: [
      "what-is-algorithmic-trading", "ai-trading-bot", "copy-trading-vs-ea",
      "how-do-trading-robots-work", "do-gold-trading-robots-work", "xauusd-robot-complete-guide",
      "best-forex-robot", "best-xauusd-robot-gold-ea-2026", "free-xauusd-gold-ea",
      "xauusd-scalping-bot", "xauusd-hedge-ea", "gold-ea-strategy-types",
    ],
  },
  {
    key: "setup",
    label: "Setup & infrastructure",
    blurb: "Platform, broker, VPS — the plumbing that decides whether a working strategy stays working.",
    slugs: [
      "run-ea-on-phone", "metatrader-on-mac",
      "ea-preset-files-mt4-mt5", "multiple-eas-one-account",
      "how-to-use-metatrader-4", "ea-not-trading-fix",
      "how-to-set-up-xauusd-robot-mt4-mt5", "how-to-use-metatrader-5",
      "mt4-vs-mt5-for-gold-ea", "best-vps-gold-ea", "best-brokers-xauusd-gold-ea",
    ],
  },
  {
    key: "testing",
    label: "Testing & verification",
    blurb: "Prove it before you fund it: backtests, track records, drawdown and prop-firm rules.",
    slugs: [
      "mt5-strategy-tester-guide", "backtest-live-mismatch",
      "how-to-backtest-gold-ea", "how-to-read-myfxbook",
      "gold-ea-drawdown-explained", "best-gold-ea-prop-firm-ftmo",
    ],
  },
  {
    key: "risk",
    label: "Risk & execution cost",
    blurb: "Position size, leverage, spread and slippage — the four numbers that quietly decide the outcome.",
    slugs: [
      "gold-ea-risk-management", "best-leverage-xauusd", "xauusd-spread-explained",
      "gold-slippage-explained", "how-much-money-to-start-gold-ea", "trade-gold-with-100",
    ],
  },
  {
    key: "market",
    label: "Market context",
    blurb: "The gold behaviour every automated system is exposed to, whether or not it models it.",
    slugs: [
      "what-is-xauusd", "what-moves-gold-price", "best-time-to-trade-xauusd",
      "trading-gold-during-news-nfp-fomc-cpi", "support-resistance-gold",
      "best-indicators-gold-trading", "how-to-trade-gold-xauusd", "gold-price-prediction",
      "gold-investment-vs-trading", "is-forex-trading-profitable", "free-gold-signals",
    ],
  },
];

export default function Blog() {
  useSeo({
    title: "The Lab — Gold EA & XAUUSD Automation Field Notes",
    description:
      "Field notes on automated gold trading: how EAs work, MT4/MT5 setup, backtesting and verification, risk and execution cost, and the XAUUSD market behaviour every robot is exposed to.",
    canonical: "https://xauusdrobot.com/blog/",
  });

  const bySlug = new Map(blogPosts.map((p) => [p.slug, p]));
  const claimed = new Set(LANES.flatMap((l) => l.slugs));
  const lanes = LANES.map((l) => ({
    ...l,
    posts: l.slugs.map((sl) => bySlug.get(sl)).filter(Boolean) as typeof blogPosts,
  })).filter((l) => l.posts.length > 0);
  const rest = blogPosts.filter((p) => !claimed.has(p.slug));
  if (rest.length)
    lanes.push({ key: "more", label: "Also in the lab", blurb: "Recent additions not yet filed into a track.", slugs: [], posts: rest });

  let n = 0;
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <main className="pt-24 pb-24">
        <section className="container py-14 lg:py-16">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-3xl">
            <span className="inline-block font-mono text-[11px] tracking-[0.22em] uppercase text-gold mb-5">
              The Lab · {blogPosts.length} entries
            </span>
            <h1 className="font-serif text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-[1.12]">
              Field notes on <span className="text-gold">gold automation</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl">
              Working notes on building, testing and running XAUUSD Expert Advisors — written for the
              person who has to make the thing behave on a live account, not for the brochure.
            </p>
          </motion.div>
        </section>

        <section className="container">
          {lanes.map((lane) => (
            <div key={lane.key} className="mb-14 lg:mb-16">
              <div className="border-t border-gold/25 pt-5 mb-1">
                <h2 className="font-mono text-[12px] tracking-[0.2em] uppercase text-gold mb-2">{lane.label}</h2>
                <p className="text-sm text-muted-foreground max-w-2xl mb-2">{lane.blurb}</p>
              </div>
              <ul className="divide-y divide-border/30">
                {lane.posts.map((post) => {
                  n += 1;
                  const idx = String(n).padStart(2, "0");
                  return (
                    <li key={post.slug}>
                      <a
                        href={`/blog/${post.slug}${(post as any).ext ? "/" : ""}`}
                        className="group grid grid-cols-[2.5rem_1fr] sm:grid-cols-[2.75rem_1fr_auto] gap-x-4 gap-y-1 items-baseline py-5 hover:bg-card/40 transition-colors -mx-3 px-3 rounded"
                      >
                        <span className="font-mono text-xs text-muted-foreground/60 group-hover:text-gold transition-colors tabular-nums">
                          {idx}
                        </span>
                        <div className="min-w-0">
                          <h3 className="font-serif text-lg lg:text-xl font-bold text-foreground leading-snug group-hover:text-gold transition-colors">
                            {post.title}
                          </h3>
                          <p className="text-sm text-muted-foreground leading-relaxed mt-1.5 max-w-2xl">{post.excerpt}</p>
                        </div>
                        <span className="hidden sm:block font-mono text-[11px] text-muted-foreground/70 whitespace-nowrap tabular-nums">
                          {post.date} · {post.readTime.replace(" read", "")}
                        </span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
}

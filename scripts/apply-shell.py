# -*- coding: utf-8 -*-
"""Run after adding any static page under client/public/ (a new blog post,
tool or section page): python scripts/apply-shell.py

Give every static XR page (46 posts + 14 section pages) the homepage's
shell: same fonts, logo, announcement bar, navbar with its three buttons,
and the full footer. Article bodies are left alone. The calendar generator's
template gets the same treatment so the weekly rebuild keeps the shell.
"""
import base64, io, re, sys
sys.stdout.reconfigure(encoding="utf-8", errors="replace")

ROOT = "C:/Users/sj computer/xauusdrobot"
PUB = ROOT + "/client/public"
LOGO_TS = ROOT + "/client/src/lib/logo.ts"
LOGO_OUT = PUB + "/images/xr-logo.webp"
LOGO_URL = "/images/xr-logo.webp"
CAL_GEN = ROOT + "/scripts/build-calendar.mjs"

# ---------------------------------------------------------------- logo file
b64 = re.search(r'base64,([A-Za-z0-9+/=]+)"', io.open(LOGO_TS, encoding="utf-8").read()).group(1)
io.open(LOGO_OUT, "wb").write(base64.b64decode(b64))
print("logo written:", LOGO_OUT, len(b64) * 3 // 4, "bytes")

# ---------------------------------------------------------------- shell CSS
FONTS = ('<link rel="preconnect" href="https://fonts.googleapis.com">\n'
         '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n'
         '<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800;900'
         '&family=DM+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">')

SHELL_CSS = """<style id="xr-shell">
h1,h2,h3,h4{font-family:'Playfair Display',Georgia,serif;letter-spacing:-.01em}
.xr-header{position:sticky;top:0;z-index:50;background:rgba(13,15,20,.9);backdrop-filter:blur(16px);-webkit-backdrop-filter:blur(16px);border-bottom:1px solid rgba(232,181,58,.1);box-shadow:0 10px 15px -3px rgba(0,0,0,.2)}
.xr-bar{background:linear-gradient(90deg,#a87c2a,#e8b53a,#a87c2a);color:#0d0f14;text-align:center;padding:6px 16px;font:700 12px/1.4 'DM Sans',system-ui,sans-serif;letter-spacing:.2em;text-transform:uppercase}
@media(min-width:640px){.xr-bar{font-size:14px}}
.xr-bar span{display:inline-block;animation:xrFlash 1.2s ease-in-out infinite}
@keyframes xrFlash{0%,100%{opacity:1}50%{opacity:.25}}
.xr-container{width:100%;max-width:1280px;margin:0 auto;padding:0 16px}
@media(min-width:640px){.xr-container{padding:0 24px}}
.xr-nav{display:flex;align-items:center;justify-content:space-between;gap:24px;height:64px}
@media(min-width:1024px){.xr-nav{height:80px}}
.xr-brand{display:flex;align-items:center;gap:8px;flex-shrink:0;margin:0;text-decoration:none!important}
.xr-brand img{height:32px;width:auto;display:block}
@media(min-width:1024px){.xr-brand img{height:40px}}
.xr-brand b{font-family:'Playfair Display',Georgia,serif;font-weight:700;font-size:18px;color:var(--text);transition:color .3s}
.xr-brand:hover b{color:var(--gold)}
@media(min-width:1024px){.xr-brand b{font-size:20px}}
.xr-brand b i{font-style:normal;color:var(--gold)}
.xr-links{display:none;align-items:center;gap:18px}
@media(min-width:1260px){.xr-links{display:flex}}
@media(min-width:1280px){.xr-links{gap:20px}}
.xr-links>a.lnk{font:500 14px/1 'DM Sans',system-ui,sans-serif;color:var(--muted);letter-spacing:.025em;text-transform:uppercase;text-decoration:none;margin:0;white-space:nowrap;transition:color .3s}
.xr-links>a.lnk:hover{color:var(--gold);text-decoration:none}
.xr-btn{display:inline-flex;align-items:center;gap:8px;padding:10px 20px;border-radius:4px;font:600 14px/1 'DM Sans',system-ui,sans-serif;letter-spacing:.025em;text-decoration:none!important;white-space:nowrap;flex-shrink:0;margin:0;transition:all .3s}
.xr-btn-verified{border:1px solid rgba(34,195,138,.4);background:rgba(34,195,138,.05);color:#22c38a}
.xr-btn-verified:hover{background:rgba(34,195,138,.1);border-color:rgba(34,195,138,.6)}
.xr-btn-gold{background:linear-gradient(90deg,#a87c2a,#e8b53a,#f5d78a);color:#0d0f14}
.xr-btn-gold:hover{box-shadow:0 10px 15px -3px rgba(232,181,58,.2)}
.xr-btn-join{background:linear-gradient(90deg,#e8b53a,#f5d78a,#e8b53a);color:#0d0f14;font-weight:700;box-shadow:0 0 0 2px rgba(232,181,58,.6);display:none}
@media(min-width:1480px){.xr-btn-join{display:inline-flex}.xr-nav.xr-container{max-width:1480px}}
.xr-burger{display:inline-flex;align-items:center;background:none;border:0;color:var(--text);padding:8px;margin:0;cursor:pointer}
@media(min-width:1260px){.xr-burger{display:none}}
.xr-mobile{display:none;background:rgba(13,15,20,.95);backdrop-filter:blur(16px);border-bottom:1px solid rgba(232,181,58,.1)}
.xr-mobile.open{display:block}
@media(min-width:1260px){.xr-mobile{display:none!important}}
.xr-mobile .xr-container{display:flex;flex-direction:column;gap:14px;padding-top:24px;padding-bottom:24px}
.xr-mobile a.lnk{font:500 16px/1 'DM Sans',system-ui,sans-serif;color:var(--muted);text-transform:uppercase;letter-spacing:.025em;padding:8px 0;margin:0;text-decoration:none}
.xr-mobile .xr-btn{justify-content:center;padding:12px 20px}
.xr-mobile .xr-btn-join{display:inline-flex}
.xr-footer{border-top:1px solid rgba(90,100,125,.25);background:rgba(21,25,34,.3);margin-top:40px}
.xr-foot{padding-top:64px;padding-bottom:64px}
@media(min-width:1024px){.xr-foot{padding-top:80px;padding-bottom:80px}}
.xr-fgrid{display:grid;gap:40px}
@media(min-width:768px){.xr-fgrid{grid-template-columns:repeat(2,1fr)}}
@media(min-width:1024px){.xr-fgrid{grid-template-columns:repeat(5,1fr);gap:32px}.xr-fbrand{grid-column:span 2}}
.xr-fbrand .xr-brand img{height:32px}
.xr-fbrand p{color:var(--muted);font-size:14px;line-height:1.65;max-width:24rem;margin:16px 0 24px}
.xr-fbtns{display:flex;gap:12px}
.xr-chip{padding:8px 16px;font:600 12px/1.4 'DM Sans',system-ui,sans-serif;border-radius:4px;text-decoration:none!important;border:1px solid;transition:background .3s}
.xr-chip.gold{color:var(--gold);border-color:rgba(232,181,58,.2)}.xr-chip.gold:hover{background:rgba(232,181,58,.05)}
.xr-chip.green{color:#22c38a;border-color:rgba(34,195,138,.2)}.xr-chip.green:hover{background:rgba(34,195,138,.05)}
.xr-fh{font:700 12px/1.4 'DM Sans',system-ui,sans-serif;color:var(--gold);text-transform:uppercase;letter-spacing:.05em;margin:0 0 16px}
.xr-footer ul{list-style:none;margin:0;padding:0}.xr-footer li{margin:0 0 10px;padding:0}
.xr-footer li a,.xr-footer li span{font-size:14px;color:var(--muted);text-decoration:none;transition:color .3s}.xr-footer li a:hover{color:var(--gold);text-decoration:none}
.xr-spec{margin-top:48px;padding-top:32px;border-top:1px solid rgba(90,100,125,.25)}
.xr-spec .xr-fh{text-align:center;color:rgba(232,181,58,.6)}
.xr-specs{display:flex;flex-wrap:wrap;justify-content:center;gap:8px 24px;font-size:12px;color:var(--muted)}
.xr-legal{margin-top:32px;padding-top:32px;border-top:1px solid rgba(90,100,125,.25);text-align:center}
.xr-legal p{font-size:12px;color:var(--muted);margin:0 0 12px}
.xr-legal p a{color:var(--muted);text-decoration:none;transition:color .3s}.xr-legal p a:hover{color:var(--gold);text-decoration:none}
.xr-legal .sep{margin:0 8px}
.xr-legal a.by{color:rgba(232,181,58,.6)}
.xr-legal .disc{font-size:10px;color:rgba(154,163,178,.5);max-width:56rem;margin:16px auto 0;line-height:1.65}
</style>"""

MENU_SVG = ('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" '
            'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="4" y1="6" x2="20" y2="6"/>'
            '<line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="18" x2="20" y2="18"/></svg>')

LINKS = [("/#how", "How It Works"), ("/#features", "Features"), ("/#bots", "Free Algos"),
         ("/#brokers", "Brokers"), ("/blog/", "Blog"), ("/tools/", "Tools"), ("/#faq", "FAQ"),
         ("https://t.me/BBFx_Ai", "Telegram")]

def link_html(cls):
    out = []
    for href, label in LINKS:
        ext = ' target="_blank" rel="noopener noreferrer"' if href.startswith("http") else ""
        out.append('<a class="%s" href="%s"%s>%s</a>' % (cls, href, ext, label))
    return "".join(out)

BUTTONS = ('<a class="xr-btn xr-btn-verified" href="/verified-results/"><span>✔</span> VERIFIED RESULTS</a>'
           '<a class="xr-btn xr-btn-gold" href="https://www.markets4you.online/?affid=ky6kt3m" target="_blank" '
           'rel="noopener noreferrer sponsored nofollow">GET FREE EA</a>'
           '<a class="xr-btn xr-btn-join" href="https://t.me/BBFxAi_Community" target="_blank" rel="noopener noreferrer">'
           '<span>🚀</span> JOIN COMMUNITY</a>')

BRAND = ('<a class="xr-brand" href="/"><img src="%s" alt="BBFx AI - XAUUSD Robot" width="192" height="192">'
         '<b>XAUUSD<i>Robot</i></b></a>' % LOGO_URL)

HEADER = ('<header class="xr-header">'
          '<div class="xr-bar"><span>⚡ First Try Then Trust ⚡</span></div>'
          '<nav class="xr-container xr-nav" aria-label="Main">' + BRAND +
          '<div class="xr-links">' + link_html("lnk") + BUTTONS + '</div>'
          '<button class="xr-burger" type="button" aria-label="Toggle menu" aria-expanded="false" aria-controls="xrMobile">' + MENU_SVG + '</button>'
          '</nav>'
          '<div class="xr-mobile" id="xrMobile"><div class="xr-container">' + link_html("lnk") + BUTTONS + '</div></div>'
          '</header>')

def footer(year):
    return ('<footer class="xr-footer"><div class="xr-container xr-foot">'
            '<div class="xr-fgrid">'
            '<div class="xr-fbrand">' + BRAND +
            '<p>AI-powered free gold trading algorithms for MetaTrader 4 &amp; MT5. Built by BBFx AI. '
            'Free XAUUSD Expert Advisor for MT4 &amp; MT5, with three live accounts published in full.</p>'
            '<div class="xr-fbtns"><a class="xr-chip gold" href="https://t.me/BBFx_Ai" target="_blank" rel="noopener noreferrer">Telegram</a>'
            '<a class="xr-chip green" href="https://t.me/BBFx_Ai" target="_blank" rel="noopener noreferrer">Signals</a></div>'
            '</div>'
            '<div><div class="xr-fh">Navigation</div><ul>'
            '<li><a href="/#how">How It Works</a></li><li><a href="/#features">EA Features</a></li>'
            '<li><a href="/#bots">Free Algos</a></li><li><a href="/#performance">Performance</a></li>'
            '<li><a href="/#brokers">Brokers</a></li><li><a href="/#faq">FAQ</a></li></ul></div>'
            '<div><div class="xr-fh">Free EAs</div><ul>'
            '<li><a href="/gold-trading-ea/">Gold Trading EA (XAUUSD PRO)</a></li>'
            '<li><a href="/free-gold-trading-robot-download/">Free Robot Download</a></li>'
            '<li><span>BTCUSD PRO</span></li>'
            '<li><a href="/blog/xauusd-scalping-bot/">XAUUSD Scalping EA</a></li>'
            '<li><a href="/blog/xauusd-hedge-ea/">XAUUSD Hedge EA</a></li></ul></div>'
            '<div><div class="xr-fh">Quick Links</div><ul>'
            '<li><a href="https://one.exnessonelink.com/a/uhk6peieiq" target="_blank" rel="noopener noreferrer sponsored nofollow">Get Free EA (Exness)</a></li>'
            '<li><a href="https://vigco.co/la-com-inv/bbfxai" target="_blank" rel="noopener noreferrer sponsored nofollow">Get Free Algo (Vantage)</a></li>'
            '<li><a href="/gold-news-calendar/">Gold News Calendar</a></li>'
            '<li><a href="https://t.me/BBFx_Ai" target="_blank" rel="noopener noreferrer">Telegram Support</a></li>'
            '<li><a href="https://my.govpsfx.com/?ref=NDM0ODU6OlJV" target="_blank" rel="noopener noreferrer sponsored nofollow">VPS Hosting</a></li></ul></div>'
            '</div>'
            '<div class="xr-spec"><div class="xr-fh">Algo Specification</div><div class="xr-specs">'
            '<span>Platform: MT4 &amp; MT5</span><span>Assets: XAUUSD &amp; BTCUSD</span><span>Strategy: Trend Following</span>'
            '<span>Risk: Fixed Fractional</span><span>Martingale: ✗ Disabled</span><span>News Filter: ✓ Built-in</span><span>Cost: 100% Free</span>'
            '</div></div>'
            '<div class="xr-legal">'
            '<p><a href="/about/">About</a><span class="sep">·</span><a href="/contact/">Contact</a><span class="sep">·</span>'
            '<a href="/privacy-policy/">Privacy Policy</a><span class="sep">·</span><a href="/affiliate-disclosure/">Affiliate Disclosure</a>'
            '<span class="sep">·</span><a href="/tools/">Free Tools</a><span class="sep">·</span><a href="/sitemap/">Sitemap</a></p>'
            '<p>© ' + year + ' XAUUSDRobot.com by <a class="by" href="https://t.me/BBFx_Ai" target="_blank" rel="noopener noreferrer">BBFx AI</a>. All rights reserved.</p>'
            '<p class="disc">⚠️ Risk Disclaimer: Trading gold (XAUUSD), forex, and cryptocurrencies involves significant risk of loss. '
            'Past performance of any Expert Advisor or automated trading system does not guarantee future results. Never trade with '
            'money you cannot afford to lose. The XAUUSD Robot and all algo trading bots are provided for informational and affiliate '
            'purposes only. This website does not constitute financial advice. Affiliate broker links on this page may earn us a '
            'commission at no extra cost to you. Results may vary. Always conduct your own due diligence before trading.</p>'
            '</div></div></footer>')

MENU_JS = ('<script>(function(){var b=document.querySelector(".xr-burger"),m=document.getElementById("xrMobile");'
           'if(!b||!m)return;b.addEventListener("click",function(){var o=m.classList.toggle("open");'
           'b.setAttribute("aria-expanded",o?"true":"false");});'
           'm.addEventListener("click",function(e){if(e.target.closest("a"))m.classList.remove("open");});})();</script>')

for piece in (SHELL_CSS, HEADER, footer("2026"), MENU_JS):
    assert "`" not in piece and "${" not in piece, "shell must be safe inside a JS template literal"

# ------------------------------------------------------- old-shell CSS rules
DEAD_RULES = [
    r"header\.site \.wrap\{[^}]*\}",
    r"header\.site\{[^}]*\}",
    r"\.brand\{[^}]*\}\.brand span\{[^}]*\}",
    r"nav a\{[^}]*\}nav a:hover\{[^}]*\}",
    r"nav a\[aria-current\]\{[^}]*\}",
    r"\.tgnav\{[^}]*\}",
    r"footer\.site\{[^}]*\}",
    r"header\.site nav a\{[^}]*\}",
    r"footer\.site a\{[^}]*\}",
]
OLD_FONT = 'font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif'
NEW_FONT = "font-family:'DM Sans',system-ui,sans-serif"

def convert(s, year="2026"):
    """Return (new_html, notes) or (None, reason)."""
    if 'class="xr-header"' in s:
        # already converted: refresh the shell pieces in place
        s = re.sub(r'<style id="xr-shell">.*?</style>', lambda _: SHELL_CSS, s, count=1, flags=re.S)
        s = re.sub(r'<header class="xr-header">.*?</header>', lambda _: HEADER, s, count=1, flags=re.S)
        s = re.sub(r'<footer class="xr-footer">.*?</footer>', lambda _: footer(year), s, count=1, flags=re.S)
        return s, ["refreshed"]
    if not re.search(r'<header class="site">.*?</header>', s, re.S):
        return None, "no old-shell header"
    if not re.search(r'<footer class="site">.*?</footer>', s, re.S):
        return None, "no old-shell footer"
    notes = []
    # 1. fonts after the viewport meta
    s, n = re.subn(r'(<meta name="viewport"[^>]*>)', r"\1\n" + FONTS.replace("\\", "\\\\"), s, count=1)
    if not n:
        return None, "no viewport meta"
    # 2. body font + dead rules inside the page's own <style>
    m = re.search(r"<style>.*?</style>", s, re.S)
    css = m.group(0)
    css2 = css.replace(OLD_FONT, NEW_FONT)
    if css2 == css:
        notes.append("body font string not found")
    for pat in DEAD_RULES:
        css2 = re.sub(pat, "", css2)
    s = s[:m.start()] + css2 + s[m.end():]
    # 3. shell css before </head>
    s = s.replace("</head>", SHELL_CSS + "\n</head>", 1)
    # 4. header + footer
    s = re.sub(r'<header class="site">.*?</header>', lambda _: HEADER, s, count=1, flags=re.S)
    s = re.sub(r'<footer class="site">.*?</footer>', lambda _: footer(year), s, count=1, flags=re.S)
    # 5. mobile menu script
    s = s.replace("</body>", MENU_JS + "\n</body>", 1)
    return s, notes

# -------------------------------------------------------------------- run
import glob, os
pages = sorted(glob.glob(PUB + "/**/index.html", recursive=True))
done = skipped = 0
for fp in pages:
    s = io.open(fp, encoding="utf-8").read()
    out, notes = convert(s)
    rel = os.path.relpath(fp, PUB).replace("\\", "/")
    if out is None:
        skipped += 1
        print("  skip  %-60s %s" % (rel, notes))
        continue
    io.open(fp, "w", encoding="utf-8", newline="\n").write(out)
    done += 1
    extra = ("  <- " + "; ".join(notes)) if notes else ""
    navs = len(re.findall(r"<nav\b", out))
    print("  ok    %-60s navs:%d%s" % (rel, navs, extra))
print("\npages converted: %d   skipped: %d" % (done, skipped))

# calendar generator template (JS template literal, year is a variable there)
g = io.open(CAL_GEN, encoding="utf-8").read()
out, notes = convert(g, year="${year}")
if out is None:
    print("calendar generator: SKIPPED -", notes)
else:
    io.open(CAL_GEN, "w", encoding="utf-8", newline="\n").write(out)
    print("calendar generator: converted", ("(" + "; ".join(notes) + ")") if notes else "")

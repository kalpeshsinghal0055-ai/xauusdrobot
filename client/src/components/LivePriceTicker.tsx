import { useEffect, useState, useRef } from "react";

interface PriceData {
  symbol: string;
  label: string;
  price: number | null;
  change: number | null;
  prevPrice: number | null;
  color: string;
  icon: string;
}

export default function LivePriceTicker() {
  const [prices, setPrices] = useState<Record<string, PriceData>>({
    XAUUSDT: { symbol: "XAUUSDT", label: "XAU/USD", price: null, change: null, prevPrice: null, color: "text-gold", icon: "🪙" },
    BTCUSDT: { symbol: "BTCUSDT", label: "BTC/USD", price: null, change: null, prevPrice: null, color: "text-emerald-400", icon: "₿" },
  });
  const [flash, setFlash] = useState<Record<string, "up" | "down" | null>>({ XAUUSDT: null, BTCUSDT: null });
  const wsRef = useRef<WebSocket | null>(null);
  const openRef24h = useRef<Record<string, number>>({});

  useEffect(() => {
    // Fetch 24h stats first for change %
    Promise.all([
      fetch("https://api.binance.com/api/v3/ticker/24hr?symbol=XAUUSDT").then(r => r.json()),
      fetch("https://api.binance.com/api/v3/ticker/24hr?symbol=BTCUSDT").then(r => r.json()),
    ]).then(([xau, btc]) => {
      openRef24h.current = {
        XAUUSDT: parseFloat(xau.openPrice),
        BTCUSDT: parseFloat(btc.openPrice),
      };
      setPrices(prev => ({
        ...prev,
        XAUUSDT: { ...prev.XAUUSDT, price: parseFloat(xau.lastPrice), change: parseFloat(xau.priceChangePercent) },
        BTCUSDT: { ...prev.BTCUSDT, price: parseFloat(btc.lastPrice), change: parseFloat(btc.priceChangePercent) },
      }));
    }).catch(() => {});

    // WebSocket for real-time tick
    const ws = new WebSocket("wss://stream.binance.com:9443/stream?streams=xauusdt@trade/btcusdt@trade");
    wsRef.current = ws;

    ws.onmessage = (e) => {
      const msg = JSON.parse(e.data);
      const data = msg.data;
      const sym = data.s as string; // XAUUSDT or BTCUSDT
      const newPrice = parseFloat(data.p);

      setPrices(prev => {
        const old = prev[sym];
        const open = openRef24h.current[sym];
        const change = open ? ((newPrice - open) / open) * 100 : old.change;
        const dir = old.price !== null ? (newPrice > old.price ? "up" : newPrice < old.price ? "down" : null) : null;

        if (dir) {
          setFlash(f => ({ ...f, [sym]: dir }));
          setTimeout(() => setFlash(f => ({ ...f, [sym]: null })), 600);
        }

        return {
          ...prev,
          [sym]: { ...old, prevPrice: old.price, price: newPrice, change: change ?? old.change },
        };
      });
    };

    ws.onerror = () => ws.close();

    return () => {
      ws.close();
    };
  }, []);

  const fmt = (n: number | null, sym: string) => {
    if (n === null) return "—";
    if (sym === "XAUUSDT") return n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    return n.toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: 0 });
  };

  return (
    <div className="flex items-center gap-1 sm:gap-3">
      {Object.values(prices).map((p) => {
        const dir = flash[p.symbol];
        const isUp = (p.change ?? 0) >= 0;
        const flashCls = dir === "up" ? "bg-emerald-500/20" : dir === "down" ? "bg-red-500/20" : "";

        return (
          <div
            key={p.symbol}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg border transition-all duration-300 ${flashCls} ${
              isUp ? "border-emerald-500/20" : "border-red-500/20"
            }`}
          >
            <span className="text-sm leading-none hidden sm:inline">{p.icon}</span>
            <div className="flex flex-col leading-tight">
              <span className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider hidden sm:block">{p.label}</span>
              <span className={`text-xs sm:text-sm font-bold tabular-nums ${p.color} ${dir === "up" ? "text-emerald-400" : dir === "down" ? "text-red-400" : ""}`}>
                ${fmt(p.price, p.symbol)}
              </span>
            </div>
            {p.change !== null && (
              <span className={`text-[10px] font-semibold ${isUp ? "text-emerald-400" : "text-red-400"} hidden sm:inline`}>
                {isUp ? "▲" : "▼"} {Math.abs(p.change).toFixed(2)}%
              </span>
            )}
            {p.price === null && (
              <span className="text-[10px] text-muted-foreground animate-pulse">Loading…</span>
            )}
          </div>
        );
      })}
      <div className="flex items-center gap-1 hidden sm:flex">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
        <span className="text-[9px] text-emerald-400 font-medium uppercase tracking-widest">Live</span>
      </div>
    </div>
  );
}

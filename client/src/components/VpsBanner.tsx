import { m as motion } from "framer-motion";

const GOVPS = "https://my.govpsfx.com/?ref=NDM0ODU6OkVO";

export default function VpsBanner() {
  return (
    <section aria-label="VPS hosting for the EA" className="py-10 lg:py-14 relative">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-gold/15 bg-card/60 px-6 py-8 lg:px-10 lg:py-10 flex flex-col lg:flex-row items-center gap-8 lg:gap-12"
        >
          <div className="flex-1 text-center lg:text-left">
            <span className="text-gold text-xs font-semibold uppercase tracking-[0.2em] block mb-3">
              Step 3, in practice
            </span>
            <h3 className="font-serif text-2xl lg:text-3xl font-bold text-foreground mb-3">
              The EA only trades while your terminal is online.
            </h3>
            <p className="text-muted-foreground max-w-xl mx-auto lg:mx-0">
              A VPS keeps MetaTrader running 24/7 &mdash; through reboots, sleep and dropped
              Wi-Fi. GoVPSFX hosts three terminals on one plan, which covers MT4, MT5 and a
              spare for testing.
            </p>
          </div>
          <a
            href={GOVPS}
            target="_blank"
            rel="noopener noreferrer sponsored nofollow"
            className="block w-full max-w-[728px] shrink-0 lg:w-[46%]"
          >
            <img
              src="/images/govpsfx-728x90.gif"
              alt="GoVPSFX — VPS for forex with three MetaTrader terminals"
              width={728}
              height={90}
              loading="lazy"
              className="w-full h-auto rounded-lg"
            />
          </a>
        </motion.div>
        <p className="text-[11px] text-muted-foreground/60 text-center mt-3">
          Sponsored. We earn a commission if you sign up through this link, at no extra cost to you.
        </p>
      </div>
    </section>
  );
}

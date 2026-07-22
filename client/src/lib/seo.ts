type SeoInput = {
  title: string;
  description: string;
  canonical: string;
  jsonLd?: object | null;
  /** Absolute URL of the social share image. Falls back to the site default. */
  image?: string;
  /** Open Graph type — "website" (default) or "article" for blog posts. */
  ogType?: "website" | "article";
};

const DEFAULT_IMAGE =
  "https://xauusdrobot.com/images/xauusd-robot-complete-guide.jpg";

function setMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

export function useSeo({ title, description, canonical, jsonLd, image, ogType }: SeoInput) {
  const img = image || DEFAULT_IMAGE;
  document.title = title;
  setMeta("name", "description", description);
  setMeta("property", "og:title", title);
  setMeta("property", "og:description", description);
  setMeta("property", "og:url", canonical);
  setMeta("property", "og:type", ogType || "website");
  setMeta("property", "og:image", img);
  setMeta("property", "og:image:width", "1200");
  setMeta("property", "og:image:height", "630");
  setMeta("name", "twitter:card", "summary_large_image");
  setMeta("name", "twitter:title", title);
  setMeta("name", "twitter:description", description);
  setMeta("name", "twitter:image", img);

  let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }
  link.setAttribute("href", canonical);

  const existing = document.getElementById("page-jsonld");
  if (jsonLd) {
    const script = (existing as HTMLScriptElement) ?? document.createElement("script");
    script.setAttribute("type", "application/ld+json");
    script.id = "page-jsonld";
    script.textContent = JSON.stringify(jsonLd);
    if (!existing) document.head.appendChild(script);
  } else if (existing) {
    existing.remove();
  }
}

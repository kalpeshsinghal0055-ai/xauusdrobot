type SeoInput = {
  title: string;
  description: string;
  canonical: string;
  jsonLd?: object | null;
};

function setMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

export function useSeo({ title, description, canonical, jsonLd }: SeoInput) {
  document.title = title;
  setMeta("name", "description", description);
  setMeta("property", "og:title", title);
  setMeta("property", "og:description", description);
  setMeta("property", "og:url", canonical);
  setMeta("name", "twitter:title", title);
  setMeta("name", "twitter:description", description);

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

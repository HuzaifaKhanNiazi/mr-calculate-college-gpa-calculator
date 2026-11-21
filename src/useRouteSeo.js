import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { PAGES, SITE } from "./seoConfig.js";

function upsert(selector, create) {
  let el = document.querySelector(selector);
  if (!el) {
    el = create();
    document.head.appendChild(el);
  }
  return el;
}

export default function useRouteSeo() {
  const { pathname } = useLocation();
  useEffect(() => {
    const clean = pathname.length > 1 ? pathname.replace(/\/$/, "") : pathname;
    const page = PAGES.find((p) => p.path === clean);
    if (!page) return;

    document.title = page.title;
    upsert('meta[name="description"]', () =>
      Object.assign(document.createElement("meta"), { name: "description" }),
    ).setAttribute("content", page.description);
    upsert('link[rel="canonical"]', () =>
      Object.assign(document.createElement("link"), { rel: "canonical" }),
    ).setAttribute("href", SITE + page.path);

    document.querySelectorAll("script[data-seo]").forEach((s) => s.remove());
    (page.schema || []).forEach((obj) => {
      const s = document.createElement("script");
      s.type = "application/ld+json";
      s.setAttribute("data-seo", "1");
      s.textContent = JSON.stringify(obj);
      document.head.appendChild(s);
    });
  }, [pathname]);
}

import { useEffect, useState } from "react";
import { siteConfig } from "../config";
import { navLinks } from "../content";
import appIcon from "../assets/evenly/app-icon.png";

export default function Layout({ children, compact = false, minimal = false }) {
  const [scrolled, setScrolled] = useState(false);
  const [ready, setReady] = useState(false);

  const headerLinks = minimal
    ? [
        { href: "#mission", label: "理念" },
        { href: "#features-title", label: "功能" },
        { href: "#faq-title", label: "常见问题" },
      ]
    : navLinks;

  useEffect(() => {
    if (!minimal) return undefined;

    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const frame = requestAnimationFrame(() => setReady(true));

    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, [minimal]);

  const homeHeaderClass = [
    "site-header",
    "site-header-home",
    ready ? "is-ready" : "",
    scrolled ? "is-scrolled" : "is-top",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={`site-shell ${minimal ? "site-shell-home" : ""}`.trim()}>
      <header className={minimal ? homeHeaderClass : "site-header"}>
        <a className="brand" href="/" aria-label="Evenly 首页">
          <img className="brand-mark" src={appIcon} alt="" />
          <span>Evenly</span>
        </a>
        <nav className="site-nav" aria-label="主导航">
          {headerLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        {!compact && (
          <a
            className={minimal ? "header-download-pill" : "header-download"}
            href={siteConfig.appStoreUrl}
            aria-label="在 App Store 下载 Evenly"
          >
            下载
          </a>
        )}
      </header>

      {children}

      <footer className={`site-footer ${minimal ? "site-footer-home" : ""}`.trim()}>
        <div className="footer-brand-block">
          <a className="brand footer-brand" href="/" aria-label="Evenly 首页">
            <img className="brand-mark" src={appIcon} alt="" />
            <span>Evenly</span>
          </a>
          <p>把共同消费变成一本清楚的账。</p>
        </div>
        <nav className="footer-links" aria-label="页脚导航">
          <a href="/thanks">致谢</a>
          <a href="/privacy">隐私政策</a>
          <a href="/terms">服务条款</a>
          <a href="/support">支持</a>
          <a href="/download">下载</a>
          <a href="/changelog">更新日志</a>
          <a href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a>
        </nav>
      </footer>
    </div>
  );
}

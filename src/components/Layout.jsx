import { siteConfig } from "../config";
import { navLinks } from "../content";
import appIcon from "../assets/evenly/app-icon.png";

export default function Layout({ children, compact = false, minimal = false }) {
  const headerLinks = minimal
    ? [
        { href: "#features-title", label: "功能" },
        { href: "#faq-title", label: "常见问题" },
      ]
    : navLinks;

  return (
    <div className={`site-shell ${minimal ? "site-shell-minimal" : ""}`.trim()}>
      <header className={`site-header ${minimal ? "site-header-home" : ""}`.trim()}>
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
        {!compact && !minimal && (
          <a
            className="header-download"
            href={siteConfig.appStoreUrl}
            aria-label="在 App Store 下载 Evenly"
          >
            下载
          </a>
        )}
      </header>

      {children}

      <footer className="site-footer">
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

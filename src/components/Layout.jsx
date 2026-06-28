import { siteConfig } from "../config";
import { navLinks } from "../content";
import CTAButton from "./CTAButton";
import appIcon from "../assets/evenly/app-icon.png";

export default function Layout({ children, compact = false, minimal = false }) {
  return (
    <div className={`site-shell ${minimal ? "site-shell-minimal" : ""}`.trim()}>
      {!minimal && <header className="site-header">
        <a className="brand" href="/" aria-label="Evenly 首页">
          <img className="brand-mark" src={appIcon} alt="" />
          <span>Evenly</span>
        </a>
        <nav className="site-nav" aria-label="主导航">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        {!compact && <CTAButton className="header-cta">TestFlight</CTAButton>}
      </header>}

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
          <a href="/privacy">隐私政策</a>
          <a href="/terms">服务条款</a>
          <a href="/support">支持</a>
          <a href="/download">下载</a>
          <a href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a>
        </nav>
      </footer>
    </div>
  );
}

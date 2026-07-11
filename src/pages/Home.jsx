import {
  AppWindow,
  Bell,
  CreditCard,
  QrCode,
  ReceiptText,
  Sparkles,
  UsersRound,
} from "lucide-react";
import appIcon from "../assets/evenly/app-icon.png";
import appStoreQr from "../assets/evenly/app-store-qr.svg";
import ledgerDetailImage from "../assets/evenly/ledger-detail.png";
import ledgerListImage from "../assets/evenly/ledger-list.png";
import loginImage from "../assets/evenly/login.png";
import newLedgerImage from "../assets/evenly/new-ledger.png";
import CTAButton from "../components/CTAButton";
import Layout from "../components/Layout";
import { siteConfig } from "../config";
import { faqs, features, testimonials, useCases } from "../content";

const featureIcons = [UsersRound, ReceiptText, CreditCard, Sparkles];
const showcaseScreens = [
  { src: newLedgerImage, alt: "Evenly 新建账单界面", className: "screen-shot-side" },
  { src: ledgerListImage, alt: "Evenly 账本列表界面", className: "screen-shot-main" },
  { src: ledgerDetailImage, alt: "Evenly 账单明细与结算界面", className: "screen-shot-side" },
];

export default function Home() {
  return (
    <Layout minimal>
      <main className="home-page">
        <section className="lumnea-hero" aria-labelledby="home-hero-title">
          <div className="app-identity" aria-label="Evenly">
            <img className="app-icon" src={appIcon} alt="" />
            <p>Evenly</p>
          </div>

          <div className="hero-copy">
            <h1 id="home-hero-title">
              Turn shared spending into
              <br />
              bite-sized clarity.
            </h1>
            <p className="hero-lede">
              把聚餐、旅行、合租和日常代买整理成清楚的共享账本。
              谁垫付、谁参与、怎么结清，几分钟内就能对齐。
            </p>
            <div className="hero-actions" aria-label="下载 Evenly">
              <span className="spark-lines spark-lines-left" aria-hidden="true" />
              <CTAButton>App Store</CTAButton>
              <div className="qr-download">
                <a
                  className="qr-button"
                  href={siteConfig.appStoreUrl}
                  aria-label="显示 App Store 下载二维码"
                >
                  <QrCode size={34} strokeWidth={2.6} />
                </a>
                <div className="qr-popover">
                  <img src={appStoreQr} alt="Evenly App Store 下载二维码" />
                  <strong>扫码在 App Store 下载</strong>
                </div>
              </div>
              <span className="spark-lines spark-lines-right" aria-hidden="true" />
            </div>
          </div>

          <div className="hero-media app-showcase" aria-label="Evenly 应用界面预览">
            {showcaseScreens.map((screen) => (
              <div className={`device-shot ${screen.className}`} key={screen.src}>
                <img src={screen.src} alt={screen.alt} />
              </div>
            ))}
            <div className="floating-composer" aria-label="输入消费事项预览">
              <div className="composer-tabs">
                <span>
                  <ReceiptText size={15} /> Ledger
                </span>
                <span>
                  <UsersRound size={15} /> Split
                </span>
              </div>
              <p>Enter any shared expense...</p>
            </div>
          </div>
        </section>

        <section className="split-explainer" aria-labelledby="split-explainer-title">
          <h2 id="split-explainer-title" className="sr-only">
            Evenly 核心方式
          </h2>
          {useCases.slice(0, 2).map((item, index) => (
            <article className="explainer-item" key={item.title}>
              <div className="explainer-arrow" aria-hidden="true" />
              <div className="mini-icon">{index === 0 ? <ReceiptText size={18} /> : <CreditCard size={18} />}</div>
              <p className="eyebrow">{item.title}</p>
              <h3>{item.body}</h3>
              <div className="single-device-shot">
                <img
                  src={index === 0 ? ledgerListImage : ledgerDetailImage}
                  alt={index === 0 ? "Evenly 账本列表截图" : "Evenly 结算明细截图"}
                />
              </div>
            </article>
          ))}
        </section>

        <section className="habit-section" aria-labelledby="habit-title">
          <div className="habit-panel">
            <div className="habit-meter">
              <span>28 days</span>
              <div aria-hidden="true">
                {Array.from({ length: 28 }, (_, index) => (
                  <i key={index} />
                ))}
              </div>
            </div>
            <div className="habit-copy">
              <p className="eyebrow">Shared rhythm</p>
              <h2 id="habit-title">Build a calmer money habit</h2>
              <p>
                每次共同消费都及时记录，成员确认后再结算。账目越完整，
                关系里的尴尬就越少。
              </p>
            </div>
          </div>
          <div className="login-preview">
            <img src={loginImage} alt="Evenly 登录界面截图" />
          </div>
        </section>

        <section className="feature-stack" aria-labelledby="features-title">
          <div className="section-heading">
            <p className="eyebrow">Everything stays clear</p>
            <h2 id="features-title">记录、确认、分摊、结清。</h2>
          </div>
          <div className="feature-list">
            {features.map((item, index) => {
              const Icon = featureIcons[index % featureIcons.length];

              return (
                <article className="feature-row" key={item.title}>
                  <div className="feature-icon" aria-hidden="true">
                    <Icon size={22} strokeWidth={2.1} />
                  </div>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="nudge-section" aria-labelledby="nudge-title">
          <div>
            <div className="mini-icon">
              <Bell size={18} />
            </div>
            <h2 id="nudge-title">A gentle settlement nudge</h2>
            <p>
              活动结束、账目变动、有人确认时，Evenly 用轻量提醒帮大家完成最后一步。
            </p>
          </div>
          <div className="nudge-card" aria-hidden="true">
            <AppWindow size={20} />
            <span>Today's books are ready</span>
            <strong>Pick one ledger and settle in under 3 minutes.</strong>
          </div>
        </section>

        <section className="testimonial-section" aria-labelledby="testimonials-title">
          <h2 id="testimonials-title" className="sr-only">
            用户评价
          </h2>
          {testimonials.map((item) => (
            <figure className="testimonial-card" key={item.name}>
              <blockquote>"{item.quote}"</blockquote>
              <figcaption>
                <strong>{item.name}</strong>
                <span>{item.role}</span>
              </figcaption>
            </figure>
          ))}
        </section>

        <section className="faq-section" aria-labelledby="faq-title">
          <div className="section-heading compact">
            <p className="eyebrow">More about Evenly</p>
            <h2 id="faq-title">常见问题</h2>
          </div>
          <div className="faq-list">
            {faqs.map((item) => (
              <details key={item.question}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}

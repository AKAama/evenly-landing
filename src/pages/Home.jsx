import {
  Bell,
  CheckCircle2,
  CreditCard,
  ReceiptText,
  ShieldCheck,
  Sparkles,
  UsersRound,
} from "lucide-react";
import promoFast from "../assets/evenly/promo-fast.png";
import promoFocus from "../assets/evenly/promo-focus.png";
import promoHero from "../assets/evenly/promo-hero.png";
import promoLogin from "../assets/evenly/promo-login.png";
import promoSecure from "../assets/evenly/promo-secure.png";
import promoTeam from "../assets/evenly/promo-team.png";
import CTAButton from "../components/CTAButton";
import Layout from "../components/Layout";
import { siteConfig } from "../config";
import { faqs, features, testimonials } from "../content";

const featureIcons = [UsersRound, ReceiptText, CreditCard, Sparkles];

const missionItems = [
  {
    title: "记录清晰",
    body: "为一次活动或长期共同生活建账本，谁垫付、谁参与，一眼就能对齐。",
  },
  {
    title: "成员确认",
    body: "关键账目由成员确认，少一点遗漏、误解和群聊里的反复追问。",
  },
  {
    title: "轻松结清",
    body: "自动分摊，再整理成更少转账次数的结算建议，结束得干脆。",
  },
];

const trustItems = [
  {
    icon: ReceiptText,
    title: "共享账本",
    body: "聚餐、旅行、合租一本账",
  },
  {
    icon: CheckCircle2,
    title: "成员确认",
    body: "关键账目有据可查",
  },
  {
    icon: ShieldCheck,
    title: "结算建议",
    body: "最少转账，最快结清",
  },
];

const showcaseScreens = [
  { src: promoSecure, alt: "Evenly 新建账单", tilt: "left" },
  { src: promoFocus, alt: "Evenly 账本与支出概览", tilt: "center" },
  { src: promoFast, alt: "Evenly 转账结算建议", tilt: "right" },
];

export default function Home() {
  return (
    <Layout minimal>
      <main className="home-page">
        <section className="wizz-hero" aria-labelledby="home-hero-title">
          <div className="wizz-hero-glow" aria-hidden="true" />

          <div className="wizz-hero-inner">
            <a className="news-pill" href="/changelog">
              <span className="news-pill-tag">更新</span>
              <span className="news-pill-text">协作与账户体验更新</span>
              <span className="news-pill-arrow" aria-hidden="true">
                →
              </span>
            </a>

            <h1 id="home-hero-title" className="display-title">
              把共同消费
              <br />
              变成一本清楚的账
            </h1>

            <p className="hero-lede">
              Evenly 帮朋友、室友和旅行搭子记录每一笔共同开销，
              让谁垫付、谁参与、最后怎么结清，都不用再靠群聊翻记录。
            </p>

            <div className="hero-actions" aria-label="下载 Evenly">
              <CTAButton>App Store</CTAButton>
              <a className="secondary-cta" href={siteConfig.testFlightUrl}>
                TestFlight 体验
              </a>
            </div>

            <ul className="trust-row" aria-label="产品亮点">
              {trustItems.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.title}>
                    <span className="trust-icon" aria-hidden="true">
                      <Icon size={18} strokeWidth={2.2} />
                    </span>
                    <div>
                      <strong>{item.title}</strong>
                      <span>{item.body}</span>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="hero-promo-band" aria-label="Evenly 应用界面预览">
            <img className="hero-promo-shot" src={promoHero} alt="Evenly 选择付款与参与人" />
          </div>
        </section>

        <section className="mission-section" id="mission" aria-labelledby="mission-title">
          <div className="mission-grid">
            <div className="mission-heading">
              <p className="eyebrow">Our Mission</p>
              <h2 id="mission-title" className="display-title-sm">
                少一点反复确认
                <br />
                多一点共同默契
              </h2>
            </div>
            <div className="mission-list">
              {missionItems.map((item) => (
                <article key={item.title} className="mission-item">
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="showcase-section" aria-labelledby="showcase-title">
          <div className="section-heading center">
            <p className="eyebrow">Product</p>
            <h2 id="showcase-title" className="display-title-sm">
              从记录到结清
              <br />
              都清楚一点
            </h2>
          </div>

          <div className="phone-fan" aria-label="应用截图展示">
            {showcaseScreens.map((screen) => (
              <div
                className={`phone-fan-item phone-fan-${screen.tilt}`}
                key={screen.alt}
              >
                <img src={screen.src} alt={screen.alt} />
              </div>
            ))}
          </div>
        </section>

        <section className="feature-stack" aria-labelledby="features-title">
          <div className="section-heading">
            <p className="eyebrow">Everything stays clear</p>
            <h2 id="features-title" className="display-title-sm">
              记录、确认、分摊、结清。
            </h2>
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

        <section className="habit-section" aria-labelledby="habit-title">
          <div className="habit-panel">
            <div className="habit-copy">
              <div className="mini-icon" aria-hidden="true">
                <Bell size={18} />
              </div>
              <p className="eyebrow">Shared rhythm</p>
              <h2 id="habit-title" className="display-title-sm">
                养成更轻松的
                <br />
                共同消费习惯
              </h2>
              <p>
                每次共同消费及时记录，成员确认后再结算。账目越完整，
                关系里的尴尬就越少。
              </p>
            </div>
            <div className="habit-promo">
              <img src={promoLogin} alt="Evenly 登录与本地使用" />
            </div>
          </div>
        </section>

        <section className="team-section" aria-labelledby="team-title">
          <div className="team-panel">
            <div className="team-copy">
              <p className="eyebrow">Together</p>
              <h2 id="team-title" className="display-title-sm">
                成员都在同一本账上
              </h2>
              <p>
                邀请注册用户，也能添加临时成员。每个人都能看见、确认，
                不用再在群里反复 @。
              </p>
            </div>
            <div className="team-promo">
              <img src={promoTeam} alt="Evenly 成员管理" />
            </div>
          </div>
        </section>

        <section className="testimonial-section" aria-labelledby="testimonials-title">
          <div className="section-heading center">
            <p className="eyebrow">Community</p>
            <h2 id="testimonials-title" className="display-title-sm">
              早期用户怎么说
            </h2>
          </div>
          <div className="testimonial-grid">
            {testimonials.map((item) => (
              <figure className="testimonial-card" key={item.name}>
                <blockquote>"{item.quote}"</blockquote>
                <figcaption>
                  <strong>{item.name}</strong>
                  <span>{item.role}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="faq-section" aria-labelledby="faq-title">
          <div className="section-heading center compact">
            <p className="eyebrow">More about Evenly</p>
            <h2 id="faq-title" className="display-title-sm">
              常见问题
            </h2>
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

        <section className="final-cta" aria-labelledby="final-cta-title">
          <p className="eyebrow">Download</p>
          <h2 id="final-cta-title" className="display-title-sm">
            现在就试试 Evenly
          </h2>
          <p>把共同消费整理清楚，从下一次聚餐或旅行开始。</p>
          <div className="hero-actions">
            <CTAButton>App Store</CTAButton>
          </div>
        </section>
      </main>
    </Layout>
  );
}

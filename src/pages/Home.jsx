import {
  CheckCircle2,
  CircleDollarSign,
  Sparkles,
  UsersRound,
} from "lucide-react";
import CTAButton from "../components/CTAButton";
import IPhoneMockup from "../components/IPhoneMockup";
import Layout from "../components/Layout";
import { faqs, features, useCases } from "../content";

const featureIcons = [UsersRound, CheckCircle2, CircleDollarSign, Sparkles];

export default function Home() {
  return (
    <Layout>
      <main>
        <section className="hero-section" aria-labelledby="home-hero-title">
          <div className="hero-copy">
            <p className="eyebrow">Shared ledger for friends</p>
            <h1 id="home-hero-title">把共同消费变成一本清楚的账</h1>
            <p className="hero-lede">
              Evenly 帮朋友、室友和旅行搭子记录每一笔共同开销，让谁垫付、
              谁参与、最后怎么结清，都不用再靠群聊翻记录。
            </p>
            <div className="hero-actions">
              <CTAButton />
              <a className="privacy-link" href="/privacy">
                查看隐私政策
              </a>
            </div>
          </div>

          <div className="hero-visual" aria-label="Evenly 应用预览">
            <IPhoneMockup title="账本" />
            <IPhoneMockup title="结清" variant="settlement" />
          </div>
        </section>

        <section className="section use-cases-section" aria-labelledby="use-cases-title">
          <div className="section-heading">
            <p className="eyebrow">Use cases</p>
            <h2 id="use-cases-title">适合每一种共同消费</h2>
          </div>
          <div className="use-case-grid">
            {useCases.map((item) => (
              <article className="use-case-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section features-section" aria-labelledby="features-title">
          <div className="section-heading">
            <p className="eyebrow">Features</p>
            <h2 id="features-title">从记录到结清，都清楚一点</h2>
          </div>
          <div className="feature-grid">
            {features.map((item, index) => {
              const Icon = featureIcons[index % featureIcons.length];

              return (
                <article className="feature-card" key={item.title}>
                  <div className="feature-icon" aria-hidden="true">
                    <Icon size={22} strokeWidth={2.2} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="story-section" aria-label="Evenly 使用故事">
          <div className="story-card">
            <p className="eyebrow">A shared story</p>
            <h2>少一点反复确认，多一点共同默契</h2>
            <p>
              Stella、Tristan、Sylvia 周末一起去露营。Stella 先付了营地费，
              Tristan 买了早餐和咖啡，Sylvia 负责车费。Evenly 把这些开销放在同一本账里，
              每个人确认后就能看到自己该付多少。
            </p>
          </div>
        </section>

        <section className="section faq-section" aria-labelledby="faq-title">
          <div className="section-heading">
            <p className="eyebrow">FAQ</p>
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

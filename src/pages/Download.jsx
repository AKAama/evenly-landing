import CTAButton from "../components/CTAButton";
import Layout from "../components/Layout";

export default function Download() {
  return (
    <Layout compact>
      <main className="policy-page download-page">
        <p className="section-kicker">Download</p>
        <h1>下载 Evenly</h1>
        <p>Evenly 已在 App Store 上架。你也可以通过 TestFlight 抢先体验后续更新。</p>

        <section className="policy-section">
          <h2>App Store</h2>
          <p>从 App Store 下载稳定版本。</p>
          <CTAButton>App Store</CTAButton>
        </section>

        <section className="policy-section">
          <h2>TestFlight</h2>
          <p>通过 TestFlight 提前体验最新功能和后续更新，并欢迎向我们反馈使用体验。</p>
          <CTAButton>打开 TestFlight 邀请</CTAButton>
        </section>
      </main>
    </Layout>
  );
}

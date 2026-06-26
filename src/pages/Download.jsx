import CTAButton from "../components/CTAButton";
import Layout from "../components/Layout";
import { siteConfig } from "../config";

export default function Download() {
  return (
    <Layout compact>
      <main className="policy-page download-page">
        <p className="section-kicker">Download</p>
        <h1>抢先体验 Evenly</h1>
        <p>
          Evenly 目前处于早期测试阶段。你可以通过 TestFlight 体验最新版本，并把遇到的问题反馈给我们。
        </p>

        <section className="policy-section">
          <h2>TestFlight 测试</h2>
          {siteConfig.testFlightUrl ? (
            <CTAButton>打开 TestFlight 邀请</CTAButton>
          ) : (
            <p>
              TestFlight 邀请链接正在准备中。你可以发送邮件至{" "}
              <a href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a>{" "}
              申请加入测试名单。
            </p>
          )}
        </section>

        <section className="policy-section">
          <h2>App Store</h2>
          <p>Evenly 未来也会提供 App Store 下载入口，正式上线后会在这里更新。</p>
        </section>
      </main>
    </Layout>
  );
}

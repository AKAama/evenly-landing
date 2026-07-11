import { siteConfig } from "../config";
import Layout from "../components/Layout";

export default function Support() {
  return (
    <Layout compact>
      <main className="policy-page">
        <p className="section-kicker">Support</p>
        <h1>支持与反馈</h1>

        <section className="policy-section">
          <h2>联系我们</h2>
          <p>
            使用 Evenly 时遇到问题或想反馈体验，都可以发送邮件至{" "}
            <a href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a>。
          </p>
          <p>Evenly 已在 App Store 上架，后续更新仍会通过 TestFlight 提前开放测试。</p>
        </section>

        <section className="policy-section">
          <h2>请附上这些信息</h2>
          <p>为了更快定位问题，建议在邮件中包含：</p>
          <ul>
            <li>设备型号</li>
            <li>iOS 版本</li>
            <li>Evenly App 版本</li>
            <li>登录邮箱</li>
            <li>问题发生的步骤和截图</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>政策与条款</h2>
          <p>
            你也可以查看{" "}
            <a href="/privacy">隐私政策</a>{" "}
            和{" "}
            <a href="/terms">服务条款</a>{" "}
            了解数据处理、账号删除和服务使用说明。
          </p>
        </section>
      </main>
    </Layout>
  );
}

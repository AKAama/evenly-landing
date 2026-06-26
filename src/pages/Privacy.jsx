import { siteConfig } from "../config";
import Layout from "../components/Layout";

export default function Privacy() {
  return (
    <Layout compact>
      <main className="policy-page">
        <p className="section-kicker">Privacy Policy</p>
        <h1>隐私政策</h1>

        <section className="policy-section">
          <h2>我们收集的数据</h2>
          <p>
            Evenly 开发者 / 我们会在你使用 App 时收集为了提供共同消费记录和分账功能所必需的信息，
            包括你主动填写的账目、成员名称、消费备注、登录邮箱、设备与崩溃诊断信息。
          </p>
        </section>

        <section className="policy-section">
          <h2>使用目的</h2>
          <p>
            我们使用这些数据来创建和同步账本、计算结算建议、维护账号安全、排查问题、改进产品体验，
            以及在你联系我们时提供支持。
          </p>
        </section>

        <section className="policy-section">
          <h2>第三方服务</h2>
          <p>
            Evenly 可能使用第三方服务来提供托管和后端基础设施、账号登录、数据存储、分析和崩溃诊断，
            也可能通过 Apple 的 TestFlight 和 App Store 完成测试与应用分发。相关服务提供方仅在实现上述目的所需的范围内处理信息，
            并受其各自隐私政策约束。
          </p>
        </section>

        <section className="policy-section">
          <h2>数据保留</h2>
          <p>
            我们会在提供服务、履行安全和合规需要的合理期限内保留数据。当数据不再需要时，
            我们会删除或匿名化处理，除非法律要求继续保留。
          </p>
        </section>

        <section className="policy-section">
          <h2>账号与数据删除</h2>
          <p>
            用户可以发送邮件至{" "}
            <a href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a>{" "}
            请求删除账号及相关数据；我们会在合理时间内处理该请求，并在需要时要求验证身份。
          </p>
        </section>

        <section className="policy-section">
          <h2>安全</h2>
          <p>
            我们会采取合理的技术和管理措施保护你的信息，降低未经授权访问、泄露、篡改或丢失的风险。
            但互联网传输和电子存储无法保证绝对安全。
          </p>
        </section>

        <section className="policy-section">
          <h2>政策变更</h2>
          <p>
            我们可能会随着产品功能、法律要求或运营方式变化更新本隐私政策。重大变更会通过适当方式提示，
            更新后的政策发布后生效。
          </p>
        </section>

        <section className="policy-section">
          <h2>联系我们</h2>
          <p>
            如果你对隐私政策或数据处理有任何问题，请通过{" "}
            <a href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a>{" "}
            联系我们。
          </p>
        </section>
      </main>
    </Layout>
  );
}

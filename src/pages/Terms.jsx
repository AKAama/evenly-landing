import { siteConfig } from "../config";
import Layout from "../components/Layout";

export default function Terms() {
  return (
    <Layout compact>
      <main className="policy-page">
        <p className="section-kicker">Terms of Service</p>
        <h1>服务条款</h1>

        <section className="policy-section">
          <h2>服务性质</h2>
          <p>
            Evenly 是一个共同消费记录和分账辅助工具，不是金融机构或支付服务提供方。
            App 中展示的结算建议仅用于帮助你理解账目关系，真实转账和付款由用户自行在线下或其他支付工具中完成。
          </p>
        </section>

        <section className="policy-section">
          <h2>用户责任</h2>
          <p>
            你需要确保自己录入的消费、成员、金额和备注信息真实、准确，并有权与相关成员共享这些内容。
            因录入错误、遗漏、重复记录或成员之间理解差异造成的争议，由用户自行沟通解决。
          </p>
        </section>

        <section className="policy-section">
          <h2>结算建议</h2>
          <p>
            Evenly 会根据你和成员录入的账目生成结算建议。建议可能受到四舍五入、编辑历史、
            成员设置和数据同步状态影响，请在实际付款前与相关成员确认。
          </p>
        </section>

        <section className="policy-section">
          <h2>测试版与功能变化</h2>
          <p>
            Evenly 仍可能处于测试或持续迭代阶段，功能、界面、数据结构和可用性可能随版本调整。
            我们会尽力保持服务稳定，但无法承诺所有功能永久保持不变。
          </p>
        </section>

        <section className="policy-section">
          <h2>可接受使用</h2>
          <p>
            你不得利用 Evenly 从事违法、欺诈、侵权、骚扰、破坏服务安全或干扰他人正常使用的行为，
            也不得尝试绕过访问控制、逆向攻击服务或上传恶意内容。
          </p>
        </section>

        <section className="policy-section">
          <h2>免责声明</h2>
          <p>
            Evenly 按现状提供服务。我们会努力维护准确性和可用性，但不对结算建议、数据同步延迟、
            第三方服务故障或用户之间的实际资金往来承担责任。
          </p>
        </section>

        <section className="policy-section">
          <h2>联系我们</h2>
          <p>
            如对本服务条款有疑问，请发送邮件至{" "}
            <a href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a>。
          </p>
        </section>
      </main>
    </Layout>
  );
}

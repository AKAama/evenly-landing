const ledgerItems = [
  { title: "民宿尾款", payer: "Alex 垫付", amount: "¥1,280" },
  { title: "海鲜晚餐", payer: "雨菲 垫付", amount: "¥486" },
  { title: "打车去机场", payer: "Ming 垫付", amount: "¥92" },
];

const settlements = [
  { from: "Alex", to: "雨菲", amount: "¥126" },
  { from: "Ming", to: "Alex", amount: "¥318" },
];

function LedgerContent() {
  return (
    <>
      <section className="mock-summary">
        <p>周末旅行</p>
        <h2>¥1,858.00</h2>
        <span>4 位成员 · 6 笔账目</span>
      </section>

      <section className="mock-card" aria-labelledby="mock-ledger-title">
        <div className="mock-section-title" id="mock-ledger-title">
          最新账目
        </div>
        <div className="mock-ledger-list">
          {ledgerItems.map((item) => (
            <div className="mock-ledger-item" key={item.title}>
              <div>
                <strong>{item.title}</strong>
                <span>{item.payer}</span>
              </div>
              <b>{item.amount}</b>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

function SettlementContent() {
  return (
    <>
      <section className="mock-summary">
        <p>建议结算</p>
        <h2>2 笔转账</h2>
        <span>把 6 笔账目整理成最少结算</span>
      </section>

      <section className="mock-card" aria-labelledby="mock-settlement-title">
        <div className="mock-section-title" id="mock-settlement-title">
          待完成
        </div>
        <div className="mock-settlement-list">
          {settlements.map((settlement) => (
            <div
              className="mock-settlement-item"
              key={`${settlement.from}-${settlement.to}`}
            >
              <span>
                {settlement.from} 转给 {settlement.to}
              </span>
              <strong>{settlement.amount}</strong>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default function IPhoneMockup({ title = "Evenly", variant = "ledger" }) {
  return (
    <div
      className={`iphone-mockup iphone-mockup-${variant}`}
      role="img"
      aria-label={`${title} 应用界面预览`}
    >
      <div className="iphone-frame">
        <div className="iphone-screen">
          <div className="mock-status-bar">
            <span>9:41</span>
            <span>5G</span>
          </div>

          <div className="mock-topbar">
            <strong>{title}</strong>
            <span>{variant === "settlement" ? "Settlement" : "Shared ledger"}</span>
          </div>

          {variant === "settlement" ? <SettlementContent /> : <LedgerContent />}
        </div>
      </div>
    </div>
  );
}

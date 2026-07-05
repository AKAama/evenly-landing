import Layout from "../components/Layout";
import { changelogEntries } from "../content";

export default function Changelog() {
  return (
    <Layout compact>
      <main className="policy-page changelog-page">
        <p className="section-kicker">Changelog</p>
        <h1>更新日志</h1>
        <p className="changelog-intro">记录 Evenly 每次值得说一声的变化。</p>

        <div className="changelog-list">
          {changelogEntries.map((entry) => (
            <article className="changelog-entry" key={entry.date}>
              <time>{entry.date}</time>
              <h2>{entry.title}</h2>
              <ul>
                {entry.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </main>
    </Layout>
  );
}

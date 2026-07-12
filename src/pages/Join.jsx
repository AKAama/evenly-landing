import { useEffect, useMemo, useState } from "react";
import Layout from "../components/Layout";
import { getPrimaryDownloadUrl, siteConfig } from "../config";

const API_BASE =
  import.meta.env.VITE_API_BASE_URL || "https://evenly.ismyh.cn/api";

function appSchemeUrl(token) {
  return `evenly://join/${encodeURIComponent(token)}`;
}

export default function Join({ token }) {
  const [preview, setPreview] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const downloadUrl = useMemo(() => getPrimaryDownloadUrl(), []);
  const openAppHref = useMemo(() => appSchemeUrl(token), [token]);

  useEffect(() => {
    let cancelled = false;
    async function load() {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(
          `${API_BASE}/ledgers/invite-links/${encodeURIComponent(token)}/preview`
        );
        if (!res.ok) {
          throw new Error(
            res.status === 404
              ? "邀请链接无效或已重置"
              : "暂时无法加载邀请信息"
          );
        }
        const data = await res.json();
        if (!cancelled) setPreview(data);
      } catch (err) {
        if (!cancelled) setError(err.message || "加载失败");
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    if (token) load();
    return () => {
      cancelled = true;
    };
  }, [token]);

  return (
    <Layout>
      <section className="join-page">
        <div className="join-card">
          <p className="eyebrow">账本邀请</p>
          {loading && <p className="muted">正在读取邀请…</p>}
          {!loading && error && (
            <>
              <h1>无法加入</h1>
              <p className="muted">{error}</p>
              <p className="muted">
                请让朋友在 Evenly 里重新生成二维码后再试。
              </p>
            </>
          )}
          {!loading && preview && (
            <>
              <h1>加入「{preview.ledger_name}」</h1>
              <p className="muted">
                {preview.owner_name} 邀请你一起记账。若已安装 Evenly，可直接打开
                App；否则请先下载。
              </p>
              <div className="join-actions">
                <a className="cta-button join-open-app" href={openAppHref}>
                  <span>
                    <small>Open in</small>
                    <strong>Evenly</strong>
                  </span>
                </a>
                <a className="secondary-link" href={downloadUrl}>
                  还没有 App？去下载
                </a>
              </div>
              <p className="join-hint">
                用 iPhone 相机扫二维码时，系统会优先打开 Evenly（已安装且 Universal
                Links 生效时）。站点：{siteConfig.siteUrl}
              </p>
            </>
          )}
        </div>
      </section>
    </Layout>
  );
}

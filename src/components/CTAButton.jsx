import { getPrimaryDownloadUrl } from "../config";
import appStoreButton from "../assets/lumnea-reference/app-store-button.svg";

export default function CTAButton({
  className = "",
  children = "加入 TestFlight 测试",
}) {
  const label = children === "App Store" ? "Download on the App Store" : String(children);
  const isAppStoreButton = children === "App Store";

  return (
    <a
      aria-label={label}
      className={`cta-button ${isAppStoreButton ? "cta-button-image" : ""} ${className}`.trim()}
      href={getPrimaryDownloadUrl()}
    >
      {isAppStoreButton ? (
        <img src={appStoreButton} alt="" />
      ) : (
        <>
          <span className="apple-mark" aria-hidden="true" />
          <span>
            <small>Download on the</small>
            <strong>{children}</strong>
          </span>
        </>
      )}
    </a>
  );
}

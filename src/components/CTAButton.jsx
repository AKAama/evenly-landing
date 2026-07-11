import { siteConfig } from "../config";
import appStoreButton from "../assets/lumnea-reference/app-store-button.svg";

export default function CTAButton({
  className = "",
  children = "加入 TestFlight 测试",
}) {
  const label = children === "App Store" ? "Download on the App Store" : String(children);
  const isAppStoreButton = children === "App Store";
  const href = isAppStoreButton
    ? siteConfig.appStoreUrl || "/download"
    : siteConfig.testFlightUrl || "/download";

  return (
    <a
      aria-label={label}
      className={`cta-button ${isAppStoreButton ? "cta-button-image" : ""} ${className}`.trim()}
      href={href}
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

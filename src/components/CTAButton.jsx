import { siteConfig } from "../config";
import appStoreButton from "../assets/lumnea-reference/app-store-button.svg";

function AppleLogo({ className = "" }) {
  return (
    <svg
      className={className}
      width="22"
      height="26"
      viewBox="33 20 23 28.5"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      {/* Paths matched to the App Store badge asset */}
      <path d="M 49.577 26.79 C 47.459 26.79 45.726 28.082 44.619 28.082 C 43.44 28.082 41.906 26.79 40.06 26.79 C 36.551 26.79 33 29.771 33 35.225 C 33 38.634 34.308 42.228 35.94 44.543 C 37.333 46.503 38.553 48.08 40.316 48.08 C 42.049 48.08 42.815 46.957 44.973 46.957 C 47.161 46.957 47.658 48.08 49.575 48.08 C 51.478 48.08 52.743 46.333 53.951 44.613 C 55.285 42.64 55.853 40.723 55.868 40.623 C 55.754 40.594 52.118 39.104 52.118 34.942 C 52.118 31.335 54.972 29.715 55.143 29.587 C 53.254 26.874 50.37 26.79 49.575 26.79 Z" />
      <path d="M 48.581 24.488 C 49.448 23.437 50.059 22.003 50.059 20.554 C 50.059 20.355 50.044 20.156 50.015 20 C 48.596 20.057 46.891 20.937 45.882 22.131 C 45.073 23.04 44.335 24.488 44.335 25.936 C 44.335 26.164 44.377 26.378 44.392 26.448 C 44.476 26.462 44.618 26.49 44.775 26.49 C 46.039 26.49 47.63 25.638 48.58 24.488 Z" />
    </svg>
  );
}

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
          <AppleLogo className="apple-logo" />
          <span>
            <small>Available on</small>
            <strong>{children}</strong>
          </span>
        </>
      )}
    </a>
  );
}

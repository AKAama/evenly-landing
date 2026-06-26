import { getPrimaryDownloadUrl } from "../config";

export default function CTAButton({
  className = "",
  children = "加入 TestFlight 测试",
}) {
  return (
    <a className={`cta-button ${className}`.trim()} href={getPrimaryDownloadUrl()}>
      {children}
    </a>
  );
}

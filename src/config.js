export const siteConfig = {
  siteUrl: import.meta.env.VITE_SITE_URL || "https://app.ismyh.cn",
  supportEmail: import.meta.env.VITE_SUPPORT_EMAIL || "isyehui@gmail.com",
  testFlightUrl: import.meta.env.VITE_TESTFLIGHT_URL || "",
  appStoreUrl: import.meta.env.VITE_APP_STORE_URL || "",
};

export function getPrimaryDownloadUrl() {
  return siteConfig.testFlightUrl || siteConfig.appStoreUrl || "/download";
}

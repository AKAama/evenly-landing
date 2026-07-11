export const siteConfig = {
  siteUrl: import.meta.env.VITE_SITE_URL || "https://app.ismyh.cn",
  supportEmail: import.meta.env.VITE_SUPPORT_EMAIL || "isyehui@gmail.com",
  testFlightUrl:
    import.meta.env.VITE_TESTFLIGHT_URL || "https://testflight.apple.com/join/vwJgZ9gF",
  appStoreUrl:
    import.meta.env.VITE_APP_STORE_URL ||
    "https://apps.apple.com/cn/app/evenly/id6784235151",
};

export function getPrimaryDownloadUrl() {
  return siteConfig.appStoreUrl || "/download";
}

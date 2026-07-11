import { siteConfig } from "./config";

export const navLinks = [
  { href: "/changelog", label: "更新日志" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/support", label: "Support" },
];

export const changelogEntries = [
  {
    date: "2026 年 7 月 5 日",
    title: "协作与账户体验更新",
    items: [
      "新增唯一用户名，支持使用用户名或邮箱登录。",
      "新增账本邀请流程，被邀请者接受后才会正式加入。",
      "收紧账本、成员和账单删除权限，普通成员可安全退出账本。",
      "账单创建者无需重复确认，并精简待结算与历史结算展示。",
      "新增本地使用模式、成员头像、账单范围筛选及多处界面优化。",
    ],
  },
  {
    date: "2026 年 6 月 28 日",
    title: "共享账本稳定性更新",
    items: [
      "支持临时成员参与账单分摊。",
      "优化付款人和成员身份匹配，修复部分账单无法创建的问题。",
      "完善头像上传、显示与失败提示。",
      "优化结算方案展示及账本成员刷新。",
    ],
  },
  {
    date: "2026 年 6 月 14 日",
    title: "Evenly 初始版本",
    items: [
      "支持创建共享账本、添加成员和记录多人账单。",
      "支持成员确认、自动分摊和结算建议。",
      "支持账户注册、登录和个人资料管理。",
    ],
  },
];

export const useCases = [
  {
    title: "Ledger",
    body: "Read a clean shared ledger that summarises every expense from any trip, dinner, or home.",
  },
  {
    title: "Settlement",
    body: "Turn many payments into a few simple transfers, without reopening the group chat.",
  },
  {
    title: "Reminders",
    body: "Keep shared expenses moving with gentle prompts when a book needs attention.",
  },
];

export const features = [
  {
    title: "共享账本",
    body: "为一次活动或长期共同生活创建账本，成员都能看到清晰记录。",
  },
  {
    title: "成员确认",
    body: "关键账目由成员确认，避免遗漏、误解或重复记录。",
  },
  {
    title: "自动分账",
    body: "根据参与成员和付款人自动计算应付金额，少一点手算。",
  },
  {
    title: "结算建议",
    body: "整理谁该补给谁，给出更少转账次数的结算方式。",
  },
];

export const faqs = [
  {
    question: "Evenly 是什么？",
    answer: "Evenly 是一款面向共同消费场景的共享账本工具，帮助多人记录、确认和结算开销。",
  },
  {
    question: "适合哪些场景？",
    answer: "适合聚餐、旅行、合租、同事代买、家庭日常开销等需要多人共同分摊费用的场景。",
  },
  {
    question: "现在可以在哪里下载或测试？",
    answer: "Evenly 已在 App Store 上架；如果想提前体验后续更新，也可以加入 TestFlight。",
  },
  {
    question: "我的账本数据会同步吗？",
    answer: "Evenly 计划支持账本同步，让共同成员能够查看同一份最新记录。",
  },
  {
    question: "如何反馈问题？",
    answer: `你可以发送邮件到 ${siteConfig.supportEmail} 反馈问题、建议或测试体验。`,
  },
  {
    question: "TestFlight 和 App Store 有什么区别？",
    answer: "App Store 提供稳定版本，TestFlight 会用于提前发布和测试后续更新。",
  },
];

export const testimonials = [
  {
    quote: "终于不用在群聊里翻谁付了什么。它很轻，但账目一下就清楚了。",
    name: "Stacey M.",
    role: "Early beta user",
  },
  {
    quote: "旅行结束后结算很快，Evenly 把几笔复杂垫付整理成了两次转账。",
    name: "Daniel L.",
    role: "Early beta user",
  },
  {
    quote: "合租买东西以前总是忘，现在每个人确认一下就行，少了很多尴尬。",
    name: "Alex R.",
    role: "Early beta user",
  },
];

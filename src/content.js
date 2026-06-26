import { siteConfig } from "./config";

export const navLinks = [
  { href: "/privacy", label: "隐私政策" },
  { href: "/terms", label: "服务条款" },
  { href: "/support", label: "支持" },
];

export const useCases = [
  {
    title: "聚餐",
    body: "记录每个人点了什么、谁先垫付，让饭后分账更清楚。",
  },
  {
    title: "旅行",
    body: "把住宿、交通、门票和日常开销放进同一本账，旅途中也能随时对齐。",
  },
  {
    title: "合租与日常",
    body: "管理房租、水电、日用品和零散代买，减少反复算账的麻烦。",
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
    answer: "Evenly 目前处于早期阶段，下载和测试入口会在页面中更新。",
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
    question: "之后会上架 App Store 吗？",
    answer: "计划会在准备就绪后上架 App Store，具体时间会根据测试反馈和审核进度更新。",
  },
];

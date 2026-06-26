import { siteConfig } from "./config";

export const navLinks = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/support", label: "Support" },
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

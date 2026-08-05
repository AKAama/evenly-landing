import "@testing-library/jest-dom/vitest";
import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, test } from "vitest";
import App from "./App";

const supportEmailHref = "mailto:isyehui@gmail.com";

function renderPath(path) {
  window.history.pushState({}, "", path);
  return render(<App />);
}

afterEach(() => {
  cleanup();
  window.history.pushState({}, "", "/");
});

test("renders the home route", () => {
  renderPath("/");

  expect(screen.getByRole("navigation", { name: "主导航" })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: "理念" })).toHaveAttribute("href", "#mission");
  expect(screen.getByRole("link", { name: "功能" })).toHaveAttribute("href", "#features-title");
  expect(screen.getByRole("link", { name: "常见问题" })).toHaveAttribute("href", "#faq-title");
  expect(screen.getByRole("link", { name: "在 App Store 下载 Evenly" })).toHaveAttribute(
    "href",
    "https://apps.apple.com/cn/app/evenly/id6784235151"
  );
  expect(
    screen.getByRole("heading", {
      name: /把共同消费\s*变成一本清楚的账/,
    })
  ).toBeInTheDocument();
  expect(screen.getByText(/帮朋友、室友和旅行搭子/)).toBeInTheDocument();
  expect(
    screen.getByRole("heading", { name: /养成更轻松的\s*共同消费习惯/ })
  ).toBeInTheDocument();
  expect(
    screen.getByRole("heading", { name: "记录、确认、分摊、结清。" })
  ).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: "常见问题" })).toBeInTheDocument();
});

test("renders the privacy route", () => {
  renderPath("/privacy");

  expect(screen.getByRole("heading", { name: "隐私政策" })).toBeInTheDocument();
  expect(
    screen.getAllByRole("link", { name: "isyehui@gmail.com" }).some(
      (link) => link.getAttribute("href") === supportEmailHref
    )
  ).toBe(true);
  expect(screen.getByText(/删除账号及相关数据/)).toBeInTheDocument();
});

test("renders the terms route", () => {
  renderPath("/terms");

  expect(screen.getByRole("heading", { name: "服务条款" })).toBeInTheDocument();
  expect(screen.getByText(/不是金融机构或支付服务提供方/)).toBeInTheDocument();
});

test("renders the support route", () => {
  renderPath("/support");

  expect(screen.getByRole("heading", { name: "支持与反馈" })).toBeInTheDocument();
  expect(screen.getByText(/设备型号/)).toBeInTheDocument();
  expect(screen.getByText(/iOS 版本/)).toBeInTheDocument();
  expect(
    screen.getAllByRole("link", { name: "isyehui@gmail.com" }).some(
      (link) => link.getAttribute("href") === supportEmailHref
    )
  ).toBe(true);
});

test("renders the download route", () => {
  renderPath("/download");

  expect(screen.getByRole("heading", { name: "下载 Evenly" })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: "Download on the App Store" })).toHaveAttribute(
    "href",
    "https://apps.apple.com/cn/app/evenly/id6784235151"
  );
  expect(screen.getByRole("link", { name: "打开 TestFlight 邀请" })).toHaveAttribute(
    "href",
    "https://testflight.apple.com/join/vwJgZ9gF"
  );
});

test("renders the changelog route", () => {
  renderPath("/changelog");

  expect(screen.getByRole("heading", { name: "更新日志" })).toBeInTheDocument();
  expect(screen.getByText("协作与账户体验更新")).toBeInTheDocument();
  expect(screen.getByText(/支持使用用户名或邮箱登录/)).toBeInTheDocument();
});

describe("download CTA", () => {
  it("shows App Store wording on the homepage", () => {
    renderPath("/");
    const links = screen.getAllByRole("link", { name: "Download on the App Store" });

    expect(links.length).toBeGreaterThanOrEqual(1);
    links.forEach((link) => {
      expect(link).toHaveAttribute(
        "href",
        "https://apps.apple.com/cn/app/evenly/id6784235151"
      );
    });
  });
});

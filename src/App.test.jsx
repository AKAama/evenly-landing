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

  expect(
    screen.getByRole("heading", {
      name: "Turn shared spending intobite-sized clarity.",
    })
  ).toBeInTheDocument();
  expect(screen.getByText(/把聚餐、旅行、合租和日常代买/)).toBeInTheDocument();
  expect(
    screen.getByRole("heading", { name: "Build a calmer money habit" })
  ).toBeInTheDocument();
  expect(
    screen.getByRole("heading", { name: "记录、确认、分摊、结清。" })
  ).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: "常见问题" })).toBeInTheDocument();
});

test("renders the privacy route", () => {
  renderPath("/privacy");

  expect(
    screen.getByRole("heading", { name: "隐私政策" })
  ).toBeInTheDocument();
  expect(
    screen.getAllByRole("link", { name: "isyehui@gmail.com" }).some(
      (link) => link.getAttribute("href") === supportEmailHref
    )
  ).toBe(true);
  expect(screen.getByText(/删除账号及相关数据/)).toBeInTheDocument();
});

test("renders the terms route", () => {
  renderPath("/terms");

  expect(
    screen.getByRole("heading", { name: "服务条款" })
  ).toBeInTheDocument();
  expect(screen.getByText(/不是金融机构或支付服务提供方/)).toBeInTheDocument();
});

test("renders the support route", () => {
  renderPath("/support");

  expect(
    screen.getByRole("heading", { name: "支持与反馈" })
  ).toBeInTheDocument();
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

  expect(
    screen.getByRole("heading", { name: "抢先体验 Evenly" })
  ).toBeInTheDocument();
  expect(screen.getByText(/TestFlight 邀请链接正在准备中/)).toBeInTheDocument();
  expect(
    screen.getAllByRole("link", { name: "isyehui@gmail.com" }).some(
      (link) => link.getAttribute("href") === supportEmailHref
    )
  ).toBe(true);
});

describe("download CTA", () => {
  it("shows App Store wording on the homepage", () => {
    renderPath("/");
    const link = screen.getByRole("link", { name: "Download on the App Store" });

    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/download");
  });
});

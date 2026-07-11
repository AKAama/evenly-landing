# Home Navigation and App Store QR Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Restore the homepage navigation and make the QR action reveal an App Store QR code.

**Architecture:** Keep the full-width homepage shell while rendering the shared header on every non-minimal-content page. Store the QR code locally and reveal it with CSS on hover and keyboard focus.

**Tech Stack:** React, CSS, Vitest, Testing Library

## Global Constraints

- QR destination: `https://apps.apple.com/cn/app/evenly/id6784235151`
- Mobile retains the direct App Store button and hides the QR-only interaction.

---

### Task 1: Homepage navigation and QR popover

**Files:**
- Modify: `src/App.test.jsx`
- Modify: `src/components/Layout.jsx`
- Modify: `src/pages/Home.jsx`
- Modify: `src/styles.css`
- Create: `src/assets/evenly/app-store-qr.svg`

**Interfaces:**
- Consumes: `siteConfig.appStoreUrl`
- Produces: shared homepage navigation and accessible QR download link

- [ ] Add failing tests for the homepage navigation, App Store header CTA, and QR destination.
- [ ] Run `npm test -- --run` and confirm failure.
- [ ] Render the shared header, add the local QR popover, and style hover/focus states.
- [ ] Run `npm test -- --run` and confirm all tests pass.
- [ ] Run `npm run build` and `git diff --check`.

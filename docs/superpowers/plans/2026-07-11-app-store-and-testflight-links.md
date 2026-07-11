# App Store and TestFlight Links Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make App Store the stable download destination while retaining TestFlight as the latest-version channel.

**Architecture:** Keep both URLs in central site configuration. Give App Store and TestFlight buttons explicit destinations so their behavior does not depend on a shared priority fallback.

**Tech Stack:** React, Vite, Vitest, Testing Library

## Global Constraints

- App Store URL: `https://apps.apple.com/cn/app/evenly/id6784235151`
- TestFlight URL: `https://testflight.apple.com/join/vwJgZ9gF`
- Preserve environment-variable overrides.

---

### Task 1: Download destinations and current copy

**Files:**
- Modify: `src/App.test.jsx`
- Modify: `src/config.js`
- Modify: `src/components/CTAButton.jsx`
- Modify: `src/pages/Download.jsx`
- Modify: `src/content.js`
- Modify: `src/pages/Support.jsx`

**Interfaces:**
- Consumes: `siteConfig.appStoreUrl`, `siteConfig.testFlightUrl`
- Produces: `CTAButton` with explicit `destination` selection

- [ ] Write tests asserting the homepage App Store URL and both `/download` destinations.
- [ ] Run `npm test -- --run` and confirm the new assertions fail.
- [ ] Add URL defaults, explicit CTA routing, and current availability copy.
- [ ] Run `npm test -- --run` and confirm all tests pass.
- [ ] Run `npm run build` and confirm the production build succeeds.

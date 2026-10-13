# Evenly Landing

Chinese landing and policy site for Evenly.

## Local Development

```sh
npm install
npm run dev
```

Default local URL: http://localhost:5174

## Environment Variables

```sh
VITE_SITE_URL=https://app.ismyh.com
VITE_SUPPORT_EMAIL=isyehui@gmail.com
VITE_TESTFLIGHT_URL=
VITE_APP_STORE_URL=
```

If `VITE_TESTFLIGHT_URL` is empty, download CTAs route to `/download` and show a beta invitation message.

## Build And Verification

```sh
npm run test
npm run build
```

Production output: `dist`.

The build also emits static entry files for `/privacy`, `/terms`, `/support`, and `/download`
so those public links work on plain static hosting without relying on a platform-specific SPA fallback.

## Public URLs

- `/`
- `/privacy`
- `/terms`
- `/support`
- `/download`

## Homepage Promo Video

The homepage includes a click-to-play 50-second product film below the hero.
Assets in `public/media/` are copied into `dist/media/` during the normal build:

- `evenly-promo.mp4`: 1080p30 H.264/AAC, approximately 5 MB, fast-start enabled.
- `evenly-promo-poster.jpg`: lightweight poster.
- `evenly-promo.zh-CN.vtt`: optional Chinese captions.

The video uses native playback controls, inline mobile playback, and `preload="none"` to avoid fetching the film on initial page load. Deploy the entire `dist` directory as usual. The original 4K master is kept outside this repository in the workspace's 宣传片 directory.

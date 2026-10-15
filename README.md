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

The build also emits static entry files for `/privacy`, `/terms`, `/support`, `/download`, and `/changelog`
so those public links work on plain static hosting without relying on a platform-specific SPA fallback.

## Public URLs

- `/`
- `/privacy`
- `/terms`
- `/support`
- `/download`
- `/changelog`

## CI/CD

`.github/workflows/deploy.yml` runs tests, deployment-script checks, and a production build
on pull requests and pushes to `main`. A successful `main` build is uploaded over SSH and
published to `47.96.83.175:/var/www/evenly-landing`. It can also be started manually from
GitHub Actions using **Landing CI/CD → Run workflow** on `main`.

Configure repository **Settings → Secrets and variables → Actions**:

| Secret | Required |
| --- | --- |
| `DEPLOY_USER` | SSH login user with write access to the site directory |
| `DEPLOY_PASSWORD` | SSH password, if using password authentication |
| `DEPLOY_SSH_KEY` | SSH private key, if using key authentication instead |
| `DEPLOY_FINGERPRINT` | Optional trusted SHA256 SSH host-key fingerprint |

Optional Actions variables: `DEPLOY_HOST` (default `47.96.83.175`), `DEPLOY_PORT` (default `22`),
`DEPLOY_PATH` (default `/var/www/evenly-landing`), and `DEPLOY_URL` (default `https://app.ismyh.cn`).
No Node.js installation is needed on the server; it only needs SSH, Bash, standard file tools,
and an existing web server serving the target directory.

Builds are staged outside the live directory. Assets, media, and other static files are
published before HTML, with atomic replacement of individual files. Existing files are
retained, including previous hashed bundles and server-managed `.well-known` files.
There is no automatic removal of old assets and no Nginx restart.
The final check compares the public `deploy-version.txt` with the deployed Git commit;
a successful upload alone does not mark the deployment successful.

## Homepage Promo Video

The homepage includes a click-to-play 50-second product film below the hero.
Assets in `public/media/` are copied into `dist/media/` during the normal build:

- `evenly-promo.mp4`: 1080p30 H.264/AAC, approximately 5 MB, fast-start enabled.
- `evenly-promo-poster.jpg`: lightweight poster.
- `evenly-promo.zh-CN.vtt`: optional Chinese captions.

The video uses native playback controls, inline mobile playback, and `preload="none"` to avoid fetching the film on initial page load. Deploy the entire `dist` directory as usual. The original 4K master is kept outside this repository in the workspace's 宣传片 directory.

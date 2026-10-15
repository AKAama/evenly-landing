#!/usr/bin/env bash
set -euo pipefail

script_dir=$(cd "$(dirname "$0")" && pwd)
fixture=$(mktemp -d)
trap 'rm -rf -- "$fixture"' EXIT
build="$fixture/build"
site="$fixture/site"
mkdir -p "$build/assets" "$build/changelog" "$build/media" "$site/assets" "$site/.well-known"
printf 'new page' > "$build/index.html"
printf 'new changelog' > "$build/changelog/index.html"
printf 'new bundle' > "$build/assets/new.js"
printf 'video' > "$build/media/promo.mp4"
printf 'old page' > "$site/index.html"
printf 'cached bundle' > "$site/assets/old.js"
printf 'server-managed association' > "$site/.well-known/apple-app-site-association"

bash "$script_dir/deploy-static.sh" "$build" "$site"
cmp "$build/index.html" "$site/index.html"
cmp "$build/changelog/index.html" "$site/changelog/index.html"
cmp "$build/assets/new.js" "$site/assets/new.js"
cmp "$build/media/promo.mp4" "$site/media/promo.mp4"
[[ $(cat "$site/assets/old.js") == 'cached bundle' ]]
[[ $(cat "$site/.well-known/apple-app-site-association") == 'server-managed association' ]]

# A failed asset copy must not publish HTML that references missing bundles.
broken_site="$fixture/broken-site"
mkdir -p "$broken_site"
printf 'old page' > "$broken_site/index.html"
printf 'not a directory' > "$broken_site/assets"
if bash "$script_dir/deploy-static.sh" "$build" "$broken_site"; then
  echo 'An asset publication failure was ignored.' >&2
  exit 1
fi
[[ $(cat "$broken_site/index.html") == 'old page' ]]

# Reject incomplete builds before replacing the current page.
rm "$build/index.html"
if bash "$script_dir/deploy-static.sh" "$build" "$site"; then
  echo 'An incomplete build was accepted.' >&2
  exit 1
fi
[[ $(cat "$site/index.html") == 'new page' ]]

printf 'new page' > "$build/index.html"
for invalid_target in / relative/path "$build"; do
  if bash "$script_dir/deploy-static.sh" "$build" "$invalid_target"; then
    echo 'An unsafe deployment target was accepted.' >&2
    exit 1
  fi
done
echo 'Deployment checks passed.'

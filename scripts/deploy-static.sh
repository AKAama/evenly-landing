#!/usr/bin/env bash
set -euo pipefail
umask 022

source_dir=${1:?Usage: deploy-static.sh SOURCE TARGET}
target_dir=${2:?Usage: deploy-static.sh SOURCE TARGET}
source_dir=${source_dir%/}
target_dir=${target_dir%/}

if [[ "$target_dir" != /* || -z "$target_dir" || "$source_dir" == "$target_dir" ]]; then
  echo 'Target must be an absolute site directory distinct from the build directory.' >&2
  exit 1
fi
if [[ ! -s "$source_dir/index.html" || ! -d "$source_dir/assets" ]]; then
  echo 'Build is incomplete: index.html and assets/ are required.' >&2
  exit 1
fi

publish_file() {
  local file=$1 destination temporary
  destination="$target_dir/${file#"$source_dir"/}"
  mkdir -p "$(dirname "$destination")"
  temporary=$(mktemp "$destination.evenly-XXXXXX")
  if cp "$file" "$temporary" && chmod 644 "$temporary" && mv -f "$temporary" "$destination"; then
    return
  fi
  rm -f -- "$temporary"
  return 1
}

# Keep previous hashed assets and server-managed files for cached pages.
# Each file is replaced atomically, and HTML is published only after assets.
while IFS= read -r -d '' file; do
  publish_file "$file"
done < <(find "$source_dir" -type f ! -name '*.html' -print0)

while IFS= read -r -d '' file; do
  publish_file "$file"
done < <(find "$source_dir" -type f -name '*.html' -print0)

echo 'Static site published.'

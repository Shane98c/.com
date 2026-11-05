#!/bin/sh
# Renders card.html to public/img/social-card.jpg for link previews (og:image).
set -e
here="$(cd "$(dirname "$0")" && pwd)"
chrome="${CHROME:-/Applications/Google Chrome.app/Contents/MacOS/Google Chrome}"
tmp="$(mktemp -d)"
"$chrome" --headless --disable-gpu --hide-scrollbars --force-device-scale-factor=1 \
  --allow-file-access-from-files --window-size=1200,630 --screenshot="$tmp/card.png" \
  "file://$here/card.html" 2>/dev/null
sips -s format jpeg -s formatOptions 86 "$tmp/card.png" \
  --out "$here/../../public/img/social-card.jpg" >/dev/null
rm -r "$tmp"

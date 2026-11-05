#!/bin/sh
# Writes resized copies of public/img/*.webp for srcset: 640px wide to thumb/, 960px wide to md/.
set -e
cd "$(dirname "$0")/../public/img"
mkdir -p thumb md
tmp=$(mktemp -d)
for f in *.webp; do
  dwebp -quiet "$f" -o "$tmp/src.png"
  width=$(sips -g pixelWidth "$tmp/src.png" | awk '/pixelWidth/ {print $2}')
  for pair in thumb:640 md:960; do
    dir=${pair%%:*}
    size=${pair##*:}
    if [ "$width" -gt "$size" ]; then
      cwebp -quiet -q 86 -sharp_yuv -resize "$size" 0 "$tmp/src.png" -o "$dir/$f"
    else
      cp "$f" "$dir/$f"
    fi
  done
done
rm -rf "$tmp"

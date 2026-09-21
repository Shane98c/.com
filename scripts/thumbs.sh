#!/bin/sh
# Writes 640px-wide copies of public/img/*.webp to public/img/thumb/ for the small grid tiles.
set -e
cd "$(dirname "$0")/../public/img"
mkdir -p thumb
tmp=$(mktemp -d)
for f in *.webp; do
  dwebp -quiet "$f" -o "$tmp/src.png"
  width=$(sips -g pixelWidth "$tmp/src.png" | awk '/pixelWidth/ {print $2}')
  if [ "$width" -gt 640 ]; then
    cwebp -quiet -q 86 -sharp_yuv -resize 640 0 "$tmp/src.png" -o "thumb/$f"
  else
    cp "$f" "thumb/$f"
  fi
done
rm -rf "$tmp"

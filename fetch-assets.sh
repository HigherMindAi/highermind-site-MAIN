#!/usr/bin/env bash
# ---------------------------------------------------------------------------
# HigherMindAI - pull every still and film local.
#
# The site ships pointing at the generation CDN, which works and costs nothing
# to set up. Self-hosting is better for two reasons: it puts the media on
# Netlify's edge, which is faster than the generation CDN, and it removes a
# third-party host from the critical path of the homepage.
#
# Run this once, then flip ONE word:
#
#     src/lib/media.ts  ->  export const USE_LOCAL_ASSETS = true;
#
# Then commit public/media/ and deploy. Nothing else changes.
#
# Video does not really belong in a git repo. If the repo gets heavy, put the
# films on Netlify Large Media or keep them on the CDN and self-host only the
# stills - the switch is per-file in the manifest if you want to split it.
# ---------------------------------------------------------------------------
set -euo pipefail

CDN="https://d8j0ntlcm91z4.cloudfront.net/user_2vxHkVim9pDZL3FfvXCfzWCkqG7"
OUT="public/media"
mkdir -p "$OUT"

FILES=(
  # --- stills -------------------------------------------------------------
  hf_20260918_205612_7995bf5c-7649-4bc7-b589-7dd49c3ab637.png   # catchment
  hf_20260918_205612_b817da4d-9ac8-4c4a-a452-4e6797930511.png   # afterHours
  hf_20260918_205613_244a1b23-f52e-4d9b-9d95-1a9efe166496.png   # twoTowns
  hf_20260918_205612_7988f01f-5e1d-4d12-ac96-b897e3cdb03a.png   # storefront
  hf_20260918_205612_6da78277-bb0f-4725-b412-b99f5c5686f8.png   # oneNamed
  hf_20260918_205612_38998d09-4612-46bd-a4bb-d2b1bacb31fc.png   # theTap
  hf_20260918_205613_34274e74-e245-4f38-be37-1c3fb079f267.png   # theRecord
  hf_20260918_205942_544ba2dc-7454-481f-80a0-60ab13decc59.png   # threeLit
  hf_20260918_205942_ca6df9b7-5a05-499f-9ca9-bb932ca908da.png   # reception
  hf_20260918_205942_b4369447-6611-48f1-884b-6ec84a8524f7.png   # checked
  hf_20260918_205942_e7de5ebb-c3c2-42c8-8758-e7fd2a26110f.png   # theWayIn
  hf_20260918_205942_1ded54ca-a9ef-411e-af98-d8ab8e4de250.png   # theLine
  # --- films --------------------------------------------------------------
  hf_20260918_210106_dfebb24e-6c5e-4cff-8b8d-1f7ca1ac7220.mp4   # catchment
  hf_20260918_210106_e4d11bbd-b784-47f6-b763-7689733d0a70.mp4   # threeLit
  hf_20260918_210106_1ed13eda-2c0e-4a80-ae30-85aa4c04f251.mp4   # twoTowns
  hf_20260918_210038_4f71a72e-eb32-4309-9787-5e5febd72d47.mp4   # reception
  hf_20260918_210106_d921cda2-c0c1-42a1-95a8-bd5cb53ac514.mp4   # storefront
  hf_20260918_210038_410088dc-2470-4221-9089-c88255d77e8d.mp4   # theWayIn
  hf_20260918_210038_fb87cb54-7b88-4730-8e58-9a78f14ba3c3.mp4   # oneNamed
)

for f in "${FILES[@]}"; do
  if [ -f "$OUT/$f" ]; then
    echo "have   $f"
  else
    echo "fetch  $f"
    curl -fsSL "$CDN/$f" -o "$OUT/$f"
  fi
  # the webp derivative, for cards and posters. Stills only.
  case "$f" in
    *.png)
      w="${f%.png}_min.webp"
      [ -f "$OUT/$w" ] || curl -fsSL "$CDN/$w" -o "$OUT/$w" || echo "  (no webp for $f)"
      ;;
  esac
done

echo
echo "Done. Now set USE_LOCAL_ASSETS = true in src/lib/media.ts and rebuild."
du -sh "$OUT"

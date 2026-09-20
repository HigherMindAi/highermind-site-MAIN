// ---------------------------------------------------------------------------
// HigherMindAI - the asset manifest.
//
// ONE SWITCH. `USE_LOCAL_ASSETS` controls every still and every film across the
// whole site. False serves them from the generation CDN, which is how the site
// ships today. True serves them from /media/, which is what happens after
// `fetch-assets.sh` has been run once and the files are committed.
//
// /media/ deliberately, NOT /assets/ - netlify.toml caches /assets/* immutable
// for a year, which is correct for Vite's fingerprinted output and wrong for a
// hand-named file that might ever need replacing.
//
// Flipping one word takes the whole site self-hosted, which is faster (Netlify
// edge beats the generation CDN) and removes a third-party dependency from the
// critical path. It is deliberately not flipped yet, because the files are not
// in the repo and a half-flipped switch is worse than either state.
//
// THE RULE ON IMAGERY. Places, never trades. A dentist, a restaurant, an auto
// recycler and a collision shop all have to land on this site and see themselves in it.
// Nothing here names a vertical: towns at dusk, a lit window on a dark street,
// an empty room after hours, a record on a desk. Those are the universal
// truths in the service book, and they are the only things photographed.
//
// No identifiable people, in any frame, ever. Environments and objects only.
// ---------------------------------------------------------------------------

export const USE_LOCAL_ASSETS = false;

const CDN = 'https://d8j0ntlcm91z4.cloudfront.net/user_2vxHkVim9pDZL3FfvXCfzWCkqG7';
const LOCAL = '/media';

/** Every still, by the job that produced it. */
const STILL_FILES: Record<string, string> = {
  catchment: 'hf_20260918_205612_7995bf5c-7649-4bc7-b589-7dd49c3ab637.png',
  afterHours: 'hf_20260918_205612_b817da4d-9ac8-4c4a-a452-4e6797930511.png',
  twoTowns: 'hf_20260918_205613_244a1b23-f52e-4d9b-9d95-1a9efe166496.png',
  storefront: 'hf_20260918_205612_7988f01f-5e1d-4d12-ac96-b897e3cdb03a.png',
  oneNamed: 'hf_20260918_205612_6da78277-bb0f-4725-b412-b99f5c5686f8.png',
  theTap: 'hf_20260918_205612_38998d09-4612-46bd-a4bb-d2b1bacb31fc.png',
  theRecord: 'hf_20260918_205613_34274e74-e245-4f38-be37-1c3fb079f267.png',
  threeLit: 'hf_20260918_205942_544ba2dc-7454-481f-80a0-60ab13decc59.png',
  reception: 'hf_20260918_205942_ca6df9b7-5a05-499f-9ca9-bb932ca908da.png',
  checked: 'hf_20260918_205942_b4369447-6611-48f1-884b-6ec84a8524f7.png',
  theWayIn: 'hf_20260918_205942_e7de5ebb-c3c2-42c8-8758-e7fd2a26110f.png',
  theLine: 'hf_20260918_205942_1ded54ca-a9ef-411e-af98-d8ab8e4de250.png',

  // --- trade-specific, and ONLY for the page of that trade -----------------
  // These were cut from the homepage on purpose: a dentist landing on a roof
  // does not see themselves. On a vertical page the vertical's own subject is
  // exactly right, which is why the cab carries /trades/, the bench carries
  // /auto-service-collision/ and the ordered shelves carry the parts page.
  // The rule is not "no trades", it is "no trade where the reader's own is
  // not already the subject".
  roofRidge: 'hf_20260918_205612_4b3ef17a-b346-40ef-b79d-3e8aa5321550.png',
  theCab: 'hf_20260918_205612_cd1ff53b-8fde-42bd-add5-6080f7877772.png',
  theBench: 'hf_20260918_205612_7a6affe5-33a2-4c3d-ba1d-2bab1ee8954b.png',
  inOrder: 'hf_20260918_205612_36d8860c-d3f8-4b31-a787-64a61354a98f.png',
  firstLight: 'hf_20260918_205612_8f9f106d-5744-49ab-830d-4026f5938d09.png',
};

export type StillKey = keyof typeof STILL_FILES;

/** Full-resolution still. Heroes and full-bleed plates. */
export function still(key: StillKey): string {
  const f = STILL_FILES[key];
  return USE_LOCAL_ASSETS ? `${LOCAL}/${f}` : `${CDN}/${f}`;
}

/** The generated webp derivative. Cards, thumbnails, poster frames. */
export function thumb(key: StillKey): string {
  const f = STILL_FILES[key];
  if (USE_LOCAL_ASSETS) return `${LOCAL}/${f.replace(/\.png$/, '_min.webp')}`;
  return `${CDN}/${f.replace(/\.png$/, '_min.webp')}`;
}

// ---------------------------------------------------------------------------
// THE GRADIENT FALLBACK
//
// Every plate gets a tonal gradient behind it, pulled from the still it sits
// under. A slow CDN, a dead CDN or a blocked region degrades to something that
// still looks designed rather than to a broken box. This is not a nicety - the
// buyer on bad rural wifi is the buyer this whole business is for.
// ---------------------------------------------------------------------------
export const TONE: Record<StillKey, string> = {
  catchment: 'linear-gradient(170deg,#0C3B48,#061C26 62%,#030F16)',
  afterHours: 'linear-gradient(150deg,#0A2C36,#05161E 58%,#02090E)',
  twoTowns: 'linear-gradient(180deg,#041019,#020A10 70%,#01060A)',
  storefront: 'linear-gradient(165deg,#0B3441,#07222C 60%,#030F16)',
  oneNamed: 'linear-gradient(185deg,#04121B,#020B11 68%,#010609)',
  theTap: 'linear-gradient(140deg,#0C3B48,#07222C 55%,#030F16)',
  theRecord: 'linear-gradient(120deg,#0E404E,#082733 58%,#041720)',
  threeLit: 'linear-gradient(175deg,#062029,#03131A 62%,#010A0F)',
  reception: 'linear-gradient(155deg,#0B3340,#06202A 58%,#030F16)',
  checked: 'linear-gradient(160deg,#0D3E4C,#07242F 60%,#030F16)',
  theWayIn: 'linear-gradient(190deg,#03111A,#020A10 66%,#010508)',
  theLine: 'linear-gradient(145deg,#0C3B48,#061E28 58%,#030F16)',
  roofRidge: 'linear-gradient(150deg,#0E4050,#08242F 58%,#03121A)',
  theCab: 'linear-gradient(160deg,#0A2C36,#05161E 58%,#02090E)',
  theBench: 'linear-gradient(140deg,#0D3D4B,#07242F 58%,#030F16)',
  inOrder: 'linear-gradient(135deg,#0C3B48,#072430 58%,#031018)',
  firstLight: 'linear-gradient(170deg,#0B3441,#06202A 60%,#030F16)',
};

// ---------------------------------------------------------------------------
// THE FILMS
//
// Seven eight-second clips, image-to-video from the stills above, so the film
// and the still it sits behind are the same frame. Each one is prompted on the
// CAMERA, never the subject - the still already holds the look.
//
// `poster` is the still the clip was seeded from, which means the poster frame
// is the literal first frame. No blank video boxes, ever.
//
// An empty `file` means that clip is not in yet; `film()` returns null and the
// plate stays a still. The reel only ever lists clips that actually exist.
// ---------------------------------------------------------------------------
export interface Film {
  key: string;
  file: string;
  poster: StillKey;
  label: string;
  /**
   * PILLARBOX CROP. Veo only outputs 16:9. A clip seeded from a still that was
   * not 16:9 comes back with black bars burned into the frame - 11.8% a side
   * for a 4:3 seed, 28.1% for a 4:5 one. No CSS object-fit can help, because
   * the bars are picture, not layout.
   *
   * This is the scale that pushes them off the edge. Anything past about 1.4x
   * is not worth doing - the clip goes soft - so those films were dropped and
   * their stills are used instead. Seed 16:9 next time and this is all moot.
   */
  zoom?: number;
  /**
   * Skip this many seconds in. The aerial spends its first second above cloud
   * before the road and the lit town come into frame, so it opens on the part
   * worth seeing. Looping is handled manually because `loop` restarts at zero.
   */
  startAt?: number;
}

export const FILMS: Film[] = [
  {
    key: 'catchment',
    file: 'hf_20260918_210106_dfebb24e-6c5e-4cff-8b8d-1f7ca1ac7220.mp4',
    poster: 'catchment',
    label: 'The catchment at last light',
    zoom: 1.02,
  },
  {
    key: 'threeLit',
    file: 'hf_20260918_210106_e4d11bbd-b784-47f6-b763-7689733d0a70.mp4',
    poster: 'threeLit',
    label: 'Three come up. Being fourth is not a close second.',
    zoom: 1.02,
  },
  {
    key: 'twoTowns',
    file: 'hf_20260918_210106_1ed13eda-2c0e-4a80-ae30-85aa4c04f251.mp4',
    poster: 'twoTowns',
    label: 'Two towns, one road, one of them knows you',
    zoom: 1.02,
    startAt: 1.1,
  },
  {
    key: 'reception',
    file: 'hf_20260918_210038_4f71a72e-eb32-4309-9787-5e5febd72d47.mp4',
    poster: 'reception',
    label: 'After hours, and the enquiry does not wait',
    zoom: 1.32,
  },
  {
    key: 'storefront',
    file: 'hf_20260918_210106_d921cda2-c0c1-42a1-95a8-bd5cb53ac514.mp4',
    poster: 'storefront',
    label: 'What they find when they check you',
    zoom: 1.17,
  },
  // Both seeded from 4:5 stills, so Veo burned a 28% black bar down each side.
  // Clearing that needs a 2.29x blow-up of a 720p clip, which looks worse than
  // no motion at all. `file` is emptied, so film() returns null and every
  // surface falls back to the still - which is clean, full-bleed and sharp.
  // Re-seed these two from 16:9 stills to bring the motion back.
  {
    key: 'theWayIn',
    file: '',
    poster: 'theWayIn',
    label: 'The way in',
  },
  {
    key: 'oneNamed',
    file: '',
    poster: 'oneNamed',
    label: 'Named, or not named',
  },
];

export function film(key: string): string | null {
  const f = FILMS.find((x) => x.key === key);
  if (!f || !f.file) return null;
  return USE_LOCAL_ASSETS ? `${LOCAL}/${f.file}` : `${CDN}/${f.file}`;
}

/** The crop/offset metadata for a clip, for the components that render it. */
export function filmMeta(key: string): { zoom: number; startAt: number } {
  const f = FILMS.find((x) => x.key === key);
  return { zoom: f?.zoom ?? 1, startAt: f?.startAt ?? 0 };
}

export function filmPoster(key: string): string {
  const f = FILMS.find((x) => x.key === key);
  return still((f ? f.poster : 'catchment') as StillKey);
}

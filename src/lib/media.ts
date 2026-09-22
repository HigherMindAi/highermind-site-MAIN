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
// THE RULE ON IMAGERY (v15, replaces "places, never trades"). SHOW THE WORK.
// A buyer has to be able to say what I do from the frames alone: the pin in
// the map, the profile they check, the phone answered at 7:04, every call
// counted. Their customer's world and their own - a kitchen with a leak, a
// truck cab, a service bay, a parts counter - with the device that proves the
// job in the middle of the frame.
//
// No identifiable people, in any frame, ever. Environments and objects only.
// ---------------------------------------------------------------------------

export const USE_LOCAL_ASSETS = false;

const CDN = 'https://d8j0ntlcm91z4.cloudfront.net/user_2vxHkVim9pDZL3FfvXCfzWCkqG7';
const LOCAL = '/media';

/** Every still, by the job that produced it. */
const STILL_FILES: Record<string, string> = {
  // --- v15 "SHOW THE WORK" (22 September 2026) ----------------------------
  // The old rule was "places, never trades", and it hid the job. A buyer
  // watched a town at dusk and could not say what I do. Every frame below
  // shows the work: the map pin, the profile they check, the phone answered
  // at 7:04, the morning count. Environments, devices and hands only - never
  // a face. Paired landscape (16:9) and portrait (9:16) for the hero beats.
  hFound: 'hf_20260922_225009_36dc6628-010a-48ba-9088-ea75c9d41abc.png',
  hFoundV: 'hf_20260922_225008_f6eda328-ff2c-47b1-ba75-94d74ef78d72.png',
  hTrusted: 'hf_20260922_225008_5c25fa9c-2148-48e3-a6cd-c9b5877d9f76.png',
  hTrustedV: 'hf_20260922_225009_3b84bb42-8b65-4dde-bb4f-292e562ff385.png',
  hAnswered: 'hf_20260922_225009_29a06697-79aa-4554-8e22-1b7684a6a3d8.png',
  hAnsweredV: 'hf_20260922_225009_32df8b95-1648-451b-b2c1-82df3561f923.png',
  hMeasured: 'hf_20260922_225009_abfab9a8-5a0f-43ee-800c-a455766db2ca.png',
  hMeasuredV: 'hf_20260922_225009_13f6f962-d66e-44d8-ad17-91b91a244816.png',
  sRead: 'hf_20260922_225009_069c928b-6965-4b78-910b-cacb931f6524.png',
  sPin: 'hf_20260922_225009_80280b1d-ea7c-4061-abc4-ef189fe79aa5.png',
  sFoundation: 'hf_20260922_225009_ba1cbdce-06ed-4339-9f04-32255dbaa240.png',
  sStorefront: 'hf_20260922_225009_10ebd804-56a1-4a28-bc1d-1f7836269b6f.png',
  sTap: 'hf_20260922_225041_a07091e1-681c-4880-8327-330d7cda625a.png',
  vTrades: 'hf_20260922_225041_063cde36-fd36-4567-a815-c1441f08a365.png',
  vAutoParts: 'hf_20260922_225041_cb0fdb2b-ca5b-48a6-a117-7dadf167ff96.png',
  vAutoService: 'hf_20260922_225041_9915440e-4861-4974-aeee-c11a0ce38da2.png',
  vProperty: 'hf_20260922_225041_dde8e56e-7244-40b2-b0a8-1f91de2ec26d.png',
  nine: 'hf_20260922_225041_c58ca38d-a088-433e-9dc2-8354263c9ce7.png',
  aerial: 'hf_20260922_225042_34dbbf40-df74-4f6e-991d-4e018df60fd2.png',
  mainStreet: 'hf_20260922_225041_4b5ed52a-2a74-418a-9944-5165065de359.png',
  office: 'hf_20260922_225041_4daf93c9-62fd-4d3b-a0af-895a223e6b3e.png',
  assistant: 'hf_20260922_225042_2f69bc51-c39f-46ad-a583-b95b08e609c7.png',
  // portrait pairs for the inner-page heroes on phones
  vTradesV: 'hf_20260922_233605_3149815e-663a-46cf-8ae3-1d4f31eba198.png',
  vAutoPartsV: 'hf_20260922_233605_1afbb315-a1ed-4ceb-a6be-fb38e319a634.png',
  vAutoServiceV: 'hf_20260922_233606_bf43460c-07c9-4b46-9639-822a6283991e.png',
  sReadV: 'hf_20260922_233605_35d63768-9bd2-4d6e-8e23-c096b03c2a96.png',

  // --- v12 plates, kept only so an old reference never 404s ---------------
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
  hFound: 'linear-gradient(160deg,#1a1510,#0B1A3A 60%,#050b18)',
  hFoundV: 'linear-gradient(160deg,#1a1510,#0B1A3A 60%,#050b18)',
  hTrusted: 'linear-gradient(150deg,#2a2016,#0F1729 60%,#070b15)',
  hTrustedV: 'linear-gradient(150deg,#2a2016,#0F1729 60%,#070b15)',
  hAnswered: 'linear-gradient(170deg,#0C3B48,#0B1A3A 60%,#030F16)',
  hAnsweredV: 'linear-gradient(170deg,#0C3B48,#0B1A3A 60%,#030F16)',
  hMeasured: 'linear-gradient(140deg,#3a2a14,#0F1729 60%,#070b15)',
  hMeasuredV: 'linear-gradient(140deg,#3a2a14,#0F1729 60%,#070b15)',
  sRead: 'linear-gradient(160deg,#2a1c10,#0B1A3A 62%,#050b18)',
  sPin: 'linear-gradient(150deg,#2b261c,#0B1A3A 62%,#050b18)',
  sFoundation: 'linear-gradient(150deg,#1a2a33,#0B1A3A 60%,#050b18)',
  sStorefront: 'linear-gradient(160deg,#0C2B38,#0B1A3A 60%,#030F16)',
  sTap: 'linear-gradient(150deg,#3a1f14,#0B1A3A 60%,#050b18)',
  vTrades: 'linear-gradient(170deg,#0B2A40,#0B1A3A 60%,#030F16)',
  vAutoParts: 'linear-gradient(160deg,#1b1e23,#0B1A3A 60%,#0a0b0d)',
  vAutoService: 'linear-gradient(160deg,#16202b,#0B1A3A 60%,#050b18)',
  vProperty: 'linear-gradient(160deg,#2a2016,#0B1A3A 60%,#050b18)',
  nine: 'linear-gradient(160deg,#2a1c10,#0B1A3A 62%,#050b18)',
  aerial: 'linear-gradient(180deg,#0B1A3A,#1a2233 60%,#2a1c10)',
  mainStreet: 'linear-gradient(180deg,#0B1A3A,#16202b 60%,#2a1c10)',
  office: 'linear-gradient(160deg,#3a2a14,#0F1729 60%,#070b15)',
  assistant: 'linear-gradient(160deg,#0C2B38,#0B1A3A 60%,#030F16)',
  vTradesV: 'linear-gradient(170deg,#0B2A40,#0B1A3A 60%,#030F16)',
  vAutoPartsV: 'linear-gradient(160deg,#1b1e23,#0B1A3A 60%,#0a0b0d)',
  vAutoServiceV: 'linear-gradient(160deg,#16202b,#0B1A3A 60%,#050b18)',
  sReadV: 'linear-gradient(160deg,#2a1c10,#0B1A3A 62%,#050b18)',
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
  // --- v15, show the work ------------------------------------------------
  { key: 'hFound', file: 'hf_20260922_225523_b347db2d-6aa5-4db1-bd52-3cf1a52e58ad.mp4', poster: 'hFound', label: 'Someone nearby needs help tonight - and finds you on the map' },
  { key: 'hTrusted', file: 'hf_20260922_225503_26aa49c8-81ed-4499-a4ce-049ac7472ba9.mp4', poster: 'hTrusted', label: 'They check you before they call: photos, stars, every review answered' },
  { key: 'hAnswered', file: 'hf_20260922_225522_2c648f5b-a2f2-4ded-ac45-c7e453f8b44e.mp4', poster: 'hAnswered', label: '7:04pm, you are on a job - the call still gets answered' },
  { key: 'hMeasured', file: 'hf_20260922_225523_6e98eab1-df39-40da-b121-83aedc427e4b.mp4', poster: 'hMeasured', label: 'Next morning: every call and form, counted' },
  { key: 'hFoundV', file: 'hf_20260922_225524_4a273fc2-d427-4aa2-b1ad-91dd6f268a75.mp4', poster: 'hFoundV', label: 'Someone nearby needs help tonight - and finds you on the map' },
  { key: 'hTrustedV', file: 'hf_20260922_225503_9b15a1ff-aae9-4af7-8aad-02483e968ecc.mp4', poster: 'hTrustedV', label: 'They check you before they call: photos, stars, every review answered' },
  { key: 'hAnsweredV', file: 'hf_20260922_225524_f663e9c8-9eee-4c52-a8b7-614013aab8c1.mp4', poster: 'hAnsweredV', label: '7:04pm, you are on a job - the call still gets answered' },
  { key: 'hMeasuredV', file: 'hf_20260922_225503_e744323d-e841-4d2f-9812-f1f36539a1fe.mp4', poster: 'hMeasuredV', label: 'Next morning: every call and form, counted' },
  { key: 'sRead', file: 'hf_20260922_225548_54c8edb3-d833-471d-9b27-48d0a89a9eb6.mp4', poster: 'sRead', label: 'The Read - everything you have online, gone through properly' },
  { key: 'sPin', file: 'hf_20260922_225547_f5ccda44-2ded-4098-8a3d-e81f61a093c2.mp4', poster: 'sPin', label: 'The Pin - found, and held' },
  { key: 'sFoundation', file: 'hf_20260922_225547_18a939cf-58dc-4b24-a530-9eec9913a2d7.mp4', poster: 'sFoundation', label: 'The Foundation - found, trusted, answered, measured' },
  { key: 'sStorefront', file: 'hf_20260922_225548_ce85354a-c66e-4cf3-afc3-7acbdd0a581c.mp4', poster: 'sStorefront', label: 'The Storefront - a site that sells' },
  { key: 'sTap', file: 'hf_20260922_225548_0caad73e-6b9a-4660-8d4f-e80128f98492.mp4', poster: 'sTap', label: 'The Tap - turned on last' },
  { key: 'vTrades', file: 'hf_20260922_225547_b67547e9-693a-41dc-a489-9ab2e4174b10.mp4', poster: 'vTrades', label: 'Trades' },
  { key: 'vAutoParts', file: 'hf_20260922_225547_7d0de784-9d24-4830-bf5b-29a990c4baba.mp4', poster: 'vAutoParts', label: 'Auto parts and recyclers' },
  { key: 'vAutoService', file: 'hf_20260922_225611_4d73030d-83b6-4c13-8b50-d183eb2e3451.mp4', poster: 'vAutoService', label: 'Auto service and collision' },
  { key: 'vProperty', file: 'hf_20260922_225611_27ae6bd2-79a5-4b2f-806d-a94827124b97.mp4', poster: 'vProperty', label: 'Property management' },
  { key: 'nine', file: 'hf_20260922_225610_716062d3-bb73-4359-89b2-591f89189d4f.mp4', poster: 'nine', label: 'The nine minutes' },
  { key: 'aerial', file: 'hf_20260922_225611_3070e98a-c4eb-4780-92cc-57b69c3740d2.mp4', poster: 'aerial', label: 'The Headwaters, from above' },
  { key: 'mainStreet', file: 'hf_20260922_225611_0db2fd64-0d12-4126-b06f-ac2f116d7b6f.mp4', poster: 'mainStreet', label: 'Main street' },
  { key: 'office', file: 'hf_20260922_225611_6239706b-826e-4e76-8f3d-b5d16b07b9a6.mp4', poster: 'office', label: 'Where the work gets done' },
  { key: 'assistant', file: 'hf_20260922_225611_c6d71b6b-b456-4e0a-bddb-156e01f6867c.mp4', poster: 'assistant', label: 'Named when they ask an assistant' },

  { key: 'vTradesV', file: 'hf_20260922_233711_50076ebe-3eb4-470e-bb2c-dbcac21b940e.mp4', poster: 'vTradesV', label: 'Trades' },
  { key: 'vAutoPartsV', file: 'hf_20260922_233711_d64247d2-697f-4ea3-8912-4aadcca6515e.mp4', poster: 'vAutoPartsV', label: 'Auto parts and recyclers' },
  { key: 'vAutoServiceV', file: 'hf_20260922_233711_31d6672b-6f2f-436f-aca8-f0b1d8abd9bc.mp4', poster: 'vAutoServiceV', label: 'Auto service and collision' },
  { key: 'sReadV', file: 'hf_20260922_233711_a534c168-d1ff-463a-8125-936b781d0164.mp4', poster: 'sReadV', label: 'The Read' },

  // --- v12 -----------------------------------------------------------------
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

/**
 * The four hero beats, in order. Landscape still + film for wide screens, the
 * portrait pair for phones held upright - a letterboxed 16:9 hero on a phone
 * is the tell that a site was built on a laptop.
 */
export const HERO_BEATS: { img: StillKey; imgV: StillKey }[] = [
  { img: 'hFound', imgV: 'hFoundV' },
  { img: 'hTrusted', imgV: 'hTrustedV' },
  { img: 'hAnswered', imgV: 'hAnsweredV' },
  { img: 'hMeasured', imgV: 'hMeasuredV' },
];

/** The reel: every clip that tells the story, in the order it is told. */
export const REEL: { key: string; caption: string }[] = [
  { key: 'hFound', caption: 'Someone nearby needs help tonight. I get you found on the map.' },
  { key: 'hTrusted', caption: 'They check you before they call. Your photos, your stars, every review answered.' },
  { key: 'hAnswered', caption: '7:04pm and you are on a job. The desk answers and sends you the details.' },
  { key: 'hMeasured', caption: 'Next morning, every call and form is counted. You see exactly what it did.' },
  { key: 'sStorefront', caption: 'Then a site built around how your customers buy.' },
  { key: 'sTap', caption: 'And only then do the ads get turned on.' },
];

/**
 * The reel as single files, for outreach and socials (rendered from the same
 * clips with the captions burned in and an end card on the nine minutes).
 */
export const REEL_FILES = {
  landscape: 'https://d2ol7oe51mr4n9.cloudfront.net/user_2vxHkVim9pDZL3FfvXCfzWCkqG7/48f129b9-6bb1-4af7-b637-40b0ede4c758.mp4',
  portrait: 'https://d2ol7oe51mr4n9.cloudfront.net/user_2vxHkVim9pDZL3FfvXCfzWCkqG7/efd38af0-4a82-41f5-9190-750ec96f7506.mp4',
};

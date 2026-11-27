# Ver.0.9.33.4 QA
26 Node test scripts passed, including simulated completion of all six courses. race.js syntax checked. Browser/WebGL/mobile not tested. Courses are elliptical with differing dimensions, width, curvature and simple themed scenery. No SQL changes.

## 0.9.33.5
27 Node test scripts passed; race.js syntax passed. Garage unlocks, repeat rewards and invalid course tested. Browser, mobile and cloud not tested.

## 0.9.33.6
28 test scripts passed. Countdown, synthesized engine and cue audio, boost overlay, finish overlay, mobile layout. Browser and device testing pending.

## 0.9.34
Invaders: five stages, boss, local best, coins, touch/keyboard. Automated scripts run; browser/device not tested.

## 0.9.34.1
Added six power-ups, drop/pickup, 12-second weapon duration and single-hit shield. Node tests passed; browser/mobile untested.

## 0.9.34.2
- 31 test scripts passed; invader.js syntax checked. Browser/mobile not tested.

## 0.9.34.3
Enemy variants, split children, aimed shots and speed shots. All Node tests passed; browser/mobile not tested.

## 0.9.34.4
10 stages, four bosses, distinct volleys and faster attacks below half HP. 33 Node test scripts passed. Browser/mobile untested.

## 0.9.34.5
34 automated test scripts executed; browser/mobile/cloud not tested. Rewards use existing local save keys. No-damage means no life lost (shield allowed).
Updated legacy count assertions from 26 to 27; all 34 scripts passed on rerun.

## 0.9.34.6
Added synthetic audio, particles, visual combo, stage cues and compact mobile play layout. All 35 test scripts passed; browser/device audio and rendering untested.

## 0.9.35
Adventure basic physics and UI; automated tests run, browser/device not tested.

## 0.9.35.1
Added seven special blocks, four power forms, projectile and spring mechanics. 37 test scripts passed; browser and device playthrough not tested.
Ver.0.9.35.2: 固有能力10種類。自動テスト38本合格。実機未検証。
v0.9.35.3: 39 automated scripts passed; browser/device not tested.

## 0.9.35.4
10 selectable stages, palette and platform height variants, four bosses. All 40 Node tests and adventure syntax check passed. Browser/device and full playthrough untested.

## 0.9.35.5
Adventure records, unique stage rewards, 28th monster. 41 automated scripts passed; browser and mobile untested.

## 0.9.35.6
Adventure effects, audio toggle, mobile layout. All 42 Node test scripts and adventure syntax check passed. Browser/device not tested.

## 0.9.36
- 43 Node test scripts passed, including world-records; world-hub and UI syntax checked.
- Existing save keys reused; badges derived from current records, no new schema or rewards. Invader clear inferred from exclusive monster ownership.
- Browser/mobile visual checks and live cloud sync not performed.

## 0.9.37
- 44 automated test files passed; changed entry modules syntax checked.
- Auto throttle, item cue, touch callout prevention, invader defensive rendering, golf terrain and palette variation, adventure auto progression.
- Chromium smoke test blocked by administrator (local HTTP); actual invader failure not reproduced, mobile and 3D gameplay unverified.

## 0.9.38
45 automated test files passed; fairway syntax checked. Browser/mobile not tested. Six courses have new hazards and/or collidable obstacles.
Ver.0.9.39: 必殺ショット追加。自動テスト46本合格。実機未検証。

## 0.9.40
47 test scripts passed. Local module URLs uniformly versioned to avoid stale shop exports and singleton duplication. Golf spring, boost, warp and attraction pads added. Browser/device testing pending; moving platforms and windmill deferred.

Ver.0.9.41: club series unlocks derived from existing hole records; shot effects expanded. All test scripts passed; browser/device untested.

## 0.9.42
36 holes, 12 per difficulty; 49 test scripts passed. Legacy 9/18 rounds retained. Browser/mobile and course playability not tested.

## 0.9.43
CPU score tournament, 3/6/9 holes. Browser not tested.

## 0.9.43.1
51 test scripts passed (50 existing plus cup record test). Fixed mismatched test module version; added cup win records and result styling. CPU remains score simulation. Browser not tested.

## 0.9.43.2
CPU physics simulation and accelerated 3D replay after player hole; skip; max 12-shot simulation with capped score. Browser not tested. Tests: 52 passed, 0 failed.

## 0.9.43.3
- 53 test scripts passed; fairway syntax checked. Added photo cut-ins, CPU lines, podium and three trophy furniture rewards. Browser/mobile not tested.

## 0.9.43.4
Cinema: slow motion, overhead path replay, photo spectators, synthesized applause, CSS fireworks. Browser/mobile not tested. Tests: 54 pass, 0 fail.

## v0.9.44
50 golf goals, titles, difficulty completion furniture, personal best label. Node tests run; browser/device untested.

## 0.9.44.1
Museum: 56 tests passed, 0 failed. Browser/mobile not tested. CSS exhibit cards, no new save keys.
v0.9.45: town map, six links, four NPCs, three discoveries; tests 57 passed, 0 failed; browser not tested.

## v0.9.46 iPhone touch-first pass
- Added css/iphone.css for touch controls, safe-area insets, input font size, wrapping and landscape layout; viewport-fit=cover.
- Reduced coarse-pointer render pixel ratio for crane and race; pagehide dispatches blur for existing release handlers.
- Updated local module version references from 0945 to 0946.
- 57/57 existing Node tests passed; syntax checks passed for changed JS. No Safari/iPhone or browser visual testing performed. Layout changes are provisional until device testing.

## v0.9.46.1
Crane and fairway stop scheduling animation frames when inactive; resume on visibility/tab. Town lazy initialization. Release input on tab/visibility. Tests: 57 pass, 0 fail. Browser/device and performance measurements not performed.

## 0.9.46.2
Quick launch grid, direct home and collapsible controls help. Automated tests: 57 passed, 0 failed. Browser/iPhone not tested.

## Ver.0.9.46.3
- Mobile rendering budget: 0.85 pixel ratio cap, 30 FPS target for crane/race/tower, antialias disabled on coarse-pointer devices. Golf auto quality uses 0.85 ratio. Physics unchanged.
- 58/58 Node tests passed; changed JS syntax checks passed. Browser/iPhone performance not measured.

## 0.9.46.4
- Added ten 192px WebP sprites for classic 2D golf, with original PNG fallback. Original assets retained.
- Furniture and museum images lazy-loaded; undiscovered museum exhibits do not request image files. Async decoding for collection, votes and visits.
- All 58 existing Node tests and changed module syntax checks passed. No browser or iPhone timing measurements.

## Ver.0.9.47
- Six game balance adjustments; 59 automated test scripts passed.
- No iPhone/browser playtest; no save schema changes.

## 0.9.48
- Town: local clock periods, four wandering residents, three lines per resident, decorative park, cafe/rest interactions, six treasures with existing save key.
- All 60 Node test scripts passed; town.js syntax checked. Browser/iPhone not tested. Cafe is a text interaction, not an interior. No BGM or quests yet.

## 0.9.48.1
Town requests (4), cafe panel, memory book. Test scripts: 61, failure flag: 0. Browser/iPhone untested. BGM not implemented.

## 0.9.48.2
Seasonal map, 24 resident lines, furniture shortcut. All test scripts passed. No browser/device test.

## 0.9.48.3
63 test scripts passed; town syntax checked. Added 10 memories and synthesized optional audio. No browser/device test.

## 0.9.49
64 Node test scripts passed; all JS syntax checked. Added static ID/navigation/versioned module audit. Preserve golf mode on reentry. Browser/iPhone and live Supabase untested.

## 0.9.49.1
65 test scripts passed; tutorial data and navigation targets checked. iPhone/browser interaction not tested. Tutorial preference is device-local, not cloud save.

## Ver.0.9.49.2
- 最終デザインCSS追加、ホーム・ナビ・ガイドの配色と余白調整。
- 自動テスト66本合格、JS構文検査合格。実機・ブラウザ表示未検証。

## Ver.1.0.0
- 66 Node test scripts passed; all JS syntax checked. Release candidate only: browser/iPhone, production Supabase, rights and publication approval pending.

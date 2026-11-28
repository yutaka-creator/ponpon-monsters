# Ver.1.1.49.10 integration QA

Base: Ver.1.1.49.9. Release/cache version updated; no gameplay or storage schema changes intended.

- All 141 tests/*.mjs executed independently with Node v22.16.0 and --experimental-default-type=module: 141 passed, 0 failed.
- All 228 js/**/*.js syntax checks passed.
- Release audit included in the 141 tests.

Manual checks outstanding: browser rendering, iPhone touch controls, Android, external CDN and live Supabase, existing real save migration, full play sessions and reward-per-minute balance.

Manual checklist: back up existing save; open home and each game; play and finish a round; check reward once; reload and check coins, collection, records; verify phone tabs and detective album; check console errors and mobile layout. Do not clear existing storage.

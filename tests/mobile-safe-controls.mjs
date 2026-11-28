import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const css=readFileSync('css/mobile-safe-controls.css','utf8');
const html=readFileSync('index.html','utf8');
assert(html.includes('css/mobile-safe-controls.css?v=114924'));
assert(html.indexOf('css/mobile-safe-controls.css')>html.indexOf('css/detective-focus.css'));
for(const id of ['game','golf','race','tower','invader','adventure','town','escape','climb','pinball']){assert(css.includes(`[data-screen=${id}]`));assert(css.includes(`#${id}`));}
assert(css.includes('24px'));assert(css.includes('18px'));assert(css.includes('env(safe-area-inset-bottom,0px)'));assert(css.includes('padding-bottom:var(--game-safe-bottom)!important'));assert(css.includes('overflow-y:auto!important'));
console.log('mobile safe controls static checks passed');

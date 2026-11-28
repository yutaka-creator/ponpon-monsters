import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const h=readFileSync('index.html','utf8');
assert(h.includes('css/design-110.css?v=11460'));
assert(h.includes('VER. 1.1.46.0'));
assert(h.indexOf('class="welcome-hero"')<h.indexOf('id="quick-play"'));
const css=readFileSync('css/design-110.css','utf8');
assert(css.includes('prefers-reduced-motion'));
console.log('design structure passed');

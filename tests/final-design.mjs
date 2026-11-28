import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const html=readFileSync('index.html','utf8'), css=readFileSync('css/final-design.css','utf8');
assert(html.includes('css/final-design.css?v=11440'));
assert(html.includes('今日は何して遊ぼう？'));
assert(css.includes('prefers-reduced-motion'));
assert(css.includes('max-width:350px'));
assert(css.includes('focus-visible'));
console.log('final design integration passed');

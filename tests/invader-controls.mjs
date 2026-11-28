import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const html=readFileSync('index.html','utf8'), css=readFileSync('css/invader.css','utf8'), js=readFileSync('js/invader.js','utf8');
for(const id of ['iv-selected','iv-selected-photo','iv-selected-name','iv-ability'])assert.equal(html.split(`id="${id}"`).length,2);
assert.match(css,/grid-template-columns:minmax\(0,2fr\) minmax\(64px,1fr\) minmax\(0,2fr\)/);
assert.match(js,/iv-selected-photo'\)\.replaceChildren\(photo\(id\)\)/);
assert.match(js,/picker.addEventListener\('change',preview\)/);

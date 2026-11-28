import assert from 'node:assert/strict';
import {exterior,interiors,decorateBuilding,decorateInterior} from '../js/town-art.js?v=11440';
import {buildings} from '../js/town-data.js?v=11440';
import {facilities} from '../js/town-facilities.js?v=11440';
const element=()=>({dataset:{},style:{setProperty(){}},children:[],replaceChildren(){this.children=[]},append(x){this.children.push(x)}});globalThis.document={createElement:element};
for(const b of buildings){const e=element();decorateBuilding(e,b);assert.equal(e.dataset.building,b.go);assert(e.children[0].textContent.includes(b.name));}for(const f of facilities){const e=element();decorateInterior(e,f);assert.equal(e.dataset.facility,f.id);assert.equal(e.children.length,6);}assert.equal(new Set(Object.values(exterior).map(a=>a[0])).size,6);assert.equal(new Set(Object.values(interiors).map(a=>a[0])).size,6);

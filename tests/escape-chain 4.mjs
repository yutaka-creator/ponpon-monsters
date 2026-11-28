import assert from 'node:assert/strict';import {makeStage,ready} from '../js/escape-model.js?v=11440';
for(let n=1;n<=100;n++){const {pieces,rocks,size}=makeStage(n);assert(pieces.some(p=>!ready({...p,dir:p.safeDir},pieces,rocks,size)),`blocked ${n}`);assert(pieces.length<=size*size);assert.deepEqual(makeStage(n),makeStage(n));}

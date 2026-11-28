import assert from 'node:assert/strict';
import {renderBudget,renderGate,cameraBlend} from '../js/render-budget.js?v=11460';
assert.deepEqual(renderBudget(true,3),{ratio:.75,fps:30,antialias:false});
assert.equal(renderBudget(false,2).ratio,1.5);
const gate=renderGate(30);assert.equal(gate(0),true);assert.equal(gate(16),false);assert.equal(gate(34),true);assert.equal(gate(1),true);
console.log('render budget OK');

for(const hz of [60,90,120]){const g=renderGate(30);let count=0;for(let i=0;i<hz*10;i++)if(g(i*1000/hz))count++;assert(Math.abs(count-300)<=1,`${hz}: ${count}`);}
assert(Math.abs(cameraBlend(.1,1/30)-.19)<1e-9);

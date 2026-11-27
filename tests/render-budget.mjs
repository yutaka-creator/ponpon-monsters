import assert from 'node:assert/strict';
import {renderBudget,renderGate} from '../js/render-budget.js?v=10000';
assert.deepEqual(renderBudget(true,3),{ratio:.85,fps:30,antialias:false});
assert.equal(renderBudget(false,2).ratio,1.5);
const gate=renderGate(30);assert.equal(gate(0),true);assert.equal(gate(16),false);assert.equal(gate(34),true);assert.equal(gate(1),true);
console.log('render budget OK');

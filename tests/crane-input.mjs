import assert from 'node:assert/strict';
import {bindCraneInput} from '../js/crane-input.js?v=11401';
class Target {constructor(){this.events={}}addEventListener(k,f){(this.events[k]??=[]).push(f)}emit(k,e={}){for(const f of this.events[k]??[])f({preventDefault(){},...e})}}
const win=new Target(),doc=new Target(),b=new Target();win.ontouchstart=null;b.dataset={dir:'left'};let nudges=0;
const input=bindCraneInput({buttons:[b],win,doc,canStart:()=>true,nudge:()=>nudges++});
b.emit('touchstart',{changedTouches:[{identifier:1}]});b.emit('pointerdown',{pointerType:'touch',pointerId:2,button:0});assert.equal(nudges,1);b.emit('lostpointercapture',{pointerId:2});win.emit('pointercancel',{pointerId:2});assert(input.has('left'));win.emit('touchend',{changedTouches:[{identifier:1}]});assert(!input.has('left'));
b.emit('pointerdown',{pointerType:'mouse',pointerId:3,button:0});assert(input.has('left'));b.emit('lostpointercapture',{pointerId:3});assert(input.has('left'));win.emit('pointerup',{pointerId:3});assert(!input.has('left'));
b.emit('touchstart',{changedTouches:[{identifier:4}]});doc.emit('ponpon:tab');assert(!input.has('left'));console.log('crane input OK');

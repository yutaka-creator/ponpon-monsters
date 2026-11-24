import {step} from './golf-physics.js';
// 3D版のみカップ判定を緩和。2D版は従来値。
export const rules3d={cupRadius:32,cupSpeed:390};
export const step3d=(b,c,dt,a)=>step(b,c,dt,a,rules3d);

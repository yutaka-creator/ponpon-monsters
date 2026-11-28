// Continuous periodic elevations, in metres. Distance remains horizontal arc length.
export const terrainSpecs=[[2,2],[3,2],[5,3],[6,2],[7,2],[12,2],[10,3],[8,4],[9,2],[14,3]];
export function elevation(distance,c){const [h,n]=terrainSpecs[c.id]||terrainSpecs[0];const t=2*Math.PI*distance/c.length;return h*(1-Math.cos(n*t))/2+2;}
export function slope(distance,c){return (elevation(distance+.5,c)-elevation(distance-.5,c));}

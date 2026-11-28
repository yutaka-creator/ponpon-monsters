export const themes={sky:['スカイブルー','#dcecf5','#b4d3db','#344e60'],cream:['クリーム','#f5ead6','#dec4a2','#53452f'],mint:['ミント','#dceee4','#a8d2bb','#294c3c'],lavender:['ラベンダー','#e9e1f4','#c9c0e6','#493b60'],sakura:['さくら','#f5dfe5','#e8b6c5','#61394a'],night:['ナイト','#34465e','#91a9cc','#ffffff']};
export const defaults={theme:'sky',photo:'none',icon:'pastel'};
export function normalizeStyle(s){return {theme:Object.hasOwn(themes,s?.theme)?s.theme:defaults.theme,photo:/^[0-9]$/.test(String(s?.photo))?String(s.photo):'none',icon:['pastel','white','theme'].includes(s?.icon)?s.icon:'pastel'}}

export function ownedPhotos(counts,profiles){return profiles.flatMap((p,i)=>Number.isSafeInteger(counts[i])&&counts[i]>0?[{id:i,name:p[0],count:counts[i]}]:[]);}
export function filterPhotos(photos,favorites,only){return only?photos.filter(p=>favorites.includes(p.id)):photos;}

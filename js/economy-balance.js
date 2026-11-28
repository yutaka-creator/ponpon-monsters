// Repeatable play rewards; achievement bonuses remain separate.
export function raceCoins(rank){return Number.isInteger(rank)&&rank>=1?rank===1?30:rank<=3?25:15:0;}
export function invaderCoins(score,won){return Math.min(60,Math.floor(Math.max(0,Number.isFinite(score)?score:0)/400))+(won?30:0);}
export function adventureCoins(collected,won){return Math.max(0,Number.isSafeInteger(collected)?collected:0)+(won?30:0);}

const bonus=p=>.15*Math.max(0,p-1);
export const captureRadius=(beat,p)=>.65+.45*beat/100+bonus(p);
export const slipRadius=(b,c,p)=>.55+.32*b/100+.25*c/100+bonus(p);
export const holdRadius=p=>1.35+.55*p;
export const slipDelay=p=>1.65+1.6*p;

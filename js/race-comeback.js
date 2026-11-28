// Continuous, bounded assistance; no teleporting or forced overtakes.
export function comeback(gap,place,progress){const deficit=Math.max(0,Math.min(1,(gap-8)/85));const position=Math.max(0,Math.min(1,(place-2)/6));const late=progress>=2/3?1.25:1;return Math.min(9,deficit*(4+3*position)*late);}

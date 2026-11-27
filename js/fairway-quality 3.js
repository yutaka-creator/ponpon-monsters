export const qualities={low:{ratio:1,fps:30,trees:24,details:25},medium:{ratio:1.25,fps:45,trees:42,details:50},high:{ratio:1.5,fps:60,trees:60,details:85}};
export function qualityFor(value,mobile){return qualities[value]||qualities[mobile?'low':'high'];}

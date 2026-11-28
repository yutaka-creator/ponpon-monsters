export const WORLDS=[
{name:'はじまりの塔',top:'#829b78',bottom:'#30483b',line:'#526b50',motif:'leaf'},
{name:'古代遺跡',top:'#c8ad79',bottom:'#68543d',line:'#92754e',motif:'ruin'},
{name:'氷の塔',top:'#c4eaf4',bottom:'#467b9e',line:'#82b6d0',motif:'ice'},
{name:'お菓子の塔',top:'#f4c8d8',bottom:'#a96e91',line:'#d49ab5',motif:'candy'},
{name:'雲の上の世界',top:'#8dc9ef',bottom:'#597cbd',line:'#b9ddf5',motif:'cloud'},
{name:'宇宙エリア',top:'#383761',bottom:'#15172e',line:'#66658f',motif:'star'},
{name:'流星の回廊',top:'#394d85',bottom:'#171e42',line:'#9ab8ed',motif:'meteor'},
{name:'銀河の庭園',top:'#81528e',bottom:'#25203f',line:'#d7a7e7',motif:'planet'},
{name:'時空の塔',top:'#347c83',bottom:'#172c43',line:'#80e4d6',motif:'portal'},
{name:'果てしない星の海',top:'#49396d',bottom:'#100e29',line:'#e7cf8d',motif:'star'}];
export const WORLD_HEIGHTS=[0,100,200,300,400,500,1000,1500,2000,3000];
export function nextWorldHeight(m){return WORLD_HEIGHTS.find(h=>h>m)??null;}
export function worldAt(m){m=Math.max(0,Number(m)||0);let i=WORLD_HEIGHTS.findIndex(h=>h>m);return WORLDS[i<0?WORLDS.length-1:i-1];}
export function paintWorld(g,W,H,camera,world){let grad=g.createLinearGradient(0,0,W,H);grad.addColorStop(0,world.top);grad.addColorStop(1,world.bottom);g.fillStyle=grad;g.fillRect(0,0,W,H);g.strokeStyle=world.line;g.globalAlpha=.45;for(let y=-(camera%30);y<H;y+=30){g.beginPath();g.moveTo(0,y);g.lineTo(W,y);g.stroke();}g.globalAlpha=.65;for(let i=0;i<15;i++){let x=18+(i*97)% (W-36),y=((i*137+camera*.3)%H+H)%H;g.fillStyle=world.line;g.beginPath();switch(world.motif){case 'leaf':g.ellipse(x,y,5,12,.6,0,Math.PI*2);break;case 'ruin':g.rect(x-9,y-14,18,28);break;case 'ice':g.moveTo(x,y-15);g.lineTo(x+8,y);g.lineTo(x,y+15);g.lineTo(x-8,y);g.closePath();break;case 'candy':g.arc(x,y,9,0,Math.PI*2);break;case 'cloud':g.ellipse(x,y,24,9,0,0,Math.PI*2);break;case 'meteor':g.moveTo(x-13,y+12);g.lineTo(x+5,y-9);g.lineTo(x+9,y-5);g.closePath();break;case 'planet':g.ellipse(x,y,12,6,-.4,0,Math.PI*2);g.moveTo(x+7,y);g.arc(x,y,7,0,Math.PI*2);break;case 'portal':g.ellipse(x,y,4,15,.5,0,Math.PI*2);break;case 'star':g.fillStyle='#fff2c4';g.arc(x,y,1+i%3,0,Math.PI*2);break;}g.fill();}g.globalAlpha=1;g.fillStyle=world.bottom;g.fillRect(0,0,8,H);g.fillRect(W-8,0,8,H);}

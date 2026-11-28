import RAPIER from 'https://cdn.jsdelivr.net/npm/@dimforge/rapier3d-compat@0.17.3/rapier.es.js';
await RAPIER.init();
export const world=new RAPIER.World({x:0,y:-9.81,z:0});
world.timestep=1/120;
function wall(x,y,z,a,b,c){const body=world.createRigidBody(RAPIER.RigidBodyDesc.fixed().setTranslation(x,y,z));world.createCollider(RAPIER.ColliderDesc.cuboid(a,b,c).setFriction(.65),body);}
// Floor split around the open chute: x [-2.65,-1.35], z [1,2.3].
wall(0,.5,-.75,2.9,.1,1.75);wall(.775,.5,1.75,2.125,.1,.75);wall(-2.775,.5,1.75,.125,.1,.75);wall(-2,.5,2.4,.65,.1,.1);
wall(-2.95,2.5,0,.05,2.5,2.5);wall(2.95,2.5,0,.05,2.5,2.5);wall(0,2.5,-2.5,3,2.5,.05);wall(0,2.5,2.5,3,2.5,.05);
export function addPrize(p,i){const b=world.createRigidBody(RAPIER.RigidBodyDesc.dynamic().setTranslation(p.position.x,p.position.y,p.position.z).setLinearDamping(.25).setAngularDamping(.4).setCcdEnabled(true));world.createCollider(RAPIER.ColliderDesc.ball(.47*(p.userData.scale||1)).setDensity(i===3?2.1:i===8?1.9:.7+(i>=29?3:i)*.08).setFriction(i===7?.18:i===8?.85:.45).setRestitution(.25),b);p.userData.body=b;return b;}
export function removePrize(p){world.removeRigidBody(p.userData.body);}
export function sync(p){const b=p.userData.body;p.position.copy(b.translation());p.quaternion.copy(b.rotation());}
export function makeFinger(){const b=world.createRigidBody(RAPIER.RigidBodyDesc.kinematicPositionBased().setTranslation(0,4,0));world.createCollider(RAPIER.ColliderDesc.cuboid(.055,.23,.055).setFriction(.8),b);return b;}

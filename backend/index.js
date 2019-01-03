// const Dragon = require('./dragon.js');
const Generation =  require("./generation");
// const fooey = new Dragon({
//     birthdate: new Date(),
//     nickname: 'fooey'
// });
// const baloo = new Dragon({
//     birthdate: new Date(),
//     nickname: 'baloo',
//     traits: [{
//         traitType: 'backgroundColor',
//         traitValue: 'green'
//     }]
// });

// const mimar =  new Dragon();

// setTimeout(() => {
//     const gooby =  new Dragon();
//     console.log('gooby', gooby);
// }, 3000)

// console.log('fooey', fooey);
// console.log('baloo', baloo);
// console.log('mimar', mimar);
const generation =  new Generation();

console.log('GENERATION', generation);

const gooby =  generation.newDragon();

console.log('gooby', gooby)
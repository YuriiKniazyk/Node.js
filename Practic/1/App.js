const functionAdd1 = require('./Basic/add.js');
const functionMin1 = require('./Basic/min.js');
const functionDiv1 = require('./Basic/div.js');
const functionMulti1 = require('./Basic/multi.js');
const functionSqr1 = require('./Hard/sqr.js');


const add1 = functionAdd1('5',5);
const min1 = functionMin1(5,5);
const div1 = functionDiv1(5,5);
const multi1 = functionMulti1(5,5);
const sqr1 = functionSqr1(7);


console.log('add: ',add1);
console.log('min: ',min1);
console.log('div: ',div1);
console.log('multi: ',multi1);
console.log('sqr: ',sqr1);
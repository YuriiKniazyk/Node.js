let mongoose = require('mongoose');
let countrieModule = require('./models/counrie');

mongoose.connect('mongodb://localhost:27017/Countries_Gun', {useNewUrlParser: true});

async function createDB (){
    await countrieModule.insertMany(
        [
            {
                name: 'Canada',
                people: 37067000,
                sqr: 9984000,
                gun: 'no',
                army: 2000000
            },
            {
                name: 'Germany',
                people: 82887000,
                sqr: 357386,
                gun: 'no',
                army: 5000000
            },
            {
                name: 'France',
                people: 66842000,
                sqr: 551595,
                gun: 'yes',
                army: 10000000
            },
            {
                name: 'Japan',
                people: 127110000,
                sqr: 377972,
                gun: 'no',
                army: 2500000
            },
            {
                name: 'USA',
                people: 327167000,
                sqr: 3796373,
                gun: 'yes',
                army: 25000000
            }
        ]
    );
}
createDB().then();

async function init(){
    let found = await countrieModule 
    .find()
    .findGun()
    .select('name')
    .exec()
    console.log(found);
}
//init().then()

async function People1(){
    let found = await countrieModule 
    .find()
    .where('people')
    .gte(5000000)
    .select('name')
    .select('people')
    .exec()
    console.log(found);
}
//People1().then()

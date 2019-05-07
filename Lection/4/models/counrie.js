let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let countrieSchema = new Schema({
    name: String,
    people: Number,
    sqr: Number,
    gun: Boolean,
    army: Number
});

countrieSchema.query.findGun = function(){
    return this.find({
        gun: 'yes'
    });
};

let countrieModel = mongoose.model('Countrie_Gun', countrieSchema);

module.exports = countrieModel;
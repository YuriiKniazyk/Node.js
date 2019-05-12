let mongoose = require('mongoose');
let userModel = require('../../db/dbSchema');
let config = require('../config');

module.exports = (req, res) => {
    mongoose.connect(config.mongourl, {useNewUrlParser: true}, function (err) {
    if (err) throw err;
                    
        userModel.find({})
        .exec(function(err, users) {
            if (err) throw err;
            if (!users.length) users = {Message: 'ERROR!!! No records DB'};
            res.json(users);
        });
    })    
};
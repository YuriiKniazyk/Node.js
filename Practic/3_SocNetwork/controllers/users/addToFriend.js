const mongoose = require('mongoose');
const userModel = require('../../db/dbSchema');
const config = require('../config');

module.exports =  (req, res) => {
    
    mongoose.connect(config.mongourl, {useNewUrlParser: true}, function (err) {
    if (err) throw err;
                    
        userModel.find({})
        .exec(function(err, users) {
            if (err) throw err;
            if (!users.length) users = {Message: 'ERROR!!! No records DB'};
            
            res.render('user_index', {
                title: 'Hello',
                arrOfUsers: users
            })
        });
    })    
};
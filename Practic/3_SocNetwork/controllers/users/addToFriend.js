const mongoose = require('mongoose');
const userModel = require('../../db/dbSchema');
const friendsModel = require('../../db/friendDBSchema');
const config = require('../config');
const localStorage = require('../localStorage');

module.exports =  (req, res) => {
    
    mongoose.connect(config.mongourl, {useNewUrlParser: true}, function (err) {
    if (err) throw err;
                    
        userModel.find({})
        .exec(function(err, users) {
            if (err) throw err;
            
            if (!users.length) {
                users = {Message: 'ERROR!!! No records DB'};
                res.json(users);
            }
            
            res.render('user_index', {
                title: 'Hello',
                arrOfUsers: users,
            })
        });
    })    
};
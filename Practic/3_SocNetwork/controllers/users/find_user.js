const mongoose = require('mongoose');
const userModel = require('../../db/dbSchema');
const config = require('../config');

module.exports = (req, res) => {
    const {name} = req.query;

    mongoose.connect(config.mongourl, {useNewUrlParser: true}, function (err) {
    if (err) throw err;
                    
        userModel.find({
            name: new RegExp(name, 'i')})
        .exec(function(err, users) {
            if (err) throw err;
            if (!users.length) users = {Message: 'ERROR!!! User is not found!!!'};
            
            res.render('find_people', {
                title: 'Hello',
                arrOfUsers: users
            })
        });
    })    
};
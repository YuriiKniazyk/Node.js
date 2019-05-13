const userModel = require('../db/dbSchema');
const config = require('./config');
const mongoose = require('mongoose');

module.exports = (req, res) => {
    mongoose.connect(config.mongourl, {useNewUrlParser: true}, function (err) {
        if (err) throw err;
                        
        userModel.findOne({})
        .exec(function(err, user) {
            if (err) throw err;
            if (!user) user = {Message: 'ERROR!!! No records DB'};
            
            res.render('logout',{
                myUser: user
            });
        });
    })    
};

        


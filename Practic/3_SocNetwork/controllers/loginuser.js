const config = require('./config');
const localStorage = require('./localStorage');
const mongoose = require('mongoose');
const userModel = require('../db/dbSchema');

module.exports = (req, res) => {
    mongoose.connect(config.mongourl, {useNewUrlParser: true}, function (err) {
        if (err) throw err;
                        
        userModel.findOne({email: req.body.email})
        .exec(function(err, user) {
            if (null) user = {Message: 'ERROR!!! No records DB'};
            
            user = localStorage.getObjItem(config.curentUserKey);
            res.render('logout',{
                myUser: user
            });  
        });
    })    
};

        


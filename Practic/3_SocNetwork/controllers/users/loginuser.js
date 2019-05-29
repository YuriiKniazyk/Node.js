const config = require('../config');
const localStorage = require('../localStorage');
const mongoose = require('mongoose');
const userModel = require('../../db/dbSchema');

module.exports = (req, res) => {
    let name = req.body.name;
    let password = req.body.password;
    console.log(req.body);
    
    mongoose.connect(config.mongourl, {useNewUrlParser: true}, function (err) {
        if (err) throw err;
                        
        userModel.findOne({email: name, password: password})
        .exec(function(err, user) {
            // console.log(user);
            // console.log(name);
            // console.log(password);
            
            if (!user) user = {Message: 'ERROR!!! No records DB'};
            
            user = localStorage.getObjItem(config.curentUserKey);
            res.render('logout',{
                myUser: user
            });  
        });
    })    
};

        

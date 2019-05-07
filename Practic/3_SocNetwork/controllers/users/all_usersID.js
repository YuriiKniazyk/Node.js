let mongoose = require('mongoose');
let userModel = require('../../db/dbSchema');
let config = require('../config');

module.exports = (req, res) => {
    const userId = req.params.id;

    mongoose.connect(config.mongourl, {useNewUrlParser: true}, function (err) {
        if (err) throw err;
                        
            userModel.findById(userId)
            .exec(function(err, user) {
                if (err) throw err;
                if (!user) user = {Message: 'ERROR!!! User is not found!!!'};
                res.json(user);
        });
    })     
};
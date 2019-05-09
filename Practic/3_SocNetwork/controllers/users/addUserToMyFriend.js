let mongoose = require('mongoose');
let friendModel = require('../../db/friendDBSchema');
let config = require('../config');

module.exports = (req, res) => {
    const friendId = req.params.id;
    const userId = config.curentUserId;

    mongoose.connect(config.mongourl, {useNewUrlParser: true}, function (err) {
        if (err) throw err;
                        
        var newFriend = new friendModel({
            _id: new mongoose.Types.ObjectId(),
            User_id: userId,
            Friend_id: friendId
        });
         
        friendModel.create(newFriend);
    })     
    res.sendStatus(200); 
    //res.redirect('/people');
};
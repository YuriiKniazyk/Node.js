const mongoose = require('mongoose');
const friendModel = require('../../db/friendDBSchema');
const config = require('../config');
const localStorage = require('../localStorage');

module.exports = (req, res) => {
    const friendId = req.params.id;
    const userId = localStorage.getObjItem(config.curentUserKey)._id;

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
};
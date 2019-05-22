let mongoose = require('mongoose');
let userModel = require('../../db/dbSchema');
let config = require('../config');

module.exports = (req, res) => {
    const {name, surname, password, email} = req.body;
    const user = {
        name,
        surname,
        password,
        email
    };
    mongoose.connect(config.mongourl, {useNewUrlParser: true}, function (err) {
        if (err) throw err;       
        var newUser = new userModel({
            _id: new mongoose.Types.ObjectId(),
            name: user.name,
            surname: user.surname,
            password: user.password,
            email: user.email
        });

        userModel.findOne({email: req.body.email})
        .exec(function(user) {
            if (user) {user = {Message: 'ERROR!!! No records DB'};} else {
            userModel.create(newUser);}
        });
    })
    res.redirect('/');
};
const mongoose = require('mongoose');
const userModel = require('../../db/dbSchema');
const config = require('../config');

module.exports = async (req, res) => {
    try{ 
        const {name, surname, password, email} = req.body;
        const user = {
            name,
            surname,
            password,
            email
        };
        await mongoose.connect(config.mongourl, {useNewUrlParser: true}, async function (err) {
            if (err) throw err;       
            var newUser = new userModel({
                _id: new mongoose.Types.ObjectId(),
                name: user.name,
                surname: user.surname,
                password: user.password,
                email: user.email
            });
    
            await userModel.findOne({email: req.body.email})
            .exec(function(err, user) {
                   console.log(user);
                   
                if (user) {
                    res.end('404');
                } else {            
                    userModel.create(newUser);
                }
            });
        })
        res.status(201).redirect('/');
    } 
        catch(e){console.log(e);
    }
};
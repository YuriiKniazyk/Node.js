let mongoose = require('mongoose');
let config = require('./config');
let passport = require('passport');
let UserModel = require('../db/dbSchema');
let LocalStrategy = require('passport-local').Strategy;
const localStorage = require('../controllers/localStorage');

passport.serializeUser(function (user, done) {    
    
    localStorage.setObjItem(config.curentUserKey, user);  

    done(null, JSON.stringify(user));  
});

passport.deserializeUser(function (strUser, done) {

    let data = JSON.parse(strUser);
    done(null, data);
    
});

let strategyLocal = new LocalStrategy(
    {
        passwordField: 'password',
        usernameField: 'name',
        passReqToCallback: true
    },
    function (req, username, password, done) {
        console.log('u:',username, 'p:',password);
       
        try { 
            mongoose.connect(config.mongourl, {useNewUrlParser: true}, function () {
                            
                UserModel.findOne(
                    {
                        email: username,
                        password: password
                    }
                )
                .exec(function(err, user) {
                    console.log(user);
                    if (err) throw err;
                    if (!user) user = {Message: 'ERROR!!! User is not found!!!'};
                    
                    if (user) {
                        done(null, user);
                    } else {
                        done(null, false);
                    }
                });
            });
        } catch (e) {
            done(e);
        }
    }
);

passport.use('login', strategyLocal);
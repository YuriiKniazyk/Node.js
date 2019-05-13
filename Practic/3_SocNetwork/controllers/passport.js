let passport = require('passport');
let UserModel = require('../db/dbSchema');
let LocalStrategy = require('passport-local').Strategy;

passport.serializeUser(function (user, done) {
    done(null, user._id);
});

passport.deserializeUser(function (_id, done) {

    let user = UserModel.findById(_id, function(err, user) {
    done(err, user);
    });
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
            let user = UserModel.findOne(
                {
                    username: username,
                    password: password
                }
            );
            if (user) {
                done(null, user);
            } else {
                done(null, false);
            }
        } catch (e) {
            done(e);
        }
    }
);

passport.use('login', strategyLocal);
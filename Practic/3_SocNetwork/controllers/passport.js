let passport = require('passport');
const config = require('./config');
let UserModel = require('../db/dbSchema');
let LocalStrategy = require('passport-local').Strategy;

passport.serializeUser(function (user, done) {
    done(null, user._id);
});

passport.deserializeUser(function (_id, done) {

    UserModel.findById(_id, function(err, user) {
        done(err, user);
    });
});

let s = new LocalStrategy(
    {
        passwordField: 'password',
        usernameField: 'email',
        passReqToCallback: true
    },
    function (username, password, done) {
        console.log('u:',username, 'p:',password);
       
        try {
            let user = UserModel.findOne(
                {
                    username: username
             //       password: password
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


    // function(username, password, done) {
    //     UserModel.findOne({ username: username }, function(err, user) {
    //       if (err) { return done(err); }
    //       if (!user) {
    //         return done(null, false, { message: 'Incorrect username.' });
    //       }
    //       return done(null, user);
    //     });
    // }
);

passport.use('login', s);
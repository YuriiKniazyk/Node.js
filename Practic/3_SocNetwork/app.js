const express = require('express');
const session = require('express-session');
const path = require('path');
const app = express();
const opn = require('opn');
require('./controllers/passport');
const passport = require('passport');
const config = require('./controllers/config');
const createUser = require('./controllers/users/create_user');
const all_users = require('./controllers/users/all_users');
const all_usersID = require('./controllers/users/all_usersID');
const findUser = require('./controllers/users/find_user');
const addTofriend = require('./controllers/users/addToFriend');
const addUserToMyFriend = require('./controllers/users/addUserToMyFriend');
const loginUser = require('./controllers/loginuser');
const error404 = require('./controllers/error404');

const indexPath = path.join(__dirname, 'index.html');
app.use(express.static(path.join(__dirname, 'static')));

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(session({
    secret: 'sw3irjwer6546786a7dasd',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

app.set('views', 'views_pug');
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.sendFile(indexPath);
});

app.post('/user', createUser);
app.post('/login', passport.authenticate('login',{failureRedirect: '/fail', session: true}), function (req, res) {
    res.redirect('/profile');
});
app.get('/users', all_users);
app.get('/user/:id', all_usersID);
app.get('/find-user', findUser);
app.get('/people', addTofriend);
app.post('/friend/:id', addUserToMyFriend);
app.get('/profile', loginUser);
app.get('/logout', function (req, res) {
    req.logout();
    res.redirect('/');
});

app.use('*', error404);

app.listen(config.port, err => {
    if (err) console.log(err);
    console.log('Server listen on port ' + config.port + '...');

    // if (config.itsStartupServer){
    //     opn('http://localhost:' + config.port);
    // }
});
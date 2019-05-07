const express = require('express');
const path = require('path');
const app = express();
const opn = require('opn');
const config = require('./controllers/config');
const db = require('./db/db');
const createUser = require('./controllers/users/create_user');
const all_users = require('./controllers/users/all_users');
const all_usersID = require('./controllers/users/all_usersID');
const findUser = require('./controllers/users/find_user');
const error404 = require('./controllers/error404');

const indexPath = path.join(__dirname, 'index.html');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.sendFile(indexPath)
});

app.post('/user', createUser);
app.get('/users', all_users);
app.get('/user/:id', all_usersID);
app.get('/find-user', findUser);
app.use('*', error404);

app.listen(config.port, err => {
    if (err) console.log(err);
    console.log('Server listen on port ' + config.port + '...');

    if (config.itsStartupServer){
        opn('http://localhost:' + config.port);
    }
});
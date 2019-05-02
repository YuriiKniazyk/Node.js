const express = require('express');
const path = require('path');
const app = express();
const opn = require('opn');
const config = require('./config.js');

const db = [
    {
        id: 1,
        name: 'Yurii',
        surname: 'Kniazyk',
        password: '12345',
        email: 'yurii.kniazyk@gmail.com'
    }
];
const indexPath = path.join(__dirname, 'index.html');

app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.get('/', (req, res) => {
    res.sendFile(indexPath)
});

app.post('/user', (req, res) => {
    const {name, surname, password, email} = req.body;
    const user = {
        id: db.length + 1,
        name,
        surname,
        password,
        email
    };
    db.push(user);
    console.log(db);
    res.redirect('/');
});

app.get('/users', (req, res) => {
    res.json(db);
});

app.get('/user/:id', (req, res) => {
    const userId = req.params.id;

    let user = db.find(user => user.id == userId);
    if (!user) user = {Message: 'ERROR!!! User is not found!!!'};
    res.json(user);
});

app.get('/find-user', (req, res) => {
    const {name} = req.query;
    
    let user = db.filter(user => user.name.includes(name));
    if (!user.length) user = {Message: 'ERROR!!! User is not found!!!'};
    res.json(user);
});

app.use('*', (req, res)=> {
    res.status(404).json({Message: 'Oops....Something went wrong....'});
});

app.listen(config.port, err => {
    if (err) console.log(err);
    console.log('Server listen on port ' + config.port + '...');

    if (config.itsStartupServer){
        opn('http://localhost:' + config.port);
    }
});
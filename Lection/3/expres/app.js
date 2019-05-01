let express = require('express');
let path = require('path');
let fs = require('fs');
let rimram = require('rimraf');
let opn = require('opn');
let config = require('./config.js');

let app = express();

app.use(express.static(path.join(__dirname)));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

//GET -> req.query
//POST -> req.body

app.get('/', function (req, res) {
    res.end('Hi!');
});

app.get('/user-form', function (req, res) {
    res.sendFile(path.join(__dirname, 'user_form.html'));
});

app.get('/create-user', function (req, res) {
    fs.appendFile('./users.txt', '\n\r' + JSON.stringify(req.query), function (err) {
        if (err) throw err;
        res.end('created');
    });;
});

app.get('/pet-form', function (req, res) {
    res.sendFile(path.join(__dirname, 'pet_form.html'));
});

app.post('/create-pet', function (req, res) {
    fs.appendFile('./pet.txt', '\n\r' + JSON.stringify(req.body), function (err) {
        if (err) throw err;
        res.end('created');
    });;
});

app.get('/users', function (req, res) {
    res.sendFile(path.join(__dirname, 'users.txt'));
});

app.get('/pets', function (req, res) {
    res.sendFile(path.join(__dirname, 'pet.txt'));
});

app.get('/delete-form', function (req, res) {
    res.sendFile(path.join(__dirname, 'delete_form.html'));
});

app.post('/delete-file', function (req, res) {
    fs.unlink(path.join(__dirname, req.body.File), function (err) {
        if (err) throw err;
        res.end('deleted');
    });;
});

app.listen(config.port, function () {
    console.log('Listening ' + config.port + '...');

    if (config.itsStartupServer){
        opn('http://localhost:' + config.port);
    }
});
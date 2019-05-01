let http = require('http');
let path = require('path');
let fs = require('fs');
let url = require('url');
let querystring = require('querystring');
var rimraf = require("rimraf");

let server = http.createServer();

function render(page, res) {
    let pathToPage = path.join(__dirname, page);
    fs.createReadStream(pathToPage).pipe(res);
}

server.on('request', function (req, res) {
    let parsedUrl = url.parse(req.url);
    let parsedUrlQuery1 = {};

    let parsedUrlQuery = querystring.parse(parsedUrl.query);
    parsedUrlQuery = JSON.stringify(parsedUrlQuery)

    //post
    req.on('data', function (body) {
        parsedUrlQuery1 = body.toString();
        parsedUrlQuery1 = querystring.parse(parsedUrlQuery1);
    });

    switch (parsedUrl.pathname) {
        case '/': {
            res.end('Hi!');
            break;
        }
        case '/user-form': {
            render('user_form.html', res);
            break;
        }
        case '/create-user': {
            fs.writeFile('./users.txt', parsedUrlQuery, function (err) {
                if (err) throw err;
                res.end('created');
            });
            break;
        }
        case '/pet-form': {
            render('pet_form.html', res);
            break;
        }
        case '/create-pet': {
            fs.writeFile('./pets.txt', JSON.stringify(parsedUrlQuery), function (err) {
                if (err) throw err;
                res.end('created');
            });
            break;
        }
        case '/users': {
            render('users.txt', res);
            break;
        }
        case '/pets': {
            render('pets.txt', res);
            break;
        }
        case '/delete-form': {
            render('delete_form.html', res);
            break;
        }
        case '/delete-file': {
            rimraf(path.join(__dirname, page), function (err) {
                if (err) throw err;
                res.end('deleted');
            });
            break;
        }
        default: {
            res.end('ERROR!!!!!');
        }

    }
});

server.listen('3000', function () {
    console.log('Listening...');
});
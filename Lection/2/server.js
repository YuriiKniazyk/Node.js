const http = require('http');
const fs = require('fs');

let server = http.createServer(function (request, response){
    response.writeHead(200, {
        "Content-Type": 'text/plain'
    });
    
    fs.readFile('./index.html', function(err,data){
        response.write(data.toString());
        response.end();
    });
});

server.listen(3000, function(){
    console.log('Listening....');
});

module.exports = server;
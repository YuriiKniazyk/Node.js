const http = require('http');

function ReadFile(url, dest, cb) {
    var file = fs.createWriteStream(dest);
    var read = fs.createReadStream(url);
    read.pipe(file);
        file.on('finish', function() {
        file.close(cb);
    });
}

ReadFile('./students/java/1800', './students/backup');

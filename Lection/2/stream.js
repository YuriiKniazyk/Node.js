const http = require('https');
const fs = require('fs');
//https://stackoverflow.com/questions/11944932/how-to-download-a-file-with-node-js-without-using-third-party-libraries

function ReadFile(url, dest, cb) {
  var file = fs.createWriteStream(dest);
  var request = http.get(url, function(response) {
    response.pipe(file);
      file.on('finish', function() {
      file.close(cb);
    });
  });
}
module.exports = ReadFile;
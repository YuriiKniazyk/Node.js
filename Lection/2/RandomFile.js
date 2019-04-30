let fs = require('fs');

function CreateRandomFile(count){
    for(let i = 0; i < count; i++){
        let newFile = 'Data/random' + i + '_.txt';
        fs.writeFile(newFile, Math.round(Math.random() * (9999999999 - 0) + 0), function (err){
            if (err) throw err;
            console.log('File is created successfully!', newFile);
        });
    }   
}

function DeleteFile(){
    const dataFolder = './Data/';

    fs.readdir(dataFolder, (err, files) => {
        files.forEach(file => {
            console.log(file);
            fs.readFile(dataFolder + file, function(err, data) {
                console.log(data);

               let numberR =  parseInt(data);
               console.log(numberR);

               if (numberR < 500){
                    fs.unlink(dataFolder + file, function (err) {
                        if (err) throw err;
                        console.log('File deleted!', file);
                    }); 
                }
            });
        });
    });
}

function RenameFile(){
    const dataFolder = './Data/';

    fs.readdir(dataFolder, (err, files) => {
        files.forEach(file => {
            //console.log(file);
            fs.readFile(dataFolder + file, function(err, data) {
              //  console.log(data);

                let numberR =  parseInt(data);
                
                if (numberR < 1000){
                    fs.rename(dataFolder + file, dataFolder + '_rename_' + file, function (err) {
                        if (err) throw err;
                        console.log('Rename complete', file);
                    }); 
                }
                
            });
        });
    });
}

function ResetWord(file){
    const dataFolder = './Data/';

    fs.readdir(dataFolder, (err, files) => {
        files.forEach(file => {
            //console.log(file);
            fs.readFile(dataFolder + file, function(err) {
                //  console.log(data);
                fs.appendFile(dataFolder + file, ' ' + 'The end...', function (err) {
                    if (err) throw err;
                    console.log('ADD complete!');
                });                    
            });
        });
    });
}

module.exports = {
    CreateRandomFile: CreateRandomFile,
    DeleteFile: DeleteFile,
    RenameFile: RenameFile,
    ResetWord: ResetWord
};
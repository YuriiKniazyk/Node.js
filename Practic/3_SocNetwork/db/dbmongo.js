let mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/User_DB', {useNewUrlParser: true});

async function db (){
    await countrieModule.insertMany(
        [
            {
                id,
                name,
                surname,
                password,
                email
            }
        ]
    );
}
module.exports = db;
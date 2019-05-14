const config = require('./config');
const localStorage = require('./localStorage');

module.exports = (req, res) => {
    
    let user = localStorage.getObjItem(config.curentUserKey);
    
    res.render('logout',{
        myUser: user
    });   
};

        


const db = require('../../db/db');

module.exports = (req, res) => {
    const {name} = req.query;
    
    let user = db.filter(user => user.name.includes(name));
    if (!user.length) user = {Message: 'ERROR!!! User is not found!!!'};
    res.json(user);
};
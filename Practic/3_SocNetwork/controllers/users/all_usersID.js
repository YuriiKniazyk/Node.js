const db = require('../../db/db');

module.exports = (req, res) => {
    const userId = req.params.id;

    let user = db.find(user => user.id == userId);
    if (!user) user = {Message: 'ERROR!!! User is not found!!!'};
    res.json(user);
};
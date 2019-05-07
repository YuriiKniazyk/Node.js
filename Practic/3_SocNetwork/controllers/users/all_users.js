const db = require('../../db/db');

module.exports = (req, res) => {
    res.json(db);
};
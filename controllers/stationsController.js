const pool = require('../config/mySqlConnector');



exports.stationsPage = async (req, res, next) => {
    res.render('stations');
};




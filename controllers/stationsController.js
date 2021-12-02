const pool = require('../config/mySqlConnector');



exports.stationsPage = async (req, res, next) => {
    res.render('stations');
};

exports.create = async (req, res, next) => {
    res.render('create-station');
};

exports.delete = async (req, res, next) => {

};

exports.update = async (req, res, next) => {
    res.render('update-station');
};



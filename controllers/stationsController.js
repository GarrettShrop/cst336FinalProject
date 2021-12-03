
const connection = require('../config/mySqlConnector')



exports.stationsPage = async (req, res, next) => {
    connection.connect();
    const sqlString = 'SELECT * FROM stations';
    const result = await connection.query(sqlString);
    res.render('stations', {"stations": result});
    connection.end();
};

exports.createStationPage = async (req, res, next) => {
        res.render('create-station');
};

exports.create = async (req, res, next) => {
    const address = req.body.address;
    const brand = req.body.brand;
    const regular = req.body.regular;
    const super_fuel = req.body.super;
    const premium = req.body.premium;
    const diesel = req.body.diesel;
    connection.connect();

    const post = {address: address, brand: brand, regular: regular, super: super_fuel, premium: premium, diesel: diesel};
    const result = await connection.query('INSERT INTO stations SET ?', post);

    connection.end();

    res.redirect('/');
};

exports.delete = async (req, res, next) => {

};

exports.update = async (req, res, next) => {
    res.render('update-station');
};



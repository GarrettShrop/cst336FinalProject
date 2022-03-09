
const pool = require('../config/mySqlConnector')



exports.stationsPage = async (req, res, next) => {
    try {
        const sqlString = 'SELECT * FROM stations';
        const result = await pool.query(sqlString);
        res.render('stations', {stations: result});

    } catch (error) {
        next(error);
    }
};

exports.stationPage = async (req, res, next) => {
    try {
        /*
        1. get the id from req.params.id
        2. Use that to query the db for the station
        3. Use that and the join table to get all of the associated reviews for that station
        4. render the page and pass that data into the pug {stationdata: station, reviewdata: reviewdattaata}


        second query:
        select reviews.*
        from reviews
        join userstationreviews as jt
        on jt.station.id = ?;


        */
    } catch (error) {

    }
};

exports.createStationPage = async (req, res, next) => {
        res.render('create-station');
};

exports.create = async (req, res, next) => {
    try {
        const address = req.body.address;
        const brand = req.body.brand;
        const regular = req.body.regular;
        const super_fuel = req.body.super;
        const premium = req.body.premium;
        const diesel = req.body.diesel;

        const post = {address: address, brand: brand, regular: regular, super: super_fuel, premium: premium, diesel: diesel, lastUpdated: Date.now()};
        const result = await pool.query('INSERT INTO stations SET ?', post);


        res.redirect('/');
    } catch (error) {
        next(error);
    }
    
};

exports.delete = async (req, res, next) => {
try {
    let station = req.body.stationId;
    // need to change req.session.userID to use JWT as final product
    let sql = `DELETE FROM favorites WHERE userId = ${req.session.userID} AND stationId = ${station}`;

    result = await pool.query(sql);
    res.redirect('/profile');

} catch (error){
    next(error);
}

};

exports.update = async (req, res, next) => {
    res.render('update-station');
};



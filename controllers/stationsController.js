
const pool = require('../config/mySqlConnector')



exports.stationsPage = async (req, res, next) => {
    console.log("inside stations page")
    try {
        const sqlString = 'SELECT * FROM stations';
        const result = await pool.query(sqlString);
        res.json(result);

        // res.render('stations', {stations: result});

    } catch (error) {
        next(error);
    }
};

exports.getStation = async (req, res, next) => {
    try {
        let stationId = req.params.id;
        let sql = `SELECT * FROM stations WHERE id = ${stationId}`;
        let rows = await executeSQL(sql);
        res.json(rows);
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
        if (result !== null){
            res.status(201);
        }else {
            res.status(400).json({error: "Did you enter all the Values in the form?"})
        }


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

exports.favorite = async (req, res, next) => {
    try{
        const station = req.body.stationIdFav;
     
        const user = req.session.userID;
      
        const post = {userId: user, stationId: station};
        const result = await executeSQL('INSERT INTO favorites SET ?', post);
    
        res.redirect('/profile');
    
      }catch(error){
        next(error);
      }
}



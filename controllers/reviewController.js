const pool = require('../config/mySqlConnector');
const review = require('../models/review');

exports.create = async (req, res, next) => {
    // req.body should contain 
    /*
{
    "text": "text",
    "rating": 1,
    "user_id": 123123,
    "station_id": 123132
}
    */


    try {
        let {reviewText, reviewNumber, user_id, station_id} = req.body;
        if (!review.isValidReview(reviewText, reviewNumber)) {
            res.sendStatus(400);
        }
        // let review = await pool.query("insert into reviews values ?", {reviewText: reviewText, .....})
        // grab the id the from inserted row, yeah
        // and then finally insert the new entry into the join table
        // await pool.query("insert into jointableblah values ?", {....})


    } catch (err) {
        next(err);
    }
};

exports.mainPage = async (req, res, next) => {
    res.render('reviews');
};

exports.delete = async (req, res, next) => {

};

exports.edit = async (req, res, next) => {
    res.render('edit-review');
};
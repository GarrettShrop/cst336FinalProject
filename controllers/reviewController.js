const pool = require('../config/mySqlConnector');
const review = require('../models/review');

exports.create = async (req, res, next) => {
    try {
        let {reviewText, reviewNumber} = req.body;
        if (review.isValidReview(reviewText, reviewNumber)) {
            pool.query('add code to insert review into database')
        }


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